// One equal-weight point per question. Written answers remain pending until reviewed.
export function summarizeGrade(answers, writtenMarks = {}) {
  let earned = 0;
  let pending = 0;
  for (const answer of answers) {
    if (answer.type === "written") {
      const mark = writtenMarks[answer.questionId];
      if (
        typeof mark !== "number" ||
        !Number.isFinite(mark) ||
        mark < 0 ||
        mark > 1
      )
        pending++;
      else earned += mark;
    } else if (answer.correct === true) earned++;
  }
  const total = answers.length;
  return {
    earned,
    total,
    pending,
    score: total && !pending ? Math.round((earned / total) * 100) / 10 : null,
    provisionalScore: total ? Math.round((earned / total) * 100) / 10 : null,
  };
}

export function parseWrittenMarks(answers, values) {
  const marks = {};
  for (const answer of answers.filter((a) => a.type === "written")) {
    const raw = values[answer.questionId];
    if (raw === "" || raw === undefined || raw === null) continue;
    const value = Number(raw);
    if (!Number.isFinite(value) || value < 0 || value > 1) {
      throw new Error(
        "Điểm từng câu tự luận phải từ 0 đến 1. Có thể để trống nếu chưa chấm.",
      );
    }
    marks[answer.questionId] = value;
  }
  return marks;
}
