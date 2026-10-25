# Sửa mã Hiểu Thật

| Muốn thay đổi                                     | File                                                                                         |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Nội dung và thứ tự slide                          | `dist/content/lessons.js`                                                                    |
| Câu hỏi mẫu                                       | `dist/content/questions.js`                                                                  |
| Câu xác minh, câu vận dụng                        | `dist/content/probes.js`, `dist/content/transfer.js`                                         |
| Quy tắc đánh giá căn cứ                           | `dist/learning/evidence.js`                                                                  |
| Tổng quan học sinh, danh sách và trình chiếu bài  | `dist/views/student.js`                                                                      |
| Giao diện luyện tập, kết quả, tiến độ             | `dist/views/practice.js`                                                                     |
| Tổng quan giáo viên, thư viện, cài đặt            | `dist/views/teacher.js`                                                                      |
| Giao diện soạn câu, nhập đề, giao bài, lớp, hồ sơ | `dist/views/workspace.js`                                                                    |
| Lưu nháp, OCR, giao/nộp bài, hồ sơ                | `dist/workspace.js`                                                                          |
| Hình tròn lượng giác và tam giác                  | `dist/ui/visuals.js`                                                                         |
| Biểu tượng và HTML dùng chung                     | `dist/ui/icons.js`, `dist/ui/helpers.js`, `dist/ui/dom.js`                                   |
| Màu nền, kiểu chữ                                 | `dist/styles/base.css`                                                                       |
| Bố cục điện thoại                                 | `dist/styles/responsive.css`, `dist/details.css`, `dist/workspace.css`, `dist/companion.css` |
| Chatbot nổi và phản hồi có sẵn                    | `dist/companion.js`, `dist/companion-replies.js`                                             |
| Kết nối AI trên trình duyệt                       | `dist/ollama-client.js`                                                                      |
| Gọi model và kiểm tra yêu cầu trên máy chủ        | `ollama-server.mjs`                                                                          |

## Luồng hoạt động

`app.js` giữ trạng thái chung và xử lý sự kiện. Các file trong `views` đọc trạng thái hiện tại khi dựng HTML. `workspace.js` quản lý bản nháp, bài giao, hồ sơ và OCR; giao diện của nó nằm trong `views/workspace.js`. Các bộ kiểm thử vẫn nhập nội dung qua `learning.js` để giữ một điểm truy cập ổn định.

`styles.css` nạp các phần CSS theo thứ tự cũ. Khi thêm CSS cần giữ thứ tự các quy tắc responsive và các file bổ sung trong `index.html`.

## Trước khi gửi thay đổi

```sh
npm ci
npm run check
npm run lint
npm test
git status
git add <file-da-sua>
git commit -m "Mô tả thay đổi"
git push origin main
```

Git trên máy cần đăng nhập GitHub khi đẩy bằng terminal. Không ghi token, mật khẩu, dữ liệu xuất của học sinh, `.env`, model hoặc bộ cài Ollama vào kho. `.gitignore` đã loại trừ các file cấu hình bí mật thông dụng, thư viện phát triển và các gói ZIP.

Website đang công khai trên Sites là một bản triển khai riêng. Commit/push lên GitHub không tự sửa website đó.
