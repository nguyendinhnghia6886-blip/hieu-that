import assert from "node:assert/strict";
import { test } from "node:test";
import { lessons, questionBank } from "./dist/learning.js";
import { createStudentViews } from "./dist/views/student.js";
import { createPracticeViews } from "./dist/views/practice.js";
import { createTeacherViews } from "./dist/views/teacher.js";

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
  assert.match(views.lessonView(), /15 slide/);
  ctx.state.activeLesson = true;
  for (const lesson of lessons) {
    ctx.state.lesson = lesson.id;
    for (let slide = 0; slide < lesson.slides.length; slide++) {
      ctx.state.slide = slide;
      const html = views.lessonView();
      assert.ok(html.includes(lesson.slides[slide].title));
      if (lesson.id !== "cosine") assert.match(html, /góc 30 độ/);
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
