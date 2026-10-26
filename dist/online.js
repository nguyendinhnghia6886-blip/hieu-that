import { esc } from "./ui/dom.js";
import {
  emptyQuestion,
  validateQuestion,
  parseQuestionText,
} from "./authoring.js";
import { parseWrittenMarks } from "./learning/grading.js";

const letters = ["A", "B", "C", "D"];
const field = (label, html) => `<label class="field">${label}${html}</label>`;
const button = (label, action, extra = "", type = "secondary") =>
  `<button type="button" class="button ${type}" data-online="${action}" ${extra}>${label}</button>`;
const date = (value) =>
  value
    ? new Date(value).toLocaleString("vi-VN", { timeZone: "Asia/Bangkok" })
    : "Không đặt hạn";

export function createOnline({
  state,
  render,
  toast,
  questionBank,
  localQuestions,
}) {
  let snapshot = null,
    signedIn = false,
    busy = false,
    message = "",
    screen = "dashboard",
    authMode = "login";
  let question = emptyQuestion(),
    selectedAssignment = null,
    selectedSubmission = null,
    recovery = false;
  const drafts = new Map();
  const refreshView = () => {
    if (state.view === "online") render();
  };
  async function request(action, payload = {}) {
    const response = await fetch("/api/learning", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, payload }),
      signal: AbortSignal.timeout(30000),
    });
    const body = await response
      .json()
      .catch(() => ({ error: "Máy chủ chưa sẵn sàng. Hãy thử lại sau." }));
    if (!response.ok) {
      if (body.signedOut) {
        signedIn = false;
        snapshot = null;
      }
      throw new Error(body.error || "Kết nối chưa thành công.");
    }
    return body;
  }
  async function load() {
    try {
      const result = await request("load");
      snapshot = result.data;
      signedIn = true;
    } catch (error) {
      if (signedIn || !error.message.includes("đăng nhập")) throw error;
    }
  }
  async function open() {
    state.view = "online";
    state.mobile = false;
    state.presentation = false;
    busy = true;
    message = "";
    render();
    try {
      await load();
    } catch (e) {
      message = e.message;
    } finally {
      busy = false;
      refreshView();
    }
  }
  function authView() {
    const signup = authMode === "signup",
      recover = authMode === "recover";
    return `<section class="card online-auth"><h2>${recover ? "Lấy lại mật khẩu" : signup ? "Tạo tài khoản" : "Chào mừng bạn trở lại"}</h2><p class="muted">Tài khoản lưu bài giao và điểm của bạn giữa các thiết bị.</p><form data-online-form="${authMode}">${field("Email", '<input name="email" type="email" autocomplete="email" maxlength="254" required>')}${recover ? "" : field("Mật khẩu", `<input name="password" type="password" autocomplete="${signup ? "new-password" : "current-password"}" minlength="8" maxlength="128" required><small>Từ 8 ký tự trở lên.</small>`)}<button class="button primary" ${busy ? "disabled" : ""}>${busy ? "Đang xử lý…" : recover ? "Gửi hướng dẫn" : signup ? "Đăng ký bằng email" : "Đăng nhập"}</button></form><div class="online-actions">${button(signup || recover ? "Đã có tài khoản? Đăng nhập" : "Tạo tài khoản mới", signup || recover ? "login-mode" : "signup-mode")}${recover ? "" : button("Quên mật khẩu", "recover-mode", "", "ghost")}</div><p class="small-text muted">Đăng ký đang trong giai đoạn thiết lập: dịch vụ email công khai chưa được xác nhận. Sau khi xác thực, bạn chọn vai trò giáo viên hoặc học sinh. Google, Facebook và SMS chưa được bật.</p></section>`;
  }
  function profileView() {
    return `<section class="card online-auth"><h2>Bạn là giáo viên hay học sinh?</h2><form data-online-form="profile">${field("Tên hiển thị", '<input name="name" maxlength="80" autocomplete="name" required>')}${field("Vai trò", '<select name="role"><option value="student">Học sinh</option><option value="teacher">Giáo viên</option></select>')}<p class="muted">Vai trò được gắn với tài khoản. Học sinh có thể nhập mã giáo viên sau.</p><button class="button primary">Lưu hồ sơ</button></form></section>`;
  }
  function dashboard() {
    const teacher = snapshot.profile.role === "teacher";
    return `<section class="card online-summary"><div><span class="eyebrow">${teacher ? "KHÔNG GIAN GIẢNG DẠY" : "LỚP HỌC CỦA BẠN"}</span><h2>${esc(snapshot.profile.name)}</h2><p>${teacher ? "Mã giáo viên: <strong>" + esc(snapshot.profile.code) + "</strong>" : "Nhập mã để nhận bài từ giáo viên."}</p></div>${teacher ? button("Soạn câu hỏi", "new", "", "primary") : `<form data-online-form="join" class="online-inline">${field("Mã giáo viên", '<input name="code" maxlength="20" placeholder="GV-…" required>')}<button class="button primary">Tham gia</button></form>`}</section><div class="online-actions">${teacher ? button("Kho câu hỏi", "questions") + button("Giao bài mới", "publish") + button("Bài nộp & điểm", "submissions") : button("Bài đã nộp & điểm", "submissions")}</div>
    <section class="card online-section"><h2>${teacher ? "Học sinh đã tham gia" : "Giáo viên đã kết nối"} (${snapshot.members.length})</h2><p>${snapshot.members.map((m) => esc(m.name)).join(" · ") || "Chưa có kết nối."}</p></section>
    <h2>Bài được giao (${snapshot.assignments.length})</h2><div class="online-list">${
      snapshot.assignments
        .map((a) => {
          const sub = snapshot.submissions.find(
            (s) =>
              s.assignment_id === a.id && s.student_id === snapshot.profile.id,
          );
          const expired = a.due && Date.now() > new Date(a.due).getTime();
          return `<article class="card online-section"><div><span class="tag green">${a.questions.length} câu</span><h3>${esc(a.title)}</h3><p class="preserve-lines">${esc(a.instructions)}</p><p class="muted">Hạn: ${date(a.due)}</p></div>${teacher ? button("Xem bài nộp", "submissions", `data-assignment="${a.id}"`) : sub ? button(sub.score === null ? "Đã nộp · Chờ chấm" : `Điểm ${sub.score}/10`, "submission", `data-id="${sub.id}"`) : button(expired ? "Đã quá hạn" : "Làm bài", "task", `data-id="${a.id}" ${expired ? "disabled" : ""}`, "primary")}</article>`;
        })
        .join("") ||
      '<section class="card online-section">Chưa có bài được giao.</section>'
    }</div>`;
  }
  function questionsView() {
    return `<div class="online-actions">${button("Soạn câu mới", "new", "", "primary")}${button("Nhập từ văn bản / ảnh", "import")}${button("Lấy câu mẫu Toán 10", "samples")}${button("Nhập câu đã soạn trên máy", "local")}</div><div class="online-list">${snapshot.questions.map((q) => `<article class="card online-section"><span class="tag ${q.content.status === "approved" ? "green" : "amber"}">${q.content.status === "approved" ? "Đã duyệt" : "Bản nháp"}</span><h3>${esc(q.content.prompt)}</h3><p>${esc(q.content.topic)}</p>${button("Xem & sửa", "edit", `data-id="${q.id}"`)}</article>`).join("") || "<p>Chưa có câu hỏi. Tạo câu đầu tiên hoặc nhập từ kho mẫu.</p>"}</div>`;
  }
  function editorView() {
    return `<section class="card online-section"><h2>${question.id ? "Chỉnh sửa câu hỏi" : "Soạn câu hỏi"}</h2><form data-online-form="question">${field("Chủ đề", `<input name="topic" value="${esc(question.topic)}" maxlength="120" required>`)}${field("Loại câu", `<select name="type"><option value="choice" ${question.type === "choice" ? "selected" : ""}>Trắc nghiệm</option><option value="written" ${question.type === "written" ? "selected" : ""}>Tự luận</option></select>`)}${field("Đề bài", `<textarea name="prompt" maxlength="5000" rows="4" required>${esc(question.prompt)}</textarea>`)}<p class="muted">Với tự luận, để trống phần lựa chọn.</p><div class="field-pair">${letters.map((l, i) => field(`Lựa chọn ${l}`, `<input name="option${i}" maxlength="1000" value="${esc(question.options?.[i] || "")}">`)).join("")}</div>${field("Đáp án trắc nghiệm", `<select name="answer"><option value="">Chọn đáp án đúng</option>${letters.map((l, i) => `<option value="${i}" ${question.answer === i ? "selected" : ""}>${l}</option>`).join("")}</select>`)}${field("Lời giải / hướng dẫn chấm", `<textarea name="explanation" maxlength="5000" rows="4">${esc(question.explanation)}</textarea>`)}${field("Gợi ý trước khi nộp (tùy chọn)", `<textarea name="hint" maxlength="1000">${esc(question.hint || "")}</textarea>`)}${field("Trạng thái", `<select name="status"><option value="draft">Bản nháp</option><option value="approved" ${question.status === "approved" ? "selected" : ""}>Đã kiểm tra đề, đáp án và lời giải</option></select>`)}<button class="button primary">Lưu câu hỏi</button></form></section>`;
  }
  function publishView() {
    const list = snapshot.questions.filter(
      (q) => q.content.status === "approved",
    );
    return `<section class="card online-section"><h2>Giao bài cho học sinh đã tham gia</h2><form data-online-form="publish">${field("Tên bài", '<input name="title" maxlength="160" required>')}${field("Hạn nộp (giờ trên thiết bị, không bắt buộc)", '<input name="due" type="datetime-local">')}${field("Lời nhắn", '<textarea name="instructions" maxlength="2000"></textarea>')}<fieldset><legend>Chọn 1–30 câu đã duyệt</legend>${list.map((q) => `<label class="assignment-pick"><input name="ids" type="checkbox" value="${q.id}"><span>${esc(q.content.prompt)}</span></label>`).join("") || "<p>Hãy duyệt ít nhất một câu hỏi trước.</p>"}</fieldset><p class="muted">Mỗi câu có trọng số bằng nhau. Đề được lưu thành bản riêng; sửa kho câu hỏi sẽ không thay đổi bài đã giao.</p><button class="button primary" ${list.length ? "" : "disabled"}>Giao bài</button></form></section>`;
  }
  function taskView() {
    const a = snapshot.assignments.find((x) => x.id === selectedAssignment);
    if (!a) return "<p>Không tìm thấy bài.</p>";
    const values = drafts.get(a.id) || {};
    return `<h2>${esc(a.title)}</h2><p class="preserve-lines">${esc(a.instructions)}</p><p class="muted">Hạn: ${date(a.due)}. Bản nháp được giữ trong phiên trang này.</p><form data-online-form="submit">${a.questions.map((q, n) => `<section class="card online-section"><h3>${n + 1}. ${esc(q.prompt)}</h3>${q.type === "written" ? field("Bài làm", `<textarea name="${q.id}" maxlength="8000" rows="5" required>${esc(values[q.id] || "")}</textarea>`) : `<fieldset><legend class="screen-reader-only">Đáp án câu ${n + 1}</legend>${q.options.map((o, i) => `<label class="assignment-pick"><input type="radio" name="${q.id}" value="${i}" ${values[q.id] === String(i) ? "checked" : ""} required><span>${letters[i]}. ${esc(o)}</span></label>`).join("")}</fieldset>`}${q.hint ? `<details><summary>Gợi ý giáo viên</summary><p>${esc(q.hint)}</p></details>` : ""}</section>`).join("")}<section class="card online-section"><p>Mỗi bài chỉ nộp một lần. Hãy kiểm tra trước khi nộp.</p><button class="button primary">Nộp bài</button></section></form>`;
  }
  function submissionsView() {
    const list = snapshot.submissions.filter(
      (s) => !selectedAssignment || s.assignment_id === selectedAssignment,
    );
    return `<h2>Bài nộp & điểm</h2><div class="online-list">${list.map((s) => `<article class="card online-section"><h3>${esc(s.title)}</h3><p>${esc(s.student_name)} · ${date(s.created_at)}</p><strong>${s.score === null ? `Chờ chấm ${s.pending} câu tự luận` : `${s.score}/10 điểm`}</strong>${button("Xem bài", "submission", `data-id="${s.id}"`)}</article>`).join("") || "<p>Chưa có bài nộp.</p>"}</div>`;
  }
  function submissionView() {
    const s = snapshot.submissions.find((x) => x.id === selectedSubmission);
    if (!s) return "<p>Không tìm thấy bài nộp.</p>";
    const teacher = snapshot.profile.role === "teacher";
    return `<section class="card online-section"><h2>${esc(s.title)}</h2><p>${esc(s.student_name)} · ${date(s.created_at)}</p><strong class="online-score">${s.score === null ? "Chờ chấm tự luận" : `${s.score}/10`}</strong><form data-online-form="mark"><ol class="submitted-answers">${s.answers.map((a) => `<li><h3>${esc(a.prompt)}</h3><p class="preserve-lines">Bài làm: ${esc(a.type === "choice" ? a.options[a.response] : a.response)}</p><span class="tag ${a.correct ? "green" : "gray"}">${a.type === "written" ? "Tự luận" : a.correct ? "Đúng" : "Chưa đúng"}</span><p class="preserve-lines">${esc(a.explanation)}</p>${a.type === "written" ? (teacher ? field("Điểm câu này (0–1)", `<input type="number" name="mark-${a.questionId}" min="0" max="1" step="0.01" value="${esc(s.marks[a.questionId] ?? "")}" placeholder="Chưa chấm">`) : `<p>Điểm câu: ${esc(s.marks[a.questionId] ?? "Chưa chấm")}/1</p>`) : ""}</li>`).join("")}</ol>${teacher ? field("Nhận xét", `<textarea name="feedback" maxlength="3000" rows="3">${esc(s.feedback)}</textarea>`) + '<button class="button primary">Lưu điểm & nhận xét</button>' : `<h3>Nhận xét giáo viên</h3><p class="preserve-lines">${esc(s.feedback || "Chưa có nhận xét.")}</p>`}</form></section>`;
  }
  function importView() {
    return `<section class="card online-section"><h2>Nhập câu hỏi từ đề có sẵn</h2><p>Ảnh được đọc bằng OCR trong mục Câu hỏi thêm của bản tự học. Sau khi kiểm tra, dùng “Nhập câu đã soạn trên máy” để đưa bản nháp vào tài khoản.</p><form data-online-form="import">${field("Dán nội dung đề", '<textarea name="source" rows="12" maxlength="40000" required placeholder="Câu 1: ...&#10;A. ...&#10;B. ...&#10;C. ...&#10;D. ..."></textarea>')}<p>Phân tách bằng “Câu 1:”, “Câu 2:”… Câu nhập luôn là bản nháp; giáo viên phải chọn đáp án và duyệt.</p><button class="button primary">Tách câu & lưu bản nháp</button></form></section>`;
  }
  function view() {
    const profile = snapshot?.profile;
    return `<div class="online-space"><div class="page-heading"><span class="eyebrow">HIỂU THẬT · TÀI KHOẢN & LỚP HỌC</span><h1>Học cùng nhau, tiến bộ mỗi ngày.</h1><p class="muted">Bài giao, bài nộp và điểm được lưu trực tuyến trong tài khoản.</p></div><div class="online-actions">${profile ? button("Lớp học", "dashboard") + button("Làm mới", "refresh") : ""}${signedIn ? button("Đăng xuất", "logout", "", "ghost") : ""}</div><p id="online-message" role="status" class="${message ? "tip-box" : ""}">${esc(message)}</p>${busy && !snapshot ? '<p role="status">Đang kết nối…</p>' : !signedIn ? authView() : recovery ? `<section class="card online-auth"><h2>Đặt mật khẩu mới</h2><form data-online-form="password">${field("Mật khẩu mới", '<input name="password" type="password" autocomplete="new-password" minlength="8" maxlength="128" required>')}<button class="button primary">Cập nhật</button></form></section>` : !profile ? profileView() : ({ questions: questionsView, editor: editorView, publish: publishView, task: taskView, submissions: submissionsView, submission: submissionView, import: importView }[screen] || dashboard)()}</div>`;
  }
  async function perform(fn) {
    if (busy) return;
    busy = true;
    message = "";
    const controls = [
      ...document.querySelectorAll(".online-space button:not(:disabled)"),
    ];
    controls.forEach((b) => (b.disabled = true));
    let succeeded = false;
    try {
      await fn();
      succeeded = true;
    } catch (e) {
      message =
        e.name === "TimeoutError"
          ? "Máy chủ phản hồi chậm. Dữ liệu vẫn còn, hãy thử lại."
          : e.message;
      const status = document.getElementById("online-message");
      if (status) {
        status.textContent = message;
        status.className = "tip-box";
        status.scrollIntoView({ block: "nearest" });
      }
    } finally {
      busy = false;
      controls.forEach((b) => (b.disabled = false));
      if (succeeded) refreshView();
    }
  }
  document.addEventListener("input", (e) => {
    const form = e.target.closest('[data-online-form="submit"]');
    if (form && selectedAssignment)
      drafts.set(selectedAssignment, Object.fromEntries(new FormData(form)));
  });
  document.addEventListener("submit", (e) => {
    const form = e.target.closest("[data-online-form]");
    if (!form) return;
    e.preventDefault();
    const fd = new FormData(form),
      values = Object.fromEntries(fd),
      action = form.dataset.onlineForm;
    perform(async () => {
      if (["login", "signup", "recover"].includes(action)) {
        const r = await request(action, values);
        message = r.message;
        if (r.signedIn) {
          signedIn = true;
          await load();
          screen = "dashboard";
        }
      } else if (action === "profile") {
        await request("profile", values);
        await load();
      } else if (action === "join") {
        await request("join", values);
        await load();
        message = "Đã kết nối giáo viên.";
      } else if (action === "password") {
        await request("password", values);
        recovery = false;
        message = "Đã đổi mật khẩu.";
        await load();
      } else if (action === "question") {
        const q = {
          ...emptyQuestion(),
          ...values,
          options: letters.map((_, i) => values["option" + i]),
          answer: values.answer === "" ? null : Number(values.answer),
        };
        const error = validateQuestion(q, q.status === "approved");
        if (error) throw new Error(error);
        await request("question", { id: question.id, content: q });
        await load();
        screen = "questions";
        message = "Đã lưu câu hỏi.";
      } else if (action === "publish") {
        const ids = fd.getAll("ids");
        if (!ids.length || ids.length > 30)
          throw new Error("Chọn từ 1 đến 30 câu.");
        await request("publish", {
          ...values,
          ids,
          due: values.due ? new Date(values.due).toISOString() : "",
        });
        await load();
        screen = "dashboard";
        message = "Đã giao bài cho học sinh kết nối với bạn.";
      } else if (action === "submit") {
        const a = snapshot.assignments.find((x) => x.id === selectedAssignment);
        const responses = Object.fromEntries(
          a.questions.map((q) => [
            q.id,
            q.type === "choice" ? Number(values[q.id]) : values[q.id],
          ]),
        );
        const r = await request("submit", { id: a.id, responses });
        selectedSubmission = r.data.id;
        drafts.delete(a.id);
        await load();
        screen = "submission";
        message = "Đã nộp bài thành công.";
      } else if (action === "mark") {
        const s = snapshot.submissions.find((x) => x.id === selectedSubmission);
        const marks = parseWrittenMarks(
          s.answers,
          Object.fromEntries(
            s.answers.map((a) => [
              a.questionId,
              values["mark-" + a.questionId],
            ]),
          ),
        );
        await request("mark", { id: s.id, marks, feedback: values.feedback });
        await load();
        message = "Đã lưu điểm và nhận xét.";
      } else if (action === "import") {
        const parsed = parseQuestionText(values.source);
        if (!parsed.length) throw new Error("Chưa đọc được câu hỏi.");
        for (const q of parsed) await request("question", { content: q });
        await load();
        screen = "questions";
        message = `Đã nhập ${parsed.length} bản nháp. Hãy kiểm tra và duyệt.`;
      }
    });
  });
  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-online]");
    if (!el) return;
    const action = el.dataset.online;
    if (busy) return;
    message = "";
    if (action.endsWith("-mode")) {
      authMode = action.replace("-mode", "");
      refreshView();
      return;
    }
    if (["refresh", "logout", "samples", "local"].includes(action)) {
      perform(async () => {
        if (action === "logout") {
          await request("logout");
          snapshot = null;
          signedIn = false;
          drafts.clear();
          screen = "dashboard";
        } else if (action === "refresh") {
          await load();
          message = "Dữ liệu đã cập nhật.";
        } else {
          const source =
            action === "samples"
              ? questionBank.map((q) => ({
                  ...q,
                  type: "choice",
                  topic: "Toán 10",
                  hint: q.hints?.[0] || "",
                  status: "draft",
                }))
              : localQuestions().map((q) => ({ ...q, status: "draft" }));
          if (!source.length) throw new Error("Chưa có câu đã soạn trên máy.");
          for (const q of source.slice(0, 30))
            await request("question", { content: q });
          await load();
          screen = "questions";
          message = `Đã nhập ${Math.min(source.length, 30)} câu thành bản nháp.`;
        }
      });
      return;
    }
    if (action === "new") {
      question = emptyQuestion();
      screen = "editor";
    } else if (action === "edit") {
      const q = snapshot.questions.find((q) => q.id === el.dataset.id);
      question = { ...q.content, id: q.id };
      screen = "editor";
    } else if (action === "task") {
      selectedAssignment = el.dataset.id;
      screen = "task";
    } else if (action === "submission") {
      selectedSubmission = el.dataset.id;
      screen = "submission";
    } else if (action === "submissions") {
      selectedAssignment = el.dataset.assignment || null;
      screen = "submissions";
    } else screen = action;
    refreshView();
  });
  async function init() {
    const fragment = new URLSearchParams(location.hash.slice(1));
    if (fragment.has("access_token") && fragment.has("refresh_token")) {
      const payload = {
        access_token: fragment.get("access_token"),
        refresh_token: fragment.get("refresh_token"),
      };
      recovery = fragment.get("type") === "recovery";
      history.replaceState(null, "", location.pathname + "?online=1");
      try {
        await request("callback", payload);
        signedIn = true;
      } catch (e) {
        toast(e.message);
      }
    }
    if (new URLSearchParams(location.search).has("online")) await open();
  }
  return { view, open, init };
}
