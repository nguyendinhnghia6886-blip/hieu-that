import assert from "node:assert/strict";
import { test } from "node:test";
import { lessons, questionBank } from "./dist/learning.js";
import { createStudentViews } from "./dist/views/student.js";
import { createPracticeViews } from "./dist/views/practice.js";
import { createTeacherViews } from "./dist/views/teacher.js";
import { slideGuides } from "./dist/content/slide-guides.js";
import { knowledgeMap, prerequisites } from "./dist/ui/knowledge-map.js";
import {
  clipHalfplane,
  boundaryPoints,
  satisfies,
  sampleStats,
  counts,
  lessonLab,
  renderLab,
} from "./dist/ui/lesson-labs.js";

test("every slide has its own explanation path and safe interactive example", () => {
  for (const lesson of lessons) {
    assert.equal(slideGuides[lesson.id].length, lesson.slides.length);
    assert.equal(
      new Set(slideGuides[lesson.id].map((s) => JSON.stringify(s))).size,
      lesson.slides.length,
    );
    for (let i = 0; i < lesson.slides.length; i++) {
      const html = lessonLab(lesson, i);
      assert.match(html, /Sơ đồ giải thích slide/);
      assert.doesNotMatch(html, /undefined|NaN/);
      if (lesson.id === "propositions")
        assert.doesNotMatch(html, /Venn|A ∩ B/);
    }
  }
});

test("halfplane clipping matches independent point checks and excludes strict borders", () => {
  const square = [
    [-6, -5],
    [6, -5],
    [6, 5],
    [-6, 5],
  ];
  for (const [a, b, c] of [
    [2, 1, -4],
    [0, 2, 0],
    [1, 0, 3],
    [-2, 1, 0],
    [1, 1, 30],
  ]) {
    for (const p of clipHalfplane(square, a, b, c))
      assert.ok(a * p[0] + b * p[1] + c < 1e-8);
    for (const p of boundaryPoints(a, b, c))
      assert.ok(Math.abs(a * p[0] + b * p[1] + c) < 1e-8);
  }
  assert.equal(clipHalfplane(square, 1, 1, 30).length, 0);
  assert.equal(satisfies(2, 1, -4, 2, 0, "lt"), false);
  assert.equal(satisfies(2, 1, -4, 2, 0, "le"), true);
  assert.equal(satisfies(0, 1, 0, 1, 2, "gt"), true);
  assert.match(
    renderLab("inequalities-2var", {
      a: 0,
      b: 0,
      c: 0,
      sign: "le",
      x: 0,
      y: 0,
    }),
    /Không hợp lệ/,
  );
});

test("explorations calculate statistics, combinations, circle position and probability", () => {
  assert.deepEqual(sampleStats(10), {
    mean: 6,
    median: 6,
    q1: 3,
    q3: 9,
    variance: 8,
  });
  assert.equal(sampleStats(40).median, 6);
  assert.deepEqual(counts(5, 2), { p: 120, a: 20, c: 10 });
  assert.equal(counts(2, 5), null);
  assert.match(
    renderLab("circle", { h: 0, k: 0, r: 2, x: 2, y: 0 }),
    /nằm trên/,
  );
  assert.match(renderLab("probability", { chosen: [] }), /P\(A\) = 0\/6/);
  assert.match(
    renderLab("probability", { chosen: [1, 2, 3, 4, 5, 6] }),
    /P\(A\) = 6\/6/,
  );
  assert.match(
    renderLab("quadratic-functions", { a: 0, b: 1, c: 0 }),
    /không còn bậc hai/,
  );
});

test("knowledge tree covers every topic once and never invents assessment evidence", () => {
  const data = { sessions: [], completed: ["sets"] },
    html = knowledgeMap(lessons, data);
  for (const l of lessons) {
    assert.ok(Object.hasOwn(prerequisites, l.id));
    for (const parent of prerequisites[l.id])
      assert.ok(lessons.some((x) => x.id === parent));
    // Every lesson has exactly one main node; crosslinks may reference it again.
    assert.equal(
      html.split(`<strong>${l.shortTitle.replaceAll("&", "&amp;")}</strong>`)
        .length - 1,
      1,
    );
  }
  assert.equal((html.match(/Chưa có dữ liệu kiểm tra/g) || []).length, 15);
  assert.doesNotMatch(html, /has-evidence/);
  assert.match(html, /Cũng liên hệ với/);
  data.sessions = [{ lessonId: "sets", status: "supported" }];
  assert.equal(
    (knowledgeMap(lessons, data).match(/has-evidence/g) || []).length,
    1,
  );
});

function context() {
  const data = {
    sessions: [],
    completed: [],
    visited: {},
    notes: [],
    approved: [],
    goal: 3,
    teacherDraft: "",
  };
  const state = {
    role: "student",
    lesson: "values",
    slide: 0,
    interactiveAngle: 30,
    support: "formula",
    filter: "all",
  };
  return {
    data,
    state,
    practice: null,
    storageAvailable: true,
    lessonFor: (id) => lessons.find((lesson) => lesson.id === id),
    lessonIcon: () => "circle",
    thisWeekSessions: () => data.sessions,
    activeQuestion: () => questionBank[0],
    workspace: { chat: () => "<p>Hỏi đáp theo bài</p>" },
  };
}

test("student views render every slide with current angle after switching lessons", () => {
  const ctx = context(),
    views = createStudentViews(() => ctx);
  assert.match(views.home(), /Lộ trình học tập/);
  assert.match(
    views.lessonView(),
    new RegExp(`${lessons.flatMap((l) => l.slides).length} slide`),
  );
  ctx.state.activeLesson = true;
  for (const lesson of lessons) {
    ctx.state.lesson = lesson.id;
    for (let slide = 0; slide < lesson.slides.length; slide++) {
      ctx.state.slide = slide;
      const html = views.lessonView();
      assert.ok(html.includes(lesson.slides[slide].title));
      if (["values", "signs"].includes(lesson.id))
        assert.match(html, /góc 30 độ/);
    }
  }
});

test("practice views follow changing attempts and safely render saved evidence", () => {
  const ctx = context(),
    views = createPracticeViews(() => ctx);
  assert.match(views.practiceView(), /Bắt đầu từ điều bạn đang học/);
  ctx.practice = {
    lessonId: "values",
    phase: "base",
    selected: null,
    submitted: false,
    reflection: "<script>test</script>",
  };
  assert.match(views.practiceView(), /&lt;script&gt;test&lt;\/script&gt;/);
  for (const phase of ["probe", "transfer"]) {
    ctx.practice.phase = phase;
    assert.match(views.practiceView(), /Chọn đáp án/);
  }
  const result = {
    id: "r1",
    lessonId: "values",
    time: Date.now(),
    status: "practice",
    title: "Cần luyện thêm",
    detail: "<img src=x>",
    history: [
      {
        phase: "base",
        correct: false,
        prompt: "<script>x</script>",
        answer: "A",
        expected: "B",
      },
    ],
    hints: 1,
    duration: 60,
  };
  ctx.practice = { phase: "result", result };
  ctx.data.sessions.push(result);
  assert.match(views.resultView(), /&lt;script&gt;x&lt;\/script&gt;/);
  assert.match(views.progressView(), /&lt;img src=x&gt;/);
});

test("teacher views read current filter and storage availability", () => {
  const ctx = context(),
    views = createTeacherViews(() => ctx);
  ctx.state.role = "teacher";
  assert.match(views.teacherHome(), /Hiểu học sinh/);
  assert.match(views.libraryView(), /data-id="q12"/);
  ctx.state.filter = "signs";
  assert.match(views.libraryView(), /value="signs" selected/);
  assert.doesNotMatch(views.libraryView(), /data-id="q12"/);
  assert.match(views.settingsView(), /đang được lưu cục bộ trong trình duyệt/);
  ctx.storageAvailable = false;
  assert.match(views.settingsView(), /chưa cho phép lưu lâu dài/);
});

test("student views and practice views filter accurately by chapter and render topic SVG visuals", () => {
  const ctx = context(),
    studentViews = createStudentViews(() => ctx),
    practiceViews = createPracticeViews(() => ctx);

  // 1. Khi chưa chọn chương, hiển thị đầy đủ 15 chủ đề
  ctx.state.activeLesson = false;
  ctx.state.chapterFilter = "all";
  let html = studentViews.lessonView();
  for (const lesson of lessons) {
    const escapedTitle = lesson.shortTitle.replace(/&/g, "&amp;");
    assert.ok(html.includes(escapedTitle), `Overview contains ${escapedTitle}`);
  }

  // 2. Lọc theo Chương I: chỉ chứa 2 bài của Chương I, loại trừ các chương khác trong danh sách bài học
  ctx.state.chapterFilter = "chuong-1";
  html = studentViews.lessonView();
  assert.match(html, /data-lesson="propositions"/);
  assert.match(html, /data-lesson="sets"/);
  assert.doesNotMatch(html, /data-lesson="cosine"/);
  assert.doesNotMatch(html, /data-lesson="inequalities"/);
  assert.doesNotMatch(html, /data-lesson="combinatorics"/);

  // 3. Lọc theo Chương IV: chỉ chứa bài vectơ
  ctx.state.chapterFilter = "chuong-4";
  html = studentViews.lessonView();
  assert.match(html, /data-lesson="vectors-intro"/);
  assert.match(html, /data-lesson="scalar-product"/);
  assert.doesNotMatch(html, /data-lesson="propositions"/);
  assert.doesNotMatch(html, /data-lesson="probability"/);

  // 4. Luyện tập cũng hỗ trợ lọc chương
  ctx.state.chapterFilter = "chuong-8";
  const practiceHtml = practiceViews.practiceView();
  assert.match(practiceHtml, /data-lesson="combinatorics"/);
  assert.doesNotMatch(practiceHtml, /data-lesson="cosine"/);

  // 5. Kiểm tra tất cả các kiểu hình vẽ SVG chuyên đề
  const visualTypes = [
    "logic",
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
  ];
  for (const lesson of lessons) {
    for (const slide of lesson.slides) {
      assert.ok(
        visualTypes.includes(slide.visual),
        `Slide visual type ${slide.visual} is recognized`,
      );
    }
  }
});
