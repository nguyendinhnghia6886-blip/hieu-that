import { probes } from "../content/probes.js";

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
  const focus = {
    sign: "dấu của cos ở góc tù",
    root: "hai nghiệm của phương trình bình phương",
    identity: "hệ thức sin²α + cos²α = 1",
  }[probeKey];

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
