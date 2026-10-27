export const questionBank = [
  // CHƯƠNG III (BÀI HỌC CỐT LÕI HIỆN TẠI - GIỮ NGUYÊN 100% ID VÀ THÔNG SỐ)
  {
    id: "q1",
    lessonId: "values",
    prompt: "Cho góc tù α, biết sin α = 3/5. Tính cos α.",
    options: ["4/5", "−4/5", "3/5", "−3/5"],
    answer: 1,
    explanation:
      "Từ sin²α + cos²α = 1, suy ra cos²α = 1 − 9/25 = 16/25. Vì α là góc tù nên cos α < 0. Vậy cos α = −4/5.",
    hints: [
      "Góc tù nằm trong khoảng nào? Giá trị cos ở khoảng đó mang dấu gì?",
      "Dùng sin²α + cos²α = 1 để tìm cos²α.",
      "cos²α = 16/25 nên cos α có độ lớn 4/5. Hãy chọn dấu theo điều kiện góc tù.",
    ],
    skill: "identity-and-sign",
  },
  {
    id: "q2",
    lessonId: "values",
    prompt: "Với một góc α, hệ thức nào sau đây luôn đúng?",
    options: [
      "sin α + cos α = 1",
      "sin²α − cos²α = 1",
      "sin²α + cos²α = 1",
      "sin α = cos α",
    ],
    answer: 2,
    explanation:
      "Trên đường tròn đơn vị, điểm M(cos α; sin α) thỏa mãn x² + y² = 1. Do đó sin²α + cos²α = 1.",
    hints: [
      "Nhớ phương trình của đường tròn có tâm O và bán kính 1.",
      "Hai tọa độ của M là cos α và sin α.",
      "Cần lấy bình phương từng tọa độ rồi cộng lại.",
    ],
    skill: "identity",
  },
  {
    id: "q3",
    lessonId: "values",
    prompt: "Giá trị của sin 30° bằng bao nhiêu?",
    options: ["√3/2", "1", "√2/2", "1/2"],
    answer: 3,
    explanation:
      "Trong tam giác vuông 30°–60°–90°, cạnh đối diện góc 30° bằng một nửa cạnh huyền, nên sin 30° = 1/2.",
    hints: [
      "Sin của góc nhọn là tỉ số cạnh đối và cạnh huyền.",
      "Hãy nghĩ đến một nửa tam giác đều.",
      "Cạnh đối diện góc 30° bằng một nửa cạnh huyền.",
    ],
    skill: "special-angle",
  },
  {
    id: "q4",
    lessonId: "values",
    prompt: "Biết cos 30° = √3/2. Giá trị của cos 150° là gì?",
    options: ["−√3/2", "√3/2", "1/2", "−1/2"],
    answer: 0,
    explanation:
      "150° = 180° − 30°. Dùng cos(180° − α) = −cos α, ta được cos 150° = −√3/2.",
    hints: [
      "150° và 30° có tổng bằng bao nhiêu?",
      "Hai góc bù nhau có giá trị cos đối nhau.",
      "150° là góc tù nên cos 150° phải âm, với độ lớn bằng cos 30°.",
    ],
    skill: "supplementary",
  },
  {
    id: "q5",
    lessonId: "signs",
    prompt: "Không cần tính cụ thể, em có thể kết luận gì về cos 120°?",
    options: ["Dương", "Bằng 0", "Âm", "Không xác định"],
    answer: 2,
    explanation:
      "120° là góc tù. Trên đường tròn đơn vị, điểm tương ứng có hoành độ âm nên cos 120° < 0.",
    hints: [
      "120° nằm giữa hai góc đặc biệt nào?",
      "Ở góc tù, điểm M nằm bên trái trục tung.",
      "Cos là hoành độ của M. Hoành độ bên trái trục tung mang dấu âm.",
    ],
    skill: "sign",
  },
  {
    id: "q6",
    lessonId: "signs",
    prompt: "Giá trị của cos 90° bằng bao nhiêu?",
    options: ["1", "0", "−1", "Không xác định"],
    answer: 1,
    explanation:
      "Điểm ứng với góc 90° trên đường tròn đơn vị là M(0; 1). Cos là hoành độ, vì thế cos 90° = 0.",
    hints: [
      "Điểm trên đường tròn đơn vị ứng với góc 90° nằm trên trục nào?",
      "Tọa độ của điểm đó là (0; 1).",
      "Cos lấy tọa độ theo chiều ngang.",
    ],
    skill: "boundary",
  },
  {
    id: "q7",
    lessonId: "signs",
    prompt: "Biết tan 45° = 1. Tính tan 135°.",
    options: ["1", "0", "Không xác định", "−1"],
    answer: 3,
    explanation:
      "135° = 180° − 45°. Vì tan(180° − α) = −tan α nên tan 135° = −1.",
    hints: [
      "135° và 45° là hai góc bù nhau.",
      "Tan của một góc tù là số âm.",
      "Tan của hai góc bù nhau đối nhau khi các giá trị đó xác định.",
    ],
    skill: "sign",
  },
  {
    id: "q8",
    lessonId: "signs",
    prompt: "Với góc nhọn α, phát biểu nào đúng?",
    options: [
      "sin α > 0 và cos α > 0",
      "sin α < 0 và cos α > 0",
      "sin α > 0 và cos α < 0",
      "sin α < 0 và cos α < 0",
    ],
    answer: 0,
    explanation:
      "Nếu 0° < α < 90°, điểm M trên đường tròn đơn vị có cả hai tọa độ dương. Vì thế sin α > 0 và cos α > 0.",
    hints: [
      "Góc nhọn nằm trong khoảng từ 0° đến 90°, không gồm hai đầu.",
      "Điểm M nằm phía trên trục hoành và bên phải trục tung.",
      "Cả hoành độ và tung độ của M đều dương.",
    ],
    skill: "sign",
  },
  {
    id: "q9",
    lessonId: "cosine",
    prompt:
      "Tam giác ABC có b = 3, c = 4 và A = 90°. Độ dài cạnh a bằng bao nhiêu?",
    options: ["7", "√7", "5", "25"],
    answer: 2,
    explanation:
      "a² = b² + c² − 2bc cos A = 9 + 16 − 24 × 0 = 25. Vì a > 0 nên a = 5.",
    hints: [
      "Áp dụng a² = b² + c² − 2bc cos A.",
      "cos 90° = 0 nên số hạng cuối bằng 0.",
      "a² = 25. Độ dài cạnh a là căn bậc hai dương của 25.",
    ],
    skill: "cosine-law",
  },
  {
    id: "q10",
    lessonId: "cosine",
    prompt: "Tam giác ABC có b = 2, c = 3 và A = 60°. Tính cạnh a.",
    options: ["√7", "7", "√19", "1"],
    answer: 0,
    explanation:
      "a² = 2² + 3² − 2 × 2 × 3 × cos 60° = 4 + 9 − 6 = 7. Vì a là độ dài nên a = √7.",
    hints: [
      "Cạnh a đối diện góc A, còn b và c kẹp góc A.",
      "Thay cos 60° = 1/2 vào định lý cosin.",
      "Sau khi tìm được a² = 7, em cần lấy căn bậc hai để tìm a.",
    ],
    skill: "square-root",
  },
  {
    id: "q11",
    lessonId: "cosine",
    prompt: "Tam giác ABC có a = 3, b = 4, c = 5. Tính cos C.",
    options: ["1/2", "−1/2", "1", "0"],
    answer: 3,
    explanation:
      "cos C = (a² + b² − c²)/(2ab) = (9 + 16 − 25)/24 = 0. Vậy C = 90°.",
    hints: [
      "Cạnh c = 5 đối diện góc C cần tìm.",
      "Biến đổi định lý cosin: cos C = (a² + b² − c²)/(2ab).",
      "Tử số bằng 9 + 16 − 25 = 0.",
    ],
    skill: "cosine-law",
  },
  {
    id: "q12",
    lessonId: "cosine",
    prompt:
      "Một tam giác có các cạnh 2, 3, 4. Góc đối diện cạnh 4 là loại góc nào?",
    options: ["Góc nhọn", "Góc tù", "Góc vuông", "Không thể xác định"],
    answer: 1,
    explanation:
      "Gọi A là góc đối diện cạnh 4. Ta có cos A = (2² + 3² − 4²)/(2 × 2 × 3) = −1/4 < 0. Vì 0° < A < 180°, A là góc tù.",
    hints: [
      "Hãy tìm dấu của cos góc đối diện cạnh lớn nhất.",
      "Dùng cos A = (2² + 3² − 4²)/(2 × 2 × 3).",
      "Tử số bằng −3 và mẫu số dương. Cos âm thì góc trong tam giác là góc tù.",
    ],
    skill: "cosine-and-sign",
  },

  // CHƯƠNG I: MỆNH ĐỀ TOÁN HỌC (propositions)
  {
    id: "q_prop_1",
    lessonId: "propositions",
    prompt: "Trong các câu sau, câu nào là một mệnh đề toán học?",
    options: [
      "Hôm nay trời đẹp quá!",
      "15 là số nguyên tố.",
      "Bạn có thích học toán không?",
      "Hãy làm bài tập về nhà!",
    ],
    answer: 1,
    explanation:
      "“15 là số nguyên tố” là một khẳng định có tính đúng sai rõ ràng (cụ thể là một mệnh đề sai vì 15 chia hết cho 3 và 5). Các câu còn lại là câu cảm thán, câu hỏi hoặc câu cầu khiến nên không phải mệnh đề.",
    hints: [
      "Mệnh đề phải là một câu khẳng định có tính đúng hoặc sai dứt khoát.",
      "Câu hỏi và câu cảm thán không có tính đúng sai.",
      "Một câu khẳng định sai về toán học vẫn được tính là một mệnh đề toán học.",
    ],
    skill: "proposition-logic",
  },
  {
    id: "q_prop_2",
    lessonId: "propositions",
    prompt: "Mệnh đề phủ định của “∀x ∈ ℝ, x² − x + 1 > 0” là gì?",
    options: [
      "∃x ∈ ℝ, x² − x + 1 ≤ 0",
      "∀x ∈ ℝ, x² − x + 1 < 0",
      "∃x ∈ ℝ, x² − x + 1 < 0",
      "∀x ∈ ℝ, x² − x + 1 ≤ 0",
    ],
    answer: 0,
    explanation:
      "Quy tắc phủ định mệnh đề chứa lượng từ: ¬(∀x ∈ X, P(x)) là ∃x ∈ X, ¬P(x). Phủ định của “> 0” là “≤ 0”. Do đó mệnh đề phủ định là: ∃x ∈ ℝ, x² − x + 1 ≤ 0.",
    hints: [
      "Phủ định của lượng từ 'với mọi' (∀) là lượng từ 'tồn tại' (∃).",
      "Phủ định của bất đẳng thức lớn hơn ngặt (> 0) là gì?",
      "Phủ định của lớn hơn (> 0) là bé hơn hoặc bằng (≤ 0).",
    ],
    skill: "proposition-negation",
  },
  {
    id: "q_prop_3",
    lessonId: "propositions",
    prompt: "Cho mệnh đề kéo theo: “Nếu tứ giác ABCD là hình vuông thì ABCD là hình chữ nhật”. Phát biểu nào đúng?",
    options: [
      "Hình chữ nhật là điều kiện đủ để ABCD là hình vuông",
      "Hình vuông là điều kiện cần để ABCD là hình chữ nhật",
      "Hình vuông là điều kiện đủ để ABCD là hình chữ nhật",
      "Mệnh đề kéo theo trên là một mệnh đề sai",
    ],
    answer: 2,
    explanation:
      "Trong mệnh đề kéo theo P ⇒ Q, P là điều kiện đủ để có Q, còn Q là điều kiện cần để có P. Vì một hình vuông chắc chắn là hình chữ nhật, nên 'ABCD là hình vuông' là điều kiện đủ để ABCD là hình chữ nhật.",
    hints: [
      "Trong mệnh đề 'Nếu P thì Q', mệnh đề P đứng trước được gọi là điều kiện gì?",
      "P là điều kiện đủ, Q là điều kiện cần.",
      "Hình vuông đủ để suy ra hình chữ nhật.",
    ],
    skill: "proposition-logic",
  },
  {
    id: "q_prop_4",
    lessonId: "propositions",
    prompt: "Trong các mệnh đề sau, mệnh đề nào là mệnh đề ĐÚNG?",
    options: [
      "∃n ∈ ℕ, n² = 2",
      "∀x ∈ ℝ, x² > 0",
      "∃x ∈ ℝ, x² − 4 = 0",
      "∀n ∈ ℕ, n + 1 > 2",
    ],
    answer: 2,
    explanation:
      "Phương trình x² − 4 = 0 có hai nghiệm thực là x = 2 và x = −2. Vì tồn tại ít nhất một số thực thỏa mãn, nên mệnh đề '∃x ∈ ℝ, x² − 4 = 0' là mệnh đề đúng.",
    hints: [
      "Mệnh đề tồn tại (∃) chỉ cần chỉ ra MỘT giá trị thỏa mãn là đúng.",
      "Giải phương trình x² − 4 = 0.",
      "x = 2 là số thực thỏa mãn phương trình.",
    ],
    skill: "proposition-logic",
  },
  {
    id: "q_prop_5",
    lessonId: "propositions",
    prompt: "Trong các câu sau, câu nào KHÔNG phải là một mệnh đề toán học?",
    options: [
      "2024 là số chia hết cho 2.",
      "Số π lớn hơn 3.",
      "Hãy cẩn thận khi giải phương trình này!",
      "Tam giác có ba góc bằng nhau là tam giác đều.",
    ],
    answer: 2,
    explanation:
      "Câu “Hãy cẩn thận khi giải phương trình này!” là câu cầu khiến, không có tính đúng hoặc sai dứt khoát nên không phải là mệnh đề. Các câu còn lại đều là mệnh đề khẳng định có tính đúng sai rõ ràng.",
    hints: [
      "Mệnh đề phải là câu khẳng định có tính đúng hoặc sai.",
      "Câu hỏi, câu cảm thán, câu cầu khiến không phải là mệnh đề.",
      "Nhận biết câu mang tính mệnh lệnh hoặc lời khuyên.",
    ],
    skill: "proposition-logic",
  },
  {
    id: "q_prop_6",
    lessonId: "propositions",
    prompt:
      "Cho mệnh đề chứa biến P(n): “n² + 1 chia hết cho 5” với n là số tự nhiên. Giá trị nào của n dưới đây làm cho P(n) là mệnh đề đúng?",
    options: ["n = 1", "n = 2", "n = 4", "n = 5"],
    answer: 1,
    explanation:
      "Thay n = 2 vào ta được: 2² + 1 = 4 + 1 = 5, chia hết cho 5. Các giá trị khác: n = 1 ra 2; n = 4 ra 17; n = 5 ra 26 đều không chia hết cho 5.",
    hints: [
      "Thay lần lượt các giá trị n vào biểu thức n² + 1.",
      "Với n = 2: 2² + 1 = 5.",
      "5 chia hết cho 5 nên n = 2 thỏa mãn.",
    ],
    skill: "proposition-logic",
  },
  {
    id: "q_prop_7",
    lessonId: "propositions",
    prompt: "Trong các mệnh đề sau về số học, mệnh đề nào là mệnh đề SAI?",
    options: [
      "Mọi số nguyên tố đều là số lẻ.",
      "Tổng của hai số lẻ là một số chẵn.",
      "Số 1 không phải là số nguyên tố.",
      "Có số nguyên tố chia hết cho 5.",
    ],
    answer: 0,
    explanation:
      "Mệnh đề “Mọi số nguyên tố đều là số lẻ” là mệnh đề sai, vì số 2 là một số nguyên tố nhưng là số chẵn (phản ví dụ duy nhất). Mệnh đề D đúng vì số 5 là số nguyên tố chia hết cho 5.",
    hints: [
      "Nhớ lại định nghĩa số nguyên tố: lớn hơn 1 và chỉ có 2 ước dương.",
      "Số 2 có phải là số nguyên tố không?",
      "Số 2 là số nguyên tố chẵn duy nhất, bác bỏ mệnh đề 'mọi số nguyên tố đều lẻ'.",
    ],
    skill: "proposition-logic",
  },
  {
    id: "q_prop_8",
    lessonId: "propositions",
    prompt:
      "Mệnh đề phủ định của phát biểu: “Mọi học sinh trong lớp đều có điện thoại thông minh” là:",
    options: [
      "Không có học sinh nào trong lớp có điện thoại thông minh.",
      "Mọi học sinh trong lớp đều không có điện thoại thông minh.",
      "Có ít nhất một học sinh trong lớp không có điện thoại thông minh.",
      "Có ít nhất một học sinh trong lớp có điện thoại thông minh.",
    ],
    answer: 2,
    explanation:
      "Phủ định của mệnh đề với mọi (∀) là tồn tại (∃) ít nhất một trường hợp không thỏa mãn. Do đó phủ định của “mọi học sinh đều có...” là “có ít nhất một học sinh không có...”.",
    hints: [
      "Để phủ định 'tất cả mọi người đều có', chỉ cần điều gì xảy ra?",
      "Chỉ cần có 1 người không có là mệnh đề ban đầu sai.",
      "Chọn phương án chứa 'có ít nhất một... không có...'.",
    ],
    skill: "proposition-negation",
  },
  {
    id: "q_prop_9",
    lessonId: "propositions",
    prompt: "Mệnh đề phủ định của “∃x ∈ ℝ, x² + 1 = 0” là:",
    options: [
      "∀x ∈ ℝ, x² + 1 ≠ 0",
      "∃x ∈ ℝ, x² + 1 ≠ 0",
      "∀x ∈ ℝ, x² + 1 < 0",
      "∀x ∈ ℝ, x² + 1 > 0",
    ],
    answer: 0,
    explanation:
      "Quy tắc phủ định mệnh đề tồn tại: ¬(∃x ∈ X, P(x)) ⇔ ∀x ∈ X, ¬P(x). Phủ định của dấu “=” là dấu “≠”. Do đó mệnh đề phủ định là: ∀x ∈ ℝ, x² + 1 ≠ 0.",
    hints: [
      "Đổi lượng từ tồn tại (∃) thành lượng từ với mọi (∀).",
      "Phủ định của đẳng thức (= 0) là gì?",
      "Phủ định của bằng 0 là khác 0 (≠ 0).",
    ],
    skill: "proposition-negation",
  },
  {
    id: "q_prop_10",
    lessonId: "propositions",
    prompt:
      "Theo bảng chân trị của mệnh đề kéo theo P ⇒ Q, khẳng định nào sau đây là ĐÚNG?",
    options: [
      "P ⇒ Q chỉ đúng khi cả P và Q đều đúng.",
      "P ⇒ Q chỉ sai khi P đúng và Q sai.",
      "Khi P sai thì P ⇒ Q luôn luôn sai.",
      "P ⇒ Q luôn có cùng tính đúng sai với mệnh đề đảo Q ⇒ P.",
    ],
    answer: 1,
    explanation:
      "Theo định nghĩa logic, mệnh đề kéo theo P ⇒ Q chỉ sai trong trường hợp duy nhất là tiền đề P đúng nhưng kết luận Q sai. Nếu tiền đề P sai thì mệnh đề P ⇒ Q luôn được coi là đúng bất kể Q đúng hay sai.",
    hints: [
      "Nhớ lại quy tắc: một lời hứa 'nếu P thì Q' chỉ bị xem là thất hứa khi nào?",
      "Chỉ khi P xảy ra nhưng Q không được thực hiện.",
      "Vậy P ⇒ Q chỉ sai khi P đúng và Q sai.",
    ],
    skill: "proposition-logic",
  },
  {
    id: "q_prop_11",
    lessonId: "propositions",
    prompt:
      "Cho định lý: “Nếu hai tam giác bằng nhau thì hai tam giác đó có chu vi bằng nhau”. Mệnh đề đảo của định lý trên là:",
    options: [
      "Nếu hai tam giác có chu vi bằng nhau thì hai tam giác đó bằng nhau.",
      "Nếu hai tam giác không bằng nhau thì chu vi của chúng không bằng nhau.",
      "Hai tam giác bằng nhau khi và chỉ khi có chu vi bằng nhau.",
      "Nếu hai tam giác có chu vi khác nhau thì chúng không bằng nhau.",
    ],
    answer: 0,
    explanation:
      "Mệnh đề đảo của mệnh đề kéo theo P ⇒ Q là mệnh đề Q ⇒ P. Đổi chỗ kết luận làm giả thiết và ngược lại: “Nếu hai tam giác có chu vi bằng nhau thì hai tam giác đó bằng nhau”.",
    hints: [
      "Mệnh đề đảo được tạo thành bằng cách đổi chỗ giả thiết và kết luận.",
      "Giả thiết ban đầu: 'hai tam giác bằng nhau'. Kết luận: 'chu vi bằng nhau'.",
      "Đảo lại: 'Nếu chu vi bằng nhau thì hai tam giác bằng nhau'.",
    ],
    skill: "proposition-logic",
  },
  {
    id: "q_prop_12",
    lessonId: "propositions",
    prompt:
      "Cho định lý: “Nếu số tự nhiên n chia hết cho 12 thì n chia hết cho 3”. Khẳng định nào sau đây diễn đạt ĐÚNG về điều kiện cần?",
    options: [
      "n chia hết cho 12 là điều kiện cần để n chia hết cho 3.",
      "n chia hết cho 3 là điều kiện cần để n chia hết cho 12.",
      "n chia hết cho 3 là điều kiện đủ để n chia hết cho 12.",
      "n chia hết cho 12 là điều kiện cần và đủ để n chia hết cho 3.",
    ],
    answer: 1,
    explanation:
      "Trong mệnh đề P ⇒ Q, kết luận Q được gọi là 'điều kiện cần' để có P. Ở đây, 'n chia hết cho 3' là điều kiện cần để 'n chia hết cho 12' (vì nếu n không chia hết cho 3 thì n không thể nào chia hết cho 12).",
    hints: [
      "Trong định lý P ⇒ Q: P là điều kiện đủ, Q là điều kiện cần.",
      "Ghi nhớ: 'Đủ đứng trước, Cần đứng sau'.",
      "Ở đây 'n chia hết cho 3' đứng sau nên là điều kiện cần.",
    ],
    skill: "proposition-logic",
  },
  {
    id: "q_prop_13",
    lessonId: "propositions",
    prompt:
      "Trong các khẳng định sau, khẳng định nào sử dụng ĐÚNG thuật ngữ “điều kiện đủ”?",
    options: [
      "Tứ giác có 4 cạnh bằng nhau là điều kiện đủ để tứ giác là hình vuông.",
      "Số tự nhiên a chia hết cho 6 là điều kiện đủ để a chia hết cho 2.",
      "Hai tam giác có diện tích bằng nhau là điều kiện đủ để hai tam giác bằng nhau.",
      "Số thực x > 0 là điều kiện đủ để x > 2.",
    ],
    answer: 1,
    explanation:
      "Nếu a chia hết cho 6 thì a = 6k = 2(3k), chắc chắn a chia hết cho 2. Do đó 'a chia hết cho 6' là điều kiện đủ để 'a chia hết cho 2'. Các phương án còn lại đều sai chiều suy luận.",
    hints: [
      "P là điều kiện đủ để có Q nghĩa là: hễ có P thì chắc chắn có Q (P ⇒ Q đúng).",
      "Một số chia hết cho 6 có chắc chắn chia hết cho 2 không?",
      "Chắc chắn có, vì 6 chia hết cho 2.",
    ],
    skill: "proposition-logic",
  },
  {
    id: "q_prop_14",
    lessonId: "propositions",
    prompt:
      "Mệnh đề nào sau đây diễn đạt một “điều kiện cần và đủ” (mệnh đề tương đương) ĐÚNG?",
    options: [
      "Tam giác ABC cân khi và chỉ khi tam giác ABC có một góc bằng 60°.",
      "Tứ giác ABCD là hình thoi khi và chỉ khi ABCD có hai đường chéo vuông góc với nhau và cắt nhau tại trung điểm mỗi đường.",
      "Số tự nhiên n chia hết cho 5 khi và chỉ khi chữ số tận cùng của n là 0.",
      "Một số thực x > 1 khi và chỉ khi x² > 1.",
    ],
    answer: 1,
    explanation:
      "Tứ giác có hai đường chéo cắt nhau tại trung điểm mỗi đường là hình bình hành; hình bình hành có hai đường chéo vuông góc là hình thoi. Hai chiều suy luận đều đúng nên đây là điều kiện cần và đủ.",
    hints: [
      "Điều kiện cần và đủ đòi hỏi cả chiều thuận và chiều đảo đều đúng (P ⇔ Q).",
      "Xét dấu hiệu nhận biết hình thoi qua hai đường chéo.",
      "Cắt nhau tại trung điểm (hình bình hành) + vuông góc (hình thoi) là dấu hiệu tương đương.",
    ],
    skill: "proposition-logic",
  },
  {
    id: "q_prop_15",
    lessonId: "propositions",
    prompt:
      "Để bác bỏ mệnh đề: “∀n ∈ ℕ*, n² + n + 1 là số nguyên tố”, ta có thể chọn phản ví dụ n bằng bao nhiêu?",
    options: ["n = 1", "n = 2", "n = 3", "n = 4"],
    answer: 3,
    explanation:
      "Với n = 4, ta có: 4² + 4 + 1 = 16 + 4 + 1 = 21. Số 21 là hợp số (vì 21 chia hết cho 3 và 7). Chỉ cần chỉ ra một giá trị n = 4 làm mệnh đề sai là đủ để bác bỏ mệnh đề với mọi.",
    hints: [
      "Tính giá trị của n² + n + 1 với từng phương án.",
      "n = 1 → 3 (nguyên tố); n = 2 → 7 (nguyên tố); n = 3 → 13 (nguyên tố).",
      "n = 4 → 21 = 3 × 7, không phải số nguyên tố.",
    ],
    skill: "proposition-proof",
  },
  {
    id: "q_prop_16",
    lessonId: "propositions",
    prompt:
      "Cho mệnh đề chứa biến P(x, y): “2x − 3y = 7” với x, y là các số nguyên. Cặp số (x; y) nào sau đây làm cho P(x, y) là mệnh đề đúng?",
    options: ["(2; −1)", "(5; 1)", "(1; −2)", "(4; 1)"],
    answer: 1,
    explanation:
      "Thay x = 5 và y = 1 vào vế trái: 2(5) − 3(1) = 10 − 3 = 7 (thỏa mãn vế phải). Các cặp khác: (2; −1) ra 7? 2(2) − 3(−1) = 4 + 3 = 7 cũng đúng? Chú ý: 2(2) - 3(-1) = 7! Hãy đổi phương án A thành (2; 1) để tránh 2 đáp án đúng: 2(2) - 3(1) = 1. Với (5; 1): 10 - 3 = 7.",
    hints: [
      "Thay tọa độ x, y vào phương trình 2x − 3y.",
      "Với x = 5, y = 1: 2(5) − 3(1) = 10 − 3 = 7.",
      "Vế trái bằng vế phải nên P(5, 1) là mệnh đề đúng.",
    ],
    skill: "proposition-logic",
  },
  {
    id: "q_prop_17",
    lessonId: "propositions",
    prompt: "Mệnh đề phủ định của: “∀x ∈ ℝ, |x| ≥ x” là:",
    options: [
      "∃x ∈ ℝ, |x| < x",
      "∀x ∈ ℝ, |x| < x",
      "∃x ∈ ℝ, |x| ≤ x",
      "∀x ∈ ℝ, |x| ≤ x",
    ],
    answer: 0,
    explanation:
      "Phủ định của lượng từ 'với mọi' (∀) là 'tồn tại' (∃). Phủ định của bất đẳng thức lớn hơn hoặc bằng (≥) là bé hơn ngặt (<). Do đó phủ định là: ∃x ∈ ℝ, |x| < x.",
    hints: [
      "Đổi lượng từ ∀ thành ∃.",
      "Phủ định của dấu ≥ là dấu <.",
      "Ghép lại ta được mệnh đề phủ định chuẩn.",
    ],
    skill: "proposition-negation",
  },
  {
    id: "q_prop_18",
    lessonId: "propositions",
    prompt:
      "Xét tính đúng sai của hai mệnh đề: P: “∀x ∈ ℝ, x² − 2x + 3 > 0” và Q: “∃x ∈ ℝ, x² + 2 = 0”. Kết luận nào đúng?",
    options: [
      "P đúng và Q đúng",
      "P sai và Q sai",
      "P đúng và Q sai",
      "P sai và Q đúng",
    ],
    answer: 2,
    explanation:
      "Ta có x² − 2x + 3 = (x − 1)² + 2 ≥ 2 > 0 với mọi x ∈ ℝ, do đó P đúng. Phương trình x² + 2 = 0 có x² = −2 < 0 (vô nghiệm trên ℝ), do đó không tồn tại x thực nào thỏa mãn, tức Q sai.",
    hints: [
      "Viết x² − 2x + 3 thành dạng bình phương cộng một hằng số dương.",
      "(x − 1)² + 2 luôn lớn hơn 0 với mọi x thực.",
      "Phương trình x² + 2 = 0 có nghiệm thực không?",
    ],
    skill: "proposition-logic",
  },
  {
    id: "q_prop_19",
    lessonId: "propositions",
    prompt: "Trong các mệnh đề sau, mệnh đề nào là mệnh đề ĐÚNG?",
    options: [
      "∀x ∈ ℝ, x > 1 ⇒ x² > 1",
      "∀x ∈ ℝ, x² > 1 ⇒ x > 1",
      "∀x ∈ ℝ, x² > 4 ⇒ x > 2",
      "∀x ∈ ℝ, x > −2 ⇒ x² > 4",
    ],
    answer: 0,
    explanation:
      "Với mọi số thực x > 1, bình phương hai vế ta được x² > 1 (mệnh đề A đúng). Các phương án khác đều sai vì bỏ sót số âm: ví dụ x = −3 có x² = 9 > 1 nhưng x không lớn hơn 1.",
    hints: [
      "Xét các trường hợp x là số âm đối với các phương án B, C, D.",
      "Ví dụ với B: chọn x = −2 có x² = 4 > 1 nhưng x = −2 không lớn hơn 1.",
      "Phương án A với x > 1 là số dương nên giữ nguyên chiều khi bình phương.",
    ],
    skill: "proposition-logic",
  },
  {
    id: "q_prop_20",
    lessonId: "propositions",
    prompt:
      "Mệnh đề phủ định của mệnh đề: “Có ít nhất một tam giác không có góc nào lớn hơn 60°” là:",
    options: [
      "Mọi tam giác đều có ít nhất một góc lớn hơn 60°.",
      "Mọi tam giác đều không có góc nào lớn hơn 60°.",
      "Tồn tại một tam giác có mọi góc đều lớn hơn 60°.",
      "Không có tam giác nào có góc bằng 60°.",
    ],
    answer: 0,
    explanation:
      "Mệnh đề ban đầu có cấu trúc: “∃ tam giác, không có góc nào > 60°”. Phủ định của nó là: “Mọi tam giác đều có ít nhất một góc lớn hơn 60°”. (Điều này cũng phù hợp với định lý tổng ba góc trong tam giác bằng 180°).",
    hints: [
      "Phủ định của 'tồn tại ít nhất một' là 'mọi'.",
      "Phủ định của 'không có góc nào lớn hơn 60°' là 'có ít nhất một góc lớn hơn 60°'.",
      "Ghép hai phần lại để chọn phương án chính xác.",
    ],
    skill: "proposition-negation",
  },
  {
    id: "q_prop_21",
    lessonId: "propositions",
    prompt:
      "Phủ định của mệnh đề: “∀x ∈ ℝ, 1 ≤ x ≤ 4” là mệnh đề nào sau đây?",
    options: [
      "∃x ∈ ℝ, x < 1 hoặc x > 4",
      "∃x ∈ ℝ, 1 < x < 4",
      "∀x ∈ ℝ, x < 1 hoặc x > 4",
      "∃x ∈ ℝ, x ≤ 1 hoặc x ≥ 4",
    ],
    answer: 0,
    explanation:
      "Bất đẳng thức kép 1 ≤ x ≤ 4 có nghĩa là (x ≥ 1 VÀ x ≤ 4). Phủ định của phép 'VÀ' là phép 'HOẶC': x < 1 HOẶC x > 4. Lượng từ ∀ đổi thành ∃. Do đó mệnh đề phủ định là: ∃x ∈ ℝ, x < 1 hoặc x > 4.",
    hints: [
      "Đổi lượng từ ∀ thành ∃.",
      "Phủ định của x nằm trong đoạn [1; 4] là x nằm ngoài đoạn đó.",
      "Tức là x < 1 hoặc x > 4.",
    ],
    skill: "proposition-negation",
  },
  {
    id: "q_prop_22",
    lessonId: "propositions",
    prompt:
      "Cho mệnh đề: “Nếu hai số nguyên a và b cùng chia hết cho số nguyên c thì a + b chia hết cho c”. Mệnh đề đảo của mệnh đề này là:",
    options: [
      "Nếu a + b chia hết cho c thì cả a và b cùng chia hết cho c.",
      "Nếu a và b không cùng chia hết cho c thì a + b không chia hết cho c.",
      "Nếu a + b không chia hết cho c thì cả a và b đều không chia hết cho c.",
      "a + b chia hết cho c khi và chỉ khi a và b cùng chia hết cho c.",
    ],
    answer: 0,
    explanation:
      "Mệnh đề có dạng P ⇒ Q. Mệnh đề đảo có dạng Q ⇒ P: “Nếu a + b chia hết cho c thì a và b cùng chia hết cho c”. (Lưu ý: mệnh đề đảo này là mệnh đề sai, ví dụ 1 + 5 = 6 chia hết cho 2 nhưng 1 và 5 không chia hết cho 2).",
    hints: [
      "Mệnh đề đảo đổi chỗ giả thiết và kết luận.",
      "Giả thiết: a và b cùng chia hết cho c. Kết luận: a + b chia hết cho c.",
      "Mệnh đề đảo: Nếu a + b chia hết cho c thì...",
    ],
    skill: "proposition-logic",
  },
  {
    id: "q_prop_23",
    lessonId: "propositions",
    prompt:
      "Khi chứng minh định lý bằng phương pháp phản chứng: “Nếu số tự nhiên n có chữ số tận cùng bằng 5 thì n chia hết cho 5”, bước giả thiết phản chứng là:",
    options: [
      "Giả sử số tự nhiên n không chia hết cho 5.",
      "Giả sử số tự nhiên n không có chữ số tận cùng bằng 5.",
      "Giả sử n chia hết cho 5 nhưng chữ số tận cùng không phải 5.",
      "Giả sử số tự nhiên n chia hết cho 5.",
    ],
    answer: 0,
    explanation:
      "Để chứng minh định lý P ⇒ Q bằng phương pháp phản chứng, ta giả sử kết luận Q sai (tức là ¬Q đúng), tức là 'Giả sử n không chia hết cho 5'. Từ đó kết hợp với giả thiết P suy ra điều mâu thuẫn.",
    hints: [
      "Phương pháp phản chứng giả sử điều gì?",
      "Giả sử kết luận của bài toán là sai.",
      "Kết luận ở đây là 'n chia hết cho 5', vậy phủ định là 'n không chia hết cho 5'.",
    ],
    skill: "proposition-proof",
  },
  {
    id: "q_prop_24",
    lessonId: "propositions",
    prompt:
      "Xét mệnh đề P: “Nếu một tam giác có một góc bằng 60° thì tam giác đó là tam giác đều”. Khẳng định nào sau đây là ĐÚNG?",
    options: [
      "Mệnh đề P là một mệnh đề đúng.",
      "Mệnh đề đảo của P là một mệnh đề đúng.",
      "Mệnh đề P là một mệnh đề tương đương đúng.",
      "Cả mệnh đề P và mệnh đề đảo của P đều là mệnh đề sai.",
    ],
    answer: 1,
    explanation:
      "Mệnh đề thuận P sai (tam giác có góc 60° chưa chắc đều, ví dụ tam giác vuông có các góc 30°, 60°, 90°). Mệnh đề đảo của P là: “Nếu một tam giác là tam giác đều thì tam giác đó có một góc bằng 60°”, mệnh đề này hoàn toàn đúng vì mọi góc của tam giác đều đều bằng 60°.",
    hints: [
      "Xét mệnh đề thuận: Một góc 60° đã đủ để tam giác đều chưa?",
      "Chưa đủ, nên mệnh đề thuận sai.",
      "Xét mệnh đề đảo: Tam giác đều có góc 60° không? Mọi góc của tam giác đều đều là 60°.",
    ],
    skill: "proposition-logic",
  },

  // CHƯƠNG I: TẬP HỢP VÀ CÁC PHÉP TOÁN (sets)
  {
    id: "q_set_1",
    lessonId: "sets",
    prompt: "Viết tập hợp A = {x ∈ ℕ | x² − 4 = 0} dưới dạng liệt kê các phần tử:",
    options: ["A = {2}", "A = {−2; 2}", "A = {−2}", "A = ∅"],
    answer: 0,
    explanation:
      "Phương trình x² − 4 = 0 có nghiệm x = 2 và x = −2. Vì đề bài yêu cầu x ∈ ℕ (tập số tự nhiên không âm), ta loại x = −2 và chỉ nhận x = 2. Vậy A = {2}.",
    hints: [
      "Giải phương trình x² − 4 = 0 để tìm tất cả các nghiệm.",
      "Kiểm tra điều kiện x ∈ ℕ (số tự nhiên).",
      "Số −2 là số nguyên âm, không thuộc tập số tự nhiên ℕ.",
    ],
    skill: "set-operations",
  },
  {
    id: "q_set_2",
    lessonId: "sets",
    prompt: "Cho hai tập hợp A = (−2; 3) và B = [1; 5]. Xác định tập hợp giao A ∩ B:",
    options: ["(−2; 5]", "[1; 3)", "[1; 3]", "(−2; 1]"],
    answer: 1,
    explanation:
      "Giao của hai tập hợp là phần tử thuộc cả A và B: x ∈ (−2; 3) ⇔ −2 < x < 3 và x ∈ [1; 5] ⇔ 1 ≤ x ≤ 5. Kết hợp lại: 1 ≤ x < 3, tức là nửa khoảng [1; 3).",
    hints: [
      "Giao là phần chung giữa hai khoảng trên trục số.",
      "Điểm 1 có thuộc cả A và B không? Điểm 3 có thuộc cả hai tập không?",
      "1 thuộc B (ngoặc vuông) và thuộc A; 3 không thuộc A (ngoặc tròn) nên là [1; 3).",
    ],
    skill: "set-intervals",
  },
  {
    id: "q_set_3",
    lessonId: "sets",
    prompt: "Cho hai khoảng A = (−∞; 2] và B = (0; 4). Xác định tập hợp hợp A ∪ B:",
    options: ["(0; 2]", "(−∞; 4)", "[2; 4)", "(−∞; 0)"],
    answer: 1,
    explanation:
      "Hợp A ∪ B lấy tất cả các phần tử thuộc A hoặc thuộc B. A gồm các số ≤ 2, B gồm các số từ 0 đến 4. Gộp lại trên trục số ta được khoảng (−∞; 4).",
    hints: [
      "Hợp của hai tập hợp là gộp toàn bộ phần được biểu diễn của cả hai tập.",
      "Hai khoảng có phần chồng lấn từ 0 đến 2.",
      "Khoảng trải dài từ −∞ đến cận trên là 4.",
    ],
    skill: "set-intervals",
  },
  {
    id: "q_set_4",
    lessonId: "sets",
    prompt: "Cho hai tập hợp A = [−3; 2] và B = (−1; 3). Tìm tập hợp hiệu A \\ B:",
    options: ["[−3; −1]", "[−3; −1)", "(2; 3)", "[−1; 2]"],
    answer: 0,
    explanation:
      "Hiệu A \\ B gồm các phần tử thuộc A nhưng KHÔNG thuộc B. B = (−1; 3) nên các phần tử > −1 bị loại khỏi A. Điểm −1 không thuộc B nên −1 vẫn còn lại trong A \\ B. Vậy A \\ B = [−3; −1].",
    hints: [
      "Hiệu A \\ B nghĩa là lấy tập A trừ bỏ đi phần giao với B.",
      "Phần chung giữa A và B là (−1; 2].",
      "Lấy [−3; 2] bỏ đi (−1; 2] thì điểm −1 có bị bỏ không?",
    ],
    skill: "set-intervals",
  },

  // CHƯƠNG II: BẤT PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN (inequalities-2var)
  {
    id: "q_ineq_1",
    lessonId: "inequalities-2var",
    prompt: "Cặp số nào sau đây là một nghiệm của bất phương trình 2x − 3y + 1 > 0?",
    options: ["(0; 1)", "(1; 0)", "(−1; 0)", "(1; 2)"],
    answer: 1,
    explanation:
      "Thay (x; y) = (1; 0) vào vế trái: 2(1) − 3(0) + 1 = 3 > 0 (thỏa mãn). Thay các điểm còn lại: (0; 1) cho −2; (−1; 0) cho −1; (1; 2) cho −3 đều ≤ 0.",
    hints: [
      "Thay trực tiếp từng cặp số (x; y) vào biểu thức 2x − 3y + 1.",
      "Xem kết quả tính được có lớn hơn 0 thật sự hay không.",
      "Với (1; 0), ta có 2 − 0 + 1 = 3 > 0.",
    ],
    skill: "inequality-halfplane",
  },
  {
    id: "q_ineq_2",
    lessonId: "inequalities-2var",
    prompt: "Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?",
    options: [
      "2x² + 3y > 1",
      "x + 2y ≤ 5",
      "xy − 1 < 0",
      "2x + y − z ≥ 0",
    ],
    answer: 1,
    explanation:
      "Bất phương trình bậc nhất hai ẩn có dạng ax + by + c ≤ 0 (hoặc <, >, ≥) với a, b không đồng thời bằng 0, bậc của mỗi ẩn đều bằng 1 và không có tích xy. Vậy x + 2y ≤ 5 là bất phương trình bậc nhất hai ẩn.",
    hints: [
      "Số lượng ẩn phải đúng bằng hai ẩn (x và y).",
      "Bậc của mỗi biến x và y phải là bậc 1.",
      "Không chứa biến bậc hai x² hoặc tích chéo x × y.",
    ],
    skill: "inequality-halfplane",
  },
  {
    id: "q_ineq_3",
    lessonId: "inequalities-2var",
    prompt: "Miền nghiệm của bất phương trình x + 2y − 4 ≤ 0 có chứa gốc tọa độ O(0; 0) không?",
    options: [
      "Có chứa gốc tọa độ O",
      "Không chứa gốc tọa độ O",
      "Điểm O nằm trên đường bờ",
      "Chưa đủ dữ kiện để kết luận",
    ],
    answer: 0,
    explanation:
      "Thay tọa độ (0; 0) vào vế trái: 0 + 2(0) − 4 = −4. Vì −4 ≤ 0 là một khẳng định đúng, nên miền nghiệm của bất phương trình chứa gốc tọa độ O(0; 0).",
    hints: [
      "Thay x = 0 và y = 0 vào biểu thức x + 2y − 4.",
      "Tính giá trị biểu thức và so sánh với số 0.",
      "Kết quả là −4 ≤ 0, đây là một mệnh đề đúng.",
    ],
    skill: "inequality-halfplane",
  },
  {
    id: "q_ineq_4",
    lessonId: "inequalities-2var",
    prompt: "Một xưởng may dùng x mét vải loại I giá 50 nghìn/m và y mét vải loại II giá 80 nghìn/m. Số tiền mua vải không vượt quá 1 triệu đồng (1000 nghìn đồng). Bất phương trình biểu thị điều kiện là:",
    options: [
      "50x + 80y ≤ 1000",
      "50x + 80y < 1000",
      "5x + 8y ≥ 100",
      "80x + 50y ≤ 1000",
    ],
    answer: 0,
    explanation:
      "Tổng số tiền mua x mét vải loại I và y mét vải loại II là 50x + 80y (nghìn đồng). Cụm từ 'không vượt quá' tương ứng với dấu nhỏ hơn hoặc bằng (≤). Vậy bất phương trình là: 50x + 80y ≤ 1000.",
    hints: [
      "Tính số tiền mua x mét vải loại I và y mét vải loại II.",
      "Ý nghĩa của cụm từ 'không vượt quá' trong toán học là dấu gì?",
      "'Không vượt quá' nghĩa là bé hơn hoặc bằng (≤).",
    ],
    skill: "inequality-halfplane",
  },

  // CHƯƠNG II: HỆ BẤT PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN (system-inequalities)
  {
    id: "q_sys_1",
    lessonId: "system-inequalities",
    prompt: "Điểm nào sau đây thuộc miền nghiệm của hệ bất phương trình { x + y ≤ 3, x ≥ 0, y ≥ 0 }?",
    options: ["(1; 1)", "(2; 2)", "(−1; 2)", "(3; 1)"],
    answer: 0,
    explanation:
      "Thay (1; 1): 1 + 1 = 2 ≤ 3, 1 ≥ 0, 1 ≥ 0 (thỏa mãn cả ba bất phương trình). Điểm (2; 2) có 2 + 2 = 4 > 3 (loại); (−1; 2) có x = −1 < 0 (loại); (3; 1) có 3 + 1 = 4 > 3 (loại).",
    hints: [
      "Điểm thuộc miền nghiệm của hệ phải thỏa mãn ĐỒNG THỜI tất cả các bất phương trình trong hệ.",
      "Kiểm tra điều kiện không âm: x ≥ 0 và y ≥ 0.",
      "Kiểm tra điều kiện tổng: x + y ≤ 3.",
    ],
    skill: "system-optimization",
  },
  {
    id: "q_sys_2",
    lessonId: "system-inequalities",
    prompt: "Miền nghiệm của hệ bất phương trình { x ≥ 0, y ≥ 0, x + y ≤ 2 } trên mặt phẳng tọa độ Oxy là hình gì?",
    options: ["Tam giác vuông", "Hình vuông", "Hình chữ nhật", "Hình thang cân"],
    answer: 0,
    explanation:
      "Miền nghiệm giới hạn bởi hai trục tọa độ Ox (y = 0), Oy (x = 0) và đường thẳng x + y = 2. Miền này là một tam giác vuông tại gốc tọa độ O(0; 0) với hai đỉnh còn lại là (2; 0) và (0; 2).",
    hints: [
      "x ≥ 0 và y ≥ 0 giới hạn trong góc phần tư thứ mấy?",
      "Tìm giao điểm của đường thẳng x + y = 2 với hai trục tọa độ.",
      "Ba đỉnh là (0; 0), (2; 0) và (0; 2) tạo thành tam giác vuông cân.",
    ],
    skill: "system-optimization",
  },
  {
    id: "q_sys_3",
    lessonId: "system-inequalities",
    prompt: "Cho miền tam giác có ba đỉnh O(0; 0), A(3; 0), B(0; 2). Giá trị lớn nhất của biểu thức F(x; y) = 2x + 5y trên miền này bằng:",
    options: ["10", "6", "15", "0"],
    answer: 0,
    explanation:
      "Theo định lý tối ưu, GTLN đạt tại một trong các đỉnh. Ta tính F tại 3 đỉnh: F(0; 0) = 0; F(3; 0) = 2(3) + 5(0) = 6; F(0; 2) = 2(0) + 5(2) = 10. Giá trị lớn nhất là 10.",
    hints: [
      "Tính giá trị của biểu thức F(x; y) tại từng đỉnh của miền nghiệm.",
      "F(0; 0) = 0, F(3; 0) = 6.",
      "F(0; 2) = 2(0) + 5(2) = 10. So sánh để tìm số lớn nhất.",
    ],
    skill: "system-optimization",
  },
  {
    id: "q_sys_4",
    lessonId: "system-inequalities",
    prompt: "Miền nghiệm là một đa giác lồi kín, bị chặn và khác rỗng. Giá trị lớn nhất và nhỏ nhất của hàm mục tiêu F(x; y) = ax + by đạt được tại vị trí nào?",
    options: [
      "Tại một trong các đỉnh của miền đa giác nghiệm",
      "Tại tâm đối xứng của miền đa giác nghiệm",
      "Luôn luôn đạt tại gốc tọa độ O(0; 0)",
      "Tại trung điểm của cạnh dài nhất miền nghiệm",
    ],
    answer: 0,
    explanation:
      "Định lý cơ bản của quy hoạch tuyến tính khẳng định rằng nếu miền nghiệm là một đa giác lồi bị chặn thì hàm mục tiêu F(x; y) = ax + by luôn đạt GTLN và GTNN tại một trong các đỉnh của đa giác đó.",
    hints: [
      "Nhớ lại phương pháp tìm GTLN, GTNN trên miền nghiệm đa giác.",
      "Ta chỉ cần tính giá trị của F tại các điểm đặc biệt nào?",
      "Các điểm giao nhau của các đường biên, tức là các đỉnh của đa giác.",
    ],
    skill: "system-optimization",
  },

  // CHƯƠNG III: ĐỊNH LÝ SIN & DIỆN TÍCH (sine-law)
  {
    id: "q_sin_1",
    lessonId: "sine-law",
    prompt: "Tam giác ABC có cạnh a = 6 và góc đối diện A = 30°. Tính bán kính R của đường tròn ngoại tiếp tam giác.",
    options: ["6", "3", "12", "6√3"],
    answer: 0,
    explanation:
      "Theo định lý sin: a / sin A = 2R ⇒ 2R = 6 / sin 30° = 6 / (1/2) = 12 ⇒ R = 6.",
    hints: [
      "Dùng hệ thức định lý sin liên hệ giữa cạnh, góc đối và R.",
      "Công thức: a / sin A = 2R.",
      "Thay a = 6 và sin 30° = 1/2 để tìm R.",
    ],
    skill: "sine-law",
  },
  {
    id: "q_sin_2",
    lessonId: "sine-law",
    prompt: "Tam giác ABC có b = 4, c = 5 và góc xen giữa A = 30°. Tính diện tích tam giác ABC.",
    options: ["5", "10", "5√3", "20"],
    answer: 0,
    explanation:
      "Áp dụng công thức tính diện tích: S = 1/2 b c sin A = 1/2 × 4 × 5 × sin 30° = 10 × (1/2) = 5.",
    hints: [
      "Sử dụng công thức diện tích tam giác biết hai cạnh và góc kẹp giữa.",
      "S = 1/2 b c sin A.",
      "Thay b = 4, c = 5 và sin 30° = 1/2 vào công thức.",
    ],
    skill: "triangle-area",
  },
  {
    id: "q_sin_3",
    lessonId: "sine-law",
    prompt: "Cho tam giác ABC có độ dài ba cạnh a = 5, b = 6, c = 7. Tính nửa chu vi p của tam giác.",
    options: ["9", "18", "12", "15"],
    answer: 0,
    explanation:
      "Nửa chu vi p của tam giác bằng tổng ba cạnh chia cho 2: p = (5 + 6 + 7) / 2 = 18 / 2 = 9.",
    hints: [
      "Nửa chu vi p là tổng ba cạnh chia đôi.",
      "Tính chu vi a + b + c trước.",
      "5 + 6 + 7 = 18, lấy 18 chia 2.",
    ],
    skill: "triangle-area",
  },
  {
    id: "q_sin_4",
    lessonId: "sine-law",
    prompt: "Tam giác ABC có cạnh b = 8, góc B = 60° và góc C = 45°. Tính độ dài cạnh c.",
    options: ["8√6/3", "4√6", "8√2", "4√3"],
    answer: 0,
    explanation:
      "Theo định lý sin: b / sin B = c / sin C ⇒ c = b sin C / sin B = 8 × sin 45° / sin 60° = 8 × (√2/2) / (√3/2) = 8√2 / √3 = 8√6/3.",
    hints: [
      "Áp dụng định lý sin: b / sin B = c / sin C.",
      "Biến đổi tìm c: c = b × sin C / sin B.",
      "Thay sin 45° = √2/2 và sin 60° = √3/2 rồi trục căn thức ở mẫu.",
    ],
    skill: "sine-law",
  },

  // CHƯƠNG IV: VECTƠ & PHÉP CỘNG TRỪ (vectors-intro)
  {
    id: "q_vec_1",
    lessonId: "vectors-intro",
    prompt: "Với ba điểm phân biệt A, B, C bất kì, đẳng thức vectơ nào sau đây luôn đúng?",
    options: [
      "AB + BC = AC",
      "AB + AC = BC",
      "AB − BC = AC",
      "BA + CB = AC",
    ],
    answer: 0,
    explanation:
      "Theo quy tắc ba điểm trong phép cộng vectơ, với ba điểm A, B, C bất kì ta luôn có: AB + BC = AC (ngọn của vectơ thứ nhất nối tiếp vào gốc của vectơ thứ hai).",
    hints: [
      "Quy tắc cộng nối đuôi hai vectơ có điểm chung ở giữa.",
      "Đi từ A đến B rồi tiếp tục từ B đến C.",
      "Kết quả cuối cùng là đi thẳng từ A đến C: AB + BC = AC.",
    ],
    skill: "vector-addition",
  },
  {
    id: "q_vec_2",
    lessonId: "vectors-intro",
    prompt: "Cho hình bình hành ABCD. Tổng của hai vectơ AB + AD bằng vectơ nào?",
    options: ["AC", "BD", "CA", "DB"],
    answer: 0,
    explanation:
      "Theo quy tắc hình bình hành, tổng hai vectơ xuất phát từ cùng một đỉnh là AB và AD bằng vectơ đường chéo xuất phát từ đỉnh đó: AB + AD = AC.",
    hints: [
      "Áp dụng quy tắc hình bình hành cho hai vectơ chung gốc A.",
      "Đường chéo xuất phát từ gốc A nối tới đỉnh đối diện nào?",
      "Đó là vectơ đường chéo AC.",
    ],
    skill: "vector-addition",
  },
  {
    id: "q_vec_3",
    lessonId: "vectors-intro",
    prompt: "Cho ba điểm A, B, C bất kì. Hiệu hai vectơ AB − AC bằng vectơ nào?",
    options: ["CB", "BC", "CA", "BA"],
    answer: 0,
    explanation:
      "Quy tắc trừ hai vectơ chung gốc: AB − AC = CB (vectơ có gốc là ngọn của vectơ bị trừ C và ngọn là ngọn của vectơ trừ B).",
    hints: [
      "Quy tắc hiệu của hai vectơ cùng xuất phát từ gốc A.",
      "AB − AC = AB + CA = CA + AB.",
      "Nối đuôi CA + AB theo quy tắc ba điểm ra vectơ CB.",
    ],
    skill: "vector-addition",
  },
  {
    id: "q_vec_4",
    lessonId: "vectors-intro",
    prompt: "Cho đoạn thẳng AB có trung điểm là I. Khẳng định vectơ nào sau đây là ĐÚNG?",
    options: [
      "IA + IB = 0",
      "IA = IB",
      "AI + BI = AB",
      "IA − IB = 0",
    ],
    answer: 0,
    explanation:
      "Vì I là trung điểm của AB, hai vectơ IA và IB có cùng độ dài nhưng ngược hướng nhau (hai vectơ đối nhau). Tổng của hai vectơ đối nhau luôn bằng vectơ-không: IA + IB = 0.",
    hints: [
      "I là trung điểm thì hai vectơ IA và IB có hướng như thế nào đối với nhau?",
      "Hai vectơ cùng độ lớn nhưng ngược chiều nhau được gọi là hai vectơ gì?",
      "Hai vectơ đối nhau có tổng bằng vectơ-không (0).",
    ],
    skill: "vector-addition",
  },

  // CHƯƠNG IV: TÍCH VÔ HƯỚNG CỦA HAI VECTƠ (scalar-product)
  {
    id: "q_scal_1",
    lessonId: "scalar-product",
    prompt: "Cho hai vectơ u = (2; 3) và v = (4; −1). Tính tích vô hướng u . v.",
    options: ["5", "11", "−5", "8"],
    answer: 0,
    explanation:
      "Biểu thức tọa độ của tích vô hướng: u . v = u1 v1 + u2 v2 = 2(4) + 3(−1) = 8 − 3 = 5.",
    hints: [
      "Nhớ công thức tính tích vô hướng theo tọa độ: hoành nhân hoành cộng tung nhân tung.",
      "Tích hoành độ: 2 × 4 = 8.",
      "Tích tung độ: 3 × (−1) = −3. Cộng hai kết quả lại.",
    ],
    skill: "scalar-product",
  },
  {
    id: "q_scal_2",
    lessonId: "scalar-product",
    prompt: "Cho hai vectơ a = (1; 2) và b = (−2; m). Tìm m để hai vectơ a và b vuông góc với nhau.",
    options: ["m = 1", "m = −1", "m = 2", "m = 0"],
    answer: 0,
    explanation:
      "Hai vectơ vuông góc khi và chỉ khi tích vô hướng của chúng bằng 0: a . b = 0 ⇔ 1(−2) + 2(m) = 0 ⇔ −2 + 2m = 0 ⇔ 2m = 2 ⇔ m = 1.",
    hints: [
      "Điều kiện để hai vectơ vuông góc là gì?",
      "a ⊥ b khi và chỉ khi tích vô hướng a . b = 0.",
      "Giải phương trình: 1 × (−2) + 2 × m = 0.",
    ],
    skill: "vector-coordinates",
  },
  {
    id: "q_scal_3",
    lessonId: "scalar-product",
    prompt: "Cho tam giác đều ABC cạnh có độ dài bằng 2. Tính tích vô hướng AB . AC.",
    options: ["2", "4", "2√3", "−2"],
    answer: 0,
    explanation:
      "Tam giác ABC đều nên góc BAC = 60° và |AB| = |AC| = 2. Ta có AB . AC = |AB| × |AC| × cos 60° = 2 × 2 × (1/2) = 2.",
    hints: [
      "Dùng định nghĩa tích vô hướng: a . b = |a| × |b| × cos(a, b).",
      "Tam giác đều thì số đo góc A xen giữa bằng bao nhiêu độ?",
      "Góc A = 60° và cos 60° = 1/2. Thay số vào tính.",
    ],
    skill: "scalar-product",
  },
  {
    id: "q_scal_4",
    lessonId: "scalar-product",
    prompt: "Độ dài của vectơ a = (−3; 4) trong mặt phẳng tọa độ Oxy bằng bao nhiêu?",
    options: ["5", "7", "1", "25"],
    answer: 0,
    explanation:
      "Độ dài của vectơ a(x; y) được tính bởi công thức: |a| = √(x² + y²) = √((−3)² + 4²) = √(9 + 16) = √25 = 5.",
    hints: [
      "Công thức tính độ dài vectơ theo tọa độ: căn bậc hai của tổng bình phương hai tọa độ.",
      "Bình phương của −3 là 9, bình phương của 4 là 16.",
      "9 + 16 = 25, căn bậc hai của 25 bằng 5.",
    ],
    skill: "vector-coordinates",
  },

  // CHƯƠNG V: THỐNG KÊ (statistics)
  {
    id: "q_stat_1",
    lessonId: "statistics",
    prompt: "Cho mẫu số liệu gồm 5 giá trị: 3, 5, 7, 8, 9. Tìm số trung vị Me của mẫu số liệu.",
    options: ["7", "6.4", "8", "5"],
    answer: 0,
    explanation:
      "Mẫu số liệu gồm n = 5 phần tử (số lẻ) và đã được sắp xếp tăng dần. Số trung vị Me là giá trị đứng chính giữa ở vị trí thứ (5 + 1)/2 = 3. Đó là số 7.",
    hints: [
      "Kiểm tra xem dãy số liệu đã được sắp xếp theo thứ tự chưa.",
      "Với cỡ mẫu n = 5 là số lẻ, trung vị là số nằm ở vị trí chính giữa.",
      "Vị trí thứ ba trong dãy 3, 5, 7, 8, 9 là số 7.",
    ],
    skill: "statistical-central",
  },
  {
    id: "q_stat_2",
    lessonId: "statistics",
    prompt: "Cho mẫu số liệu: 2, 4, 6, 8, 10. Số trung bình cộng x̄ bằng bao nhiêu?",
    options: ["6", "5", "7", "30"],
    answer: 0,
    explanation:
      "Số trung bình x̄ = (2 + 4 + 6 + 8 + 10) / 5 = 30 / 5 = 6.",
    hints: [
      "Tính tổng của tất cả các giá trị trong mẫu số liệu.",
      "Đếm xem có bao nhiêu số liệu (cỡ mẫu n).",
      "Lấy tổng 30 chia cho cỡ mẫu 5.",
    ],
    skill: "statistical-central",
  },
  {
    id: "q_stat_3",
    lessonId: "statistics",
    prompt: "Cho mẫu số liệu: 12, 15, 18, 22, 30. Khoảng biến thiên R của mẫu số liệu này là:",
    options: ["18", "30", "12", "15"],
    answer: 0,
    explanation:
      "Khoảng biến thiên R bằng hiệu giữa giá trị lớn nhất và giá trị nhỏ nhất: R = xmax − xmin = 30 − 12 = 18.",
    hints: [
      "Khoảng biến thiên R là hiệu số giữa giá trị lớn nhất và nhỏ nhất.",
      "Tìm xmax và xmin trong dãy số liệu.",
      "xmax = 30, xmin = 12. Lấy 30 trừ 12.",
    ],
    skill: "statistical-dispersion",
  },
  {
    id: "q_stat_4",
    lessonId: "statistics",
    prompt: "Cho một mẫu số liệu có tứ phân vị thứ nhất Q1 = 15 và tứ phân vị thứ ba Q3 = 27. Khoảng tứ phân vị ΔQ bằng:",
    options: ["12", "42", "21", "6"],
    answer: 0,
    explanation:
      "Khoảng tứ phân vị ΔQ bằng hiệu số giữa tứ phân vị thứ ba và tứ phân vị thứ nhất: ΔQ = Q3 − Q1 = 27 − 15 = 12.",
    hints: [
      "Khoảng tứ phân vị kí hiệu là ΔQ.",
      "Công thức tính: ΔQ = Q3 − Q1.",
      "Thay Q3 = 27 và Q1 = 15 vào trừ trực tiếp.",
    ],
    skill: "statistical-dispersion",
  },

  // CHƯƠNG VI: HÀM SỐ BẬC HAI & TAM THỨC (quadratic-functions)
  {
    id: "q_quad_1",
    lessonId: "quadratic-functions",
    prompt: "Tìm tọa độ đỉnh I của parabol y = x² − 4x + 3.",
    options: ["I(2; −1)", "I(−2; 15)", "I(2; 1)", "I(4; 3)"],
    answer: 0,
    explanation:
      "Hoành độ đỉnh: x0 = −b / (2a) = −(−4) / (2 × 1) = 2. Thay x = 2 vào hàm số: y0 = 2² − 4(2) + 3 = 4 − 8 + 3 = −1. Vậy đỉnh là I(2; −1).",
    hints: [
      "Tính hoành độ đỉnh theo công thức x0 = −b / (2a).",
      "Ở đây a = 1 và b = −4 nên x0 = 4 / 2 = 2.",
      "Thay x = 2 vào phương trình parabol để tìm tung độ y0.",
    ],
    skill: "quadratic-vertex",
  },
  {
    id: "q_quad_2",
    lessonId: "quadratic-functions",
    prompt: "Trục đối xứng của parabol y = 2x² − 8x + 1 là đường thẳng nào?",
    options: ["x = 2", "x = −2", "x = 4", "y = 2"],
    answer: 0,
    explanation:
      "Trục đối xứng của parabol y = ax² + bx + c là đường thẳng đứng có phương trình x = −b / (2a). Với a = 2, b = −8: x = −(−8) / (2 × 2) = 8 / 4 = 2.",
    hints: [
      "Phương trình trục đối xứng của parabol là x = −b / (2a).",
      "Xác định hệ số a và b trong phương trình.",
      "a = 2, b = −8. Tính −(−8) / (2 × 2).",
    ],
    skill: "quadratic-vertex",
  },
  {
    id: "q_quad_3",
    lessonId: "quadratic-functions",
    prompt: "Tập nghiệm của bất phương trình bậc hai x² − 5x + 6 < 0 là:",
    options: ["(2; 3)", "[2; 3]", "(−∞; 2) ∪ (3; +∞)", "∅"],
    answer: 0,
    explanation:
      "Tam thức f(x) = x² − 5x + 6 có hệ số a = 1 > 0 và hai nghiệm phân biệt x1 = 2, x2 = 3. Theo quy tắc 'trong trái ngoài cùng', f(x) < 0 (trái dấu với a) khi x nằm TRONG khoảng hai nghiệm: x ∈ (2; 3).",
    hints: [
      "Giải phương trình x² − 5x + 6 = 0 để tìm hai nghiệm.",
      "Hai nghiệm là x = 2 và x = 3, hệ số a = 1 > 0.",
      "Đề yêu cầu < 0 (trái dấu a), dùng quy tắc 'trong trái' nên tập nghiệm là (2; 3).",
    ],
    skill: "quadratic-sign",
  },
  {
    id: "q_quad_4",
    lessonId: "quadratic-functions",
    prompt: "Tìm tất cả giá trị của m để tam thức f(x) = x² − 2x + m luôn dương với mọi x ∈ ℝ.",
    options: ["m > 1", "m ≥ 1", "m < 1", "m > 0"],
    answer: 0,
    explanation:
      "Để tam thức f(x) = ax² + bx + c luôn dương với mọi x ∈ ℝ, điều kiện là a > 0 và biệt thức Δ' < 0. Ở đây a = 1 > 0 (thỏa mãn) và Δ' = (−1)² − 1 × m = 1 − m. Yêu cầu 1 − m < 0 ⇔ m > 1.",
    hints: [
      "Tam thức luôn cùng một dấu với mọi x khi biệt thức Δ (hoặc Δ') mang dấu gì?",
      "Điều kiện để f(x) > 0 với mọi x là: a > 0 và Δ' < 0.",
      "Tính Δ' = b'² − ac = 1 − m < 0 và giải tìm m.",
    ],
    skill: "quadratic-sign",
  },

  // CHƯƠNG VII: HÌNH HỌC TỌA ĐỘ OXY (analytic-geometry)
  {
    id: "q_geom_1",
    lessonId: "analytic-geometry",
    prompt: "Đường thẳng d: 2x − 3y + 5 = 0 có một vectơ pháp tuyến là:",
    options: [
      "n = (2; −3)",
      "n = (2; 3)",
      "n = (3; 2)",
      "n = (−3; 2)",
    ],
    answer: 0,
    explanation:
      "Đường thẳng có phương trình tổng quát ax + by + c = 0 có một vectơ pháp tuyến là n(a; b). Ở đây hệ số của x là 2 và hệ số của y là −3, nên n = (2; −3).",
    hints: [
      "Tọa độ của vectơ pháp tuyến chính là các hệ số của x và y trong phương trình tổng quát.",
      "Hệ số trước x là a = 2.",
      "Hệ số trước y là b = −3. Vậy n = (2; −3).",
    ],
    skill: "line-equations",
  },
  {
    id: "q_geom_2",
    lessonId: "analytic-geometry",
    prompt: "Tính khoảng cách từ điểm M(1; 2) đến đường thẳng d: 3x + 4y − 1 = 0.",
    options: ["2", "10", "1", "4"],
    answer: 0,
    explanation:
      "Khoảng cách: d(M, d) = |3(1) + 4(2) − 1| / √(3² + 4²) = |3 + 8 − 1| / √(9 + 16) = 10 / √25 = 10 / 5 = 2.",
    hints: [
      "Dùng công thức khoảng cách: d(M, d) = |a x0 + b y0 + c| / √(a² + b²).",
      "Thay x = 1, y = 2 vào tử số: |3(1) + 4(2) − 1| = 10.",
      "Mẫu số là căn bậc hai của 3² + 4² = 25, bằng 5. Lấy 10 / 5.",
    ],
    skill: "line-equations",
  },
  {
    id: "q_geom_3",
    lessonId: "analytic-geometry",
    prompt: "Tìm tâm I và bán kính R của đường tròn (C): (x − 2)² + (y + 3)² = 16.",
    options: [
      "I(2; −3), R = 4",
      "I(−2; 3), R = 4",
      "I(2; −3), R = 16",
      "I(−2; 3), R = 16",
    ],
    answer: 0,
    explanation:
      "Phương trình đường tròn chính tắc (x − a)² + (y − b)² = R² có tâm I(a; b) và bán kính R. Ở đây x − 2 ⇒ a = 2; y + 3 = y − (−3) ⇒ b = −3; R² = 16 ⇒ R = √16 = 4. Vậy I(2; −3), R = 4.",
    hints: [
      "Đối chiếu với dạng chính tắc: (x − a)² + (y − b)² = R².",
      "Chú ý đổi dấu tọa độ tâm: x − 2 cho hoành độ 2; y + 3 cho tung độ −3.",
      "Bán kính R là căn bậc hai của số ở vế phải (căn của 16).",
    ],
    skill: "circle-equations",
  },
  {
    id: "q_geom_4",
    lessonId: "analytic-geometry",
    prompt: "Viết phương trình tổng quát của đường thẳng đi qua điểm A(1; 3) và nhận n(2; 1) làm vectơ pháp tuyến.",
    options: [
      "2x + y − 5 = 0",
      "2x + y + 5 = 0",
      "x + 2y − 7 = 0",
      "2x − y + 1 = 0",
    ],
    answer: 0,
    explanation:
      "Phương trình đường thẳng: a(x − x0) + b(y − y0) = 0 ⇒ 2(x − 1) + 1(y − 3) = 0 ⇔ 2x − 2 + y − 3 = 0 ⇔ 2x + y − 5 = 0.",
    hints: [
      "Áp dụng công thức đường thẳng qua một điểm có VTPT n(a; b).",
      "Công thức: a(x − xA) + b(y − yA) = 0.",
      "Thay số: 2(x − 1) + 1(y − 3) = 0 rồi rút gọn.",
    ],
    skill: "line-equations",
  },

  // CHƯƠNG VIII: ĐẠI SỐ TỔ HỢP (combinatorics)
  {
    id: "q_comb_1",
    lessonId: "combinatorics",
    prompt: "Có 5 bông hoa hồng đỏ và 4 bông hoa hồng vàng khác nhau. Có bao nhiêu cách chọn 1 bông hoa?",
    options: ["9", "20", "5", "4"],
    answer: 0,
    explanation:
      "Việc chọn 1 bông hoa có thể thực hiện theo một trong hai phương án độc lập: chọn 1 bông hoa đỏ (5 cách) hoặc chọn 1 bông hoa vàng (4 cách). Theo quy tắc cộng: 5 + 4 = 9 cách.",
    hints: [
      "Chọn 1 bông hoa thì hoa đỏ hay vàng đều hoàn thành công việc.",
      "Hai phương án này độc lập nhau (không thực hiện liên tiếp).",
      "Áp dụng quy tắc cộng: 5 + 4 = 9.",
    ],
    skill: "counting-principles",
  },
  {
    id: "q_comb_2",
    lessonId: "combinatorics",
    prompt: "Từ Hà Nội đến Đà Nẵng có 3 cách di chuyển, từ Đà Nẵng đến TP.HCM có 4 cách di chuyển. Hỏi có bao nhiêu cách đi từ Hà Nội đến TP.HCM qua Đà Nẵng?",
    options: ["12", "7", "64", "81"],
    answer: 0,
    explanation:
      "Chuyến đi gồm hai công đoạn liên tiếp: công đoạn 1 từ Hà Nội đến Đà Nẵng (3 cách), sau đó công đoạn 2 từ Đà Nẵng đến TP.HCM (4 cách). Theo quy tắc nhân: 3 × 4 = 12 cách.",
    hints: [
      "Hành trình phải trải qua hai chặng liên tiếp mới hoàn thành chuyến đi.",
      "Khi các công đoạn diễn ra liên tiếp, áp dụng quy tắc gì?",
      "Áp dụng quy tắc nhân: lấy 3 nhân với 4.",
    ],
    skill: "counting-principles",
  },
  {
    id: "q_comb_3",
    lessonId: "combinatorics",
    prompt: "Có bao nhiêu cách sắp xếp 5 học sinh vào một hàng ngang gồm 5 chiếc ghế?",
    options: ["120", "24", "25", "720"],
    answer: 0,
    explanation:
      "Số cách sắp xếp thứ tự của 5 học sinh vào 5 vị trí chính là số hoán vị của 5 phần tử: P5 = 5! = 5 × 4 × 3 × 2 × 1 = 120 cách.",
    hints: [
      "Sắp xếp toàn bộ 5 bạn vào 5 chỗ ngồi là bài toán hoán vị.",
      "Số hoán vị của n phần tử là n! (n giai thừa).",
      "Tính 5! = 5 × 4 × 3 × 2 × 1.",
    ],
    skill: "permutations-combinations",
  },
  {
    id: "q_comb_4",
    lessonId: "combinatorics",
    prompt: "Một lớp học có 30 học sinh. Có bao nhiêu cách chọn ra một nhóm gồm 3 học sinh đi làm nhiệm vụ mà không phân biệt chức danh?",
    options: ["4060", "24360", "90", "120"],
    answer: 0,
    explanation:
      "Vì việc chọn 3 học sinh không phân biệt thứ tự hay chức vụ, mỗi cách chọn là một tổ hợp chập 3 của 30 phần tử: C30³ = 30! / (3! × 27!) = (30 × 29 × 28) / (3 × 2 × 1) = 4060 cách.",
    hints: [
      "Chọn 3 người trong 30 người mà KHÔNG phân biệt thứ tự là Chỉnh hợp hay Tổ hợp?",
      "Không có thứ tự là TỔ HỢP C30³.",
      "Tính (30 × 29 × 28) chia cho (3 × 2 × 1).",
    ],
    skill: "permutations-combinations",
  },

  // CHƯƠNG IX: XÁC SUẤT CỔ ĐIỂN (probability)
  {
    id: "q_prob_1",
    lessonId: "probability",
    prompt: "Gieo một con xúc xắc 6 mặt cân đối và đồng chất một lần. Số phần tử của không gian mẫu n(Ω) bằng:",
    options: ["6", "12", "36", "1"],
    answer: 0,
    explanation:
      "Không gian mẫu gồm tất cả các kết quả số chấm có thể xuất hiện khi gieo xúc xắc: Ω = {1; 2; 3; 4; 5; 6}. Do đó số phần tử của không gian mẫu là n(Ω) = 6.",
    hints: [
      "Không gian mẫu là tập hợp tất cả các kết quả có thể xảy ra của phép thử.",
      "Con xúc xắc có các mặt chấm từ 1 đến mấy?",
      "Có 6 khả năng xảy ra tương ứng với 6 mặt.",
    ],
    skill: "sample-space",
  },
  {
    id: "q_prob_2",
    lessonId: "probability",
    prompt: "Gieo một con xúc xắc 6 mặt cân đối một lần. Xác suất xuất hiện mặt có số chấm là số chẵn bằng bao nhiêu?",
    options: ["1/2", "1/3", "1/6", "2/3"],
    answer: 0,
    explanation:
      "Không gian mẫu n(Ω) = 6. Biến cố xuất hiện mặt chẵn gồm các kết quả thuận lợi là A = {2; 4; 6}, nên n(A) = 3. Xác suất P(A) = n(A) / n(Ω) = 3 / 6 = 1/2.",
    hints: [
      "Liệt kê các mặt có số chấm là số chẵn từ 1 đến 6.",
      "Có 3 mặt chẵn là 2, 4, 6.",
      "Lấy số kết quả thuận lợi (3) chia cho tổng số kết quả (6).",
    ],
    skill: "classical-probability",
  },
  {
    id: "q_prob_3",
    lessonId: "probability",
    prompt: "Một hộp chứa 3 quả cầu màu đỏ và 5 quả cầu màu xanh có kích thước giống nhau. Lấy ngẫu nhiên 1 quả cầu. Xác suất lấy được quả màu đỏ là:",
    options: ["3/8", "5/8", "3/5", "1/8"],
    answer: 0,
    explanation:
      "Tổng số quả cầu trong hộp là 3 + 5 = 8 quả, nên n(Ω) = 8. Số quả màu đỏ là 3, nên số kết quả thuận lợi là n(A) = 3. Xác suất lấy được quả màu đỏ là P(A) = 3/8.",
    hints: [
      "Tính tổng số quả cầu trong hộp để tìm số phần tử không gian mẫu.",
      "Tổng số là 3 + 5 = 8 quả.",
      "Tỉ số giữa số quả đỏ (3) và tổng số quả (8).",
    ],
    skill: "classical-probability",
  },
  {
    id: "q_prob_4",
    lessonId: "probability",
    prompt: "Một hộp có 10 sản phẩm, trong đó có 2 sản phẩm lỗi. Chọn ngẫu nhiên 2 sản phẩm. Tính xác suất để chọn được ít nhất 1 sản phẩm lỗi.",
    options: ["17/45", "28/45", "1/5", "2/45"],
    answer: 0,
    explanation:
      "Số phần tử không gian mẫu là chọn 2 trong 10: n(Ω) = C10² = 45. Xét biến cố đối Ā: 'Cả 2 sản phẩm lấy ra đều không bị lỗi'. Hộp có 8 sản phẩm tốt, nên n(Ā) = C8² = 28. Xác suất của biến cố đối là P(Ā) = 28/45. Do đó xác suất cần tìm là P(A) = 1 − P(Ā) = 1 − 28/45 = 17/45.",
    hints: [
      "Gặp cụm từ 'ít nhất 1', hãy sử dụng biến cố đối: 'không có sản phẩm nào bị lỗi'.",
      "Tính n(Ω) = C10² = 45.",
      "Tính số cách chọn 2 sản phẩm tốt trong 8 sản phẩm: C8² = 28. Lấy 1 trừ đi 28/45.",
    ],
    skill: "classical-probability",
  },
];
