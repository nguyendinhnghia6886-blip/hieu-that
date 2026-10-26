# Hiểu Thật 2.3 — trạng thái triển khai

Cập nhật 27/10/2026. Website chính: https://hieu-that.vercel.app/

## Chức năng mới

- Tài khoản email/mật khẩu qua Supabase Auth, khôi phục mật khẩu; chọn vai trò lần đầu.
- Mã giáo viên riêng; học sinh có thể nhập mã sau. Kho câu hỏi riêng, nhập tay, dán văn bản hoặc nhập câu đã soạn/OCR trên máy, duyệt trước khi giao.
- Bài giao giữ nguyên đề lúc giao; sửa kho không làm đổi đề. Chấm trắc nghiệm phía máy chủ, tự luận do giáo viên chấm; điểm thang 10, trọng số mỗi câu bằng nhau.
- Lớp online đồng bộ Supabase. Tiến độ tự học, lớp minh họa và chat có sẵn vẫn lưu trên thiết bị.
- Cookie HttpOnly/Secure, xác thực phiên và kiểm tra quyền từng thao tác; không gửi đáp án trước khi nộp.

## Kết nối

Vercel team hbhb5, project hieu-that, deploy từ gốc repo gồm dist và api/learning.js. Supabase xetivsfprcrnlegtfcua ở Singapore, gói Free trong tổ chức đã được chủ tài khoản chọn. Hai biến SUPABASE_URL và SUPABASE_PUBLISHABLE_KEY được cấu hình cả ba môi trường. Không dùng service-role trong ứng dụng.

Schema nguồn: db/schema.sql. Migration Supabase: online_learning_initial.

## Chủ tài khoản cần hoàn tất

1. Đăng nhập Supabase để kiểm tra Authentication → URL Configuration: Site URL https://hieu-that.vercel.app và Redirect URL https://hieu-that.vercel.app/?online=1. Cấu hình dịch vụ gửi email trong Authentication → Emails → SMTP. Chưa xác nhận SMTP công khai hoạt động; SMTP mặc định chỉ gửi đến địa chỉ thuộc team. Không tắt xác nhận email để né hạn chế. Người dùng đã chọn làm việc này sau.
2. Google/Facebook cần ứng dụng OAuth; SMS cần nhà cung cấp, có thể phát sinh phí. Các dịch vụ này chưa bật, chưa đăng ký trả phí.
3. AI online chưa có nhà cung cấp. Ollama chỉ chạy trên máy có model và server nội bộ; Vercel không gọi được localhost máy cá nhân. Phản hồi soạn sẵn phải được ghi rõ.
4. Supabase advisor cảnh báo bảo vệ mật khẩu rò rỉ chưa bật. Kiểm tra hỗ trợ trong gói hiện tại; không tự nâng cấp trả phí.

Tài liệu email: https://supabase.com/docs/guides/auth/auth-smtp

## Kiểm thử

Đã chạy ba tài khoản tổng hợp qua API Vercel và Supabase thật: giáo viên tạo và giao bài hỗn hợp, học sinh tham gia/nộp, giáo viên chấm tự luận 0,5/1, học sinh nhận 7,5/10. Đã kiểm tra cookie bảo mật, ẩn đáp án, snapshot đề, chống nộp lại, cách ly dữ liệu, ngăn học sinh sửa đề/chấm điểm và đăng xuất. Đã sửa lỗi SQL tên answers gây không lưu được điểm.

Regression db/verify-access.sql dùng giao dịch rollback, có điểm tự luận 0 hợp lệ. Advisor INFO về 5 bảng RLS không policy là chủ ý: bảng trong schema riêng bị khóa truy cập trực tiếp, RPC kiểm tra quyền sở hữu; không tạo policy mở để xóa thông báo.

scripts/prepare-online-qa.mjs tạo dữ liệu tổng hợp và SQL tạo/dọn đúng ID trong .vercel (Git bỏ qua). Áp dụng SQL tạo bằng connector, chạy scripts/verify-online-live.mjs với URL preview, rồi áp dụng SQL dọn. Không commit tài khoản hoặc token. Làm mới quyền preview bằng vercel env pull .env.local --yes; không tắt Deployment Protection.

Chưa nghiệm thu email xác nhận/khôi phục qua hộp thư thật, Google/Facebook/SMS hoặc AI cloud. Không mô tả các phần này là đã hoạt động công khai.
