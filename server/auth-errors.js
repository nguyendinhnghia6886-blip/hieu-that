// Only return actionable, allowlisted messages; never forward provider internals.
export function authFailure(error, action) {
  const code = error?.code;
  const messages = {
    invalid_credentials:
      "Email hoặc mật khẩu không khớp. Nếu đã có tài khoản, hãy dùng Đăng nhập; nếu quên mật khẩu, chọn Quên mật khẩu để đặt lại. Tạo tài khoản lần nữa không đổi mật khẩu cũ.",
    email_not_confirmed:
      "Tài khoản cần xác nhận email. Kiểm tra cả thư rác hoặc chọn Gửi lại email xác nhận.",
    email_address_not_authorized:
      "Website chưa cấu hình gửi email đến địa chỉ này. Tài khoản chưa được xác nhận tạo thành công; hãy liên hệ chủ website để hoàn tất dịch vụ email.",
    over_email_send_rate_limit:
      "Đã đạt giới hạn gửi email. Hãy đợi trước khi yêu cầu thư mới; kiểm tra hộp thư và Spam để dùng thư đã gửi.",
    user_already_exists:
      "Nếu đã đăng ký email này, hãy chọn Đăng nhập hoặc Quên mật khẩu. Đăng ký lại không thay đổi mật khẩu của tài khoản đã có.",
    email_exists:
      "Nếu đã đăng ký email này, hãy chọn Đăng nhập hoặc Quên mật khẩu. Đăng ký lại không thay đổi mật khẩu của tài khoản đã có.",
    weak_password:
      "Mật khẩu chưa đạt yêu cầu bảo mật. Hãy dùng mật khẩu dài hơn, kết hợp chữ, số và ký tự đặc biệt.",
    signup_disabled:
      "Website đang tạm ngừng tạo tài khoản mới. Tài khoản đã có vẫn có thể đăng nhập.",
    email_provider_disabled:
      "Đăng nhập bằng email đang tạm ngừng. Hãy liên hệ chủ website.",
    otp_expired:
      "Liên kết xác nhận đã hết hạn hoặc đã sử dụng. Hãy yêu cầu email mới và mở thư mới nhất.",
  };
  if (messages[code])
    return {
      code,
      error: messages[code],
      status:
        code === "invalid_credentials"
          ? 401
          : code === "over_email_send_rate_limit"
            ? 429
            : 400,
    };
  if (error?.status === 429)
    return {
      code: "rate_limited",
      status: 429,
      error: "Có quá nhiều yêu cầu. Hãy chờ vài phút rồi thử lại.",
    };
  if (
    /error sending (confirmation|recovery|magic link|email)/i.test(
      error?.message || "",
    )
  ) {
    return {
      code: "email_delivery_failed",
      status: 503,
      error:
        "Chưa gửi được email xác nhận hoặc khôi phục. Hãy thử lại sau; nếu vẫn lỗi, chủ website cần kiểm tra dịch vụ gửi thư. Chưa thể xác nhận thao tác đã hoàn tất.",
    };
  }
  const verb =
    {
      signup: "tạo tài khoản",
      recover: "gửi hướng dẫn đặt lại mật khẩu",
      resend: "gửi lại email xác nhận",
      login: "đăng nhập",
    }[action] || "xác thực";
  return {
    code: "auth_unavailable",
    status: 503,
    error: `Hiện chưa ${verb} được do dịch vụ xác thực phản hồi lỗi. Hãy thử lại sau.`,
  };
}
