# Bài học theo từng phần — bản cục bộ

Thay đổi giao diện 15 bài thành trang đọc liên tục, mỗi bài có 8 phần theo thứ tự nội dung hiện có. Không thay định danh bài, dữ liệu câu hỏi hay schema trực tuyến. Trường nội bộ `slides`, `slideProgress`, `visited` được giữ để tương thích dữ liệu cũ; giao diện dùng “phần bài học”.

- Mục lục nhảy tới phần và cập nhật phần đang đọc.
- Mỗi phần giữ lý thuyết, công thức, ví dụ từng bước, nội dung nâng cao, khám phá và lưu ý. Có câu trắc nghiệm củng cố từ nhóm kỹ năng liên quan; riêng Mệnh đề chọn câu theo từng mục cụ thể. Các câu củng cố không tạo điểm, phiên kiểm tra hay chứng nhận nắm vững bài.
- Chỉ nút đánh dấu từng phần cập nhật việc đã học. Mở trang hoặc nhảy tới cuối không tự hoàn thành cả bài. Các đánh dấu cũ được bảo toàn.
- Nhiều biểu đồ cùng một trang có ID và điều khiển riêng. Nét nhấn công thức trong trang đọc dùng gạch chân theo dòng chữ để không bị lệch khi mở các khối nội dung.
- Nút luyện tập cuối bài mở đúng phiên luyện tập và xác minh của chủ đề.

Kiểm tra nền: 85 tests đạt. Sau thay đổi: 87 tests đạt, kiểm tra cú pháp và lint đạt. Bổ sung kiểm tra tất cả phần được render cùng nhau, ID không trùng, quan hệ label-input, câu củng cố đúng chủ đề, và chỉ đánh dấu rõ ràng mới hoàn thành các phần.

Trình duyệt cục bộ: kiểm tra máy tính 1280px và màn hình mô phỏng điện thoại 390px. Rà cả 15 bài ở chiều rộng điện thoại: mỗi bài có 8 phần và 8 câu củng cố, không có tràn ngang tài liệu. Thử nhảy mục lục, chọn/nộp câu củng cố, đánh dấu một phần, đổi góc ở một biểu đồ mà không đổi biểu đồ phần khác, và chuyển từ cuối bài sang luyện tập đúng chủ đề. Đây không phải kiểm thử trên điện thoại vật lý hoặc nghiệm thu lại mọi nghiệp vụ backend.

Đã bỏ chatbot nổi và phần chat trong luyện tập; giữ gợi ý từng bước và cách ghi nhận sử dụng gợi ý. Kiểm tra cuối: 88/88 tests đạt, kiểm tra cú pháp và lint đạt. Người dùng đã duyệt bản cục bộ và yêu cầu lưu lên GitHub.
