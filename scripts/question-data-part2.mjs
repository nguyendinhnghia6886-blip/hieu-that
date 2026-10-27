// Question bank expansion for Part 2: Lessons 6 to 10
// (signs, cosine, sine-law, vectors-intro, scalar-product)

export const part2Questions = [
  // ==========================================
  // LESSON 6: SIGNS (18 new questions: 12 MC + 3 TF + 3 SA)
  // ==========================================
  {
    id: "q_sgn_5",
    lessonId: "signs",
    prompt: "Góc α có số đo 140°. Khẳng định nào sau đây là ĐÚNG về dấu của các giá trị lượng giác?",
    options: [
      "sin 140° > 0 và cos 140° < 0",
      "sin 140° < 0 và cos 140° > 0",
      "sin 140° > 0 và cos 140° > 0",
      "sin 140° < 0 và cos 140° < 0"
    ],
    answer: 0,
    hints: [
      "140° nằm trong khoảng (90°; 180°) là góc tù.",
      "Góc tù có tung độ y > 0 và hoành độ x < 0.",
      "Do đó sin > 0 và cos < 0."
    ],
    explanation: "140° là góc tù thuộc góc phần tư thứ hai, do đó sin 140° > 0 và cos 140° < 0.",
    skill: "trig-signs"
  },
  {
    id: "q_sgn_6",
    lessonId: "signs",
    prompt: "Dấu của tích P = cos 40° · tan 110° là:",
    options: ["Mang dấu âm", "Mang dấu dương", "Bằng 0", "Không xác định"],
    answer: 0,
    hints: [
      "40° là góc nhọn ⇒ cos 40° > 0.",
      "110° là góc tù ⇒ tan 110° < 0.",
      "Dương nhân Âm ra Âm."
    ],
    explanation: "Vì 40° nhọn nên cos 40° > 0; 110° tù nên tan 110° < 0. Do đó tích P = cos 40° · tan 110° < 0 (mang dấu âm).",
    skill: "trig-signs"
  },
  {
    id: "q_sgn_7",
    lessonId: "signs",
    prompt: "Cho tam giác ABC có góc A tù (A > 90°). Khẳng định nào sau đây SAI?",
    options: [
      "cos A > 0",
      "sin A > 0",
      "cos(B + C) > 0",
      "tan A < 0"
    ],
    answer: 0,
    hints: [
      "Góc A tù nên cos A < 0.",
      "Khẳng định cos A > 0 là sai."
    ],
    explanation: "Với góc A tù (> 90°), cos A mang giá trị âm (cos A < 0). Phương án A khẳng định cos A > 0 là sai.",
    skill: "trig-signs"
  },
  {
    id: "q_sgn_8",
    lessonId: "signs",
    prompt: "Khẳng định nào sau đây đúng với hai góc bù nhau α và 180° − α?",
    options: [
      "cos(180° − α) = −cos α",
      "sin(180° − α) = −sin α",
      "tan(180° − α) = tan α",
      "cot(180° − α) = cot α"
    ],
    answer: 0,
    hints: [
      "Câu thần chú lượng giác: 'Sin bù, cos đối, phụ chéo'.",
      "Hai góc bù nhau chỉ có sin bằng nhau, còn cos, tan, cot đối dấu nhau."
    ],
    explanation: "Công thức hai góc bù nhau chuẩn là cos(180° − α) = −cos α.",
    skill: "trig-signs"
  },
  {
    id: "q_sgn_9",
    lessonId: "signs",
    prompt: "Rút gọn biểu thức P = cos 20° + cos 160°:",
    options: ["0", "1", "2cos 20°", "−1"],
    answer: 0,
    hints: [
      "20° + 160° = 180° là hai góc bù nhau.",
      "cos 160° = -cos 20°.",
      "cos 20° + (-cos 20°) = 0."
    ],
    explanation: "Vì 20° và 160° bù nhau nên cos 160° = −cos 20°. Vậy P = cos 20° + (−cos 20°) = 0.",
    skill: "trig-signs"
  },
  {
    id: "q_sgn_10",
    lessonId: "signs",
    prompt: "Rút gọn biểu thức S = sin 40° − sin 140°:",
    options: ["0", "2sin 40°", "1", "−1"],
    answer: 0,
    hints: [
      "sin 140° = sin(180° - 40°) = sin 40°.",
      "sin 40° - sin 40° = 0."
    ],
    explanation: "Hai góc bù nhau có sin bằng nhau: sin 140° = sin 40°. Do đó S = sin 40° − sin 40° = 0.",
    skill: "trig-signs"
  },
  {
    id: "q_sgn_11",
    lessonId: "signs",
    prompt: "Trong tam giác ABC, biểu thức nào sau đây luôn bằng 0?",
    options: [
      "cos A + cos(B + C)",
      "sin A − sin(B + C)",
      "sin A + sin(B + C)",
      "cos A − cos(B + C)"
    ],
    answer: 0,
    hints: [
      "Trong tam giác: A + B + C = 180° ⇒ B + C = 180° - A.",
      "cos(B + C) = cos(180° - A) = -cos A.",
      "cos A + cos(B + C) = cos A - cos A = 0."
    ],
    explanation: "Trong tam giác ABC, B + C = 180° − A nên cos(B + C) = −cos A. Suy ra cos A + cos(B + C) = cos A − cos A = 0.",
    skill: "trig-signs"
  },
  {
    id: "q_sgn_12",
    lessonId: "signs",
    prompt: "Dấu của biểu thức T = tan 85° · cot 95° là:",
    options: ["Âm", "Dương", "Bằng 0", "Không đổi"],
    answer: 0,
    hints: [
      "85° là góc nhọn ⇒ tan 85° > 0.",
      "95° là góc tù ⇒ cot 95° < 0.",
      "Tích mang dấu âm."
    ],
    explanation: "tan 85° > 0 và cot 95° < 0. Tích một số dương với một số âm luôn luôn âm.",
    skill: "trig-signs"
  },
  {
    id: "q_sgn_13",
    lessonId: "signs",
    prompt: "Cho góc α thỏa mãn 0° < α < 180° và tan α < 0. Khi đó góc α là:",
    options: ["Góc tù", "Góc nhọn", "Góc vuông", "Góc bẹt"],
    answer: 0,
    hints: [
      "tan α = sin α / cos α.",
      "sin α luôn > 0 trên (0°; 180°).",
      "Để tan α < 0 thì cos α bắt buộc phải < 0, tức α là góc tù."
    ],
    explanation: "Trên khoảng (0°; 180°), sin α luôn dương. Do tan α = sin α / cos α < 0 nên cos α < 0, suy ra α là góc tù (90° < α < 180°).",
    skill: "trig-signs"
  },
  {
    id: "q_sgn_14",
    lessonId: "signs",
    prompt: "Biểu thức A = cos 10° + cos 20° + ... + cos 170° có giá trị bằng:",
    options: ["0", "1", "−1", "8.5"],
    answer: 0,
    hints: [
      "Ghép từng cặp bù nhau: (cos 10° + cos 170°) + (cos 20° + cos 160°) + ... + cos 90°.",
      "Mỗi cặp bù nhau có tổng bằng 0.",
      "cos 90° = 0."
    ],
    explanation: "Ghép các cặp đối nhau từng đôi một: cos(180° − x) + cos x = 0. Có 8 cặp đều bằng 0 và số hạng đứng giữa là cos 90° = 0. Tổng cả biểu thức bằng 0.",
    skill: "trig-signs"
  },
  {
    id: "q_sgn_15",
    lessonId: "signs",
    prompt: "Cho tam giác ABC. Khẳng định nào sau đây là ĐÚNG?",
    options: [
      "sin(A + B) = sin C",
      "cos(A + B) = cos C",
      "tan(A + B) = tan C",
      "cot(A + B) = cot C"
    ],
    answer: 0,
    hints: [
      "A + B = 180° - C.",
      "sin(180° - C) = sin C."
    ],
    explanation: "Vì A + B + C = 180° nên A + B và C bù nhau, do đó sin(A + B) = sin(180° − C) = sin C.",
    skill: "trig-signs"
  },
  {
    id: "q_sgn_16",
    lessonId: "signs",
    prompt: "Nếu góc α tù thì giá trị của cot α mang dấu gì?",
    options: ["Dấu âm", "Dấu dương", "Bằng 0", "Luôn bằng 1"],
    answer: 0,
    hints: [
      "cot α = cos α / sin α.",
      "Góc tù có cos α < 0 và sin α > 0."
    ],
    explanation: "Với góc tù, cos α < 0 và sin α > 0, do đó cot α = cos α / sin α mang dấu âm.",
    skill: "trig-signs"
  },
  {
    id: "q_sgn_17",
    type: "true-false",
    lessonId: "signs",
    prompt: "Xét tính đúng/sai của các biểu thức lượng giác sau:",
    subQuestions: [
      { id: "a", text: "cos 130° = −cos 50°.", answer: true, explanation: "130° và 50° bù nhau nên cos đối dấu." },
      { id: "b", text: "sin 115° = sin 65°.", answer: true, explanation: "115° và 65° bù nhau nên sin bằng nhau." },
      { id: "c", text: "tan 140° = tan 40°.", answer: false, explanation: "tan bù phải đối dấu: tan 140° = -tan 40°." },
      { id: "d", text: "cot 100° = −cot 80°.", answer: true, explanation: "cot bù cũng đổi dấu." }
    ],
    options: [
      "a, b, d Đúng; c Sai",
      "a, b, c Đúng; d Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Ghi nhớ: Chỉ có hàm sin là giữ nguyên dấu khi lấy góc bù, ba hàm còn lại (cos, tan, cot) đều đổi dấu."
    ],
    explanation: "Ý a, b, d đúng; Ý c sai vì hai góc bù nhau thì tan phải đổi dấu (tan 140° = −tan 40°).",
    skill: "trig-signs"
  },
  {
    id: "q_sgn_18",
    type: "true-false",
    lessonId: "signs",
    prompt: "Trong tam giác ABC bất kỳ, xét tính đúng/sai của các đẳng thức:",
    subQuestions: [
      { id: "a", text: "sin(A + B) = sin C.", answer: true, explanation: "Hai góc bù nhau có sin bằng nhau." },
      { id: "b", text: "cos(A + B) = −cos C.", answer: true, explanation: "Hai góc bù nhau có cos đối nhau." },
      { id: "c", text: "tan(A + B) = −tan C (khi C ≠ 90°).", answer: true, explanation: "tan hai góc bù nhau đối nhau." },
      { id: "d", text: "cos((A + B)/2) = cos(C/2).", answer: false, explanation: "Phụ nhau thì chéo: cos((A+B)/2) = sin(C/2)." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, b, d Đúng; c Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Chú ý góc một nửa: (A + B)/2 và C/2 là hai góc PHỤ nhau (tổng bằng 90°), phụ nhau thì sin biến thành cos."
    ],
    explanation: "Ý a, b, c đúng; Ý d sai vì (A + B)/2 + C/2 = 90° (hai góc phụ nhau), do đó cos((A + B)/2) = sin(C/2).",
    skill: "trig-signs"
  },
  {
    id: "q_sgn_19",
    type: "true-false",
    lessonId: "signs",
    prompt: "Cho góc α thỏa mãn 90° < α < 180°. Xét tính đúng/sai của các khẳng định:",
    subQuestions: [
      { id: "a", text: "sin α > 0.", answer: true, explanation: "Góc tù luôn có sin dương." },
      { id: "b", text: "cos α < 0.", answer: true, explanation: "Góc tù luôn có cos âm." },
      { id: "c", text: "sin α · cos α < 0.", answer: true, explanation: "Dương nhân âm ra âm." },
      { id: "d", text: "sin²α − cos²α luôn luôn âm.", answer: false, explanation: "Ví dụ α = 150°: sin = 1/2, cos = -√3/2 thì sin² - cos² = 1/4 - 3/4 = -1/2 (âm), nhưng nếu α = 95°: sin ≈ 1, cos ≈ 0 thì hiệu là dương." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, b Đúng; c, d Sai",
      "b, c, d Đúng; a Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Hiệu sin²α - cos²α phụ thuộc vào góc cụ thể (gần 90° thì sin lớn hơn |cos|, gần 180° thì |cos| lớn hơn sin)."
    ],
    explanation: "Ý a, b, c đúng; Ý d sai vì khi α gần 90° (ví dụ 100°), sin 100° > |cos 100°| nên sin²α − cos²α > 0.",
    skill: "trig-signs"
  },
  {
    id: "q_sgn_20",
    type: "short-answer",
    lessonId: "signs",
    prompt: "Tính giá trị của biểu thức P = cos² 20° + cos² 70° + tan 135°:",
    answer: 0,
    acceptedAnswers: ["0", "0.0"],
    options: ["0", "1", "-1", "2"],
    hints: [
      "20° + 70° = 90° nên cos 70° = sin 20°.",
      "cos² 20° + sin² 20° = 1.",
      "tan 135° = -1.",
      "P = 1 + (-1) = 0."
    ],
    explanation: "Vì 20° và 70° phụ nhau nên cos 70° = sin 20°, suy ra cos² 20° + cos² 70° = 1. Lại có tan 135° = −1. Do đó P = 1 + (−1) = 0.",
    skill: "trig-signs"
  },
  {
    id: "q_sgn_21",
    type: "short-answer",
    lessonId: "signs",
    prompt: "Tính giá trị biểu thức: S = sin² 10° + sin² 80° + sin² 30° + sin² 60°:",
    answer: 2,
    acceptedAnswers: ["2", "2.0"],
    options: ["2", "1", "3", "1.5"],
    hints: [
      "sin² 10° + sin² 80° = sin² 10° + cos² 10° = 1.",
      "sin² 30° + sin² 60° = sin² 30° + cos² 30° = 1.",
      "S = 1 + 1 = 2."
    ],
    explanation: "Theo công thức phụ nhau: sin² 10° + sin² 80° = 1 và sin² 30° + sin² 60° = 1. Vậy tổng S = 1 + 1 = 2.",
    skill: "trig-signs"
  },
  {
    id: "q_sgn_22",
    type: "short-answer",
    lessonId: "signs",
    prompt: "Trong tam giác ABC có góc A = 120°. Tính giá trị của biểu thức: T = cos A + cos(B + C):",
    answer: 0,
    acceptedAnswers: ["0", "0.0"],
    options: ["0", "-1", "1", "-0.5"],
    hints: [
      "B + C = 180° - A.",
      "cos(B + C) = -cos A.",
      "cos A + (-cos A) = 0."
    ],
    explanation: "Trong mọi tam giác, B + C = 180° − A nên cos(B + C) = −cos A. Do đó T = cos A + (−cos A) = 0 với mọi góc A.",
    skill: "trig-signs"
  },

  // ==========================================
  // LESSON 7: COSINE (18 new questions: 12 MC + 3 TF + 3 SA)
  // ==========================================
  {
    id: "q_cos_5",
    lessonId: "cosine",
    prompt: "Cho tam giác ABC có b = 6, c = 8 và góc A = 60°. Độ dài cạnh a là:",
    options: ["2√13", "10", "2√37", "8"],
    answer: 0,
    hints: [
      "Định lý cosin: a² = b² + c² - 2bc cos A.",
      "a² = 36 + 64 - 2(6)(8)(1/2) = 100 - 48 = 52.",
      "a = √52 = 2√13."
    ],
    explanation: "Áp dụng định lý cosin: a² = 6² + 8² − 2 × 6 × 8 × cos 60° = 36 + 64 − 48 = 52. Vậy a = √52 = 2√13.",
    skill: "cosine-law"
  },
  {
    id: "q_cos_6",
    lessonId: "cosine",
    prompt: "Cho tam giác ABC có a = 5, b = 7, c = 8. Tính số đo góc A:",
    options: ["60°", "30°", "45°", "120°"],
    answer: 0,
    hints: [
      "cos A = (b² + c² - a²) / (2bc).",
      "cos A = (49 + 64 - 25) / (2 · 7 · 8) = 88 / 112 = 11/14.",
      "Khoan, hãy tính góc B xem góc nào đẹp: cos B = (25 + 64 - 49)/(2*5*8) = 40/80 = 1/2 ⇒ B = 60°."
    ],
    options: ["cos A = 11/14", "cos A = 1/2", "cos A = √3/2", "cos A = 3/4"],
    answer: 0,
    hints: [
      "Hệ quả định lý cosin: cos A = (b² + c² - a²) / (2bc).",
      "cos A = (49 + 64 - 25) / (2 · 7 · 8) = 88 / 112 = 11/14."
    ],
    explanation: "cos A = (b² + c² − a²) / (2bc) = (49 + 64 − 25) / (2 × 7 × 8) = 88 / 112 = 11/14.",
    skill: "cosine-law"
  },
  {
    id: "q_cos_7",
    lessonId: "cosine",
    prompt: "Tam giác ABC có 3 cạnh a = 6, b = 8, c = 10. Tam giác này là:",
    options: [
      "Tam giác vuông",
      "Tam giác nhọn",
      "Tam giác tù",
      "Tam giác đều"
    ],
    answer: 0,
    hints: [
      "So sánh c² với a² + b².",
      "6² + 8² = 36 + 64 = 100 = 10².",
      "Thỏa mãn định lý Pythagore đảo nên vuông tại C."
    ],
    explanation: "Ta có 6² + 8² = 36 + 64 = 100 = 10². Tam giác thỏa mãn định lý Pythagore đảo nên vuông tại C.",
    skill: "cosine-law"
  },
  {
    id: "q_cos_8",
    lessonId: "cosine",
    prompt: "Cho tam giác ABC có a = 3, b = 5, c = 7. Khẳng định nào sau đây là ĐÚNG?",
    options: [
      "Góc C là góc tù (cos C < 0)",
      "Góc C là góc nhọn (cos C > 0)",
      "Tam giác ABC vuông tại C",
      "Góc A là góc lớn nhất"
    ],
    answer: 0,
    hints: [
      "Cạnh c = 7 là cạnh lớn nhất nên góc C là góc lớn nhất.",
      "cos C = (a² + b² - c²) / (2ab) = (9 + 25 - 49) / (2 · 3 · 5) = -15 / 30 = -1/2.",
      "cos C = -1/2 < 0 ⇒ góc C = 120° (góc tù)."
    ],
    explanation: "cos C = (3² + 5² − 7²) / (2 × 3 × 5) = (9 + 25 − 49) / 30 = −15/30 = −1/2. Vì cos C < 0 nên C = 120° là góc tù.",
    skill: "cosine-law"
  },
  {
    id: "q_cos_9",
    lessonId: "cosine",
    prompt: "Công thức tính độ dài đường trung tuyến m_a xuất phát từ đỉnh A của tam giác ABC là:",
    options: [
      "m_a² = (2b² + 2c² − a²) / 4",
      "m_a² = (b² + c² − a²) / 2",
      "m_a² = (b² + c² + a²) / 4",
      "m_a² = (2b² + 2c² + a²) / 4"
    ],
    answer: 0,
    hints: [
      "Công thức trung tuyến chuẩn: m_a² = (2(b² + c²) - a²) / 4."
    ],
    explanation: "Công thức độ dài đường trung tuyến chuẩn trong hình học 10 là m_a² = (2b² + 2c² − a²) / 4.",
    skill: "cosine-law"
  },
  {
    id: "q_cos_10",
    lessonId: "cosine",
    prompt: "Cho tam giác ABC có b = 4, c = 6 và m_a = 5. Tính độ dài cạnh a:",
    options: ["2√2", "4", "2", "3√2"],
    answer: 0,
    hints: [
      "m_a² = (2b² + 2c² - a²) / 4.",
      "25 = (2(16) + 2(36) - a²) / 4 = (32 + 72 - a²) / 4 = (104 - a²) / 4.",
      "100 = 104 - a² ⇒ a² = 4 ⇒ a = 2."
    ],
    explanation: "m_a² = (2(16) + 2(36) − a²) / 4 ⇔ 25 = (104 − a²) / 4 ⇔ 104 − a² = 100 ⇔ a² = 4 ⇒ a = 2.",
    skill: "cosine-law"
  },
  {
    id: "q_cos_11",
    lessonId: "cosine",
    prompt: "Trong tam giác ABC, nếu a² > b² + c² thì góc A là:",
    options: ["Góc tù", "Góc nhọn", "Góc vuông", "Không xác định"],
    answer: 0,
    hints: [
      "cos A = (b² + c² - a²) / (2bc).",
      "Nếu b² + c² - a² < 0 thì cos A < 0, tức góc A tù."
    ],
    explanation: "Ta có cos A = (b² + c² − a²) / (2bc). Khi a² > b² + c² thì tử số âm, suy ra cos A < 0 nên góc A là góc tù.",
    skill: "cosine-law"
  },
  {
    id: "q_cos_12",
    lessonId: "cosine",
    prompt: "Cho hình bình hành ABCD có AB = 4, AD = 6 và góc BAD = 60°. Độ dài đường chéo BD là:",
    options: ["2√7", "2√19", "8", "6√3"],
    answer: 0,
    hints: [
      "Trong tam giác ABD: BD² = AB² + AD² - 2 AB AD cos 60°.",
      "BD² = 16 + 36 - 2(4)(6)(1/2) = 52 - 24 = 28.",
      "BD = √28 = 2√7."
    ],
    explanation: "Xét tam giác ABD: BD² = 4² + 6² − 2 × 4 × 6 × cos 60° = 16 + 36 − 24 = 28 ⇒ BD = √28 = 2√7.",
    skill: "cosine-law"
  },
  {
    id: "q_cos_13",
    lessonId: "cosine",
    prompt: "Cho tam giác ABC có a = 7, b = 8, c = 5. Số đo góc A bằng:",
    options: ["60°", "120°", "45°", "90°"],
    answer: 0,
    hints: [
      "cos A = (b² + c² - a²) / (2bc) = (64 + 25 - 49) / (2 · 8 · 5) = 40 / 80 = 1/2.",
      "cos A = 1/2 ⇒ A = 60°."
    ],
    explanation: "cos A = (8² + 5² − 7²) / (2 × 8 × 5) = (64 + 25 − 49) / 80 = 40/80 = 1/2. Do đó góc A = 60°.",
    skill: "cosine-law"
  },
  {
    id: "q_cos_14",
    lessonId: "cosine",
    prompt: "Nếu góc A = 90° thì định lý cosin trở thành định lý nào đã học ở cấp 2?",
    options: [
      "Định lý Pythagore",
      "Định lý Thales",
      "Định lý Menelaus",
      "Định lý Ceva"
    ],
    answer: 0,
    hints: [
      "Khi A = 90° thì cos 90° = 0.",
      "a² = b² + c² - 2bc(0) = b² + c²."
    ],
    explanation: "Khi A = 90°, cos 90° = 0 thì a² = b² + c², đây chính là định lý Pythagore cho tam giác vuông.",
    skill: "cosine-law"
  },
  {
    id: "q_cos_15",
    lessonId: "cosine",
    prompt: "Cho tam giác đều ABC cạnh bằng a. Độ dài đường trung tuyến m_a bằng:",
    options: ["a√3/2", "a/2", "a√3/4", "a√2/2"],
    answer: 0,
    hints: [
      "Trong tam giác đều, đường trung tuyến đồng thời là đường cao.",
      "h = a · sin 60° = a√3/2."
    ],
    explanation: "Trong tam giác đều cạnh a, đường trung tuyến trùng với đường cao nên m_a = a√3/2.",
    skill: "cosine-law"
  },
  {
    id: "q_cos_16",
    lessonId: "cosine",
    prompt: "Tam giác ABC có 3 cạnh thỏa mãn a² + b² < c². Kết luận nào sau đây đúng?",
    options: [
      "Góc C là góc tù",
      "Tam giác ABC vuông",
      "Tam giác ABC có 3 góc nhọn",
      "Góc A là góc tù"
    ],
    answer: 0,
    hints: [
      "cos C = (a² + b² - c²) / (2ab).",
      "Tử số a² + b² - c² < 0 nên cos C < 0 ⇒ C tù."
    ],
    explanation: "Vì a² + b² − c² < 0 nên cos C = (a² + b² − c²) / (2ab) < 0, do đó góc C là góc tù.",
    skill: "cosine-law"
  },
  {
    id: "q_cos_17",
    type: "true-false",
    lessonId: "cosine",
    prompt: "Cho tam giác ABC có a = 7, b = 5, c = 8. Xét tính đúng/sai của từng khẳng định:",
    subQuestions: [
      { id: "a", text: "cos A = 1/2.", answer: true, explanation: "cos A = (25 + 64 - 49)/(2·5·8) = 40/80 = 1/2." },
      { id: "b", text: "Góc A = 60°.", answer: true, explanation: "cos A = 1/2 suy ra A = 60°." },
      { id: "c", text: "Góc B là góc lớn nhất trong tam giác ABC.", answer: false, explanation: "Cạnh c = 8 lớn nhất nên góc C mới là góc lớn nhất." },
      { id: "d", text: "Tam giác ABC là tam giác có 3 góc nhọn.", answer: true, explanation: "cos C = (49+25-64)/(2·7·5) = 10/70 = 1/7 > 0 nên góc lớn nhất C vẫn nhọn." }
    ],
    options: [
      "a, b, d Đúng; c Sai",
      "a, b, c Đúng; d Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Tính cos A và cos C để kiểm tra tính chất góc."
    ],
    explanation: "Ý a, b, d đúng; Ý c sai vì cạnh c = 8 là lớn nhất nên góc đối diện C là góc lớn nhất.",
    skill: "cosine-law"
  },
  {
    id: "q_cos_18",
    type: "true-false",
    lessonId: "cosine",
    prompt: "Về định lý cosin và công thức trung tuyến trong tam giác ABC. Xét tính đúng/sai:",
    subQuestions: [
      { id: "a", text: "a² = b² + c² − 2bc cos A.", answer: true, explanation: "Định lý cosin chuẩn xác." },
      { id: "b", text: "Nếu a² = b² + c² thì tam giác vuông tại A.", answer: true, explanation: "Định lý Pythagore đảo." },
      { id: "c", text: "m_a² = (2b² + 2c² − a²) / 4.", answer: true, explanation: "Công thức trung tuyến chuẩn." },
      { id: "d", text: "Nếu tam giác có a > b thì góc A < góc B.", answer: false, explanation: "Trong tam giác, cạnh đối diện lớn hơn thì góc đối diện phải lớn hơn (A > B)." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, b, d Đúng; c Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Cạnh lớn hơn thì góc đối diện phải lớn hơn."
    ],
    explanation: "Ý a, b, c đúng; Ý d sai vì quan hệ giữa góc và cạnh đối diện: cạnh lớn hơn thì góc đối diện phải lớn hơn.",
    skill: "cosine-law"
  },
  {
    id: "q_cos_19",
    type: "true-false",
    lessonId: "cosine",
    prompt: "Cho tam giác ABC có AB = 2, AC = 3 và góc A = 60°. Xét tính đúng/sai:",
    subQuestions: [
      { id: "a", text: "BC² = 4 + 9 − 2(2)(3) cos 60° = 7.", answer: true, explanation: "BC² = 13 - 12(1/2) = 7." },
      { id: "b", text: "Độ dài cạnh BC = √7.", answer: true, explanation: "BC = √7." },
      { id: "c", text: "Tam giác ABC là tam giác vuông.", answer: false, explanation: "BC² = 7 ≠ 4 + 9 = 13 nên không vuông." },
      { id: "d", text: "cos B = (2² + 7 − 3²) / (2 · 2 · √7) = 2 / (4√7) = √7/14.", answer: true, explanation: "cos B = (4 + 7 - 9)/(4√7) = 2/(4√7) = 1/(2√7) = √7/14." }
    ],
    options: [
      "a, b, d Đúng; c Sai",
      "a, b, c Đúng; d Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Tính BC theo định lý cosin rồi kiểm tra các hệ số."
    ],
    explanation: "Ý a, b, d đúng; Ý c sai vì BC² = 7 ≠ 2² + 3² = 13.",
    skill: "cosine-law"
  },
  {
    id: "q_cos_20",
    type: "short-answer",
    lessonId: "cosine",
    prompt: "Cho tam giác ABC có b = 3, c = 4 và góc A = 90°. Tính độ dài cạnh a:",
    answer: 5,
    acceptedAnswers: ["5", "5.0"],
    options: ["5", "7", "√7", "25"],
    hints: [
      "Tam giác vuông tại A: a² = b² + c² = 9 + 16 = 25.",
      "a = √25 = 5."
    ],
    explanation: "Áp dụng định lý Pythagore (hoặc cosin với cos 90° = 0): a = √(3² + 4²) = √25 = 5.",
    skill: "cosine-law"
  },
  {
    id: "q_cos_21",
    type: "short-answer",
    lessonId: "cosine",
    prompt: "Cho tam giác ABC có 3 cạnh a = 3, b = 5, c = 7. Tính số đo góc C (theo độ):",
    answer: 120,
    acceptedAnswers: ["120", "120°", "120.0"],
    options: ["120", "60", "135", "150"],
    hints: [
      "cos C = (a² + b² - c²) / (2ab).",
      "cos C = (9 + 25 - 49) / (2 · 3 · 5) = -15 / 30 = -1/2.",
      "Góc có cos = -1/2 là 120°."
    ],
    explanation: "cos C = (3² + 5² − 7²) / (2 × 3 × 5) = −15/30 = −1/2. Góc C trong tam giác có cos = −1/2 là 120°.",
    skill: "cosine-law"
  },
  {
    id: "q_cos_22",
    type: "short-answer",
    lessonId: "cosine",
    prompt: "Cho tam giác ABC có a = 6, b = 8 và c = 10. Tính độ dài đường trung tuyến m_c ứng với cạnh huyền c:",
    answer: 5,
    acceptedAnswers: ["5", "5.0"],
    options: ["5", "6", "4", "7"],
    hints: [
      "Tam giác có 6² + 8² = 10² là tam giác vuông tại C với cạnh huyền c = 10.",
      "Trong tam giác vuông, đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền: m_c = c / 2 = 5."
    ],
    explanation: "Tam giác ABC vuông tại C vì 6² + 8² = 10². Đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền: m_c = 10 / 2 = 5.",
    skill: "cosine-law"
  },

  // ==========================================
  // LESSON 8: SINE-LAW (18 new questions: 12 MC + 3 TF + 3 SA)
  // ==========================================
  {
    id: "q_sin_5",
    lessonId: "sine-law",
    prompt: "Cho tam giác ABC có a = 10 và góc A = 30°. Bán kính đường tròn ngoại tiếp R của tam giác ABC là:",
    options: ["10", "5", "20", "15"],
    answer: 0,
    hints: [
      "Theo định lý sin: a / sin A = 2R.",
      "10 / sin 30° = 10 / (1/2) = 20 = 2R.",
      "R = 20 / 2 = 10."
    ],
    explanation: "Định lý sin cho: 2R = a / sin A = 10 / sin 30° = 10 / (1/2) = 20 ⇒ R = 10.",
    skill: "sine-law"
  },
  {
    id: "q_sin_6",
    lessonId: "sine-law",
    prompt: "Cho tam giác ABC có b = 8, c = 5 và góc A = 30°. Diện tích tam giác ABC là:",
    options: ["10", "20", "10√3", "40"],
    answer: 0,
    hints: [
      "Công thức diện tích: S = (1/2) bc sin A.",
      "S = (1/2) · 8 · 5 · sin 30° = 20 · (1/2) = 10."
    ],
    explanation: "Diện tích S = (1/2) bc sin A = (1/2) × 8 × 5 × sin 30° = 20 × (1/2) = 10.",
    skill: "sine-law"
  },
  {
    id: "q_sin_7",
    lessonId: "sine-law",
    prompt: "Cho tam giác ABC có góc B = 45°, góc C = 60° và b = 4. Độ dài cạnh c là:",
    options: ["2√6", "4√3", "2√3", "4√2"],
    answer: 0,
    hints: [
      "Định lý sin: b / sin B = c / sin C.",
      "c = b · sin C / sin B = 4 · sin 60° / sin 45°.",
      "c = 4 · (√3/2) / (√2/2) = 4√3 / √2 = 2√6."
    ],
    explanation: "Theo định lý sin: c = b · sin C / sin B = 4 × (√3/2) / (√2/2) = 4√3 / √2 = 2√6.",
    skill: "sine-law"
  },
  {
    id: "q_sin_8",
    lessonId: "sine-law",
    prompt: "Tam giác ABC có 3 cạnh a = 3, b = 4, c = 5. Bán kính đường tròn nội tiếp r của tam giác là:",
    options: ["1", "2", "1.5", "0.5"],
    answer: 0,
    hints: [
      "Nửa chu vi p = (3 + 4 + 5) / 2 = 6.",
      "Tam giác vuông nên diện tích S = (1/2) · 3 · 4 = 6.",
      "Bán kính nội tiếp r = S / p = 6 / 6 = 1."
    ],
    explanation: "Nửa chu vi p = (3 + 4 + 5)/2 = 6. Diện tích S = (1/2) × 3 × 4 = 6. Bán kính đường tròn nội tiếp r = S / p = 6 / 6 = 1.",
    skill: "sine-law"
  },
  {
    id: "q_sin_9",
    lessonId: "sine-law",
    prompt: "Cho tam giác đều cạnh bằng 6. Diện tích của tam giác đều này là:",
    options: ["9√3", "18", "18√3", "36"],
    answer: 0,
    hints: [
      "Công thức diện tích tam giác đều cạnh a: S = a²√3 / 4.",
      "Với a = 6: S = 36√3 / 4 = 9√3."
    ],
    explanation: "Diện tích tam giác đều cạnh a là S = a²√3 / 4 = 6²√3 / 4 = 36√3 / 4 = 9√3.",
    skill: "sine-law"
  },
  {
    id: "q_sin_10",
    lessonId: "sine-law",
    prompt: "Biết diện tích tam giác ABC là S = 24 và nửa chu vi p = 8. Bán kính đường tròn nội tiếp r bằng:",
    options: ["3", "4", "6", "16"],
    answer: 0,
    hints: [
      "Công thức liên hệ: S = p · r.",
      "r = S / p = 24 / 8 = 3."
    ],
    explanation: "Từ công thức S = p · r, ta có r = S / p = 24 / 8 = 3.",
    skill: "sine-law"
  },
  {
    id: "q_sin_11",
    lessonId: "sine-law",
    prompt: "Trong tam giác ABC, hệ thức nào sau đây KHÔNG PHẢI là công thức tính diện tích S?",
    options: [
      "S = 2R · sin A · sin B · sin C",
      "S = (1/2) ab sin C",
      "S = abc / (4R)",
      "S = p · r"
    ],
    answer: 0,
    hints: [
      "Công thức đúng liên quan đến R và các góc là: S = 2R² sin A sin B sin C (chứa R², không phải 2R)."
    ],
    explanation: "Công thức chuẩn là S = 2R² sin A sin B sin C. Phương án A viết 2R (thiếu bình phương của bán kính) nên sai.",
    skill: "sine-law"
  },
  {
    id: "q_sin_12",
    lessonId: "sine-law",
    prompt: "Cho tam giác ABC có a = 8, góc B = 60°, góc C = 45°. Số đo góc A là:",
    options: ["75°", "60°", "80°", "70°"],
    answer: 0,
    hints: [
      "Tổng 3 góc trong tam giác: A + B + C = 180°.",
      "A = 180° - 60° - 45° = 75°."
    ],
    explanation: "Tổng 3 góc trong một tam giác bằng 180°: A = 180° − 60° − 45° = 75°.",
    skill: "sine-law"
  },
  {
    id: "q_sin_13",
    lessonId: "sine-law",
    prompt: "Cho tam giác ABC vuông tại A có BC = 12. Bán kính đường tròn ngoại tiếp R của tam giác ABC bằng:",
    options: ["6", "12", "3", "24"],
    answer: 0,
    hints: [
      "Trong tam giác vuông, tâm đường tròn ngoại tiếp là trung điểm cạnh huyền.",
      "Bán kính R = BC / 2 = 12 / 2 = 6."
    ],
    explanation: "Tam giác vuông tại A thì cạnh huyền BC là đường kính đường tròn ngoại tiếp, do đó R = BC / 2 = 12 / 2 = 6.",
    skill: "sine-law"
  },
  {
    id: "q_sin_14",
    lessonId: "sine-law",
    prompt: "Cho tam giác ABC có a = 5, b = 6, c = 7. Nửa chu vi p của tam giác là:",
    options: ["9", "18", "8.5", "10"],
    answer: 0,
    hints: [
      "p = (a + b + c) / 2 = (5 + 6 + 7) / 2 = 18 / 2 = 9."
    ],
    explanation: "Nửa chu vi p = (a + b + c) / 2 = (5 + 6 + 7) / 2 = 18 / 2 = 9.",
    skill: "sine-law"
  },
  {
    id: "q_sin_15",
    lessonId: "sine-law",
    prompt: "Áp dụng công thức Heron, diện tích tam giác có 3 cạnh a = 5, b = 6, c = 7 là:",
    options: ["6√6", "12√6", "18", "24"],
    answer: 0,
    hints: [
      "p = 9. p - a = 4, p - b = 3, p - c = 2.",
      "S = √[9 · 4 · 3 · 2] = √[216] = 6√6."
    ],
    explanation: "Ta có p = 9. Theo Heron: S = √[9(9 − 5)(9 − 6)(9 − 7)] = √[9 × 4 × 3 × 2] = √216 = 6√6.",
    skill: "sine-law"
  },
  {
    id: "q_sin_16",
    lessonId: "sine-law",
    prompt: "Cho tam giác ABC có S = 12 và cạnh a = 6. Độ dài đường cao h_a xuất phát từ đỉnh A là:",
    options: ["4", "2", "6", "8"],
    answer: 0,
    hints: [
      "S = (1/2) a · h_a.",
      "12 = (1/2) · 6 · h_a = 3 · h_a ⇒ h_a = 4."
    ],
    explanation: "S = (1/2) a · h_a ⇔ 12 = (1/2) × 6 × h_a = 3 h_a ⇔ h_a = 4.",
    skill: "sine-law"
  },
  {
    id: "q_sin_17",
    type: "true-false",
    lessonId: "sine-law",
    prompt: "Xét tính đúng/sai của các công thức tính diện tích tam giác ABC:",
    subQuestions: [
      { id: "a", text: "S = (1/2) ab sin C.", answer: true, explanation: "Công thức diện tích qua hai cạnh và góc xen giữa chuẩn xác." },
      { id: "b", text: "S = abc / (4R).", answer: true, explanation: "Công thức liên hệ 3 cạnh và bán kính ngoại tiếp R." },
      { id: "c", text: "S = p · r.", answer: true, explanation: "Công thức liên hệ nửa chu vi và bán kính nội tiếp r." },
      { id: "d", text: "a / sin A = R.", answer: false, explanation: "Định lý sin đúng là a / sin A = 2R (phải bằng 2R chứ không phải R)." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, b, d Đúng; c Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Định lý sin: a/sin A = 2R (đường kính)."
    ],
    explanation: "Ý a, b, c đúng; Ý d sai vì theo định lý sin thì a / sin A = 2R.",
    skill: "sine-law"
  },
  {
    id: "q_sin_18",
    type: "true-false",
    lessonId: "sine-law",
    prompt: "Cho tam giác đều ABC có cạnh bằng 4. Xét tính đúng/sai của các đại lượng sau:",
    subQuestions: [
      { id: "a", text: "Diện tích S = 4√3.", answer: true, explanation: "S = 4²√3 / 4 = 4√3." },
      { id: "b", text: "Nửa chu vi p = 6.", answer: true, explanation: "p = (4 + 4 + 4) / 2 = 6." },
      { id: "c", text: "Bán kính đường tròn ngoại tiếp R = 4√3/3.", answer: true, explanation: "R = a / (2 sin 60°) = 4 / (2 · √3/2) = 4/√3 = 4√3/3." },
      { id: "d", text: "Bán kính đường tròn nội tiếp r = 2.", answer: false, explanation: "r = S / p = 4√3 / 6 = 2√3/3 ≠ 2." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, b, d Đúng; c Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Tính r = S / p = 4√3 / 6 = 2√3/3."
    ],
    explanation: "Ý a, b, c đúng; Ý d sai vì r = S / p = 4√3 / 6 = 2√3/3.",
    skill: "sine-law"
  },
  {
    id: "q_sin_19",
    type: "true-false",
    lessonId: "sine-law",
    prompt: "Cho tam giác ABC có a = 6, góc A = 30° và góc B = 45°. Xét tính đúng/sai:",
    subQuestions: [
      { id: "a", text: "Bán kính ngoại tiếp R = 6.", answer: true, explanation: "2R = 6 / sin 30° = 12 ⇒ R = 6." },
      { id: "b", text: "Độ dài cạnh b = 6√2.", answer: true, explanation: "b = 2R · sin B = 12 · sin 45° = 6√2." },
      { id: "c", text: "Góc C = 105°.", answer: true, explanation: "C = 180° - 30° - 45° = 105°." },
      { id: "d", text: "Tam giác ABC là tam giác vuông cân.", answer: false, explanation: "Tam giác có 3 góc 30°, 45°, 105° nên không thể vuông cân." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, c Đúng; b, d Sai",
      "b, d Đúng; a, c Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Tam giác có góc 105° là tam giác tù, không phải vuông cân."
    ],
    explanation: "Ý a, b, c đúng; Ý d sai vì góc C = 105° (tam giác tù, không vuông cân).",
    skill: "sine-law"
  },
  {
    id: "q_sin_20",
    type: "short-answer",
    lessonId: "sine-law",
    prompt: "Cho tam giác ABC có a = 8 và góc A = 30°. Bán kính đường tròn ngoại tiếp R của tam giác bằng:",
    answer: 8,
    acceptedAnswers: ["8", "8.0"],
    options: ["8", "16", "4", "8√3"],
    hints: [
      "2R = a / sin A = 8 / sin 30° = 8 / (1/2) = 16.",
      "R = 16 / 2 = 8."
    ],
    explanation: "Áp dụng định lý sin: 2R = a / sin A = 8 / 0.5 = 16 ⇒ R = 8.",
    skill: "sine-law"
  },
  {
    id: "q_sin_21",
    type: "short-answer",
    lessonId: "sine-law",
    prompt: "Cho tam giác ABC có b = 10, c = 6 và góc A = 150°. Tính diện tích tam giác ABC:",
    answer: 15,
    acceptedAnswers: ["15", "15.0"],
    options: ["15", "30", "15√3", "20"],
    hints: [
      "S = (1/2) bc sin A.",
      "sin 150° = sin 30° = 1/2.",
      "S = (1/2) · 10 · 6 · (1/2) = 15."
    ],
    explanation: "S = (1/2) bc sin A = (1/2) × 10 × 6 × sin 150° = 30 × (1/2) = 15.",
    skill: "sine-law"
  },
  {
    id: "q_sin_22",
    type: "short-answer",
    lessonId: "sine-law",
    prompt: "Cho tam giác ABC có diện tích S = 30 và bán kính đường tròn nội tiếp r = 3. Tính chu vi của tam giác ABC:",
    answer: 20,
    acceptedAnswers: ["20", "20.0"],
    options: ["20", "10", "40", "15"],
    hints: [
      "S = p · r ⇒ p = S / r = 30 / 3 = 10 (nửa chu vi).",
      "Chu vi 2p = 10 · 2 = 20."
    ],
    explanation: "Nửa chu vi p = S / r = 30 / 3 = 10. Do đó chu vi của tam giác là 2p = 20.",
    skill: "sine-law"
  },

  // ==========================================
  // LESSON 9: VECTORS-INTRO (18 new questions: 12 MC + 3 TF + 3 SA)
  // ==========================================
  {
    id: "q_vec_5",
    lessonId: "vectors-intro",
    prompt: "Cho hình bình hành ABCD. Vectơ tổng AB→ + AD→ bằng vectơ nào sau đây?",
    options: ["AC→", "BD→", "CA→", "DB→"],
    answer: 0,
    hints: [
      "Quy tắc hình bình hành: Hai vectơ chung gốc là hai cạnh thì tổng bằng vectơ đường chéo xuất phát từ gốc đó."
    ],
    explanation: "Theo quy tắc hình bình hành, tổng hai vectơ xuất phát từ đỉnh A là AB→ + AD→ = AC→ (vectơ đường chéo).",
    skill: "vectors"
  },
  {
    id: "q_vec_6",
    lessonId: "vectors-intro",
    prompt: "Cho ba điểm bất kỳ A, B, C. Hiệu hai vectơ AB→ − AC→ bằng vectơ nào?",
    options: ["CB→", "BC→", "CA→", "BA→"],
    answer: 0,
    hints: [
      "Quy tắc trừ hai vectơ chung gốc A: AB→ - AC→ = CB→ (điểm ngọn đổi vị trí)."
    ],
    explanation: "Quy tắc trừ hai vectơ chung gốc: AB→ − AC→ = CB→.",
    skill: "vectors"
  },
  {
    id: "q_vec_7",
    lessonId: "vectors-intro",
    prompt: "I là trung điểm của đoạn thẳng AB. Với mọi điểm M bất kỳ, hệ thức nào sau đây ĐÚNG?",
    options: [
      "MA→ + MB→ = 2MI→",
      "MA→ + MB→ = MI→",
      "MA→ + MB→ = 0→",
      "MA→ − MB→ = 2MI→"
    ],
    answer: 0,
    hints: [
      "Tính chất trung điểm cơ bản mở rộng cho điểm M tùy ý."
    ],
    explanation: "Với I là trung điểm AB, ta có công thức trung điểm mở rộng: MA→ + MB→ = 2MI→ với mọi điểm M.",
    skill: "vectors"
  },
  {
    id: "q_vec_8",
    lessonId: "vectors-intro",
    prompt: "G là trọng tâm của tam giác ABC. Khẳng định nào sau đây là ĐÚNG?",
    options: [
      "GA→ + GB→ + GC→ = 0→",
      "GA→ + GB→ + GC→ = 3GG→",
      "GA + GB + GC = 0",
      "GA→ = GB→ = GC→"
    ],
    answer: 0,
    hints: [
      "Định nghĩa vectơ trọng tâm tam giác: Tổng 3 vectơ từ trọng tâm tới 3 đỉnh bằng vectơ-không."
    ],
    explanation: "Trọng tâm G của tam giác ABC có tính chất đặc trưng là GA→ + GB→ + GC→ = 0→.",
    skill: "vectors"
  },
  {
    id: "q_vec_9",
    lessonId: "vectors-intro",
    prompt: "Cho vectơ a→ = (2; −3) và b→ = (1; 4). Tọa độ của vectơ u→ = a→ + b→ là:",
    options: ["(3; 1)", "(1; −7)", "(3; −7)", "(2; −12)"],
    answer: 0,
    hints: [
      "Cộng hai vectơ theo tọa độ: cộng hoành với hoành, tung với tung.",
      "u = (2 + 1; -3 + 4) = (3; 1)."
    ],
    explanation: "Tọa độ vectơ u→ = (2 + 1; −3 + 4) = (3; 1).",
    skill: "vectors"
  },
  {
    id: "q_vec_10",
    lessonId: "vectors-intro",
    prompt: "Cho hai điểm A(1; 2) và B(4; 6). Tọa độ của vectơ AB→ là:",
    options: ["(3; 4)", "(5; 8)", "(−3; −4)", "(4; 12)"],
    answer: 0,
    hints: [
      "Tọa độ AB→ = (xB - xA; yB - yA).",
      "AB→ = (4 - 1; 6 - 2) = (3; 4)."
    ],
    explanation: "Tọa độ vectơ AB→ = (4 − 1; 6 − 2) = (3; 4).",
    skill: "vectors"
  },
  {
    id: "q_vec_11",
    lessonId: "vectors-intro",
    prompt: "Độ dài của vectơ v→ = (6; −8) là:",
    options: ["10", "14", "2", "√28"],
    answer: 0,
    hints: [
      "Độ dài vectơ: |v| = √(x² + y²).",
      "|v| = √(6² + (-8)²) = √(36 + 64) = √100 = 10."
    ],
    explanation: "Độ dài |v→| = √(6² + (−8)²) = √(36 + 64) = √100 = 10.",
    skill: "vectors"
  },
  {
    id: "q_vec_12",
    lessonId: "vectors-intro",
    prompt: "Hai vectơ a→ và b→ được gọi là cùng phương khi và chỉ khi:",
    options: [
      "Giá của chúng song song hoặc trùng nhau",
      "Chúng có cùng độ dài",
      "Chúng có cùng hướng",
      "Chúng vuông góc với nhau"
    ],
    answer: 0,
    hints: [
      "Định nghĩa cùng phương: Giá của hai vectơ song song hoặc trùng nhau."
    ],
    explanation: "Hai vectơ cùng phương là hai vectơ có giá song song hoặc trùng nhau.",
    skill: "vectors"
  },
  {
    id: "q_vec_13",
    lessonId: "vectors-intro",
    prompt: "Cho điểm A(−2; 3) và B(4; 1). Tọa độ trung điểm I của đoạn thẳng AB là:",
    options: ["(1; 2)", "(2; 4)", "(6; −2)", "(3; 2)"],
    answer: 0,
    hints: [
      "xI = (xA + xB) / 2 = (-2 + 4) / 2 = 1.",
      "yI = (yA + yB) / 2 = (3 + 1) / 2 = 2."
    ],
    explanation: "Tọa độ trung điểm I là ((−2 + 4)/2; (3 + 1)/2) = (1; 2).",
    skill: "vectors"
  },
  {
    id: "q_vec_14",
    lessonId: "vectors-intro",
    prompt: "Cho tam giác ABC có A(1; 2), B(3; 5), C(5; 2). Tọa độ trọng tâm G của tam giác là:",
    options: ["(3; 3)", "(9; 9)", "(4; 3)", "(3; 4)"],
    answer: 0,
    hints: [
      "xG = (1 + 3 + 5) / 3 = 9 / 3 = 3.",
      "yG = (2 + 5 + 2) / 3 = 9 / 3 = 3."
    ],
    explanation: "xG = (1 + 3 + 5)/3 = 3; yG = (2 + 5 + 2)/3 = 3. Tọa độ trọng tâm G là (3; 3).",
    skill: "vectors"
  },
  {
    id: "q_vec_15",
    lessonId: "vectors-intro",
    prompt: "Tìm số thực k để hai vectơ u→ = (2; −3) và v→ = (4; k) cùng phương:",
    options: ["k = −6", "k = 6", "k = −3", "k = 2"],
    answer: 0,
    hints: [
      "Điều kiện cùng phương: 4 / 2 = k / (-3) = 2.",
      "k = 2 · (-3) = -6."
    ],
    explanation: "Hai vectơ cùng phương khi tỉ số tọa độ bằng nhau: 4 / 2 = k / (−3) ⇔ 2 = k / (−3) ⇔ k = −6.",
    skill: "vectors"
  },
  {
    id: "q_vec_16",
    lessonId: "vectors-intro",
    prompt: "Cho 4 điểm A, B, C, D bất kỳ. Vectơ tổng AB→ + BC→ + CD→ bằng:",
    options: ["AD→", "AC→", "DA→", "0→"],
    answer: 0,
    hints: [
      "Quy tắc nối tiếp 3 điểm liên tiếp: AB + BC = AC, AC + CD = AD."
    ],
    explanation: "Áp dụng quy tắc cộng liên tiếp: AB→ + BC→ + CD→ = AC→ + CD→ = AD→.",
    skill: "vectors"
  },
  {
    id: "q_vec_17",
    type: "true-false",
    lessonId: "vectors-intro",
    prompt: "Xét tính đúng/sai của các quy tắc vectơ cơ bản sau:",
    subQuestions: [
      { id: "a", text: "Với 3 điểm bất kỳ A, B, C: AB→ + BC→ = AC→.", answer: true, explanation: "Quy tắc 3 điểm chuẩn." },
      { id: "b", text: "Với hình bình hành ABCD: AB→ + AD→ = AC→.", answer: true, explanation: "Quy tắc hình bình hành chuẩn." },
      { id: "c", text: "Vectơ đối của AB→ là BA→.", answer: true, explanation: "-AB = BA." },
      { id: "d", text: "Vectơ-không 0→ có độ dài bằng 1.", answer: false, explanation: "Độ dài vectơ-không bằng 0." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, b, d Đúng; c Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Độ dài của vectơ-không bằng 0."
    ],
    explanation: "Ý a, b, c đúng; Ý d sai vì |0→| = 0.",
    skill: "vectors"
  },
  {
    id: "q_vec_18",
    type: "true-false",
    lessonId: "vectors-intro",
    prompt: "Cho tam giác ABC có trọng tâm G và trung điểm M của cạnh BC. Xét tính đúng/sai:",
    subQuestions: [
      { id: "a", text: "GA→ + GB→ + GC→ = 0→.", answer: true, explanation: "Tính chất trọng tâm chuẩn." },
      { id: "b", text: "AG→ = (2/3) AM→.", answer: true, explanation: "Khoảng cách từ đỉnh đến trọng tâm bằng 2/3 đường trung tuyến." },
      { id: "c", text: "MB→ + MC→ = 0→.", answer: true, explanation: "M là trung điểm BC nên MB và MC là hai vectơ đối nhau." },
      { id: "d", text: "AB→ + AC→ = AM→.", answer: false, explanation: "Quy tắc trung điểm phải là AB + AC = 2 AM." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, b, d Đúng; c Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Công thức trung điểm: AB + AC = 2 AM (thiếu hệ số 2)."
    ],
    explanation: "Ý a, b, c đúng; Ý d sai vì đẳng thức đúng phải là AB→ + AC→ = 2AM→.",
    skill: "vectors"
  },
  {
    id: "q_vec_19",
    type: "true-false",
    lessonId: "vectors-intro",
    prompt: "Cho u→ = (1; −2) và v→ = (−2; 4). Xét tính đúng/sai của các nhận định:",
    subQuestions: [
      { id: "a", text: "v→ = −2 u→.", answer: true, explanation: "-2(1; -2) = (-2; 4)." },
      { id: "b", text: "Hai vectơ u→ và v→ cùng phương.", answer: true, explanation: "Vì v = -2u nên cùng phương." },
      { id: "c", text: "Hai vectơ u→ và v→ cùng hướng.", answer: false, explanation: "Hệ số k = -2 âm nên ngược hướng." },
      { id: "d", text: "Độ dài |u→| = √5.", answer: true, explanation: "√(1² + (-2)²) = √5." }
    ],
    options: [
      "a, b, d Đúng; c Sai",
      "a, b, c Đúng; d Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "k = -2 < 0 nên hai vectơ ngược hướng."
    ],
    explanation: "Ý a, b, d đúng; Ý c sai vì k = −2 < 0 nên hai vectơ ngược hướng nhau.",
    skill: "vectors"
  },
  {
    id: "q_vec_20",
    type: "short-answer",
    lessonId: "vectors-intro",
    prompt: "Cho hai điểm A(2; −1) và B(5; 3). Tính độ dài đoạn thẳng AB:",
    answer: 5,
    acceptedAnswers: ["5", "5.0"],
    options: ["5", "25", "√7", "7"],
    hints: [
      "AB→ = (5 - 2; 3 - (-1)) = (3; 4).",
      "AB = √(3² + 4²) = √25 = 5."
    ],
    explanation: "AB = √[(5 − 2)² + (3 − (−1))²] = √(3² + 4²) = √25 = 5.",
    skill: "vectors"
  },
  {
    id: "q_vec_21",
    type: "short-answer",
    lessonId: "vectors-intro",
    prompt: "Cho tam giác ABC có A(1; 3), B(2; 5), C(6; 1). Tính hoành độ của trọng tâm G:",
    answer: 3,
    acceptedAnswers: ["3", "3.0"],
    options: ["3", "4", "2", "5"],
    hints: [
      "xG = (xA + xB + xC) / 3 = (1 + 2 + 6) / 3 = 9 / 3 = 3."
    ],
    explanation: "Hoành độ trọng tâm G là xG = (1 + 2 + 6) / 3 = 9 / 3 = 3.",
    skill: "vectors"
  },
  {
    id: "q_vec_22",
    type: "short-answer",
    lessonId: "vectors-intro",
    prompt: "Cho vectơ a→ = (3; 4) và b→ = (1; 2). Vectơ c→ = 2a→ − 3b→ có tung độ bằng bao nhiêu?",
    answer: 2,
    acceptedAnswers: ["2", "2.0"],
    options: ["2", "4", "3", "1"],
    hints: [
      "Tung độ yc = 2ya - 3yb = 2(4) - 3(2) = 8 - 6 = 2."
    ],
    explanation: "Tung độ của vectơ c→ là yc = 2(4) − 3(2) = 8 − 6 = 2.",
    skill: "vectors"
  },

  // ==========================================
  // LESSON 10: SCALAR-PRODUCT (18 new questions: 12 MC + 3 TF + 3 SA)
  // ==========================================
  {
    id: "q_scal_5",
    lessonId: "scalar-product",
    prompt: "Cho hai vectơ u→ và v→ có |u→| = 3, |v→| = 4 và góc giữa chúng bằng 60°. Tích vô hướng u→ · v→ bằng:",
    options: ["6", "12", "6√3", "8"],
    answer: 0,
    hints: [
      "u · v = |u| · |v| · cos(u, v).",
      "u · v = 3 · 4 · cos 60° = 12 · (1/2) = 6."
    ],
    explanation: "Tích vô hướng u→ · v→ = |u→| · |v→| · cos 60° = 3 × 4 × (1/2) = 6.",
    skill: "scalar-product"
  },
  {
    id: "q_scal_6",
    lessonId: "scalar-product",
    prompt: "Cho hai vectơ u→ = (2; −1) và v→ = (3; 4). Tích vô hướng u→ · v→ bằng:",
    options: ["2", "10", "−2", "14"],
    answer: 0,
    hints: [
      "u · v = x1 x2 + y1 y2.",
      "u · v = 2(3) + (-1)(4) = 6 - 4 = 2."
    ],
    explanation: "Tích vô hướng theo tọa độ: u→ · v→ = 2(3) + (−1)(4) = 6 − 4 = 2.",
    skill: "scalar-product"
  },
  {
    id: "q_scal_7",
    lessonId: "scalar-product",
    prompt: "Tìm m để hai vectơ u→ = (m; 3) và v→ = (2; −4) vuông góc với nhau:",
    options: ["m = 6", "m = −6", "m = 12", "m = 3"],
    answer: 0,
    hints: [
      "Hai vectơ vuông góc ⇔ u · v = 0.",
      "2m + 3(-4) = 0 ⇔ 2m - 12 = 0 ⇔ 2m = 12 ⇔ m = 6."
    ],
    explanation: "u→ ⊥ v→ ⇔ u→ · v→ = 0 ⇔ 2m + 3(−4) = 0 ⇔ 2m − 12 = 0 ⇔ m = 6.",
    skill: "scalar-product"
  },
  {
    id: "q_scal_8",
    lessonId: "scalar-product",
    prompt: "Bình phương vô hướng của một vectơ a→ luôn bằng:",
    options: [
      "Bình phương độ dài của nó: |a→|²",
      "Hai lần độ dài của nó: 2|a→|",
      "Luôn bằng 0",
      "Vectơ cùng hướng với a→"
    ],
    answer: 0,
    hints: [
      "a² = |a| · |a| · cos 0° = |a|²."
    ],
    explanation: "Bình phương vô hướng của một vectơ luôn bằng bình phương độ dài của vectơ đó: a→² = |a→|².",
    skill: "scalar-product"
  },
  {
    id: "q_scal_9",
    lessonId: "scalar-product",
    prompt: "Cho tam giác đều ABC cạnh bằng 2. Tích vô hướng AB→ · AC→ bằng:",
    options: ["2", "4", "2√3", "1"],
    answer: 0,
    hints: [
      "Trong tam giác đều, góc giữa AB và AC là góc A = 60°.",
      "AB · AC = |AB| · |AC| · cos 60° = 2 · 2 · (1/2) = 2."
    ],
    explanation: "Góc (AB→, AC→) = 60°. Tích vô hướng AB→ · AC→ = 2 × 2 × cos 60° = 4 × (1/2) = 2.",
    skill: "scalar-product"
  },
  {
    id: "q_scal_10",
    lessonId: "scalar-product",
    prompt: "Cho hình vuông ABCD cạnh a. Tích vô hướng AB→ · AD→ bằng:",
    options: ["0", "a²", "a²√2", "−a²"],
    answer: 0,
    hints: [
      "AB vuông góc với AD.",
      "Hai vectơ vuông góc có tích vô hướng bằng 0."
    ],
    explanation: "Vì ABCD là hình vuông nên AB ⊥ AD, do đó cos(AB→, AD→) = cos 90° = 0 ⇒ AB→ · AD→ = 0.",
    skill: "scalar-product"
  },
  {
    id: "q_scal_11",
    lessonId: "scalar-product",
    prompt: "Cho hai vectơ u→ = (1; 1) và v→ = (0; 2). Cosin của góc giữa hai vectơ u→ và v→ là:",
    options: ["√2/2", "1/2", "√3/2", "1"],
    answer: 0,
    hints: [
      "u · v = 1(0) + 1(2) = 2.",
      "|u| = √(1 + 1) = √2, |v| = 2.",
      "cos(u, v) = 2 / (2√2) = 1/√2 = √2/2."
    ],
    explanation: "u→ · v→ = 2; |u→| = √2; |v→| = 2. Do đó cos(u→, v→) = 2 / (2√2) = √2/2.",
    skill: "scalar-product"
  },
  {
    id: "q_scal_12",
    lessonId: "scalar-product",
    prompt: "Cho hai vectơ ngược hướng u→ và v→ có độ dài lần lượt là 2 và 5. Tích vô hướng u→ · v→ bằng:",
    options: ["−10", "10", "0", "−7"],
    answer: 0,
    hints: [
      "Hai vectơ ngược hướng thì góc giữa chúng là 180°.",
      "cos 180° = -1.",
      "u · v = 2 · 5 · (-1) = -10."
    ],
    explanation: "Khi hai vectơ ngược hướng, góc giữa chúng bằng 180°. cos 180° = −1 nên u→ · v→ = 2 × 5 × (−1) = −10.",
    skill: "scalar-product"
  },
  {
    id: "q_scal_13",
    lessonId: "scalar-product",
    prompt: "Nếu tích vô hướng của hai vectơ khác không là một số âm (u→ · v→ < 0) thì góc giữa hai vectơ đó là:",
    options: ["Góc tù", "Góc nhọn", "Góc vuông", "Góc 0°"],
    answer: 0,
    hints: [
      "u · v = |u||v| cos α.",
      "Vì |u|, |v| > 0 nên u · v < 0 ⇔ cos α < 0, tức α là góc tù."
    ],
    explanation: "Vì |u→| > 0 và |v→| > 0 nên dấu của tích vô hướng cùng dấu với cos α. Tích âm chứng tỏ cos α < 0, tức góc giữa hai vectơ là góc tù.",
    skill: "scalar-product"
  },
  {
    id: "q_scal_14",
    lessonId: "scalar-product",
    prompt: "Cho tam giác ABC vuông tại A có AB = 3, AC = 4. Tích vô hướng BA→ · BC→ bằng:",
    options: ["9", "16", "25", "12"],
    answer: 0,
    hints: [
      "BC = 5. cos B = AB / BC = 3 / 5.",
      "BA · BC = |BA| · |BC| · cos B = 3 · 5 · (3/5) = 9."
    ],
    explanation: "Ta có |BA→| = 3, |BC→| = 5 và cos B = AB / BC = 3/5. Do đó BA→ · BC→ = 3 × 5 × (3/5) = 9.",
    skill: "scalar-product"
  },
  {
    id: "q_scal_15",
    lessonId: "scalar-product",
    prompt: "Cho u→ = (2; 1) và v→ = (−1; 2). Góc giữa hai vectơ u→ và v→ bằng:",
    options: ["90°", "60°", "45°", "180°"],
    answer: 0,
    hints: [
      "Tính u · v = 2(-1) + 1(2) = -2 + 2 = 0.",
      "Tích vô hướng bằng 0 nghĩa là hai vectơ vuông góc nhau (90°)."
    ],
    explanation: "u→ · v→ = 2(−1) + 1(2) = 0. Vì tích vô hướng bằng 0 nên hai vectơ vuông góc, góc giữa chúng là 90°.",
    skill: "scalar-product"
  },
  {
    id: "q_scal_16",
    lessonId: "scalar-product",
    prompt: "Với 3 vectơ tùy ý a→, b→, c→ và số thực k, khẳng định nào sau đây SAI?",
    options: [
      "a→ · b→ = b→ · a→",
      "k(a→ · b→) = (ka→) · b→",
      "a→ · (b→ + c→) = a→ · b→ + a→ · c→",
      "(a→ · b→) · c→ = a→ · (b→ · c→)"
    ],
    answer: 3,
    hints: [
      "Tích vô hướng a · b là một SỐ THỰC, không thể kết hợp như phép nhân vectơ."
    ],
    explanation: "Phương án D sai vì (a→ · b→) là một số thực, nhân với c→ cho ra một vectơ cùng phương với c→; trong khi vế phải cho ra vectơ cùng phương với a→. Không có tính chất kết hợp này.",
    skill: "scalar-product"
  },
  {
    id: "q_scal_17",
    type: "true-false",
    lessonId: "scalar-product",
    prompt: "Xét tính đúng/sai của các phát biểu về tích vô hướng:",
    subQuestions: [
      { id: "a", text: "Tích vô hướng của hai vectơ là một số thực.", answer: true, explanation: "Đúng theo định nghĩa tích vô hướng." },
      { id: "b", text: "u→ ⊥ v→ ⇔ u→ · v→ = 0.", answer: true, explanation: "Điều kiện vuông góc cơ bản." },
      { id: "c", text: "Nếu u→ và v→ cùng hướng thì u→ · v→ = |u→| · |v→|.", answer: true, explanation: "Góc bằng 0° nên cos 0° = 1." },
      { id: "d", text: "u→² luôn luôn là một số âm.", answer: false, explanation: "u² = |u|² ≥ 0 luôn không âm." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, b, d Đúng; c Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Bình phương vô hướng bằng bình phương độ dài nên luôn không âm."
    ],
    explanation: "Ý a, b, c đúng; Ý d sai vì u→² = |u→|² ≥ 0.",
    skill: "scalar-product"
  },
  {
    id: "q_scal_18",
    type: "true-false",
    lessonId: "scalar-product",
    prompt: "Cho tam giác ABC vuông tại A có AB = 6, AC = 8. Xét tính đúng/sai:",
    subQuestions: [
      { id: "a", text: "AB→ · AC→ = 0.", answer: true, explanation: "Tam giác vuông tại A nên AB ⊥ AC." },
      { id: "b", text: "Cạnh huyền BC = 10.", answer: true, explanation: "√(6² + 8²) = 10." },
      { id: "c", text: "BA→ · BC→ = 36.", answer: true, explanation: "BA · BC = |BA| · |BC| · cos B = 6 · 10 · (6/10) = 36." },
      { id: "d", text: "CA→ · CB→ = 48.", answer: false, explanation: "CA · CB = |CA| · |CB| · cos C = 8 · 10 · (8/10) = 64 chứ không phải 48." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, b, d Đúng; c Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Tính CA · CB = CA² = 64 (vì hình chiếu của CB lên CA là CA)."
    ],
    explanation: "Ý a, b, c đúng; Ý d sai vì CA→ · CB→ = AC² = 8² = 64.",
    skill: "scalar-product"
  },
  {
    id: "q_scal_19",
    type: "true-false",
    lessonId: "scalar-product",
    prompt: "Cho hai vectơ a→ = (1; 2) và b→ = (−2; 1). Xét tính đúng/sai:",
    subQuestions: [
      { id: "a", text: "a→ · b→ = 0.", answer: true, explanation: "1(-2) + 2(1) = 0." },
      { id: "b", text: "Hai vectơ a→ và b→ vuông góc với nhau.", answer: true, explanation: "Tích vô hướng bằng 0 nên vuông góc." },
      { id: "c", text: "|a→| = |b→| = √5.", answer: true, explanation: "√(1² + 2²) = √5." },
      { id: "d", text: "Góc giữa hai vectơ a→ và b→ bằng 180°.", answer: false, explanation: "Hai vectơ vuông góc nên góc bằng 90°." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, c Đúng; b, d Sai",
      "b, d Đúng; a, c Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Hai vectơ vuông góc có góc bằng 90°."
    ],
    explanation: "Ý a, b, c đúng; Ý d sai vì hai vectơ vuông góc nhau nên góc bằng 90°.",
    skill: "scalar-product"
  },
  {
    id: "q_scal_20",
    type: "short-answer",
    lessonId: "scalar-product",
    prompt: "Cho hai vectơ u→ = (3; 4) và v→ = (4; −3). Tính tích vô hướng u→ · v→:",
    answer: 0,
    acceptedAnswers: ["0", "0.0"],
    options: ["0", "25", "7", "-7"],
    hints: [
      "u · v = 3(4) + 4(-3) = 12 - 12 = 0."
    ],
    explanation: "Tích vô hướng u→ · v→ = 3(4) + 4(−3) = 12 − 12 = 0.",
    skill: "scalar-product"
  },
  {
    id: "q_scal_21",
    type: "short-answer",
    lessonId: "scalar-product",
    prompt: "Cho hai vectơ a→ và b→ có |a→| = 4, |b→| = 5 và góc (a→, b→) = 60°. Tính tích vô hướng a→ · b→:",
    answer: 10,
    acceptedAnswers: ["10", "10.0"],
    options: ["10", "20", "10√3", "15"],
    hints: [
      "a · b = |a| · |b| · cos 60° = 4 · 5 · (1/2) = 10."
    ],
    explanation: "Tích vô hướng a→ · b→ = 4 × 5 × cos 60° = 20 × (1/2) = 10.",
    skill: "scalar-product"
  },
  {
    id: "q_scal_22",
    type: "short-answer",
    lessonId: "scalar-product",
    prompt: "Cho tam giác đều ABC cạnh bằng 6. Tính giá trị tích vô hướng AB→ · AC→:",
    answer: 18,
    acceptedAnswers: ["18", "18.0"],
    options: ["18", "36", "18√3", "9"],
    hints: [
      "Góc A = 60°.",
      "AB · AC = 6 · 6 · cos 60° = 36 · (1/2) = 18."
    ],
    explanation: "Tam giác đều cạnh 6 có góc A = 60°. Tích vô hướng AB→ · AC→ = 6 × 6 × cos 60° = 36 × (1/2) = 18.",
    skill: "scalar-product"
  }
];

