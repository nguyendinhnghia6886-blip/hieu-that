/**
 * Bộ quy tắc đánh giá và tính điểm theo định dạng đề thi mới Bộ GD&ĐT 2025.
 */

export function checkShortAnswer(userStr, question) {
  if (userStr === null || userStr === undefined) return false;
  const raw = String(userStr).trim();
  if (!raw) return false;

  const clean = raw.replace(/\s+/g, "").replace(",", ".");
  const accepted = Array.isArray(question.acceptedAnswers)
    ? question.acceptedAnswers
    : [String(question.answer ?? "")];

  const parseVal = (s) => {
    if (typeof s !== "string") s = String(s);
    s = s.trim().replace(/\s+/g, "").replace(",", ".");
    if (s.includes("/")) {
      const parts = s.split("/");
      if (parts.length === 2) {
        const num = Number(parts[0]);
        const den = Number(parts[1]);
        if (!Number.isNaN(num) && !Number.isNaN(den) && den !== 0) {
          return num / den;
        }
      }
    }
    const n = Number(s);
    return Number.isNaN(n) ? NaN : n;
  };

  const vUser = parseVal(clean);

  for (const acc of accepted) {
    const accStr = String(acc).trim().replace(/\s+/g, "").replace(",", ".");
    if (clean.toLowerCase() === accStr.toLowerCase()) return true;
    const vAcc = parseVal(accStr);
    if (!Number.isNaN(vUser) && !Number.isNaN(vAcc)) {
      if (Math.abs(vUser - vAcc) < 1e-4) return true;
    }
  }
  return false;
}

/**
 * Thang điểm chuẩn Bộ GD&ĐT 2025 cho phần II: Trắc nghiệm Đúng / Sai:
 * - Đúng 1 ý: 0.10 điểm
 * - Đúng 2 ý: 0.25 điểm
 * - Đúng 3 ý: 0.50 điểm
 * - Đúng cả 4 ý: 1.00 điểm
 */
export function evaluateTrueFalse(selectedMap = {}, subQuestions = []) {
  if (!Array.isArray(subQuestions) || subQuestions.length === 0) {
    return { numCorrect: 0, total: 0, score: 0, isFullyCorrect: false };
  }
  let numCorrect = 0;
  for (const sq of subQuestions) {
    const chosen = selectedMap ? selectedMap[sq.id] : undefined;
    if (typeof chosen === "boolean" && chosen === Boolean(sq.answer)) {
      numCorrect++;
    }
  }
  const scoreMap = { 0: 0, 1: 0.1, 2: 0.25, 3: 0.5, 4: 1.0 };
  const score = scoreMap[numCorrect] ?? (numCorrect / subQuestions.length);
  return {
    numCorrect,
    total: subQuestions.length,
    score,
    isFullyCorrect: numCorrect === subQuestions.length,
  };
}

