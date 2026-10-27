import { probes } from "../content/probes.js";

const lessonProbeMap = {
  propositions: "prop_def",
  sets: "set_interval",
  "inequalities-2var": "ineq_boundary",
  "system-inequalities": "system_ineq_origin",
  values: "identity",
  signs: "sign",
  cosine: "sign",
  "sine-law": "sine_law_radius",
  "vectors-intro": "vector_opposite",
  "scalar-product": "scalar_prod_angle",
  statistics: "stat_median",
  "quadratic-functions": "quad_vertex",
  "analytic-geometry": "line_normal_direction",
  combinatorics: "comb_perm_vs_comb",
  probability: "prob_complement",
};

export function getProbe(question, selected) {
  if (!question || !Array.isArray(question.options)) return null;
  const index =
    typeof selected === "number"
      ? selected
      : question.options.indexOf(selected);
  if (
    !Number.isInteger(index) ||
    index < 0 ||
    index >= question.options.length ||
    index === question.answer
  )
    return null;
  if (question.id === "q1" || question.id === "transfer-1") {
    return index === 0 ? "sign" : "identity";
  }
  if (
    question.skill === "sign" ||
    question.skill === "cosine-and-sign" ||
    question.skill === "supplementary"
  )
    return "sign";
  if (question.skill === "square-root") return "root";
  if (question.skill === "identity") return "identity";
  return null;
}

export function getVerificationProbe(question, selected) {
  if (!question || !Array.isArray(question.options)) return null;
  const index =
    typeof selected === "number"
      ? selected
      : question.options.indexOf(selected);
  if (
    !Number.isInteger(index) ||
    index < 0 ||
    index >= question.options.length
  )
    return null;
  if (index === question.answer) {
    if (question.correctProbe) return question.correctProbe;
    if (question.skill === "proposition-negation") return "prop_neg_rule";
    if (question.skill === "proposition-proof")
      return "prop_counterexample_rule";
    if (
      question.id === "q_prop_3" ||
      question.id === "q_prop_12" ||
      question.id === "q_prop_13"
    ) {
      return "prop_necessary_rule";
    }
    if (
      question.id === "q_prop_11" ||
      question.id === "q_prop_22" ||
      question.id === "q_prop_24"
    ) {
      return "prop_converse_rule";
    }
    if (question.lessonId && lessonProbeMap[question.lessonId]) {
      return lessonProbeMap[question.lessonId];
    }
    return null;
  }
  if (question.probeKeys && question.probeKeys[index]) {
    return question.probeKeys[index];
  }
  if (question.probe) return question.probe;
  if (question.skill === "proposition-negation") return "prop_neg_rule";
  if (question.skill === "proposition-proof")
    return "prop_counterexample_rule";
  if (
    question.id === "q_prop_3" ||
    question.id === "q_prop_12" ||
    question.id === "q_prop_13"
  ) {
    return "prop_necessary_rule";
  }
  if (
    question.id === "q_prop_11" ||
    question.id === "q_prop_22" ||
    question.id === "q_prop_24"
  ) {
    return "prop_converse_rule";
  }
  if (question.lessonId && lessonProbeMap[question.lessonId]) {
    return lessonProbeMap[question.lessonId];
  }
  return getProbe(question, selected);
}

export function getMisconceptionText(probeKey, question) {
  const map = {
    prop_def:
      "Chưa phân biệt được khẳng định có chân trị dứt khoát với câu hỏi, cảm thán hoặc mệnh đề chứa biến",
    prop_neg_rule:
      "Chưa nắm đúng quy tắc đổi lượng từ (∀ ↔ ∃) và đổi dấu bất đẳng thức khi lập mệnh đề phủ định",
    prop_converse_rule:
      "Ngộ nhận mệnh đề đảo luôn có cùng tính đúng sai với định lý thuận",
    prop_necessary_rule:
      "Nhầm lẫn giữa điều kiện cần (kết luận Q) và điều kiện đủ (giả thiết P) trong định lý kéo theo",
    prop_counterexample_rule:
      "Chưa nắm vững phương pháp dùng phản ví dụ để bác bỏ mệnh đề với mọi",
    sign: "Chưa xác định đúng dấu âm của hàm cos (và tan, cot) trong phạm vi góc tù 90° < α < 180°",
    root: "Bỏ sót nghiệm âm khi khai căn phương trình bình phương u² = a",
    identity: "Nhầm lẫn hệ thức lượng giác cơ bản sin²α + cos²α = 1",
    set_interval:
      "Nhầm lẫn điều kiện thuộc phép hợp (∪) và phép giao (∩) trên các khoảng và nửa khoảng",
    ineq_boundary:
      "Chưa phân biệt được bất phương trình ngặt (vẽ nét đứt) và không ngặt có lấy bờ (vẽ nét liền)",
    system_ineq_origin:
      "Chưa nắm phương pháp thử điểm đại diện (như gốc O) để xác định miền nghiệm của hệ bất phương trình",
    sine_law_radius:
      "Nhầm lẫn tỉ số a/sin A bằng bán kính R thay vì đường kính 2R trong định lý sin",
    vector_opposite:
      "Nhầm lẫn giữa hai vectơ ngược hướng cùng độ dài (vectơ đối) và hai vectơ cùng hướng",
    scalar_prod_angle:
      "Chưa nắm vững điều kiện hai vectơ vuông góc tương đương tích vô hướng bằng 0",
    stat_median:
      "Quên sắp xếp mẫu số liệu theo thứ tự không giảm trước khi tìm trung vị hoặc tứ phân vị",
    quad_vertex:
      "Nhầm dấu trong công thức tọa độ đỉnh parabol x = -b/(2a)",
    line_normal_direction:
      "Nhầm lẫn chuyển đổi giữa vectơ pháp tuyến n=(a; b) và vectơ chỉ phương u=(-b; a)",
    comb_perm_vs_comb:
      "Chưa phân biệt bài toán có thứ tự (chỉnh hợp) và bài toán chọn nhóm không phân biệt thứ tự (tổ hợp)",
    prob_complement:
      "Chưa biết tận dụng quy tắc biến cố đối P(A) = 1 - P(¬A) khi bài toán có từ khóa 'ít nhất một'",
  };
  if (probeKey && map[probeKey]) return map[probeKey];
  if (question?.skill)
    return `Cần củng cố thêm kỹ năng sư phạm về ${question.skill}`;
  return "Chưa nắm chắc khái niệm và phương pháp trọng tâm của bài học";
}

/** Summarize only the available, explicit answers from this short session. */
export function summarizeEvidence({
  baseCorrect,
  probeKey = null,
  probeCorrect = null,
  transferCorrect = null,
} = {}) {
  const hasBase = typeof baseCorrect === "boolean";
  const hasTransfer = typeof transferCorrect === "boolean";
  const hasProbe = Boolean(
    probeKey && Object.prototype.hasOwnProperty.call(probes, probeKey),
  );
  const hasProbeAnswer = hasProbe && typeof probeCorrect === "boolean";
  const focus =
    {
      sign: "dấu của cos ở góc tù",
      root: "hai nghiệm của phương trình bình phương",
      identity: "hệ thức sin²α + cos²α = 1",
      prop_def: "khái niệm mệnh đề toán học",
      prop_neg_rule: "quy tắc phủ định lượng từ toán học",
      prop_converse_rule: "tính độc lập của mệnh đề đảo",
      prop_necessary_rule: "phân biệt điều kiện cần và điều kiện đủ",
      prop_counterexample_rule:
        "phương pháp phản ví dụ bác bỏ mệnh đề với mọi",
      set_interval: "phép toán hợp và giao trên tập số",
      ineq_boundary: "xác định bờ của miền nghiệm bất phương trình",
      system_ineq_origin: "kiểm tra miền nghiệm của hệ bất phương trình",
      sine_law_radius: "bán kính đường tròn ngoại tiếp trong định lý sin",
      vector_opposite: "khái niệm hai vectơ đối nhau",
      scalar_prod_angle: "điều kiện hai vectơ vuông góc",
      stat_median: "phương pháp xác định trung vị",
      quad_vertex: "tọa độ đỉnh parabol",
      line_normal_direction: "chuyển đổi vectơ pháp tuyến và chỉ phương",
      comb_perm_vs_comb: "phân biệt chỉnh hợp và tổ hợp",
      prob_complement: "quy tắc biến cố đối trong xác suất",
    }[probeKey] || "khái niệm trọng tâm";

  if (!hasBase || !hasTransfer || (hasProbe && !hasProbeAnswer)) {
    return {
      status: "insufficient",
      title: "Chưa đủ bằng chứng",
      detail:
        "Phiên học chưa có đủ câu trả lời để đối chiếu. Hoàn thành câu xác minh được chọn và câu vận dụng để có nhận xét cụ thể hơn.",
    };
  }

  if (!transferCorrect) {
    return {
      status: "practice",
      title: "Còn một bước cần luyện",
      detail:
        hasProbeAnswer && !probeCorrect
          ? `Câu xác minh về ${focus} và câu vận dụng đều chưa đúng. Em hãy xem lại phần giải thích, rồi thử thêm một bài mới. Đây là bằng chứng trong phiên này, chưa đủ để kết luận nguyên nhân duy nhất.`
          : "Câu vận dụng chưa đúng. Hãy kiểm tra lần lượt công thức, phép tính và dấu; các câu trả lời hiện có chưa chỉ ra chắc chắn bước gây nhầm.",
    };
  }

  if (hasProbeAnswer && !probeCorrect) {
    return {
      status: "insufficient",
      title: "Cần thêm một lần kiểm tra",
      detail: `Em đã làm đúng câu vận dụng, nhưng câu xác minh về ${focus} chưa đúng. Hai câu trả lời chưa nhất quán; cần thêm một bài tương tự hoặc trao đổi với giáo viên.`,
    };
  }

  if (!baseCorrect && !hasProbeAnswer) {
    return {
      status: "insufficient",
      title: "Có tiến triển, cần thêm bằng chứng",
      detail:
        "Câu đầu chưa đúng và câu vận dụng đã đúng. Cần thêm câu xác minh để biết bước nào đã được hiểu rõ hơn; chưa thể kết luận đã nắm vững cả chủ đề.",
    };
  }

  return {
    status: "supported",
    title: "Có bằng chứng làm đúng",
    detail: baseCorrect
      ? "Em đã làm đúng câu đầu và câu vận dụng. Kết quả này hỗ trợ nhận xét trong phạm vi các câu vừa kiểm tra; hãy thử thêm dạng bài khác để củng cố."
      : "Sau câu đầu chưa đúng, em đã trả lời đúng câu xác minh và câu vận dụng. Có bằng chứng em đã xử lý tốt hơn dạng bài vừa học; kết quả này chưa đại diện cho toàn bộ chủ đề.",
  };
}
