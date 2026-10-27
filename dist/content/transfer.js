export const transferQuestion = {
  id: "transfer-1",
  lessonId: "values",
  prompt: "Cho góc tù β, biết sin β = 5/13. Tính cos β.",
  options: ["12/13", "−5/13", "−12/13", "5/13"],
  answer: 2,
  explanation:
    "cos²β = 1 − 25/169 = 144/169. Vì β là góc tù nên cos β < 0. Vậy cos β = −12/13.",
  hints: [
    "Hãy làm lại theo ba bước: điều kiện, độ lớn, dấu.",
    "cos²β = 1 − (5/13)².",
    "cos β có độ lớn 12/13 và mang dấu âm vì β là góc tù.",
  ],
  skill: "identity-and-sign",
};

export const transferBank = [
  transferQuestion,
  {
    id: "transfer-prop-1",
    lessonId: "propositions",
    prompt:
      "Cho mệnh đề chứa biến Q(x): “x² − 5x + 6 = 0” với x ∈ ℝ. Khẳng định nào sau đây là ĐÚNG?",
    options: [
      "Q(2) là mệnh đề đúng",
      "Q(1) là mệnh đề đúng",
      "Q(x) đúng với mọi x thực",
      "Q(4) là mệnh đề đúng",
    ],
    answer: 0,
    explanation:
      "Thay x = 2: 2² − 5(2) + 6 = 4 − 10 + 6 = 0. Do đó Q(2) là mệnh đề đúng.",
    hints: [
      "Giải phương trình bậc hai hoặc thay lần lượt giá trị x vào.",
      "2² − 5(2) + 6 = 0.",
      "x = 2 là nghiệm nên Q(2) đúng.",
    ],
    skill: "proposition-logic",
  },
  {
    id: "transfer-prop-2",
    lessonId: "propositions",
    prompt:
      "Mệnh đề phủ định của mệnh đề: “∀n ∈ ℕ, n² + 1 > 0” là:",
    options: [
      "∃n ∈ ℕ, n² + 1 ≤ 0",
      "∀n ∈ ℕ, n² + 1 ≤ 0",
      "∃n ∈ ℕ, n² + 1 < 0",
      "∀n ∈ ℕ, n² + 1 < 0",
    ],
    answer: 0,
    explanation:
      "Phủ định của lượng từ ∀ là ∃. Phủ định của > là ≤. Vậy phủ định là ∃n ∈ ℕ, n² + 1 ≤ 0.",
    hints: [
      "Đổi lượng từ ∀ thành ∃.",
      "Phủ định của dấu > là dấu ≤.",
      "Ghép lại để chọn đáp án.",
    ],
    skill: "proposition-negation",
  },
  {
    id: "transfer-prop-3",
    lessonId: "propositions",
    prompt:
      "Cho định lý: “Nếu số tự nhiên n có tổng các chữ số chia hết cho 9 thì n chia hết cho 9”. Phát biểu nào sau đây sử dụng ĐÚNG khái niệm điều kiện cần và đủ?",
    options: [
      "Một số tự nhiên n chia hết cho 9 khi và chỉ khi n có tổng các chữ số chia hết cho 9",
      "Tổng các chữ số chia hết cho 9 là điều kiện đủ nhưng không phải điều kiện cần",
      "n chia hết cho 9 là điều kiện đủ để tổng các chữ số chia hết cho 3",
      "Định lý trên không có mệnh đề đảo",
    ],
    answer: 0,
    explanation:
      "Theo dấu hiệu chia hết cho 9, cả chiều thuận và chiều đảo đều đúng (P ⇒ Q và Q ⇒ P). Do đó đây là điều kiện cần và đủ (tương đương).",
    hints: [
      "Xét tính đúng của cả chiều thuận và chiều đảo.",
      "Số chia hết cho 9 có tổng các chữ số chia hết cho 9 và ngược lại.",
      "Hai mệnh đề tương đương khi cả hai chiều đều đúng.",
    ],
    skill: "proposition-logic",
  },
];

export function getTransferQuestion(lessonId, questionId = null) {
  if (lessonId === "propositions") {
    if (questionId === "q_prop_2" || questionId === "q_prop_8" || questionId === "q_prop_9" || questionId === "q_prop_17" || questionId === "q_prop_20" || questionId === "q_prop_21") {
      return transferBank.find((q) => q.id === "transfer-prop-2");
    }
    if (questionId === "q_prop_3" || questionId === "q_prop_12" || questionId === "q_prop_13" || questionId === "q_prop_14") {
      return transferBank.find((q) => q.id === "transfer-prop-3");
    }
    return transferBank.find((q) => q.id === "transfer-prop-1");
  }
  return transferQuestion;
}

/** A probe is a question to investigate, not a diagnosis of a learner. */
