// One explanatory path per slide; these are teaching aids, not assessment results.
export const slideGuides = {
  "propositions": [
    [
      "Bước 1 (Khái niệm): Khái niệm mệnh đề và mệnh đề chứa biến",
      "Bước 2 (Công thức): Khẳng định → Đúng (Đ) hoặc Sai (S)  ·  P(x) xác định tính đúng sai khi gán x = x0",
      "Bước 3 (Thực hành): Mẹo nhận diện: Câu chứa biến tự do (x, n) không có lượng từ là mệnh đề chứa biến; câu cảm xúc hoặc câu hỏi tuyệt đối không phải mệnh đề."
    ],
    [
      "Bước 1 (Khái niệm): Bác bỏ một khẳng định (¬P)",
      "Bước 2 (Công thức): P đúng ⇔ ¬P sai  ·  P sai ⇔ ¬P đúng  ·  ¬(¬P) ⇔ P",
      "Bước 3 (Thực hành): Lỗi thường gặp: Phủ định của 'chia hết cho 2 và 5' KHÔNG PHẢI là 'không chia hết cho cả 2 và 5', mà là 'không chia hết cho 2 HOẶC không chia hết cho 5'."
    ],
    [
      "Bước 1 (Khái niệm): Mệnh đề kéo theo P ⇒ Q và mệnh đề đảo",
      "Bước 2 (Công thức): P ⇒ Q sai ⇔ (P đúng và Q sai)  ·  Mệnh đề đảo: Q ⇒ P (tính đúng sai độc lập)",
      "Bước 3 (Thực hành): Lưu ý then chốt: Đừng bao giờ mặc định định lý thuận đúng thì định lý đảo cũng đúng!"
    ],
    [
      "Bước 1 (Khái niệm): Điều kiện cần, điều kiện đủ và điều kiện cần và đủ",
      "Bước 2 (Công thức): P ⇒ Q: P là ĐK đủ để có Q · Q là ĐK cần để có P  |  P ⇔ Q: ĐK cần và đủ",
      "Bước 3 (Thực hành): Mẹo nhớ thần tốc: 'Đầu ĐỦ - Đuôi CẦN'. Trong mũi tên P ⇒ Q, cái ĐẦU mũi tên (P) là ĐỦ, cái ĐUÔI được chỉ tới (Q) là CẦN."
    ],
    [
      "Bước 1 (Khái niệm): Kí hiệu với mọi (∀) và tồn tại (∃)",
      "Bước 2 (Công thức): ∀x ∈ X, P(x) [Đúng khi đúng hết]  ·  ∃x ∈ X, P(x) [Đúng khi có ≥ 1 cái đúng]",
      "Bước 3 (Thực hành): Để chứng minh mệnh đề 'Với mọi' là sai, không cần giải tổng quát, chỉ cần tìm ra MỘT PHẢN VÍ DỤ duy nhất!"
    ],
    [
      "Bước 1 (Khái niệm): Quy tắc phủ định mệnh đề chứa lượng từ",
      "Bước 2 (Công thức): ¬(∀x ∈ X, P(x)) ⇔ ∃x ∈ X, ¬P(x)  ·  ¬(∃x ∈ X, P(x)) ⇔ ∀x ∈ X, ¬P(x)",
      "Bước 3 (Thực hành): Bẫy đề thi: Nhiều bạn chỉ đổi lượng từ mà quên phủ định dấu bất đẳng thức, hoặc đổi dấu '>' thành '<' thay vì '≤'!"
    ],
    [
      "Bước 1 (Khái niệm): Phương pháp phản chứng trong mệnh đề toán học",
      "Bước 2 (Công thức): Giả sử ¬Q đúng + P ⇒ Dẫn tới mâu thuẫn ⇒ Kết luận Q đúng",
      "Bước 3 (Thực hành): Dấu hiệu dùng phản chứng: Khi đề bài chứa từ ngữ 'không', 'vô tỉ', 'duy nhất' hoặc chứng minh trực tiếp quá nhiều trường hợp phức tạp."
    ],
    [
      "Bước 1 (Khái niệm): Bản đồ tư duy logic mệnh đề và chiến lược giải bài",
      "Bước 2 (Công thức): Logic toán: Phân biệt rõ Chân trị (Đ/S) · Lượng từ (∀/∃) · Suy luận (Cần/Đủ/Tương đương)",
      "Bước 3 (Thực hành): Chiến thuật phòng thi: Đọc thật kỹ xem đề hỏi 'Mệnh đề nào ĐÚNG' hay 'Mệnh đề nào SAI'!"
    ]
  ],
  "sets": [
    [
      "Bước 1 (Khái niệm): Khái niệm tập hợp và các cách cho một tập hợp",
      "Bước 2 (Công thức): Liệt kê: A = {a1; a2; ...}  ·  Đặc trưng: A = {x ∈ X | P(x)}",
      "Bước 3 (Thực hành): Lưu ý quan trọng: Mỗi phần tử trong tập hợp chỉ được viết một lần, thứ tự liệt kê các phần tử không quan trọng."
    ],
    [
      "Bước 1 (Khái niệm): Tập con và hai tập hợp bằng nhau",
      "Bước 2 (Công thức): A ⊂ B ⇔ (∀x ∈ A ⇒ x ∈ B)  ·  A có n phần tử có 2ⁿ tập con  ·  A = B ⇔ (A ⊂ B và B ⊂ A)",
      "Bước 3 (Thực hành): Phân biệt ký hiệu: Phần tử dùng thuộc (∈), tập hợp dùng con (⊂). Viết 1 ⊂ {1; 2} là SAI, phải viết {1} ⊂ {1; 2} hoặc 1 ∈ {1; 2}."
    ],
    [
      "Bước 1 (Khái niệm): Các tập hợp con của tập số thực ℝ",
      "Bước 2 (Công thức): [a; b] = {x | a ≤ x ≤ b}  ·  (a; b) = {x | a < x < b}  ·  [a; +∞) = {x | x ≥ a}",
      "Bước 3 (Thực hành): Bí quyết trục số: Khi biểu diễn trên trục số, ngoặc tròn hay vuông đều hướng phần lõm về phía phần tử được giữ lại."
    ],
    [
      "Bước 1 (Khái niệm): Phép giao của hai tập hợp: Phần chung của cả hai",
      "Bước 2 (Công thức): A ∩ B = {x | x ∈ A và x ∈ B}  ·  A ∩ B = ∅ (hai tập rời nhau)",
      "Bước 3 (Thực hành): Cẩn thận dấu bằng tại đầu mút khi tìm điều kiện rời nhau: A là ngoặc tròn m+1, B là ngoặc vuông 3 nên khi m+1 = 3 thì 3 ∉ A và 3 ∈ B ⇒ giao vẫn bằng rỗng!"
    ],
    [
      "Bước 1 (Khái niệm): Phép hợp của hai tập hợp: Gom tất cả các phần tử",
      "Bước 2 (Công thức): A ∪ B = {x | x ∈ A hoặc x ∈ B}",
      "Bước 3 (Thực hành): Lỗi phổ biến: Quên kiểm tra xem hai tập có bị ngắt quãng ở giữa không (ví dụ (-∞; 1) và (2; +∞) thì hợp không bằng ℝ mà giữ nguyên dạng viết)."
    ],
    [
      "Bước 1 (Khái niệm): Phép hiệu (\\) và phần bù C_B(A)",
      "Bước 2 (Công thức): A \\ B = {x | x ∈ A và x ∉ B}  ·  Khi A ⊂ E: C_E(A) = E \\ A",
      "Bước 3 (Thực hành): Mẹo lấy phần bù trên ℝ: Đổi ngoặc vuông '[' thành ngoặc tròn ')' và ngược lại đổi ngoặc tròn '(' thành ngoặc vuông '['!"
    ],
    [
      "Bước 1 (Khái niệm): Công thức đếm số phần tử của tập hợp hữu hạn",
      "Bước 2 (Công thức): n(A ∪ B) = n(A) + n(B) − n(A ∩ B)",
      "Bước 3 (Thực hành): Khi vẽ biểu đồ Ven: Luôn điền số liệu từ phần giao của tất cả các tập hợp (ở trong cùng) rồi mới trừ dần ra các vòng ngoài!"
    ],
    [
      "Bước 1 (Khái niệm): Kỹ thuật giải bài toán tập hợp chứa tham số m",
      "Bước 2 (Công thức): So sánh đầu mút: a < b hoặc a ≤ b tùy thuộc vào tính chất ngoặc tròn hay vuông",
      "Bước 3 (Thực hành): Cảnh báo bẫy dấu bằng: Nếu một đầu mút là ngoặc tròn, đầu kia là ngoặc vuông thì khi trùng nhau chúng vẫn không có điểm chung!"
    ]
  ],
  "inequalities-2var": [
    [
      "Bước 1 (Khái niệm): Khái niệm bất phương trình bậc nhất hai ẩn",
      "Bước 2 (Công thức): ax + by + c ≤ 0 (hoặc < 0, ≥ 0, > 0) với a² + b² ≠ 0",
      "Bước 3 (Thực hành): Mẹo nhận dạng: Bậc của x và y đều phải là bậc 1 và không chứa tích x·y hoặc phân thức chứa ẩn ở mẫu."
    ],
    [
      "Bước 1 (Khái niệm): Đường thẳng bờ d chia mặt phẳng thành hai nửa",
      "Bước 2 (Công thức): Đường thẳng d: ax + by + c = 0 là bờ của hai nửa mặt phẳng",
      "Bước 3 (Thực hành): Để vẽ đường thẳng bờ chính xác, luôn chọn 2 điểm cắt trục tọa độ (cho x=0 tìm y và cho y=0 tìm x)."
    ],
    [
      "Bước 1 (Khái niệm): Kỹ thuật thử điểm O(0; 0) xác định miền nghiệm",
      "Bước 2 (Công thức): Tính giá trị tại O(0; 0): a(0) + b(0) + c = c, so sánh với 0",
      "Bước 3 (Thực hành): Cực kỳ lưu ý: Chỉ được thử gốc O(0; 0) khi c ≠ 0! Nếu c = 0, hãy thử ngay điểm (1; 0) hoặc (0; 1)."
    ],
    [
      "Bước 1 (Khái niệm): Kể cả bờ (nét liền) và không kể bờ (nét đứt)",
      "Bước 2 (Công thức): ≤ hoặc ≥ : Nét liền (kể cả bờ)  |  < hoặc > : Nét đứt (không kể bờ)",
      "Bước 3 (Thực hành): Bẫy điểm thi cực hay gặp: Điểm nằm trên đường bờ chỉ là nghiệm khi BPT có dấu '≤' hoặc '≥'!"
    ],
    [
      "Bước 1 (Khái niệm): Ba bước vẽ miền nghiệm chuẩn trong phòng thi",
      "Bước 2 (Công thức): Bước 1: Vẽ d  →  Bước 2: Thử điểm  →  Bước 3: Gạch bỏ và kết luận",
      "Bước 3 (Thực hành): Quy ước tự luận: Nhớ ghi rõ câu 'kể cả bờ d' hoặc 'không kể bờ d' ở dòng kết luận cuối cùng."
    ],
    [
      "Bước 1 (Khái niệm): Mô hình hóa bài toán ngân sách và tiêu dùng",
      "Bước 2 (Công thức): Giá_A · x + Giá_B · y ≤ Tổng ngân sách (x, y ∈ ℕ)",
      "Bước 3 (Thực hành): Luôn chú ý đổi tất cả các đại lượng tiền tệ hoặc khối lượng về cùng một đơn vị đo trước khi lập BPT."
    ],
    [
      "Bước 1 (Khái niệm): Ràng buộc thời gian và công suất máy móc",
      "Bước 2 (Công thức): Thời_gian_A · x + Thời_gian_B · y ≤ Tổng thời gian máy",
      "Bước 3 (Thực hành): Đừng quên điều kiện thực tế: Số sản phẩm x, y luôn phải là số tự nhiên không âm (x, y ∈ ℕ)."
    ],
    [
      "Bước 1 (Khái niệm): Chiến thuật xử lý nhanh câu trắc nghiệm BPT hai ẩn",
      "Bước 2 (Công thức): Mẹo 3 giây: Nhìn nét bờ (liền/đứt) → Thử điểm (0; 0) → Đối chiếu giao trục",
      "Bước 3 (Thực hành): Khi làm bài thi: Phương pháp thử nhanh tọa độ điểm O hoặc các điểm đặc biệt giúp giải quyết 90% câu hỏi trắc nghiệm dưới 15 giây."
    ]
  ],
  "system-inequalities": [
    [
      "Bước 1 (Khái niệm): Nghiệm chung thỏa mãn đồng thời nhiều điều kiện",
      "Bước 2 (Công thức): (x0; y0) là nghiệm của hệ ⇔ thỏa mãn đồng thời tất cả các BPT của hệ",
      "Bước 3 (Thực hành): Chỉ cần vi phạm một BPT duy nhất trong hệ thì cặp số đó bị loại ngay lập tức!"
    ],
    [
      "Bước 1 (Khái niệm): Miền nghiệm đa giác lồi trên mặt phẳng Oxy",
      "Bước 2 (Công thức): Miền nghiệm của hệ = Giao của các nửa mặt phẳng nghiệm",
      "Bước 3 (Thực hành): Quy ước gạch bỏ: Luôn gạch bỏ phần KHÔNG lấy để phần nghiệm chung là phần giấy trắng sạch sẽ, dễ nhìn tọa độ các đỉnh."
    ],
    [
      "Bước 1 (Khái niệm): Phương pháp tìm tọa độ chính xác các đỉnh đa giác",
      "Bước 2 (Công thức): Tọa độ đỉnh (x; y) là nghiệm của hệ 2 PT đường thẳng bờ giao nhau",
      "Bước 3 (Thực hành): Luôn thay lại tọa độ đỉnh tìm được vào các BPT còn lại để kiểm tra xem đỉnh đó có nằm trong miền nghiệm hay bị gạch bỏ rồi."
    ],
    [
      "Bước 1 (Khái niệm): Định lý giá trị lớn nhất và nhỏ nhất của biểu thức F(x; y)",
      "Bước 2 (Công thức): Max / Min F(x; y) trên đa giác kín luôn đạt tại ít nhất một ĐỈNH",
      "Bước 3 (Thực hành): Nguyên tắc vàng: Tuyệt đối không cần thử các điểm nằm sâu bên trong miền nghiệm, chỉ cần tính F tại các đỉnh rồi so sánh!"
    ],
    [
      "Bước 1 (Khái niệm): Bài toán thực tế: Lập kế hoạch sản xuất để lợi nhuận tối đa",
      "Bước 2 (Công thức): Lợi nhuận F(x; y) = Lợi_nhuận_A · x + Lợi_nhuận_B · y → Tối đa hóa (Max)",
      "Bước 3 (Thực hành): Bước kiểm tra cuối: Đảm bảo số lượng sản phẩm x, y tại đỉnh tối ưu phải là số tự nhiên phù hợp với đề bài."
    ],
    [
      "Bước 1 (Khái niệm): Bài toán dinh dưỡng và tối thiểu hóa chi phí (Min)",
      "Bước 2 (Công thức): Chi phí F(x; y) = Giá_A · x + Giá_B · y → Tối thiểu hóa (Min)",
      "Bước 3 (Thực hành): Phân biệt từ khóa: 'Tối đa', 'không quá' tương ứng với dấu ≤. 'Tối thiểu', 'ít nhất' tương ứng với dấu ≥."
    ],
    [
      "Bước 1 (Khái niệm): Cẩn thận với miền nghiệm mở (không bị chặn)",
      "Bước 2 (Công thức): Miền mở ra vô cực: Có thể không tồn tại Max hoặc Min",
      "Bước 3 (Thực hành): Cảnh báo bài thi: Chỉ được áp dụng ngay định lý so sánh đỉnh khi khẳng định chắc chắn miền nghiệm là đa giác kín!"
    ],
    [
      "Bước 1 (Khái niệm): Toàn bộ quy trình giải bài toán quy hoạch tuyến tính",
      "Bước 2 (Công thức): Đặt biến → Hệ BPT & F(x; y) → Tọa độ đỉnh → So sánh giá trị F",
      "Bước 3 (Thực hành): Chiến thuật phòng thi: Đọc kỹ câu hỏi hỏi 'giá trị lớn nhất bằng bao nhiêu' hay hỏi 'đạt được khi x, y bằng bao nhiêu' để chọn đáp án đúng."
    ]
  ],
  "values": [
    [
      "Bước 1 (Khái niệm): Nửa đường tròn đơn vị và tọa độ điểm M(cos α; sin α)",
      "Bước 2 (Công thức): M(cos α; sin α) trên nửa đường tròn x² + y² = 1 (y ≥ 0)",
      "Bước 3 (Thực hành): Quy tắc chiếu trục: Trục hoành Ox là trục Cosin, trục tung Oy là trục Sin."
    ],
    [
      "Bước 1 (Khái niệm): Hằng đẳng thức lượng giác căn bản: sin² α + cos² α = 1",
      "Bước 2 (Công thức): sin² α + cos² α = 1  ⇒  cos² α = 1 − sin² α  ;  sin² α = 1 − cos² α",
      "Bước 3 (Thực hành): Lưu ý sống còn: Khi lấy căn bậc hai của cos² α, bắt buộc phải nhìn điều kiện góc để chọn dấu cộng hay dấu trừ!"
    ],
    [
      "Bước 1 (Khái niệm): Định nghĩa tan α, cot α và mối quan hệ nghịch đảo",
      "Bước 2 (Công thức): tan α · cot α = 1  ·  1 + tan² α = 1 / cos² α  ·  1 + cot² α = 1 / sin² α",
      "Bước 3 (Thực hành): Mẹo làm nhanh dạng phân thức thuần nhất bậc 1 theo sin và cos: Chia cả tử và mẫu cho cos α để đưa toàn bộ về tan α!"
    ],
    [
      "Bước 1 (Khái niệm): Bảng giá trị lượng giác các góc đặc biệt từ 0° đến 180°",
      "Bước 2 (Công thức): sin(30°)=1/2; sin(45°)=√2/2; sin(60°)=√3/2; cos(30°)=√3/2; cos(60°)=1/2",
      "Bước 3 (Thực hành): Mẹo nhớ dãy sin góc nhọn 0°, 30°, 45°, 60°, 90°: Lấy căn bậc hai chia 2 của các số 0, 1, 2, 3, 4 (tức √0/2, √1/2, √2/2, √3/2, √4/2)."
    ],
    [
      "Bước 1 (Khái niệm): Tính chất lượng giác của hai góc bù nhau (tổng bằng 180°)",
      "Bước 2 (Công thức): Góc bù: Sin giữ nguyên  ·  Cos, Tan, Cot đổi dấu âm",
      "Bước 3 (Thực hành): Khẩu quyết tam giác: 'Sin thì bằng nhau, Cos thì đối dấu' khi lấy tổng hai góc đối với góc thứ ba."
    ],
    [
      "Bước 1 (Khái niệm): Tính chất lượng giác của hai góc phụ nhau (tổng bằng 90°)",
      "Bước 2 (Công thức): Góc phụ: sin ↔ cos  ·  tan ↔ cot",
      "Bước 3 (Thực hành): Nhận diện góc phụ: Bất cứ khi nào thấy hai góc có tổng bằng 90° (như 15° và 75°, 20° và 70°), lập tức đưa về cùng một góc nhọn."
    ],
    [
      "Bước 1 (Khái niệm): Phương pháp biến đổi và rút gọn biểu thức lượng giác",
      "Bước 2 (Công thức): Đổi về góc nhọn → Đổi tan, cot về sin, cos → Áp dụng sin² + cos² = 1",
      "Bước 3 (Thực hành): Biểu thức 'không phụ thuộc vào x' nghĩa là sau khi rút gọn toàn bộ biến x bị triệt tiêu và kết quả là một hằng số thực."
    ],
    [
      "Bước 1 (Khái niệm): Chiến thuật xử lý câu hỏi lượng giác trong bài thi trắc nghiệm",
      "Bước 2 (Công thức): Kiểm tra đơn vị Deg (chữ D nhỏ trên màn hình) trước khi bấm máy tính!",
      "Bước 3 (Thực hành): Phòng thi: Luôn kiểm tra xem màn hình máy tính đang hiển thị chữ D (Degree) hay R (Radian) để tránh tính sai số đo góc!"
    ]
  ],
  "signs": [
    [
      "Bước 1 (Khái niệm): Dấu của giá trị lượng giác đến từ vị trí của điểm M",
      "Bước 2 (Công thức): 0° < α < 180° ⇒ sin α > 0  ·  Cos đổi dấu qua trục tung",
      "Bước 3 (Thực hành): Điểm chốt: Trên phạm vi từ 0° đến 180°, hàm Sin KHÔNG BAO GIỜ mang dấu âm!"
    ],
    [
      "Bước 1 (Khái niệm): Góc nhọn: Cả bốn giá trị lượng giác đều DƯƠNG",
      "Bước 2 (Công thức): Góc nhọn α ∈ (0°; 90°) ⇒ sin α > 0, cos α > 0, tan α > 0, cot α > 0",
      "Bước 3 (Thực hành): Quy tắc kiểm tra nhanh: Cứ thấy góc nhọn thì toàn bộ sin, cos, tan, cot đều là số dương."
    ],
    [
      "Bước 1 (Khái niệm): Góc tù: Chỉ Sin dương, còn Cos, Tan, Cot đều ÂM",
      "Bước 2 (Công thức): Góc tù α ∈ (90°; 180°) ⇒ sin α > 0  ·  cos α < 0  ·  tan α < 0  ·  cot α < 0",
      "Bước 3 (Thực hành): Khẩu quyết sống còn: 'Góc tù thì Cos âm, Tan và Cot cùng âm, chỉ duy nhất Sin là dương'."
    ],
    [
      "Bước 1 (Khái niệm): Giá trị tại các vị trí đặc biệt: 0°, 90°, 180°",
      "Bước 2 (Công thức): cos 90° = 0  ·  sin 90° = 1  ·  tan 90° không xác định  ·  cot 90° = 0",
      "Bước 3 (Thực hành): Lưu ý bài thi: Số 0 là số không âm cũng không dương. Khi cos 90° = 0 thì nó không mang dấu dương hay âm."
    ],
    [
      "Bước 1 (Khái niệm): Quan hệ dấu của hai góc bù nhau",
      "Bước 2 (Công thức): sin(180° − α) = sin α  ·  cos(180° − α) = −cos α  ·  tan(180° − α) = −tan α",
      "Bước 3 (Thực hành): Khi thấy các cặp góc có tổng bằng 180° (như 20° và 160°), chúng triệt tiêu nhau khi cộng cos!"
    ],
    [
      "Bước 1 (Khái niệm): Đổi hàm khi hai góc phụ nhau (tổng bằng 90°)",
      "Bước 2 (Công thức): sin(90° − α) = cos α  ·  cos(90° − α) = sin α  ·  tan(90° − α) = cot α",
      "Bước 3 (Thực hành): Mẹo nhớ: 'Phụ chéo' - tức là phụ nhau thì đổi chéo sin thành cos, tan thành cot."
    ],
    [
      "Bước 1 (Khái niệm): Phương pháp xét dấu tích, thương lượng giác trong tam giác",
      "Bước 2 (Công thức): Trong tam giác ABC: sin A, sin B, sin C luôn > 0",
      "Bước 3 (Thực hành): Nếu tam giác có một góc tù, tích ba cosin sẽ mang dấu âm; nếu tam giác nhọn, tích ba cosin mang dấu dương; nếu tam giác vuông, tích ba cosin bằng 0."
    ],
    [
      "Bước 1 (Khái niệm): Bảng tổng hợp dấu và chiến lược giải bài thi lượng giác",
      "Bước 2 (Công thức): Khẩu quyết: 'Góc tù Cos âm, Sin luôn dương'",
      "Bước 3 (Thực hành): Chiến thuật phòng thi: Đọc kỹ đề xem đề cho 'góc nhọn', 'góc tù' hay không cho gì để tránh mất điểm đáng tiếc."
    ]
  ],
  "cosine": [
    [
      "Bước 1 (Khái niệm): Quy ước cạnh và góc chuẩn trong tam giác ABC",
      "Bước 2 (Công thức): a = BC  ·  b = CA  ·  c = AB  ·  Góc A kẹp giữa b và c",
      "Bước 3 (Thực hành): Luôn vẽ hình phác thảo và điền đúng vị trí cạnh đối diện để không lắp nhầm số vào công thức."
    ],
    [
      "Bước 1 (Khái niệm): Định lý cosin: Mở rộng của định lý Pythagore",
      "Bước 2 (Công thức): a² = b² + c² − 2bc cos A  ·  b² = a² + c² − 2ac cos B  ·  c² = a² + b² − 2ab cos C",
      "Bước 3 (Thực hành): Cẩn thận bẫy dấu: Khi góc xen giữa là góc tù, cos của nó âm nên dấu trừ biến thành dấu cộng!"
    ],
    [
      "Bước 1 (Khái niệm): Công thức tính cosin của góc khi biết độ dài 3 cạnh",
      "Bước 2 (Công thức): cos A = (b² + c² − a²) / (2bc)  ·  cos B = (a² + c² − b²) / (2ac)",
      "Bước 3 (Thực hành): Dấu của tử số quyết định loại góc: Tử số > 0 thì góc nhọn, tử số = 0 thì góc vuông, tử số < 0 thì góc tù."
    ],
    [
      "Bước 1 (Khái niệm): Nhận dạng tam giác nhọn, vuông, tù qua định lý cosin",
      "Bước 2 (Công thức): a² < b² + c² (nhọn)  ·  a² = b² + c² (vuông)  ·  a² > b² + c² (tù)",
      "Bước 3 (Thực hành): Luôn kiểm tra cạnh lớn nhất trước tiên! Không cần xét hai cạnh nhỏ hơn vì góc đối diện cạnh nhỏ luôn là góc nhọn."
    ],
    [
      "Bước 1 (Khái niệm): Công thức độ dài đường trung tuyến trong tam giác",
      "Bước 2 (Công thức): ma² = (2b² + 2c² − a²) / 4  ·  mb² = (2a² + 2c² − b²) / 4  ·  mc² = (2a² + 2b² − c²) / 4",
      "Bước 3 (Thực hành): Mẹo nhớ công thức trung tuyến: Hai cạnh kề nhân 2 trừ đi cạnh đối diện rồi chia cho 4."
    ],
    [
      "Bước 1 (Khái niệm): Đo khoảng cách giữa hai điểm không đến được",
      "Bước 2 (Công thức): AB² = CA² + CB² − 2 · CA · CB · cos C",
      "Bước 3 (Thực hành): Luôn vẽ hình tam giác thể hiện sơ đồ chuyển động để xác định chính xác góc kẹp giữa hai hướng đi."
    ],
    [
      "Bước 1 (Khái niệm): Tính đường chéo hình bình hành và hình thoi",
      "Bước 2 (Công thức): d1² = a² + b² − 2ab cos α  ·  d2² = a² + b² + 2ab cos α  ·  d1² + d2² = 2(a² + b²)",
      "Bước 3 (Thực hành): Đẳng thức hình bình hành: Tổng bình phương hai đường chéo bằng tổng bình phương 4 cạnh: d1² + d2² = 2(a² + b²)."
    ],
    [
      "Bước 1 (Khái niệm): Chiến thuật giải nhanh bài toán định lý cosin",
      "Bước 2 (Công thức): Bấm máy: Shift Cos((b² + c² − a²) / (2bc)) để ra số đo góc tức thì",
      "Bước 3 (Thực hành): Khi đề cho cạnh tỉ lệ: Đặt cạnh là 2x, 3x, 4x; biến x sẽ tự động triệt tiêu ở cả tử và mẫu khi lập tỉ số cos!"
    ]
  ],
  "sine-law": [
    [
      "Bước 1 (Khái niệm): Tỉ số giữa độ dài cạnh và sin của góc đối diện",
      "Bước 2 (Công thức): a / sin A = b / sin B = c / sin C = 2R",
      "Bước 3 (Thực hành): Lỗi phổ biến nhất: Nhầm tỉ số a / sin A bằng bán kính R thay vì đường kính 2R!"
    ],
    [
      "Bước 1 (Khái niệm): Diện tích theo hai cạnh và góc xen giữa",
      "Bước 2 (Công thức): S = 1/2 ab sin C = 1/2 bc sin A = 1/2 ca sin B",
      "Bước 3 (Thực hành): Cảnh báo đề thi: Khi biết sin C = 1/2, góc C có thể bằng 30° HOẶC 150° nếu đề không cho điều kiện tam giác nhọn!"
    ],
    [
      "Bước 1 (Khái niệm): Công thức diện tích liên hệ bán kính ngoại tiếp R",
      "Bước 2 (Công thức): S = abc / (4R)  ⇒  R = abc / (4S)",
      "Bước 3 (Thực hành): Công thức R = abc / (4S) là công cụ nhanh nhất để tìm bán kính đường tròn ngoại tiếp khi biết độ dài cả 3 cạnh."
    ],
    [
      "Bước 1 (Khái niệm): Diện tích theo nửa chu vi và bán kính nội tiếp r",
      "Bước 2 (Công thức): S = p · r  ⇒  r = S / p  (với p = (a + b + c) / 2)",
      "Bước 3 (Thực hành): Công thức tính nhanh r cho tam giác vuông tại A: r = (b + c − a) / 2 = (6 + 8 − 10) / 2 = 2."
    ],
    [
      "Bước 1 (Khái niệm): Công thức Hê-rông: Tính diện tích chỉ từ 3 cạnh",
      "Bước 2 (Công thức): S = √(p(p − a)(p − b)(p − c))  với p = (a + b + c) / 2",
      "Bước 3 (Thực hành): Kỹ thuật tách thừa số: Khi tính biểu thức trong căn của Hê-rông, hãy phân tích ra thừa số nguyên tố thay vì nhân dồn thành số lớn rồi mới bấm căn!"
    ],
    [
      "Bước 1 (Khái niệm): Đo chiều cao của tháp hoặc núi từ xa",
      "Bước 2 (Công thức): Tính cạnh AC qua định lý sin trong tam giác ABC → Chiều cao h = AC · sin α",
      "Bước 3 (Thực hành): Luôn xác định rõ hai trường hợp: Hai đối tượng nằm cùng một phía hay nằm ở hai phía so với điểm quan sát."
    ],
    [
      "Bước 1 (Khái niệm): Bảng tổng hợp 5 công thức tính diện tích tam giác",
      "Bước 2 (Công thức): 1/2 a ha = 1/2 ab sin C = abc / (4R) = p · r = √(p(p−a)(p−b)(p−c))",
      "Bước 3 (Thực hành): Bí quyết chọn công thức: Nhìn dữ kiện đề bài cho để ghép nối hai công thức diện tích lại với nhau để giải ẩn cần tìm!"
    ],
    [
      "Bước 1 (Khái niệm): Chiến thuật giải trắc nghiệm Hệ thức lượng tam giác",
      "Bước 2 (Công thức): Tóm tắt: Định lý sin dùng khi có cặp CẠNH - GÓC ĐỐI DIỆN",
      "Bước 3 (Thực hành): Dạng bài nhận dạng tam giác: Luôn quy đổi góc về cạnh (qua định lý Cosin hoặc Sin) rồi rút gọn đẳng thức đại số."
    ]
  ],
  "vectors-intro": [
    [
      "Bước 1 (Khái niệm): Vectơ là gì? Điểm đầu, điểm cuối và độ dài",
      "Bước 2 (Công thức): Vectơ AB→ có điểm đầu A, điểm cuối B  ·  Độ dài |AB→| = AB",
      "Bước 3 (Thực hành): Phân biệt đoạn thẳng và vectơ: Đoạn thẳng AB = BA, nhưng vectơ AB→ khác hoàn toàn vectơ BA→ về hướng!"
    ],
    [
      "Bước 1 (Khái niệm): Hai vectơ cùng phương, cùng hướng và vectơ-không",
      "Bước 2 (Công thức): Cùng phương ⇔ Giá song song hoặc trùng nhau  ·  Vectơ-không: 0→ = AA→ (|0→| = 0)",
      "Bước 3 (Thực hành): Nhớ kỹ: Hai vectơ cùng hướng thì bắt buộc phải cùng phương; nhưng hai vectơ cùng phương thì có thể ngược hướng nhau."
    ],
    [
      "Bước 1 (Khái niệm): Hai vectơ bằng nhau và hai vectơ đối nhau",
      "Bước 2 (Công thức): a→ = b→ (cùng hướng và cùng độ dài)  ·  Vectơ đối: −AB→ = BA→  ·  AB→ + BA→ = 0→",
      "Bước 3 (Thực hành): Lỗi kinh điển: Ghi AB→ = CD→ trong hình bình hành ABCD là SAI vì AB→ đi từ A đến B (sang phải), còn CD→ đi từ C đến D (sang trái) nên chúng ngược hướng nhau! Phải viết AB→ = DC→."
    ],
    [
      "Bước 1 (Khái niệm): Quy tắc 3 điểm: Nối đuôi liên tiếp trong phép cộng",
      "Bước 2 (Công thức): AB→ + BC→ = AC→  ·  Mở rộng: A1 A2→ + A2 A3→ + ... + An-1 An→ = A1 An→",
      "Bước 3 (Thực hành): Phương pháp giải nhanh: Tìm các vectơ có điểm cuối của vectơ này trùng điểm đầu vectơ kia để ghép cặp triệt tiêu."
    ],
    [
      "Bước 1 (Khái niệm): Cộng hai vectơ chung gốc qua đường chéo hình bình hành",
      "Bước 2 (Công thức): AB→ + AD→ = AC→ (với ABCD là hình bình hành)",
      "Bước 3 (Thực hành): Phân biệt: Quy tắc 3 điểm dùng cho hai vectơ 'nối đuôi' (cuối trùng đầu); quy tắc hình bình hành dùng cho hai vectơ 'chung gốc'."
    ],
    [
      "Bước 1 (Khái niệm): Quy tắc trừ hai vectơ chung gốc",
      "Bước 2 (Công thức): OB→ − OA→ = AB→  ·  AB→ = B − A (ngọn trừ gốc)",
      "Bước 3 (Thực hành): Mẹo nhớ thần tốc quy tắc trừ chung gốc: 'Sau trừ Trước': OB→ − OA→ thì lấy chữ B ở đuôi ghép với chữ A ở đuôi thành AB→."
    ],
    [
      "Bước 1 (Khái niệm): Tính chất vectơ của trung điểm và trọng tâm tam giác",
      "Bước 2 (Công thức): I là trung điểm: MA→ + MB→ = 2 MI→  |  G là trọng tâm: MA→ + MB→ + MC→ = 3 MG→",
      "Bước 3 (Thực hành): Hệ thức trung điểm và trọng tâm là công cụ mạnh nhất để thu gọn một tổng nhiều vectơ về một vectơ duy nhất!"
    ],
    [
      "Bước 1 (Khái niệm): Chiến thuật xử lý câu trắc nghiệm đẳng thức vectơ",
      "Bước 2 (Công thức): Bất đẳng thức tam giác: ||a→| − |b→|| ≤ |a→ + b→| ≤ |a→| + |b→|",
      "Bước 3 (Thực hành): Phương pháp làm nhanh: Luôn vẽ hình và dùng các quy tắc tam giác, hình bình hành để đưa về một vectơ duy nhất rồi mới tính độ dài đoạn thẳng."
    ]
  ],
  "scalar-product": [
    [
      "Bước 1 (Khái niệm): Định nghĩa góc giữa hai vectơ từ 0° đến 180°",
      "Bước 2 (Công thức): 0° ≤ (a→, b→) ≤ 180°  ·  Cùng hướng: 0°  ·  Ngược hướng: 180°  ·  Vuông góc: 90°",
      "Bước 3 (Thực hành): Lưu ý quan trọng: Hai vectơ phải được đưa về CÙNG CHUNG GỐC thì góc giữa hai tia mới chính là góc giữa hai vectơ!"
    ],
    [
      "Bước 1 (Khái niệm): Công thức tích vô hướng: Tích hai độ dài nhân cosin góc xen giữa",
      "Bước 2 (Công thức): a→ · b→ = |a→| · |b→| · cos(a→, b→)  (Kết quả là một số thực)",
      "Bước 3 (Thực hành): Dấu của tích vô hướng: a→ · b→ > 0 khi góc nhọn; a→ · b→ = 0 khi vuông góc; a→ · b→ < 0 khi góc tù."
    ],
    [
      "Bước 1 (Khái niệm): Hai vectơ vuông góc khi và chỉ khi tích vô hướng bằng 0",
      "Bước 2 (Công thức): a→ ⊥ b→ ⇔ a→ · b→ = 0  (với a→, b→ ≠ 0→)",
      "Bước 3 (Thực hành): Khẩu quyết: Muốn chứng minh hai đường thẳng vuông góc, hãy tính tích vô hướng của hai vectơ chỉ phương và chứng minh nó bằng 0!"
    ],
    [
      "Bước 1 (Khái niệm): Bình phương vô hướng bằng bình phương độ dài",
      "Bước 2 (Công thức): a→² = |a→|²  ·  AB→² = AB²",
      "Bước 3 (Thực hành): Nhờ tính chất a→² = |a→|², ta có thể chuyển đổi linh hoạt giữa các bài toán độ dài đoạn thẳng và đại số vectơ."
    ],
    [
      "Bước 1 (Khái niệm): Tích vô hướng trong hệ tọa độ Oxy: Hoành nhân hoành cộng tung nhân tung",
      "Bước 2 (Công thức): u→ · v→ = x1 x2 + y1 y2  ·  u→ ⊥ v→ ⇔ x1 x2 + y1 y2 = 0",
      "Bước 3 (Thực hành): Công thức tọa độ giúp tính tích vô hướng ngay lập tức mà không cần phải biết góc giữa hai vectơ!"
    ],
    [
      "Bước 1 (Khái niệm): Công thức tính độ dài và góc giữa hai vectơ theo tọa độ",
      "Bước 2 (Công thức): cos(u→, v→) = (x1 x2 + y1 y2) / (√(x1² + y1²) · √(x2² + y2²))",
      "Bước 3 (Thực hành): Công thức cos góc giữa hai vectơ cho phép tính góc của bất kỳ tam giác nào khi biết tọa độ ba đỉnh."
    ],
    [
      "Bước 1 (Khái niệm): Công của lực trong vật lý là một tích vô hướng",
      "Bước 2 (Công thức): Công cơ học: A = F→ · s→ = F · s · cos α (Đơn vị: Jun - J)",
      "Bước 3 (Thực hành): Liên môn Vật lý: Hiểu bản chất tích vô hướng giúp em giải xuất sắc các bài toán công cơ học trong môn Vật lý 10!"
    ],
    [
      "Bước 1 (Khái niệm): Chiến thuật xử lý câu trắc nghiệm Tích vô hướng",
      "Bước 2 (Công thức): Nhớ nhanh: a→ ⊥ b→ ⇔ x1 x2 + y1 y2 = 0  ·  |a→| = √(x² + y²)",
      "Bước 3 (Thực hành): Phương pháp CASIO: Sử dụng chế độ VECTOR trên máy tính cầm tay (Mode 5 trên fx-580VN X) để tính tích vô hướng và góc giữa hai vectơ chỉ trong 5 giây!"
    ]
  ],
  "statistics": [
    [
      "Bước 1 (Khái niệm): Số trung bình (x̄) và ý nghĩa đại diện",
      "Bước 2 (Công thức): x̄ = (x1 + x2 + ... + xn) / n = (1/n) ∑ xi",
      "Bước 3 (Thực hành): Nhớ kỹ: Số trung bình chỉ đáng tin cậy khi các số liệu trong mẫu không chênh lệch quá đột biến!"
    ],
    [
      "Bước 1 (Khái niệm): Trung vị: Giá trị chia đôi mẫu số liệu đã sắp xếp",
      "Bước 2 (Công thức): n lẻ: Me = x_((n+1)/2)  ·  n chẵn: Me = (x_(n/2) + x_(n/2 + 1)) / 2",
      "Bước 3 (Thực hành): Bẫy điểm thi lớn nhất: Quên sắp xếp dãy số liệu tăng dần mà lấy ngay số đứng giữa của đề bài cho là SAI 100%!"
    ],
    [
      "Bước 1 (Khái niệm): Tứ phân vị: Chia mẫu số liệu thành bốn phần bằng nhau",
      "Bước 2 (Công thức): Q2 = Me  ·  Q1 = Trung vị nửa dưới  ·  Q3 = Trung vị nửa trên  ·  ΔQ = Q3 − Q1",
      "Bước 3 (Thực hành): Khoảng tứ phân vị ΔQ = Q3 − Q1 là số đặc trưng đo độ phân tán của 50% số liệu ở trung tâm."
    ],
    [
      "Bước 1 (Khái niệm): Quy tắc hàng rào phát hiện giá trị bất thường (outlier)",
      "Bước 2 (Công thức): Bất thường nếu: x < Q1 − 1.5 · ΔQ  hoặc  x > Q3 + 1.5 · ΔQ",
      "Bước 3 (Thực hành): Ứng dụng thực tế: Phát hiện giá trị bất thường giúp các nhà khoa học và bác sĩ loại bỏ lỗi nhập liệu hoặc sự cố máy đo."
    ],
    [
      "Bước 1 (Khái niệm): Mốt (Mo): Giá trị có tần số xuất hiện nhiều nhất",
      "Bước 2 (Công thức): Mo = Giá trị có tần số lớn nhất",
      "Bước 3 (Thực hành): Ứng dụng trong thương mại: Mốt được các chủ cửa hàng dùng để quyết định nhập mặt hàng nào có kích cỡ hay màu sắc được ưa chuộng nhất."
    ],
    [
      "Bước 1 (Khái niệm): Khoảng biến thiên R: Đo độ phân tán tổng thể",
      "Bước 2 (Công thức): R = x_max − x_min  (Khoảng biến thiên)",
      "Bước 3 (Thực hành): Khoảng biến thiên càng nhỏ thì mẫu số liệu càng đồng đều và tập trung xung quanh giá trị trung tâm."
    ],
    [
      "Bước 1 (Khái niệm): Khi nào dùng số trung bình, khi nào dùng trung vị?",
      "Bước 2 (Công thức): Không có ngoại lai → Dùng x̄  |  Có giá trị bất thường → Dùng Me",
      "Bước 3 (Thực hành): Câu hỏi nhận định sư phạm: Trong các cuộc điều tra về giá nhà hay thu nhập bình quân, các cơ quan thống kê uy tín luôn công bố giá TRUNG VỊ chứ không chỉ công bố số trung bình."
    ],
    [
      "Bước 1 (Khái niệm): Chiến thuật xử lý câu trắc nghiệm Thống kê mô tả",
      "Bước 2 (Công thức): Bấm máy Casio: Mode 6 (Statistics) → 1-Variable để đọc x̄, Q1, Med, Q3 tức thì!",
      "Bước 3 (Thực hành): Tận dụng máy tính cầm tay trong phòng thi: Nhập số liệu vào bảng thống kê của máy sẽ triệt tiêu 100% lỗi tính toán nhầm bằng tay."
    ]
  ],
  "quadratic-functions": [
    [
      "Bước 1 (Khái niệm): Định nghĩa hàm số bậc hai y = ax² + bx + c (a ≠ 0)",
      "Bước 2 (Công thức): y = ax² + bx + c  (a ≠ 0)  ·  Tập xác định D = ℝ",
      "Bước 3 (Thực hành): Nhận biết nhanh: a > 0 thì parabol hình cái bát ngửa (đáy là điểm thấp nhất); a < 0 thì parabol hình cái bát úp (đỉnh là điểm cao nhất)."
    ],
    [
      "Bước 1 (Khái niệm): Tọa độ đỉnh I và phương trình trục đối xứng",
      "Bước 2 (Công thức): Đỉnh I(−b / (2a); yI)  ·  Trục đối xứng: x = −b / (2a)",
      "Bước 3 (Thực hành): Mẹo nhớ hoành độ đỉnh: Bằng nghiệm kép của phương trình bậc hai x = −b/(2a)."
    ],
    [
      "Bước 1 (Khái niệm): Bảng biến thiên và khoảng đồng biến, nghịch biến",
      "Bước 2 (Công thức): a > 0: Giảm rồi Tăng (Min tại đỉnh)  ·  a < 0: Tăng rồi Giảm (Max tại đỉnh)",
      "Bước 3 (Thực hành): Quy tắc đọc bảng biến thiên: Mũi tên đi xuống là nghịch biến (giảm), mũi tên đi lên là đồng biến (tăng)."
    ],
    [
      "Bước 1 (Khái niệm): Tìm GTLN và GTNN của hàm số bậc hai trên đoạn [α; β]",
      "Bước 2 (Công thức): Max / Min trên [α; β] nằm trong tập các giá trị { f(α); f(β); f(x0) }",
      "Bước 3 (Thực hành): Bẫy điểm thi: Nếu hoành độ đỉnh KHÔNG THUỘC đoạn [α; β], tuyệt đối không được đưa giá trị đỉnh vào so sánh!"
    ],
    [
      "Bước 1 (Khái niệm): Định lý về dấu của tam thức bậc hai f(x) = ax² + bx + c",
      "Bước 2 (Công thức): Δ < 0: Luôn cùng dấu a  ·  Δ > 0: 'Trong trái - Ngoài cùng'",
      "Bước 3 (Thực hành): Khẩu quyết bốn từ bất hủ của đại số 10: 'TRONG TRÁI - NGOÀI CÙNG' (trong khoảng hai nghiệm trái dấu với a, ngoài khoảng cùng dấu với a)."
    ],
    [
      "Bước 1 (Khái niệm): Phương pháp giải bất phương trình bậc hai một ẩn",
      "Bước 2 (Công thức): ax² + bx + c > 0 ⇔ Lấy khoảng ngoài nghiệm (nếu a > 0 và Δ > 0)",
      "Bước 3 (Thực hành): Mẹo chuẩn hóa: Luôn biến đổi để hệ số a > 0 (bằng cách nhân hai vế với −1 và đổi chiều bất đẳng thức nếu a âm) trước khi đọc nghiệm để không bị nhầm dấu."
    ],
    [
      "Bước 1 (Khái niệm): Tìm tham số m để tam thức luôn dương hoặc luôn âm trên ℝ",
      "Bước 2 (Công thức): f(x) > 0, ∀x ∈ ℝ ⇔ { a > 0; Δ < 0 }  ·  f(x) < 0, ∀x ∈ ℝ ⇔ { a < 0; Δ < 0 }",
      "Bước 3 (Thực hành): Bẫy điểm 9–10: Nếu hệ số a chứa tham số m, quên xét trường hợp a = 0 sẽ bị mất ngay nửa số điểm của bài toán!"
    ],
    [
      "Bước 1 (Khái niệm): Chiến thuật xử lý câu trắc nghiệm Hàm số và Tam thức bậc hai",
      "Bước 2 (Công thức): Bấm máy Casio: Mode A (Inequality) → chọn bậc 2 để giải bất phương trình trong 2 giây!",
      "Bước 3 (Thực hành): Phương pháp CASIO: Bấm Mode A → 2 (bậc 2) để giải bất phương trình bậc hai, hoặc Mode 9-2-2 để tìm tọa độ đỉnh Max/Min của parabol cực nhanh."
    ]
  ],
  "analytic-geometry": [
    [
      "Bước 1 (Khái niệm): Vectơ pháp tuyến n và vectơ chỉ phương u của đường thẳng",
      "Bước 2 (Công thức): u→ = (a; b)  ⇔  n→ = (−b; a)  (vì a(−b) + ba = 0)",
      "Bước 3 (Thực hành): Quy tắc đảo tọa độ: Muốn đổi từ chỉ phương sang pháp tuyến: 'ĐỔI CHỖ VÀ ĐỔI DẤU MỘT VỊ TRÍ' (a; b) → (−b; a)."
    ],
    [
      "Bước 1 (Khái niệm): Phương trình tổng quát của đường thẳng: ax + by + c = 0",
      "Bước 2 (Công thức): a(x − x0) + b(y − y0) = 0  ⇔  ax + by + c = 0",
      "Bước 3 (Thực hành): Nhìn nhanh VTPT: Cho phương trình 2x − 5y + 7 = 0 thì VTPT đọc ngay là các hệ số đứng trước x và y: n→ = (2; −5)."
    ],
    [
      "Bước 1 (Khái niệm): Phương trình tham số của đường thẳng",
      "Bước 2 (Công thức): { x = x0 + u1 · t ; y = y0 + u2 · t } (với t ∈ ℝ)",
      "Bước 3 (Thực hành): Chuyển đổi tham số ↔ tổng quát: Muốn khử tham số t, nhân hai dòng rồi cộng trừ để triệt tiêu biến t là ra phương trình tổng quát."
    ],
    [
      "Bước 1 (Khái niệm): Xét vị trí tương đối: Cắt nhau, song song hay trùng nhau",
      "Bước 2 (Công thức): d1 // d2: a1/a2 = b1/b2 ≠ c1/c2  ·  d1 ⊥ d2: a1 a2 + b1 b2 = 0",
      "Bước 3 (Thực hành): Nhớ điều kiện vuông góc: Hai đường thẳng vuông góc khi và chỉ khi tích vô hướng hai VTPT bằng 0: a1 a2 + b1 b2 = 0."
    ],
    [
      "Bước 1 (Khái niệm): Công thức tính khoảng cách từ một điểm đến đường thẳng",
      "Bước 2 (Công thức): d(M0, d) = |ax0 + by0 + c| / √(a² + b²)",
      "Bước 3 (Thực hành): Lưu ý sống còn: Phải đưa phương trình đường thẳng về DẠNG TỔNG QUÁT ax + by + c = 0 trước khi áp dụng công thức khoảng cách!"
    ],
    [
      "Bước 1 (Khái niệm): Công thức tính cosin của góc giữa hai đường thẳng",
      "Bước 2 (Công thức): cos φ = |a1 a2 + b1 b2| / (√(a1² + b1²) · √(a2² + b2²))  (0° ≤ φ ≤ 90°)",
      "Bước 3 (Thực hành): Dấu trị tuyệt đối ở tử số: Bắt buộc phải có dấu trị tuyệt đối |a1 a2 + b1 b2| vì góc giữa hai đường thẳng không bao giờ vượt quá 90°."
    ],
    [
      "Bước 1 (Khái niệm): Phương trình đường tròn tâm I(a; b) bán kính R",
      "Bước 2 (Công thức): (x − a)² + (y − b)² = R²  ·  Dạng khai triển: R = √(a² + b² − c)",
      "Bước 3 (Thực hành): Cách tìm tâm từ dạng khai triển: Lấy hệ số đứng trước x chia cho −2 được hoành độ a, lấy hệ số đứng trước y chia cho −2 được tung độ b."
    ],
    [
      "Bước 1 (Khái niệm): Phương trình tiếp tuyến của đường tròn tại một điểm",
      "Bước 2 (Công thức): Tiếp tuyến tại M0: IM0→ là vectơ pháp tuyến",
      "Bước 3 (Thực hành): Điều kiện tiếp xúc d(I, d) = R là chìa khóa để giải quyết mọi bài toán viết phương trình tiếp tuyến song song hoặc vuông góc với đường thẳng cho trước."
    ]
  ],
  "combinatorics": [
    [
      "Bước 1 (Khái niệm): Quy tắc cộng: Phân chia các phương án độc lập",
      "Bước 2 (Công thức): Công việc = Phương án 1 HOẶC Phương án 2  ⇒  Số cách = m + n",
      "Bước 3 (Thực hành): Phân biệt then chốt: Dùng quy tắc cộng khi mỗi phương án độc lập đều ĐÃ HOÀN THÀNH trọn vẹn yêu cầu bài toán."
    ],
    [
      "Bước 1 (Khái niệm): Quy tắc nhân: Thực hiện công việc qua nhiều công đoạn liên tiếp",
      "Bước 2 (Công thức): Công việc = Công đoạn 1 VÀ Công đoạn 2  ⇒  Số cách = m · n",
      "Bước 3 (Thực hành): Phân biệt Quy tắc cộng vs Quy tắc nhân: Làm xong 1 bước mà công việc ĐÃ XONG thì CỘNG (+); nếu mới XONG MỘT NỬA và phải làm tiếp bước sau thì NHÂN (·)!"
    ],
    [
      "Bước 1 (Khái niệm): Sơ đồ cây: Trực quan hóa các khả năng lựa chọn",
      "Bước 2 (Công thức): Số ngọn cây ở hàng cuối = Tổng số cách lựa chọn",
      "Bước 3 (Thực hành): Sơ đồ cây rất hữu ích khi số lượng trường hợp nhỏ và bài toán có các điều kiện ràng buộc phức tạp."
    ],
    [
      "Bước 1 (Khái niệm): Hoán vị của n phần tử: Sắp xếp thứ tự tất cả n đối tượng",
      "Bước 2 (Công thức): P_n = n! = n(n − 1)(n − 2)...1  ·  0! = 1",
      "Bước 3 (Thực hành): Phương pháp 'Buộc phần tử': Cứ bài toán yêu cầu 'luôn đứng cạnh nhau' thì buộc các đối tượng đó lại thành 1 phần tử duy nhất!"
    ],
    [
      "Bước 1 (Khái niệm): Chỉnh hợp chập k của n phần tử: Chọn k và xếp thứ tự",
      "Bước 2 (Công thức): A_n^k = n! / (n − k)!  (Chọn k phần tử CÓ XẾP THỨ TỰ)",
      "Bước 3 (Thực hành): Dấu hiệu nhận biết Chỉnh hợp: Có chọn ra k phần tử VÀ CÓ PHÂN BIỆT THỨ TỰ (như chức vụ lớp trưởng/phó, chữ số hàng chục/đơn vị, giải nhất/nhì/ba)."
    ],
    [
      "Bước 1 (Khái niệm): Tổ hợp chập k của n phần tử: Chỉ chọn nhóm, không phân biệt thứ tự",
      "Bước 2 (Công thức): C_n^k = n! / (k!(n − k)!) = A_n^k / k!  ·  C_n^k = C_n^(n−k)",
      "Bước 3 (Thực hành): Tính chất đối xứng kỳ diệu: Chọn k người để đi làm thì cũng tương đương với việc chọn (n − k) người ở lại: C_n^k = C_n^(n−k). Ví dụ C_10^8 = C_10^2 = 45."
    ],
    [
      "Bước 1 (Khái niệm): Bảng so sánh cốt lõi: Khi nào dùng Chỉnh hợp, khi nào dùng Tổ hợp?",
      "Bước 2 (Công thức): Có phân biệt thứ tự → Dùng CHỈNH HỢP  |  Không phân biệt thứ tự → Dùng TỔ HỢP",
      "Bước 3 (Thực hành): Câu thần chú phòng thi: Đổi chỗ 2 phần tử mà có tạo ra kết quả mới không? Có thì Chỉnh hợp (A), Không thì Tổ hợp (C)!"
    ],
    [
      "Bước 1 (Khái niệm): Chiến thuật giải bài toán đếm: Phương pháp phần bù",
      "Bước 2 (Công thức): Số cách cần tìm = Tổng số cách chọn tùy ý − Số cách phần bù",
      "Bước 3 (Thực hành): Chiến thuật nhận diện: Cứ thấy cụm từ 'CÓ ÍT NHẤT MỘT' thì 90% nên nghĩ ngay đến phương pháp phần bù!"
    ]
  ],
  "probability": [
    [
      "Bước 1 (Khái niệm): Phép thử ngẫu nhiên và không gian mẫu (Ω)",
      "Bước 2 (Công thức): Ω = Tập tất cả các kết quả có thể  ·  n(Ω) = Số phần tử của Ω",
      "Bước 3 (Thực hành): Mỗi phần tử của không gian mẫu tương ứng với một kết quả sơ cấp duy nhất và không thể chia nhỏ hơn nữa."
    ],
    [
      "Bước 1 (Khái niệm): Biến cố là tập con của không gian mẫu",
      "Bước 2 (Công thức): A ⊂ Ω  ·  Biến cố chắc chắn: Ω  ·  Biến cố không thể: ∅",
      "Bước 3 (Thực hành): Kết quả thuận lợi cho A là những kết quả của phép thử làm cho biến cố A xảy ra."
    ],
    [
      "Bước 1 (Khái niệm): Công thức xác suất cổ điển: Tỉ số kết quả thuận lợi trên tổng số kết quả",
      "Bước 2 (Công thức): P(A) = n(A) / n(Ω)  (với n(Ω) > 0)",
      "Bước 3 (Thực hành): Công thức cổ điển chỉ áp dụng được khi các kết quả sơ cấp có tính chất 'đồng khả năng' (như xúc xắc cân đối, bốc thăm ngẫu nhiên)."
    ],
    [
      "Bước 1 (Khái niệm): Các tính chất nền tảng của xác suất",
      "Bước 2 (Công thức): 0 ≤ P(A) ≤ 1  ·  P(Ω) = 1  ·  P(∅) = 0",
      "Bước 3 (Thực hành): Quy tắc tự kiểm tra: Tính xong xác suất nếu thấy kết quả nhỏ hơn 0 hoặc lớn hơn 1 thì lập tức rà soát lại phép tính!"
    ],
    [
      "Bước 1 (Khái niệm): Biến cố đối (Ā) và định lý tổng xác suất bằng 1",
      "Bước 2 (Công thức): P(Ā) = 1 − P(A)  ⇔  P(A) = 1 − P(Ā)",
      "Bước 3 (Thực hành): Khẩu quyết vàng: Cứ thấy cụm từ 'CÓ ÍT NHẤT MỘT' thì 90% trường hợp tính qua biến cố đối P(A) = 1 − P(Ā) sẽ nhanh và tránh sót trường hợp!"
    ],
    [
      "Bước 1 (Khái niệm): Bài toán bốc bi, chọn người kết hợp đại số tổ hợp",
      "Bước 2 (Công thức): P(A) = [ C_n1^k1 · C_n2^k2 ] / C_n^k",
      "Bước 3 (Thực hành): Cùng màu nghĩa là hoặc toàn đỏ HOẶC toàn xanh nên ta dùng quy tắc CỘNG giữa hai trường hợp."
    ],
    [
      "Bước 1 (Khái niệm): Xác suất trong đời sống: Kiểm tra chất lượng và bảo hiểm",
      "Bước 2 (Công thức): Tỉ lệ lỗi thực tế = Số sản phẩm lỗi / Tổng số sản phẩm kiểm tra",
      "Bước 3 (Thực hành): Mối liên hệ: Xác suất lý thuyết giúp dự đoán tần suất xuất hiện của sự kiện khi số lần lặp lại phép thử đủ lớn."
    ],
    [
      "Bước 1 (Khái niệm): Quy trình 4 bước giải quyết mọi bài toán xác suất trong phòng thi",
      "Bước 2 (Công thức): Bước 1: n(Ω)  →  Bước 2: Gọi A  →  Bước 3: n(A) hoặc n(Ā)  →  Bước 4: P(A) = n(A)/n(Ω)",
      "Bước 3 (Thực hành): Chiến thuật phòng thi: Luôn viết phân số tối giản trước khi so khớp với các đáp án trắc nghiệm."
    ]
  ]
};
