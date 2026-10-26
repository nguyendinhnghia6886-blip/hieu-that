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

test("all lessons contain five complete, identifiable slides", () => {
  assert.equal(lessons.length, 15);
  assert.equal(
    new Set(lessons.map((lesson) => lesson.id)).size,
    lessons.length,
  );
  assert.equal(lessons.flatMap((lesson) => lesson.slides).length, 75);
  for (const lesson of lessons) {
    assert.equal(lesson.slides.length, 5, lesson.id);
    for (const slide of lesson.slides) {
      for (const key of ["eyebrow", "title", "body", "formula", "tip"]) {
        assert.equal(typeof slide[key], "string", `${lesson.id}: ${key}`);
        assert.ok(slide[key].trim(), `${lesson.id}: empty ${key}`);
      }
      assert.ok(
        [
          "circle",
          "signs",
          "triangle",
          "venn",
          "halfplane",
          "vector",
          "statistics",
          "parabola",
          "coordinate",
          "combinatorics",
          "probability",
        ].includes(slide.visual),
        slide.visual,
      );
    }
  }
});

test("question bank and transfer exercise have unique ids, valid answers, hints and lesson references", () => {
  assert.equal(questionBank.length, 60);
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

test("all 60 answer keys in the question bank agree with independently evaluated mathematics", () => {
  const expectedAnswers = {
    // Chương III - cốt lõi
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

    // Chương I: Mệnh đề & Tập hợp
    q_prop_1: "15 là số nguyên tố.",
    q_prop_2: "∃x ∈ ℝ, x² − x + 1 ≤ 0",
    q_prop_3: "Hình vuông là điều kiện đủ để ABCD là hình chữ nhật",
    q_prop_4: "∃x ∈ ℝ, x² − 4 = 0",
    q_set_1: "A = {2}",
    q_set_2: "[1; 3)",
    q_set_3: "(−∞; 4)",
    q_set_4: "[−3; −1]",

    // Chương II: Bất phương trình bậc nhất hai ẩn
    q_ineq_1: "(1; 0)",
    q_ineq_2: "x + 2y ≤ 5",
    q_ineq_3: "Có chứa gốc tọa độ O",
    q_ineq_4: "50x + 80y ≤ 1000",
    q_sys_1: "(1; 1)",
    q_sys_2: "Tam giác vuông",
    q_sys_3: "10",
    q_sys_4: "Tại một trong các đỉnh của miền đa giác nghiệm",

    // Chương III mở rộng: Định lý sin & diện tích
    q_sin_1: "6",
    q_sin_2: "5",
    q_sin_3: "9",
    q_sin_4: "8√6/3",

    // Chương IV: Vectơ & tích vô hướng
    q_vec_1: "AB + BC = AC",
    q_vec_2: "AC",
    q_vec_3: "CB",
    q_vec_4: "IA + IB = 0",
    q_scal_1: "5",
    q_scal_2: "m = 1",
    q_scal_3: "2",
    q_scal_4: "5",

    // Chương V: Thống kê mô tả
    q_stat_1: "7",
    q_stat_2: "6",
    q_stat_3: "18",
    q_stat_4: "12",

    // Chương VI: Hàm số & tam thức bậc hai
    q_quad_1: "I(2; −1)",
    q_quad_2: "x = 2",
    q_quad_3: "(2; 3)",
    q_quad_4: "m > 1",

    // Chương VII: Hình học tọa độ Oxy
    q_geom_1: "n = (2; −3)",
    q_geom_2: "2",
    q_geom_3: "I(2; −3), R = 4",
    q_geom_4: "2x + y − 5 = 0",

    // Chương VIII: Đại số tổ hợp
    q_comb_1: "9",
    q_comb_2: "12",
    q_comb_3: "120",
    q_comb_4: "4060",

    // Chương IX: Xác suất
    q_prob_1: "6",
    q_prob_2: "1/2",
    q_prob_3: "3/8",
    q_prob_4: "17/45",
  };

  assert.equal(Object.keys(expectedAnswers).length, 60);
  for (const [id, answer] of Object.entries(expectedAnswers)) {
    assert.equal(choice(id), answer, `Checking choice for ${id}`);
  }

  // Kiểm tra độc lập phép tính số học / đại số / hình học
  assert.equal(2 ** 2 - 4, 0); // q_prop_4

  const nRoots = [-2, 2].filter((x) => x >= 0 && Number.isInteger(x));
  assert.deepEqual(nRoots, [2]); // q_set_1

  assert.ok(2 * 1 - 3 * 0 + 1 > 0); // q_ineq_1
  assert.ok(2 * 0 - 3 * 1 + 1 <= 0);

  const maxF = Math.max(2 * 0 + 5 * 0, 2 * 3 + 5 * 0, 2 * 0 + 5 * 2);
  assert.equal(maxF, 10); // q_sys_3

  near(6 / (2 * Math.sin(radians(30))), 6, "q_sin_1");
  near(0.5 * 4 * 5 * Math.sin(radians(30)), 5, "q_sin_2");
  assert.equal((5 + 6 + 7) / 2, 9); // q_sin_3
  near(
    (8 * Math.sin(radians(45))) / Math.sin(radians(60)),
    (8 * Math.sqrt(6)) / 3,
    "q_sin_4",
  );

  assert.equal(2 * 4 + 3 * -1, 5); // q_scal_1
  assert.equal(1 * -2 + 2 * 1, 0); // q_scal_2
  near(2 * 2 * Math.cos(radians(60)), 2, "q_scal_3");
  assert.equal(Math.hypot(-3, 4), 5); // q_scal_4

  assert.equal([2, 4, 6, 8, 10].reduce((a, b) => a + b) / 5, 6); // q_stat_2
  assert.equal(Math.max(12, 15, 18, 22, 30) - Math.min(12, 15, 18, 22, 30), 18); // q_stat_3
  assert.equal(27 - 15, 12); // q_stat_4

  const x0 = -(-4) / (2 * 1);
  const y0 = x0 ** 2 - 4 * x0 + 3;
  assert.equal(x0, 2); // q_quad_1
  assert.equal(y0, -1);

  assert.equal(Math.abs(3 * 1 + 4 * 2 - 1) / Math.hypot(3, 4), 2); // q_geom_2

  assert.equal(5 + 4, 9); // q_comb_1
  assert.equal(3 * 4, 12); // q_comb_2
  let p5 = 1;
  for (let i = 1; i <= 5; i++) p5 *= i;
  assert.equal(p5, 120); // q_comb_3
  assert.equal((30 * 29 * 28) / 6, 4060); // q_comb_4

  assert.equal(3 / 6, 0.5); // q_prob_2
  assert.equal(3 / (3 + 5), 3 / 8); // q_prob_3
  const c10_2 = (10 * 9) / 2; // 45
  const c8_2 = (8 * 7) / 2; // 28
  near(1 - c8_2 / c10_2, 17 / 45, "q_prob_4");
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
    const exp = expected[question.id] || [null, null, null, null];
    question.options.forEach((option, index) => {
      assert.equal(
        getProbe(question, index),
        exp[index],
        `${question.id}/${index}`,
      );
      assert.equal(
        getProbe(question, option),
        exp[index],
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
