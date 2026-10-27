import { createClient } from "@supabase/supabase-js";
import { authFailure } from "../server/auth-errors.js";

const COOKIE_AGE = 60 * 60 * 24 * 30;
export function allowedOrigin(req) {
  const origin = req.headers.origin;
  const host = req.headers.host;
  if (!origin || !host) return false;
  try {
    const u = new URL(origin);
    return (
      u.host === host &&
      (u.protocol === "https:" ||
        (["127.0.0.1", "localhost"].includes(u.hostname) &&
          u.protocol === "http:"))
    );
  } catch {
    return false;
  }
}
function cookies(req) {
  return Object.fromEntries(
    (req.headers.cookie || "").split(";").map((part) => {
      const index = part.indexOf("=");
      return index < 0
        ? ["", ""]
        : [part.slice(0, index).trim(), part.slice(index + 1)];
    }),
  );
}
function setSessionCookies(req, res, session) {
  const local = /^(localhost|127\.0\.0\.1)(:\d+)?$/.test(
    req.headers.host || "",
  );
  const attributes = `Path=/; HttpOnly; SameSite=Lax; Max-Age=${session ? COOKIE_AGE : 0}${local ? "" : "; Secure"}`;
  res.setHeader("Set-Cookie", [
    `ht_access=${session?.access_token || ""}; ${attributes}`,
    `ht_refresh=${session?.refresh_token || ""}; ${attributes}`,
  ]);
}
async function readBody(req) {
  if (req.body && typeof req.body === "object") {
    if (JSON.stringify(req.body).length > 200000)
      throw new Error("Nội dung quá dài.");
    return req.body;
  }
  let body = "";
  for await (const chunk of req) {
    body += chunk.toString();
    if (body.length > 200000) throw new Error("Nội dung quá dài.");
  }
  return JSON.parse(body || "{}");
}
export function createLearningHandler(makeClient = createClient) {
  return async function handler(req, res) {
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("X-Content-Type-Options", "nosniff");
    const send = (status, data) => {
      res.statusCode = status;
      res.end(JSON.stringify(data));
    };
    if (req.method !== "POST") return send(405, { error: "Chỉ hỗ trợ POST." });
    if (!allowedOrigin(req))
      return send(403, { error: "Nguồn yêu cầu không hợp lệ." });
    if (
      !String(req.headers["content-type"] || "").startsWith("application/json")
    )
      return send(415, { error: "Cần dữ liệu JSON." });
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_PUBLISHABLE_KEY)
      return send(503, {
        error: "Tài khoản online đang được cấu hình. Bạn vẫn có thể tự học.",
      });
    const client = makeClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_PUBLISHABLE_KEY,
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
          detectSessionInUrl: false,
        },
      },
    );
    try {
      const body = await readBody(req);
      if (!body || typeof body !== "object" || Array.isArray(body))
        return send(400, { error: "Dữ liệu không hợp lệ." });
      const { action, payload = {} } = body;
      const sendAuthError = (error, authAction) => {
        const { status, ...body } = authFailure(error, authAction);
        return send(status, body);
      };
      if (["login", "signup", "recover", "resend"].includes(action)) {
        const email = String(payload.email || "")
          .trim()
          .toLowerCase();
        const password = String(payload.password || "");
        if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
          return send(400, { error: "Email không hợp lệ." });
        if (
          ["login", "signup"].includes(action) &&
          (password.length < 8 || password.length > 128)
        )
          return send(400, { error: "Mật khẩu cần từ 8 đến 128 ký tự." });
        if (
          action === "signup" &&
          typeof payload.confirmPassword === "string" &&
          password !== payload.confirmPassword
        )
          return send(400, {
            code: "password_mismatch",
            error: "Hai lần nhập mật khẩu chưa khớp.",
          });
        if (action === "recover" || action === "resend") {
          const redirectTo = `${req.headers.origin}/?online=1`;
          const { error } =
            action === "recover"
              ? await client.auth.resetPasswordForEmail(email, { redirectTo })
              : await client.auth.resend({
                  type: "signup",
                  email,
                  options: { emailRedirectTo: redirectTo },
                });
          if (error) return sendAuthError(error, action);
          return send(200, {
            message:
              action === "recover"
                ? "Nếu email có tài khoản, hướng dẫn đặt lại mật khẩu sẽ được gửi đến hộp thư."
                : "Nếu tài khoản đang chờ xác nhận, hệ thống sẽ gửi lại thư. Hãy kiểm tra hộp thư và Spam, rồi mở liên kết trong thư mới nhất.",
          });
        }
        const result =
          action === "login"
            ? await client.auth.signInWithPassword({ email, password })
            : await client.auth.signUp({
                email,
                password,
                options: { emailRedirectTo: `${req.headers.origin}/?online=1` },
              });
        if (result.error) return sendAuthError(result.error, action);
        if (result.data.session)
          setSessionCookies(req, res, result.data.session);
        return send(200, {
          signedIn: Boolean(result.data.session),
          message: result.data.session
            ? "Đăng nhập thành công."
            : "Nếu đây là email mới, hãy mở thư xác nhận để hoàn tất đăng ký. Nếu đã có tài khoản, hãy dùng Đăng nhập hoặc Quên mật khẩu; đăng ký lại không đổi mật khẩu cũ.",
        });
      }
      if (action === "callback") {
        if (
          typeof payload.access_token !== "string" ||
          typeof payload.refresh_token !== "string" ||
          payload.access_token.length > 12000 ||
          payload.refresh_token.length > 3000
        )
          return send(400, { error: "Liên kết xác thực không hợp lệ." });
        const { data, error } = await client.auth.setSession(payload);
        const verified = await client.auth.getUser();
        if (error || verified.error || !verified.data.user)
          return send(401, { error: "Liên kết đã hết hạn hoặc không hợp lệ." });
        setSessionCookies(req, res, data.session);
        return send(200, { ok: true });
      }
      const stored = cookies(req);
      if (!stored.ht_access || !stored.ht_refresh)
        return send(401, { error: "Bạn cần đăng nhập.", signedOut: true });
      const restored = await client.auth.setSession({
        access_token: stored.ht_access,
        refresh_token: stored.ht_refresh,
      });
      if (restored.error || !restored.data.session) {
        setSessionCookies(req, res, null);
        return send(401, {
          error: "Phiên đăng nhập đã hết hạn.",
          signedOut: true,
        });
      }
      const user = await client.auth.getUser();
      if (user.error || !user.data.user) {
        setSessionCookies(req, res, null);
        return send(401, {
          error: "Phiên đăng nhập không hợp lệ.",
          signedOut: true,
        });
      }
      setSessionCookies(req, res, restored.data.session);
      if (action === "logout") {
        await client.auth.signOut({ scope: "local" });
        setSessionCookies(req, res, null);
        return send(200, { ok: true });
      }
      if (action === "password") {
        if (
          typeof payload.password !== "string" ||
          payload.password.length < 8 ||
          payload.password.length > 128
        )
          return send(400, { error: "Mật khẩu cần từ 8 đến 128 ký tự." });
        const { error } = await client.auth.updateUser({
          password: payload.password,
        });
        return error
          ? send(400, { error: "Chưa đổi được mật khẩu. Hãy thử lại." })
          : send(200, { message: "Đã cập nhật mật khẩu." });
      }
      if (
        ![
          "load",
          "profile",
          "join",
          "question",
          "publish",
          "submit",
          "mark",
        ].includes(action)
      )
        return send(400, { error: "Thao tác không hợp lệ." });
      const { data, error } = await client.rpc("hieu_action", {
        action,
        payload,
      });
      if (error)
        return send(error.code === "42501" ? 403 : 400, {
          error: ["P0001", "42501"].includes(error.code)
            ? error.message
            : "Không lưu được dữ liệu. Kiểm tra thông tin và thử lại.",
        });
      return send(200, { data });
    } catch {
      return send(400, {
        error:
          "Không xử lý được yêu cầu. Nội dung vẫn được giữ để bạn thử lại.",
      });
    }
  };
}

export default createLearningHandler();
