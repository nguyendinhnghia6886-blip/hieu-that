import assert from "node:assert/strict";
import { test } from "node:test";
import {
  emptyQuestion,
  validateQuestion,
  parseQuestionText,
  normalizeTeacherCode,
  assessAnswers,
  tutorReply,
  encodeSharedAssignment,
  decodeSharedAssignment,
} from "./dist/authoring.js";

test("importing OCR or pasted text never guesses a correct answer", () => {
  const questions = parseQuestionText(
    "Câu 1: Giá trị của sin 30°?\nA. 1/2 B. 1 C. 0 D. −1/2\nĐáp án: A\nCâu 2: Giải thích vì sao cos 120° âm.",
  );
  assert.equal(questions.length, 2);
  assert.deepEqual(questions[0].options, ["1/2", "1", "0", "−1/2"]);
  assert.equal(questions[0].answer, null);
  assert.equal(questions[0].status, "draft");
  assert.equal(questions[1].type, "written");
});

test("approval blocks incomplete, duplicate and unkeyed choices", () => {
  const q = {
    ...emptyQuestion(),
    prompt: "sin 30° = ?",
    explanation: "Góc đặc biệt",
    options: ["1/2", "1", "0", "−1/2"],
  };
  assert.equal(validateQuestion(q, false), "");
  assert.match(validateQuestion(q, true), /đáp án đúng/);
  q.answer = 0;
  assert.equal(validateQuestion(q, true), "");
  q.options[1] = "1/2";
  assert.match(validateQuestion(q, true), /trùng/);
  q.options[1] = "";
  assert.match(validateQuestion(q, true), /4 lựa chọn/);
});

test("overlong question imports are rejected instead of silently losing questions", () => {
  const source = Array.from(
    { length: 31 },
    (_, i) => `Câu ${i + 1}: Câu hỏi số ${i + 1}?`,
  ).join("\n");
  assert.throws(() => parseQuestionText(source), /tối đa 30 câu/);
});

test("written work must have a grading guide and remains ungraded on submission", () => {
  const q = {
    ...emptyQuestion(),
    id: "essay",
    type: "written",
    prompt: "Giải thích dấu của cos 120°.",
  };
  assert.match(validateQuestion(q, true), /hướng dẫn chấm/);
  q.explanation = "Góc thuộc góc phần tư II; hoành độ âm.";
  assert.equal(validateQuestion(q, true), "");
  const answers = assessAnswers([q], {
    essay: "Vì hoành độ điểm trên đường tròn âm.",
  });
  assert.equal(answers[0].correct, null);
});

test("assignment results use the assigned snapshot, not later edits to the library", () => {
  const source = {
    ...emptyQuestion(),
    id: "one",
    prompt: "sin 30°?",
    options: ["1/2", "1", "0", "−1"],
    answer: 0,
  };
  const snapshot = structuredClone(source);
  source.answer = 1;
  source.options[0] = "edited";
  assert.equal(assessAnswers([snapshot], { one: 0 })[0].correct, true);
  assert.equal(assessAnswers([snapshot], { one: 1 })[0].correct, false);
  assert.equal(assessAnswers([snapshot], {})[0].correct, false);
});

test("teacher codes allow omission and normalize keyboard input", () => {
  assert.equal(normalizeTeacherCode(""), "");
  assert.equal(normalizeTeacherCode(" gv-ab12cd34 "), "GV-AB12CD34");
});

test("local tutoring admits unsupported free-form questions and stages available hints", () => {
  const q = { hints: ["Bước 1", "Bước 2"], explanation: "Lời giải" };
  assert.deepEqual(tutorReply(q, "Gợi ý bước đầu", 0), {
    supported: true,
    text: "Bước 1",
  });
  assert.equal(tutorReply(q, "Bước tiếp theo", 1).text, "Bước 2");
  assert.equal(tutorReply(q, "Xem lời giải").text, "Lời giải");
  assert.equal(tutorReply(q, "Hãy viết một bài thơ").supported, false);
});

test("encodeSharedAssignment and decodeSharedAssignment preserve Vietnamese and Unicode math formulas and reject invalid tokens", () => {
  const sampleAssignment = {
    id: "assign-math-10",
    title: "Bài tập lượng giác tuần 1: Góc tù & Hệ thức cơ bản",
    due: "2026-11-15",
    instructions: "Hãy trình bày rõ căn cứ chọn dấu của cos α.",
    teacherCode: "gv-1234abcd",
    questions: [
      {
        id: "q-choice-1",
        type: "choice",
        topic: "Giá trị lượng giác",
        prompt:
          "Cho góc tù α thỏa sin²α + cos²α = 1 và cos 150° = −√3/2. Chọn khẳng định đúng:",
        options: ["cos α = −√3/2", "cos α = √3/2", "sin α = −1/2", "tan α > 0"],
        answer: 0,
        explanation: "Vì 90° < α < 180° nên hoành độ âm: cos 150° = −√3/2.",
        hint: "Nhớ kiểm tra dấu của cos trong góc phần tư thứ II.",
      },
      {
        id: "q-written-2",
        type: "written",
        topic: "Định lý cosin",
        prompt:
          "Giải thích vì sao a² = b² + c² − 2bc cos A suy ra góc A tù khi a² > b² + c².",
        options: ["", "", "", ""],
        answer: null,
        explanation:
          "Khi a² > b² + c² thì b² + c² − a² < 0 nên cos A < 0, suy ra 90° < A < 180°.",
        hint: "Biến đổi công thức để biểu diễn cos A theo a, b, c.",
      },
    ],
  };
  const token = encodeSharedAssignment(sampleAssignment);
  assert.ok(typeof token === "string" && token.length > 20);
  assert.doesNotMatch(token, /[+/=]/, "token must be URL-safe Base64");

  const decoded = decodeSharedAssignment(token);
  assert.equal(decoded.id, "assign-math-10");
  assert.equal(decoded.title, sampleAssignment.title);
  assert.equal(decoded.teacherCode, "GV-1234ABCD");
  assert.equal(decoded.questions.length, 2);
  assert.equal(
    decoded.questions[0].prompt,
    sampleAssignment.questions[0].prompt,
  );
  assert.deepEqual(
    decoded.questions[0].options,
    sampleAssignment.questions[0].options,
  );
  assert.equal(decoded.questions[0].answer, 0);
  assert.equal(decoded.questions[1].type, "written");
  assert.equal(
    decoded.questions[1].explanation,
    sampleAssignment.questions[1].explanation,
  );

  for (const invalid of [
    "",
    "   ",
    "!!!not-base64!!!",
    "e30",
    encodeSharedAssignment(sampleAssignment).slice(0, 12),
  ]) {
    assert.throws(() => decodeSharedAssignment(invalid));
  }
});
