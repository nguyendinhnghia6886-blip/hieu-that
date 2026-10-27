# Hiểu Thật 2.5.1 — sửa nhập câu hỏi

Ngày 27/10/2026. Bản đầu vào: bc3dd59, 65 test đạt khi chạy trực tiếp. Không phải 9 test suite: đây là 9 file kiểm thử, Node báo suites 0.

## Thay đổi

- Nhập câu mẫu/câu cục bộ dùng mã nguồn ổn định, có namespace samples/local, không chỉ so trùng văn bản đề. Câu cùng đề nhưng khác nguồn/phương án không bị bỏ nhầm.
- Cơ sở dữ liệu thêm source_key và unique index theo teacher_id/source_key. RPC tuần tự hóa thao tác tạo câu của từng giáo viên. Nhập đồng thời hoặc thử lại sau mất phản hồi trả về cùng ID.
- Nhập lại giữ nguyên câu giáo viên đã sửa/duyệt. Bản ghi cũ khớp ID nguồn, loại câu, đề và lựa chọn được gắn khóa khi đi qua RPC, không bị xóa.
- Làm mới kho trước khi nhập, giữ tiến độ đã xác nhận, báo số câu xử lý theo mỗi 10 câu. Có thể bấm nhập lại để tiếp tục khi lỗi.
- Trang đăng nhập chỉ báo giữ nháp khi thật sự có nháp. Tổng quan học sinh không báo hoàn thành hết nếu còn bài quá hạn chưa nộp.
- Bổ sung điều kiện miền đa giác lồi kín, bị chặn, khác rỗng cho slide tối ưu và câu q_sys_4; tránh phát biểu sai rằng mọi bài quy hoạch tuyến tính đều có cả max/min tại đỉnh.

## Kiểm tra

- 67 test tự động đạt sau khi bổ sung 2 ca: phân biệt nguồn/cùng đề, và mất phản hồi sau khi máy chủ đã lưu rồi tiếp tục nhập. Đã chạy check và lint.
- SQL rollback db/verify-import.sql đạt: retry, giữ nội dung đã sửa/duyệt, không gộp câu khác phương án, nhận diện bản nhập cũ, cách ly giáo viên.
- SQL rollback db/verify-access.sql đạt: chấm điểm, chống nộp lại, không lộ đáp án, quyền sở hữu và cách ly tài khoản.
- HTTP trên preview với Vercel/Supabase thật: 8 yêu cầu nhập cùng nguồn chạy đồng thời trả cùng ID; retry giữ sửa đổi; giáo viên khác có bản riêng; học sinh không được nhập câu. Luồng đăng nhập, giao/nộp/chấm bài và đăng xuất đạt.
- Trình duyệt: giáo viên đăng nhập đúng không gian giảng dạy, nhập đủ 60 câu mẫu thành bản nháp, bấm nhập lại không tăng số câu. Kho kiểm thử có 63 câu vì thêm 3 câu QA, không phải nhập ra 63 câu mẫu.
- Trình duyệt: đăng xuất giáo viên rồi đăng nhập học sinh đúng menu; mở bài Giá trị lượng giác, bấm Slide 5 rồi Luyện tập ngay mở đúng câu hỏi và URL #practice; phím phải không chuyển slide ngầm. Mở điểm 7,5/10, chi tiết bài nộp, tải lại trang vẫn mở đúng bài qua hash có ID.
- Migration Supabase: question_import_identity. db/schema.sql là định nghĩa đầy đủ; db/patch-question-import.sql là bản cập nhật cộng thêm cho dự án hiện có.

## Giới hạn

Không xóa các bản trùng đã có từ trước. Phiên bản này sửa cơ chế nhập từ nút câu mẫu/câu cục bộ; không tự gộp câu nhập tay hoặc dán văn bản vì chúng có thể là các câu riêng hợp lệ. Nếu nhiều bản cũ đã bị sửa mất ID nguồn, không đoán chúng là cùng một câu.

Nháp vẫn chỉ giữ trong RAM của tab. Nội dung Toán hiện là bộ tổng quan 15 chủ đề/75 slide/60 câu, không phải đã số hóa đầy đủ 471 trang PDF. Không khẳng định đã nghiệm thu mọi thiết bị di động hoặc mọi công thức chỉ dựa vào test tự động.

Advisor performance không có finding. Advisor security vẫn có thông báo cũ về 5 bảng private bị khóa trực tiếp (RLS không policy) và cảnh báo chưa bật [bảo vệ mật khẩu rò rỉ](https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection). Bản sửa không thay đổi cấu hình Auth hoặc nâng gói.
