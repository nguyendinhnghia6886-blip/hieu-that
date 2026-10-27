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
};
