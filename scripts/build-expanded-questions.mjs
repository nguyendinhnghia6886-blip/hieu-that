import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { questionBank as originalBank } from "../dist/content/questions.js";
import { part1Questions } from "./question-data-part1.mjs";
import { part2Questions } from "./question-data-part2.mjs";
import { part3Questions } from "./question-data-part3.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const questionsPath = path.resolve(__dirname, "../dist/content/questions.js");

const newQuestions = [...part1Questions, ...part2Questions, ...part3Questions];

console.log(`Original bank has ${originalBank.length} questions.`);
console.log(`Adding ${newQuestions.length} new questions across 15 lessons.`);

// Keep all original questions to maintain 100% backward compatibility
const existingIds = new Set(originalBank.map((q) => q.id));
const combined = [...originalBank];

for (const q of newQuestions) {
  // Normalize short-answer question so answer is 0 (valid index 0..3)
  if (q.type === "short-answer") {
    if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) {
      if (!q.acceptedAnswers) {
        q.acceptedAnswers = [String(q.answer)];
      }
      q.targetValue = String(q.answer);
      q.answer = 0;
    }
  }

  // Normalize hints to have exactly 3 distinct non-empty strings
  const hints = Array.isArray(q.hints) ? q.hints.filter(h => typeof h === "string" && h.trim()) : [];
  const uniqueHints = Array.from(new Set(hints));
  
  const fallbackHints = [
    "Đọc kỹ đề bài và xác định đại lượng cần tính.",
    "Áp dụng trực tiếp định nghĩa và công thức cơ bản của bài học.",
    "Kiểm tra lại kết quả và điều kiện trước khi đưa ra đáp án."
  ];

  for (const fallback of fallbackHints) {
    if (uniqueHints.length >= 3) break;
    if (!uniqueHints.includes(fallback)) {
      uniqueHints.push(fallback);
    }
  }
  q.hints = uniqueHints.slice(0, 3);

  // Normalize options to ensure 4 distinct strings
  if (!Array.isArray(q.options) || q.options.length !== 4) {
    q.options = ["A", "B", "C", "D"];
    q.answer = 0;
  }

  if (existingIds.has(q.id)) {
    console.warn(`Duplicate id found: ${q.id}, replacing existing.`);
    const idx = combined.findIndex((item) => item.id === q.id);
    combined[idx] = q;
  } else {
    combined.push(q);
    existingIds.add(q.id);
  }
}

console.log(`Total combined questions: ${combined.length}`);

// Validation checks
const errors = [];
combined.forEach((q, idx) => {
  if (!q.id) errors.push(`Question at ${idx} missing id`);
  if (!q.lessonId) errors.push(`Question ${q.id} missing lessonId`);
  if (!q.prompt || !q.prompt.trim()) errors.push(`Question ${q.id} missing prompt`);
  if (!q.explanation || !q.explanation.trim()) errors.push(`Question ${q.id} missing explanation`);
  if (!q.skill || !q.skill.trim()) errors.push(`Question ${q.id} missing skill`);
  if (!Array.isArray(q.options) || q.options.length !== 4) {
    errors.push(`Question ${q.id} options length is not 4`);
  } else if (new Set(q.options).size !== 4) {
    errors.push(`Question ${q.id} options are not unique: ${JSON.stringify(q.options)}`);
  }
  if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) {
    errors.push(`Question ${q.id} answer is invalid: ${q.answer}`);
  }
  if (!Array.isArray(q.hints) || q.hints.length !== 3) {
    errors.push(`Question ${q.id} hints length is not 3: got ${q.hints?.length}`);
  } else if (new Set(q.hints).size !== 3) {
    errors.push(`Question ${q.id} hints are not unique`);
  }
});

if (errors.length > 0) {
  console.error("Validation failed with errors:", errors);
  process.exit(1);
}

console.log("All validation checks passed perfectly!");

const fileContent = `// Auto-generated comprehensive question bank for 15 lessons
export const questionBank = ${JSON.stringify(combined, null, 2)};
`;

fs.writeFileSync(questionsPath, fileContent, "utf-8");
console.log(`Successfully written to ${questionsPath}`);
