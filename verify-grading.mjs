import test from "node:test";
import assert from "node:assert/strict";
import { summarizeGrade, parseWrittenMarks } from "./dist/learning/grading.js";

test("mixed submissions do not publish a final score before written review", () => {
  const answers = [
    { type: "choice", correct: true },
    { type: "written", questionId: "essay" },
  ];
  assert.deepEqual(summarizeGrade(answers), {
    earned: 1,
    total: 2,
    pending: 1,
    score: null,
    provisionalScore: 5,
  });
  assert.equal(summarizeGrade(answers, { essay: 0.5 }).score, 7.5);
  assert.equal(summarizeGrade(answers, { essay: 0 }).score, 5);
});
test("grades handle zero questions, incorrect answers, and invalid teacher input", () => {
  assert.equal(summarizeGrade([]).score, null);
  assert.equal(summarizeGrade([{ type: "choice", correct: false }]).score, 0);
  const answers = [{ type: "written", questionId: "x" }];
  for (const value of [-1, 2, "NaN", Infinity])
    assert.throws(() => parseWrittenMarks(answers, { x: value }));
  assert.deepEqual(parseWrittenMarks(answers, { x: "" }), {});
  assert.deepEqual(parseWrittenMarks(answers, { x: "0.75" }), { x: 0.75 });
});
