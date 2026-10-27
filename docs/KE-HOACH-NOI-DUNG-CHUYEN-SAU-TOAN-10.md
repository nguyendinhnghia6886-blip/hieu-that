# KẾ HOẠCH NỘI DUNG CHUYEN SÂU TOÁN 10 — WEBSITE HIỂU THẬT

Tài liệu nguồn: `C:\Users\DELL\Downloads\Dạy thêm toán lớp 10 sách KNTT chương trình mới.pdf` (471 trang PDF).  
Phiên bản phát triển: **2.7.0-dev** (trên nền tảng 2.6.0, commit `b5e9533`).

---

## 1. Khảo sát hiện trạng và bảng thiếu sót của 15 chủ đề hiện có

| STT | Chủ đề ID | Tên chủ đề | Trang PDF | Trạng thái bản 2.6.0 | Khoảng cách cần làm sâu (Bản 2.7.0) |
| :---: | :--- | :--- | :---: | :--- | :--- |
| 1 | `propositions` | Mệnh đề toán học | 2 – 16 | 5 slide tổng quan, 4 câu hỏi cơ bản | Cần bổ sung: Phương pháp phản chứng, mệnh đề phủ định chứa $\forall, \exists$ phức hợp, phân biệt điều kiện cần/đủ trong hình học/số học; mở rộng 24 câu hỏi luyện tập có giải thích chi tiết và phân tích bẫy sai. |
| 2 | `sets` | Tập hợp và phép toán | 17 – 41 | 5 slide, 4 câu hỏi | Cần làm sâu: Biểu diễn tập con trên trục số, các bài toán tìm tham số $m$ để $A \cap B = \emptyset$ hoặc $A \subset B$, quy tắc đếm số phần tử của tập hợp hữu hạn ($n(A \cup B)$); mở rộng 22 câu hỏi. |
| 3 | `inequalities-2var` | BPT bậc nhất hai ẩn | 42 – 51 | 5 slide, 4 câu hỏi | Cần làm sâu: Cách xác định bờ liền/bờ đứt, kỹ thuật chọn điểm thử nhanh, bài toán lập mô hình kinh tế thực tế; mở rộng 20 câu hỏi. |
| 4 | `system-inequalities` | Hệ BPT bậc nhất hai ẩn | 52 – 67 | 5 slide, 4 câu hỏi | Cần làm sâu: Phương pháp tìm tọa độ đỉnh đa giác nghiệm, bài toán quy hoạch tuyến tính tối ưu hóa chi phí/lợi nhuận thực tế; mở rộng 20 câu hỏi. |
| 5 | `values` | Giá trị lượng giác | 68 – 74 | 5 slide, 4 câu hỏi | Cần làm sâu: Mối liên hệ bản chất giữa tọa độ điểm trên đường tròn đơn vị và các tỉ số lượng giác, kỹ thuật giải bài toán rút gọn biểu thức; mở rộng 20 câu hỏi. |
| 6 | `signs` | Dấu lượng giác & Góc bù | 75 – 79 | 5 slide, 4 câu hỏi | Cần làm sâu: Bảng xét dấu 4 góc phần tư, công thức góc phụ nhau, bù nhau, hơn kém $180^\circ$; mở rộng 20 câu hỏi. |
| 7 | `cosine` | Định lý cosin | 80 – 86 | 5 slide, 4 câu hỏi | Cần làm sâu: Hệ quả tính góc $\cos A$, công thức độ dài đường trung tuyến $m_a^2$, ứng dụng tính khoảng cách thực tế (đo đạc hải đăng, địa hình); mở rộng 22 câu hỏi. |
| 8 | `sine-law` | Định lý sin & Diện tích | 87 – 94 | 5 slide, 4 câu hỏi | Cần làm sâu: Bán kính đường tròn ngoại tiếp $R$, nội tiếp $r$, 5 công thức tính diện tích tam giác và bài toán tứ giác nội tiếp; mở rộng 22 câu hỏi. |
| 9 | `vectors-intro` | Vectơ & Phép cộng trừ | 95 – 129 | 5 slide, 4 câu hỏi | Cần làm sâu: Quy tắc 3 điểm, hình bình hành, quy tắc trừ hai vectơ chung gốc, phân tích một vectơ theo hai vectơ không cùng phương; mở rộng 24 câu hỏi. |
| 10 | `scalar-product` | Tích vô hướng | 142 – 158 | 5 slide, 4 câu hỏi | Cần làm sâu: Biểu thức tọa độ, điều kiện vuông góc $\vec{a} \cdot \vec{b} = 0$, bài toán tìm tập hợp điểm thỏa mãn đẳng thức vectơ; mở rộng 22 câu hỏi. |
| 11 | `statistics` | Thống kê mô tả | 173 – 218 | 5 slide, 4 câu hỏi | Cần làm sâu: Ý nghĩa thực tế của trung vị và tứ phân vị trong xử lý số liệu bất thường (outlier), so sánh độ lệch chuẩn giữa hai mẫu; mở rộng 20 câu hỏi. |
| 12 | `quadratic-functions` | Hàm số bậc hai & Tam thức | 243 – 290 | 5 slide, 4 câu hỏi | Cần làm sâu: Vẽ bảng biến thiên, tìm GTLN/GTNN trên đoạn $[a; b]$, định lý dấu tam thức bậc hai và bài toán tìm $m$ để BPT nghiệm đúng $\forall x$; mở rộng 24 câu hỏi. |
| 13 | `analytic-geometry` | Đường thẳng & Đường tròn | 309 – 362 | 5 slide, 4 câu hỏi | Cần làm sâu: Chuyển đổi giữa các dạng PT đường thẳng, vị trí tương đối, công thức khoảng cách, phương trình tiếp tuyến đường tròn; mở rộng 25 câu hỏi. |
| 14 | `combinatorics` | Đại số tổ hợp | 402 – 426 | 5 slide, 4 câu hỏi | Cần làm sâu: Phân biệt bản chất quy tắc cộng vs nhân, hoán vị vs chỉnh hợp vs tổ hợp, phương pháp vách ngăn và bài toán chọn có điều kiện ràng buộc; mở rộng 24 câu hỏi. |
| 15 | `probability` | Xác suất cổ điển | 442 – 471 | 5 slide, 4 câu hỏi | Cần làm sâu: Xây dựng không gian mẫu bằng sơ đồ cây, kỹ thuật tính xác suất biến cố đối $P(\bar{A})$, bài toán rút thẻ, chia kẹo, chọn học sinh; mở rộng 22 câu hỏi. |

**Tổng quy mô ngân hàng sau khi mở rộng:** ~330 câu luyện tập chính (vượt mức tối thiểu 300 câu theo yêu cầu).

---

## 2. Tiêu chuẩn bài học chuyên sâu (6 trụ cột)

Mỗi chủ đề không còn bị gò bó trong 5 slide mà được thiết kế linh hoạt (6–8 slide) theo 6 trụ cột sư phạm:
1. **Mục tiêu học tập & Kiến thức nền:** Định vị chính xác năng lực đầu ra và các công thức/khái niệm tiên quyết.
2. **Khái niệm, ký hiệu & Điều kiện áp dụng:** Trình bày bản chất toán học, các điều kiện ràng buộc và trường hợp biên đặc biệt.
3. **Phân loại dạng bài & Dấu hiệu nhận biết:** Hướng dẫn học sinh cách nhìn đề bài để nhận diện phương pháp giải.
4. **Ví dụ giải từng bước:** Phân tích lý do vì sao chọn bước đi đó, kèm giải thích sư phạm rõ ràng.
5. **Lỗi thường gặp & Cách tự kiểm tra:** Chỉ ra các bẫy học sinh hay mắc (quên đổi chiều, nhầm điều kiện, bỏ sót nghiệm) và mẹo kiểm tra nhanh.
6. **Bài toán nâng cao, chuyên sâu & Liên hệ kiến thức:** Nêu hướng tiếp cận các bài toán khó và sơ đồ nối kết với các chủ đề liên quan.

---

## 3. Kiến trúc xác minh lập luận và vận dụng độc lập

Luồng học tập tương tác:
$$\text{Câu chính} \longrightarrow \text{Xác minh lập luận khi cần} \longrightarrow \text{Câu vận dụng độc lập} \longrightarrow \text{Tổng hợp căn cứ}$$

1. **Khi trả lời đúng:** Hệ thống có thể đưa ra câu xác minh nhằm phân biệt giữa việc học sinh thực sự hiểu bản chất với việc đoán mò đáp án (ví dụ: hỏi lý do loại trừ phương án gây nhiễu).
2. **Khi trả lời sai:** Hệ thống nhắm trúng vào lỗi tư duy tương ứng với phương án nhiễu vừa chọn để đưa ra câu xác minh ngắn kiểm tra bước hiểu nhầm.
3. **Câu vận dụng độc lập:** Một bài toán mới độc lập có cùng mục tiêu kỹ năng nhưng thay đổi bối cảnh và số liệu để học sinh tự chứng minh đã làm chủ kiến thức.
4. **Tổng hợp căn cứ:** Phân biệt rõ các trạng thái: `supported` (có bằng chứng vững chắc), `insufficient` (kết quả chưa nhất quán hoặc làm đúng nhờ gợi ý), `practice` (cần luyện tập thêm).

---

## 4. Lộ trình thực hiện từng đợt (Phân kỳ an toàn)

- **Đợt 1:** Hoàn thiện hạ tầng kỹ thuật (cơ chế probe đa năng cho cả đúng/sai, hệ thống transfer động) và triển khai chuyên sâu **Chủ đề 1 (`propositions`)** làm chuẩn mực.
- **Đợt 2:** Triển khai chuyên sâu nhóm Đại số & Tập hợp (`sets`, `inequalities-2var`, `system-inequalities`).
- **Đợt 3:** Triển khai chuyên sâu nhóm Lượng giác & Hệ thức lượng (`values`, `signs`, `cosine`, `sine-law`).
- **Đợt 4:** Triển khai chuyên sâu nhóm Hình học & Vectơ (`vectors-intro`, `scalar-product`, `analytic-geometry`).
- **Đợt 5:** Triển khai chuyên sâu nhóm Thống kê, Hàm số & Xác suất (`statistics`, `quadratic-functions`, `combinatorics`, `probability`).
- **Đợt 6:** Tổng kiểm tra toán học độc lập, kiểm thử giao diện trên trình duyệt và lập bản xem thử cục bộ cho người dùng duyệt.

