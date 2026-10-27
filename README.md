# Hiểu Thật

Bản sửa 2.5.1: nhập thư viện có kiểm tra trùng ở máy chủ, giữ sửa đổi của giáo viên và tiếp tục sau lỗi mạng. Xem [kết quả kiểm thử và giới hạn](docs/QA-2.5.1.md).

Website hỗ trợ học Toán 10: bài học dạng slide, luyện tập theo căn cứ, soạn và giao bài, chatbot **Bạn Hiểu**. Bản 2.5.0 tích hợp toàn bộ 9 chương Toán 10 theo sách Kết nối tri thức với cuộc sống (15 bài học chuyên sâu, 75 slide, 60 câu hỏi tương tác có gợi ý từng bước và lời giải chi tiết, hỗ trợ lọc theo chương và giao bài linh hoạt), đồng thời kế thừa đầy đủ hai không gian làm việc trực tuyến theo vai trò **Học sinh** và **Giáo viên**.

Vào **Đăng nhập / Tạo tài khoản** để mở không gian học tập (Học sinh) hoặc không gian giảng dạy (Giáo viên) với dữ liệu đồng bộ qua Supabase. Phần tự học và lớp mẫu khi chưa đăng nhập vẫn lưu trên thiết bị. Đăng ký công khai còn cần chủ website cấu hình dịch vụ gửi email; Google/Facebook/SMS chưa được bật. Xem [trạng thái triển khai và việc còn lại](docs/HOAN-THIEN-ONLINE.md).

## Chạy trên máy

Cài Node.js 22 trở lên, mở terminal trong thư mục dự án:

```sh
npm ci
npm start
```

Mở **http://127.0.0.1:4174/**. Website dùng ES modules, cần chạy qua máy chủ thay vì mở `index.html` trực tiếp. Chỉ chạy website thì không cần các thư viện phát triển; `npm ci` cài chúng để kiểm tra và định dạng mã.

## Chức năng hiện có

- 15 bài học chuyên sâu qua 9 chương Toán 10 KNTT, 75 slide bài học, hình vẽ SVG trực quan, trình chiếu và điều khiển bàn phím.
- Lọc theo chương và chủ đề; xem công thức, điều kiện áp dụng và mẹo giải nhanh.
- Luyện tập 60 câu hỏi có căn cứ, 3 cấp độ gợi ý lũy tiến, xác minh, vận dụng và lưu tiến độ trên trình duyệt.
- Giáo viên soạn câu trắc nghiệm/tự luận, nhập văn bản, OCR ảnh, lọc theo chủ đề và duyệt câu hỏi trước khi giao bài trực tuyến.
- Giao bài từ câu đã duyệt, chia sẻ bằng liên kết, lưu nháp bài làm và nhận xét trên thiết bị.
- Hồ sơ học sinh/giáo viên trải nghiệm; mã giáo viên được nhập lúc đầu hoặc bổ sung sau.
- Chatbot nổi Bạn Hiểu giữ hội thoại khi chuyển trang, có gợi ý soạn sẵn và tùy chọn gọi Ollama cục bộ.
- Xuất/nhập dữ liệu JSON; giao diện máy tính và điện thoại.

## Ollama

Ollama và `qwen2.5:3b` đã được cài và thử phản hồi thật trên máy phát triển ngày 24/10/2026. Máy khác cần tự cài Ollama và tải model:

```sh
ollama pull qwen2.5:3b
```

Mở Bạn Hiểu → **Kết nối Ollama** → **Kiểm tra model trên máy** → chọn model. Lựa chọn AI được bật cho phiên trang hiện tại; sau khi tải lại cần chọn lại. Xem [hướng dẫn Ollama](dist/OLLAMA.md).

Máy chủ website chỉ lắng nghe `127.0.0.1:4174`, gọi Ollama tại `127.0.0.1:11434`. Model có thể trả lời sai Toán; cần kiểm tra lời giải. Chat trong bài và OCR vẫn dùng luồng hỗ trợ có sẵn. Model Ollama không nằm trong kho mã nguồn.

## Cấu trúc mã nguồn

```text
dist/
  app.js                 Khởi tạo, trạng thái, điều hướng theo vai trò và sự kiện chính
  online.js              Xác thực, phiên đăng nhập, điều hướng vai trò và thao tác lớp online
  online.css             Giao diện không gian Học sinh & Giáo viên online
  views/online-student.js Các màn hình riêng cho tài khoản Học sinh đã đăng nhập
  views/online-teacher.js Các màn hình riêng cho tài khoản Giáo viên đã đăng nhập
  workspace.js           Điều khiển soạn bài, giao bài, hồ sơ, OCR và bản nháp cục bộ
  learning.js            Điểm nhập chung cho nội dung và đánh giá
  content/               Bài học, câu hỏi, câu xác minh, vận dụng, nhãn
  learning/evidence.js   Quy tắc chọn câu xác minh và tổng hợp căn cứ
  views/                 HTML theo màn hình tự học, luyện tập và bản trải nghiệm
  ui/                    Biểu tượng, escape HTML, ngày tháng, hình minh họa
  styles/                CSS nền, điều hướng, bài học, luyện tập, responsive
  styles.css             Nạp CSS theo đúng thứ tự hiển thị
  authoring.js           Kiểm tra đề, tách câu và mã hóa bài chia sẻ
  companion*.js/.css     Chatbot Bạn Hiểu và gợi ý cục bộ
  ollama-client.js       Giao diện chọn model và gửi chat
api/learning.js          API Vercel xác thực phiên và gọi RPC Supabase
db/                      Định nghĩa schema và kiểm thử quyền truy cập dữ liệu
server.mjs               Máy chủ nội bộ phục vụ website
ollama-server.mjs        Adapter API Ollama, kiểm tra origin và giới hạn yêu cầu
verify*.mjs              Bộ kiểm thử chức năng, dữ liệu và trạng thái
scripts/check.mjs        Kiểm tra cú pháp tất cả các file JavaScript
.github/workflows/      Kiểm tra tự động khi push hoặc tạo pull request
```

Xem [hướng dẫn sửa mã](docs/CAU-TRUC-MA.md) để tìm đúng file khi thêm tính năng.

## Kiểm tra và định dạng

```sh
npm run check
npm run lint
npm test
npm run format
```

`?qa=1` trên `127.0.0.1` sử dụng vùng lưu trữ kiểm thử riêng. Thư mục `dist` chứa mã nguồn website có thể sửa trực tiếp; không có bước build.

## Dữ liệu và triển khai

Dữ liệu tự học được giữ trong `localStorage`. Tài khoản online dùng Supabase Auth; hồ sơ, câu hỏi, bài giao, bài nộp và điểm nằm trong cơ sở dữ liệu có kiểm tra quyền. Trắc nghiệm được chấm phía máy chủ; tự luận chờ giáo viên chấm. Không gửi đáp án cho học sinh trước khi nộp. OCR dùng Tesseract.js và cần mạng để tải lần đầu.

Triển khai Vercel từ **thư mục gốc dự án**, gồm `api/learning.js`, `dist/`, package và lockfile. Đặt `SUPABASE_URL` và `SUPABASE_PUBLISHABLE_KEY` trên Vercel (mẫu trong `.env.example`); không đưa `.env.local` lên Git. `db/schema.sql` là định nghĩa dữ liệu, `db/verify-access.sql` kiểm tra quyền bằng giao dịch rollback. Chỉ tải `dist/` sẽ không có tài khoản online. Ollama vẫn cần máy chủ Node trên máy có model; Vercel không gọi được Ollama tại máy cá nhân.
