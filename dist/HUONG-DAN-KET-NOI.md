# Hiểu Thật — Hướng dẫn kết nối tài khoản, dữ liệu và AI

Cập nhật: 23/10/2026. Tài liệu dành cho chủ website và người triển khai.

## 1. Bạn dùng được gì ngay?

- Chọn vai trò học sinh hoặc giáo viên; lưu tên hiển thị thành hồ sơ trải nghiệm.
- Giáo viên có mã riêng trên trình duyệt. Học sinh có thể bỏ trống mã khi tạo hồ sơ và nhập sau ở “Lớp học của tôi”.
- Giáo viên nhập câu hỏi trắc nghiệm/tự luận, dán nhiều câu hoặc chọn/chụp ảnh.
- OCR đọc chữ trong ảnh ngay trên thiết bị. Kết quả được sửa và tách thành bản nháp. Đây chưa phải AI tạo đề.
- Duyệt câu hỏi, chọn câu để giao bài, học sinh làm/nộp bài, giáo viên viết nhận xét.
- Chat trong phần luyện tập có gợi ý soạn sẵn theo câu đang làm. Câu hỏi ngoài phạm vi được thông báo rõ là chưa có AI trả lời.

Tất cả hồ sơ, câu hỏi, bài giao và bài nộp hiện dùng chung kho cục bộ của trình duyệt. Chuyển nút vai trò chỉ để trải nghiệm; không tạo phân quyền bảo mật. Ảnh nguồn không được lưu cùng dữ liệu. Có thể xuất JSON ở Cài đặt để sao lưu. Xóa dữ liệu trình duyệt sẽ làm mất dữ liệu cục bộ; bản xuất JSON hiện là bản sao lưu để đọc, chưa có chức năng nhập lại tự động.

Google/Facebook/email/OTP chưa hoạt động. Chưa có API máy chủ, cơ sở dữ liệu nhiều người hoặc dịch vụ AI. Không chỉ dán một API key là bật được mọi chức năng.

## 2. Chọn phương án triển khai trước

Trang hiện tại được lưu trữ bởi Sites và giữ cơ chế quyền truy cập do Sites quản lý. Màn hình tài khoản trong ứng dụng không thay thế cổng đăng nhập đó.

- **Tiếp tục trên Sites:** dùng danh tính đã xác thực do nền tảng cung cấp khi triển khai phần máy chủ; bổ sung hồ sơ vai trò, mã giáo viên, D1/R2 và AI qua máy chủ theo khả năng được Sites hỗ trợ. Không tự tạo cơ chế phiên đăng nhập hoặc OAuth thay thế trong trang tĩnh này. Kiểm tra khả năng hỗ trợ nhà cung cấp ngoài của nền tảng trước khi bật các nút Google/Facebook/OTP.
- **Cần đủ Google, Facebook, số điện thoại và email:** dùng bản triển khai tương thích với dịch vụ xác thực ngoài, ví dụ Firebase Authentication + máy chủ xác minh token + cơ sở dữ liệu. Có thể giữ thiết kế và các luồng đã làm, nhưng cần triển khai lớp xác thực và dữ liệu bên dưới. Không thay cơ chế quyền truy cập của Sites một cách âm thầm.

Các bước Firebase dưới đây là phương án cho bản triển khai hỗ trợ xác thực ngoài. Chưa tạo dự án, tài khoản nhà cung cấp hay đăng ký dịch vụ trả phí thay bạn.

## 3. Chuẩn bị Firebase Authentication

1. Vào [Firebase Console](https://console.firebase.google.com/), tạo một project và đăng ký ứng dụng Web. Giữ lại project ID và cấu hình Web công khai. Đừng gửi mật khẩu, OTP, khóa tài khoản dịch vụ hoặc khóa bí mật vào chat.
2. Mở Authentication và bật từng phương thức cần dùng. Bắt đầu bằng Email/Password và Google để kiểm tra luồng đơn giản trước. Thiết lập email xác minh, đặt lại mật khẩu và thông báo lỗi đăng nhập.
3. Thêm tên miền triển khai vào danh sách Authorized domains và cấu hình callback/redirect chính xác theo tài liệu nhà cung cấp.
4. Với Facebook: tạo ứng dụng trong Meta for Developers, cấu hình Facebook Login, nhập App ID và App Secret vào phần quản trị nhà cung cấp phù hợp. Thiết lập redirect URI do Firebase đưa ra. App Secret tuyệt đối không nằm trong mã HTML/JS công khai.
5. Với số điện thoại: thiết lập reCAPTCHA theo hướng dẫn, vùng SMS cho phép và số điện thoại thử nghiệm. Kiểm tra điều kiện dịch vụ, hạn mức và chi phí hiện tại trước khi dùng SMS thật. Không dùng mã OTP giả để tạo tài khoản thật.
6. Người triển khai tích hợp Firebase SDK theo [hướng dẫn khởi đầu](https://firebase.google.com/docs/auth/web/start), xử lý đăng nhập/thất bại/hủy, đăng xuất và khôi phục phiên. Máy chủ phải xác minh token trước mọi thao tác với dữ liệu.

Tài liệu chính thức: [Thiết lập Web](https://firebase.google.com/docs/web/setup), [Google](https://firebase.google.com/docs/auth/web/google-signin), [Facebook](https://firebase.google.com/docs/auth/web/facebook-login), [Điện thoại](https://firebase.google.com/docs/auth/web/phone-auth), [Xác minh ID token](https://firebase.google.com/docs/auth/admin/verify-id-tokens).

## 4. Hồ sơ và mã giáo viên khi dùng thật

Sau khi xác thực thành công, người dùng mới trả lời “Bạn là giáo viên hay học sinh?”. Tài khoản giáo viên đăng ký bình thường, không cần mã của giáo viên khác. Mã giới thiệu của học sinh là tùy chọn.

Máy chủ cần lưu các nhóm dữ liệu sau:

| Dữ liệu       | Nội dung chính                                                        |
| ------------- | --------------------------------------------------------------------- |
| profiles      | user ID được xác thực, tên hiển thị, vai trò                          |
| teacher_codes | mã duy nhất, giáo viên sở hữu, trạng thái                             |
| memberships   | giáo viên/lớp và học sinh đã tham gia                                 |
| questions     | người sở hữu, loại câu, đề, lựa chọn, đáp án, lời giải, nháp/đã duyệt |
| assignments   | lớp nhận, tên bài, hạn, lời nhắn, bản sao nội dung câu đã giao        |
| submissions   | bài giao, học sinh, câu trả lời, thời điểm nộp, kết quả và nhận xét   |

Mã giáo viên phải được tạo duy nhất trên máy chủ. Mã là cách tìm giáo viên/lớp, không phải mật khẩu hay quyền truy cập toàn bộ hồ sơ của người khác. Kiểm tra mã sai, nhập sau, đã tham gia và giới hạn số lần thử. Quyền giáo viên chỉ áp dụng cho lớp/câu hỏi của họ; học sinh chỉ xem dữ liệu được giao cho mình. Không tin giá trị `role` hoặc đáp án từ trình duyệt.

Khi giao bài, máy chủ chụp một phiên bản câu hỏi. Sửa kho câu hỏi không thay đề đã giao. Trước khi học sinh nộp, không gửi đáp án và hướng dẫn chấm trong payload bài tập. Trắc nghiệm chấm trên máy chủ; tự luận chờ giáo viên, không dùng suy đoán AI làm điểm chính thức.

## 5. Kết nối AI sau khi có máy chủ

1. Tạo dự án dịch vụ AI và đặt giới hạn sử dụng phù hợp. Chủ website tự cấp khóa qua nơi quản lý bí mật của nền tảng, không đặt khóa trong `dist/`, localStorage, Git hoặc trường nhập trên website.
2. Tạo endpoint máy chủ cho chat và endpoint đọc ảnh/tạo bản nháp. Xác thực người dùng, kiểm tra quyền giáo viên với chức năng tạo đề, giới hạn số lượt và kích thước đầu vào.
3. Chat nhận câu hỏi đang học cùng những lượt trao đổi cần thiết. Không gửi tên, email, số điện thoại hay cả lớp học nếu không cần. Trả lời bằng tiếng Việt, gợi mở từng bước, nói rõ khi không đủ dữ kiện.
4. Ảnh được kiểm tra loại file/kích thước ở máy chủ; nói rõ với giáo viên nếu ảnh sẽ được gửi tới dịch vụ AI. Nội dung trong ảnh và lời người dùng là dữ liệu, không có quyền thay đổi chỉ dẫn của hệ thống.
5. Đầu ra tạo đề phải qua kiểm tra cấu trúc và luôn ở trạng thái nháp. Không tự duyệt, không tự giao bài. Cho giáo viên sửa mọi trường và xác nhận đáp án.
6. Khi AI lỗi, hết hạn mức hoặc chậm, giữ nội dung người dùng và hiển thị trạng thái có thể thử lại. Không hiển thị một câu trả lời soạn sẵn như thể do AI trả về.

### Hợp đồng API đề xuất cho lần triển khai tiếp theo

Các đường dẫn dưới đây là bản thiết kế, **chưa có endpoint hoạt động trong phiên bản này**.

| Endpoint                               | Quyền và hành vi                                                            |
| -------------------------------------- | --------------------------------------------------------------------------- |
| `GET /api/me`                          | Trả hồ sơ từ danh tính đã được máy chủ xác minh                             |
| `POST /api/profile`                    | Khởi tạo hồ sơ, vai trò; mã giáo viên của học sinh được bỏ trống            |
| `POST /api/teacher-connections`        | Kiểm tra mã và tạo quan hệ đúng quyền                                       |
| `POST /api/questions`                  | Giáo viên tạo/sửa bản nháp; máy chủ kiểm tra quyền sở hữu                   |
| `POST /api/questions/:id/approve`      | Kiểm tra đầy đủ đề, đáp án, lời giải trước khi duyệt                        |
| `POST /api/assignments`                | Chỉ nhận các câu đã duyệt; lưu bản sao đề                                   |
| `POST /api/submissions`                | Kiểm tra bài thuộc học sinh; chấm phía máy chủ; chống nộp lặp               |
| `POST /api/tutor`                      | Nhận `{ questionId, message, conversationId }`; trả `{ reply, mode: "ai" }` |
| `POST /api/question-drafts/from-image` | Nhận ảnh; trả danh sách nháp kèm trường cần giáo viên kiểm tra              |

Giao diện hiện nằm trong `dist/workspace.js`. Chuyển các chỗ đọc/ghi `data` sang API sau khi các endpoint và quyền truy cập đã được kiểm thử. Giữ `dist/authoring.js` để kiểm tra đầu vào, nhưng lặp lại kiểm tra trên máy chủ; kiểm tra trình duyệt không phải ranh giới bảo mật.

### Bạn Hiểu ở góc website

Khung chat chung nằm trong `dist/companion.js`, phản hồi cục bộ trong `dist/companion-replies.js`. Khung được gắn ngoài vùng trang được vẽ lại, nên hội thoại và bản nháp không mất khi chuyển trang. Lưu tối đa 80 tin nhắn trên trình duyệt; tạo cuộc trò chuyện mới hoặc xóa dữ liệu trải nghiệm để xóa chúng. Chưa gửi tin nhắn tới dịch vụ AI.

Khi kết nối thật, thay lời gọi `companionReply(context, text, turn)` trong hàm `send` bằng adapter gọi endpoint máy chủ. Chỉ gửi nội dung cần thiết và định danh bài/câu hỏi; máy chủ tự tra nội dung hợp lệ, không tin vai trò hay đáp án từ trình duyệt. Giữ rõ chế độ `preset`/`ai`, thêm trạng thái chờ, hủy, lỗi và thử lại, không hiển thị câu mẫu như phản hồi AI. Giữ tham chiếu phiên luyện tại lúc gửi và ghi nhận hỗ trợ vào đúng phiên đó; không gán phản hồi đến muộn vào phiên mới. Hiện tại mọi gợi ý kiến thức khi một phiên luyện còn mở đều được ghi nhận, kể cả khi học sinh chuyển sang trang khác. Mở lại lịch sử có hỗ trợ trong một phiên mới cũng được ghi nhận; tạo chat mới không xóa số lượt hỗ trợ.

Chưa có API hoặc trường nhập khóa bí mật trong khung chat này. Hợp đồng máy chủ ở phần 5 là thiết kế cho bước tiếp theo.

## 6. OCR hiện tại

Dùng [Tesseract.js](https://github.com/naptha/tesseract.js) 5.1.1, tải script và worker từ jsDelivr khi bấm “Đọc chữ từ ảnh”. Bộ ngôn ngữ tiếng Việt/Anh được tải theo cấu hình thư viện; OCR chạy trong trình duyệt. Ảnh không được ứng dụng gửi lên dịch vụ OCR/AI. Cần mạng ở lần tải đầu và đủ bộ nhớ; có nút dừng và thông báo lỗi. Không hỗ trợ PDF. Ký hiệu toán, chữ viết tay hoặc ảnh mờ cần kiểm tra thủ công.

## 7. Kiểm tra trước khi mở cho lớp thật

- Thử hai tài khoản trên hai thiết bị: giáo viên tạo đề, học sinh nhận đúng bài, giáo viên thấy bài nộp.
- Học sinh không đọc được đề chưa duyệt, đáp án trước khi nộp hoặc bài của học sinh khác.
- Thử mã giáo viên bỏ trống, sai và nhập sau; thử đăng xuất, khôi phục phiên và tài khoản đã tồn tại.
- Google/Facebook xử lý khi người dùng hủy; OTP dùng số thử nghiệm trước khi bật SMS thật.
- Chat và xử lý ảnh có trạng thái chờ, lỗi và thử lại; khóa bí mật không xuất hiện trong source tải xuống hoặc request của trình duyệt.
- Có sao lưu, chính sách giữ/xóa dữ liệu và hướng dẫn hỗ trợ rõ ràng trước khi đưa dữ liệu học sinh thật vào hệ thống.

Bạn có thể chuẩn bị project ID, tên miền và nhà cung cấp muốn dùng. Bước triển khai tiếp theo cần xây và kết nối lớp máy chủ; không cần gửi khóa bí mật trong hội thoại.
