# Kiểm tra phiên bản bổ sung — 24/10/2026

## Bản nâng cấp 2.2 — cập nhật 24/10/2026

- Khắc phục lỗi `ReferenceError: crypto is not defined` trong môi trường kiểm thử Node.js bằng `safeUUID()`.
- Bổ sung kiểm tra trạng thái mạng (`navigator.onLine`) và phân loại thông báo lỗi OCR (`empty`, `length`, lỗi mạng/timeout), tự động dừng worker OCR khi rời màn hình nhập đề.
- Bổ sung chức năng Nhập dữ liệu JSON (`importData`) tại màn hình Cài đặt với kiểm tra cấu trúc và lọc dữ liệu an toàn.
- Nâng cấp đường tròn lượng giác tương tác (`#angle-slider`, `0°–180°`) trong bài học slide và sổ tay luyện tập, cập nhật trực tiếp giá trị `sin α`, `cos α` mà không làm mất vị trí cuộn trang.
- Bổ sung bộ chọn mức độ tự tin (`Chắc chắn căn cứ` / `Đang phân vân`) ở bước câu hỏi khởi đầu và ghi nhận vào căn cứ phiên học.
- Bổ sung tính năng chia sẻ bài tập qua đường dẫn URL (`?shared=...`) mã hóa Base64 URL-safe UTF-8 (`encodeSharedAssignment`, `decodeSharedAssignment`) và cấu hình triển khai `vercel.json`.
- Kiểm tra cú pháp (`npm run check`) và bộ kiểm thử tự động (`npm test`) đạt 40/40 bài kiểm tra (0 lỗi).

## Bạn Hiểu — cập nhật 24/10/2026

- Kiểm tra cú pháp đạt; 38/38 kiểm tra Node đạt. Bổ sung kiểm tra giữ bản nháp/hội thoại, giới hạn dữ liệu lưu, nhập IME, Enter/Escape, reset và ghi nhận hỗ trợ đúng phiên. Ví dụ và giải thích chung không làm bỏ qua gợi ý đầu tiên của câu hỏi.
- Đã thử trong trình duyệt: mở/thu gọn, gợi ý theo bài học và giáo viên, giữ tin đang soạn khi chuyển trang, khôi phục lịch sử sau tải lại, tạo cuộc trò chuyện mới, Escape trả focus về nút mở. Không thấy lỗi JavaScript trong log đã đọc.
- Quan sát ở 1280×800, 390×844 và 390×430. Đã sửa tràn mép do thanh cuộn; khung chat không tràn ngang, ô nhập vẫn nằm trong viewport thấp. Chiều cao thấp là mô phỏng, chưa thử bàn phím trên điện thoại thật.
- Khung chat hiện sử dụng nội dung soạn sẵn, chưa kết nối AI. Quy tắc ẩn/inert khi mở hộp thoại được rà soát trong mã; tương tác hộp thoại chưa xác minh hoàn chỉnh trong lượt kiểm thử này.

## Đã thử trực tiếp trong trình duyệt cục bộ

Dùng `http://127.0.0.1:4173/?qa=1`, vùng dữ liệu riêng cho kiểm thử.

- Soạn trắc nghiệm; không cho duyệt khi chưa chọn đáp án; duyệt sau khi xác nhận rà soát.
- Dán hai câu, tách đúng trắc nghiệm và tự luận thành bản nháp.
- Câu chưa duyệt không xuất hiện trong lựa chọn giao bài.
- Giao bài gồm trắc nghiệm và tự luận; học sinh làm bài; tải lại trang rồi mở lại vẫn giữ câu trả lời.
- Nộp bài: trắc nghiệm được kiểm tra, tự luận mang trạng thái chờ giáo viên; giáo viên mở bài nộp và lưu nhận xét.
- Tạo hồ sơ học sinh không nhập mã giáo viên. Nhập mã sau: mã sai có thông báo; mã hợp lệ trên thiết bị kết nối được.
- Khung chat nhận câu hỏi; gợi ý theo bài; câu hỏi ngoài phạm vi được trả lời rõ rằng AI chưa kết nối. Enter gửi được.
- Không thấy lỗi JavaScript trong log trình duyệt ở lần đọc log giữa quá trình kiểm thử.

## Giới hạn xác minh

Kiểm tra cú pháp JavaScript đạt. `npm test`: 22/22 kiểm tra đạt, gồm nội dung Toán, điều kiện duyệt, tách lời giải khỏi đề, lưu riêng bản nháp và xử lý kết quả OCR đến muộn sau khi xóa dữ liệu. Phần OCR trong kiểm tra trạng thái dùng bộ đọc giả lập, không thay cho kiểm tra nhận dạng ảnh thật.

Công cụ trình duyệt bị chính sách truy cập chặn khi tiếp tục phiên, nên chưa thử nhận dạng ảnh thật hoặc kiểm tra viewport điện thoại và desktop đầy đủ. Giao diện đã quan sát ở độ rộng khoảng 700 px. Không dùng đường vòng để vượt chặn.

Các sửa đổi sau lần kiểm thử trình duyệt gồm lưu riêng bản nháp câu hỏi/bài tập/bài giao, bảo vệ văn bản khi OCR đang chạy, phân tách lời giải khỏi đề nhập, dọn nội dung nhập khi reset và cập nhật tên trang. Chúng được kiểm tra bằng mã nguồn và bộ kiểm tra Node, chưa được kiểm tra lại trực tiếp trong trình duyệt.

Đăng nhập nhà cung cấp ngoài, OTP, AI thật và đồng bộ nhiều thiết bị chưa được kết nối; không xem chúng là chức năng đã kiểm thử hoạt động.

## Ollama — 24/10/2026

- `npm run check` đạt; `npm test` 47/47 đạt. API thành công dùng giả lập Ollama; kiểm tra Host/Origin, model chưa tải/cloud, lỗi upstream, lọc lịch sử và giới hạn đầu vào. Kiểm tra phản hồi AI đến muộn sau reset/điều hướng, lỗi giữ bản nháp và hỗ trợ ghi đúng phiên.
- Đã mở mục Kết nối Ollama trong trình duyệt, kiểm tra máy chưa cài và thấy thông báo rõ ràng; chế độ gợi ý có sẵn vẫn được chọn.
- Chưa cài Ollama, chưa tải model và chưa kiểm chứng phản hồi từ model thật. Không cập nhật website công khai; đây là bản Node chạy localhost cổng 4174.

## Kiểm tra model thật sau cài đặt — 24/10/2026

Đã cài Ollama 0.40.10 từ bộ cài có chữ ký hợp lệ Ollama Inc. và tải qwen2.5:3b. Website localhost cổng 4174 đã liệt kê model, chọn model và nhận phản hồi từ API thật trong khung chat. Lượt đầu nạp và trả lời khá chậm. Câu thử cos 120° nhận giải thích sai về góc phần tư; đây chỉ là xác nhận tích hợp hoạt động, không chứng nhận độ chính xác nội dung Toán của model. Cần người học/giáo viên kiểm tra lời giải.

## Tổ chức mã nguồn và GitHub — 25/10/2026

Đã tách nội dung, quy tắc đánh giá, màn hình và CSS thành content/, learning/, views/, ui/, styles/. Giữ điểm nhập learning.js và thứ tự CSS. Đã kiểm tra cú pháp toàn bộ JavaScript, ESLint và 50 kiểm thử (bao gồm 3 kiểm thử các màn hình sau khi tách). Kiểm tra trình duyệt: mở bài học, làm câu khởi đầu và vận dụng, xem kết quả, chuyển giáo viên và mở kho câu hỏi. Dữ liệu người dùng ngoài vùng ?qa=1 không được sửa.
