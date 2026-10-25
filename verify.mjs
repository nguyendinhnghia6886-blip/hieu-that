import assert from "node:assert/strict";
import { test } from "node:test";
import {
  lessons,
  questionBank,
  probes,
  transferQuestion,
  getProbe,
  summarizeEvidence,
} from "./dist/learning.js";

const near = (actual, expected, message) =>
  assert.ok(
    Math.abs(actual - expected) < 1e-10,
    `${message}: ${actual} ≈ ${expected}`,
  );
const radians = (degrees) => (degrees * Math.PI) / 180;
const byId = (id) => questionBank.find((question) => question.id === id);
const choice = (id) => byId(id).options[byId(id).answer];

test("all three lessons contain five complete, identifiable slides", () => {
  assert.equal(lessons.length, 3);
  assert.equal(
    new Set(lessons.map((lesson) => lesson.id)).size,
    lessons.length,
  );
  assert.equal(lessons.flatMap((lesson) => lesson.slides).length, 15);
  for (const lesson of lessons) {
    assert.equal(lesson.slides.length, 5, lesson.id);
    for (const slide of lesson.slides) {
      for (const key of ["eyebrow", "title", "body", "formula", "tip"]) {
        assert.equal(typeof slide[key], "string", `${lesson.id}: ${key}`);
        assert.ok(slide[key].trim(), `${lesson.id}: empty ${key}`);
      }
      assert.ok(["circle", "signs", "triangle"].includes(slide.visual));
    }
  }
});

test("question bank and transfer exercise have unique ids, valid answers, hints and lesson references", () => {
  assert.equal(questionBank.length, 12);
  const allQuestions = [...questionBank, transferQuestion];
  assert.equal(
    new Set(allQuestions.map((question) => question.id)).size,
    allQuestions.length,
  );
  for (const lesson of lessons)
    assert.equal(
      questionBank.filter((question) => question.lessonId === lesson.id).length,
      4,
    );
  for (const question of allQuestions) {
    assert.ok(
      lessons.some((lesson) => lesson.id === question.lessonId),
      question.id,
    );
    assert.ok(
      question.prompt.trim() &&
        question.explanation.trim() &&
        question.skill.trim(),
      question.id,
    );
    assert.equal(question.options.length, 4, question.id);
    assert.equal(new Set(question.options).size, 4, question.id);
    assert.ok(
      question.options.every(
        (option) => typeof option === "string" && option.trim(),
      ),
      question.id,
    );
    assert.ok(
      Number.isInteger(question.answer) &&
        question.answer >= 0 &&
        question.answer < 4,
      question.id,
    );
    assert.equal(question.hints.length, 3, question.id);
    assert.ok(
      question.hints.every((hint) => typeof hint === "string" && hint.trim()),
      question.id,
    );
    assert.equal(new Set(question.hints).size, 3, question.id);
  }
  for (const [key, probe] of Object.entries(probes)) {
    assert.ok(probe.prompt.trim() && probe.explanation.trim(), key);
    assert.equal(probe.options.length, 4, key);
    assert.equal(new Set(probe.options).size, 4, key);
    assert.ok(
      Number.isInteger(probe.answer) && probe.answer >= 0 && probe.answer < 4,
      key,
    );
  }
});

test("all 12 answer keys agree with independently checked mathematics", () => {
  const expected = {
    q1: "−4/5",
    q2: "sin²α + cos²α = 1",
    q3: "1/2",
    q4: "−√3/2",
    q5: "Âm",
    q6: "0",
    q7: "−1",
    q8: "sin α > 0 và cos α > 0",
    q9: "5",
    q10: "√7",
    q11: "0",
    q12: "Góc tù",
  };
  for (const [id, answer] of Object.entries(expected))
    assert.equal(choice(id), answer, id);
  near(-Math.sqrt(1 - (3 / 5) ** 2), -4 / 5, "q1: obtuse cosine");
  for (const degrees of [0, 13, 30, 60, 90, 130, 180]) {
    const angle = radians(degrees);
    near(Math.sin(angle) ** 2 + Math.cos(angle) ** 2, 1, "q2: identity");
  }
  near(Math.sin(radians(30)), 1 / 2, "q3");
  near(Math.cos(radians(150)), -Math.sqrt(3) / 2, "q4");
  assert.ok(Math.cos(radians(120)) < 0, "q5");
  near(Math.cos(radians(90)), 0, "q6");
  near(Math.tan(radians(135)), -1, "q7");
  for (let degrees = 1; degrees < 90; degrees++)
    assert.ok(
      Math.sin(radians(degrees)) > 0 && Math.cos(radians(degrees)) > 0,
      "q8",
    );
  near(Math.sqrt(3 ** 2 + 4 ** 2 - 2 * 3 * 4 * Math.cos(radians(90))), 5, "q9");
  near(
    Math.sqrt(2 ** 2 + 3 ** 2 - 2 * 2 * 3 * Math.cos(radians(60))),
    Math.sqrt(7),
    "q10",
  );
  near((3 ** 2 + 4 ** 2 - 5 ** 2) / (2 * 3 * 4), 0, "q11");
  assert.ok(2 + 3 > 4, "q12: valid triangle");
  near((2 ** 2 + 3 ** 2 - 4 ** 2) / (2 * 2 * 3), -1 / 4, "q12");
  assert.ok(Math.acos(-1 / 4) > Math.PI / 2, "q12: obtuse angle");
  assert.equal(transferQuestion.options[transferQuestion.answer], "−12/13");
  near(-Math.sqrt(1 - (5 / 13) ** 2), -12 / 13, "independent transfer");
});

test("slide examples preserve unit-circle, supplementary-angle, and cosine-law identities", () => {
  // All 15 slide texts/formulas were also reviewed for their stated angle domains.
  // These checks cover the numerical examples and identities used in those slides.
  for (let degrees = 0; degrees <= 180; degrees++) {
    const angle = radians(degrees);
    near(
      Math.sin(radians(180 - degrees)),
      Math.sin(angle),
      "supplementary sine",
    );
    near(
      Math.cos(radians(180 - degrees)),
      -Math.cos(angle),
      "supplementary cosine",
    );
    near(Math.sin(angle) ** 2 + Math.cos(angle) ** 2, 1, "unit circle");
    if (degrees > 0 && degrees < 180) assert.ok(Math.sin(angle) > 0);
    if (degrees > 90 && degrees < 180)
      assert.ok(Math.cos(angle) < 0 && Math.tan(angle) < 0);
  }
  near((3 / 5) ** 2 + (-4 / 5) ** 2, 1, "values slide 3");
  near((1 / 2) ** 2 + (Math.sqrt(3) / 2) ** 2, 1, "values slide 4");
  near(Math.cos(radians(120)), -1 / 2, "signs slide 3");
  near(Math.cos(radians(150)), -Math.sqrt(3) / 2, "signs slide 4");
  near(Math.sin(radians(90)), 1, "signs slide 5");
  const side = Math.sqrt(2 ** 2 + 3 ** 2 - 2 * 2 * 3 * Math.cos(radians(60)));
  near(side, Math.sqrt(7), "cosine slide 3");
  assert.ok(Math.abs(3 - 2) < side && side < 3 + 2, "triangle inequality");
});

test("getProbe rejects correct, missing, out-of-range, and unknown selections", () => {
  for (const question of [...questionBank, transferQuestion]) {
    assert.equal(getProbe(question, question.answer), null, question.id);
    assert.equal(
      getProbe(question, question.options[question.answer]),
      null,
      question.id,
    );
    for (const selection of [
      undefined,
      null,
      NaN,
      Infinity,
      -1,
      4,
      0.5,
      "",
      "not an option",
    ]) {
      assert.equal(
        getProbe(question, selection),
        null,
        `${question.id}: ${String(selection)}`,
      );
    }
  }
  assert.equal(getProbe(null, 0), null);
  assert.equal(getProbe({}, 0), null);
  assert.equal(getProbe({ options: [] }, 0), null);
});

test("getProbe follows each supported error branch without assigning an unsupported diagnosis", () => {
  const expected = {
    q1: ["sign", null, "identity", "identity"],
    q2: ["identity", "identity", null, "identity"],
    q3: [null, null, null, null],
    q4: [null, "sign", "sign", "sign"],
    q5: ["sign", "sign", null, "sign"],
    q6: [null, null, null, null],
    q7: ["sign", "sign", "sign", null],
    q8: [null, "sign", "sign", "sign"],
    q9: [null, null, null, null],
    q10: [null, "root", "root", "root"],
    q11: [null, null, null, null],
    q12: ["sign", null, "sign", "sign"],
    "transfer-1": ["sign", "identity", null, "identity"],
  };
  for (const question of [...questionBank, transferQuestion]) {
    question.options.forEach((option, index) => {
      assert.equal(
        getProbe(question, index),
        expected[question.id][index],
        `${question.id}/${index}`,
      );
      assert.equal(
        getProbe(question, option),
        expected[question.id][index],
        `${question.id}/${option}`,
      );
    });
  }
  assert.equal(probes.sign.options[probes.sign.answer], "Âm");
  assert.equal(
    probes.root.options[probes.root.answer],
    "u = 4/5 hoặc u = −4/5",
  );
  assert.equal(probes.identity.options[probes.identity.answer], "16/25");
});

test("missing or non-boolean evidence never produces a supported conclusion", () => {
  assert.equal(summarizeEvidence().status, "insufficient");
  for (const value of [undefined, null, 0, 1, "", "true", "false", NaN]) {
    assert.equal(
      summarizeEvidence({ baseCorrect: value, transferCorrect: true }).status,
      "insufficient",
    );
    assert.equal(
      summarizeEvidence({ baseCorrect: true, transferCorrect: value }).status,
      "insufficient",
    );
    for (const probeKey of Object.keys(probes)) {
      assert.equal(
        summarizeEvidence({
          baseCorrect: true,
          transferCorrect: true,
          probeKey,
          probeCorrect: value,
        }).status,
        "insufficient",
      );
    }
  }
});

test("all complete evidence combinations use conservative, scoped conclusions", () => {
  for (const baseCorrect of [false, true]) {
    for (const transferCorrect of [false, true]) {
      for (const probeKey of [null, ...Object.keys(probes)]) {
        for (const probeCorrect of [false, true]) {
          const result = summarizeEvidence({
            baseCorrect,
            transferCorrect,
            probeKey,
            probeCorrect,
          });
          const expected = !transferCorrect
            ? "practice"
            : probeKey && !probeCorrect
              ? "insufficient"
              : !baseCorrect && !probeKey
                ? "insufficient"
                : "supported";
          assert.equal(
            result.status,
            expected,
            JSON.stringify({
              baseCorrect,
              transferCorrect,
              probeKey,
              probeCorrect,
            }),
          );
          assert.ok(result.title.trim() && result.detail.trim());
          if (result.status === "supported") {
            assert.match(result.detail, /phạm vi|chưa đại diện/);
            assert.doesNotMatch(
              result.title,
              /nắm vững|thành thạo|hoàn toàn hiểu/i,
            );
          }
        }
      }
    }
  }
});

test("unrecognized probes cannot supply missing evidence or certify improvement", () => {
  for (const probeKey of ["unknown", "__proto__", "constructor"]) {
    assert.equal(
      summarizeEvidence({
        baseCorrect: false,
        transferCorrect: true,
        probeKey,
        probeCorrect: true,
      }).status,
      "insufficient",
    );
    assert.equal(
      summarizeEvidence({ transferCorrect: true, probeKey, probeCorrect: true })
        .status,
      "insufficient",
    );
  }
});
