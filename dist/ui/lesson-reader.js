import { esc } from "./dom.js";
import { lessons, questionBank } from "../learning.js";
import { slideVisual, defaultSlideAngle } from "./visuals.js";

// Match self-checks to an existing skill group. These are ungraded reading aids.
const sectionSkills = {
  propositions: [
    "proposition-logic",
    "proposition-negation",
    "proposition-logic",
    "proposition-logic",
    "proposition-logic",
    "proposition-negation",
    "proposition-proof",
    "proposition-logic",
  ],
  sets: [
    "set-operations",
    "set-operations",
    "set-intervals",
    "set-operations",
    "set-operations",
    "set-operations",
    "set-operations",
    "set-intervals",
  ],
  "inequalities-2var": [
    "inequalities-2var",
    "inequality-halfplane",
    "inequality-halfplane",
    "inequality-halfplane",
    "inequality-halfplane",
    "inequalities-2var",
    "inequalities-2var",
    "inequality-halfplane",
  ],
  "system-inequalities": [
    "system-inequalities",
    "system-inequalities",
    "system-optimization",
    "system-optimization",
    "system-optimization",
    "system-optimization",
    "system-inequalities",
    "system-optimization",
  ],
  values: [
    "trig-values",
    "identity",
    "trig-values",
    "special-angle",
    "supplementary",
    "trig-values",
    "identity",
    "identity-and-sign",
  ],
  signs: [
    "sign",
    "sign",
    "sign",
    "boundary",
    "trig-signs",
    "trig-signs",
    "trig-signs",
    "sign",
  ],
  cosine: [
    "cosine-law",
    "cosine-law",
    "cosine-law",
    "cosine-and-sign",
    "cosine-law",
    "cosine-law",
    "cosine-law",
    "cosine-law",
  ],
  "sine-law": [
    "sine-law",
    "triangle-area",
    "triangle-area",
    "triangle-area",
    "triangle-area",
    "sine-law",
    "triangle-area",
    "sine-law",
  ],
  "vectors-intro": [
    "vectors",
    "vectors",
    "vectors",
    "vector-addition",
    "vector-addition",
    "vector-addition",
    "vectors",
    "vector-addition",
  ],
  "scalar-product": [
    "scalar-product",
    "scalar-product",
    "scalar-product",
    "scalar-product",
    "vector-coordinates",
    "vector-coordinates",
    "scalar-product",
    "vector-coordinates",
  ],
  statistics: [
    "statistical-central",
    "statistical-central",
    "statistical-dispersion",
    "statistical-dispersion",
    "statistical-central",
    "statistical-dispersion",
    "statistical-central",
    "statistics",
  ],
  "quadratic-functions": [
    "quadratic-functions",
    "quadratic-vertex",
    "quadratic-functions",
    "quadratic-vertex",
    "quadratic-sign",
    "quadratic-sign",
    "quadratic-sign",
    "quadratic-functions",
  ],
  "analytic-geometry": [
    "line-equations",
    "line-equations",
    "line-equations",
    "line-equations",
    "line-equations",
    "line-equations",
    "circle-equations",
    "circle-equations",
  ],
  combinatorics: [
    "counting-principles",
    "counting-principles",
    "counting-principles",
    "permutations-combinations",
    "permutations-combinations",
    "permutations-combinations",
    "permutations-combinations",
    "combinatorics",
  ],
  probability: [
    "sample-space",
    "sample-space",
    "classical-probability",
    "probability",
    "probability",
    "classical-probability",
    "probability",
    "classical-probability",
  ],
};
export function sectionQuestion(lessonId, index) {
  const curated =
    lessonId === "propositions"
      ? [
          "q_prop_6",
          "q_prop_2",
          "q_prop_11",
          "q_prop_14",
          "q_prop_18",
          "q_prop_21",
          "q_prop_23",
          "q_prop_24",
        ][index]
      : null;
  if (curated) return questionBank.find((q) => q.id === curated) || null;
  const pool = questionBank.filter(
    (q) =>
      q.lessonId === lessonId &&
      q.skill === sectionSkills[lessonId]?.[index] &&
      Number.isInteger(q.answer) &&
      Array.isArray(q.options) &&
      q.options.every((o) => typeof o === "string"),
  );
  const title =
    lessons.find((l) => l.id === lessonId)?.slides[index]?.title || "";
  const words = (text) =>
    text.toLocaleLowerCase("vi").match(/[\p{L}\p{N}]+/gu) || [];
  const query = words(title);
  const common = new Set([
    "của",
    "và",
    "là",
    "các",
    "một",
    "hai",
    "trong",
    "với",
    "những",
    "theo",
    "cho",
    "bài",
    "toán",
    "học",
    "phương",
    "pháp",
    "khái",
    "niệm",
    "chiến",
    "thuật",
    "xử",
    "lý",
    "câu",
    "trắc",
    "nghiệm",
  ]);
  const tokens = [...new Set(query.filter((w) => !common.has(w)))];
  const phrases = query.slice(1).map((w, i) => `${query[i]} ${w}`);
  const score = (q) => {
    const text = words(q.prompt).join(" ");
    return (
      tokens.filter((w) => words(q.prompt).includes(w)).length +
      3 * phrases.filter((p) => text.includes(p)).length
    );
  };
  return [...pool].sort((a, b) => score(b) - score(a))[0] || null;
}
export function namespaceVisual(html, key) {
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  for (const id of new Set(ids)) {
    html = html
      .replaceAll(`id="${id}"`, `id="${key}-${id}"`)
      .replaceAll(`for="${id}"`, `for="${key}-${id}"`)
      .replaceAll(`url(#${id})`, `url(#${key}-${id})`)
      .replaceAll(`href="#${id}"`, `href="#${key}-${id}"`);
  }
  return html;
}
function selfCheck(q, key) {
  if (!q) return "";
  return `<details class="section-self-check"><summary>Tự kiểm tra · câu củng cố cùng nhóm kiến thức</summary><p class="muted">Không tính điểm hoặc ghi nhận là đã nắm vững bài. Luyện tập đầy đủ và xác minh nằm ở cuối bài.</p><form data-section-quiz="${q.id}"><fieldset><legend>${esc(q.prompt)}</legend>${q.options.map((o, i) => `<label><input type="radio" name="${key}-answer" value="${i}" required><span>${String.fromCharCode(65 + i)}. ${esc(o)}</span></label>`).join("")}</fieldset><button type="submit" class="button secondary small">Kiểm tra câu trả lời</button><div class="section-quiz-feedback" role="status" aria-live="polite"></div></form></details>`;
}
export function renderLessonReader(
  lesson,
  state,
  data,
  formatFormula,
  formatExample,
) {
  const viewed = data.visited[lesson.id] || [];
  return `<div class="lesson-topbar"><button class="button ghost small" data-action="lesson-list">← Danh sách bài học</button><span class="tag green">${esc(lesson.chapterTitle)}</span></div><header class="reader-heading"><span class="eyebrow">HỌC THEO TỪNG PHẦN</span><h1>${esc(lesson.shortTitle)}</h1><p>${esc(lesson.description)}</p><div class="reader-meta"><span>${lesson.slides.length} phần kiến thức</span><span>${esc(lesson.duration)}</span><span data-reader-progress>${viewed.length}/${lesson.slides.length} phần đã đánh dấu</span></div><p class="reader-progress-note">Tiến độ cũ được giữ lại. Đánh dấu đã học giúp bạn theo dõi việc đọc, không thay thế kết quả kiểm tra.</p></header><div class="lesson-reader" data-reader-lesson="${lesson.id}"><details class="reader-toc" open><summary>Mục lục bài học</summary><nav aria-label="Các phần của bài học">${lesson.slides.map((s, i) => `<button type="button" data-reader-target="${i}" ${i === state.slide ? 'aria-current="location"' : ""}><span class="reader-toc-number">${String(i + 1).padStart(2, "0")}</span><span>${esc(s.title)}</span><span class="reader-toc-check" data-reader-check="${i}">${viewed.includes(i) ? "✓" : ""}</span></button>`).join("")}</nav></details><div class="reader-sections">${lesson.slides
    .map((s, i) => {
      const key = `lesson-${lesson.id}-${i}`;
      return `<section class="lesson-section card" id="${key}" data-reader-section="${i}" aria-labelledby="${key}-title"><header><span class="eyebrow">PHẦN ${i + 1} · ${esc(s.eyebrow)}</span><h2 id="${key}-title" tabindex="-1">${esc(s.title)}</h2></header><div class="section-theory"><h3>Kiến thức cần nắm</h3><p>${esc(s.body)}</p>${formatFormula(s.formula)}</div>${formatExample(s.example)}${s.advanced ? `<details class="section-advanced"><summary>Bài toán nâng cao & phương pháp</summary><div class="advanced-content">${esc(s.advanced)}</div></details>` : ""}<details class="section-exploration"><summary>Sơ đồ & khám phá kiến thức</summary><div class="reader-visual">${namespaceVisual(slideVisual(lesson, i, s, defaultSlideAngle(lesson.id, i)), key).replace("Sơ đồ giải thích slide", "Sơ đồ giải thích phần bài học")}</div></details><div class="tip-box"><p><strong>Lưu ý khi học</strong><br>${esc(s.tip)}</p></div>${selfCheck(sectionQuestion(lesson.id, i), key)}<footer class="section-footer"><button type="button" class="button secondary small" data-reader-mark="${i}" aria-pressed="${viewed.includes(i)}">${viewed.includes(i) ? "✓ Đã đánh dấu học phần này" : "Đánh dấu đã học phần này"}</button></footer></section>`;
    })
    .join(
      "",
    )}<section class="reader-finish card"><span class="eyebrow">CỦNG CỐ SAU BÀI HỌC</span><h2>Thử áp dụng điều bạn vừa học</h2><p>Làm bài luyện tập, trả lời câu xác minh khi cần và xem lại căn cứ từ câu trả lời của bạn.</p><button class="button primary" data-action="start-practice" data-lesson="${lesson.id}">Luyện tập & xác minh →</button><button class="button ghost" data-action="lesson-list">Chọn bài học khác</button></section></div></div>`;
}

export function createReaderController({
  state,
  data,
  lessonFor,
  persist,
  onContextChange,
  doc = document,
}) {
  let observer = null;
  const reduced = () =>
    data.reducedMotion ||
    globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  function active(index) {
    if (
      !Number.isInteger(index) ||
      index < 0 ||
      index >= lessonFor(state.lesson).slides.length
    )
      return;
    const changed = state.slide !== index;
    state.slide = index;
    data.slideProgress[state.lesson] = index;
    doc.querySelectorAll("[data-reader-target]").forEach((b) => {
      if (Number(b.dataset.readerTarget) === index)
        b.setAttribute("aria-current", "location");
      else b.removeAttribute("aria-current");
    });
    if (changed) {
      persist();
      onContextChange?.();
    }
  }
  function jump(index) {
    const section = doc.querySelector(`[data-reader-section="${index}"]`);
    if (!section) return;
    active(index);
    section.scrollIntoView({
      behavior: reduced() ? "instant" : "smooth",
      block: "start",
    });
    section.querySelector("h2")?.focus({ preventScroll: true });
  }
  function mark(index) {
    const id = state.lesson,
      lesson = lessonFor(id);
    if (!Number.isInteger(index) || index < 0 || index >= lesson.slides.length)
      return;
    data.visited[id] = [...new Set([...(data.visited[id] || []), index])];
    if (
      lesson.slides.every((_, i) => data.visited[id].includes(i)) &&
      !data.completed.includes(id)
    )
      data.completed.push(id);
    persist();
    const btn = doc.querySelector(`[data-reader-mark="${index}"]`);
    if (btn) {
      btn.textContent = "✓ Đã đánh dấu học phần này";
      btn.setAttribute("aria-pressed", "true");
    }
    const check = doc.querySelector(`[data-reader-check="${index}"]`);
    if (check) check.textContent = "✓";
    const progress = doc.querySelector("[data-reader-progress]");
    if (progress)
      progress.textContent = `${data.visited[id].filter((i) => i >= 0 && i < lesson.slides.length).length}/${lesson.slides.length} phần đã đánh dấu`;
  }
  doc.addEventListener("click", (e) => {
    const target = e.target.closest("[data-reader-target]");
    if (target) jump(Number(target.dataset.readerTarget));
    const markButton = e.target.closest("[data-reader-mark]");
    if (markButton) mark(Number(markButton.dataset.readerMark));
  });
  doc.addEventListener("submit", (e) => {
    const form = e.target.closest("[data-section-quiz]");
    if (!form) return;
    e.preventDefault();
    const q = questionBank.find((item) => item.id === form.dataset.sectionQuiz),
      answer = form.querySelector("input:checked");
    if (!q || !answer) return;
    form.querySelector(".section-quiz-feedback").innerHTML =
      `<strong>${Number(answer.value) === q.answer ? "Bạn đã chọn đúng." : "Cùng xem lại cách làm."}</strong><p>Đáp án: ${esc(q.options[q.answer])}</p><p>${esc(q.explanation)}</p><small>Đây là câu củng cố có thể xem lời giải; không được tính như một lần làm đúng độc lập.</small>`;
  });
  function sync() {
    observer?.disconnect();
    observer = null;
    if (
      !doc.querySelector("[data-reader-lesson]") ||
      typeof IntersectionObserver === "undefined"
    )
      return;
    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length)
          active(Number(visible[0].target.dataset.readerSection));
      },
      { rootMargin: "-90px 0px -60% 0px", threshold: 0 },
    );
    doc
      .querySelectorAll("[data-reader-section]")
      .forEach((s) => observer.observe(s));
  }
  return { sync, jump };
}
