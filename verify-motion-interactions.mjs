import test from "node:test";
import assert from "node:assert/strict";
import { formatFormula } from "./dist/views/student.js";
import { renderLab } from "./dist/ui/lesson-labs.js";
import { slideGuides } from "./dist/content/slide-guides.js";
import { lessons } from "./dist/content/lessons.js";

test("formatFormula correctly highlights critical mathematical conditions including < and >", () => {
  // Test 1: Delta and a ≠ 0
  const formula1 = "y = ax² + bx + c (a ≠ 0) · Δ > 0 có hai nghiệm phân biệt";
  const html1 = formatFormula(formula1);
  assert.ok(html1.includes('data-pen="underline"'), "Must contain rough notation pen mark");
  assert.ok(html1.includes("a ≠ 0"), "Must highlight a ≠ 0");
  assert.ok(html1.includes("Δ &gt; 0"), "Must highlight Δ > 0 even when HTML encoded");

  // Test 2: Angle range with <
  const formula2 = "90° < α < 180°: sin α > 0, cos α < 0";
  const html2 = formatFormula(formula2);
  assert.ok(html2.includes("90° &lt; α &lt; 180°"), "Must highlight angle range with <");

  // Test 3: Quantifiers and sum of squares
  const formula3 = "ax + by + c = 0 (a² + b² ≠ 0) · ∀x ∈ ℝ, x² ≥ 0";
  const html3 = formatFormula(formula3);
  assert.ok(html3.includes("a² + b² ≠ 0"), "Must highlight a² + b² ≠ 0");
  assert.ok(html3.includes("∀"), "Must highlight quantifier ∀");
});

test("halfplane construction handles test point on boundary line mathematically", () => {
  // Trường hợp 1: c = 0, điểm M(0; 0) nằm ngay trên đường thẳng x + y = 0
  const vOnLine = { a: 1, b: 1, c: 0, sign: "le", x: 0, y: 0, _constructStep: 3 };
  const htmlOnLine = renderLab("inequalities-2var", vOnLine);
  // Không được nói M(0, 0) không thuộc bờ; phải cảnh báo M nằm trên bờ và chọn điểm thay thế M'
  assert.match(
    htmlOnLine,
    /nằm ngay trên bờ d|không thể dùng làm điểm thử/i,
    "Phải phát hiện M(0,0) nằm trên bờ d khi c = 0 và chọn điểm thay thế M'",
  );
  assert.match(htmlOnLine, /M'/);

  // Trường hợp 2: c = -4, điểm M(0; 0) KHÔNG nằm trên đường thẳng 2x + y - 4 = 0
  const vNotOnLine = { a: 2, b: 1, c: -4, sign: "le", x: 0, y: 0, _constructStep: 3 };
  const htmlNotOnLine = renderLab("inequalities-2var", vNotOnLine);
  assert.match(htmlNotOnLine, /không thuộc bờ d/);
  assert.doesNotMatch(htmlNotOnLine, /M'/);

  // Kiểm tra bước 4 và 5
  const vStep4 = { a: 1, b: 1, c: 0, sign: "le", x: 0, y: 0, _constructStep: 4 };
  const htmlStep4 = renderLab("inequalities-2var", vStep4);
  assert.match(htmlStep4, /Miền nghiệm/);

  const vStep5 = { a: 1, b: 1, c: 0, sign: "le", x: 0, y: 0, _constructStep: 5 };
  const htmlStep5 = renderLab("inequalities-2var", vStep5);
  assert.match(htmlStep5, /NÉT LIỀN/);
});

test("slide guides contain complete, non-generic pedagogical sentences for every slide", () => {
  for (const lesson of lessons) {
    const guides = slideGuides[lesson.id];
    assert.equal(guides.length, lesson.slides.length);
    for (let i = 0; i < guides.length; i++) {
      const [step1, step2, step3] = guides[i];
      // Không bị cắt câu lửng
      assert.ok(!step1.endsWith("…") && !step1.endsWith("..."), `Step 1 of ${lesson.id} slide ${i+1} must not be cut`);
      assert.ok(!step2.endsWith("…") && !step2.endsWith("..."), `Step 2 of ${lesson.id} slide ${i+1} must not be cut`);
      assert.ok(!step3.endsWith("…") && !step3.endsWith("..."), `Step 3 of ${lesson.id} slide ${i+1} must not be cut`);
      // Đủ dài và mang ý nghĩa nội dung
      assert.ok(step1.length >= 10, `Step 1 of ${lesson.id} slide ${i+1} must have content`);
      assert.ok(step2.length >= 5, `Step 2 of ${lesson.id} slide ${i+1} must have content`);
      assert.ok(step3.length >= 10, `Step 3 of ${lesson.id} slide ${i+1} must have content`);
    }
  }
});
