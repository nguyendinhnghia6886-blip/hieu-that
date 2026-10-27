// One explanatory path per slide; these are teaching aids, not assessment results.
export const slideGuides = {
  propositions: [
    [
      "Câu khẳng định",
      "Xác định được đúng / sai?",
      "Có → Mệnh đề; Không → Chưa phải mệnh đề",
    ],
    ["Mệnh đề P", "Phủ định: ¬P", "Đổi giá trị đúng ↔ sai"],
    ["Giả thiết P", "Nếu P thì Q", "Chỉ sai khi P đúng, Q sai"],
    [
      "Định lý P ⇒ Q",
      "P: điều kiện đủ (đứng trước)",
      "Q: điều kiện cần (đứng sau)",
    ],
    [
      "∀x: mọi phần tử",
      "Phủ định → đổi ∀ thành ∃",
      "∃x: có ít nhất một phản ví dụ",
    ],
    [
      "Muốn bác bỏ ∀x",
      "Tìm MỘT phản ví dụ x0",
      "P(x0) sai → cả mệnh đề ∀ sai",
    ],
    [
      "Kiểm tra 3 bẫy sai lầm",
      "1. Quên đổi ∀ ↔ ∃  2. Nhầm điều kiện cần/đủ",
      "3. Tự kiểm tra bảng giả thiết - kết luận",
    ],
  ],
  sets: [
    ["Chọn x bất kỳ thuộc A", "x cũng thuộc B", "Mọi x đều như vậy → A ⊆ B"],
    [
      "Thuộc A và B → giao",
      "Thuộc A hoặc B → hợp",
      "Quan sát các phần tử được chọn",
    ],
    ["Bắt đầu từ A", "Bỏ phần thuộc B", "Còn lại: A ∖ B"],
    [
      "Đọc hai đầu mút",
      "[ ] lấy mút; ( ) bỏ mút",
      "Biểu diễn đúng trên trục số",
    ],
    ["Vẽ hai tập trên trục số", "Lấy phần chung", "(-2; 3) ∩ [1; 5] = [1; 3)"],
  ],
  "inequalities-2var": [
    [
      "Chọn a, b không đồng thời bằng 0",
      "Chọn dấu bất phương trình",
      "Miền tô xanh là miền nghiệm",
    ],
    [
      "ax + by + c = 0",
      "Đường bờ chia mặt phẳng",
      "Hai phía có dấu biểu thức trái ngược",
    ],
    [
      "Chọn điểm M(x; y)",
      "Thay vào ax + by + c",
      "So sánh với 0 để kiểm tra nghiệm",
    ],
    ["Dấu ≤ hoặc ≥ → lấy bờ", "Dấu < hoặc > → bỏ bờ", "Nét liền ↔ nét đứt"],
    [
      "Vẽ đường bờ",
      "Thử một điểm không nằm trên bờ",
      "Chọn nửa mặt phẳng phù hợp",
    ],
  ],
  "system-inequalities": [
    ["x ≥ 0, y ≥ 0", "Thêm điều kiện x + y ≤ t", "Nghiệm phải thỏa cả ba"],
    [
      "Miền của từng điều kiện",
      "Lấy phần giao",
      "Ví dụ bên dưới: một tam giác kín",
    ],
    [
      "Ghép từng cặp đường bờ",
      "Giải hệ hai phương trình",
      "Kiểm tra lại mọi điều kiện",
    ],
    [
      "Miền kín, bị chặn, khác rỗng",
      "Tính F tại các đỉnh",
      "So sánh để chọn min / max",
    ],
    [
      "Đặt ẩn và đơn vị",
      "Lập các ràng buộc",
      "Kiểm tra nghiệm thực tế, kể cả điều kiện nguyên",
    ],
  ],
  values: [
    ["Chọn góc α", "Điểm M trên đường tròn đơn vị", "M(cos α; sin α)"],
    ["Độ dài OM = 1", "Định lý Pythagore", "cos² α + sin² α = 1"],
    ["90° < α < 180°", "M ở bên trái trục tung", "cos α âm, sin α dương"],
    ["Chọn α = 30°", "sin 30° = 1/2", "cos 30° = √3/2"],
    [
      "Xác định góc thuộc khoảng nào",
      "Dùng hệ thức sin² α + cos² α = 1",
      "Chọn dấu phù hợp",
    ],
  ],
  signs: [
    ["Vị trí M", "Hoành độ → cos; tung độ → sin", "Đọc dấu từ trục tọa độ"],
    ["0° < α < 90°", "M bên phải trục tung", "cos α > 0, sin α > 0"],
    ["90° < α < 180°", "M bên trái trục tung", "cos α < 0, sin α > 0"],
    [
      "Hai góc α và 180° − α",
      "Hai điểm đối xứng qua trục tung",
      "Sin bằng nhau, cos đối nhau",
    ],
    ["α = 90°", "M(0; 1)", "cos 90° = 0, sin 90° = 1"],
  ],
  cosine: [
    [
      "Góc A tại đỉnh A",
      "Cạnh BC đối diện A",
      "Quy ước BC = a, CA = b, AB = c",
    ],
    [
      "Biết b, c và góc xen giữa A",
      "a² = b² + c² − 2bc cos A",
      "Lấy căn dương để tìm a",
    ],
    ["Ví dụ b = 3, c = 2, A = 60°", "a² = 9 + 4 − 12 × 1/2 = 7", "a = √7"],
    ["Biết ba cạnh a, b, c", "cos A = (b² + c² − a²)/(2bc)", "Suy ra góc A"],
    [
      "Xét cạnh lớn nhất a",
      "So sánh a² với b² + c²",
      "Lớn hơn → góc A tù; bằng → vuông",
    ],
  ],
  "sine-law": [
    [
      "Ghép đúng cạnh và góc đối diện",
      "a/sin A = b/sin B = c/sin C",
      "Tỉ số chung bằng 2R",
    ],
    ["Biết một cặp a và A", "2R = a/sin A", "R = a/(2 sin A)"],
    [
      "Hai cạnh b, c và góc xen giữa A",
      "Đường cao h = c sin A",
      "S = bc sin A / 2",
    ],
    [
      "Biết ba cạnh hợp lệ",
      "Nửa chu vi p = (a + b + c)/2",
      "S = √[p(p − a)(p − b)(p − c)]",
    ],
    [
      "Xem dữ kiện đã biết",
      "Hai cạnh + góc: dùng sin; ba cạnh: Heron",
      "Kiểm tra đơn vị diện tích",
    ],
  ],
  "vectors-intro": [
    ["Điểm đầu → điểm cuối", "Hướng và độ dài", "Đó là một vectơ"],
    ["So sánh hai vectơ", "Cùng hướng và cùng độ dài", "Hai vectơ bằng nhau"],
    ["Đi theo u", "Từ đầu mút u, đi tiếp v", "Độ dời tổng: u + v"],
    [
      "Hai vectơ chung gốc",
      "Dựng hình bình hành",
      "Đường chéo biểu diễn u + v",
    ],
    ["u − v", "Đổi v thành −v", "Cộng u + (−v)"],
  ],
  "scalar-product": [
    [
      "Đưa u, v về chung gốc",
      "Chọn góc θ từ 0° đến 180°",
      "Đó là góc giữa hai vectơ",
    ],
    ["Độ dài |u|, |v|", "Nhân với cos θ", "u · v = |u||v| cos θ"],
    ["Hai vectơ khác vectơ 0", "u · v = 0", "u vuông góc v"],
    [
      "u = (x₁; y₁), v = (x₂; y₂)",
      "Nhân các tọa độ tương ứng",
      "u · v = x₁x₂ + y₁y₂",
    ],
    [
      "Tính tích vô hướng",
      "Chia cho |u||v| (khác 0)",
      "cos θ = (u · v)/(|u||v|)",
    ],
  ],
  statistics: [
    ["Cộng mọi giá trị mẫu", "Chia cho số phần tử n", "Số trung bình cộng x̄"],
    [
      "Sắp xếp tăng dần",
      "Tìm vị trí giữa",
      "Trung vị ít bị ảnh hưởng bởi ngoại lệ",
    ],
    [
      "Sắp mẫu, tìm Q₂ = Me",
      "Tìm trung vị nửa dưới và nửa trên",
      "Nhận được Q₁ và Q₃",
    ],
    [
      "Max − Min → khoảng biến thiên",
      "Q₃ − Q₁ → khoảng tứ phân vị",
      "Hai cách đo độ phân tán",
    ],
    [
      "Lấy độ lệch so với x̄",
      "Bình phương, cộng rồi chia n → s²",
      "Lấy căn → độ lệch chuẩn s",
    ],
  ],
  "quadratic-functions": [
    ["Chọn a ≠ 0", "a > 0 mở lên; a < 0 mở xuống", "Đồ thị là một parabol"],
    ["Tính xI = −b/(2a)", "Thay xI vào hàm số", "I(xI; yI) là đỉnh"],
    [
      "Δ > 0: hai nghiệm x₁ < x₂",
      "Ngoài hai nghiệm: cùng dấu a",
      "Giữa hai nghiệm: trái dấu a",
    ],
    [
      "Δ < 0: không có nghiệm thực",
      "Đồ thị không cắt trục Ox",
      "Tam thức luôn cùng dấu a",
    ],
    [
      "Đưa BPT về f(x) so với 0",
      "Tìm nghiệm và lập bảng dấu",
      "Chọn khoảng, xét có lấy mút không",
    ],
  ],
  "analytic-geometry": [
    ["Đường thẳng d", "u song song d, n vuông góc d", "u · n = 0"],
    [
      "Pháp tuyến n = (a; b) ≠ (0; 0)",
      "Điểm M₀(x₀; y₀) thuộc d",
      "a(x − x₀) + b(y − y₀) = 0",
    ],
    [
      "Điểm M(x₀; y₀) và d: ax + by + c = 0",
      "Tính |ax₀ + by₀ + c|",
      "Chia cho √(a² + b²)",
    ],
    [
      "Chọn tâm I(h; k), bán kính R > 0",
      "M cách I một khoảng R",
      "(x − h)² + (y − k)² = R²",
    ],
    ["Chọn điểm M", "Tính IM", "IM = R → M nằm trên đường tròn"],
  ],
  combinatorics: [
    [
      "Các phương án không trùng nhau",
      "Chọn phương án này HOẶC phương án kia",
      "Cộng số cách",
    ],
    [
      "Công việc gồm nhiều bước",
      "Mỗi bước có số lựa chọn xác định",
      "Nhân số cách của các bước",
    ],
    ["Xếp thứ tự toàn bộ n phần tử", "n × (n − 1) × … × 1", "Pₙ = n!"],
    ["Chọn k trong n phần tử", "Có xét thứ tự", "Aₙᵏ = n!/(n − k)!"],
    ["Chọn k trong n phần tử", "Không xét thứ tự", "Cₙᵏ = Aₙᵏ/k!"],
  ],
  probability: [
    ["Xác định phép thử", "Liệt kê mọi kết quả có thể", "Tập hợp đó là Ω"],
    ["Chọn một điều kiện", "Giữ các kết quả thỏa điều kiện", "Biến cố A ⊆ Ω"],
    ["Các kết quả đồng khả năng", "Đếm n(A) và n(Ω)", "P(A) = n(A)/n(Ω)"],
    ["Biến cố A", "Biến cố đối: Ω ∖ A", "P(A) = 1 − P(Ā)"],
    [
      "Mô tả phép thử, kiểm tra đồng khả năng",
      "Đếm tổng số và số thuận lợi",
      "Lập tỉ số, kiểm tra 0 ≤ P ≤ 1",
    ],
  ],
};
