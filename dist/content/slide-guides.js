// One explanatory path per slide; these are teaching aids, not assessment results.
export const slideGuides = {
  "propositions": [
    [
      "Mệnh đề toán học là một khẳng định có tính đúng hoặc sai rõ ràng.",
      "Khẳng định → Đúng (Đ) hoặc Sai (S)  ·  P(x) xác định tính đúng sai khi gán x = x0",
      "Mẹo nhận diện: Câu chứa biến tự do (x, n) không có lượng từ là mệnh đề chứa biến; câu cảm xúc hoặc câu hỏi tuyệt đối không phải mệnh đề."
    ],
    [
      "Mệnh đề phủ định của P (kí hiệu ¬P hoặc P̄) khẳng định điều ngược lại với P.",
      "P đúng ⇔ ¬P sai  ·  P sai ⇔ ¬P đúng  ·  ¬(¬P) ⇔ P",
      "Lỗi thường gặp: Phủ định của 'chia hết cho 2 và 5' KHÔNG PHẢI là 'không chia hết cho cả 2 và 5', mà là 'không chia hết cho 2 HOẶC không chia hết cho 5'."
    ],
    [
      "Mệnh đề “Nếu P thì Q” (P ⇒ Q) chỉ sai trong một trường hợp duy nhất: P đúng mà Q sai.",
      "P ⇒ Q sai ⇔ (P đúng và Q sai)  ·  Mệnh đề đảo: Q ⇒ P (tính đúng sai độc lập)",
      "Lưu ý then chốt: Đừng bao giờ mặc định định lý thuận đúng thì định lý đảo cũng đúng!"
    ],
    [
      "Khi định lý P ⇒ Q đúng: P gọi là giả thiết (điều kiện đủ để có Q), Q gọi là kết luận (điều kiện cần để có P).",
      "P ⇒ Q: P là ĐK đủ để có Q · Q là ĐK cần để có P  |  P ⇔ Q: ĐK cần và đủ",
      "Mẹo nhớ thần tốc: 'Đầu ĐỦ - Đuôi CẦN'. Trong mũi tên P ⇒ Q, cái ĐẦU mũi tên (P) là ĐỦ, cái ĐUÔI được chỉ tới (Q) là CẦN."
    ],
    [
      "Kí hiệu ∀ đọc là 'với mọi' hoặc 'tất cả'.",
      "∀x ∈ X, P(x) [Đúng khi đúng hết]  ·  ∃x ∈ X, P(x) [Đúng khi có ≥ 1 cái đúng]",
      "Để chứng minh mệnh đề 'Với mọi' là sai, không cần giải tổng quát, chỉ cần tìm ra MỘT PHẢN VÍ DỤ duy nhất!"
    ],
    [
      "Khi lấy phủ định một mệnh đề có lượng từ, ta thực hiện hai thao tác bắt buộc: (1) Đổi lượng từ ∀ thành ∃ (hoặc ngược lại ∃ thành ∀); (2) Phủ định vị từ P(x).",
      "¬(∀x ∈ X, P(x)) ⇔ ∃x ∈ X, ¬P(x)  ·  ¬(∃x ∈ X, P(x)) ⇔ ∀x ∈ X, ¬P(x)",
      "Bẫy đề thi: Nhiều bạn chỉ đổi lượng từ mà quên phủ định dấu bất đẳng thức, hoặc đổi dấu '>' thành '<' thay vì '≤'!"
    ],
    [
      "Chứng minh định lý P ⇒ Q bằng phương pháp phản chứng gồm 3 bước: (1) Giả sử kết luận sai, tức là thừa nhận ¬Q đúng; (2) Từ giả thiết P và điều giả sử ¬Q, dùng lập luận toán học dẫn tới mâu thuẫn (với giả thiết P hoặc với một định lý toán học đã biết); (3) Khẳng định giả sử là sai, vậy định lý đúng.",
      "Giả sử ¬Q đúng + P ⇒ Dẫn tới mâu thuẫn ⇒ Kết luận Q đúng",
      "Dấu hiệu dùng phản chứng: Khi đề bài chứa từ ngữ 'không', 'vô tỉ', 'duy nhất' hoặc chứng minh trực tiếp quá nhiều trường hợp phức tạp."
    ],
    [
      "Chương I là nền tảng tư duy toán học cấp ba.",
      "Logic toán: Phân biệt rõ Chân trị (Đ/S) · Lượng từ (∀/∃) · Suy luận (Cần/Đủ/Tương đương)",
      "Chiến thuật phòng thi: Đọc thật kỹ xem đề hỏi 'Mệnh đề nào ĐÚNG' hay 'Mệnh đề nào SAI'!"
    ]
  ],
  "sets": [
    [
      "Tập hợp là khái niệm cơ bản của toán học gồm các phần tử xác định.",
      "Liệt kê: A = {a1; a2; ...}  ·  Đặc trưng: A = {x ∈ X | P(x)}",
      "Lưu ý quan trọng: Mỗi phần tử trong tập hợp chỉ được viết một lần, thứ tự liệt kê các phần tử không quan trọng."
    ],
    [
      "Tập hợp A được gọi là tập con của B (kí hiệu A ⊂ B) nếu mọi phần tử của A đều thuộc B: ∀x, x ∈ A ⇒ x ∈ B.",
      "A ⊂ B ⇔ (∀x ∈ A ⇒ x ∈ B)  ·  A có n phần tử có 2ⁿ tập con  ·  A = B ⇔ (A ⊂ B và B ⊂ A)",
      "Phân biệt ký hiệu: Phần tử dùng thuộc (∈), tập hợp dùng con (⊂). Viết 1 ⊂ {1; 2} là SAI, phải viết {1} ⊂ {1; 2} hoặc 1 ∈ {1; 2}."
    ],
    [
      "Các tập số quan trọng: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.",
      "[a; b] = {x | a ≤ x ≤ b}  ·  (a; b) = {x | a < x < b}  ·  [a; +∞) = {x | x ≥ a}",
      "Bí quyết trục số: Khi biểu diễn trên trục số, ngoặc tròn hay vuông đều hướng phần lõm về phía phần tử được giữ lại."
    ],
    [
      "Giao của hai tập hợp A và B (kí hiệu A ∩ B) là tập hợp gồm tất cả các phần tử vừa thuộc A, vừa thuộc B.",
      "A ∩ B = {x | x ∈ A và x ∈ B}  ·  A ∩ B = ∅ (hai tập rời nhau)",
      "Cẩn thận dấu bằng tại đầu mút khi tìm điều kiện rời nhau: A là ngoặc tròn m+1, B là ngoặc vuông 3 nên khi m+1 = 3 thì 3 ∉ A và 3 ∈ B ⇒ giao vẫn bằng rỗng!"
    ],
    [
      "Hợp của hai tập hợp A và B (kí hiệu A ∪ B) là tập hợp gồm tất cả các phần tử thuộc A hoặc thuộc B.",
      "A ∪ B = {x | x ∈ A hoặc x ∈ B}",
      "Lỗi phổ biến: Quên kiểm tra xem hai tập có bị ngắt quãng ở giữa không (ví dụ (-∞; 1) và (2; +∞) thì hợp không bằng ℝ mà giữ nguyên dạng viết)."
    ],
    [
      "Hiệu của A và B (kí hiệu A \\ B) là tập hợp gồm các phần tử thuộc A nhưng không thuộc B.",
      "A \\ B = {x | x ∈ A và x ∉ B}  ·  Khi A ⊂ E: C_E(A) = E \\ A",
      "Mẹo lấy phần bù trên ℝ: Đổi ngoặc vuông '[' thành ngoặc tròn ')' và ngược lại đổi ngoặc tròn '(' thành ngoặc vuông '['!"
    ],
    [
      "Gọi n(X) là số phần tử của tập hữu hạn X.",
      "n(A ∪ B) = n(A) + n(B) − n(A ∩ B)",
      "Khi vẽ biểu đồ Ven: Luôn điền số liệu từ phần giao của tất cả các tập hợp (ở trong cùng) rồi mới trừ dần ra các vòng ngoài!"
    ],
    [
      "Các dạng toán chứa tham số m thường gặp: (1) Tìm m để A ⊂ B; (2) Tìm m để A ∩ B = ∅ hoặc A ∩ B ≠ ∅; (3) Tìm m để A ∪ B là một khoảng.",
      "So sánh đầu mút: a < b hoặc a ≤ b tùy thuộc vào tính chất ngoặc tròn hay vuông",
      "Cảnh báo bẫy dấu bằng: Nếu một đầu mút là ngoặc tròn, đầu kia là ngoặc vuông thì khi trùng nhau chúng vẫn không có điểm chung!"
    ]
  ],
  "inequalities-2var": [
    [
      "Bất phương trình bậc nhất hai ẩn x, y có dạng tổng quát là ax + by + c < 0 (hoặc ≤ 0, > 0, ≥ 0), trong đó a, b, c là các số thực đã cho và a, b không đồng thời bằng 0 (a² + b² > 0).",
      "ax + by + c ≤ 0 (hoặc < 0, ≥ 0, > 0) với a² + b² ≠ 0",
      "Mẹo nhận dạng: Bậc của x và y đều phải là bậc 1 và không chứa tích x·y hoặc phân thức chứa ẩn ở mẫu."
    ],
    [
      "Đường thẳng d: ax + by + c = 0 chia mặt phẳng tọa độ Oxy thành hai nửa mặt phẳng đối xứng nhau.",
      "Đường thẳng d: ax + by + c = 0 là bờ của hai nửa mặt phẳng",
      "Để vẽ đường thẳng bờ chính xác, luôn chọn 2 điểm cắt trục tọa độ (cho x=0 tìm y và cho y=0 tìm x)."
    ],
    [
      "Để biết nửa mặt phẳng nào là miền nghiệm, ta lấy một điểm M0(x0; y0) không nằm trên bờ d (thông thường chọn ngay gốc tọa độ O(0; 0) nếu c ≠ 0).",
      "Tính giá trị tại O(0; 0): a(0) + b(0) + c = c, so sánh với 0",
      "Cực kỳ lưu ý: Chỉ được thử gốc O(0; 0) khi c ≠ 0! Nếu c = 0, hãy thử ngay điểm (1; 0) hoặc (0; 1)."
    ],
    [
      "Nếu bất phương trình có dấu ≤ hoặc ≥ (chứa dấu bằng), các điểm nằm trên đường thẳng bờ d cũng là nghiệm.",
      "≤ hoặc ≥ : Nét liền (kể cả bờ)  |  < hoặc > : Nét đứt (không kể bờ)",
      "Bẫy điểm thi cực hay gặp: Điểm nằm trên đường bờ chỉ là nghiệm khi BPT có dấu '≤' hoặc '≥'!"
    ],
    [
      "Quy trình vẽ miền nghiệm chuẩn 3 bước: (1) Vẽ đường thẳng d: ax + by + c = 0 (nét liền nếu ≤, ≥; nét đứt nếu <, >); (2) Lấy một điểm thử M0(x0; y0) không thuộc d và kiểm tra tính đúng sai; (3) Kết luận miền nghiệm và gạch bỏ phần mặt phẳng không lấy.",
      "Bước 1: Vẽ d  →  Bước 2: Thử điểm  →  Bước 3: Gạch bỏ và kết luận",
      "Quy ước tự luận: Nhớ ghi rõ câu 'kể cả bờ d' hoặc 'không kể bờ d' ở dòng kết luận cuối cùng."
    ],
    [
      "Trong thực tế, các ràng buộc về tài chính, mua sắm thường dẫn đến bất phương trình bậc nhất hai ẩn.",
      "Giá_A · x + Giá_B · y ≤ Tổng ngân sách (x, y ∈ ℕ)",
      "Luôn chú ý đổi tất cả các đại lượng tiền tệ hoặc khối lượng về cùng một đơn vị đo trước khi lập BPT."
    ],
    [
      "Các phân xưởng sản xuất hai loại sản phẩm A và B chịu ràng buộc về thời gian vận hành của máy móc.",
      "Thời_gian_A · x + Thời_gian_B · y ≤ Tổng thời gian máy",
      "Đừng quên điều kiện thực tế: Số sản phẩm x, y luôn phải là số tự nhiên không âm (x, y ∈ ℕ)."
    ],
    [
      "Để giải nhanh câu trắc nghiệm BPT bậc nhất hai ẩn trong đề thi: 1) Kiểm tra điểm (0; 0) xem thuộc miền nghiệm đề bài vẽ hay không; 2) Quan sát đường bờ xem vẽ nét liền hay nét đứt để loại trừ dấu bất đẳng thức; 3) Kiểm tra hệ số góc hoặc giao điểm của bờ với các trục Ox, Oy.",
      "Mẹo 3 giây: Nhìn nét bờ (liền/đứt) → Thử điểm (0; 0) → Đối chiếu giao trục",
      "Khi làm bài thi: Phương pháp thử nhanh tọa độ điểm O hoặc các điểm đặc biệt giúp giải quyết 90% câu hỏi trắc nghiệm dưới 15 giây."
    ]
  ],
  "system-inequalities": [
    [
      "Hệ bất phương trình bậc nhất hai ẩn gồm hai hay nhiều bất phương trình bậc nhất hai ẩn.",
      "(x0; y0) là nghiệm của hệ ⇔ thỏa mãn đồng thời tất cả các BPT của hệ",
      "Chỉ cần vi phạm một BPT duy nhất trong hệ thì cặp số đó bị loại ngay lập tức!"
    ],
    [
      "Để biểu diễn miền nghiệm của hệ: Ta lần lượt vẽ tất cả các đường thẳng bờ trên cùng một mặt phẳng tọa độ Oxy.",
      "Miền nghiệm của hệ = Giao của các nửa mặt phẳng nghiệm",
      "Quy ước gạch bỏ: Luôn gạch bỏ phần KHÔNG lấy để phần nghiệm chung là phần giấy trắng sạch sẽ, dễ nhìn tọa độ các đỉnh."
    ],
    [
      "Các đỉnh của đa giác nghiệm là giao điểm của từng cặp đường thẳng bờ tương ứng.",
      "Tọa độ đỉnh (x; y) là nghiệm của hệ 2 PT đường thẳng bờ giao nhau",
      "Luôn thay lại tọa độ đỉnh tìm được vào các BPT còn lại để kiểm tra xem đỉnh đó có nằm trong miền nghiệm hay bị gạch bỏ rồi."
    ],
    [
      "Định lý cốt lõi của quy hoạch tuyến tính: Nếu miền nghiệm của hệ là một đa giác lồi kín, bị chặn (có diện tích hữu hạn), thì biểu thức bậc nhất F(x; y) = ax + by luôn đạt giá trị lớn nhất (GTLN) và giá trị nhỏ nhất (GTNN) tại ít nhất một trong các ĐỈNH của đa giác đó.",
      "Max / Min F(x; y) trên đa giác kín luôn đạt tại ít nhất một ĐỈNH",
      "Nguyên tắc vàng: Tuyệt đối không cần thử các điểm nằm sâu bên trong miền nghiệm, chỉ cần tính F tại các đỉnh rồi so sánh!"
    ],
    [
      "Quy trình giải bài toán tối ưu sản xuất: 1) Đặt ẩn x, y là số lượng sản phẩm mỗi loại; 2) Lập hệ BPT ràng buộc về nguyên liệu, nhân công, vốn; 3) Xác định tọa độ các đỉnh của miền đa giác nghiệm; 4) Thiết lập hàm lợi nhuận F(x; y) và tính giá trị tại các đỉnh để chọn phương án tối ưu.",
      "Lợi nhuận F(x; y) = Lợi_nhuận_A · x + Lợi_nhuận_B · y → Tối đa hóa (Max)",
      "Bước kiểm tra cuối: Đảm bảo số lượng sản phẩm x, y tại đỉnh tối ưu phải là số tự nhiên phù hợp với đề bài."
    ],
    [
      "Trong chăn nuôi hoặc khẩu phần ăn, cần đảm bảo lượng chất dinh dưỡng tối thiểu với chi phí thấp nhất.",
      "Chi phí F(x; y) = Giá_A · x + Giá_B · y → Tối thiểu hóa (Min)",
      "Phân biệt từ khóa: 'Tối đa', 'không quá' tương ứng với dấu ≤. 'Tối thiểu', 'ít nhất' tương ứng với dấu ≥."
    ],
    [
      "Nếu miền nghiệm mở rộng ra vô cực (miền không bị chặn), biểu thức F(x; y) có thể không đạt giá trị lớn nhất hoặc không đạt giá trị nhỏ nhất.",
      "Miền mở ra vô cực: Có thể không tồn tại Max hoặc Min",
      "Cảnh báo bài thi: Chỉ được áp dụng ngay định lý so sánh đỉnh khi khẳng định chắc chắn miền nghiệm là đa giác kín!"
    ],
    [
      "Bản đồ tư duy 4 bước bài toán tối ưu: 1.",
      "Đặt biến → Hệ BPT & F(x; y) → Tọa độ đỉnh → So sánh giá trị F",
      "Chiến thuật phòng thi: Đọc kỹ câu hỏi hỏi 'giá trị lớn nhất bằng bao nhiêu' hay hỏi 'đạt được khi x, y bằng bao nhiêu' để chọn đáp án đúng."
    ]
  ],
  "values": [
    [
      "Trên mặt phẳng Oxy, nửa đường tròn tâm O bán kính R = 1 nằm phía trên trục hoành được gọi là nửa đường tròn đơn vị.",
      "M(cos α; sin α) trên nửa đường tròn x² + y² = 1 (y ≥ 0)",
      "Quy tắc chiếu trục: Trục hoành Ox là trục Cosin, trục tung Oy là trục Sin."
    ],
    [
      "Do điểm M(cos α; sin α) thuộc đường tròn đơn vị x² + y² = 1, ta luôn có sin² α + cos² α = 1 với mọi góc α từ 0° đến 180°.",
      "sin² α + cos² α = 1  ⇒  cos² α = 1 − sin² α  ;  sin² α = 1 − cos² α",
      "Lưu ý sống còn: Khi lấy căn bậc hai của cos² α, bắt buộc phải nhìn điều kiện góc để chọn dấu cộng hay dấu trừ!"
    ],
    [
      "Với α ≠ 90°: tan α = sin α / cos α.",
      "tan α · cot α = 1  ·  1 + tan² α = 1 / cos² α  ·  1 + cot² α = 1 / sin² α",
      "Mẹo làm nhanh dạng phân thức thuần nhất bậc 1 theo sin và cos: Chia cả tử và mẫu cho cos α để đưa toàn bộ về tan α!"
    ],
    [
      "Các góc chuẩn cần thuộc nằm lòng: 0°, 30°, 45°, 60°, 90°, 120°, 135°, 150°, 180°.",
      "sin(30°)=1/2; sin(45°)=√2/2; sin(60°)=√3/2; cos(30°)=√3/2; cos(60°)=1/2",
      "Mẹo nhớ dãy sin góc nhọn 0°, 30°, 45°, 60°, 90°: Lấy căn bậc hai chia 2 của các số 0, 1, 2, 3, 4 (tức √0/2, √1/2, √2/2, √3/2, √4/2)."
    ],
    [
      "Nếu hai góc α và β bù nhau (α + β = 180°), hai điểm biểu diễn trên nửa đường tròn đơn vị đối xứng qua trục Oy.",
      "Góc bù: Sin giữ nguyên  ·  Cos, Tan, Cot đổi dấu âm",
      "Khẩu quyết tam giác: 'Sin thì bằng nhau, Cos thì đối dấu' khi lấy tổng hai góc đối với góc thứ ba."
    ],
    [
      "Nếu hai góc phụ nhau (α + β = 90°), giá trị hàm này bằng 'co-' hàm kia: sin(90° − α) = cos α; cos(90° − α) = sin α; tan(90° − α) = cot α; cot(90° − α) = tan α.",
      "Góc phụ: sin ↔ cos  ·  tan ↔ cot",
      "Nhận diện góc phụ: Bất cứ khi nào thấy hai góc có tổng bằng 90° (như 15° và 75°, 20° và 70°), lập tức đưa về cùng một góc nhọn."
    ],
    [
      "Các bước chuẩn khi rút gọn biểu thức lượng giác: 1) Quy đổi các góc lớn về góc nhọn bằng tính chất góc bù hoặc góc phụ; 2) Đổi tan, cot về sin và cos nếu cần quy đồng phân thức; 3) Khai triển hằng đẳng thức và gom các cụm sin² + cos² = 1.",
      "Đổi về góc nhọn → Đổi tan, cot về sin, cos → Áp dụng sin² + cos² = 1",
      "Biểu thức 'không phụ thuộc vào x' nghĩa là sau khi rút gọn toàn bộ biến x bị triệt tiêu và kết quả là một hằng số thực."
    ],
    [
      "Các bẫy đề thi kinh điển chương Lượng giác: 1) Quên dấu âm của cos, tan, cot khi góc tù; 2) Quên điều kiện xác định của tan (khác 90°) và cot (khác 0°, 180°); 3) Nhập máy tính cầm tay quên chuyển đơn vị góc Deg (D) / Rad (R).",
      "Kiểm tra đơn vị Deg (chữ D nhỏ trên màn hình) trước khi bấm máy tính!",
      "Phòng thi: Luôn kiểm tra xem màn hình máy tính đang hiển thị chữ D (Degree) hay R (Radian) để tránh tính sai số đo góc!"
    ]
  ],
  "signs": [
    [
      "Khi góc α biến thiên từ 0° đến 180°, điểm M(cos α; sin α) chạy trên nửa đường tròn đơn vị phía trên trục hoành.",
      "0° < α < 180° ⇒ sin α > 0  ·  Cos đổi dấu qua trục tung",
      "Điểm chốt: Trên phạm vi từ 0° đến 180°, hàm Sin KHÔNG BAO GIỜ mang dấu âm!"
    ],
    [
      "Khi 0° < α < 90°, điểm M nằm trong góc phần tư thứ nhất (phía trên Ox, bên phải Oy).",
      "Góc nhọn α ∈ (0°; 90°) ⇒ sin α > 0, cos α > 0, tan α > 0, cot α > 0",
      "Quy tắc kiểm tra nhanh: Cứ thấy góc nhọn thì toàn bộ sin, cos, tan, cot đều là số dương."
    ],
    [
      "Khi 90° < α < 180°, điểm M nằm trong góc phần tư thứ hai (phía trên Ox, bên trái Oy).",
      "Góc tù α ∈ (90°; 180°) ⇒ sin α > 0  ·  cos α < 0  ·  tan α < 0  ·  cot α < 0",
      "Khẩu quyết sống còn: 'Góc tù thì Cos âm, Tan và Cot cùng âm, chỉ duy nhất Sin là dương'."
    ],
    [
      "Tại 0°: M(1; 0) ⇒ cos 0° = 1, sin 0° = 0, tan 0° = 0, cot 0° không xác định.",
      "cos 90° = 0  ·  sin 90° = 1  ·  tan 90° không xác định  ·  cot 90° = 0",
      "Lưu ý bài thi: Số 0 là số không âm cũng không dương. Khi cos 90° = 0 thì nó không mang dấu dương hay âm."
    ],
    [
      "Hai góc bù nhau có tổng bằng 180°: α và 180° − α.",
      "sin(180° − α) = sin α  ·  cos(180° − α) = −cos α  ·  tan(180° − α) = −tan α",
      "Khi thấy các cặp góc có tổng bằng 180° (như 20° và 160°), chúng triệt tiêu nhau khi cộng cos!"
    ],
    [
      "Hai góc phụ nhau có tổng bằng 90°: α và 90° − α.",
      "sin(90° − α) = cos α  ·  cos(90° − α) = sin α  ·  tan(90° − α) = cot α",
      "Mẹo nhớ: 'Phụ chéo' - tức là phụ nhau thì đổi chéo sin thành cos, tan thành cot."
    ],
    [
      "Để xét dấu biểu thức tích hoặc thương của nhiều góc lượng giác trong tam giác ABC: 1) Nhớ rằng trong mọi tam giác, 0° < A, B, C < 180° nên sin A, sin B, sin C luôn DƯƠNG; 2) Dấu của biểu thức hoàn toàn phụ thuộc vào dấu của các hàm Cosin tương ứng; 3) Tam giác chỉ có tối đa một góc tù.",
      "Trong tam giác ABC: sin A, sin B, sin C luôn > 0",
      "Nếu tam giác có một góc tù, tích ba cosin sẽ mang dấu âm; nếu tam giác nhọn, tích ba cosin mang dấu dương; nếu tam giác vuông, tích ba cosin bằng 0."
    ],
    [
      "Bảng vàng dấu lượng giác: Góc nhọn (0° đến 90°): Tất cả (+).",
      "Khẩu quyết: 'Góc tù Cos âm, Sin luôn dương'",
      "Chiến thuật phòng thi: Đọc kỹ đề xem đề cho 'góc nhọn', 'góc tù' hay không cho gì để tránh mất điểm đáng tiếc."
    ]
  ],
  "cosine": [
    [
      "Trong tam giác ABC: Góc A đối diện cạnh a = BC; Góc B đối diện cạnh b = CA; Góc C đối diện cạnh c = AB.",
      "a = BC  ·  b = CA  ·  c = AB  ·  Góc A kẹp giữa b và c",
      "Luôn vẽ hình phác thảo và điền đúng vị trí cạnh đối diện để không lắp nhầm số vào công thức."
    ],
    [
      "Trong tam giác ABC bất kỳ, bình phương một cạnh bằng tổng bình phương hai cạnh kia trừ đi hai lần tích của hai cạnh đó nhân với cosin của góc xen giữa.",
      "a² = b² + c² − 2bc cos A  ·  b² = a² + c² − 2ac cos B  ·  c² = a² + b² − 2ab cos C",
      "Cẩn thận bẫy dấu: Khi góc xen giữa là góc tù, cos của nó âm nên dấu trừ biến thành dấu cộng!"
    ],
    [
      "Chuyển vế định lý cosin, ta có công thức tính trực tiếp góc trong tam giác khi biết độ dài cả ba cạnh.",
      "cos A = (b² + c² − a²) / (2bc)  ·  cos B = (a² + c² − b²) / (2ac)",
      "Dấu của tử số quyết định loại góc: Tử số > 0 thì góc nhọn, tử số = 0 thì góc vuông, tử số < 0 thì góc tù."
    ],
    [
      "Để biết tam giác là tam giác nhọn, vuông hay tù, ta chỉ cần so sánh bình phương cạnh lớn nhất với tổng bình phương hai cạnh còn lại.",
      "a² < b² + c² (nhọn)  ·  a² = b² + c² (vuông)  ·  a² > b² + c² (tù)",
      "Luôn kiểm tra cạnh lớn nhất trước tiên! Không cần xét hai cạnh nhỏ hơn vì góc đối diện cạnh nhỏ luôn là góc nhọn."
    ],
    [
      "Độ dài đường trung tuyến ma xuất phát từ đỉnh A đến trung điểm cạnh đối diện a được tính qua độ dài 3 cạnh của tam giác bằng công thức trung tuyến.",
      "ma² = (2b² + 2c² − a²) / 4  ·  mb² = (2a² + 2c² − b²) / 4  ·  mc² = (2a² + 2b² − c²) / 4",
      "Mẹo nhớ công thức trung tuyến: Hai cạnh kề nhân 2 trừ đi cạnh đối diện rồi chia cho 4."
    ],
    [
      "Trong trắc địa, để đo khoảng cách giữa hai điểm A và B bị ngăn cách bởi hồ nước hay chướng ngại vật: Ta chọn một vị trí quan sát C sao cho có thể đo được khoảng cách CA = b, CB = a và ngắm đo được góc xen giữa C = ACB.",
      "AB² = CA² + CB² − 2 · CA · CB · cos C",
      "Luôn vẽ hình tam giác thể hiện sơ đồ chuyển động để xác định chính xác góc kẹp giữa hai hướng đi."
    ],
    [
      "Trong hình bình hành ABCD có hai cạnh kề a, b và góc nhọn α: Đường chéo ngắn d1 đối diện góc α tính theo định lý cosin với góc α; Đường chéo dài d2 đối diện góc bù (180° − α) tính theo định lý cosin với góc tù.",
      "d1² = a² + b² − 2ab cos α  ·  d2² = a² + b² + 2ab cos α  ·  d1² + d2² = 2(a² + b²)",
      "Đẳng thức hình bình hành: Tổng bình phương hai đường chéo bằng tổng bình phương 4 cạnh: d1² + d2² = 2(a² + b²)."
    ],
    [
      "Các bẫy đề thi cần nhớ: 1) Nhầm cạnh đối diện góc trong công thức (cạnh đứng riêng ở vế trái phải luôn là cạnh đối diện góc ở vế phải); 2) Quên đổi dấu âm khi góc tù; 3) Quên lấy căn bậc hai khi đề bài hỏi độ dài cạnh a (mới chỉ tính ra a²).",
      "Bấm máy: Shift Cos((b² + c² − a²) / (2bc)) để ra số đo góc tức thì",
      "Khi đề cho cạnh tỉ lệ: Đặt cạnh là 2x, 3x, 4x; biến x sẽ tự động triệt tiêu ở cả tử và mẫu khi lập tỉ số cos!"
    ]
  ],
  "sine-law": [
    [
      "Trong tam giác ABC có bán kính đường tròn ngoại tiếp R, tỉ số giữa mỗi cạnh và sin của góc đối diện luôn bằng nhau và bằng đường kính 2R của đường tròn ngoại tiếp đó.",
      "a / sin A = b / sin B = c / sin C = 2R",
      "Lỗi phổ biến nhất: Nhầm tỉ số a / sin A bằng bán kính R thay vì đường kính 2R!"
    ],
    [
      "Diện tích tam giác bằng một nửa tích hai cạnh nhân với sin của góc xen giữa hai cạnh đó.",
      "S = 1/2 ab sin C = 1/2 bc sin A = 1/2 ca sin B",
      "Cảnh báo đề thi: Khi biết sin C = 1/2, góc C có thể bằng 30° HOẶC 150° nếu đề không cho điều kiện tam giác nhọn!"
    ],
    [
      "Từ định lý sin sin C = c / (2R), thay vào công thức diện tích S = 1/2 ab sin C ta được công thức tính diện tích qua tích 3 cạnh chia cho 4R.",
      "S = abc / (4R)  ⇒  R = abc / (4S)",
      "Công thức R = abc / (4S) là công cụ nhanh nhất để tìm bán kính đường tròn ngoại tiếp khi biết độ dài cả 3 cạnh."
    ],
    [
      "Gọi p = (a + b + c)/2 là nửa chu vi tam giác và r là bán kính đường tròn nội tiếp (tiếp xúc trong với cả 3 cạnh).",
      "S = p · r  ⇒  r = S / p  (với p = (a + b + c) / 2)",
      "Công thức tính nhanh r cho tam giác vuông tại A: r = (b + c − a) / 2 = (6 + 8 − 10) / 2 = 2."
    ],
    [
      "Khi biết độ dài ba cạnh a, b, c của một tam giác mà không biết bất kỳ góc nào, công thức Hê-rông là công cụ mạnh mẽ nhất để tính trực tiếp diện tích tam giác thông qua nửa chu vi p.",
      "S = √(p(p − a)(p − b)(p − c))  với p = (a + b + c) / 2",
      "Kỹ thuật tách thừa số: Khi tính biểu thức trong căn của Hê-rông, hãy phân tích ra thừa số nguyên tố thay vì nhân dồn thành số lớn rồi mới bấm căn!"
    ],
    [
      "Để đo chiều cao h của một ngọn tháp CD trên đỉnh núi mà chân tháp D không thể tiếp cận: Ta cắm hai giác kế tại hai điểm A và B trên mặt đất thẳng hàng với chân tháp, cách nhau khoảng d = AB.",
      "Tính cạnh AC qua định lý sin trong tam giác ABC → Chiều cao h = AC · sin α",
      "Luôn xác định rõ hai trường hợp: Hai đối tượng nằm cùng một phía hay nằm ở hai phía so với điểm quan sát."
    ],
    [
      "Bộ 5 công thức diện tích tam giác kinh điển cần thuộc lòng: 1) S = 1/2 a ha (đáy nhân chiều cao); 2) S = 1/2 ab sin C (hai cạnh và góc xen giữa); 3) S = abc / (4R) (ba cạnh và bán kính ngoại tiếp); 4) S = p · r (nửa chu vi và bán kính nội tiếp); 5) S = √(p(p−a)(p−b)(p−c)) (công thức Hê-rông).",
      "1/2 a ha = 1/2 ab sin C = abc / (4R) = p · r = √(p(p−a)(p−b)(p−c))",
      "Bí quyết chọn công thức: Nhìn dữ kiện đề bài cho để ghép nối hai công thức diện tích lại với nhau để giải ẩn cần tìm!"
    ],
    [
      "Các bẫy đề thi kinh điển: 1) Nhầm giữa bán kính ngoại tiếp R và nội tiếp r; 2) Bỏ sót trường hợp góc tù khi biết sin góc bằng 1/2 hoặc √2/2; 3) Quên nhân hệ số 1/2 trong công thức diện tích S = 1/2 ab sin C.",
      "Tóm tắt: Định lý sin dùng khi có cặp CẠNH - GÓC ĐỐI DIỆN",
      "Dạng bài nhận dạng tam giác: Luôn quy đổi góc về cạnh (qua định lý Cosin hoặc Sin) rồi rút gọn đẳng thức đại số."
    ]
  ],
  "vectors-intro": [
    [
      "Vectơ là một đoạn thẳng có hướng, nghĩa là trong hai điểm mút của đoạn thẳng đã chỉ rõ điểm nào là điểm đầu (gốc), điểm nào là điểm cuối (ngọn).",
      "Vectơ AB→ có điểm đầu A, điểm cuối B  ·  Độ dài |AB→| = AB",
      "Phân biệt đoạn thẳng và vectơ: Đoạn thẳng AB = BA, nhưng vectơ AB→ khác hoàn toàn vectơ BA→ về hướng!"
    ],
    [
      "Đường thẳng đi qua điểm đầu và điểm cuối của vectơ gọi là giá của vectơ đó.",
      "Cùng phương ⇔ Giá song song hoặc trùng nhau  ·  Vectơ-không: 0→ = AA→ (|0→| = 0)",
      "Nhớ kỹ: Hai vectơ cùng hướng thì bắt buộc phải cùng phương; nhưng hai vectơ cùng phương thì có thể ngược hướng nhau."
    ],
    [
      "Hai vectơ được gọi là bằng nhau nếu chúng có cùng hướng và cùng độ dài: a→ = b→ ⇔ (|a→| = |b→| và a→ cùng hướng b→).",
      "a→ = b→ (cùng hướng và cùng độ dài)  ·  Vectơ đối: −AB→ = BA→  ·  AB→ + BA→ = 0→",
      "Lỗi kinh điển: Ghi AB→ = CD→ trong hình bình hành ABCD là SAI vì AB→ đi từ A đến B (sang phải), còn CD→ đi từ C đến D (sang trái) nên chúng ngược hướng nhau! Phải viết AB→ = DC→."
    ],
    [
      "Với ba điểm bất kỳ A, B, C, ta luôn có: AB→ + BC→ = AC→.",
      "AB→ + BC→ = AC→  ·  Mở rộng: A1 A2→ + A2 A3→ + ... + An-1 An→ = A1 An→",
      "Phương pháp giải nhanh: Tìm các vectơ có điểm cuối của vectơ này trùng điểm đầu vectơ kia để ghép cặp triệt tiêu."
    ],
    [
      "Nếu ABCD là hình bình hành, thì tổng của hai vectơ chung gốc xuất phát từ một đỉnh bằng vectơ đường chéo xuất phát từ đỉnh đó: AB→ + AD→ = AC→.",
      "AB→ + AD→ = AC→ (với ABCD là hình bình hành)",
      "Phân biệt: Quy tắc 3 điểm dùng cho hai vectơ 'nối đuôi' (cuối trùng đầu); quy tắc hình bình hành dùng cho hai vectơ 'chung gốc'."
    ],
    [
      "Hiệu của hai vectơ: a→ − b→ = a→ + (−b→).",
      "OB→ − OA→ = AB→  ·  AB→ = B − A (ngọn trừ gốc)",
      "Mẹo nhớ thần tốc quy tắc trừ chung gốc: 'Sau trừ Trước': OB→ − OA→ thì lấy chữ B ở đuôi ghép với chữ A ở đuôi thành AB→."
    ],
    [
      "Điểm I là trung điểm của đoạn thẳng AB khi và chỉ khi: IA→ + IB→ = 0→; với điểm M bất kỳ: MA→ + MB→ = 2 MI→.",
      "I là trung điểm: MA→ + MB→ = 2 MI→  |  G là trọng tâm: MA→ + MB→ + MC→ = 3 MG→",
      "Hệ thức trung điểm và trọng tâm là công cụ mạnh nhất để thu gọn một tổng nhiều vectơ về một vectơ duy nhất!"
    ],
    [
      "Các bẫy đề thi về vectơ: 1) Nhầm lẫn giữa độ dài của tổng vectơ và tổng độ dài: |a→ + b→| nói chung KHÔNG BẰNG |a→| + |b→| (chỉ bằng khi hai vectơ cùng hướng); 2) Quên đổi chiều khi lấy hiệu hai vectơ chung gốc; 3) Quên mũi tên vectơ trên đầu dẫn tới viết sai bản chất toán học.",
      "Bất đẳng thức tam giác: ||a→| − |b→|| ≤ |a→ + b→| ≤ |a→| + |b→|",
      "Phương pháp làm nhanh: Luôn vẽ hình và dùng các quy tắc tam giác, hình bình hành để đưa về một vectơ duy nhất rồi mới tính độ dài đoạn thẳng."
    ]
  ],
  "scalar-product": [
    [
      "Cho hai vectơ khác không a→ và b→.",
      "0° ≤ (a→, b→) ≤ 180°  ·  Cùng hướng: 0°  ·  Ngược hướng: 180°  ·  Vuông góc: 90°",
      "Lưu ý quan trọng: Hai vectơ phải được đưa về CÙNG CHUNG GỐC thì góc giữa hai tia mới chính là góc giữa hai vectơ!"
    ],
    [
      "Tích vô hướng của hai vectơ a→ và b→ là một SỐ THỰC (không phải là vectơ), kí hiệu là a→ · b→, được xác định bởi công thức: a→ · b→ = |a→| · |b→| · cos(a→, b→).",
      "a→ · b→ = |a→| · |b→| · cos(a→, b→)  (Kết quả là một số thực)",
      "Dấu của tích vô hướng: a→ · b→ > 0 khi góc nhọn; a→ · b→ = 0 khi vuông góc; a→ · b→ < 0 khi góc tù."
    ],
    [
      "Hệ quả quan trọng nhất của tích vô hướng: Với hai vectơ khác không a→ và b→, chúng vuông góc với nhau (a→ ⊥ b→) khi và chỉ khi tích vô hướng của chúng bằng 0.",
      "a→ ⊥ b→ ⇔ a→ · b→ = 0  (với a→, b→ ≠ 0→)",
      "Khẩu quyết: Muốn chứng minh hai đường thẳng vuông góc, hãy tính tích vô hướng của hai vectơ chỉ phương và chứng minh nó bằng 0!"
    ],
    [
      "Khi b→ = a→, góc giữa a→ và chính nó bằng 0°, cos 0° = 1.",
      "a→² = |a→|²  ·  AB→² = AB²",
      "Nhờ tính chất a→² = |a→|², ta có thể chuyển đổi linh hoạt giữa các bài toán độ dài đoạn thẳng và đại số vectơ."
    ],
    [
      "Trong mặt phẳng tọa độ Oxy, cho hai vectơ u→ = (x1; y1) và v→ = (x2; y2).",
      "u→ · v→ = x1 x2 + y1 y2  ·  u→ ⊥ v→ ⇔ x1 x2 + y1 y2 = 0",
      "Công thức tọa độ giúp tính tích vô hướng ngay lập tức mà không cần phải biết góc giữa hai vectơ!"
    ],
    [
      "Độ dài vectơ u→ = (x; y) là: |u→| = √(x² + y²).",
      "cos(u→, v→) = (x1 x2 + y1 y2) / (√(x1² + y1²) · √(x2² + y2²))",
      "Công thức cos góc giữa hai vectơ cho phép tính góc của bất kỳ tam giác nào khi biết tọa độ ba đỉnh."
    ],
    [
      "Trong cơ học, khi một lực F→ không đổi tác dụng lên một vật làm vật di chuyển một quãng đường biểu diễn bởi vectơ độ dời s→, thì công cơ học A sinh ra bởi lực F→ được định nghĩa chính là tích vô hướng của hai vectơ: A = F→ · s→ = |F→| · |s→| · cos α, trong đó α là góc giữa hướng của lực và hướng chuyển dời.",
      "Công cơ học: A = F→ · s→ = F · s · cos α (Đơn vị: Jun - J)",
      "Liên môn Vật lý: Hiểu bản chất tích vô hướng giúp em giải xuất sắc các bài toán công cơ học trong môn Vật lý 10!"
    ],
    [
      "Các bẫy đề thi cần đặc biệt lưu ý: 1) Nhầm lẫn: Tích vô hướng của hai vectơ là một SỐ THỰC, không được viết mũi tên vectơ trên kết quả; 2) Nhầm góc: Chưa đưa về chung gốc trước khi xác định góc α; 3) Quên điều kiện vuông góc là x1 x2 + y1 y2 = 0.",
      "Nhớ nhanh: a→ ⊥ b→ ⇔ x1 x2 + y1 y2 = 0  ·  |a→| = √(x² + y²)",
      "Phương pháp CASIO: Sử dụng chế độ VECTOR trên máy tính cầm tay (Mode 5 trên fx-580VN X) để tính tích vô hướng và góc giữa hai vectơ chỉ trong 5 giây!"
    ]
  ],
  "statistics": [
    [
      "Số trung bình của mẫu số liệu x1, x2, ..., xn là tổng của tất cả các giá trị chia cho số phần tử n.",
      "x̄ = (x1 + x2 + ... + xn) / n = (1/n) ∑ xi",
      "Nhớ kỹ: Số trung bình chỉ đáng tin cậy khi các số liệu trong mẫu không chênh lệch quá đột biến!"
    ],
    [
      "Để tìm trung vị Me: BẮT BUỘC bước đầu tiên là sắp xếp mẫu số liệu theo thứ tự không giảm (từ bé đến lớn).",
      "n lẻ: Me = x_((n+1)/2)  ·  n chẵn: Me = (x_(n/2) + x_(n/2 + 1)) / 2",
      "Bẫy điểm thi lớn nhất: Quên sắp xếp dãy số liệu tăng dần mà lấy ngay số đứng giữa của đề bài cho là SAI 100%!"
    ],
    [
      "Tứ phân vị gồm ba giá trị Q1, Q2, Q3 chia mẫu số liệu đã sắp xếp thành 4 phần bằng nhau.",
      "Q2 = Me  ·  Q1 = Trung vị nửa dưới  ·  Q3 = Trung vị nửa trên  ·  ΔQ = Q3 − Q1",
      "Khoảng tứ phân vị ΔQ = Q3 − Q1 là số đặc trưng đo độ phân tán của 50% số liệu ở trung tâm."
    ],
    [
      "Giá trị bất thường (outlier) là giá trị quá lớn hoặc quá nhỏ so với phần lớn các số liệu trong mẫu.",
      "Bất thường nếu: x < Q1 − 1.5 · ΔQ  hoặc  x > Q3 + 1.5 · ΔQ",
      "Ứng dụng thực tế: Phát hiện giá trị bất thường giúp các nhà khoa học và bác sĩ loại bỏ lỗi nhập liệu hoặc sự cố máy đo."
    ],
    [
      "Mốt của mẫu số liệu là giá trị có tần số xuất hiện lớn nhất trong mẫu số liệu, kí hiệu là Mo.",
      "Mo = Giá trị có tần số lớn nhất",
      "Ứng dụng trong thương mại: Mốt được các chủ cửa hàng dùng để quyết định nhập mặt hàng nào có kích cỡ hay màu sắc được ưa chuộng nhất."
    ],
    [
      "Khoảng biến thiên R là hiệu giữa giá trị lớn nhất (x_max) và giá trị nhỏ nhất (x_min) trong mẫu số liệu: R = x_max − x_min.",
      "R = x_max − x_min  (Khoảng biến thiên)",
      "Khoảng biến thiên càng nhỏ thì mẫu số liệu càng đồng đều và tập trung xung quanh giá trị trung tâm."
    ],
    [
      "Khi mẫu số liệu không có giá trị bất thường và phân bố tương đối đối xứng: Dùng số trung bình x̄ là tốt nhất vì nó tận dụng thông tin của tất cả các phần tử.",
      "Không có ngoại lai → Dùng x̄  |  Có giá trị bất thường → Dùng Me",
      "Câu hỏi nhận định sư phạm: Trong các cuộc điều tra về giá nhà hay thu nhập bình quân, các cơ quan thống kê uy tín luôn công bố giá TRUNG VỊ chứ không chỉ công bố số trung bình."
    ],
    [
      "Các bẫy đề thi thống kê thường gặp: 1) Quên sắp xếp dãy số liệu trước khi tìm trung vị hoặc tứ phân vị; 2) Tính sai Q1, Q3 do gộp nhầm giá trị Q2 vào các nửa; 3) Quên nhân hệ số 1.5 trong công thức tìm giá trị bất thường (Q1 − 1.5ΔQ hoặc Q3 + 1.5ΔQ).",
      "Bấm máy Casio: Mode 6 (Statistics) → 1-Variable để đọc x̄, Q1, Med, Q3 tức thì!",
      "Tận dụng máy tính cầm tay trong phòng thi: Nhập số liệu vào bảng thống kê của máy sẽ triệt tiêu 100% lỗi tính toán nhầm bằng tay."
    ]
  ],
  "quadratic-functions": [
    [
      "Hàm số bậc hai là hàm số được cho bởi công thức y = ax² + bx + c, trong đó a, b, c là các số thực và a ≠ 0.",
      "y = ax² + bx + c  (a ≠ 0)  ·  Tập xác định D = ℝ",
      "Nhận biết nhanh: a > 0 thì parabol hình cái bát ngửa (đáy là điểm thấp nhất); a < 0 thì parabol hình cái bát úp (đỉnh là điểm cao nhất)."
    ],
    [
      "Đỉnh của parabol là điểm I(−b/(2a); −Δ/(4a)).",
      "Đỉnh I(−b / (2a); yI)  ·  Trục đối xứng: x = −b / (2a)",
      "Mẹo nhớ hoành độ đỉnh: Bằng nghiệm kép của phương trình bậc hai x = −b/(2a)."
    ],
    [
      "Trường hợp a > 0: Hàm số nghịch biến trên khoảng (−∞; −b/(2a)) và đồng biến trên khoảng (−b/(2a); +∞).",
      "a > 0: Giảm rồi Tăng (Min tại đỉnh)  ·  a < 0: Tăng rồi Giảm (Max tại đỉnh)",
      "Quy tắc đọc bảng biến thiên: Mũi tên đi xuống là nghịch biến (giảm), mũi tên đi lên là đồng biến (tăng)."
    ],
    [
      "Để tìm GTLN và GTNN của hàm số bậc hai trên đoạn [α; β]: 1) Tính hoành độ đỉnh x0 = −b/(2a); 2) Kiểm tra xem x0 có thuộc đoạn [α; β] hay không; 3) Tính giá trị của hàm số tại hai đầu mút f(α), f(β) và tại đỉnh f(x0) (nếu x0 ∈ [α; β]); 4) So sánh các giá trị đã tính để chọn số lớn nhất (Max) và số nhỏ nhất (Min).",
      "Max / Min trên [α; β] nằm trong tập các giá trị { f(α); f(β); f(x0) }",
      "Bẫy điểm thi: Nếu hoành độ đỉnh KHÔNG THUỘC đoạn [α; β], tuyệt đối không được đưa giá trị đỉnh vào so sánh!"
    ],
    [
      "Cho tam thức f(x) = ax² + bx + c (a ≠ 0).",
      "Δ < 0: Luôn cùng dấu a  ·  Δ > 0: 'Trong trái - Ngoài cùng'",
      "Khẩu quyết bốn từ bất hủ của đại số 10: 'TRONG TRÁI - NGOÀI CÙNG' (trong khoảng hai nghiệm trái dấu với a, ngoài khoảng cùng dấu với a)."
    ],
    [
      "Giải bất phương trình ax² + bx + c > 0 (hoặc ≥ 0, < 0, ≤ 0): Bước 1: Tìm nghiệm của tam thức ax² + bx + c = 0.",
      "ax² + bx + c > 0 ⇔ Lấy khoảng ngoài nghiệm (nếu a > 0 và Δ > 0)",
      "Mẹo chuẩn hóa: Luôn biến đổi để hệ số a > 0 (bằng cách nhân hai vế với −1 và đổi chiều bất đẳng thức nếu a âm) trước khi đọc nghiệm để không bị nhầm dấu."
    ],
    [
      "Để tam thức f(x) = ax² + bx + c luôn mang một dấu trên toàn bộ tập số thực ℝ: (1) f(x) > 0 với mọi x ∈ ℝ ⇔ a > 0 và Δ < 0; (2) f(x) ≥ 0 với mọi x ∈ ℝ ⇔ a > 0 và Δ ≤ 0; (3) f(x) < 0 với mọi x ∈ ℝ ⇔ a < 0 và Δ < 0; (4) f(x) ≤ 0 với mọi x ∈ ℝ ⇔ a < 0 và Δ ≤ 0.",
      "f(x) > 0, ∀x ∈ ℝ ⇔ { a > 0; Δ < 0 }  ·  f(x) < 0, ∀x ∈ ℝ ⇔ { a < 0; Δ < 0 }",
      "Bẫy điểm 9–10: Nếu hệ số a chứa tham số m, quên xét trường hợp a = 0 sẽ bị mất ngay nửa số điểm của bài toán!"
    ],
    [
      "Các bẫy đề thi kinh điển: 1) Nhầm công thức đỉnh x = −b/(2a) thành b/(2a); 2) Bấm máy giải BPT bậc hai lấy khoảng nghiệm mà quên đổi dấu ngoặc tròn sang ngoặc vuông khi có dấu bằng; 3) Quên xét trường hợp a = 0 khi giải bài toán tham số.",
      "Bấm máy Casio: Mode A (Inequality) → chọn bậc 2 để giải bất phương trình trong 2 giây!",
      "Phương pháp CASIO: Bấm Mode A → 2 (bậc 2) để giải bất phương trình bậc hai, hoặc Mode 9-2-2 để tìm tọa độ đỉnh Max/Min của parabol cực nhanh."
    ]
  ],
  "analytic-geometry": [
    [
      "Vectơ chỉ phương u→ (khác 0→) có giá song song hoặc trùng với đường thẳng d.",
      "u→ = (a; b)  ⇔  n→ = (−b; a)  (vì a(−b) + ba = 0)",
      "Quy tắc đảo tọa độ: Muốn đổi từ chỉ phương sang pháp tuyến: 'ĐỔI CHỖ VÀ ĐỔI DẤU MỘT VỊ TRÍ' (a; b) → (−b; a)."
    ],
    [
      "Đường thẳng d đi qua điểm M0(x0; y0) và nhận n→ = (a; b) làm vectơ pháp tuyến có phương trình: a(x − x0) + b(y − y0) = 0.",
      "a(x − x0) + b(y − y0) = 0  ⇔  ax + by + c = 0",
      "Nhìn nhanh VTPT: Cho phương trình 2x − 5y + 7 = 0 thì VTPT đọc ngay là các hệ số đứng trước x và y: n→ = (2; −5)."
    ],
    [
      "Đường thẳng d đi qua điểm M0(x0; y0) và nhận u→ = (u1; u2) làm vectơ chỉ phương có phương trình tham số: x = x0 + u1 · t và y = y0 + u2 · t (với tham số t ∈ ℝ).",
      "{ x = x0 + u1 · t ; y = y0 + u2 · t } (với t ∈ ℝ)",
      "Chuyển đổi tham số ↔ tổng quát: Muốn khử tham số t, nhân hai dòng rồi cộng trừ để triệt tiêu biến t là ra phương trình tổng quát."
    ],
    [
      "Cho hai đường thẳng d1: a1 x + b1 y + c1 = 0 và d2: a2 x + b2 y + c2 = 0.",
      "d1 // d2: a1/a2 = b1/b2 ≠ c1/c2  ·  d1 ⊥ d2: a1 a2 + b1 b2 = 0",
      "Nhớ điều kiện vuông góc: Hai đường thẳng vuông góc khi và chỉ khi tích vô hướng hai VTPT bằng 0: a1 a2 + b1 b2 = 0."
    ],
    [
      "Khoảng cách từ điểm M0(x0; y0) đến đường thẳng d: ax + by + c = 0 được tính bằng công thức: Lấy trị tuyệt đối khi thay tọa độ điểm M0 vào vế trái của phương trình đường thẳng, rồi chia cho căn bậc hai của tổng bình phương hai hệ số a² + b².",
      "d(M0, d) = |ax0 + by0 + c| / √(a² + b²)",
      "Lưu ý sống còn: Phải đưa phương trình đường thẳng về DẠNG TỔNG QUÁT ax + by + c = 0 trước khi áp dụng công thức khoảng cách!"
    ],
    [
      "Góc giữa hai đường thẳng d1 và d2 luôn là một góc không tù: 0° ≤ φ ≤ 90°.",
      "cos φ = |a1 a2 + b1 b2| / (√(a1² + b1²) · √(a2² + b2²))  (0° ≤ φ ≤ 90°)",
      "Dấu trị tuyệt đối ở tử số: Bắt buộc phải có dấu trị tuyệt đối |a1 a2 + b1 b2| vì góc giữa hai đường thẳng không bao giờ vượt quá 90°."
    ],
    [
      "Đường tròn tâm I(a; b) bán kính R có phương trình chính tắc: (x − a)² + (y − b)² = R².",
      "(x − a)² + (y − b)² = R²  ·  Dạng khai triển: R = √(a² + b² − c)",
      "Cách tìm tâm từ dạng khai triển: Lấy hệ số đứng trước x chia cho −2 được hoành độ a, lấy hệ số đứng trước y chia cho −2 được tung độ b."
    ],
    [
      "Tiếp tuyến của đường tròn (C) tâm I(a; b) tại điểm M0(x0; y0) thuộc đường tròn là đường thẳng đi qua M0 và vuông góc với bán kính IM0, do đó nhận IM0→ = (x0 − a; y0 − b) làm vectơ pháp tuyến.",
      "Tiếp tuyến tại M0: IM0→ là vectơ pháp tuyến",
      "Điều kiện tiếp xúc d(I, d) = R là chìa khóa để giải quyết mọi bài toán viết phương trình tiếp tuyến song song hoặc vuông góc với đường thẳng cho trước."
    ]
  ],
  "combinatorics": [
    [
      "Một công việc có thể được hoàn thành bởi một trong hai phương án A hoặc B.",
      "Công việc = Phương án 1 HOẶC Phương án 2  ⇒  Số cách = m + n",
      "Phân biệt then chốt: Dùng quy tắc cộng khi mỗi phương án độc lập đều ĐÃ HOÀN THÀNH trọn vẹn yêu cầu bài toán."
    ],
    [
      "Một công việc phải trải qua hai công đoạn liên tiếp 1 và 2.",
      "Công việc = Công đoạn 1 VÀ Công đoạn 2  ⇒  Số cách = m · n",
      "Phân biệt Quy tắc cộng vs Quy tắc nhân: Làm xong 1 bước mà công việc ĐÃ XONG thì CỘNG (+); nếu mới XONG MỘT NỬA và phải làm tiếp bước sau thì NHÂN (·)!"
    ],
    [
      "Sơ đồ cây là hình vẽ phân nhánh hình cây mô tả trực quan tất cả các khả năng xảy ra của một chuỗi hành động.",
      "Số ngọn cây ở hàng cuối = Tổng số cách lựa chọn",
      "Sơ đồ cây rất hữu ích khi số lượng trường hợp nhỏ và bài toán có các điều kiện ràng buộc phức tạp."
    ],
    [
      "Một hoán vị của n phần tử là một cách sắp xếp có thứ tự n phần tử đó vào n vị trí khác nhau.",
      "P_n = n! = n(n − 1)(n − 2)...1  ·  0! = 1",
      "Phương pháp 'Buộc phần tử': Cứ bài toán yêu cầu 'luôn đứng cạnh nhau' thì buộc các đối tượng đó lại thành 1 phần tử duy nhất!"
    ],
    [
      "Cho tập hợp có n phần tử (1 ≤ k ≤ n).",
      "A_n^k = n! / (n − k)!  (Chọn k phần tử CÓ XẾP THỨ TỰ)",
      "Dấu hiệu nhận biết Chỉnh hợp: Có chọn ra k phần tử VÀ CÓ PHÂN BIỆT THỨ TỰ (như chức vụ lớp trưởng/phó, chữ số hàng chục/đơn vị, giải nhất/nhì/ba)."
    ],
    [
      "Cho tập hợp có n phần tử (0 ≤ k ≤ n).",
      "C_n^k = n! / (k!(n − k)!) = A_n^k / k!  ·  C_n^k = C_n^(n−k)",
      "Tính chất đối xứng kỳ diệu: Chọn k người để đi làm thì cũng tương đương với việc chọn (n − k) người ở lại: C_n^k = C_n^(n−k). Ví dụ C_10^8 = C_10^2 = 45."
    ],
    [
      "Sự khác biệt duy nhất giữa Chỉnh hợp và Tổ hợp nằm ở yếu tố: CÓ THỨ TỰ HAY KHÔNG.",
      "Có phân biệt thứ tự → Dùng CHỈNH HỢP  |  Không phân biệt thứ tự → Dùng TỔ HỢP",
      "Câu thần chú phòng thi: Đổi chỗ 2 phần tử mà có tạo ra kết quả mới không? Có thì Chỉnh hợp (A), Không thì Tổ hợp (C)!"
    ],
    [
      "Khi bài toán yêu cầu đếm số phương án thỏa mãn điều kiện phức tạp chứa các từ khóa 'có ít nhất một', 'không đồng thời': Phương pháp phần bù giúp giải quyết nhanh gấp 3 lần: Số cách thỏa mãn = Tổng số cách tùy ý − Số cách vi phạm điều kiện.",
      "Số cách cần tìm = Tổng số cách chọn tùy ý − Số cách phần bù",
      "Chiến thuật nhận diện: Cứ thấy cụm từ 'CÓ ÍT NHẤT MỘT' thì 90% nên nghĩ ngay đến phương pháp phần bù!"
    ]
  ],
  "probability": [
    [
      "Phép thử ngẫu nhiên là một thí nghiệm, hành động mà kết quả của nó không thể đoán trước được nhưng ta biết trước tập hợp tất cả các kết quả có thể xảy ra.",
      "Ω = Tập tất cả các kết quả có thể  ·  n(Ω) = Số phần tử của Ω",
      "Mỗi phần tử của không gian mẫu tương ứng với một kết quả sơ cấp duy nhất và không thể chia nhỏ hơn nữa."
    ],
    [
      "Biến cố A liên quan đến phép thử là một tập hợp con của không gian mẫu (A ⊂ Ω).",
      "A ⊂ Ω  ·  Biến cố chắc chắn: Ω  ·  Biến cố không thể: ∅",
      "Kết quả thuận lợi cho A là những kết quả của phép thử làm cho biến cố A xảy ra."
    ],
    [
      "Giả sử các kết quả của phép thử có khả năng xảy ra như nhau (đồng khả năng).",
      "P(A) = n(A) / n(Ω)  (với n(Ω) > 0)",
      "Công thức cổ điển chỉ áp dụng được khi các kết quả sơ cấp có tính chất 'đồng khả năng' (như xúc xắc cân đối, bốc thăm ngẫu nhiên)."
    ],
    [
      "Các tính chất chuẩn mực của xác suất: 1) Xác suất của một biến cố bất kỳ luôn nằm trong đoạn từ 0 đến 1: 0 ≤ P(A) ≤ 1.",
      "0 ≤ P(A) ≤ 1  ·  P(Ω) = 1  ·  P(∅) = 0",
      "Quy tắc tự kiểm tra: Tính xong xác suất nếu thấy kết quả nhỏ hơn 0 hoặc lớn hơn 1 thì lập tức rà soát lại phép tính!"
    ],
    [
      "Biến cố đối của A, kí hiệu là Ā (hoặc ¬A), là biến cố 'A không xảy ra'.",
      "P(Ā) = 1 − P(A)  ⇔  P(A) = 1 − P(Ā)",
      "Khẩu quyết vàng: Cứ thấy cụm từ 'CÓ ÍT NHẤT MỘT' thì 90% trường hợp tính qua biến cố đối P(A) = 1 − P(Ā) sẽ nhanh và tránh sót trường hợp!"
    ],
    [
      "Trong hầu hết các bài toán xác suất lớp 10, ta dùng tổ hợp C_n^k để tính số phần tử: n(Ω) là số cách chọn k đối tượng từ tổng thể n đối tượng tùy ý.",
      "P(A) = [ C_n1^k1 · C_n2^k2 ] / C_n^k",
      "Cùng màu nghĩa là hoặc toàn đỏ HOẶC toàn xanh nên ta dùng quy tắc CỘNG giữa hai trường hợp."
    ],
    [
      "Xác suất là công cụ toán học tối quan trọng trong việc đánh giá rủi ro, kiểm định chất lượng sản phẩm (KCS) trong nhà máy, tính toán phí bảo hiểm và dự báo thị trường.",
      "Tỉ lệ lỗi thực tế = Số sản phẩm lỗi / Tổng số sản phẩm kiểm tra",
      "Mối liên hệ: Xác suất lý thuyết giúp dự đoán tần suất xuất hiện của sự kiện khi số lần lặp lại phép thử đủ lớn."
    ],
    [
      "Quy trình chuẩn 4 bước giải bài toán xác suất: Bước 1: Mô tả phép thử và tính n(Ω) (dùng C_n^k hoặc quy tắc nhân).",
      "Bước 1: n(Ω)  →  Bước 2: Gọi A  →  Bước 3: n(A) hoặc n(Ā)  →  Bước 4: P(A) = n(A)/n(Ω)",
      "Chiến thuật phòng thi: Luôn viết phân số tối giản trước khi so khớp với các đáp án trắc nghiệm."
    ]
  ]
};
