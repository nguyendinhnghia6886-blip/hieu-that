// Question bank expansion for Part 3: Lessons 11 to 15
// (statistics, quadratic-functions, analytic-geometry, combinatorics, probability)

export const part3Questions = [
  // ==========================================
  // LESSON 11: STATISTICS (18 new questions: 12 MC + 3 TF + 3 SA)
  // ==========================================
  {
    id: "q_stat_5",
    lessonId: "statistics",
    prompt: "Cho mẫu số liệu: 4, 6, 7, 8, 10. Số trung bình cộng của mẫu số liệu là:",
    options: ["7", "6.5", "7.5", "8"],
    answer: 0,
    hints: [
      "Tính tổng: 4 + 6 + 7 + 8 + 10 = 35.",
      "Chia cho số phần tử n = 5: 35 / 5 = 7."
    ],
    explanation: "Số trung bình x̄ = (4 + 6 + 7 + 8 + 10) / 5 = 35 / 5 = 7.",
    skill: "statistics"
  },
  {
    id: "q_stat_6",
    lessonId: "statistics",
    prompt: "Cho mẫu số liệu đã sắp xếp: 2, 4, 5, 7, 9, 11. Trung vị Me của mẫu số liệu là:",
    options: ["6", "5", "7", "5.5"],
    answer: 0,
    hints: [
      "Số phần tử n = 6 là số chẵn.",
      "Hai số ở chính giữa là số thứ 3 (là 5) và số thứ 4 (là 7).",
      "Trung vị Me = (5 + 7) / 2 = 6."
    ],
    explanation: "Vì n = 6 chẵn nên trung vị là trung bình cộng của hai số chính giữa: Me = (5 + 7) / 2 = 6.",
    skill: "statistics"
  },
  {
    id: "q_stat_7",
    lessonId: "statistics",
    prompt: "Cho mẫu số liệu: 3, 5, 5, 6, 7, 8, 8, 8, 9. Mốt (Mo) của mẫu số liệu là:",
    options: ["8", "5", "7", "6"],
    answer: 0,
    hints: [
      "Mốt là giá trị có tần số xuất hiện nhiều nhất.",
      "Số 8 xuất hiện 3 lần (nhiều hơn tất cả các số khác)."
    ],
    explanation: "Giá trị 8 xuất hiện 3 lần (nhiều nhất trong mẫu số liệu), do đó mốt Mo = 8.",
    skill: "statistics"
  },
  {
    id: "q_stat_8",
    lessonId: "statistics",
    prompt: "Cho mẫu số liệu: 12, 15, 18, 22, 30. Khoảng biến thiên R của mẫu số liệu là:",
    options: ["18", "12", "30", "15"],
    answer: 0,
    hints: [
      "Khoảng biến thiên R = x_max - x_min.",
      "R = 30 - 12 = 18."
    ],
    explanation: "Khoảng biến thiên R = x_max − x_min = 30 − 12 = 18.",
    skill: "statistics"
  },
  {
    id: "q_stat_9",
    lessonId: "statistics",
    prompt: "Tứ phân vị thứ hai Q2 của mẫu số liệu chính là đại lượng nào sau đây?",
    options: [
      "Trung vị Me",
      "Số trung bình x̄",
      "Mốt Mo",
      "Khoảng biến thiên R"
    ],
    answer: 0,
    hints: [
      "Định nghĩa tứ phân vị: Q2 chia dữ liệu thành hai nửa bằng nhau, chính là trung vị Me."
    ],
    explanation: "Theo định nghĩa các tứ phân vị, Q2 chính là trung vị Me của mẫu số liệu.",
    skill: "statistics"
  },
  {
    id: "q_stat_10",
    lessonId: "statistics",
    prompt: "Cho mẫu số liệu có các tứ phân vị Q1 = 15 và Q3 = 28. Khoảng tứ phân vị Δ_Q bằng:",
    options: ["13", "43", "21.5", "14"],
    answer: 0,
    hints: [
      "Khoảng tứ phân vị Δ_Q = Q3 - Q1.",
      "Δ_Q = 28 - 15 = 13."
    ],
    explanation: "Khoảng tứ phân vị Δ_Q = Q3 − Q1 = 28 − 15 = 13.",
    skill: "statistics"
  },
  {
    id: "q_stat_11",
    lessonId: "statistics",
    prompt: "Đại lượng nào sau đây đo độ phân tán của mẫu số liệu?",
    options: [
      "Phương sai và độ lệch chuẩn",
      "Số trung bình",
      "Trung vị",
      "Mốt"
    ],
    answer: 0,
    hints: [
      "Số trung bình, trung vị, mốt đo xu thế trung tâm.",
      "Khoảng biến thiên, khoảng tứ phân vị, phương sai, độ lệch chuẩn đo mức độ phân tán."
    ],
    explanation: "Phương sai và độ lệch chuẩn là các đặc trưng đo độ phân tán của dữ liệu xung quanh số trung bình.",
    skill: "statistics"
  },
  {
    id: "q_stat_12",
    lessonId: "statistics",
    prompt: "Độ lệch chuẩn s liên hệ với phương sai s² theo công thức nào?",
    options: ["s = √(s²)", "s = (s²)²", "s = 2 · s²", "s = s² / n"],
    answer: 0,
    hints: [
      "Độ lệch chuẩn là căn bậc hai số học của phương sai."
    ],
    explanation: "Độ lệch chuẩn s là căn bậc hai số học của phương sai: s = √(s²).",
    skill: "statistics"
  },
  {
    id: "q_stat_13",
    lessonId: "statistics",
    prompt: "Một giá trị x trong mẫu số liệu được coi là giá trị bất thường (outlier) nếu:",
    options: [
      "x < Q1 − 1.5Δ_Q hoặc x > Q3 + 1.5Δ_Q",
      "x < Q1 − Δ_Q hoặc x > Q3 + Δ_Q",
      "x > 2 · x̄",
      "x < 0"
    ],
    answer: 0,
    hints: [
      "Tiêu chuẩn Tukey 1.5 IQR (khoảng tứ phân vị) trong chương trình SGK mới."
    ],
    explanation: "Quy tắc phát hiện giá trị bất thường trong SGK: x < Q1 − 1.5Δ_Q hoặc x > Q3 + 1.5Δ_Q.",
    skill: "statistics"
  },
  {
    id: "q_stat_14",
    lessonId: "statistics",
    prompt: "Khi tất cả các số liệu trong mẫu được nhân với 2 thì số trung bình mới sẽ:",
    options: [
      "Gấp 2 lần số trung bình cũ",
      "Không thay đổi",
      "Gấp 4 lần số trung bình cũ",
      "Tăng thêm 2 đơn vị"
    ],
    answer: 0,
    hints: [
      "x̄_mới = ∑(2xi) / n = 2 · (∑xi / n) = 2 · x̄_cũ."
    ],
    explanation: "Khi nhân mọi phần tử với một hằng số c = 2 thì số trung bình cộng cũng gấp lên 2 lần.",
    skill: "statistics"
  },
  {
    id: "q_stat_15",
    lessonId: "statistics",
    prompt: "Cho dãy điểm thi của 7 học sinh: 6, 7, 7, 8, 8, 9, 10. Trung vị của dãy điểm là:",
    options: ["8", "7.5", "7", "8.5"],
    answer: 0,
    hints: [
      "Dãy có n = 7 (số lẻ) đã sắp xếp tăng dần.",
      "Số ở chính giữa là số thứ 4: 8."
    ],
    explanation: "Dãy đã sắp xếp có 7 phần tử, số đứng ở vị trí thứ 4 là số 8. Vậy trung vị Me = 8.",
    skill: "statistics"
  },
  {
    id: "q_stat_16",
    lessonId: "statistics",
    prompt: "Khi so sánh độ đồng đều giữa hai nhóm học sinh có cùng điểm trung bình, nhóm nào có điểm số đồng đều hơn?",
    options: [
      "Nhóm có độ lệch chuẩn nhỏ hơn",
      "Nhóm có độ lệch chuẩn lớn hơn",
      "Nhóm có khoảng biến thiên lớn hơn",
      "Nhóm có số học sinh nhiều hơn"
    ],
    answer: 0,
    hints: [
      "Độ lệch chuẩn càng nhỏ thì dữ liệu càng ít phân tán, tức là càng đồng đều."
    ],
    explanation: "Độ lệch chuẩn đo mức độ phân tán quanh giá trị trung bình; độ lệch chuẩn càng nhỏ chứng tỏ dữ liệu càng tập trung và đồng đều hơn.",
    skill: "statistics"
  },
  {
    id: "q_stat_17",
    type: "true-false",
    lessonId: "statistics",
    prompt: "Cho mẫu số liệu đã sắp xếp: 1, 3, 5, 7, 9, 11, 13. Xét tính đúng/sai:",
    subQuestions: [
      { id: "a", text: "Số trung bình x̄ = 7.", answer: true, explanation: "Tổng = 49, 49/7 = 7." },
      { id: "b", text: "Trung vị Me = Q2 = 7.", answer: true, explanation: "Phần tử chính giữa là 7." },
      { id: "c", text: "Khoảng biến thiên R = 12.", answer: true, explanation: "13 - 1 = 12." },
      { id: "d", text: "Tứ phân vị thứ nhất Q1 = 5.", answer: false, explanation: "Nửa dưới là {1, 3, 5}, trung vị nửa dưới là 3 nên Q1 = 3 chứ không phải 5." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, b, d Đúng; c Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Tìm Q1 bằng cách lấy trung vị của nửa số liệu phía dưới: {1, 3, 5} có trung vị là 3."
    ],
    explanation: "Ý a, b, c đúng; Ý d sai vì Q1 là trung vị của nửa dưới {1, 3, 5} nên Q1 = 3.",
    skill: "statistics"
  },
  {
    id: "q_stat_18",
    type: "true-false",
    lessonId: "statistics",
    prompt: "Về các số đặc trưng đo xu thế trung tâm và độ phân tán. Xét tính đúng/sai:",
    subQuestions: [
      { id: "a", text: "Số trung bình x̄ bị ảnh hưởng mạnh bởi các giá trị bất thường.", answer: true, explanation: "Đúng vì công thức tính cộng tất cả các giá trị." },
      { id: "b", text: "Trung vị Me không bị ảnh hưởng bởi giá trị bất thường.", answer: true, explanation: "Trung vị chỉ phụ thuộc vào thứ tự vị trí chính giữa." },
      { id: "c", text: "Độ lệch chuẩn có cùng đơn vị đo với mẫu số liệu gốc.", answer: true, explanation: "Căn bậc hai của phương sai đưa về cùng đơn vị đo gốc." },
      { id: "d", text: "Phương sai có thể nhận giá trị âm.", answer: false, explanation: "Phương sai là trung bình các bình phương độ lệch nên luôn không âm (s² ≥ 0)." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, c Đúng; b, d Sai",
      "b, d Đúng; a, c Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Phương sai là tổng các đại lượng bình phương nên không bao giờ âm."
    ],
    explanation: "Ý a, b, c đúng; Ý d sai vì phương sai s² luôn ≥ 0.",
    skill: "statistics"
  },
  {
    id: "q_stat_19",
    type: "true-false",
    lessonId: "statistics",
    prompt: "Cho bảng phân bố tần số điểm thi: Điểm 7 (3 em), Điểm 8 (5 em), Điểm 9 (2 em). Xét tính đúng/sai:",
    subQuestions: [
      { id: "a", text: "Tổng số học sinh n = 10.", answer: true, explanation: "3 + 5 + 2 = 10 em." },
      { id: "b", text: "Mốt Mo = 8.", answer: true, explanation: "Điểm 8 có tần số lớn nhất là 5." },
      { id: "c", text: "Điểm trung bình x̄ = 7.9.", answer: true, explanation: "(7·3 + 8·5 + 9·2)/10 = (21 + 40 + 18)/10 = 79/10 = 7.9." },
      { id: "d", text: "Khoảng biến thiên R = 5.", answer: false, explanation: "R = 9 - 7 = 2 chứ không phải 5." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, b, d Đúng; c Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Khoảng biến thiên = Điểm cao nhất - Điểm thấp nhất = 9 - 7 = 2."
    ],
    explanation: "Ý a, b, c đúng; Ý d sai vì khoảng biến thiên là R = 9 − 7 = 2.",
    skill: "statistics"
  },
  {
    id: "q_stat_20",
    type: "short-answer",
    lessonId: "statistics",
    prompt: "Cho mẫu số liệu gồm 5 số: 2, 4, 6, 8, 10. Tính phương sai s² của mẫu số liệu này:",
    answer: 8,
    acceptedAnswers: ["8", "8.0"],
    options: ["8", "6", "10", "4"],
    hints: [
      "x̄ = (2 + 4 + 6 + 8 + 10) / 5 = 6.",
      "Độ lệch: -4, -2, 0, 2, 4. Bình phương: 16, 4, 0, 4, 16.",
      "Tổng bình phương = 40. Phương sai s² = 40 / 5 = 8."
    ],
    explanation: "Số trung bình x̄ = 6. Các bình phương độ lệch là 16, 4, 0, 4, 16. Tổng là 40, do đó phương sai s² = 40 / 5 = 8.",
    skill: "statistics"
  },
  {
    id: "q_stat_21",
    type: "short-answer",
    lessonId: "statistics",
    prompt: "Cho mẫu số liệu đã sắp xếp: 3, 5, 7, 9, 11, 13, 15, 17. Tính khoảng tứ phân vị Δ_Q của mẫu số liệu:",
    answer: 8,
    acceptedAnswers: ["8", "8.0"],
    options: ["8", "6", "10", "4"],
    hints: [
      "n = 8. Nửa dưới: 3, 5, 7, 9 ⇒ Q1 = (5 + 7)/2 = 6.",
      "Nửa trên: 11, 13, 15, 17 ⇒ Q3 = (13 + 15)/2 = 14.",
      "Δ_Q = Q3 - Q1 = 14 - 6 = 8."
    ],
    explanation: "Q1 = (5 + 7)/2 = 6; Q3 = (13 + 15)/2 = 14. Khoảng tứ phân vị Δ_Q = 14 − 6 = 8.",
    skill: "statistics"
  },
  {
    id: "q_stat_22",
    type: "short-answer",
    lessonId: "statistics",
    prompt: "Một lớp có 10 học sinh tham gia kiểm tra, điểm số lần lượt là: 5, 6, 6, 7, 7, 8, 8, 8, 9, 10. Tính số trung bình cộng (viết dưới dạng số thập phân):",
    answer: 7.4,
    acceptedAnswers: ["7.4", "7,4"],
    options: ["7.4", "7.5", "7.2", "7.6"],
    hints: [
      "Tổng = 5 + 6(2) + 7(2) + 8(3) + 9 + 10 = 5 + 12 + 14 + 24 + 19 = 74.",
      "x̄ = 74 / 10 = 7.4."
    ],
    explanation: "Tổng điểm của 10 học sinh là 74. Số trung bình cộng là x̄ = 74 / 10 = 7.4.",
    skill: "statistics"
  },

  // ==========================================
  // LESSON 12: QUADRATIC-FUNCTIONS (18 new questions: 12 MC + 3 TF + 3 SA)
  // ==========================================
  {
    id: "q_quad_5",
    lessonId: "quadratic-functions",
    prompt: "Tọa độ đỉnh I của parabol y = x² − 4x + 3 là:",
    options: ["I(2; −1)", "I(−2; 15)", "I(2; 1)", "I(−2; −1)"],
    answer: 0,
    hints: [
      "Hoành độ đỉnh: x_I = -b / (2a) = -(-4) / 2 = 2.",
      "Tung độ đỉnh: y_I = 2² - 4(2) + 3 = 4 - 8 + 3 = -1."
    ],
    explanation: "Tọa độ đỉnh I: x_I = −b / (2a) = 4 / 2 = 2; y_I = 2² − 4(2) + 3 = −1. Tọa độ đỉnh là I(2; −1).",
    skill: "quadratic-functions"
  },
  {
    id: "q_quad_6",
    lessonId: "quadratic-functions",
    prompt: "Trục đối xứng của parabol y = −2x² + 4x + 1 là đường thẳng:",
    options: ["x = 1", "x = −1", "x = 2", "y = 1"],
    answer: 0,
    hints: [
      "Trục đối xứng có phương trình: x = -b / (2a).",
      "x = -4 / (2 · (-2)) = -4 / (-4) = 1."
    ],
    explanation: "Trục đối xứng là đường thẳng x = −b / (2a) = −4 / (2 × (−2)) = 1.",
    skill: "quadratic-functions"
  },
  {
    id: "q_quad_7",
    lessonId: "quadratic-functions",
    prompt: "Hàm số y = x² − 6x + 8 đồng biến trên khoảng nào sau đây?",
    options: ["(3; +∞)", "(−∞; 3)", "(−∞; +∞)", "(0; 6)"],
    answer: 0,
    hints: [
      "Hệ số a = 1 > 0 nên parabol quay bề lõm lên trên.",
      "Đỉnh có hoành độ x_I = -(-6)/2 = 3.",
      "Hàm số nghịch biến trên (-∞; 3) và đồng biến trên (3; +∞)."
    ],
    explanation: "Vì a = 1 > 0 và đỉnh x_I = 3 nên hàm số đồng biến trên khoảng (3; +∞).",
    skill: "quadratic-functions"
  },
  {
    id: "q_quad_8",
    lessonId: "quadratic-functions",
    prompt: "Tập nghiệm của bất phương trình x² − 5x + 6 ≤ 0 là:",
    options: ["[2; 3]", "(−∞; 2] ∪ [3; +∞)", "(2; 3)", "ℝ"],
    answer: 0,
    hints: [
      "Tam thức x² - 5x + 6 có 2 nghiệm x1 = 2, x2 = 3.",
      "Quy tắc xét dấu 'trong trái, ngoài cùng': vì a = 1 > 0 nên biểu thức mang dấu âm ở bên trong hai nghiệm [2; 3]."
    ],
    explanation: "Tam thức có hai nghiệm x = 2 và x = 3. Vì a = 1 > 0 nên f(x) ≤ 0 trên đoạn [2; 3].",
    skill: "quadratic-functions"
  },
  {
    id: "q_quad_9",
    lessonId: "quadratic-functions",
    prompt: "Tam thức bậc hai f(x) = x² + 2x + 5 luôn mang dấu gì với mọi x ∈ ℝ?",
    options: [
      "Luôn dương với mọi x ∈ ℝ",
      "Luôn âm với mọi x ∈ ℝ",
      "Đổi dấu tại x = −1",
      "Bằng 0 tại x = −1"
    ],
    answer: 0,
    hints: [
      "Tính biệt thức Δ = b² - 4ac = 4 - 20 = -16 < 0.",
      "Vì Δ < 0 nên f(x) luôn cùng dấu với hệ số a = 1 > 0."
    ],
    explanation: "Biệt thức Δ = 4 − 20 = −16 < 0. Do đó f(x) luôn cùng dấu với hệ số a = 1 > 0, tức f(x) > 0 với mọi x ∈ ℝ.",
    skill: "quadratic-functions"
  },
  {
    id: "q_quad_10",
    lessonId: "quadratic-functions",
    prompt: "Tìm m để tam thức f(x) = x² − 2mx + 4 > 0 với mọi x ∈ ℝ:",
    options: ["−2 < m < 2", "m < −2 hoặc m > 2", "m > 2", "m < 2"],
    answer: 0,
    hints: [
      "a = 1 > 0 thỏa mãn.",
      "Để f(x) > 0 với mọi x thì Δ' < 0.",
      "Δ' = m² - 4 < 0 ⇔ -2 < m < 2."
    ],
    explanation: "Để f(x) > 0 với mọi x thì a = 1 > 0 (luôn đúng) và Δ' = m² − 4 < 0 ⇔ −2 < m < 2.",
    skill: "quadratic-functions"
  },
  {
    id: "q_quad_11",
    lessonId: "quadratic-functions",
    prompt: "Tập nghiệm của bất phương trình −x² + 4x − 3 > 0 là:",
    options: ["(1; 3)", "[1; 3]", "(−∞; 1) ∪ (3; +∞)", "∅"],
    answer: 0,
    hints: [
      "Đổi dấu nhân với -1: x² - 4x + 3 < 0.",
      "Hai nghiệm x = 1 và x = 3. Nghiệm là khoảng (1; 3)."
    ],
    explanation: "Nhân cả hai vế với −1: x² − 4x + 3 < 0 ⇔ 1 < x < 3. Tập nghiệm là khoảng (1; 3).",
    skill: "quadratic-functions"
  },
  {
    id: "q_quad_12",
    lessonId: "quadratic-functions",
    prompt: "Đồ thị hàm số y = ax² + bx + c đi qua điểm A(0; 3). Giá trị của hệ số c là:",
    options: ["c = 3", "c = 0", "c = −3", "c = 1"],
    answer: 0,
    hints: [
      "Thay x = 0, y = 3 vào phương trình: y = a(0)² + b(0) + c = c = 3."
    ],
    explanation: "Điểm A(0; 3) thuộc đồ thị nên c = 3 (chính là giao điểm của parabol với trục tung Oy).",
    skill: "quadratic-functions"
  },
  {
    id: "q_quad_13",
    lessonId: "quadratic-functions",
    prompt: "Giá trị nhỏ nhất của hàm số y = x² − 2x + 5 đạt được tại:",
    options: ["x = 1 (với Min = 4)", "x = 2 (với Min = 5)", "x = −1 (với Min = 8)", "x = 0 (với Min = 5)"],
    answer: 0,
    hints: [
      "y = (x - 1)² + 4 ≥ 4.",
      "Đạt GTNN bằng 4 khi x = 1."
    ],
    explanation: "y = (x − 1)² + 4. Vì (x − 1)² ≥ 0 nên GTNN của hàm số bằng 4, đạt được khi x = 1.",
    skill: "quadratic-functions"
  },
  {
    id: "q_quad_14",
    lessonId: "quadratic-functions",
    prompt: "Tập nghiệm của phương trình √(2x − 3) = x − 3 là:",
    options: ["{6}", "{2; 6}", "{2}", "∅"],
    answer: 0,
    hints: [
      "Điều kiện: x - 3 ≥ 0 ⇔ x ≥ 3.",
      "Bình phương: 2x - 3 = x² - 6x + 9 ⇔ x² - 8x + 12 = 0.",
      "Nghiệm x = 2 hoặc x = 6. Vì x ≥ 3 nên chỉ nhận x = 6."
    ],
    explanation: "Điều kiện x ≥ 3. Bình phương hai vế: 2x − 3 = (x − 3)² ⇔ x² − 8x + 12 = 0 ⇔ x = 2 hoặc x = 6. Đối chiếu điều kiện x ≥ 3, chỉ nhận nghiệm x = 6.",
    skill: "quadratic-functions"
  },
  {
    id: "q_quad_15",
    lessonId: "quadratic-functions",
    prompt: "Một quả bóng được đá lên từ mặt đất theo quỹ đạo h(t) = −5t² + 20t (mét). Chiều cao tối đa mà quả bóng đạt được là:",
    options: ["20 mét", "15 mét", "25 mét", "10 mét"],
    answer: 0,
    hints: [
      "Thời điểm đạt độ cao cực đại: t = -b / (2a) = -20 / (2 · (-5)) = 2 giây.",
      "h(2) = -5(4) + 20(2) = -20 + 40 = 20 mét."
    ],
    explanation: "Đỉnh của parabol: t = −20 / (2 × (−5)) = 2 giây. Độ cao cực đại là h(2) = −5(2)² + 20(2) = 20 mét.",
    skill: "quadratic-functions"
  },
  {
    id: "q_quad_16",
    lessonId: "quadratic-functions",
    prompt: "Số giao điểm của parabol y = x² − 3x + 2 với trục hoành Ox là:",
    options: ["2 điểm", "1 điểm", "0 điểm", "3 điểm"],
    answer: 0,
    hints: [
      "Giải PT hoành độ giao điểm: x² - 3x + 2 = 0.",
      "Có 2 nghiệm phân biệt x = 1 và x = 2."
    ],
    explanation: "Phương trình x² − 3x + 2 = 0 có hai nghiệm phân biệt x = 1 và x = 2, do đó đồ thị cắt trục hoành tại đúng 2 điểm.",
    skill: "quadratic-functions"
  },
  {
    id: "q_quad_17",
    type: "true-false",
    lessonId: "quadratic-functions",
    prompt: "Cho hàm số bậc hai y = f(x) = x² − 2x − 3. Xét tính đúng/sai:",
    subQuestions: [
      { id: "a", text: "Tọa độ đỉnh I của parabol là I(1; −4).", answer: true, explanation: "xI = 1, yI = 1 - 2 - 3 = -4." },
      { id: "b", text: "Trục đối xứng của parabol là đường thẳng x = 1.", answer: true, explanation: "Đường thẳng x = xI = 1." },
      { id: "c", text: "Đồ thị cắt trục hoành tại hai điểm có hoành độ x = −1 và x = 3.", answer: true, explanation: "x² - 2x - 3 = 0 có hai nghiệm x = -1 và x = 3." },
      { id: "d", text: "Hàm số đồng biến trên khoảng (−∞; 1).", answer: false, explanation: "a = 1 > 0 nên hàm số nghịch biến trên (-∞; 1) và đồng biến trên (1; +∞)." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, b, d Đúng; c Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Với a > 0, hàm số nghịch biến ở nhánh bên trái đỉnh và đồng biến ở nhánh bên phải đỉnh."
    ],
    explanation: "Ý a, b, c đúng; Ý d sai vì hàm số nghịch biến trên khoảng (−∞; 1).",
    skill: "quadratic-functions"
  },
  {
    id: "q_quad_18",
    type: "true-false",
    lessonId: "quadratic-functions",
    prompt: "Cho tam thức f(x) = ax² + bx + c (a ≠ 0). Xét tính đúng/sai của các định lý dấu:",
    subQuestions: [
      { id: "a", text: "Nếu Δ < 0 thì f(x) luôn cùng dấu với hệ số a với mọi x ∈ ℝ.", answer: true, explanation: "Định lý chuẩn dấu tam thức bậc hai." },
      { id: "b", text: "Nếu Δ = 0 thì f(x) cùng dấu với a với mọi x ≠ −b/(2a).", answer: true, explanation: "Tại nghiệm kép thì f(x) = 0, còn lại cùng dấu với a." },
      { id: "c", text: "Nếu Δ > 0 thì f(x) cùng dấu với a ở khoảng giữa hai nghiệm.", answer: false, explanation: "Quy tắc là 'trong trái, ngoài cùng': giữa hai nghiệm f(x) TRÁI DẤU với a." },
      { id: "d", text: "Tập nghiệm của x² + 1 > 0 là toàn bộ tập số thực ℝ.", answer: true, explanation: "x² + 1 ≥ 1 > 0 với mọi x." }
    ],
    options: [
      "a, b, d Đúng; c Sai",
      "a, b, c Đúng; d Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Quy tắc khẩu quyết: 'Trong trái, ngoài cùng'."
    ],
    explanation: "Ý a, b, d đúng; Ý c sai vì trong khoảng hai nghiệm thì f(x) luôn TRÁI DẤU với hệ số a.",
    skill: "quadratic-functions"
  },
  {
    id: "q_quad_19",
    type: "true-false",
    lessonId: "quadratic-functions",
    prompt: "Xét phương trình chứa căn √(x + 1) = x − 1. Xét tính đúng/sai:",
    subQuestions: [
      { id: "a", text: "Điều kiện xác định của phương trình là x ≥ −1.", answer: true, explanation: "Biểu thức dưới căn x + 1 ≥ 0 ⇔ x ≥ -1." },
      { id: "b", text: "Bình phương hai vế khi x ≥ 1 ta được x + 1 = x² − 2x + 1.", answer: true, explanation: "Chuẩn phép bình phương có điều kiện vế phải." },
      { id: "c", text: "Phương trình x² − 3x = 0 có hai nghiệm x = 0 và x = 3.", answer: true, explanation: "x(x - 3) = 0 ⇔ x = 0 hoặc x = 3." },
      { id: "d", text: "Cả hai giá trị x = 0 và x = 3 đều là nghiệm của phương trình ban đầu.", answer: false, explanation: "Thay x = 0 vào VT = 1 ≠ VP = -1, nên x = 0 bị loại (chỉ có x = 3 là nghiệm)." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, b, d Đúng; c Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Kiểm tra lại nghiệm ngoại lai x = 0."
    ],
    explanation: "Ý a, b, c đúng; Ý d sai vì x = 0 là nghiệm ngoại lai (không thỏa mãn điều kiện x ≥ 1).",
    skill: "quadratic-functions"
  },
  {
    id: "q_quad_20",
    type: "short-answer",
    lessonId: "quadratic-functions",
    prompt: "Tìm hoành độ đỉnh x_I của parabol y = 2x² − 8x + 5:",
    answer: 2,
    acceptedAnswers: ["2", "2.0"],
    options: ["2", "4", "-2", "1"],
    hints: [
      "x_I = -b / (2a) = -(-8) / (2 · 2) = 8 / 4 = 2."
    ],
    explanation: "Hoành độ đỉnh parabol là x_I = −b / (2a) = 8 / (2 × 2) = 2.",
    skill: "quadratic-functions"
  },
  {
    id: "q_quad_21",
    type: "short-answer",
    lessonId: "quadratic-functions",
    prompt: "Tìm giá trị nhỏ nhất của hàm số y = x² − 6x + 10:",
    answer: 1,
    acceptedAnswers: ["1", "1.0"],
    options: ["1", "0", "10", "3"],
    hints: [
      "y = (x - 3)² + 1 ≥ 1.",
      "GTNN là 1 khi x = 3."
    ],
    explanation: "y = (x − 3)² + 1. Vì (x − 3)² ≥ 0 nên giá trị nhỏ nhất của hàm số là 1.",
    skill: "quadratic-functions"
  },
  {
    id: "q_quad_22",
    type: "short-answer",
    lessonId: "quadratic-functions",
    prompt: "Hỏi có bao nhiêu số nguyên x thỏa mãn bất phương trình x² − 4x − 5 ≤ 0?",
    answer: 7,
    acceptedAnswers: ["7", "7.0"],
    options: ["7", "6", "5", "8"],
    hints: [
      "Nghiệm của x² - 4x - 5 = 0 là x = -1 và x = 5.",
      "Tập nghiệm là [-1; 5].",
      "Các số nguyên: -1, 0, 1, 2, 3, 4, 5 (có 7 số)."
    ],
    explanation: "Bất phương trình có tập nghiệm là [−1; 5]. Các số nguyên trong đoạn này là −1, 0, 1, 2, 3, 4, 5 gồm tất cả 7 số.",
    skill: "quadratic-functions"
  },

  // ==========================================
  // LESSON 13: ANALYTIC-GEOMETRY (18 new questions: 12 MC + 3 TF + 3 SA)
  // ==========================================
  {
    id: "q_geom_5",
    lessonId: "analytic-geometry",
    prompt: "Đường thẳng d có vectơ chỉ phương u→ = (2; −5). Một vectơ pháp tuyến n→ của đường thẳng d là:",
    options: ["(5; 2)", "(2; 5)", "(−2; 5)", "(5; −2)"],
    answer: 0,
    hints: [
      "Nếu u = (a; b) thì n = (-b; a) hoặc (b; -a).",
      "u = (2; -5) ⇒ n = (5; 2) thỏa mãn u · n = 2(5) + (-5)(2) = 0."
    ],
    explanation: "Nếu u→ = (a; b) thì một vectơ pháp tuyến vuông góc với nó là n→ = (−b; a) = (5; 2). Tích vô hướng u→ · n→ = 2(5) + (−5)(2) = 0.",
    skill: "analytic-geometry"
  },
  {
    id: "q_geom_6",
    lessonId: "analytic-geometry",
    prompt: "Phương trình tổng quát của đường thẳng đi qua điểm M(1; 2) và có VTPT n→ = (3; −2) là:",
    options: [
      "3x − 2y + 1 = 0",
      "3x − 2y − 1 = 0",
      "2x + 3y − 8 = 0",
      "3x − 2y − 7 = 0"
    ],
    answer: 0,
    hints: [
      "3(x - 1) - 2(y - 2) = 0.",
      "3x - 3 - 2y + 4 = 0 ⇔ 3x - 2y + 1 = 0."
    ],
    explanation: "Phương trình: 3(x − 1) − 2(y − 2) = 0 ⇔ 3x − 3 − 2y + 4 = 0 ⇔ 3x − 2y + 1 = 0.",
    skill: "analytic-geometry"
  },
  {
    id: "q_geom_7",
    lessonId: "analytic-geometry",
    prompt: "Khoảng cách từ điểm M(1; 2) đến đường thẳng Δ: 3x + 4y + 4 = 0 bằng:",
    options: ["3", "15", "5", "1"],
    answer: 0,
    hints: [
      "d(M, Δ) = |3(1) + 4(2) + 4| / √(3² + 4²).",
      "Tử số: |3 + 8 + 4| = 15.",
      "Mẫu số: √(9 + 16) = √25 = 5.",
      "d = 15 / 5 = 3."
    ],
    explanation: "d(M, Δ) = |3(1) + 4(2) + 4| / √(3² + 4²) = 15 / 5 = 3.",
    skill: "analytic-geometry"
  },
  {
    id: "q_geom_8",
    lessonId: "analytic-geometry",
    prompt: "Đường tròn (C): (x − 2)² + (y + 3)² = 25 có tọa độ tâm I và bán kính R là:",
    options: [
      "I(2; −3), R = 5",
      "I(−2; 3), R = 5",
      "I(2; −3), R = 25",
      "I(−2; 3), R = 25"
    ],
    answer: 0,
    hints: [
      "Dạng chuẩn: (x - a)² + (y - b)² = R².",
      "a = 2, b = -3, R² = 25 ⇒ R = 5."
    ],
    explanation: "Theo dạng chuẩn (x − a)² + (y − b)² = R², tâm I(a; b) = I(2; −3) và bán kính R = √25 = 5.",
    skill: "analytic-geometry"
  },
  {
    id: "q_geom_9",
    lessonId: "analytic-geometry",
    prompt: "Phương trình nào sau đây là phương trình của một đường tròn?",
    options: [
      "x² + y² − 4x + 6y − 3 = 0",
      "x² + 2y² − 4x + 6y = 0",
      "x² + y² − 2xy + 1 = 0",
      "x² + y² − 2x + 4y + 10 = 0"
    ],
    answer: 0,
    hints: [
      "Hệ số x² và y² phải bằng nhau (bằng 1), không chứa tích xy.",
      "Điều kiện bán kính: a² + b² - c > 0.",
      "Với A: a = 2, b = -3, c = -3 ⇒ a² + b² - c = 4 + 9 - (-3) = 16 > 0 (thỏa mãn)."
    ],
    explanation: "Phương trình A có hệ số x² và y² bằng nhau, không chứa tích xy và a² + b² − c = 2² + (−3)² − (−3) = 16 > 0 nên là PT đường tròn.",
    skill: "analytic-geometry"
  },
  {
    id: "q_geom_10",
    lessonId: "analytic-geometry",
    prompt: "Góc giữa hai đường thẳng d1: x + 2y − 3 = 0 và d2: 2x − y + 1 = 0 bằng:",
    options: ["90°", "45°", "60°", "0°"],
    answer: 0,
    hints: [
      "n1 = (1; 2) và n2 = (2; -1).",
      "n1 · n2 = 1(2) + 2(-1) = 0.",
      "Hai đường thẳng vuông góc nhau."
    ],
    explanation: "Hai vectơ pháp tuyến n1→ = (1; 2) và n2→ = (2; −1) có tích vô hướng n1→ · n2→ = 1(2) + 2(−1) = 0, nên hai đường thẳng vuông góc nhau (góc 90°).",
    skill: "analytic-geometry"
  },
  {
    id: "q_geom_11",
    lessonId: "analytic-geometry",
    prompt: "Phương trình tiếp tuyến của đường tròn (x − 1)² + (y − 2)² = 25 tại điểm M(4; 6) là:",
    options: [
      "3x + 4y − 36 = 0",
      "3x + 4y + 36 = 0",
      "4x + 3y − 34 = 0",
      "3x − 4y + 12 = 0"
    ],
    answer: 0,
    hints: [
      "Tâm I(1; 2). Vectơ pháp tuyến của tiếp tuyến là IM→ = (4 - 1; 6 - 2) = (3; 4).",
      "Phương trình: 3(x - 4) + 4(y - 6) = 0 ⇔ 3x + 4y - 36 = 0."
    ],
    explanation: "Đường tròn có tâm I(1; 2). Tiếp tuyến tại M(4; 6) nhận IM→ = (3; 4) làm VTPT: 3(x − 4) + 4(y − 6) = 0 ⇔ 3x + 4y − 36 = 0.",
    skill: "analytic-geometry"
  },
  {
    id: "q_geom_12",
    lessonId: "analytic-geometry",
    prompt: "Khoảng cách giữa hai đường thẳng song song d1: 3x − 4y + 1 = 0 và d2: 3x − 4y + 11 = 0 là:",
    options: ["2", "10", "12/5", "1"],
    answer: 0,
    hints: [
      "d = |c1 - c2| / √(a² + b²).",
      "d = |1 - 11| / √(3² + 4²) = 10 / 5 = 2."
    ],
    explanation: "Khoảng cách giữa hai đường thẳng song song: d = |c1 − c2| / √(a² + b²) = |1 − 11| / 5 = 10 / 5 = 2.",
    skill: "analytic-geometry"
  },
  {
    id: "q_geom_13",
    lessonId: "analytic-geometry",
    prompt: "Vị trí tương đối của đường thẳng d: x + y − 2 = 0 và đường tròn (C): x² + y² = 2 là:",
    options: [
      "Tiếp xúc nhau",
      "Cắt nhau tại 2 điểm",
      "Không cắt nhau",
      "Đi qua tâm đường tròn"
    ],
    answer: 0,
    hints: [
      "Tâm O(0; 0), bán kính R = √2.",
      "d(O, d) = |0 + 0 - 2| / √(1 + 1) = 2 / √2 = √2.",
      "d(O, d) = R nên đường thẳng tiếp xúc với đường tròn."
    ],
    explanation: "Tâm O(0; 0), bán kính R = √2. Khoảng cách d(O, d) = |−2| / √2 = √2 = R. Vì khoảng cách bằng bán kính nên d tiếp xúc với (C).",
    skill: "analytic-geometry"
  },
  {
    id: "q_geom_14",
    lessonId: "analytic-geometry",
    prompt: "Phương trình tham số của đường thẳng đi qua A(2; −3) có VTCP u→ = (1; 4) là:",
    options: [
      "{ x = 2 + t; y = −3 + 4t }",
      "{ x = 1 + 2t; y = 4 − 3t }",
      "{ x = 2 − t; y = −3 − 4t }",
      "{ x = 2 + 4t; y = −3 + t }"
    ],
    answer: 0,
    hints: [
      "x = x0 + at, y = y0 + bt với M(x0; y0) và u = (a; b)."
    ],
    explanation: "Phương trình tham số có dạng { x = x0 + at; y = y0 + bt } = { x = 2 + t; y = −3 + 4t }.",
    skill: "analytic-geometry"
  },
  {
    id: "q_geom_15",
    lessonId: "analytic-geometry",
    prompt: "Bán kính R của đường tròn có phương trình x² + y² − 6x + 8y = 0 là:",
    options: ["5", "25", "10", "√7"],
    answer: 0,
    hints: [
      "a = 3, b = -4, c = 0.",
      "R = √(a² + b² - c) = √(9 + 16 - 0) = √25 = 5."
    ],
    explanation: "Tâm I(3; −4), c = 0. Bán kính R = √(3² + (−4)² − 0) = √25 = 5.",
    skill: "analytic-geometry"
  },
  {
    id: "q_geom_16",
    lessonId: "analytic-geometry",
    prompt: "Hai đường thẳng d1: 2x − 3y + 4 = 0 và d2: 4x − 6y + 8 = 0 có vị trí tương đối là:",
    options: [
      "Trùng nhau",
      "Song song",
      "Cắt nhau nhưng không vuông góc",
      "Vuông góc"
    ],
    answer: 0,
    hints: [
      "2/4 = -3/(-6) = 4/8 = 1/2.",
      "Các tỉ số đều bằng nhau nên hai đường thẳng trùng nhau."
    ],
    explanation: "Tỉ số các hệ số: 2/4 = −3/(−6) = 4/8 = 1/2. Hai đường thẳng có các hệ số tỉ lệ hoàn toàn nên trùng nhau.",
    skill: "analytic-geometry"
  },
  {
    id: "q_geom_17",
    type: "true-false",
    lessonId: "analytic-geometry",
    prompt: "Cho đường tròn (C): x² + y² − 4x + 2y − 4 = 0. Xét tính đúng/sai:",
    subQuestions: [
      { id: "a", text: "Tọa độ tâm đường tròn là I(2; −1).", answer: true, explanation: "a = -(-4)/2 = 2, b = -(2)/2 = -1." },
      { id: "b", text: "Bán kính của đường tròn là R = 3.", answer: true, explanation: "R = √(2² + (-1)² - (-4)) = √(4 + 1 + 4) = √9 = 3." },
      { id: "c", text: "Điểm O(0; 0) nằm bên trong đường tròn (C).", answer: true, explanation: "Thay (0; 0) vào vế trái được -4 < 0 nên O nằm trong đường tròn." },
      { id: "d", text: "Đường tròn tiếp xúc với trục hoành Ox.", answer: false, explanation: "Khoảng cách từ I(2; -1) đến Ox là |-1| = 1 ≠ R = 3 nên không tiếp xúc." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, b, d Đúng; c Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Khoảng cách từ tâm đến Ox là |yI| = 1 < R = 3 nên đường tròn cắt Ox."
    ],
    explanation: "Ý a, b, c đúng; Ý d sai vì d(I, Ox) = 1 < R = 3 nên đường tròn cắt trục Ox tại hai điểm phân biệt.",
    skill: "analytic-geometry"
  },
  {
    id: "q_geom_18",
    type: "true-false",
    lessonId: "analytic-geometry",
    prompt: "Cho hai đường thẳng d1: 3x − 4y + 5 = 0 và d2: 4x + 3y − 1 = 0. Xét tính đúng/sai:",
    subQuestions: [
      { id: "a", text: "d1 có một VTPT là n1→ = (3; −4).", answer: true, explanation: "Hệ số của x và y là (3; -4)." },
      { id: "b", text: "d2 có một VTPT là n2→ = (4; 3).", answer: true, explanation: "Hệ số của x và y là (4; 3)." },
      { id: "c", text: "Hai đường thẳng d1 và d2 vuông góc với nhau.", answer: true, explanation: "n1 · n2 = 3(4) + (-4)(3) = 12 - 12 = 0." },
      { id: "d", text: "d1 và d2 song song với nhau.", answer: false, explanation: "Đã vuông góc thì không thể song song." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, c Đúng; b, d Sai",
      "b, d Đúng; a, c Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Hai đường thẳng vuông góc vì tích vô hướng hai VTPT bằng 0."
    ],
    explanation: "Ý a, b, c đúng; Ý d sai vì hai đường thẳng vuông góc với nhau.",
    skill: "analytic-geometry"
  },
  {
    id: "q_geom_19",
    type: "true-false",
    lessonId: "analytic-geometry",
    prompt: "Xét vị trí tương đối giữa đường thẳng và đường tròn có tâm I, bán kính R. Gọi d là khoảng cách từ I đến đường thẳng:",
    subQuestions: [
      { id: "a", text: "Nếu d < R thì đường thẳng cắt đường tròn tại hai điểm phân biệt.", answer: true, explanation: "Khoảng cách nhỏ hơn bán kính nên có 2 giao điểm." },
      { id: "b", text: "Nếu d = R thì đường thẳng tiếp xúc với đường tròn.", answer: true, explanation: "Định nghĩa đường tiếp tuyến." },
      { id: "c", text: "Nếu d > R thì đường thẳng không có điểm chung với đường tròn.", answer: true, explanation: "Khoảng cách lớn hơn bán kính nên nằm ngoài đường tròn." },
      { id: "d", text: "Đường thẳng qua tâm đường tròn có d = R.", answer: false, explanation: "Đường thẳng qua tâm thì khoảng cách d = 0 chứ không phải R." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, b, d Đúng; c Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Đường thẳng đi qua tâm thì khoảng cách từ tâm đến nó bằng 0."
    ],
    explanation: "Ý a, b, c đúng; Ý d sai vì đường thẳng đi qua tâm I thì d(I, d) = 0.",
    skill: "analytic-geometry"
  },
  {
    id: "q_geom_20",
    type: "short-answer",
    lessonId: "analytic-geometry",
    prompt: "Tính khoảng cách từ gốc tọa độ O(0; 0) đến đường thẳng Δ: 3x − 4y + 10 = 0:",
    answer: 2,
    acceptedAnswers: ["2", "2.0"],
    options: ["2", "10", "5", "2.5"],
    hints: [
      "d(O, Δ) = |3(0) - 4(0) + 10| / √(3² + (-4)²).",
      "d = 10 / 5 = 2."
    ],
    explanation: "d(O, Δ) = |10| / √(3² + (−4)²) = 10 / 5 = 2.",
    skill: "analytic-geometry"
  },
  {
    id: "q_geom_21",
    type: "short-answer",
    lessonId: "analytic-geometry",
    prompt: "Tìm bán kính R của đường tròn (C): (x + 1)² + (y − 5)² = 16:",
    answer: 4,
    acceptedAnswers: ["4", "4.0"],
    options: ["4", "16", "2", "8"],
    hints: [
      "R² = 16 ⇒ R = √16 = 4."
    ],
    explanation: "Phương trình đường tròn có R² = 16, do đó bán kính R = 4.",
    skill: "analytic-geometry"
  },
  {
    id: "q_geom_22",
    type: "short-answer",
    lessonId: "analytic-geometry",
    prompt: "Tìm hệ số c để đường thẳng 3x + 4y + c = 0 tiếp xúc với đường tròn x² + y² = 4 (biết c > 0):",
    answer: 10,
    acceptedAnswers: ["10", "10.0"],
    options: ["10", "2", "4", "20"],
    hints: [
      "Tâm O(0; 0), R = 2.",
      "d(O, Δ) = |c| / 5 = R = 2 ⇒ |c| = 10.",
      "Vì c > 0 nên c = 10."
    ],
    explanation: "Tâm O(0; 0), R = 2. Để tiếp xúc thì d(O, Δ) = |c| / 5 = 2 ⇔ |c| = 10. Với c > 0 ta có c = 10.",
    skill: "analytic-geometry"
  },

  // ==========================================
  // LESSON 14: COMBINATORICS (18 new questions: 12 MC + 3 TF + 3 SA)
  // ==========================================
  {
    id: "q_comb_5",
    lessonId: "combinatorics",
    prompt: "Có bao nhiêu cách xếp 4 học sinh thành một hàng dọc?",
    options: ["24", "16", "12", "4"],
    answer: 0,
    hints: [
      "Số hoán vị của 4 phần tử là P4 = 4!.",
      "4! = 4 · 3 · 2 · 1 = 24."
    ],
    explanation: "Số cách xếp 4 học sinh thành một hàng là một hoán vị của 4 phần tử: P4 = 4! = 24 cách.",
    skill: "combinatorics"
  },
  {
    id: "q_comb_6",
    lessonId: "combinatorics",
    prompt: "Số cách chọn 3 học sinh từ một tổ gồm 10 học sinh để đi trực nhật là:",
    options: ["120", "720", "30", "1000"],
    answer: 0,
    hints: [
      "Chọn 3 người không phân biệt thứ tự chức vụ là dùng TỔ HỢP C_10^3.",
      "C_10^3 = (10 · 9 · 8) / (3 · 2 · 1) = 720 / 6 = 120."
    ],
    explanation: "Chọn 3 người không phân biệt thứ tự là tổ hợp chập 3 của 10 phần tử: C_10^3 = (10 × 9 × 8) / (3 × 2 × 1) = 120.",
    skill: "combinatorics"
  },
  {
    id: "q_comb_7",
    lessonId: "combinatorics",
    prompt: "Số cách chọn một ban cán sự gồm 1 lớp trưởng, 1 lớp phó từ 10 học sinh là:",
    options: ["90", "45", "100", "20"],
    answer: 0,
    hints: [
      "Có phân biệt chức vụ (thứ tự) nên dùng CHỈNH HỢP A_10^2.",
      "A_10^2 = 10 · 9 = 90."
    ],
    explanation: "Chọn 2 người có phân biệt chức danh là chỉnh hợp chập 2 của 10: A_10^2 = 10 × 9 = 90 cách.",
    skill: "combinatorics"
  },
  {
    id: "q_comb_8",
    lessonId: "combinatorics",
    prompt: "Từ các chữ số 1, 2, 3, 4, 5 có thể lập được bao nhiêu số tự nhiên có 3 chữ số ĐÔI MỘT KHÁC NHAU?",
    options: ["60", "125", "120", "20"],
    answer: 0,
    hints: [
      "Chữ số thứ nhất có 5 cách.",
      "Chữ số thứ hai có 4 cách, chữ số thứ ba có 3 cách.",
      "5 · 4 · 3 = 60 (chính là A_5^3)."
    ],
    explanation: "Số cách lập số có 3 chữ số đôi một khác nhau từ 5 chữ số là chỉnh hợp A_5^3 = 5 × 4 × 3 = 60 số.",
    skill: "combinatorics"
  },
  {
    id: "q_comb_9",
    lessonId: "combinatorics",
    prompt: "Khai triển nhị thức Newton (x + 2)⁴ có bao nhiêu số hạng?",
    options: ["5", "4", "16", "8"],
    answer: 0,
    hints: [
      "Khai triển (a + b)ⁿ luôn có đúng (n + 1) số hạng.",
      "Với n = 4, số số hạng là 4 + 1 = 5."
    ],
    explanation: "Khai triển (a + b)ⁿ luôn có n + 1 số hạng. Với n = 4, số số hạng là 4 + 1 = 5.",
    skill: "combinatorics"
  },
  {
    id: "q_comb_10",
    lessonId: "combinatorics",
    prompt: "Hệ số của x³ trong khai triển của (x + 1)⁵ là:",
    options: ["10", "5", "20", "1"],
    answer: 0,
    hints: [
      "Số hạng chứa x³ là C_5^3 · x³ · 1² = C_5^3 · x³.",
      "C_5^3 = C_5^2 = (5 · 4) / 2 = 10."
    ],
    explanation: "Số hạng chứa x³ trong (x + 1)⁵ là C_5^2 x³ = 10x³. Vậy hệ số bằng 10.",
    skill: "combinatorics"
  },
  {
    id: "q_comb_11",
    lessonId: "combinatorics",
    prompt: "Một quán ăn có 4 món khai vị, 5 món chính và 3 món tráng miệng. Số cách chọn một bữa ăn gồm 1 món khai vị, 1 món chính và 1 món tráng miệng là:",
    options: ["60", "12", "23", "120"],
    answer: 0,
    hints: [
      "Áp dụng quy tắc nhân: 4 · 5 · 3 = 60."
    ],
    explanation: "Theo quy tắc nhân: 4 × 5 × 3 = 60 cách chọn một bữa ăn hoàn chỉnh.",
    skill: "combinatorics"
  },
  {
    id: "q_comb_12",
    lessonId: "combinatorics",
    prompt: "Giá trị của biểu thức C_n^0 + C_n^1 + ... + C_n^n bằng:",
    options: ["2ⁿ", "n²", "n!", "2n"],
    answer: 0,
    hints: [
      "Thay x = 1 vào khai triển nhị thức Newton (1 + x)ⁿ = (1 + 1)ⁿ = 2ⁿ."
    ],
    explanation: "Áp dụng khai triển (1 + 1)ⁿ = C_n^0 + C_n^1 + ... + C_n^n = 2ⁿ.",
    skill: "combinatorics"
  },
  {
    id: "q_comb_13",
    lessonId: "combinatorics",
    prompt: "Từ các chữ số 0, 1, 2, 3, 4 có thể lập được bao nhiêu số tự nhiên có 3 chữ số khác nhau?",
    options: ["48", "60", "100", "64"],
    answer: 0,
    hints: [
      "Chữ số đầu tiên a ≠ 0 nên có 4 cách (chọn từ 1, 2, 3, 4).",
      "Chữ số b có 4 cách (chọn trong 4 chữ số còn lại kể cả số 0).",
      "Chữ số c có 3 cách.",
      "4 · 4 · 3 = 48."
    ],
    explanation: "Chữ số hàng trăm a có 4 cách (a ≠ 0). Chữ số hàng chục b có 4 cách (khác a). Chữ số hàng đơn vị c có 3 cách. Số các số lập được là 4 × 4 × 3 = 48 số.",
    skill: "combinatorics"
  },
  {
    id: "q_comb_14",
    lessonId: "combinatorics",
    prompt: "Số tập hợp con gồm 3 phần tử của một tập hợp có 6 phần tử là:",
    options: ["20", "120", "18", "64"],
    answer: 0,
    hints: [
      "C_6^3 = (6 · 5 · 4) / (3 · 2 · 1) = 120 / 6 = 20."
    ],
    explanation: "Số tập con gồm 3 phần tử là C_6^3 = (6 × 5 × 4) / 6 = 20.",
    skill: "combinatorics"
  },
  {
    id: "q_comb_15",
    lessonId: "combinatorics",
    prompt: "Có bao nhiêu cách sắp xếp 5 bạn nam và 5 bạn nữ thành một hàng sao cho các bạn nam và nữ ngồi xen kẽ nhau?",
    options: ["28800", "14400", "120", "3628800"],
    answer: 0,
    hints: [
      "TH1: Nam đứng ở các vị trí lẻ (1, 3, 5, 7, 9) và Nữ ở vị trí chẵn: 5! · 5! = 120 · 120 = 14400.",
      "TH2: Nữ đứng ở vị trí lẻ và Nam ở vị trí chẵn: 5! · 5! = 14400.",
      "Tổng = 14400 + 14400 = 28800."
    ],
    explanation: "Có 2 trường hợp bắt đầu bằng nam hoặc nữ. Mỗi trường hợp có 5! × 5! cách. Tổng số cách là 2 × (5!)² = 2 × 14400 = 28800 cách.",
    skill: "combinatorics"
  },
  {
    id: "q_comb_16",
    lessonId: "combinatorics",
    prompt: "Công thức liên hệ giữa hoán vị, chỉnh hợp và tổ hợp là:",
    options: [
      "A_n^k = k! · C_n^k",
      "C_n^k = k! · A_n^k",
      "A_n^k = n! · C_n^k",
      "P_n = A_n^k · C_n^k"
    ],
    answer: 0,
    hints: [
      "Chọn k phần tử (C_n^k) rồi hoán vị chúng (k!) sẽ được chỉnh hợp A_n^k."
    ],
    explanation: "Chỉnh hợp bằng tổ hợp nhân với hoán vị của k phần tử: A_n^k = k! × C_n^k.",
    skill: "combinatorics"
  },
  {
    id: "q_comb_17",
    type: "true-false",
    lessonId: "combinatorics",
    prompt: "Xét tính đúng/sai của các công thức đại số tổ hợp:",
    subQuestions: [
      { id: "a", text: "P_n = n! = n(n − 1)...1.", answer: true, explanation: "Công thức hoán vị chuẩn." },
      { id: "b", text: "C_n^k = C_n^{n−k}.", answer: true, explanation: "Tính chất đối xứng của tổ hợp." },
      { id: "c", text: "C_n^k = A_n^k / k!.", answer: true, explanation: "Đúng theo công thức liên hệ." },
      { id: "d", text: "0! = 0.", answer: false, explanation: "Quy ước toán học chuẩn 0! = 1." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, b, d Đúng; c Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Quy ước: 0! = 1 chứ không phải 0."
    ],
    explanation: "Ý a, b, c đúng; Ý d sai vì theo quy ước toán học thì 0! = 1.",
    skill: "combinatorics"
  },
  {
    id: "q_comb_18",
    type: "true-false",
    lessonId: "combinatorics",
    prompt: "Về khai triển nhị thức Newton (a + b)⁵ = C_5^0 a⁵ + C_5^1 a⁴b + C_5^2 a³b² + C_5^3 a²b³ + C_5^4 ab⁴ + C_5^5 b⁵. Xét tính đúng/sai:",
    subQuestions: [
      { id: "a", text: "Khai triển có tất cả 6 số hạng.", answer: true, explanation: "n = 5 nên có 5 + 1 = 6 số hạng." },
      { id: "b", text: "C_5^0 = C_5^5 = 1.", answer: true, explanation: "Hai hệ số đầu và cuối luôn bằng 1." },
      { id: "c", text: "C_5^1 = C_5^4 = 5.", answer: true, explanation: "C_5^1 = 5." },
      { id: "d", text: "C_5^2 = C_5^3 = 20.", answer: false, explanation: "C_5^2 = (5·4)/2 = 10 chứ không phải 20." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, b, d Đúng; c Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "C_5^2 = (5 × 4) / 2 = 10."
    ],
    explanation: "Ý a, b, c đúng; Ý d sai vì C_5^2 = C_5^3 = 10.",
    skill: "combinatorics"
  },
  {
    id: "q_comb_19",
    type: "true-false",
    lessonId: "combinatorics",
    prompt: "Xét quy tắc cộng và quy tắc nhân trong các tình huống sau:",
    subQuestions: [
      { id: "a", text: "Chọn 1 quyển sách từ 5 sách Toán hoặc 6 sách Văn: có 11 cách.", answer: true, explanation: "Quy tắc cộng hai công việc rời nhau: 5 + 6 = 11." },
      { id: "b", text: "Chọn 1 bộ đồ gồm 1 áo (trong 4 áo) và 1 quần (trong 3 quần): có 12 cách.", answer: true, explanation: "Quy tắc nhân hai công đoạn: 4 × 3 = 12." },
      { id: "c", text: "Số đường đi từ A qua B rồi đến C (A đến B có 3 đường, B đến C có 2 đường) là 5 đường.", answer: false, explanation: "Phải dùng quy tắc nhân: 3 × 2 = 6 đường chứ không phải 5." },
      { id: "d", text: "Chọn 1 quả cầu từ hộp có 3 cầu đỏ và 4 cầu xanh: có 7 cách.", answer: true, explanation: "3 + 4 = 7 cách." }
    ],
    options: [
      "a, b, d Đúng; c Sai",
      "a, b, c Đúng; d Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Đi từ A qua B rồi đến C là 2 công đoạn liên tiếp nên phải nhân số cách: 3 × 2 = 6."
    ],
    explanation: "Ý a, b, d đúng; Ý c sai vì đây là hai công đoạn liên tiếp nên số cách là 3 × 2 = 6 cách.",
    skill: "combinatorics"
  },
  {
    id: "q_comb_20",
    type: "short-answer",
    lessonId: "combinatorics",
    prompt: "Tính giá trị của biểu thức P = A_6^2 + C_6^2:",
    answer: 45,
    acceptedAnswers: ["45", "45.0"],
    options: ["45", "30", "15", "60"],
    hints: [
      "A_6^2 = 6 · 5 = 30.",
      "C_6^2 = (6 · 5) / 2 = 15.",
      "P = 30 + 15 = 45."
    ],
    explanation: "A_6^2 = 6 × 5 = 30; C_6^2 = 30 / 2 = 15. Do đó P = 30 + 15 = 45.",
    skill: "combinatorics"
  },
  {
    id: "q_comb_21",
    type: "short-answer",
    lessonId: "combinatorics",
    prompt: "Một tổ có 8 học sinh. Có bao nhiêu cách chọn ra 2 học sinh để làm trực nhật?",
    answer: 28,
    acceptedAnswers: ["28", "28.0"],
    options: ["28", "56", "16", "64"],
    hints: [
      "C_8^2 = (8 · 7) / (2 · 1) = 56 / 2 = 28."
    ],
    explanation: "Số cách chọn 2 học sinh từ 8 học sinh là C_8^2 = (8 × 7) / 2 = 28 cách.",
    skill: "combinatorics"
  },
  {
    id: "q_comb_22",
    type: "short-answer",
    lessonId: "combinatorics",
    prompt: "Tìm số hạng không chứa x trong khai triển của (x + 1/x)⁴:",
    answer: 6,
    acceptedAnswers: ["6", "6.0"],
    options: ["6", "4", "1", "16"],
    hints: [
      "Số hạng tổng quát: C_4^k · x^(4-k) · (1/x)^k = C_4^k · x^(4-2k).",
      "Không chứa x thì 4 - 2k = 0 ⇒ k = 2.",
      "Hệ số là C_4^2 = (4 · 3) / 2 = 6."
    ],
    explanation: "Số hạng tổng quát là C_4^k x^(4−2k). Để không chứa x thì 4 − 2k = 0 ⇔ k = 2. Số hạng đó là C_4^2 = 6.",
    skill: "combinatorics"
  },

  // ==========================================
  // LESSON 15: PROBABILITY (18 new questions: 12 MC + 3 TF + 3 SA)
  // ==========================================
  {
    id: "q_prob_5",
    lessonId: "probability",
    prompt: "Gieo một con xúc xắc cân đối và đồng chất một lần. Xác suất để xuất hiện mặt có số chấm là số chẵn bằng:",
    options: ["1/2", "1/3", "1/6", "2/3"],
    answer: 0,
    hints: [
      "Không gian mẫu n(Ω) = 6.",
      "Các mặt chẵn là {2, 4, 6} ⇒ n(A) = 3.",
      "P(A) = 3 / 6 = 1/2."
    ],
    explanation: "Không gian mẫu n(Ω) = 6. Biến cố A = {2; 4; 6} có 3 kết quả thuận lợi. P(A) = 3/6 = 1/2.",
    skill: "probability"
  },
  {
    id: "q_prob_6",
    lessonId: "probability",
    prompt: "Gieo đồng thời hai đồng xu cân đối. Xác suất để cả hai đồng xu đều xuất hiện mặt ngửa (N) là:",
    options: ["1/4", "1/2", "3/4", "1/8"],
    answer: 0,
    hints: [
      "Không gian mẫu Ω = {SS, SN, NS, NN} có 4 phần tử.",
      "Chỉ có 1 kết quả thuận lợi là NN.",
      "P = 1/4."
    ],
    explanation: "Không gian mẫu có 4 khả năng {SS, SN, NS, NN}. Biến cố cả hai cùng ngửa là {NN}. Xác suất là 1/4.",
    skill: "probability"
  },
  {
    id: "q_prob_7",
    lessonId: "probability",
    prompt: "Một hộp chứa 5 viên bi xanh và 3 viên bi đỏ. Rút ngẫu nhiên 1 viên bi. Xác suất để rút được viên bi màu đỏ là:",
    options: ["3/8", "5/8", "1/3", "3/5"],
    answer: 0,
    hints: [
      "Tổng số bi trong hộp là 5 + 3 = 8 viên.",
      "Số bi đỏ là 3 viên.",
      "P = 3/8."
    ],
    explanation: "Tổng số bi là 8. Số bi đỏ là 3. Xác suất rút được bi đỏ là P = 3/8.",
    skill: "probability"
  },
  {
    id: "q_prob_8",
    lessonId: "probability",
    prompt: "Nếu biến cố A có xác suất P(A) = 0.3 thì biến cố đối Ā có xác suất là:",
    options: ["0.7", "0.3", "0", "1"],
    answer: 0,
    hints: [
      "Công thức biến cố đối: P(Ā) = 1 - P(A).",
      "P(Ā) = 1 - 0.3 = 0.7."
    ],
    explanation: "Theo công thức biến cố đối: P(Ā) = 1 − P(A) = 1 − 0.3 = 0.7.",
    skill: "probability"
  },
  {
    id: "q_prob_9",
    lessonId: "probability",
    prompt: "Gieo một con xúc xắc cân đối. Xác suất để xuất hiện mặt có số chấm lớn hơn 4 là:",
    options: ["1/3", "1/2", "2/3", "1/6"],
    answer: 0,
    hints: [
      "Các số chấm lớn hơn 4 là {5, 6} (có 2 kết quả).",
      "P = 2 / 6 = 1/3."
    ],
    explanation: "Các mặt có số chấm lớn hơn 4 là mặt 5 chấm và mặt 6 chấm (2 kết quả). Xác suất là 2/6 = 1/3.",
    skill: "probability"
  },
  {
    id: "q_prob_10",
    lessonId: "probability",
    prompt: "Rút ngẫu nhiên một lá bài từ bộ bài 52 lá. Xác suất để rút được lá bài chất Át (A) là:",
    options: ["1/13", "1/52", "4/13", "1/4"],
    answer: 0,
    hints: [
      "Bộ bài 52 lá có đúng 4 lá Át.",
      "P = 4 / 52 = 1/13."
    ],
    explanation: "Trong bộ bài 52 lá có 4 lá Át. Xác suất là P = 4 / 52 = 1/13.",
    skill: "probability"
  },
  {
    id: "q_prob_11",
    lessonId: "probability",
    prompt: "Một hộp có 4 bi đỏ và 6 bi xanh. Chọn ngẫu nhiên 2 viên bi. Số phần tử của không gian mẫu n(Ω) là:",
    options: ["45", "90", "20", "10"],
    answer: 0,
    hints: [
      "Tổng số bi là 4 + 6 = 10 viên.",
      "Chọn 2 viên từ 10 viên là C_10^2 = (10 · 9) / 2 = 45."
    ],
    explanation: "Số cách chọn 2 viên bi từ tổng số 10 viên bi là n(Ω) = C_10^2 = 45.",
    skill: "probability"
  },
  {
    id: "q_prob_12",
    lessonId: "probability",
    prompt: "Chọn ngẫu nhiên một số tự nhiên có hai chữ số (từ 10 đến 99). Xác suất để chọn được số chia hết cho 5 là:",
    options: ["1/5", "1/10", "18/89", "2/9"],
    answer: 0,
    hints: [
      "Số các số có 2 chữ số: 99 - 10 + 1 = 90 số.",
      "Các số chia hết cho 5: 10, 15, ..., 95. Số lượng = (95 - 10)/5 + 1 = 18 số.",
      "P = 18 / 90 = 1/5."
    ],
    explanation: "Có tất cả 90 số có hai chữ số. Các số chia hết cho 5 gồm 18 số: 10, 15, ..., 95. Xác suất là 18/90 = 1/5.",
    skill: "probability"
  },
  {
    id: "q_prob_13",
    lessonId: "probability",
    prompt: "Biến cố chắc chắn có xác suất bằng bao nhiêu?",
    options: ["1", "0", "0.5", "100"],
    answer: 0,
    hints: [
      "Biến cố chắc chắn luôn luôn xảy ra nên P(Ω) = 1."
    ],
    explanation: "Xác suất của biến cố chắc chắn luôn bằng 1: P(Ω) = 1.",
    skill: "probability"
  },
  {
    id: "q_prob_14",
    lessonId: "probability",
    prompt: "Biến cố không thể có xác suất bằng bao nhiêu?",
    options: ["0", "1", "−1", "0.01"],
    answer: 0,
    hints: [
      "Biến cố không thể là tập rỗng ∅ nên P(∅) = 0."
    ],
    explanation: "Xác suất của biến cố không thể luôn bằng 0: P(∅) = 0.",
    skill: "probability"
  },
  {
    id: "q_prob_15",
    lessonId: "probability",
    prompt: "Gieo đồng thời hai con xúc xắc. Xác suất để tổng số chấm trên hai con xúc xắc bằng 7 là:",
    options: ["1/6", "1/12", "7/36", "5/36"],
    answer: 0,
    hints: [
      "n(Ω) = 6 · 6 = 36.",
      "Các cặp có tổng bằng 7: (1;6), (2;5), (3;4), (4;3), (5;2), (6;1) (có 6 cặp).",
      "P = 6 / 36 = 1/6."
    ],
    explanation: "Có 6 cặp kết quả có tổng bằng 7 trên tổng số 36 khả năng. Xác suất là 6/36 = 1/6.",
    skill: "probability"
  },
  {
    id: "q_prob_16",
    lessonId: "probability",
    prompt: "Hai biến cố A và B xung khắc khi và chỉ khi:",
    options: [
      "A và B không bao giờ cùng xảy ra (A ∩ B = ∅)",
      "A xảy ra thì B cũng xảy ra",
      "P(A) + P(B) = 1",
      "A và B có cùng xác suất"
    ],
    answer: 0,
    hints: [
      "Xung khắc nghĩa là loại trừ nhau hoàn toàn, không thể đồng thời cùng xuất hiện."
    ],
    explanation: "Hai biến cố xung khắc là hai biến cố không thể đồng thời cùng xảy ra trong một phép thử, tức A ∩ B = ∅.",
    skill: "probability"
  },
  {
    id: "q_prob_17",
    type: "true-false",
    lessonId: "probability",
    prompt: "Xét tính đúng/sai của các tính chất xác suất sau:",
    subQuestions: [
      { id: "a", text: "Với mọi biến cố A, ta luôn có 0 ≤ P(A) ≤ 1.", answer: true, explanation: "Định lý chuẩn xác suất cổ điển." },
      { id: "b", text: "Xác suất của biến cố chắc chắn là P(Ω) = 1.", answer: true, explanation: "Đúng theo định nghĩa." },
      { id: "c", text: "Nếu A và B xung khắc thì P(A ∪ B) = P(A) + P(B).", answer: true, explanation: "Quy tắc cộng xác suất cho biến cố xung khắc." },
      { id: "d", text: "Xác suất của một biến cố có thể nhận giá trị 1.5.", answer: false, explanation: "Xác suất không bao giờ vượt quá 1." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, b, d Đúng; c Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Xác suất không bao giờ vượt quá 1."
    ],
    explanation: "Ý a, b, c đúng; Ý d sai vì giá trị xác suất P(A) luôn nằm trong đoạn [0; 1].",
    skill: "probability"
  },
  {
    id: "q_prob_18",
    type: "true-false",
    lessonId: "probability",
    prompt: "Gieo một con xúc xắc cân đối. Xét tính đúng/sai của các biến cố sau:",
    subQuestions: [
      { id: "a", text: "Biến cố 'Xuất hiện mặt có số chấm chia hết cho 2' có xác suất bằng 1/2.", answer: true, explanation: "{2, 4, 6} có 3 kết quả ⇒ 3/6 = 1/2." },
      { id: "b", text: "Biến cố 'Xuất hiện mặt có số chấm là số nguyên tố' có xác suất bằng 1/2.", answer: true, explanation: "{2, 3, 5} có 3 kết quả ⇒ 3/6 = 1/2." },
      { id: "c", text: "Biến cố 'Xuất hiện mặt có số chấm chia hết cho 3' có xác suất bằng 1/3.", answer: true, explanation: "{3, 6} có 2 kết quả ⇒ 2/6 = 1/3." },
      { id: "d", text: "Biến cố 'Xuất hiện mặt 7 chấm' có xác suất bằng 1/6.", answer: false, explanation: "Xúc xắc chỉ có từ 1 đến 6 chấm nên mặt 7 chấm là biến cố không thể (P = 0)." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, c Đúng; b, d Sai",
      "b, d Đúng; a, c Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Xúc xắc thông thường không có mặt 7 chấm."
    ],
    explanation: "Ý a, b, c đúng; Ý d sai vì xúc xắc chỉ có từ 1 đến 6 chấm nên biến cố mặt 7 chấm có xác suất bằng 0.",
    skill: "probability"
  },
  {
    id: "q_prob_19",
    type: "true-false",
    lessonId: "probability",
    prompt: "Gieo đồng thời hai đồng xu cân đối. Xét tính đúng/sai:",
    subQuestions: [
      { id: "a", text: "Không gian mẫu có 4 phần tử.", answer: true, explanation: "Ω = {SS, SN, NS, NN}." },
      { id: "b", text: "Xác suất để có đúng 1 đồng xu xuất hiện mặt ngửa là 1/2.", answer: true, explanation: "{SN, NS} có 2 kết quả ⇒ 2/4 = 1/2." },
      { id: "c", text: "Xác suất để có ít nhất 1 đồng xu xuất hiện mặt ngửa là 3/4.", answer: true, explanation: "1 - P(SS) = 1 - 1/4 = 3/4." },
      { id: "d", text: "Xác suất để cả hai đồng xu đều sấp là 1/2.", answer: false, explanation: "Chỉ có 1 kết quả SS nên xác suất là 1/4 chứ không phải 1/2." }
    ],
    options: [
      "a, b, c Đúng; d Sai",
      "a, b, d Đúng; c Sai",
      "b, c Đúng; a, d Sai",
      "Cả 4 khẳng định đều Đúng"
    ],
    answer: 0,
    hints: [
      "Cả hai cùng sấp là biến cố {SS}, xác suất là 1/4."
    ],
    explanation: "Ý a, b, c đúng; Ý d sai vì biến cố cả hai cùng sấp là {SS} có xác suất 1/4.",
    skill: "probability"
  },
  {
    id: "q_prob_20",
    type: "short-answer",
    lessonId: "probability",
    prompt: "Gieo hai con xúc xắc cân đối. Hỏi có bao nhiêu kết quả thuận lợi cho biến cố: 'Tổng số chấm trên hai con xúc xắc bằng 8'?",
    answer: 5,
    acceptedAnswers: ["5", "5.0"],
    options: ["5", "6", "4", "7"],
    hints: [
      "Liệt kê các cặp (a, b) có a + b = 8 với 1 ≤ a, b ≤ 6.",
      "Các cặp: (2; 6), (3; 5), (4; 4), (5; 3), (6; 2).",
      "Có tất cả 5 kết quả."
    ],
    explanation: "Các cặp có tổng bằng 8 là: (2; 6), (3; 5), (4; 4), (5; 3), (6; 2). Có đúng 5 kết quả thuận lợi.",
    skill: "probability"
  },
  {
    id: "q_prob_21",
    type: "short-answer",
    lessonId: "probability",
    prompt: "Một tổ gồm 6 nam và 4 nữ. Chọn ngẫu nhiên 2 người. Hỏi có bao nhiêu cách chọn sao cho trong 2 người được chọn có cả nam và nữ?",
    answer: 24,
    acceptedAnswers: ["24", "24.0"],
    options: ["24", "45", "10", "12"],
    hints: [
      "Chọn 1 nam từ 6 nam: 6 cách.",
      "Chọn 1 nữ từ 4 nữ: 4 cách.",
      "Quy tắc nhân: 6 · 4 = 24 cách."
    ],
    explanation: "Chọn 1 nam có 6 cách, chọn 1 nữ có 4 cách. Số cách chọn gồm 1 nam và 1 nữ là 6 × 4 = 24 cách.",
    skill: "probability"
  },
  {
    id: "q_prob_22",
    type: "short-answer",
    lessonId: "probability",
    prompt: "Một hộp có 3 quả bóng vàng và 2 quả bóng xanh. Rút ngẫu nhiên lần lượt từng quả không hoàn lại 2 quả bóng. Tính xác suất để cả 2 quả bóng đều màu vàng (viết dưới dạng số thập phân):",
    answer: 0.3,
    acceptedAnswers: ["0.3", "0,3", "3/10"],
    options: ["0.3", "0.6", "0.4", "0.2"],
    hints: [
      "Xác suất quả 1 vàng: 3/5.",
      "Sau khi rút 1 quả vàng, hộp còn 2 quả vàng và 2 quả xanh. Xác suất quả 2 vàng: 2/4 = 1/2.",
      "P = (3/5) · (1/2) = 3/10 = 0.3."
    ],
    explanation: "P = (C_3^2) / (C_5^2) = 3 / 10 = 0.3 (hoặc tính liên tiếp: (3/5) × (2/4) = 0.3).",
    skill: "probability"
  }
];

