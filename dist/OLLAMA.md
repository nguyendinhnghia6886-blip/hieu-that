# Kết nối Bạn Hiểu với Ollama trên Windows

Tích hợp này dành cho bản chạy trên máy bằng Node.js 20 trở lên. Chưa cài Ollama thì vẫn dùng được chế độ gợi ý có sẵn. Không cần khóa API. Chỉ chatbot nổi Bạn Hiểu dùng kết nối này; chat gợi ý trong bài luyện và OCR vẫn giữ cơ chế hiện tại.

## 1. Cài và mở Ollama

Tải bộ cài chính thức: https://ollama.com/download/windows
Hướng dẫn Windows: https://docs.ollama.com/windows

Sau khi cài, mở Ollama từ Start. Mở cửa sổ PowerShell mới để nhận lệnh `ollama`.

## 2. Tải một model

Ví dụ model đa ngôn ngữ có tiếng Việt, tải khoảng 1,9 GB (cần thêm RAM khi chạy):

```powershell
ollama pull qwen2.5:3b
ollama list
```

Thông tin model và giấy phép: https://ollama.com/library/qwen2.5:3b
Tốc độ phụ thuộc RAM/GPU của máy. Có thể dùng model cục bộ khác; website đọc danh sách model đã tải, không tự tải hoặc cài phần mềm. Model cloud không xuất hiện trong lựa chọn này.

## 3. Mở website và bật AI

Trong thư mục dự án:

```powershell
npm start
```

Mở http://127.0.0.1:4174/ → Bạn Hiểu → Kết nối Ollama → Kiểm tra model trên máy → chọn model.
Nhập câu hỏi rồi gửi. Có nút Dừng trả lời; khi lỗi, nội dung đang soạn được giữ để gửi lại. Chọn “Gợi ý có sẵn” để tắt AI. Lựa chọn model được đặt lại khi tải lại trang để tránh tự gửi nội dung khi chưa chọn chế độ.

## 4. Dữ liệu và phạm vi

Trình duyệt gọi `/api/ollama/chat` trên máy chủ Node của website; máy chủ gọi Ollama tại `127.0.0.1:11434`. Chỉ gửi tin nhắn, tối đa 8 tin trước và nội dung bài/câu đang xem, không gửi toàn bộ hồ sơ/lớp. Máy chủ chỉ lắng nghe loopback, kiểm tra Host/Origin và không mở CORS công khai. Không cần đổi OLLAMA_ORIGINS hay mở cổng trên router.

AI trả văn bản, không tự giao bài, chỉnh sửa dữ liệu, chấm điểm chính thức hay nhận ảnh. Kết quả AI có thể sai. Khi đang luyện, hỗ trợ được ghi nhận vào đúng phiên; chuyển câu/trang trong lúc chờ sẽ dừng yêu cầu để tránh gán nhầm phản hồi.

Trang Sites công khai hiện chỉ chứa file tĩnh: tải riêng `dist/` lên đó không mang theo máy chủ Node/Ollama. Muốn học sinh dùng từ xa cần một backend được triển khai, xác thực, giới hạn truy cập và máy chạy model phù hợp. Không công khai trực tiếp cổng Ollama.

## 5. Khi chưa kết nối được

- Kiểm tra Ollama đã chạy và `ollama list` có model.
- Kiểm tra website được mở qua `npm start`, không phải mở file HTML hoặc bản Sites tĩnh.
- Cổng mặc định Ollama là 11434; nếu đổi cổng cần chỉnh cấu hình máy chủ trong `ollama-server.mjs`.
- Lần đầu model có thể nạp chậm. Máy chủ chờ tối đa 120 giây; thử model nhỏ hơn nếu hết thời gian.
- Chạy `npm test` để kiểm tra tích hợp bằng phản hồi giả lập. Điều này không chứng minh model thật đã chạy; hãy hỏi một câu sau khi cài xong để kiểm tra thực tế.

Tài liệu API: https://docs.ollama.com/api/chat và https://docs.ollama.com/api/tags
