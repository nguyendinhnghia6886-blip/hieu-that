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
};
