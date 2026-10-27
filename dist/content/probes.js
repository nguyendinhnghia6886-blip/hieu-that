export const probes = {
  sign: {
    prompt: "Với 90° < α < 180°, cos α mang dấu gì?",
    options: ["Dương", "Âm", "Bằng 0", "Chưa thể xác định"],
    answer: 1,
    explanation:
      "Đó là khoảng của góc tù. Điểm trên nửa đường tròn đơn vị nằm bên trái trục tung, nên hoành độ cos α âm.",
  },
  root: {
    prompt: "Phương trình u² = 16/25 có những nghiệm nào?",
    options: [
      "Chỉ u = 4/5",
      "Chỉ u = −4/5",
      "u = 4/5 hoặc u = −4/5",
      "u = 16/25 hoặc u = −16/25",
    ],
    answer: 2,
    explanation:
      "Cả (4/5)² và (−4/5)² đều bằng 16/25, nên phương trình có hai nghiệm. Khi u là cos của góc tù, điều kiện góc giúp chọn nghiệm âm.",
  },
  identity: {
    prompt:
      "Biết sin α = 3/5. Chỉ dùng sin²α + cos²α = 1, em tìm được cos²α bằng bao nhiêu?",
    options: ["2/5", "9/25", "4/5", "16/25"],
    answer: 3,
    explanation:
      "Bình phương sin α để được 9/25. Khi đó cos²α = 1 − 9/25 = 16/25. Chưa thể chọn dấu của cos nếu không dùng điều kiện của góc.",
  },
  prop_def: {
    prompt: "Một câu như thế nào thì được coi là một mệnh đề toán học?",
    options: [
      "Là câu khẳng định có tính đúng hoặc sai dứt khoát",
      "Là câu hỏi về một tính chất toán học",
      "Là câu cảm thán hoặc câu cầu khiến",
      "Là câu luôn có chứa chữ số",
    ],
    answer: 0,
    explanation:
      "Mệnh đề toán học là một câu khẳng định có tính đúng hoặc sai rõ ràng. Câu không thể vừa đúng vừa sai.",
  },
  prop_neg_rule: {
    prompt:
      "Khi phủ định một khẳng định chứa lượng từ '∀x ∈ X, P(x)', quy tắc biến đổi đúng là gì?",
    options: [
      "Giữ nguyên ∀ và phủ định P(x)",
      "Đổi ∀ thành ∃ và phủ định P(x)",
      "Đổi ∀ thành ∃ và giữ nguyên P(x)",
      "Chỉ cần thêm từ 'không' vào đầu câu",
    ],
    answer: 1,
    explanation:
      "Phủ định của lượng từ với mọi (∀) là lượng từ tồn tại (∃) và phủ định vị từ P(x): ¬(∀x ∈ X, P(x)) ⇔ ∃x ∈ X, ¬P(x).",
  },
  prop_converse_rule: {
    prompt:
      "Nếu định lý thuận P ⇒ Q đúng, ta có thể kết luận gì về tính đúng sai của mệnh đề đảo Q ⇒ P?",
    options: [
      "Mệnh đề đảo chắc chắn đúng",
      "Mệnh đề đảo chắc chắn sai",
      "Mệnh đề đảo có thể đúng hoặc sai, cần kiểm tra độc lập",
      "Mệnh đề đảo luôn tương đương với mệnh đề thuận",
    ],
    answer: 2,
    explanation:
      "Tính đúng sai của mệnh đề đảo Q ⇒ P độc lập với mệnh đề thuận P ⇒ Q. Mệnh đề thuận đúng không đảm bảo mệnh đề đảo đúng.",
  },
  prop_necessary_rule: {
    prompt:
      "Trong định lý P ⇒ Q, mệnh đề kết luận Q được gọi là điều kiện gì để có P?",
    options: [
      "Điều kiện đủ",
      "Điều kiện cần",
      "Điều kiện cần và đủ",
      "Giả thiết",
    ],
    answer: 1,
    explanation:
      "Trong định lý P ⇒ Q: P là điều kiện đủ để có Q; Q là điều kiện cần để có P.",
  },
  prop_counterexample_rule: {
    prompt:
      "Để bác bỏ mệnh đề '∀x ∈ X, P(x)' là SAI, phương pháp ngắn gọn nhất là gì?",
    options: [
      "Chứng minh P(x) sai với mọi x",
      "Chỉ ra ít nhất một phản ví dụ x0 ∈ X sao cho P(x0) sai",
      "Lấy một vài ví dụ thấy đúng",
      "Dùng phương pháp biến đổi đại số",
    ],
    answer: 1,
    explanation:
      "Vì mệnh đề khẳng định đúng với TẤT CẢ mọi x, nên chỉ cần tìm được MỘT phản ví dụ x0 làm khẳng định sai là đủ kết luận mệnh đề sai.",
  },
  set_interval: {
    prompt:
      "Khi lấy hợp hai tập hợp A = (-∞; 2] và B = (0; 5), phần tử x = 2 có thuộc tập hợp A ∪ B không?",
    options: [
      "Có, vì 2 thuộc tập hợp A",
      "Không, vì 2 không thuộc B",
      "Chỉ thuộc khi 2 là số nguyên dương",
      "Chưa thể xác định",
    ],
    answer: 0,
    explanation:
      "Phần tử x thuộc A ∪ B khi và chỉ khi x thuộc A hoặc x thuộc B. Vì 2 ∈ (-∞; 2] nên 2 chắc chắn thuộc A ∪ B.",
  },
  ineq_boundary: {
    prompt:
      "Miền nghiệm của bất phương trình 2x - y ≥ 4 có chứa các điểm nằm trên đường thẳng bờ 2x - y = 4 không?",
    options: [
      "Có chứa (vẽ bằng đường nét liền)",
      "Không chứa (vẽ bằng đường nét đứt)",
      "Chỉ chứa gốc tọa độ O(0; 0)",
      "Chỉ chứa khi hoành độ x > 0",
    ],
    answer: 0,
    explanation:
      "Bất đẳng thức có chứa dấu bằng (≥) nên các điểm nằm trên đường thẳng 2x - y = 4 cũng là nghiệm và bờ được vẽ nét liền.",
  },
  system_ineq_origin: {
    prompt:
      "Để kiểm tra xem miền nghiệm của một hệ BPT có chứa gốc tọa độ O(0; 0) hay không, ta thực hiện như thế nào?",
    options: [
      "Thay tọa độ (0; 0) vào đồng thời tất cả các BPT của hệ",
      "Chỉ cần thay tọa độ (0; 0) vào một BPT bất kỳ",
      "Vẽ đồ thị rồi ước lượng trực giác bằng mắt",
      "Cộng các hệ số tự do của các BPT lại với nhau",
    ],
    answer: 0,
    explanation:
      "Điểm O(0; 0) thuộc miền nghiệm của hệ khi và chỉ khi tọa độ của nó thỏa mãn tất cả các bất phương trình trong hệ cùng một lúc.",
  },
  sine_law_radius: {
    prompt:
      "Trong tam giác ABC, hệ thức đúng của định lý sin liên hệ giữa cạnh a và bán kính đường tròn ngoại tiếp R là gì?",
    options: [
      "a / sin A = 2R",
      "a / sin A = R",
      "a / sin A = R / 2",
      "a · sin A = 2R",
    ],
    answer: 0,
    explanation:
      "Định lý sin khẳng định: a / sin A = b / sin B = c / sin C = 2R, trong đó 2R là đường kính đường tròn ngoại tiếp tam giác.",
  },
  vector_opposite: {
    prompt:
      "Hai vectơ được gọi là đối nhau khi thỏa mãn đồng thời hai điều kiện nào?",
    options: [
      "Ngược hướng và có cùng độ dài",
      "Cùng hướng và có cùng độ dài",
      "Cùng phương nhưng có độ dài khác nhau",
      "Vuông góc với nhau",
    ],
    answer: 0,
    explanation:
      "Hai vectơ đối nhau là hai vectơ ngược hướng và có cùng độ dài. Tổng của hai vectơ đối nhau luôn bằng vectơ không.",
  },
  scalar_prod_angle: {
    prompt:
      "Cho hai vectơ khác không a và b. Nếu tích vô hướng a · b = 0 thì góc giữa hai vectơ này bằng bao nhiêu?",
    options: [
      "90° (hai vectơ vuông góc)",
      "0° (hai vectơ cùng hướng)",
      "180° (hai vectơ ngược hướng)",
      "45°",
    ],
    answer: 0,
    explanation:
      "Vì a · b = |a| · |b| · cos(a, b) = 0 và |a|, |b| > 0 nên cos(a, b) = 0, suy ra góc giữa hai vectơ bằng 90°.",
  },
  stat_median: {
    prompt:
      "Để tìm trung vị (Me) của một mẫu số liệu gồm n số, bước đầu tiên bắt buộc phải thực hiện là gì?",
    options: [
      "Sắp xếp mẫu số liệu theo thứ tự không giảm",
      "Tính trung bình cộng của toàn bộ mẫu",
      "Tìm giá trị có tần số lớn nhất (Mốt)",
      "Tính khoảng biến thiên R",
    ],
    answer: 0,
    explanation:
      "Trung vị là giá trị chia mẫu số liệu đã sắp xếp thành hai nửa bằng nhau. Do đó bắt buộc phải xếp thứ tự trước.",
  },
  quad_vertex: {
    prompt:
      "Tọa độ đỉnh I của parabol y = ax² + bx + c (a ≠ 0) có hoành độ xI bằng biểu thức nào sau đây?",
    options: [
      "-b / (2a)",
      "b / (2a)",
      "-b / a",
      "c / a",
    ],
    answer: 0,
    explanation:
      "Hoành độ đỉnh parabol và trục đối xứng của đồ thị luôn là đường thẳng x = -b / (2a).",
  },
  line_normal_direction: {
    prompt:
      "Nếu đường thẳng d có một vectơ pháp tuyến n = (a; b) (a² + b² > 0) thì một vectơ chỉ phương u của d là:",
    options: [
      "u = (-b; a)",
      "u = (a; b)",
      "u = (b; a)",
      "u = (a; -b)",
    ],
    answer: 0,
    explanation:
      "Vectơ chỉ phương u vuông góc với vectơ pháp tuyến n, nên tích vô hướng u · n = (-b)·a + a·b = 0. Do đó u = (-b; a).",
  },
  comb_perm_vs_comb: {
    prompt:
      "Điểm khác biệt cốt lõi giữa bài toán chỉnh hợp A_n^k và tổ hợp C_n^k (1 ≤ k ≤ n) là gì?",
    options: [
      "Chỉnh hợp có sắp xếp thứ tự, còn tổ hợp không phân biệt thứ tự",
      "Tổ hợp có sắp xếp thứ tự, còn chỉnh hợp không phân biệt thứ tự",
      "Chỉnh hợp cho phép các phần tử lặp lại",
      "Tổ hợp luôn có số cách chọn lớn hơn chỉnh hợp",
    ],
    answer: 0,
    explanation:
      "Chỉnh hợp chọn k phần tử và gán vào k vị trí có thứ tự (A_n^k). Tổ hợp chỉ chọn một tập hợp con gồm k phần tử không phân biệt thứ tự (C_n^k = A_n^k / k!).",
  },
  prob_complement: {
    prompt:
      "Gọi A là một biến cố và ¬A là biến cố đối của A trong cùng phép thử. Tổng xác suất P(A) + P(¬A) luôn bằng bao nhiêu?",
    options: [
      "1",
      "0",
      "0.5",
      "Không xác định được nếu chưa biết không gian mẫu",
    ],
    answer: 0,
    explanation:
      "Biến cố đối ¬A gồm toàn bộ các kết quả của không gian mẫu không thuận lợi cho A. Vì A và ¬A xung khắc và A ∪ ¬A = Ω nên P(A) + P(¬A) = P(Ω) = 1.",
  },
};
