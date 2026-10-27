// Question bank expansion for Part 1: Lessons 1 to 5
// (propositions, sets, inequalities-2var, system-inequalities, values)

export const part1Questions = [
  // ==========================================
  // LESSON 1: PROPOSITIONS (Adding True-False & Short-Answer)
  // ==========================================
  {
    id: "q_prop_25",
    type: "true-false",
    lessonId: "propositions",
    prompt: "Cho các mệnh đề sau về logic toán học. Xét tính đúng/sai của từng khẳng định:",
    subQuestions: [
      { id: "a", text: "Số 2026 là một số chia hết cho 2.", answer: true, explanation: "Chữ số tận cùng là 6 (số chẵn) nên 2026 chia hết cho 2 là khẳng định đúng." },
      { id: "b", text: "Mọi số nguyên tố đều là số lẻ.", answer: false, explanation: "Số 2 là số nguyên tố chẵn duy nhất, do đó khẳng định này là sai." },
      { id: "c", text: "Phủ định của mệnh đề '∀x ∈ ℝ, x² > 0' là '∃x ∈ ℝ, x² ≤ 0'.", answer: true, explanation: "Phủ định của lượng từ ∀ là ∃ và phủ định của > là ≤." },
      { id: "d", text: "Nếu tam giác ABC đều thì tam giác ABC cân.", answer: true, explanation: "Tam giác đều có 3 cạnh bằng nhau nên hiển nhiên có 2 cạnh bằng nhau (cân)." }
    ],
    options: [
      "a, c, d Đúng; b Sai",
      "a, b, d Đúng; c Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Số 2 là số nguyên tố chẵn duy nhất.",
      "Phủ định của ∀ là ∃ và ngược lại.",
      "Mọi tam giác đều đương nhiên là tam giác cân."
    ],
    explanation: "Ý a đúng (2026 tận cùng là 6); Ý b sai (số 2 là số nguyên tố chẵn); Ý c đúng (đúng quy tắc phủ định lượng từ); Ý d đúng (đều kéo theo cân).",
    skill: "proposition-logic"
  },
  {
    id: "q_prop_26",
    type: "short-answer",
    lessonId: "propositions",
    prompt: "Cho mệnh đề chứa biến P(n): 'n là số tự nhiên chia hết cho 3 và n < 20'. Hỏi có bao nhiêu số tự nhiên n làm cho mệnh đề P(n) là khẳng định đúng?",
    answer: 7,
    acceptedAnswers: ["7", "7.0"],
    options: ["7", "6", "8", "5"],
    hints: [
      "Số tự nhiên nhỏ nhất chia hết cho 3 là 0.",
      "Liệt kê các số tự nhiên k thỏa mãn 0 ≤ 3k < 20.",
      "Các giá trị n là: 0, 3, 6, 9, 12, 15, 18."
    ],
    explanation: "Các số tự nhiên n thỏa mãn P(n) là: 0, 3, 6, 9, 12, 15, 18. Có tất cả 7 giá trị.",
    skill: "proposition-logic"
  },

  // ==========================================
  // LESSON 2: SETS (22 questions total: 4 original + 12 MC + 3 TF + 3 SA)
  // ==========================================
  {
    id: "q_set_5",
    lessonId: "sets",
    prompt: "Cho tập hợp A = {x ∈ ℕ | (2x − 1)(x² − 5x + 6) = 0}. Viết tập hợp A bằng cách liệt kê các phần tử:",
    options: ["A = {2; 3}", "A = {1/2; 2; 3}", "A = {2}", "A = {3}"],
    answer: 0,
    hints: [
      "Giải phương trình (2x - 1)(x² - 5x + 6) = 0 để tìm các nghiệm thực.",
      "2x - 1 = 0 cho nghiệm x = 1/2.",
      "Chú ý điều kiện x ∈ ℕ (chỉ lấy nghiệm là số tự nhiên, loại phân số 1/2)."
    ],
    explanation: "PT (2x − 1)(x² − 5x + 6) = 0 có các nghiệm là x = 1/2, x = 2, x = 3. Vì x ∈ ℕ nên x = 1/2 bị loại, vậy A = {2; 3}.",
    skill: "set-operations"
  },
  {
    id: "q_set_6",
    lessonId: "sets",
    prompt: "Một tập hợp X có 4 phần tử thì số tập hợp con của X là bao nhiêu?",
    options: ["16", "8", "12", "15"],
    answer: 0,
    hints: [
      "Công thức số tập con của tập hợp có n phần tử là 2ⁿ.",
      "Ở đây n = 4.",
      "2⁴ = 2 · 2 · 2 · 2 = 16."
    ],
    explanation: "Số tập hợp con của tập hợp gồm n phần tử là 2ⁿ. Với n = 4, số tập con là 2⁴ = 16.",
    skill: "set-operations"
  },
  {
    id: "q_set_7",
    lessonId: "sets",
    prompt: "Cho hai tập hợp A = (−3; 5] và B = [0; 7). Xác định tập hợp A ∩ B:",
    options: ["[0; 5]", "(−3; 7)", "[0; 5)", "(−3; 0]"],
    answer: 0,
    hints: [
      "Giao của hai tập hợp là phần chung của cả hai tập.",
      "Vẽ hai khoảng trên cùng một trục số.",
      "Điểm đầu chung là 0 (thuộc cả hai) và điểm cuối chung là 5 (thuộc cả hai)."
    ],
    explanation: "A ∩ B là các số x vừa thỏa mãn −3 < x ≤ 5 vừa thỏa mãn 0 ≤ x < 7, tức 0 ≤ x ≤ 5. Do đó A ∩ B = [0; 5].",
    skill: "set-operations"
  },
  {
    id: "q_set_8",
    lessonId: "sets",
    prompt: "Cho hai tập hợp A = (−∞; 2] và B = (0; +∞). Xác định tập hợp A ∪ B:",
    options: ["ℝ", "(0; 2]", "(−∞; +∞) \\ {0}", "[0; 2]"],
    answer: 0,
    hints: [
      "Hợp của hai tập hợp là gom tất cả phần tử thuộc A hoặc thuộc B.",
      "Phần (0; 2] nằm trong cả hai tập.",
      "Phủ kín từ −∞ đến +∞ nghĩa là toàn bộ trục số thực ℝ."
    ],
    explanation: "Hợp A ∪ B lấy toàn bộ các số x ≤ 2 cùng các số x > 0. Do hai miền chồng lên nhau ở đoạn (0; 2] nên phủ kín toàn bộ trục số thực ℝ = (−∞; +∞).",
    skill: "set-operations"
  },
  {
    id: "q_set_9",
    lessonId: "sets",
    prompt: "Cho hai tập hợp A = [−2; 4) và B = (1; 6]. Xác định hiệu A \\ B:",
    options: ["[−2; 1]", "[−2; 1)", "(4; 6]", "[−2; 6]"],
    answer: 0,
    hints: [
      "A \\ B gồm các phần tử thuộc A nhưng KHÔNG thuộc B.",
      "B = (1; 6] chứa các số lớn hơn 1.",
      "Số 1 không thuộc B nên số 1 vẫn thuộc A \\ B, vậy đầu mút 1 là ngoặc vuông."
    ],
    explanation: "A \\ B là tập gồm các phần tử x ∈ [−2; 4) mà x ∉ (1; 6], tức −2 ≤ x ≤ 1. Vì 1 ∉ B nên 1 vẫn giữ lại trong A \\ B, ta được [−2; 1].",
    skill: "set-operations"
  },
  {
    id: "q_set_10",
    lessonId: "sets",
    prompt: "Cho tập E = (−4; 3]. Phần bù của E trong ℝ (kí hiệu C_ℝ E) là:",
    options: [
      "(−∞; −4] ∪ (3; +∞)",
      "(−∞; −4) ∪ [3; +∞)",
      "(−∞; −4] ∪ [3; +∞)",
      "(−∞; 3]"
    ],
    answer: 0,
    hints: [
      "Phần bù C_ℝ E = ℝ \\ E.",
      "E chứa các số −4 < x ≤ 3.",
      "Phần còn lại gồm các số x ≤ −4 hoặc x > 3."
    ],
    explanation: "C_ℝ E gồm các số thực không thuộc (−4; 3], tức x ≤ −4 hoặc x > 3. Viết dưới dạng hợp hai khoảng là (−∞; −4] ∪ (3; +∞).",
    skill: "set-operations"
  },
  {
    id: "q_set_11",
    lessonId: "sets",
    prompt: "Lớp 10A có 40 học sinh, trong đó có 25 em thích môn Toán, 20 em thích môn Văn, và 10 em thích cả hai môn. Hỏi có bao nhiêu em không thích cả hai môn?",
    options: ["5 em", "7 em", "8 em", "10 em"],
    answer: 0,
    hints: [
      "Dùng công thức đếm: |T ∪ V| = |T| + |V| - |T ∩ V|.",
      "Số học sinh thích ít nhất một môn là 25 + 20 - 10 = 35.",
      "Lấy tổng sĩ số trừ đi số em thích ít nhất một môn: 40 - 35 = 5."
    ],
    explanation: "Số học sinh thích ít nhất 1 môn là n(T ∪ V) = 25 + 20 − 10 = 35 em. Số học sinh không thích môn nào là 40 − 35 = 5 em.",
    skill: "set-operations"
  },
  {
    id: "q_set_12",
    lessonId: "sets",
    prompt: "Tìm tham số m để hai khoảng A = (m − 1; m + 3) và B = (2; 6) có giao khác rỗng (A ∩ B ≠ ∅):",
    options: ["−1 < m < 7", "m > −1", "m < 7", "0 < m < 5"],
    answer: 0,
    hints: [
      "Hai khoảng (a; b) và (c; d) rời nhau khi b ≤ c hoặc a ≥ d.",
      "A và B rời nhau khi m + 3 ≤ 2 (m ≤ -1) hoặc m - 1 ≥ 6 (m ≥ 7).",
      "Để A ∩ B ≠ ∅ thì phủ định lại: -1 < m < 7."
    ],
    explanation: "A ∩ B = ∅ khi m + 3 ≤ 2 ⇔ m ≤ −1 hoặc m − 1 ≥ 6 ⇔ m ≥ 7. Do đó A ∩ B ≠ ∅ ⇔ −1 < m < 7.",
    skill: "set-operations"
  },
  {
    id: "q_set_13",
    lessonId: "sets",
    prompt: "Cho tập A = [m; m + 2] và B = [−1; 2]. Tìm m để A ⊂ B:",
    options: ["−1 ≤ m ≤ 0", "−1 ≤ m ≤ 2", "0 ≤ m ≤ 2", "m ≥ −1"],
    answer: 0,
    hints: [
      "A ⊂ B nghĩa là toàn bộ khoảng A phải nằm trọn bên trong khoảng B.",
      "Điều kiện: m ≥ -1 và m + 2 ≤ 2.",
      "Giải hệ: m ≥ -1 và m ≤ 0."
    ],
    explanation: "Để A ⊂ B thì điểm đầu m ≥ −1 và điểm cuối m + 2 ≤ 2 ⇔ m ≤ 0. Kết hợp lại ta được −1 ≤ m ≤ 0.",
    skill: "set-operations"
  },
  {
    id: "q_set_14",
    lessonId: "sets",
    prompt: "Cho A = {x ∈ ℝ | x² − 4 = 0} và B = {x ∈ ℝ | x² + 2x = 0}. Tập hợp A ∩ B là:",
    options: ["{−2}", "{2}", "{0}", "{−2; 2}"],
    answer: 0,
    hints: [
      "Giải x² - 4 = 0 tìm được A = {-2; 2}.",
      "Giải x² + 2x = 0 tìm được B = {-2; 0}.",
      "Phần tử chung của A và B là -2."
    ],
    explanation: "Ta có A = {−2; 2} và B = {−2; 0}. Giao của hai tập hợp là phần tử chung duy nhất {−2}.",
    skill: "set-operations"
  },
  {
    id: "q_set_15",
    lessonId: "sets",
    prompt: "Kí hiệu nào sau đây biểu diễn mối quan hệ đúng giữa tập số tự nhiên ℕ và tập số hữu tỉ ℚ?",
    options: ["ℕ ⊂ ℚ", "ℕ ∈ ℚ", "ℚ ⊂ ℕ", "ℕ ∩ ℚ = ∅"],
    answer: 0,
    hints: [
      "Mọi số tự nhiên đều viết được dưới dạng phân số n/1 nên là số hữu tỉ.",
      "Quan hệ giữa hai tập hợp là quan hệ tập con (⊂), không dùng quan hệ phần tử (∈)."
    ],
    explanation: "Mọi số tự nhiên đều là số hữu tỉ (viết dưới dạng n = n/1). Quan hệ giữa hai tập hợp là quan hệ bao hàm: ℕ ⊂ ℚ.",
    skill: "set-operations"
  },
  {
    id: "q_set_16",
    lessonId: "sets",
    prompt: "Cho A = (−∞; 3] và B = [3; +∞). Mệnh đề nào sau đây đúng?",
    options: ["A ∩ B = {3}", "A ∩ B = ∅", "A ∪ B = ℝ \\ {3}", "A \\ B = (−∞; 3)"],
    answer: 0,
    hints: [
      "Điểm số 3 có thuộc khoảng A = (-∞; 3] không? Có vì ngoặc vuông.",
      "Điểm số 3 có thuộc khoảng B = [3; +∞) không? Có vì ngoặc vuông.",
      "Phần chung duy nhất giữa hai khoảng là số 3."
    ],
    explanation: "Vì cả hai tập đều lấy điểm x = 3 (ngoặc vuông tại 3), và không có điểm nào khác cùng thuộc cả hai tập, nên A ∩ B = {3}.",
    skill: "set-operations"
  },
  {
    id: "q_set_17",
    type: "true-false",
    lessonId: "sets",
    prompt: "Cho hai tập hợp A = (−2; 3] và B = [1; 5). Xét tính đúng/sai của từng khẳng định sau:",
    subQuestions: [
      { id: "a", text: "A ∩ B = [1; 3].", answer: true, explanation: "Phần chung từ 1 (ngoặc vuông) đến 3 (ngoặc vuông) nên A ∩ B = [1; 3]." },
      { id: "b", text: "A ∪ B = (−2; 5).", answer: true, explanation: "Gộp hai khoảng phủ từ -2 (ngoặc tròn) đến 5 (ngoặc tròn) nên A ∪ B = (−2; 5)." },
      { id: "c", text: "A \\ B = (−2; 1).", answer: true, explanation: "Số 1 thuộc B nên khi lấy A \\ B phải bỏ 1 đi, thành ngoặc tròn tại 1." },
      { id: "d", text: "B \\ A = [3; 5).", answer: false, explanation: "Số 3 thuộc A nên B \\ A không chứa 3, phải là (3; 5) chứ không phải [3; 5)." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, b, d Đúng; c Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Kiểm tra xem các đầu mút 1 và 3 có thuộc tập hợp nào.",
      "A \\ B bỏ đi các phần tử thuộc B.",
      "B \\ A bỏ đi các phần tử thuộc A (trong đó số 3 thuộc A nên bị loại)."
    ],
    explanation: "Ý a đúng (A ∩ B = [1; 3]); Ý b đúng (A ∪ B = (-2; 5)); Ý c đúng (A \\ B = (-2; 1)); Ý d sai vì 3 ∈ A nên 3 ∉ (B \\ A), do đó B \\ A = (3; 5).",
    skill: "set-operations"
  },
  {
    id: "q_set_18",
    type: "true-false",
    lessonId: "sets",
    prompt: "Cho tập hợp X = {1; 2; 3}. Xét tính đúng/sai của từng khẳng định sau:",
    subQuestions: [
      { id: "a", text: "1 ∈ X.", answer: true, explanation: "1 là một phần tử của tập hợp X." },
      { id: "b", text: "{1; 2} ⊂ X.", answer: true, explanation: "{1; 2} là tập hợp con gồm hai phần tử của X." },
      { id: "c", text: "∅ ⊂ X.", answer: true, explanation: "Tập hợp rỗng là con của mọi tập hợp." },
      { id: "d", text: "{1} ∈ X.", answer: false, explanation: "{1} là một tập hợp, nó là con của X chứ không phải phần tử của X." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, b Đúng; c, d Sai",
      "b, c, d Đúng; a Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Phân biệt giữa quan hệ thuộc (∈) dành cho phần tử và bao hàm (⊂) dành cho tập hợp.",
      "{1} là tập hợp con của X, không phải phần tử."
    ],
    explanation: "Ý a, b, c đúng. Ý d sai vì {1} là tập hợp nên phải viết {1} ⊂ X mới đúng quy ước ký hiệu.",
    skill: "set-operations"
  },
  {
    id: "q_set_19",
    type: "true-false",
    lessonId: "sets",
    prompt: "Cho các tập hợp số tự nhiên ℕ, số nguyên ℤ, số hữu tỉ ℚ và số thực ℝ. Xét tính đúng/sai của các phát biểu:",
    subQuestions: [
      { id: "a", text: "ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.", answer: true, explanation: "Thứ tự bao hàm chuẩn giữa các tập hợp số học." },
      { id: "b", text: "ℤ \\ ℕ là tập hợp các số nguyên âm.", answer: true, explanation: "ℤ gồm số nguyên âm, số 0 và số tự nhiên dương. Bỏ ℕ (gồm 0 và nguyên dương) thì còn lại các số nguyên âm." },
      { id: "c", text: "ℚ ∩ (ℝ \\ ℚ) = ∅.", answer: true, explanation: "Tập số hữu tỉ ℚ và tập số vô tỉ (ℝ \\ ℚ) không có phần tử chung." },
      { id: "d", text: "Số √2 thuộc tập hợp ℚ.", answer: false, explanation: "√2 là số vô tỉ, không thể biểu diễn dưới dạng phân số hữu tỉ." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, c Đúng; b, d Sai",
      "b, d Đúng; a, c Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "√2 có phải là số vô tỉ không?",
      "Tập số vô tỉ là phần bù của ℚ trong ℝ."
    ],
    explanation: "Ý a, b, c đều đúng; Ý d sai vì √2 là số vô tỉ (không thuộc ℚ).",
    skill: "set-operations"
  },
  {
    id: "q_set_20",
    type: "short-answer",
    lessonId: "sets",
    prompt: "Cho tập hợp A = {x ∈ ℤ | −3 ≤ x < 4}. Hỏi tập hợp A có tất cả bao nhiêu phần tử?",
    answer: 7,
    acceptedAnswers: ["7", "7.0"],
    options: ["7", "8", "6", "9"],
    hints: [
      "Liệt kê các số nguyên từ −3 đến 3.",
      "Các phần tử: −3, −2, −1, 0, 1, 2, 3.",
      "Số 4 không lấy do dấu <."
    ],
    explanation: "Các số nguyên x thỏa mãn −3 ≤ x < 4 là: −3, −2, −1, 0, 1, 2, 3. Có tất cả 7 phần tử.",
    skill: "set-operations"
  },
  {
    id: "q_set_21",
    type: "short-answer",
    lessonId: "sets",
    prompt: "Cho tập hợp A gồm 5 phần tử. Hỏi có bao nhiêu tập hợp con của A chứa đúng 2 phần tử?",
    answer: 10,
    acceptedAnswers: ["10", "10.0"],
    options: ["10", "20", "5", "15"],
    hints: [
      "Số tập con gồm k phần tử của tập n phần tử là tổ hợp C_n^k.",
      "Tính C_5^2 = (5 · 4) / (2 · 1).",
      "Kết quả là 10."
    ],
    explanation: "Số tập con gồm 2 phần tử chọn từ 5 phần tử là tổ hợp C_5^2 = (5 × 4) / 2 = 10 tập con.",
    skill: "set-operations"
  },
  {
    id: "q_set_22",
    type: "short-answer",
    lessonId: "sets",
    prompt: "Trong một khảo sát 50 học sinh, có 30 học sinh chơi bóng đá và 25 học sinh chơi bóng rổ. Biết rằng có 5 học sinh không chơi môn thể thao nào. Hỏi có bao nhiêu học sinh chơi CẢ HAI môn bóng đá và bóng rổ?",
    answer: 10,
    acceptedAnswers: ["10", "10.0"],
    options: ["10", "15", "5", "20"],
    hints: [
      "Số học sinh chơi ít nhất một môn: 50 - 5 = 45 học sinh.",
      "Áp dụng: |A ∪ B| = |A| + |B| - |A ∩ B|.",
      "45 = 30 + 25 - |A ∩ B| ⇒ |A ∩ B| = 55 - 45 = 10."
    ],
    explanation: "Số học sinh chơi ít nhất một môn thể thao là 50 − 5 = 45 em. Theo công thức Venn: n(Đá ∩ Rổ) = n(Đá) + n(Rổ) − n(Đá ∪ Rổ) = 30 + 25 − 45 = 10 em.",
    skill: "set-operations"
  },

  // ==========================================
  // LESSON 3: INEQUALITIES-2VAR (22 questions total: 4 original + 12 MC + 3 TF + 3 SA)
  // ==========================================
  {
    id: "q_ineq_5",
    lessonId: "inequalities-2var",
    prompt: "Cặp số nào sau đây KHÔNG PHẢI là nghiệm của bất phương trình 2x + y − 3 > 0?",
    options: ["(1; 0)", "(2; 1)", "(0; 4)", "(3; −1)"],
    answer: 0,
    hints: [
      "Thay từng cặp số (x; y) vào vế trái 2x + y - 3.",
      "Với (1; 0): 2(1) + 0 - 3 = -1.",
      "-1 không lớn hơn 0 nên (1; 0) không thỏa mãn."
    ],
    explanation: "Thay (1; 0) vào vế trái: 2(1) + 0 − 3 = −1 < 0 (không thỏa mãn > 0). Do đó (1; 0) không phải là nghiệm.",
    skill: "inequalities-2var"
  },
  {
    id: "q_ineq_6",
    lessonId: "inequalities-2var",
    prompt: "Đường thẳng bờ của bất phương trình 3x − 2y + 6 = 0 cắt trục hoành Ox tại điểm nào?",
    options: ["(−2; 0)", "(0; 3)", "(2; 0)", "(0; −3)"],
    answer: 0,
    hints: [
      "Giao điểm với trục hoành Ox có tung độ y = 0.",
      "Cho y = 0 vào phương trình: 3x - 2(0) + 6 = 0.",
      "3x = -6 ⇒ x = -2."
    ],
    explanation: "Giao với trục Ox thì y = 0: 3x + 6 = 0 ⇔ x = −2. Tọa độ giao điểm là (−2; 0).",
    skill: "inequalities-2var"
  },
  {
    id: "q_ineq_7",
    lessonId: "inequalities-2var",
    prompt: "Khi biểu diễn miền nghiệm của BPT 2x − y + 4 ≤ 0, đường thẳng bờ d: 2x − y + 4 = 0 được vẽ bằng:",
    options: [
      "Nét liền (kể cả các điểm trên bờ)",
      "Nét đứt (không kể các điểm trên bờ)",
      "Đường cong parabol",
      "Đường thẳng song song với trục hoành"
    ],
    answer: 0,
    hints: [
      "Bất phương trình có chứa dấu bằng '≤' hay chỉ là dấu '<' ngặt?",
      "Dấu '≤' hoặc '≥' lấy cả bờ nên vẽ bằng nét liền."
    ],
    explanation: "Vì bất phương trình có chứa dấu bằng '≤', các điểm trên đường thẳng bờ cũng là nghiệm, do đó đường bờ được vẽ bằng nét liền.",
    skill: "inequalities-2var"
  },
  {
    id: "q_ineq_8",
    lessonId: "inequalities-2var",
    prompt: "Điểm O(0; 0) thuộc miền nghiệm của bất phương trình nào sau đây?",
    options: ["x + 3y + 2 > 0", "2x − y − 5 > 0", "x + y + 1 < 0", "3x − 4y − 2 ≥ 0"],
    answer: 0,
    hints: [
      "Thay x = 0, y = 0 vào vế trái từng phương án.",
      "Với x + 3y + 2 > 0: 0 + 0 + 2 = 2 > 0 (Đúng)."
    ],
    explanation: "Thay x = 0, y = 0 vào A: 0 + 0 + 2 = 2 > 0 (thỏa mãn). Các phương án còn lại đều cho kết quả sai.",
    skill: "inequalities-2var"
  },
  {
    id: "q_ineq_9",
    lessonId: "inequalities-2var",
    prompt: "Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?",
    options: ["2x + 3y ≤ 6", "x² + y < 0", "2x + 3y − z > 1", "xy + 2x > 3"],
    answer: 0,
    hints: [
      "BPT bậc nhất hai ẩn chỉ chứa x và y ở bậc 1, không chứa tích xy, không chứa biến thứ 3."
    ],
    explanation: "2x + 3y ≤ 6 có đúng dạng ax + by + c ≤ 0 với a = 2, b = 3, c = −6. Phương án B chứa x², phương án C chứa 3 ẩn, phương án D chứa tích xy.",
    skill: "inequalities-2var"
  },
  {
    id: "q_ineq_10",
    lessonId: "inequalities-2var",
    prompt: "Tìm tham số m để cặp số (1; 2) là nghiệm của bất phương trình 3x + my − 7 ≥ 0:",
    options: ["m ≥ 2", "m ≤ 2", "m ≥ −2", "m < 2"],
    answer: 0,
    hints: [
      "Thay x = 1 và y = 2 vào bất phương trình.",
      "3(1) + m(2) - 7 ≥ 0.",
      "2m - 4 ≥ 0 ⇔ 2m ≥ 4 ⇔ m ≥ 2."
    ],
    explanation: "Thay x = 1, y = 2: 3(1) + 2m − 7 ≥ 0 ⇔ 2m − 4 ≥ 0 ⇔ 2m ≥ 4 ⇔ m ≥ 2.",
    skill: "inequalities-2var"
  },
  {
    id: "q_ineq_11",
    lessonId: "inequalities-2var",
    prompt: "Miền nghiệm của bất phương trình x ≥ 2 là:",
    options: [
      "Nửa mặt phẳng bên phải đường thẳng x = 2 (kể cả bờ)",
      "Nửa mặt phẳng bên trái đường thẳng x = 2 (kể cả bờ)",
      "Nửa mặt phẳng phía trên trục hoành",
      "Nửa mặt phẳng phía dưới trục hoành"
    ],
    answer: 0,
    hints: [
      "Đường thẳng x = 2 vuông góc với trục hoành Ox tại điểm có hoành độ 2.",
      "x ≥ 2 lấy các giá trị x lớn hơn 2, tức nằm về bên phải đường thẳng x = 2."
    ],
    explanation: "Đường bờ là x = 2 (đường thẳng song song với Oy). Vì x ≥ 2 nên miền nghiệm là nửa mặt phẳng nằm về phía bên phải đường thẳng x = 2, tính cả bờ nét liền.",
    skill: "inequalities-2var"
  },
  {
    id: "q_ineq_12",
    lessonId: "inequalities-2var",
    prompt: "Một người có 500 nghìn đồng mua vở (giá 10 nghìn/quyển) và bút (giá 25 nghìn/chiếc). Gọi x là số quyển vở, y là số chiếc bút. Bất phương trình ràng buộc số tiền là:",
    options: ["2x + 5y ≤ 100", "10x + 25y > 500", "5x + 2y ≤ 100", "x + y ≤ 500"],
    answer: 0,
    hints: [
      "Tổng số tiền: 10x + 25y ≤ 500.",
      "Rút gọn chia cả hai vế cho 5: 2x + 5y ≤ 100."
    ],
    explanation: "BPT biểu diễn tổng chi phí: 10x + 25y ≤ 500 (nghìn đồng). Chia cả 2 vế cho 5 ta được 2x + 5y ≤ 100.",
    skill: "inequalities-2var"
  },
  {
    id: "q_ineq_13",
    lessonId: "inequalities-2var",
    prompt: "Cho đường thẳng d: x − 2y = 0. Để xác định miền nghiệm của BPT x − 2y > 0, ta nên chọn điểm thử nào sau đây?",
    options: ["(1; 0)", "(0; 0)", "(2; 1)", "(4; 2)"],
    answer: 0,
    hints: [
      "Đường thẳng d đi qua gốc O(0; 0) nên KHÔNG được dùng O làm điểm thử.",
      "Cần chọn điểm nằm ngoài đường thẳng bờ, ví dụ (1; 0) trên trục Ox."
    ],
    explanation: "Vì d đi qua gốc O(0; 0), điểm (2; 1) và (4; 2) đều nằm trên đường thẳng d, nên chỉ có điểm (1; 0) không thuộc d và thích hợp làm điểm thử.",
    skill: "inequalities-2var"
  },
  {
    id: "q_ineq_14",
    lessonId: "inequalities-2var",
    prompt: "Miền nghiệm của BPT 2x + y − 2 < 0 chứa điểm nào sau đây?",
    options: ["(0; 0)", "(1; 1)", "(2; 0)", "(0; 3)"],
    answer: 0,
    hints: [
      "Thay (0; 0): 2(0) + 0 - 2 = -2 < 0 (Đúng)."
    ],
    explanation: "Thay tọa độ (0; 0) vào vế trái: 2(0) + 0 − 2 = −2 < 0, thỏa mãn bất phương trình.",
    skill: "inequalities-2var"
  },
  {
    id: "q_ineq_15",
    lessonId: "inequalities-2var",
    prompt: "Hình phẳng biểu diễn miền nghiệm của BPT bậc nhất hai ẩn trên hệ tọa độ Oxy luôn là:",
    options: ["Một nửa mặt phẳng", "Một hình tròn", "Một hình tam giác", "Một đoạn thẳng"],
    answer: 0,
    hints: [
      "Đường thẳng ax + by + c = 0 chia mặt phẳng thành hai nửa mặt phẳng.",
      "Một trong hai nửa mặt phẳng đó là miền nghiệm của BPT."
    ],
    explanation: "Miền nghiệm của bất phương trình bậc nhất hai ẩn luôn là một nửa mặt phẳng (kể cả hoặc không kể bờ).",
    skill: "inequalities-2var"
  },
  {
    id: "q_ineq_16",
    lessonId: "inequalities-2var",
    prompt: "Nếu nhân cả hai vế của bất phương trình −2x + y < 3 với −1, ta được bất phương trình tương đương nào?",
    options: ["2x − y > −3", "2x − y < −3", "2x + y > 3", "−2x − y > −3"],
    answer: 0,
    hints: [
      "Quy tắc bất đẳng thức: Khi nhân hoặc chia cả hai vế với một số âm, ta phải ĐỔI CHIỀU bất đẳng thức."
    ],
    explanation: "Nhân hai vế với −1 thì các hệ số đổi dấu và chiều '<' đổi thành '>': 2x − y > −3.",
    skill: "inequalities-2var"
  },
  {
    id: "q_ineq_17",
    type: "true-false",
    lessonId: "inequalities-2var",
    prompt: "Cho bất phương trình 2x − 3y + 6 ≥ 0 và đường thẳng d: 2x − 3y + 6 = 0. Xét tính đúng/sai của từng khẳng định:",
    subQuestions: [
      { id: "a", text: "Đường thẳng d cắt trục Ox tại điểm A(−3; 0).", answer: true, explanation: "Cho y = 0 ta được 2x + 6 = 0 ⇔ x = -3." },
      { id: "b", text: "Đường thẳng d cắt trục Oy tại điểm B(0; 2).", answer: true, explanation: "Cho x = 0 ta được -3y + 6 = 0 ⇔ y = 2." },
      { id: "c", text: "Gốc tọa độ O(0; 0) thuộc miền nghiệm của bất phương trình.", answer: true, explanation: "2(0) - 3(0) + 6 = 6 ≥ 0 (Đúng)." },
      { id: "d", text: "Đường thẳng bờ d được vẽ bằng nét đứt.", answer: false, explanation: "Có dấu ≥ (chứa dấu bằng) nên đường bờ phải vẽ bằng nét liền." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, b Đúng; c, d Sai",
      "b, c, d Đúng; a Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Kiểm tra giao điểm với hai trục tọa độ.",
      "Kiểm tra điểm O(0; 0).",
      "Kiểm tra nét liền hay nét đứt dựa vào dấu ≥."
    ],
    explanation: "Ý a, b, c đúng; Ý d sai vì bất phương trình chứa dấu bằng '≥' nên bờ d phải vẽ bằng nét liền.",
    skill: "inequalities-2var"
  },
  {
    id: "q_ineq_18",
    type: "true-false",
    lessonId: "inequalities-2var",
    prompt: "Cho điểm M(2; 1). Xét xem điểm M có thuộc miền nghiệm của các bất phương trình sau hay không:",
    subQuestions: [
      { id: "a", text: "x + y − 2 > 0.", answer: true, explanation: "2 + 1 - 2 = 1 > 0 (Đúng)." },
      { id: "b", text: "2x − 3y + 1 ≥ 0.", answer: true, explanation: "2(2) - 3(1) + 1 = 2 ≥ 0 (Đúng)." },
      { id: "c", text: "3x + y − 7 < 0.", answer: false, explanation: "3(2) + 1 - 7 = 0 < 0 (Sai vì 0 không nhỏ hơn 0)." },
      { id: "d", text: "x − 2y ≤ 0.", answer: true, explanation: "2 - 2(1) = 0 ≤ 0 (Đúng vì có dấu bằng)." }
    ],
    options: [
      "a, b, d Đúng; c Sai",
      "a, b, c Đúng; d Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Thay x = 2, y = 1 vào từng biểu thức vế trái và so sánh với vế phải."
    ],
    explanation: "Ý a: 1 > 0 (Đúng); Ý b: 2 ≥ 0 (Đúng); Ý c: 0 < 0 (Sai); Ý d: 0 ≤ 0 (Đúng). Vậy a, b, d đúng; c sai.",
    skill: "inequalities-2var"
  },
  {
    id: "q_ineq_19",
    type: "true-false",
    lessonId: "inequalities-2var",
    prompt: "Xét các bất phương trình sau về dạng chuẩn bậc nhất hai ẩn:",
    subQuestions: [
      { id: "a", text: "3x + 2y < 5 là bất phương trình bậc nhất hai ẩn.", answer: true, explanation: "Có dạng ax + by < c với a = 3, b = 2." },
      { id: "b", text: "x² + 2y ≤ 0 là bất phương trình bậc nhất hai ẩn.", answer: false, explanation: "Chứa x² là bậc 2 nên không phải bậc nhất." },
      { id: "c", text: "2x + 0y ≥ 4 là bất phương trình bậc nhất hai ẩn.", answer: true, explanation: "a = 2 ≠ 0 và b = 0 thỏa mãn a² + b² > 0." },
      { id: "d", text: "0x + 0y < 3 là bất phương trình bậc nhất hai ẩn.", answer: false, explanation: "Cả a và b đều bằng 0 nên vi phạm điều kiện a² + b² ≠ 0." }
    ],
    options: [
      "a, c Đúng; b, d Sai",
      "a, b, c Đúng; d Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Định nghĩa: ax + by + c < 0 với a và b không đồng thời bằng 0."
    ],
    explanation: "Ý a đúng; Ý b sai vì có bậc 2; Ý c đúng vì a ≠ 0; Ý d sai vì cả a và b đều bằng 0.",
    skill: "inequalities-2var"
  },
  {
    id: "q_ineq_20",
    type: "short-answer",
    lessonId: "inequalities-2var",
    prompt: "Đường thẳng bờ d: 4x + 3y − 12 = 0 cùng hai trục tọa độ Ox, Oy tạo thành một tam giác vuông. Tính diện tích của tam giác vuông đó:",
    answer: 6,
    acceptedAnswers: ["6", "6.0"],
    options: ["6", "12", "7", "24"],
    hints: [
      "Tìm giao điểm A với Ox (cho y = 0) và giao điểm B với Oy (cho x = 0).",
      "y = 0 ⇒ 4x = 12 ⇒ x = 3 ⇒ OA = 3.",
      "x = 0 ⇒ 3y = 12 ⇒ y = 4 ⇒ OB = 4.",
      "Diện tích tam giác vuông S = (1/2) · OA · OB = (1/2) · 3 · 4 = 6."
    ],
    explanation: "Giao điểm với Ox là A(3; 0) ⇒ OA = 3. Giao điểm với Oy là B(0; 4) ⇒ OB = 4. Diện tích tam giác vuông OAB là S = 1/2 × 3 × 4 = 6.",
    skill: "inequalities-2var"
  },
  {
    id: "q_ineq_21",
    type: "short-answer",
    lessonId: "inequalities-2var",
    prompt: "Một xưởng may áo sơ mi cần 2m vải và may quần âu cần 3m vải. Xưởng có tối đa 120m vải. Nếu xưởng may 30 chiếc áo sơ mi thì có thể may tối đa bao nhiêu chiếc quần âu?",
    answer: 20,
    acceptedAnswers: ["20", "20.0"],
    options: ["20", "25", "30", "15"],
    hints: [
      "Bất phương trình vải: 2x + 3y ≤ 120.",
      "Thay x = 30 vào: 2(30) + 3y ≤ 120.",
      "60 + 3y ≤ 120 ⇔ 3y ≤ 60 ⇔ y ≤ 20."
    ],
    explanation: "BPT ràng buộc vải là 2x + 3y ≤ 120. Khi x = 30 chiếc áo, ta có 2(30) + 3y ≤ 120 ⇔ 60 + 3y ≤ 120 ⇔ 3y ≤ 60 ⇔ y ≤ 20 chiếc quần.",
    skill: "inequalities-2var"
  },
  {
    id: "q_ineq_22",
    type: "short-answer",
    lessonId: "inequalities-2var",
    prompt: "Cho bất phương trình 5x − 2y + m > 0. Tìm giá trị nguyên nhỏ nhất của m để miền nghiệm chứa điểm A(2; 3):",
    answer: -3,
    acceptedAnswers: ["-3"],
    options: ["-3", "-4", "-2", "0"],
    hints: [
      "Thay x = 2, y = 3 vào vế trái: 5(2) - 2(3) + m > 0.",
      "10 - 6 + m > 0 ⇔ 4 + m > 0 ⇔ m > -4.",
      "Số nguyên nhỏ nhất lớn hơn -4 là -3."
    ],
    explanation: "Điểm A(2; 3) thuộc miền nghiệm ⇔ 5(2) − 2(3) + m > 0 ⇔ 4 + m > 0 ⇔ m > −4. Số nguyên m nhỏ nhất là −3.",
    skill: "inequalities-2var"
  },

  // ==========================================
  // LESSON 4: SYSTEM-INEQUALITIES (22 questions total: 4 original + 12 MC + 3 TF + 3 SA)
  // ==========================================
  {
    id: "q_sys_5",
    lessonId: "system-inequalities",
    prompt: "Hệ bất phương trình { x ≥ 0; y ≥ 0; x + y ≤ 4 } có miền nghiệm trên mặt phẳng Oxy là hình gì?",
    options: ["Một miền tam giác vuông", "Một miền hình vuông", "Một nửa mặt phẳng", "Một miền tứ giác bất kỳ"],
    answer: 0,
    hints: [
      "x ≥ 0 và y ≥ 0 là góc phần tư thứ nhất.",
      "x + y ≤ 4 cắt Ox tại A(4; 0) và Oy tại B(0; 4).",
      "Tam giác OAB vuông tại O(0; 0)."
    ],
    explanation: "Miền nghiệm được giới hạn bởi 3 đường x = 0 (trục Oy), y = 0 (trục Ox) và x + y = 4. Ba đỉnh là O(0; 0), A(4; 0), B(0; 4) tạo thành một miền tam giác vuông tại O.",
    skill: "system-inequalities"
  },
  {
    id: "q_sys_6",
    lessonId: "system-inequalities",
    prompt: "Tìm tọa độ giao điểm của hai đường thẳng biên d1: x + 2y = 6 và d2: 2x + y = 6:",
    options: ["(2; 2)", "(3; 1)", "(1; 3)", "(4; 1)"],
    answer: 0,
    hints: [
      "Giải hệ phương trình bậc nhất hai ẩn gồm d1 và d2.",
      "Cộng hai phương trình: 3x + 3y = 12 ⇒ x + y = 4.",
      "Thay vào d1: 4 + y = 6 ⇒ y = 2, từ đó x = 2."
    ],
    explanation: "Giải hệ { x + 2y = 6; 2x + y = 6 } ta nhân phương trình thứ nhất với 2: 2x + 4y = 12. Trừ vế với vế: 3y = 6 ⇒ y = 2 ⇒ x = 2. Tọa độ giao điểm là (2; 2).",
    skill: "system-inequalities"
  },
  {
    id: "q_sys_7",
    lessonId: "system-inequalities",
    prompt: "Điểm nào sau đây thuộc miền nghiệm của hệ { x + y ≤ 5; x − y ≤ 3; x ≥ 0; y ≥ 0 }?",
    options: ["(1; 2)", "(4; 2)", "(2; 4)", "(5; 1)"],
    answer: 0,
    hints: [
      "Thay tọa độ từng điểm vào cả 4 bất phương trình của hệ.",
      "Với (1; 2): 1 + 2 = 3 ≤ 5; 1 - 2 = -1 ≤ 3; 1 ≥ 0; 2 ≥ 0 (Thỏa mãn tất cả)."
    ],
    explanation: "Thay điểm (1; 2): 1 + 2 = 3 ≤ 5 (đúng); 1 − 2 = −1 ≤ 3 (đúng); 1 ≥ 0 và 2 ≥ 0 (đúng). Các điểm còn lại đều vi phạm ít nhất một bất phương trình.",
    skill: "system-inequalities"
  },
  {
    id: "q_sys_8",
    lessonId: "system-inequalities",
    prompt: "Cho miền nghiệm là miền tứ giác với các đỉnh O(0; 0), A(3; 0), B(2; 2), C(0; 3). Giá trị lớn nhất của F(x; y) = 2x + 3y trên miền này là:",
    options: ["10", "9", "6", "12"],
    answer: 0,
    hints: [
      "Tính F tại cả 4 đỉnh của tứ giác.",
      "F(O) = 0, F(A) = 2(3) = 6, F(B) = 2(2) + 3(2) = 10, F(C) = 3(3) = 9.",
      "So sánh các giá trị tìm số lớn nhất."
    ],
    explanation: "Giá trị tại các đỉnh: F(0; 0) = 0; F(3; 0) = 6; F(2; 2) = 2(2) + 3(2) = 10; F(0; 3) = 9. Giá trị lớn nhất là 10 đạt tại đỉnh B(2; 2).",
    skill: "system-inequalities"
  },
  {
    id: "q_sys_9",
    lessonId: "system-inequalities",
    prompt: "Hệ bất phương trình { x ≥ 1; y ≥ 1; x + y ≤ 4 } có miền nghiệm gồm bao nhiêu đỉnh?",
    options: ["3 đỉnh", "4 đỉnh", "2 đỉnh", "Vô số đỉnh"],
    answer: 0,
    hints: [
      "Các đường biên: x = 1, y = 1, x + y = 4.",
      "Giao x = 1 và y = 1 là (1; 1).",
      "Giao x = 1 và x + y = 4 là (1; 3).",
      "Giao y = 1 và x + y = 4 là (3; 1).",
      "Miền nghiệm là một tam giác nên có đúng 3 đỉnh."
    ],
    explanation: "Ba đường biên x = 1, y = 1, x + y = 4 cắt nhau tại 3 đỉnh: A(1; 1), B(3; 1), C(1; 3). Miền nghiệm là hình tam giác ABC gồm 3 đỉnh.",
    skill: "system-inequalities"
  },
  {
    id: "q_sys_10",
    lessonId: "system-inequalities",
    prompt: "Một phân xưởng sản xuất có hàm lợi nhuận F(x; y) = 5x + 4y (triệu đồng). Miền nghiệm có các đỉnh O(0; 0), A(4; 0), B(0; 5). Lợi nhuận tối đa phân xưởng có thể đạt được là:",
    options: ["20 triệu đồng", "25 triệu đồng", "16 triệu đồng", "18 triệu đồng"],
    answer: 0,
    hints: [
      "F(O) = 0.",
      "F(A) = 5(4) + 0 = 20 triệu.",
      "F(B) = 0 + 4(5) = 20 triệu.",
      "Lợi nhuận lớn nhất là 20 triệu đồng."
    ],
    explanation: "Tính F tại các đỉnh: F(0; 0) = 0; F(4; 0) = 20; F(0; 5) = 20. Vậy lợi nhuận tối đa đạt được là 20 triệu đồng (đạt tại cả hai đỉnh A và B).",
    skill: "system-inequalities"
  },
  {
    id: "q_sys_11",
    lessonId: "system-inequalities",
    prompt: "Hệ bất phương trình nào sau đây có miền nghiệm là một tập hợp rỗng ∅?",
    options: [
      "{ x + y ≤ 2; x + y ≥ 5 }",
      "{ x ≥ 0; y ≥ 0; x + y ≤ 4 }",
      "{ x − y ≤ 1; x + y ≥ 0 }",
      "{ x ≤ 3; y ≤ 3 }"
    ],
    answer: 0,
    hints: [
      "Một số không thể vừa nhỏ hơn hoặc bằng 2 vừa lớn hơn hoặc bằng 5.",
      "x + y ≤ 2 và x + y ≥ 5 không có điểm chung nào."
    ],
    explanation: "Tổng (x + y) không thể đồng thời thỏa mãn vừa ≤ 2 lại vừa ≥ 5, vì vậy hai nửa mặt phẳng này hoàn toàn rời nhau, miền nghiệm là rỗng ∅.",
    skill: "system-inequalities"
  },
  {
    id: "q_sys_12",
    lessonId: "system-inequalities",
    prompt: "Giá trị nhỏ nhất của F(x; y) = x − 2y trên miền tam giác đỉnh O(0; 0), A(2; 0), B(0; 2) là:",
    options: ["−4", "0", "2", "−2"],
    answer: 0,
    hints: [
      "F(O) = 0 - 0 = 0.",
      "F(A) = 2 - 0 = 2.",
      "F(B) = 0 - 2(2) = -4.",
      "Số nhỏ nhất trong {0; 2; -4} là -4."
    ],
    explanation: "F(0; 0) = 0; F(2; 0) = 2; F(0; 2) = 0 − 2(2) = −4. Giá trị nhỏ nhất là −4 đạt tại đỉnh B(0; 2).",
    skill: "system-inequalities"
  },
  {
    id: "q_sys_13",
    lessonId: "system-inequalities",
    prompt: "Trong bài toán quy hoạch tuyến tính, điều kiện thực tế x ≥ 0, y ≥ 0 biểu thị:",
    options: [
      "Số lượng sản phẩm hoặc tài nguyên không âm",
      "Số lượng sản phẩm bắt buộc phải là số âm",
      "Lợi nhuận luôn luôn lớn hơn 0",
      "Thời gian máy móc không giới hạn"
    ],
    answer: 0,
    hints: [
      "Số sản phẩm sản xuất không thể là số âm trong thực tế."
    ],
    explanation: "Trong các bài toán kinh tế và đời sống, số sản phẩm hay nguyên vật liệu x, y luôn là đại lượng không âm (x, y ≥ 0).",
    skill: "system-inequalities"
  },
  {
    id: "q_sys_14",
    lessonId: "system-inequalities",
    prompt: "Nếu miền nghiệm của hệ bất phương trình là một miền đa giác lồi bị chặn (kín), khẳng định nào sau đây chắc chắn ĐÚNG?",
    options: [
      "Hàm F(x; y) = ax + by luôn đạt GTLN và GTNN tại ít nhất một đỉnh của đa giác",
      "Hàm F(x; y) luôn đạt GTLN tại tâm đối xứng của đa giác",
      "Hàm F(x; y) không bao giờ đạt giá trị nhỏ nhất",
      "GTLN luôn đạt tại gốc tọa độ O"
    ],
    answer: 0,
    hints: [
      "Định lý quy hoạch tuyến tính cơ bản: Cực trị của hàm bậc nhất hai ẩn trên đa giác kín luôn đạt tại đỉnh."
    ],
    explanation: "Theo định lý cơ bản của quy hoạch tuyến tính, biểu thức bậc nhất F(x; y) = ax + by trên miền đa giác lồi kín luôn đạt giá trị lớn nhất và nhỏ nhất tại ít nhất một đỉnh.",
    skill: "system-inequalities"
  },
  {
    id: "q_sys_15",
    lessonId: "system-inequalities",
    prompt: "Cho hệ { x ≥ 0; y ≥ 0; x + y ≤ 10; 2x + y ≤ 16 }. Tọa độ đỉnh là giao điểm của x + y = 10 và 2x + y = 16 là:",
    options: ["(6; 4)", "(4; 6)", "(5; 5)", "(8; 2)"],
    answer: 0,
    hints: [
      "Lấy phương trình dưới trừ phương trình trên: (2x + y) - (x + y) = 16 - 10 ⇒ x = 6.",
      "Thay x = 6 vào x + y = 10 ⇒ y = 4."
    ],
    explanation: "Trừ hai phương trình: (2x + y) − (x + y) = 16 − 10 ⇔ x = 6. Thay vào được y = 10 − 6 = 4. Tọa độ đỉnh là (6; 4).",
    skill: "system-inequalities"
  },
  {
    id: "q_sys_16",
    lessonId: "system-inequalities",
    prompt: "Tìm m để hệ { x + y ≤ 4; x − y ≥ m } có nghiệm (2; 1):",
    options: ["m ≤ 1", "m ≥ 1", "m > 1", "m = 2"],
    answer: 0,
    hints: [
      "Thay x = 2, y = 1 vào hệ.",
      "2 + 1 = 3 ≤ 4 (thỏa mãn).",
      "2 - 1 = 1 ≥ m ⇔ m ≤ 1."
    ],
    explanation: "Thay x = 2, y = 1 vào bất phương trình thứ hai: 2 − 1 ≥ m ⇔ 1 ≥ m ⇔ m ≤ 1.",
    skill: "system-inequalities"
  },
  {
    id: "q_sys_17",
    type: "true-false",
    lessonId: "system-inequalities",
    prompt: "Cho hệ bất phương trình { x ≥ 0; y ≥ 0; x + y ≤ 3 }. Xét tính đúng/sai của các khẳng định sau:",
    subQuestions: [
      { id: "a", text: "Điểm M(1; 1) thuộc miền nghiệm của hệ.", answer: true, explanation: "1 ≥ 0, 1 ≥ 0 và 1 + 1 = 2 ≤ 3 (thỏa mãn)." },
      { id: "b", text: "Điểm N(2; 2) thuộc miền nghiệm của hệ.", answer: false, explanation: "2 + 2 = 4 > 3 nên không thuộc miền nghiệm." },
      { id: "c", text: "Miền nghiệm của hệ là miền tam giác vuông có diện tích bằng 4.5.", answer: true, explanation: "Đỉnh O(0; 0), A(3; 0), B(0; 3) có S = 1/2 · 3 · 3 = 4.5." },
      { id: "d", text: "Gốc tọa độ O(0; 0) không thuộc miền nghiệm của hệ.", answer: false, explanation: "0 ≥ 0, 0 ≥ 0 và 0 + 0 ≤ 3 (O thuộc miền nghiệm)." }
    ],
    options: [
      "a, c Đúng; b, d Sai",
      "a, b, c Đúng; d Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Thay (1; 1) và (2; 2) vào x + y ≤ 3.",
      "Tam giác có cạnh góc vuông bằng 3, tính diện tích: S = 1/2 · 3 · 3 = 4.5."
    ],
    explanation: "Ý a đúng; Ý b sai vì 2+2=4>3; Ý c đúng vì S = 1/2 * 3 * 3 = 4.5; Ý d sai vì O(0;0) thỏa mãn cả 3 bất phương trình.",
    skill: "system-inequalities"
  },
  {
    id: "q_sys_18",
    type: "true-false",
    lessonId: "system-inequalities",
    prompt: "Cho hàm mục tiêu F(x; y) = 3x + y trên miền tứ giác có 4 đỉnh O(0; 0), A(4; 0), B(3; 2), C(0; 3). Xét tính đúng/sai:",
    subQuestions: [
      { id: "a", text: "Giá trị của F tại O là F(O) = 0.", answer: true, explanation: "F(0; 0) = 3(0) + 0 = 0." },
      { id: "b", text: "Giá trị của F tại A là F(A) = 12.", answer: true, explanation: "F(4; 0) = 3(4) + 0 = 12." },
      { id: "c", text: "Giá trị của F tại B là F(B) = 11.", answer: true, explanation: "F(3; 2) = 3(3) + 2 = 11." },
      { id: "d", text: "Giá trị lớn nhất của F(x; y) trên miền tứ giác là 11.", answer: false, explanation: "F(A) = 12 > 11 nên GTLN phải là 12 chứ không phải 11." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, b, d Đúng; c Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Tính F tại cả 4 đỉnh: F(O)=0, F(A)=12, F(B)=11, F(C)=3.",
      "GTLN là 12 tại A."
    ],
    explanation: "Ý a, b, c đúng; Ý d sai vì giá trị lớn nhất là 12 (đạt tại A(4; 0)).",
    skill: "system-inequalities"
  },
  {
    id: "q_sys_19",
    type: "true-false",
    lessonId: "system-inequalities",
    prompt: "Về phương pháp giải bài toán quy hoạch tuyến tính hai ẩn. Xét tính đúng/sai của các phát biểu sau:",
    subQuestions: [
      { id: "a", text: "Miền nghiệm của hệ BPT bậc nhất hai ẩn là giao của các nửa mặt phẳng miền nghiệm thành phần.", answer: true, explanation: "Đúng theo định nghĩa miền nghiệm của hệ." },
      { id: "b", text: "Nếu miền nghiệm là đa giác kín thì GTLN luôn đạt tại ít nhất một đỉnh.", answer: true, explanation: "Định lý chuẩn của quy hoạch tuyến tính." },
      { id: "c", text: "Nếu miền nghiệm mở vô tận thì hàm F(x; y) luôn luôn có cả Max và Min.", answer: false, explanation: "Khi miền mở vô tận, hàm F có thể tăng/giảm ra vô cực nên không có Max hoặc Min." },
      { id: "d", text: "Có thể sử dụng máy tính Casio giải hệ PT bậc nhất hai ẩn để tìm nhanh tọa độ các đỉnh.", answer: true, explanation: "Chức năng giải hệ phương trình Mode 9 -> 1 -> 2 rất tiện lợi." }
    ],
    options: [
      "a, b, d Đúng; c Sai",
      "a, b, c Đúng; d Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Khi miền mở ra vô cực, các biến có thể tiến tới vô hạn khiến F(x; y) không bị chặn."
    ],
    explanation: "Ý a, b, d đúng; Ý c sai vì miền mở không bị chặn có thể không tồn tại giá trị lớn nhất hoặc nhỏ nhất.",
    skill: "system-inequalities"
  },
  {
    id: "q_sys_20",
    type: "short-answer",
    lessonId: "system-inequalities",
    prompt: "Hệ bất phương trình { x ≥ 0; y ≥ 0; x + y ≤ 6 } có miền nghiệm là một hình tam giác vuông. Tính diện tích miền nghiệm đó:",
    answer: 18,
    acceptedAnswers: ["18", "18.0"],
    options: ["18", "36", "12", "24"],
    hints: [
      "Tam giác có hai cạnh góc vuông nằm trên hai trục tọa độ: OA = 6 và OB = 6.",
      "S = 1/2 · OA · OB = 1/2 · 6 · 6 = 18."
    ],
    explanation: "Hai cạnh góc vuông có độ dài là 6 và 6. Diện tích hình tam giác là S = 1/2 × 6 × 6 = 18.",
    skill: "system-inequalities"
  },
  {
    id: "q_sys_21",
    type: "short-answer",
    lessonId: "system-inequalities",
    prompt: "Cho hàm F(x; y) = 2x + 5y trên miền nghiệm tam giác đỉnh O(0; 0), A(5; 0), B(0; 4). Tìm giá trị lớn nhất của F(x; y):",
    answer: 20,
    acceptedAnswers: ["20", "20.0"],
    options: ["20", "10", "25", "15"],
    hints: [
      "F(O) = 0.",
      "F(A) = 2(5) + 0 = 10.",
      "F(B) = 0 + 5(4) = 20."
    ],
    explanation: "F(0; 0) = 0; F(5; 0) = 10; F(0; 4) = 20. Giá trị lớn nhất của F là 20 (đạt tại B(0; 4)).",
    skill: "system-inequalities"
  },
  {
    id: "q_sys_22",
    type: "short-answer",
    lessonId: "system-inequalities",
    prompt: "Bác An trồng x ha ngô và y ha đậu tương trên mảnh đất tối đa 10 ha (x + y ≤ 10, x ≥ 0, y ≥ 0). Lãi mỗi ha ngô là 20 triệu đồng, mỗi ha đậu tương là 30 triệu đồng. Hỏi lợi nhuận lớn nhất bác An có thể thu được là bao nhiêu triệu đồng?",
    answer: 300,
    acceptedAnswers: ["300", "300.0"],
    options: ["300", "200", "250", "350"],
    hints: [
      "Lập hàm lợi nhuận: F(x; y) = 20x + 30y.",
      "Đỉnh A(10; 0) cho F = 200 triệu.",
      "Đỉnh B(0; 10) cho F = 30(10) = 300 triệu."
    ],
    explanation: "Hàm lợi nhuận F(x; y) = 20x + 30y. Ba đỉnh miền nghiệm là O(0; 0), A(10; 0), B(0; 10). Giá trị tại B(0; 10) là F = 30 × 10 = 300 triệu đồng.",
    skill: "system-inequalities"
  },

  // ==========================================
  // LESSON 5: VALUES (22 questions total: 4 original + 12 MC + 3 TF + 3 SA)
  // ==========================================
  {
    id: "q_val_5",
    lessonId: "values",
    prompt: "Tính giá trị của sin 150°:",
    options: ["1/2", "−1/2", "√3/2", "−√3/2"],
    answer: 0,
    hints: [
      "Sử dụng công thức bù nhau: sin(180° - α) = sin α.",
      "150° và 30° là hai góc bù nhau: sin 150° = sin(180° - 30°) = sin 30°.",
      "sin 30° = 1/2."
    ],
    explanation: "Hai góc bù nhau có sin bằng nhau: sin 150° = sin(180° − 30°) = sin 30° = 1/2.",
    skill: "trig-values"
  },
  {
    id: "q_val_6",
    lessonId: "values",
    prompt: "Tính giá trị của cos 120°:",
    options: ["−1/2", "1/2", "−√3/2", "√3/2"],
    answer: 0,
    hints: [
      "Hai góc bù nhau có cos đối dấu: cos(180° - α) = -cos α.",
      "cos 120° = -cos(180° - 120°) = -cos 60°.",
      "cos 60° = 1/2 nên cos 120° = -1/2."
    ],
    explanation: "Hai góc bù nhau có cos đối nhau: cos 120° = −cos(180° − 120°) = −cos 60° = −1/2.",
    skill: "trig-values"
  },
  {
    id: "q_val_7",
    lessonId: "values",
    prompt: "Cho góc α tù (90° < α < 180°). Khẳng định nào sau đây là ĐÚNG?",
    options: [
      "sin α > 0 và cos α < 0",
      "sin α < 0 và cos α < 0",
      "sin α > 0 và cos α > 0",
      "sin α < 0 và cos α > 0"
    ],
    answer: 0,
    hints: [
      "Góc tù nằm ở góc phần tư thứ II trên nửa đường tròn đơn vị.",
      "Tung độ y (sin α) luôn dương.",
      "Hoành độ x (cos α) luôn âm."
    ],
    explanation: "Với góc tù 90° < α < 180°, điểm M nằm ở phía trên trục hoành (y = sin α > 0) và phía bên trái trục tung (x = cos α < 0).",
    skill: "trig-values"
  },
  {
    id: "q_val_8",
    lessonId: "values",
    prompt: "Tính giá trị của tan 135°:",
    options: ["−1", "1", "−√3", "√3"],
    answer: 0,
    hints: [
      "tan(180° - α) = -tan α.",
      "tan 135° = -tan 45°.",
      "tan 45° = 1 nên tan 135° = -1."
    ],
    explanation: "Hai góc bù nhau có tan đối nhau: tan 135° = −tan(180° − 135°) = −tan 45° = −1.",
    skill: "trig-values"
  },
  {
    id: "q_val_9",
    lessonId: "values",
    prompt: "Giá trị của biểu thức P = sin 90° + cos 90° bằng bao nhiêu?",
    options: ["1", "0", "2", "−1"],
    answer: 0,
    hints: [
      "sin 90° = 1 (điểm cao nhất của nửa đường tròn đơn vị).",
      "cos 90° = 0 (chiếu xuống trục Ox tại gốc O).",
      "1 + 0 = 1."
    ],
    explanation: "Ta có sin 90° = 1 và cos 90° = 0. Do đó P = 1 + 0 = 1.",
    skill: "trig-values"
  },
  {
    id: "q_val_10",
    lessonId: "values",
    prompt: "Cho sin α = 3/5 với 90° < α < 180°. Tính cos α:",
    options: ["−4/5", "4/5", "−16/25", "2/5"],
    answer: 0,
    hints: [
      "Dùng hằng đẳng thức sin²α + cos²α = 1 ⇒ cos²α = 1 - (3/5)² = 16/25.",
      "Vì góc α tù (90° < α < 180°) nên cos α < 0.",
      "Lấy dấu âm: cos α = -4/5."
    ],
    explanation: "cos²α = 1 − sin²α = 1 − 9/25 = 16/25. Vì α là góc tù (90° < α < 180°) nên cos α < 0, suy ra cos α = −4/5.",
    skill: "trig-values"
  },
  {
    id: "q_val_11",
    lessonId: "values",
    prompt: "Cho sin α = 1/3. Tính giá trị của biểu thức P = 3sin²α + cos²α:",
    options: ["11/9", "7/9", "4/3", "1"],
    answer: 0,
    hints: [
      "Biến đổi: P = 2sin²α + (sin²α + cos²α) = 2sin²α + 1.",
      "Thay sin α = 1/3: P = 2(1/9) + 1 = 11/9."
    ],
    explanation: "P = 2sin²α + (sin²α + cos²α) = 2sin²α + 1. Thay sin α = 1/3 vào ta được P = 2(1/9) + 1 = 11/9.",
    skill: "trig-values"
  },
  {
    id: "q_val_12",
    lessonId: "values",
    prompt: "Góc α thỏa mãn tan α = −√3 (với 0° ≤ α ≤ 180°). Số đo góc α là:",
    options: ["120°", "150°", "60°", "30°"],
    answer: 0,
    hints: [
      "tan 60° = √3.",
      "tan âm nên α là góc tù: α = 180° - 60° = 120°."
    ],
    explanation: "Vì tan α = −√3 < 0 nên α là góc tù. Ta có tan(180° − 60°) = −tan 60° = −√3, do đó α = 120°.",
    skill: "trig-values"
  },
  {
    id: "q_val_13",
    lessonId: "values",
    prompt: "Rút gọn biểu thức A = sin(180° − α) + cos(180° − α) + cos α:",
    options: ["sin α", "−sin α", "2cos α", "0"],
    answer: 0,
    hints: [
      "sin(180° - α) = sin α.",
      "cos(180° - α) = -cos α.",
      "sin α - cos α + cos α = sin α."
    ],
    explanation: "Theo công thức hai góc bù nhau: sin(180° − α) = sin α và cos(180° − α) = −cos α. Do đó A = sin α − cos α + cos α = sin α.",
    skill: "trig-values"
  },
  {
    id: "q_val_14",
    lessonId: "values",
    prompt: "Trong tam giác ABC vuông tại A có góc B = 30°. Tính sin C:",
    options: ["√3/2", "1/2", "1", "√2/2"],
    answer: 0,
    hints: [
      "Trong tam giác vuông, góc C = 90° - B = 90° - 30° = 60°.",
      "sin C = sin 60° = √3/2."
    ],
    explanation: "Tam giác ABC vuông tại A nên C = 90° − 30° = 60°. Do đó sin C = sin 60° = √3/2.",
    skill: "trig-values"
  },
  {
    id: "q_val_15",
    lessonId: "values",
    prompt: "Giá trị của biểu thức P = sin 30° · cos 60° + cos 30° · sin 60° bằng bao nhiêu?",
    options: ["1", "0", "1/2", "√3/2"],
    answer: 0,
    hints: [
      "sin 30° = 1/2, cos 60° = 1/2.",
      "cos 30° = √3/2, sin 60° = √3/2.",
      "(1/2)(1/2) + (√3/2)(√3/2) = 1/4 + 3/4 = 1."
    ],
    explanation: "P = (1/2) × (1/2) + (√3/2) × (√3/2) = 1/4 + 3/4 = 1. (Đây chính là công thức sin(30° + 60°) = sin 90° = 1).",
    skill: "trig-values"
  },
  {
    id: "q_val_16",
    lessonId: "values",
    prompt: "Với góc nhọn α, khẳng định nào sau đây là SAI?",
    options: [
      "sin(90° − α) = −cos α",
      "cos(90° − α) = sin α",
      "tan(90° − α) = cot α",
      "sin²α + cos²α = 1"
    ],
    answer: 0,
    hints: [
      "Công thức hai góc phụ nhau: sin(90° - α) = cos α (dấu dương, không có dấu trừ)."
    ],
    explanation: "Công thức phụ nhau đúng là sin(90° − α) = cos α. Phương án A viết có dấu trừ là khẳng định sai.",
    skill: "trig-values"
  },
  {
    id: "q_val_17",
    type: "true-false",
    lessonId: "values",
    prompt: "Xét tính đúng/sai của các giá trị lượng giác tại các góc đặc biệt:",
    subQuestions: [
      { id: "a", text: "sin 0° = 0.", answer: true, explanation: "Góc 0° có tung độ y = 0 nên sin 0° = 0." },
      { id: "b", text: "cos 0° = 1.", answer: true, explanation: "Góc 0° có hoành độ x = 1 nên cos 0° = 1." },
      { id: "c", text: "sin 180° = 1.", answer: false, explanation: "sin 180° = 0 chứ không phải 1." },
      { id: "d", text: "cos 180° = −1.", answer: true, explanation: "Góc 180° có hoành độ x = -1 nên cos 180° = -1." }
    ],
    options: [
      "a, b, d Đúng; c Sai",
      "a, b, c Đúng; d Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Điểm trên nửa đường tròn đơn vị: 0° là (1; 0), 180° là (-1; 0)."
    ],
    explanation: "Ý a, b, d đúng; Ý c sai vì sin 180° = 0.",
    skill: "trig-values"
  },
  {
    id: "q_val_18",
    type: "true-false",
    lessonId: "values",
    prompt: "Với mọi góc α từ 0° đến 180°, xét tính đúng/sai của các hệ thức sau:",
    subQuestions: [
      { id: "a", text: "sin²α + cos²α = 1.", answer: true, explanation: "Hằng đẳng thức lượng giác cơ bản luôn đúng." },
      { id: "b", text: "sin(180° − α) = sin α.", answer: true, explanation: "Hai góc bù nhau có sin bằng nhau." },
      { id: "c", text: "cos(180° − α) = cos α.", answer: false, explanation: "cos bù phải đổi dấu: cos(180° - α) = -cos α." },
      { id: "d", text: "tan α · cot α = 1 (với sin α ≠ 0, cos α ≠ 0).", answer: true, explanation: "Đúng vì tan α = sin/cos và cot α = cos/sin." }
    ],
    options: [
      "a, b, d Đúng; c Sai",
      "a, b, c Đúng; d Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Hai góc bù nhau: sin bằng nhau, nhưng cos, tan, cot đối dấu nhau."
    ],
    explanation: "Ý a, b, d đúng; Ý c sai vì cos(180° − α) = −cos α.",
    skill: "trig-values"
  },
  {
    id: "q_val_19",
    type: "true-false",
    lessonId: "values",
    prompt: "Cho góc α tù (90° < α < 180°). Xét dấu của các giá trị lượng giác sau:",
    subQuestions: [
      { id: "a", text: "sin α > 0.", answer: true, explanation: "Tung độ điểm biểu diễn luôn dương." },
      { id: "b", text: "cos α < 0.", answer: true, explanation: "Hoành độ điểm biểu diễn luôn âm." },
      { id: "c", text: "tan α < 0.", answer: true, explanation: "tan = sin / cos là thương giữa số dương và số âm nên âm." },
      { id: "d", text: "cot α > 0.", answer: false, explanation: "cot = cos / sin là thương giữa số âm và số dương nên phải âm." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, b Đúng; c, d Sai",
      "b, c, d Đúng; a Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Với góc tù: chỉ có sin dương, còn cos, tan, cot đều mang dấu âm."
    ],
    explanation: "Ý a, b, c đúng; Ý d sai vì cot α mang dấu âm (cot α < 0).",
    skill: "trig-values"
  },
  {
    id: "q_val_20",
    type: "short-answer",
    lessonId: "values",
    prompt: "Tính giá trị của biểu thức P = sin² 35° + sin² 55° + cos² 120°. (Viết kết quả dưới dạng số thập phân):",
    answer: 1.25,
    acceptedAnswers: ["1.25", "5/4", "1,25"],
    options: ["1.25", "1", "1.5", "2"],
    hints: [
      "Vì 35° + 55° = 90° nên sin 55° = cos 35°.",
      "sin² 35° + sin² 55° = sin² 35° + cos² 35° = 1.",
      "cos 120° = -1/2 ⇒ cos² 120° = 1/4 = 0.25.",
      "P = 1 + 0.25 = 1.25."
    ],
    explanation: "Ta có sin 55° = cos 35° nên sin² 35° + sin² 55° = sin² 35° + cos² 35° = 1. Lại có cos 120° = −1/2 nên cos² 120° = 1/4 = 0.25. Vậy P = 1 + 0.25 = 1.25.",
    skill: "trig-values"
  },
  {
    id: "q_val_21",
    type: "short-answer",
    lessonId: "values",
    prompt: "Cho góc α thỏa mãn tan α = 2. Tính giá trị của biểu thức A = (sin α + cos α) / (sin α − cos α):",
    answer: 3,
    acceptedAnswers: ["3", "3.0"],
    options: ["3", "2", "1", "4"],
    hints: [
      "Chia cả tử và mẫu của A cho cos α (vì cos α ≠ 0).",
      "Tử số trở thành tan α + 1 = 2 + 1 = 3.",
      "Mẫu số trở thành tan α - 1 = 2 - 1 = 1.",
      "A = 3 / 1 = 3."
    ],
    explanation: "Chia cả tử và mẫu cho cos α ta được A = (tan α + 1) / (tan α − 1) = (2 + 1) / (2 − 1) = 3 / 1 = 3.",
    skill: "trig-values"
  },
  {
    id: "q_val_22",
    type: "short-answer",
    lessonId: "values",
    prompt: "Cho góc α tù thỏa mãn cos α = −0.6. Tính giá trị của biểu thức 10 · sin α:",
    answer: 8,
    acceptedAnswers: ["8", "8.0"],
    options: ["8", "6", "-8", "10"],
    hints: [
      "sin²α = 1 - cos²α = 1 - (-0.6)² = 1 - 0.36 = 0.64.",
      "Vì α là góc tù nên sin α > 0 ⇒ sin α = √0.64 = 0.8.",
      "10 · sin α = 10 · 0.8 = 8."
    ],
    explanation: "sin²α = 1 − (−0.6)² = 0.64. Do α là góc tù nên sin α > 0 ⇒ sin α = 0.8. Vậy 10 · sin α = 10 × 0.8 = 8.",
    skill: "trig-values"
  }
];

