import test from "node:test";
import assert from "node:assert/strict";
import handler, { allowedOrigin } from "./api/learning.js";
import { createOnline, resolveScreenForRole } from "./dist/online.js";
import {
  studentOverview,
  studentAssignedView,
  studentTaskView,
  studentGradesView,
  studentSubmissionDetailView,
  studentTeachersView,
} from "./dist/views/online-student.js";
import {
  teacherOverview,
  teacherQuestionsView,
  teacherEditorView,
  teacherAssignmentsView,
  teacherSubmissionsView,
  teacherSubmissionDetailView,
  teacherStudentsView,
} from "./dist/views/online-teacher.js";

test("online API rejects cross-origin requests before accessing auth or data", async () => {
  assert.equal(
    allowedOrigin({
      headers: {
        host: "hieu-that.vercel.app",
        origin: "https://attacker.test",
      },
    }),
    false,
  );
  assert.equal(
    allowedOrigin({
      headers: {
        host: "hieu-that.vercel.app",
        origin: "http://hieu-that.vercel.app",
      },
    }),
    false,
  );
  assert.equal(
    allowedOrigin({
      headers: {
        host: "hieu-that.vercel.app",
        origin: "https://hieu-that.vercel.app",
      },
    }),
    true,
  );
  assert.equal(
    allowedOrigin({
      headers: { host: "localhost:4174", origin: "http://localhost:4174" },
    }),
    true,
  );
  const response = {
    headers: {},
    setHeader(k, v) {
      this.headers[k] = v;
    },
    end(body) {
      this.body = JSON.parse(body);
    },
  };
  await handler(
    {
      method: "POST",
      headers: {
        host: "hieu-that.vercel.app",
        origin: "https://attacker.test",
      },
    },
    response,
  );
  assert.equal(response.statusCode, 403);
  assert.equal(response.headers["Cache-Control"], "no-store");
});

test("role-based routing separates student and teacher screens and blocks cross-role URLs", () => {
  assert.deepEqual(resolveScreenForRole("student", "overview"), {
    screen: "overview",
    redirected: false,
  });
  assert.deepEqual(resolveScreenForRole("student", "assigned"), {
    screen: "assigned",
    redirected: false,
  });
  assert.deepEqual(resolveScreenForRole("student", "questions"), {
    screen: "overview",
    redirected: true,
  });
  assert.deepEqual(resolveScreenForRole("student", "publish"), {
    screen: "overview",
    redirected: true,
  });
  assert.deepEqual(resolveScreenForRole("teacher", "questions"), {
    screen: "questions",
    redirected: false,
  });
  assert.deepEqual(resolveScreenForRole("teacher", "submissions"), {
    screen: "submissions",
    redirected: false,
  });
  assert.deepEqual(resolveScreenForRole("teacher", "teachers"), {
    screen: "overview",
    redirected: true,
  });
  assert.deepEqual(resolveScreenForRole("teacher", "assigned"), {
    screen: "overview",
    redirected: true,
  });
});

test("student login opens learning overview, restores on reload, and hides teacher features", async (t) => {
  const prevLocation = Object.getOwnPropertyDescriptor(globalThis, "location");
  const prevHistory = Object.getOwnPropertyDescriptor(globalThis, "history");
  Object.defineProperty(globalThis, "location", {
    configurable: true,
    writable: true,
    value: { pathname: "/", search: "", hash: "" },
  });
  Object.defineProperty(globalThis, "history", {
    configurable: true,
    writable: true,
    value: {
      replaceState(_s, _t, url) {
        const idx = url.indexOf("#");
        globalThis.location.hash = idx >= 0 ? url.slice(idx) : "";
      },
    },
  });
  t.after(() => {
    if (prevLocation)
      Object.defineProperty(globalThis, "location", prevLocation);
    else delete globalThis.location;
    if (prevHistory) Object.defineProperty(globalThis, "history", prevHistory);
    else delete globalThis.history;
  });

  const studentSnapshot = {
    profile: { id: "stu-1", name: "Nguyễn Minh An", role: "student" },
    questions: [],
    members: [{ id: "tea-1", name: "Cô Lan", code: "GV-LAN12345" }],
    assignments: [
      {
        id: "asg-1",
        teacher_id: "tea-1",
        title: "Bài tập lượng giác số 1",
        instructions: "Làm cẩn thận các câu hỏi.",
        due: "2027-01-01T10:00:00Z",
        questions: [
          {
            id: "q-1",
            type: "choice",
            prompt: "sin 30° bằng bao nhiêu?",
            options: ["1/2", "1", "0", "-1/2"],
            hint: "Xem góc đặc biệt.",
          },
          {
            id: "q-2",
            type: "written",
            prompt: "Giải thích vì sao cos 120° âm.",
            options: [],
          },
        ],
      },
    ],
    submissions: [],
  };

  const state = {
    role: "teacher",
    view: "home",
    mobile: false,
    presentation: false,
  };
  const online = createOnline({
    state,
    render() {},
    toast() {},
    fetchImpl: async (_url, opts) => {
      const { action } = JSON.parse(opts.body);
      if (action === "load") {
        return { ok: true, json: async () => ({ data: studentSnapshot }) };
      }
      return { ok: true, json: async () => ({ ok: true }) };
    },
  });

  await online.init();
  assert.equal(online.isSignedIn(), true);
  assert.equal(online.hasProfile(), true);
  assert.equal(online.role(), "student");
  assert.equal(state.role, "student");
  assert.equal(online.currentScreen(), "overview");
  assert.equal(online.screenTitle(), "Tổng quan học tập");

  const navIds = online.navItems().map((item) => item[0]);
  assert.deepEqual(navIds, [
    "overview",
    "lessons",
    "practice",
    "assigned",
    "grades",
    "teachers",
    "profile",
    "logout",
  ]);

  const html = online.view();
  assert.match(html, /KHÔNG GIAN HỌC TẬP · HỌC SINH/);
  assert.match(html, /Chào Nguyễn Minh An/);
  assert.match(html, /Bài tập lượng giác số 1/);
  assert.doesNotMatch(html, /Kho câu hỏi|Giao bài mới|Chấm điểm/);

  // Attempting to navigate to a teacher screen redirects student to overview
  online.navigate("questions");
  assert.equal(online.currentScreen(), "overview");
  assert.match(online.view(), /không thuộc vai trò tài khoản của bạn/);

  // Navigating between lessons and practice synchronizes state.view, online.currentScreen(), and resets activeLesson/presentation
  state.activeLesson = true;
  state.presentation = true;
  online.navigate("lessons");
  assert.equal(online.currentScreen(), "lessons");
  assert.equal(state.view, "lessons");
  assert.equal(state.presentation, false);
  assert.equal(state.activeLesson, true);

  online.navigate("practice");
  assert.equal(online.currentScreen(), "practice");
  assert.equal(state.view, "practice");
  assert.equal(state.activeLesson, false);
  assert.equal(state.presentation, false);

  online.navigate("assigned");
  assert.equal(online.currentScreen(), "assigned");
  assert.equal(state.view, "online");
  assert.equal(state.activeLesson, false);
});

test("teacher login opens teaching overview with code, stats, and full workflow views", async () => {
  const teacherSnapshot = {
    profile: {
      id: "tea-1",
      name: "Thầy Hùng",
      role: "teacher",
      code: "GV-HUNG2026",
    },
    questions: [
      {
        id: "q-1",
        content: {
          prompt: "Giá trị của cos 60° là?",
          topic: "Giá trị lượng giác",
          type: "choice",
          options: ["1/2", "√3/2", "0", "1"],
          answer: 0,
          explanation: "cos 60° = 1/2",
          status: "approved",
        },
      },
      {
        id: "q-draft",
        content: {
          prompt: "Câu nháp chưa duyệt",
          topic: "Định lý cosin",
          type: "written",
          options: [],
          explanation: "",
          status: "draft",
        },
      },
    ],
    members: [{ id: "stu-1", name: "Nguyễn Minh An", code: null }],
    assignments: [
      {
        id: "asg-1",
        teacher_id: "tea-1",
        title: "Đề kiểm tra 15 phút",
        instructions: "Trình bày rõ ràng.",
        due: null,
        questions: [
          {
            id: "q-1",
            prompt: "Giá trị của cos 60° là?",
            topic: "Giá trị lượng giác",
            type: "choice",
            options: ["1/2", "√3/2", "0", "1"],
            answer: 0,
            explanation: "cos 60° = 1/2",
          },
        ],
      },
    ],
    submissions: [
      {
        id: "sub-1",
        assignment_id: "asg-1",
        student_id: "stu-1",
        student_name: "Nguyễn Minh An",
        title: "Đề kiểm tra 15 phút",
        created_at: "2026-10-27T01:00:00Z",
        score: null,
        pending: 1,
        marks: {},
        feedback: "",
        answers: [
          {
            questionId: "q-1",
            prompt: "Giá trị của cos 60° là?",
            type: "choice",
            response: 0,
            options: ["1/2", "√3/2", "0", "1"],
            correct: true,
            explanation: "cos 60° = 1/2",
          },
          {
            questionId: "q-w",
            prompt: "Giải thích định lý cosin.",
            type: "written",
            response: "a² = b² + c² - 2bc cos A",
            correct: null,
            explanation: "Áp dụng định lý cosin.",
          },
        ],
      },
    ],
  };

  const state = {
    role: "student",
    view: "home",
    mobile: false,
    presentation: false,
  };
  const online = createOnline({
    state,
    render() {},
    toast() {},
    fetchImpl: async () => ({
      ok: true,
      json: async () => ({ data: teacherSnapshot }),
    }),
  });

  await online.open();
  assert.equal(online.role(), "teacher");
  assert.equal(state.role, "teacher");
  assert.equal(online.screenTitle(), "Tổng quan giảng dạy");

  const navIds = online.navItems().map((item) => item[0]);
  assert.deepEqual(navIds, [
    "overview",
    "questions",
    "editor",
    "assignments",
    "submissions",
    "students",
    "profile",
    "logout",
  ]);

  const overviewHTML = online.view();
  assert.match(overviewHTML, /KHÔNG GIAN GIẢNG DẠY · GIÁO VIÊN/);
  assert.match(overviewHTML, /GV-HUNG2026/);
  assert.match(overviewHTML, /Nguyễn Minh An/);

  // Only approved questions appear in assignment publish picker
  online.navigate("publish");
  const publishHTML = online.view();
  assert.match(publishHTML, /Giá trị của cos 60° là\?/);
  assert.doesNotMatch(publishHTML, /value="q-draft"/);
  assert.match(publishHTML, /Còn 1 câu hỏi ở trạng thái Bản nháp/);
});

test("first-time account asks role once and logout isolates subsequent account data", async () => {
  let currentAccount = {
    profile: null,
    questions: [],
    members: [],
    assignments: [],
    submissions: [],
  };

  const state = {
    role: "student",
    view: "home",
    mobile: false,
    presentation: false,
  };
  const online = createOnline({
    state,
    render() {},
    toast() {},
    fetchImpl: async (_url, opts) => {
      const { action } = JSON.parse(opts.body);
      if (action === "load") {
        return { ok: true, json: async () => ({ data: currentAccount }) };
      }
      if (action === "logout") {
        return { ok: true, json: async () => ({ ok: true }) };
      }
      return { ok: true, json: async () => ({ ok: true }) };
    },
  });

  await online.open();
  assert.equal(online.isSignedIn(), true);
  assert.equal(online.hasProfile(), false);
  assert.match(online.view(), /Bạn là giáo viên hay học sinh\?/);

  // Simulate teacher logging in first, then logging out, then student logging in
  currentAccount = {
    profile: {
      id: "tea-99",
      name: "Cô Giáo Bí Mật",
      role: "teacher",
      code: "GV-SECRET99",
    },
    questions: [
      {
        id: "q-sec",
        content: {
          prompt: "Đề thi riêng của Cô Giáo Bí Mật",
          topic: "Toán 10",
          type: "choice",
          options: ["A", "B", "C", "D"],
          answer: 0,
          explanation: "Giải",
          status: "approved",
        },
      },
    ],
    members: [],
    assignments: [],
    submissions: [],
  };
  await online.open();
  assert.equal(online.role(), "teacher");
  assert.match(online.view(), /Cô Giáo Bí Mật/);

  // Logout
  online.navigate("logout");
  await new Promise((r) => setImmediate(r));
  assert.equal(online.isSignedIn(), false);
  assert.equal(online.hasProfile(), false);
  assert.doesNotMatch(online.view(), /Cô Giáo Bí Mật|GV-SECRET99|Đề thi riêng/);

  // Another user (student) signs in on the same browser
  currentAccount = {
    profile: { id: "stu-2", name: "Học Sinh Mới", role: "student" },
    questions: [],
    members: [],
    assignments: [],
    submissions: [],
  };
  await online.open();
  assert.equal(online.role(), "student");
  const studentHTML = online.view();
  assert.match(studentHTML, /Học Sinh Mới/);
  assert.doesNotMatch(studentHTML, /Cô Giáo Bí Mật|GV-SECRET99|Đề thi riêng/);
});

test("student task view hides answers before submission, blocks expired/duplicate submissions, and preserves drafts", () => {
  const snapshot = {
    profile: { id: "stu-1", name: "Minh An", role: "student" },
    members: [{ id: "tea-1", name: "Thầy Hùng", code: "GV-HUNG" }],
    assignments: [
      {
        id: "active-asg",
        teacher_id: "tea-1",
        title: "Bài đang mở",
        instructions: "Làm hết các câu.",
        due: "2099-01-01T00:00:00Z",
        questions: [
          {
            id: "q1",
            type: "choice",
            prompt: "Chọn khẳng định đúng:",
            options: [
              "sin²α + cos²α = 1",
              "sin α = 2",
              "cos α = 3",
              "tan 90° = 0",
            ],
            hint: "Dùng hệ thức lượng giác cơ bản.",
          },
          {
            id: "q2",
            type: "written",
            prompt: "Trình bày cách tìm cos α.",
            options: [],
          },
        ],
      },
      {
        id: "expired-asg",
        teacher_id: "tea-1",
        title: "Bài đã hết hạn",
        instructions: "",
        due: "2020-01-01T00:00:00Z",
        questions: [
          { id: "q3", type: "written", prompt: "Câu quá hạn", options: [] },
        ],
      },
    ],
    submissions: [],
  };

  const drafts = new Map([
    ["active-asg", { q1: "0", q2: "Bài làm đang gõ dở khi mất mạng" }],
  ]);

  const activeHTML = studentTaskView({
    snapshot,
    selectedAssignment: "active-asg",
    drafts,
  });
  assert.match(activeHTML, /Bài làm đang gõ dở khi mất mạng/);
  assert.match(activeHTML, /value="0" checked/);
  assert.doesNotMatch(activeHTML, /Đáp án đúng|Lời giải/);

  const expiredHTML = studentTaskView({
    snapshot,
    selectedAssignment: "expired-asg",
    drafts,
  });
  assert.match(expiredHTML, /Đã quá hạn nộp/);
  assert.doesNotMatch(expiredHTML, /data-online-form="submit"/);

  // Once submitted, student cannot re-open submit form
  snapshot.submissions.push({
    id: "sub-done",
    assignment_id: "active-asg",
    student_id: "stu-1",
    student_name: "Minh An",
    title: "Bài đang mở",
    created_at: "2026-10-27T02:00:00Z",
    score: null,
    pending: 1,
    marks: {},
    feedback: "",
    answers: [],
  });
  const submittedHTML = studentTaskView({
    snapshot,
    selectedAssignment: "active-asg",
    drafts,
  });
  assert.match(submittedHTML, /chỉ nộp một lần/);
  assert.doesNotMatch(submittedHTML, /data-online-form="submit"/);
});

test("ungraded written work shows Chờ chấm (never 0), while valid 0 and decimal marks render accurately", () => {
  const snapshot = {
    profile: { id: "stu-1", name: "Minh An", role: "student" },
    members: [],
    assignments: [],
    submissions: [
      {
        id: "sub-pending",
        assignment_id: "a1",
        student_id: "stu-1",
        student_name: "Minh An",
        title: "Bài tự luận chờ chấm",
        created_at: "2026-10-27T01:00:00Z",
        score: null,
        pending: 1,
        marks: {},
        feedback: "",
        answers: [
          {
            questionId: "w1",
            prompt: "Giải thích dấu lượng giác",
            type: "written",
            response: "Em giải thích như sau...",
            correct: null,
            explanation: "Hướng dẫn chấm.",
          },
        ],
      },
      {
        id: "sub-graded-zero-and-decimal",
        assignment_id: "a2",
        student_id: "stu-1",
        student_name: "Minh An",
        title: "Bài đã chấm điểm 0 và điểm lẻ",
        created_at: "2026-10-27T02:00:00Z",
        score: 3.8,
        pending: 0,
        marks: { w1: 0, w2: 0.75 },
        feedback: "Câu 1 chưa đúng hướng, câu 2 trình bày tốt.",
        answers: [
          {
            questionId: "w1",
            prompt: "Câu tự luận 1",
            type: "written",
            response: "Chưa làm được",
            correct: null,
            explanation: "Hướng dẫn 1",
          },
          {
            questionId: "w2",
            prompt: "Câu tự luận 2",
            type: "written",
            response: "Làm đúng phần lớn",
            correct: null,
            explanation: "Hướng dẫn 2",
          },
        ],
      },
    ],
  };

  const gradesHTML = studentGradesView({
    snapshot,
    localProgress: {
      completedCount: 2,
      totalLessons: 3,
      sessionCount: 5,
      supportedCount: 4,
    },
  });
  // Pending submission must say "Chờ chấm" and not 0/10
  assert.match(gradesHTML, /Chờ chấm \(1 câu tự luận\)/);
  assert.doesNotMatch(gradesHTML, /0\/10 điểm/);
  // Average only counts graded submissions (3,8/10), not turning pending into 0
  assert.match(gradesHTML, /3,8\/10/);
  // Local self-study progress is clearly separated
  assert.match(
    gradesHTML,
    /Lưu cục bộ trên trình duyệt hiện tại · Chưa đồng bộ giữa các thiết bị/,
  );

  // Check pending submission detail
  const pendingDetailHTML = studentSubmissionDetailView({
    snapshot,
    selectedSubmission: "sub-pending",
  });
  assert.match(pendingDetailHTML, /Tự luận · Chờ chấm/);
  assert.match(pendingDetailHTML, /chưa chấm không bị tính thành 0/i);

  // Check graded submission detail with 0 and 0.75 marks
  const gradedDetailHTML = studentSubmissionDetailView({
    snapshot,
    selectedSubmission: "sub-graded-zero-and-decimal",
  });
  assert.match(gradedDetailHTML, /Tự luận · Điểm: 0\/1/);
  assert.match(gradedDetailHTML, /Tự luận · Điểm: 0,75\/1/);
  assert.match(
    gradedDetailHTML,
    /Câu 1 chưa đúng hướng, câu 2 trình bày tốt\./,
  );

  // Teacher grading view preserves draft marks when network fails
  const teacherDetailHTML = teacherSubmissionDetailView({
    snapshot,
    selectedSubmission: "sub-pending",
    markDrafts: new Map([
      [
        "sub-pending",
        { marks: { w1: "0.5" }, feedback: "Nhận xét đang nhập dở" },
      ],
    ]),
  });
  assert.match(teacherDetailHTML, /value="0\.5"/);
  assert.match(teacherDetailHTML, /Nhận xét đang nhập dở/);
});

test("network or server error on submit preserves student work, teacher question draft, and grading draft", async () => {
  const teacherSnapshot = {
    profile: {
      id: "tea-1",
      name: "Thầy Hùng",
      role: "teacher",
      code: "GV-HUNG",
    },
    questions: [],
    members: [],
    assignments: [],
    submissions: [
      {
        id: "sub-1",
        assignment_id: "asg-1",
        student_id: "stu-1",
        student_name: "Minh An",
        title: "Bài kiểm tra",
        created_at: "2026-10-27T01:00:00Z",
        score: null,
        pending: 1,
        marks: {},
        feedback: "",
        answers: [
          {
            questionId: "w1",
            prompt: "Giải thích công thức",
            type: "written",
            response: "Bài làm tự luận của học sinh",
            correct: null,
          },
        ],
      },
    ],
  };

  let shouldFail = false;
  const state = {
    role: "teacher",
    view: "online",
    mobile: false,
    presentation: false,
  };
  const online = createOnline({
    state,
    render() {},
    toast() {},
    fetchImpl: async () => {
      if (shouldFail) {
        return {
          ok: false,
          json: async () => ({ error: "Mất kết nối máy chủ tạm thời." }),
        };
      }
      return {
        ok: true,
        json: async () => ({ data: teacherSnapshot }),
      };
    },
  });

  await online.open();
  shouldFail = true;

  // Teacher saves a question while network fails -> draft must stay in editor
  online.navigate("editor");
  const questionForm = {
    dataset: { onlineForm: "question" },
    values: {
      prompt: "Câu hỏi đang soạn khi rớt mạng",
      topic: "Hệ thức lượng",
      type: "choice",
      option0: "Phương án A",
      option1: "Phương án B",
      option2: "Phương án C",
      option3: "Phương án D",
      answer: "2",
      explanation: "Lời giải chi tiết đang gõ",
      hint: "Gợi ý nhỏ",
      status: "approved",
    },
  };
  await online.handleSubmit({
    target: {
      closest: (sel) => (sel === "[data-online-form]" ? questionForm : null),
    },
    preventDefault() {},
  });

  const editorAfterError = online.view();
  assert.match(editorAfterError, /Mất kết nối máy chủ tạm thời/);
  assert.match(editorAfterError, /Câu hỏi đang soạn khi rớt mạng/);
  assert.match(editorAfterError, /Lời giải chi tiết đang gõ/);

  // Teacher grades submission while network fails -> mark and feedback must stay
  online.navigate("submission", { id: "sub-1" });
  const markForm = {
    dataset: { onlineForm: "mark" },
    values: {
      "mark-w1": "0.75",
      feedback: "Nhận xét không bị mất khi lỗi mạng",
    },
  };
  await online.handleSubmit({
    target: {
      closest: (sel) => (sel === "[data-online-form]" ? markForm : null),
    },
    preventDefault() {},
  });

  const gradingAfterError = online.view();
  assert.match(gradingAfterError, /value="0\.75"/);
  assert.match(gradingAfterError, /Nhận xét không bị mất khi lỗi mạng/);
});

test("detail views restore from hash with ID, latest score sorts by review time, and session expiry preserves drafts", async () => {
  const studentSnapshot = {
    profile: { id: "stu-1", name: "Lê Bảo", role: "student" },
    members: [],
    questions: [],
    assignments: [
      {
        id: "a-old",
        title: "Bài tập 1",
        questions: [{ id: "q1", type: "choice", prompt: "1+1=?", options: ["2", "3", "4", "5"] }],
      },
      {
        id: "a-new",
        title: "Bài tập 2",
        questions: [{ id: "q2", type: "choice", prompt: "2+2=?", options: ["4", "5", "6", "7"] }],
      },
      {
        id: "a-todo",
        title: "Bài tập 3 chưa làm",
        questions: [{ id: "q3", type: "choice", prompt: "3+3=?", options: ["6", "7", "8", "9"] }],
      },
    ],
    // Mảng trả về có bài cũ ở đầu (được chấm sau), bài mới ở sau (được chấm trước)
    submissions: [
      {
        id: "sub-old-assign",
        assignment_id: "a-old",
        student_id: "stu-1",
        title: "Bài tập 1",
        score: 7,
        pending: 0,
        created_at: "2026-09-01T00:00:00Z",
        reviewed_at: "2026-10-26T12:00:00Z", // Chấm gần đây nhất!
        answers: [],
      },
      {
        id: "sub-new-assign",
        assignment_id: "a-new",
        student_id: "stu-1",
        title: "Bài tập 2",
        score: 10,
        pending: 0,
        created_at: "2026-10-20T00:00:00Z",
        reviewed_at: "2026-10-21T00:00:00Z",
        answers: [],
      },
    ],
  };

  let sessionExpired = false;
  const state = { role: "student", view: "online", mobile: true, presentation: false };
  const online = createOnline({
    state,
    render() {},
    toast() {},
    fetchImpl: async (_url, opts) => {
      const { action } = JSON.parse(opts.body);
      if (sessionExpired) {
        return {
          ok: false,
          status: 401,
          json: async () => ({ error: "Phiên đăng nhập đã hết hạn.", signedOut: true }),
        };
      }
      if (action === "load") {
        return { ok: true, json: async () => ({ data: studentSnapshot }) };
      }
      if (action === "login") {
        return { ok: true, json: async () => ({ signedIn: true, message: "Đăng nhập thành công." }) };
      }
      if (action === "submit") {
        return { ok: true, json: async () => ({ data: { id: "sub-todo" } }) };
      }
      return { ok: true, json: async () => ({ ok: true }) };
    },
  });

  // 1. Mở trực tiếp bài tập theo hash có ID (như khi bấm F5 tại #task/a-todo)
  await online.open("task", "a-todo");
  assert.equal(online.currentScreen(), "task");
  assert.equal(state.mobile, false); // Sidebar mobile đóng khi mở bài
  const taskHtml = online.view();
  assert.match(taskHtml, /Bài tập 3 chưa làm/);
  assert.match(taskHtml, /3\+3=\?/);

  // 2. Điểm mới nhất phải ưu tiên bài có reviewed_at mới nhất (Bài tập 1: 7/10 lúc 26/10) thay vì bài nộp lúc trước
  online.navigate("overview");
  const overviewHtml = online.view();
  assert.match(overviewHtml, /7\/10/);
  assert.match(overviewHtml, /Bài tập 1/);

  // 3. Học sinh nhập nháp bài làm, sau đó phiên hết hạn
  online.navigate("task", { id: "a-todo" });
  online.handleInput({
    target: {
      closest: (sel) => (sel === '[data-online-form="submit"]' ? { dataset: { onlineForm: "submit" } } : null),
      name: "q3",
      value: "0",
    },
  });

  // Giả lập phiên hết hạn khi gửi yêu cầu
  sessionExpired = true;
  await online.handleSubmit({
    target: {
      closest: (sel) =>
        sel.includes("[data-online-form")
          ? { dataset: { onlineForm: "submit" }, values: { q3: "0" } }
          : null,
    },
    preventDefault() {},
  });

  // Sau khi hết hạn: không còn hiển thị dữ liệu tài khoản cũ, giao diện chuyển về form đăng nhập
  assert.equal(online.isSignedIn(), false);
  assert.equal(online.hasProfile(), false);
  const expiredHtml = online.view();
  assert.match(expiredHtml, /Phiên đăng nhập đã hết hạn/);
  assert.match(expiredHtml, /Bản nháp của bạn vẫn được giữ trong phiên trang này/);
  assert.match(expiredHtml, /Đăng nhập/);
  assert.doesNotMatch(expiredHtml, /Chào Lê Bảo/); // Không lộ dữ liệu tài khoản cũ

  // 4. Đăng nhập lại CÙNG tài khoản (Lê Bảo - stu-1): Bản nháp bài làm được khôi phục nguyên vẹn
  sessionExpired = false;
  await online.handleSubmit({
    target: {
      closest: (sel) =>
        sel.includes("[data-online-form")
          ? {
              dataset: { onlineForm: "login" },
              values: { email: "lebao@example.com", password: "password123" },
            }
          : null,
    },
    preventDefault() {},
  });
  assert.equal(online.isSignedIn(), true);
  assert.equal(online.profile().id, "stu-1");
  online.navigate("task", { id: "a-todo" });
  const restoredTaskHtml = online.view();
  assert.match(restoredTaskHtml, /checked/); // Lựa chọn "0" vẫn được giữ trong form

  // 5. Phiên hết hạn lần 2 và một tài khoản KHÁC (Trần Nam - stu-2) đăng nhập vào cùng tab
  sessionExpired = true;
  await online.handleSubmit({
    target: {
      closest: (sel) =>
        sel.includes("[data-online-form")
          ? { dataset: { onlineForm: "submit" }, values: { q3: "0" } }
          : null,
    },
    preventDefault() {},
  });
  assert.equal(online.isSignedIn(), false);

  // Chuẩn bị snapshot cho tài khoản khác (stu-2)
  const otherStudentSnapshot = {
    ...studentSnapshot,
    profile: { id: "stu-2", name: "Trần Nam", role: "student" },
  };

  sessionExpired = false;
  // Khởi tạo phiên của Người 1 (stu-1)
  let activeSnapshot = studentSnapshot;
  const onlineOther = createOnline({
    state,
    render() {},
    toast() {},
    fetchImpl: async (_url, opts) => {
      const { action } = JSON.parse(opts.body);
      if (action === "load") {
        return { ok: true, json: async () => ({ data: activeSnapshot }) };
      }
      if (action === "login") {
        return { ok: true, json: async () => ({ signedIn: true, message: "Đăng nhập thành công" }) };
      }
      return { ok: true, json: async () => ({ ok: true }) };
    },
  });

  // Tái hiện luồng: Người 1 (stu-1) gõ nháp
  await onlineOther.open("task", "a-todo");
  onlineOther.handleInput({
    target: {
      closest: (sel) => (sel === '[data-online-form="submit"]' ? { dataset: { onlineForm: "submit" } } : null),
      name: "q3",
      value: "0",
    },
  });

  // Người 2 (stu-2) đăng nhập vào cùng tab này
  activeSnapshot = otherStudentSnapshot;
  await onlineOther.handleSubmit({
    target: {
      closest: (sel) =>
        sel.includes("[data-online-form")
          ? {
              dataset: { onlineForm: "login" },
              values: { email: "trannam@example.com", password: "password456" },
            }
          : null,
    },
    preventDefault() {},
  });

  assert.equal(onlineOther.profile().id, "stu-2");
  onlineOther.navigate("task", { id: "a-todo" });
  const otherUserTaskHtml = onlineOther.view();
  // Bản nháp của người 1 (stu-1) TUYỆT ĐỐI KHÔNG xuất hiện trên form của người 2 (stu-2)
  assert.doesNotMatch(otherUserTaskHtml, /checked/);
});
