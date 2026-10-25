export const questionBank = [
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
];
