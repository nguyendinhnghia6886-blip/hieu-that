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

/** A probe is a question to investigate, not a diagnosis of a learner. */
