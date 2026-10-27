import { installLessonLabs } from "./ui/lesson-labs.js";
import {
  lessons,
  questionBank,
  probes,
  transferQuestion,
  getTransferQuestion,
  getProbe,
  getVerificationProbe,
  getMisconceptionText,
  summarizeEvidence,
} from "./learning.js";
import { createWorkspace } from "./workspace.js";
import { createCompanion } from "./companion.js";
import { createOllamaClient } from "./ollama-client.js";
import { createOnline } from "./online.js";
import { esc } from "./ui/dom.js";
import { icon } from "./ui/icons.js";
import { button, pageHeading, dateLabel } from "./ui/helpers.js";
import {
  circleVisual,
  defaultSlideAngle,
  angleReadoutHTML,
} from "./ui/visuals.js";
import { letters, skillLabels } from "./content/labels.js";
import { createStudentViews } from "./views/student.js";
import { createPracticeViews } from "./views/practice.js";
import { createTeacherViews } from "./views/teacher.js";

const $ = (s, root = document) => root.querySelector(s);
const safeUUID = () =>
  typeof globalThis !== "undefined" && globalThis.crypto?.randomUUID
    ? globalThis.crypto.randomUUID()
    : "id-" +
      Math.random().toString(36).slice(2, 10) +
      "-" +
      Date.now().toString(36);
const storageKey =
  location.hostname === "127.0.0.1" &&
  new URLSearchParams(location.search).has("qa")
    ? "hieu-that-qa-v1"
    : "hieu-that-v1";
let storageAvailable = true;
function restore() {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey) || "{}");
    return value && typeof value === "object" ? value : {};
  } catch {
    storageAvailable = false;
    return {};
  }
}
const saved = restore();
const data = {
  sessions: Array.isArray(saved.sessions) ? saved.sessions : [],
  completed: Array.isArray(saved.completed) ? saved.completed : [],
  slideProgress: saved.slideProgress || {},
  visited: saved.visited || {},
  notes: Array.isArray(saved.notes) ? saved.notes : [],
  approved: Array.isArray(saved.approved) ? saved.approved : [],
  assignments: Array.isArray(saved.assignments) ? saved.assignments : [],
  teacherAlerts: Array.isArray(saved.teacherAlerts) ? saved.teacherAlerts : [],
  joined: Boolean(saved.joined),
  goal: [2, 3, 5, 7].includes(saved.goal) ? saved.goal : 3,
  teacherDraft: saved.teacherDraft || "",
};
const state = {
  role: "student",
  view: "home",
  lesson: "values",
  slide: 0,
  filter: "all",
  support: "formula",
  mobile: false,
  presentation: false,
  interactiveAngle: 130,
};
let practice = null;
let toastTimer;
let lastModalFocus;
let companion;
let online;
function persist() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(data));
  } catch {
    storageAvailable = false;
    toast(
      "Trình duyệt chưa cho phép lưu. Kết quả vẫn được giữ trong phiên này.",
    );
  }
}
const lessonFor = (id) => lessons.find((l) => l.id === id) || lessons[0];
const lessonIcon = (id) =>
  id === "cosine" ? "triangle" : id === "signs" ? "target" : "circle";
const thisWeekSessions = () =>
  data.sessions.filter((s) => Date.now() - s.time < 7 * 86400000);
// Các màn hình đọc trạng thái hiện tại; thay đổi dữ liệu vẫn nằm ở bộ điều khiển.
const viewContext = () => ({
  state,
  data,
  practice,
  storageAvailable,
  workspace,
  thisWeekSessions,
  lessonFor,
  lessonIcon,
  activeQuestion,
});
const { home, lessonRow, lessonView } = createStudentViews(viewContext);
const { practiceView, resultView, evidenceHistory, progressView } =
  createPracticeViews(viewContext);
const { teacherHome, libraryView, settingsView } =
  createTeacherViews(viewContext);

function initials(name = "") {
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "HT";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts.at(-1)[0]).toUpperCase();
}
function navItems() {
  if (state.role === "teacher")
    return [
      ["home", "grid", "Tổng quan giảng dạy"],
      ["library", "book", "Thư viện câu hỏi"],
      ["questions", "pen", "Câu hỏi thêm"],
      ["progress", "chart", "Căn cứ học tập"],
      ["class", "users", "Lớp học & giao bài"],
    ];
  if (state.role === "admin")
    return [
      ["settings", "settings", "Cài đặt trải nghiệm"],
      ["library", "book", "Nội dung học tập"],
      ["progress", "chart", "Dữ liệu trên thiết bị"],
    ];
  return [
    ["home", "grid", "Tổng quan"],
    ["lessons", "book", "Bài học dạng slide"],
    ["practice", "pen", "Luyện tập & xác minh"],
    ["progress", "chart", "Tiến bộ của tôi"],
    ["class", "users", "Lớp học của tôi"],
  ];
}
function render() {
  const hasOnlineProfile = online?.hasProfile?.() || false;
  const isOnlineSignedIn = online?.isSignedIn?.() || false;
  const onlineProf = online?.profile?.() || null;
  const activeRole = hasOnlineProfile ? online.role() : state.role;
  if (hasOnlineProfile) {
    state.role = activeRole;
    const onlineScreen = online.currentScreen?.();
    state.view =
      activeRole === "student" &&
      (onlineScreen === "lessons" || onlineScreen === "practice")
        ? onlineScreen
        : "online";
  }

  const title = hasOnlineProfile
    ? online.screenTitle()
    : isOnlineSignedIn && state.view === "online"
      ? online.screenTitle()
      : navItems().find((i) => i[0] === state.view)?.[2] ||
        {
          editor: "Soạn câu hỏi",
          import: "Nhập đề bài",
          assign: "Giao bài",
          task: "Bài được giao",
          account: "Tài khoản",
          online: "Đăng nhập & tài khoản",
          connections: "Kết nối dịch vụ",
        }[state.view] ||
        "Không gian học tập";

  const sidebarNavHTML = hasOnlineProfile
    ? online
        .navItems()
        .map(
          ([id, ic, text, badge]) =>
            `<button class="nav-item" data-online="${id}" ${
              online.activeNavId() === id ? 'aria-current="page"' : ""
            }>${icon(ic)}<span>${text}</span>${
              badge ? `<span class="nav-badge">${esc(badge)}</span>` : ""
            }</button>`,
        )
        .join("")
    : navItems()
        .map(
          ([id, ic, text]) =>
            `<button class="nav-item" data-action="nav" data-view="${id}" ${
              state.view === id ? 'aria-current="page"' : ""
            }>${icon(ic)}<span>${text}</span>${
              id === "lessons"
                ? `<span class="nav-badge">${lessons.length}</span>`
                : ""
            }</button>`,
        )
        .join("");

  const avatarLabel = hasOnlineProfile
    ? initials(onlineProf.name)
    : activeRole === "teacher"
      ? "GV"
      : activeRole === "admin"
        ? "QT"
        : "B";

  const spaceName =
    activeRole === "teacher" ? "Không gian giảng dạy" : "Không gian học tập";

  document.body.classList.toggle("presentation-mode", state.presentation);
  $("#app").innerHTML = `<div class="app-shell">
    ${state.mobile ? '<button class="sidebar-scrim" data-action="close-menu" aria-label="Đóng điều hướng"></button>' : ""}
    <aside class="sidebar ${state.mobile ? "open" : ""}" aria-label="Điều hướng chính">
      <a class="sidebar-brand" href="${hasOnlineProfile ? "#overview" : "#home"}" ${
        hasOnlineProfile
          ? 'data-online="overview"'
          : 'data-action="nav" data-view="home"'
      }><span class="brand-mark">${icon("book")}</span><span><span class="brand-name">Hiểu Thật<span class="brand-period">.</span></span><span class="brand-sub">HỌC ĐỂ HIỂU, HIỂU ĐỂ LÀM</span></span></a>
      <div class="sidebar-label">${activeRole === "student" ? "KHÔNG GIAN HỌC TẬP" : activeRole === "teacher" ? "KHÔNG GIAN GIẢNG DẠY" : "QUẢN LÝ TRẢI NGHIỆM"}</div>
      <nav class="nav-list">${sidebarNavHTML}</nav>
      <div class="sidebar-bottom"><div class="sidebar-note"><span class="note-leaf">${icon("leaf")}</span><strong>Hiểu thêm một chút,<br>tiến xa thêm một bước.</strong><p>Mỗi câu hỏi là một cơ hội<br>hiểu rõ chính mình.</p></div>
      ${
        hasOnlineProfile
          ? ""
          : `<button class="nav-item ${state.view === "online" ? "active" : ""}" data-action="online">${icon("users")}<span>Đăng nhập / Tài khoản online</span></button>`
      }
      <button class="nav-item" data-action="help">${icon("help")}<span>Về Hiểu Thật</span></button>
      <div class="sidebar-user"><div class="avatar">${esc(avatarLabel)}</div><div class="user-details"><strong>${esc(hasOnlineProfile ? onlineProf.name : workspace.profileName())}</strong><span>${
        hasOnlineProfile
          ? activeRole === "teacher"
            ? `Giáo viên · ${esc(onlineProf.code || "")}`
            : "Tài khoản Học sinh"
          : "Chế độ tự học & trải nghiệm"
      }</span></div><span class="online-dot"></span></div>
      <div class="local-note">${
        hasOnlineProfile
          ? "Tài khoản trực tuyến · Đồng bộ cơ sở dữ liệu"
          : "Bản tự học & trải nghiệm · Lưu trên thiết bị"
      }</div></div>
    </aside>
    <div class="app-main"><header class="topbar"><div class="breadcrumb"><button class="icon-button mobile-menu" data-action="menu" aria-label="Mở điều hướng">${icon("menu")}</button><span>${spaceName}</span>${icon("right")}<strong>${esc(title)}</strong></div><div class="top-actions">${
      hasOnlineProfile
        ? `<span class="tag green online-role-badge">${
            activeRole === "teacher"
              ? "Vai trò: Giáo viên"
              : "Vai trò: Học sinh"
          }</span><button type="button" class="button ghost small" data-online="refresh">Làm mới</button><button type="button" class="profile-avatar" data-online="profile" aria-label="Hồ sơ tài khoản">${esc(avatarLabel)}</button>`
        : isOnlineSignedIn
          ? `<button type="button" class="button ghost small" data-online="logout">Đăng xuất</button>`
          : `<div class="role-switch" aria-label="Chọn vai trò minh họa">${[
              ["student", "Học sinh"],
              ["teacher", "Giáo viên"],
            ]
              .map(
                ([r, t]) =>
                  `<button data-action="role" data-role="${r}" class="${state.role === r ? "active" : ""}" aria-pressed="${state.role === r}">${t}</button>`,
              )
              .join(
                "",
              )}</div><button type="button" class="button primary small" data-action="online">Đăng nhập</button><button class="icon-button" data-action="notifications" aria-label="Thông báo">${icon("bell")}<span class="notification-dot"></span></button><button class="profile-avatar" data-action="settings" aria-label="Cài đặt trải nghiệm">${state.role === "teacher" ? "GV" : "B"}</button>`
    }</div></header>
    <main id="main-content" class="page-content" tabindex="-1">${viewContent()}</main>
    <footer class="footer-note"><span>Hiểu Thật © 2026</span><span>Học theo bằng chứng. Tiến bộ theo cách của bạn.</span>${button("Về Hiểu Thật", "help", "ghost small")}</footer></div></div>`;
  document.title = `${title} · Hiểu Thật`;
  companion?.sync();
}
function viewContent() {
  if (online?.hasProfile?.()) {
    if (online.role() === "student") {
      if (online.currentScreen() === "lessons") return lessonView();
      if (online.currentScreen() === "practice") return practiceView();
    }
    return online.view();
  }
  if (online?.isSignedIn?.() || state.view === "online") return online.view();
  const additional = workspace.view();
  if (additional !== null) return additional;
  if (state.view === "home")
    return state.role === "teacher" ? teacherHome() : home();
  if (state.view === "lessons") return lessonView();
  if (state.view === "practice") return practiceView();
  if (state.view === "progress") return progressView();
  if (state.view === "library") return workspace.libraryLink() + libraryView();
  if (state.view === "class") return workspace.classView();
  if (state.view === "settings")
    return (
      `<div class="settings-account-link">${button("Đăng nhập / Đăng ký", "account", "primary small")}${button("Kết nối dịch vụ", "nav", "secondary small", 'data-view="connections"')}</div>` +
      settingsView()
    );
  return home();
}
function selectPracticeQueue(pool, sessionIndex) {
  if (!pool || pool.length === 0) return [];
  if (pool.length <= 4) return [...pool];
  const uniqueSkills = [...new Set(pool.map((q) => q.skill).filter(Boolean))];
  if (uniqueSkills.length >= 4) {
    const selected = [];
    for (const sk of uniqueSkills.slice(0, 4)) {
      const candidates = pool.filter((q) => q.skill === sk);
      const chosen = candidates[sessionIndex % candidates.length];
      if (chosen) selected.push(chosen);
    }
    if (selected.length === 4) return selected;
  }
  const start = (sessionIndex * 4) % pool.length;
  const slice = pool.slice(start, start + 4);
  if (slice.length < 4) {
    slice.push(...pool.slice(0, 4 - slice.length));
  }
  return slice;
}

function newPractice(lessonId) {
  state.lesson = lessonId || "values";
  state.view = "practice";
  state.activeLesson = false;
  state.presentation = false;
  state.support = "formula";
  const pool = questionBank.filter((q) => q.lessonId === state.lesson);
  const sessionCount = data.sessions.filter((s) => s.lessonId === state.lesson).length;
  const queue = selectPracticeQueue(pool, sessionCount);
  practice = {
    lessonId: state.lesson,
    queue,
    queueIndex: 0,
    base: queue[0] || pool[0],
    baseResults: [],
    phase: "base",
    selected: null,
    submitted: false,
    confidence: "sure",
    baseCorrect: null,
    probeKey: null,
    probeCorrect: null,
    transferCorrect: null,
    reflection: "",
    hints: 0,
    history: [],
    started: Date.now(),
    transfer:
      getTransferQuestion(state.lesson, queue[0]?.id) ||
      (state.lesson === "values" ? transferQuestion : pool[1 % pool.length]),
    teacherAlert: null,
  };
  state.interactiveAngle = 130;
}
function activeQuestion() {
  if (!practice) return null;
  if (practice.phase === "probe") return probes[practice.probeKey];
  if (practice.phase === "transfer") return practice.transfer;
  return (practice.queue && practice.queue[practice.queueIndex]) || practice.base;
}
function submitAnswer() {
  if (!practice || practice.submitted || practice.selected === null) return;
  const q = activeQuestion(),
    correct = practice.selected === q.answer;
  practice.submitted = true;
  practice.history.push({
    phase: practice.phase,
    prompt: q.prompt,
    answer: q.options[practice.selected],
    correct,
    expected: q.options[q.answer],
    confidence: practice.confidence,
    time: Date.now(),
  });
  if (practice.phase === "base") {
    practice.baseResults = practice.baseResults || [];
    practice.baseResults.push({
      question: q,
      selected: practice.selected,
      correct,
      confidence: practice.confidence,
    });
  }
  if (practice.phase === "probe") {
    practice.probeCorrect = correct;
    if (!correct) {
      const wrongBase =
        practice.baseResults?.find((r) => !r.correct)?.question || practice.base;
      const studentName = online?.hasProfile?.()
        ? online.currentProfile?.()?.name || "Học sinh"
        : data.studentProfile?.name || "Học sinh";
      const alert = {
        id: safeUUID(),
        studentName,
        lessonId: practice.lessonId,
        lessonTitle: lessonFor(practice.lessonId).shortTitle,
        wrongQuestionId: q.id || wrongBase?.id || "probe",
        questionPrompt: q.prompt,
        wrongQuestionPrompt: q.prompt,
        baseQuestionPrompt: wrongBase?.prompt || "",
        misconception: getMisconceptionText(practice.probeKey, q),
        time: Date.now(),
        timestamp: Date.now(),
        resolved: false,
      };
      if (!Array.isArray(data.teacherAlerts)) data.teacherAlerts = [];
      data.teacherAlerts.push(alert);
      practice.teacherAlert = alert;
      persist();
    }
  }
  if (practice.phase === "transfer") practice.transferCorrect = correct;
  render();
}
function nextQuestion() {
  if (!practice?.submitted) return;
  if (practice.phase === "transfer") {
    finishPractice();
    return;
  }
  if (practice.phase === "base") {
    const queue = practice.queue || [practice.base];
    if (practice.queueIndex + 1 < queue.length) {
      practice.queueIndex++;
      practice.base = queue[practice.queueIndex];
      practice.selected = null;
      practice.submitted = false;
      render();
      return;
    }
    const allResults = practice.baseResults || [];
    const allCorrect = allResults.length > 0 && allResults.every((r) => r.correct);
    practice.baseCorrect = allCorrect;
    const wrongEntry = allResults.find((r) => !r.correct);
    if (wrongEntry) {
      practice.probeKey = getVerificationProbe(wrongEntry.question, wrongEntry.selected);
    } else {
      const lastEntry = allResults[allResults.length - 1];
      if (lastEntry) {
        practice.probeKey = getVerificationProbe(lastEntry.question, lastEntry.selected);
      }
    }
    if (!probes[practice.probeKey]) practice.probeKey = null;
    const focusQ = wrongEntry?.question || queue[0];
    practice.transfer =
      getTransferQuestion(practice.lessonId, focusQ?.id) ||
      (practice.lessonId === "values"
        ? transferQuestion
        : queue[(practice.queueIndex + 1) % queue.length]);
    practice.phase = practice.probeKey ? "probe" : "transfer";
    practice.selected = null;
    practice.submitted = false;
    render();
    return;
  }
  if (practice.phase === "probe") {
    practice.phase = "transfer";
    practice.selected = null;
    practice.submitted = false;
    render();
    return;
  }
}
function finishPractice() {
  let summary = summarizeEvidence(practice);
  if (practice.hints && summary.status === "supported")
    summary = {
      status: "insufficient",
      title: "Làm đúng với sự hỗ trợ",
      detail:
        "Bạn đã làm đúng và có xem gợi ý. Hãy thử thêm một bài độc lập để có căn cứ rõ hơn.",
    };
  const baseUnsure = practice.history.some(
    (h) => h.phase === "base" && h.confidence === "unsure",
  );
  if (baseUnsure && practice.baseCorrect && !practice.reflection.trim())
    summary = {
      ...summary,
      detail: `${summary.detail} Bạn đã chọn đúng đáp án nhưng còn phân vân ở bước đầu — hãy xem lại công thức trong sổ tay để nắm thật chắc nhé.`,
    };
  const record = {
    id: safeUUID(),
    lessonId: practice.lessonId,
    time: Date.now(),
    duration: Math.round((Date.now() - practice.started) / 1000),
    ...summary,
    history: practice.history,
    reflection: practice.reflection,
    hints: practice.hints,
    teacherAlert: practice.teacherAlert || null,
  };
  data.sessions.push(record);
  persist();
  practice.result = record;
  practice.phase = "result";
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function toast(message) {
  clearTimeout(toastTimer);
  const el = $("#toast");
  el.textContent = message;
  el.hidden = false;
  toastTimer = setTimeout(() => (el.hidden = true), 4000);
}
function openModal(title, body, footer = "") {
  lastModalFocus = document.activeElement;
  $("#modal-root").innerHTML =
    `<div class="modal-backdrop"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="modal-header"><h2 id="modal-title">${title}</h2><button class="icon-button" data-action="close-modal" aria-label="Đóng">${icon("close")}</button></div><div class="modal-body">${body}</div>${footer ? `<div class="modal-footer">${footer}</div>` : ""}</section></div>`;
  document.body.classList.add("modal-open");
  companion?.sync();
  $(".modal button, .modal input, .modal textarea")?.focus();
}
function closeModal() {
  $("#modal-root").innerHTML = "";
  document.body.classList.remove("modal-open");
  companion?.sync();
  if (lastModalFocus?.isConnected) lastModalFocus.focus();
}
function markSlideVisited() {
  const id = state.lesson;
  data.visited[id] = [...new Set([...(data.visited[id] || []), state.slide])];
  if (
    data.visited[id].length === lessonFor(id).slides.length &&
    !data.completed.includes(id)
  )
    data.completed.push(id);
  persist();
}
function openLesson(id) {
  state.lesson = id;
  state.view = "lessons";
  state.activeLesson = true;
  state.slide = Math.min(
    data.slideProgress[id] || 0,
    lessonFor(id).slides.length - 1,
  );
  state.interactiveAngle = defaultSlideAngle(state.lesson, state.slide);
  state.mobile = false;
  markSlideVisited();
  if (online?.hasProfile?.() && online.role() === "student") {
    online.navigate("lessons");
  } else {
    render();
  }
  window.scrollTo({ top: 0 });
}
function moveSlide(n) {
  state.slide = Math.max(
    0,
    Math.min(n, lessonFor(state.lesson).slides.length - 1),
  );
  state.interactiveAngle = defaultSlideAngle(state.lesson, state.slide);
  data.slideProgress[state.lesson] = state.slide;
  markSlideVisited();
  render();
}
function exportData() {
  const blob = new Blob(
    [
      JSON.stringify(
        {
          application: "Hiểu Thật",
          exportedAt: new Date().toISOString(),
          ...data,
        },
        null,
        2,
      ),
    ],
    { type: "application/json" },
  );
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "hieu-that-ket-qua.json";
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  toast("Đã xuất dữ liệu học tập.");
}
async function importData(file) {
  if (!file) return;
  try {
    const raw = await (typeof file.text === "function"
      ? file.text()
      : new Response(file).text());
    const parsed = JSON.parse(raw);
    if (
      !parsed ||
      typeof parsed !== "object" ||
      Array.isArray(parsed) ||
      !(
        Array.isArray(parsed.sessions) ||
        Array.isArray(parsed.completed) ||
        Array.isArray(parsed.customQuestions) ||
        Array.isArray(parsed.assignments) ||
        parsed.application === "Hiểu Thật"
      )
    )
      throw new Error("invalid");
    for (const k of [
      "sessions",
      "completed",
      "notes",
      "approved",
      "assignments",
      "customQuestions",
      "assignmentSubmissions",
    ]) {
      if (Array.isArray(parsed[k])) data[k] = parsed[k];
      else if (!Array.isArray(data[k])) data[k] = [];
    }
    if (
      parsed.slideProgress &&
      typeof parsed.slideProgress === "object" &&
      !Array.isArray(parsed.slideProgress)
    )
      data.slideProgress = parsed.slideProgress;
    if (
      parsed.visited &&
      typeof parsed.visited === "object" &&
      !Array.isArray(parsed.visited)
    )
      data.visited = parsed.visited;
    if ([2, 3, 5, 7].includes(Number(parsed.goal)))
      data.goal = Number(parsed.goal);
    if (typeof parsed.joined === "boolean") data.joined = parsed.joined;
    if (typeof parsed.teacherDraft === "string")
      data.teacherDraft = parsed.teacherDraft;
    if (parsed.teacherProfile && typeof parsed.teacherProfile === "object")
      data.teacherProfile = parsed.teacherProfile;
    if (parsed.studentProfile && typeof parsed.studentProfile === "object")
      data.studentProfile = parsed.studentProfile;
    if (parsed.taskDrafts && typeof parsed.taskDrafts === "object")
      data.taskDrafts = parsed.taskDrafts;
    if (parsed.questionDrafts && typeof parsed.questionDrafts === "object")
      data.questionDrafts = parsed.questionDrafts;
    persist();
    render();
    toast("Đã khôi phục dữ liệu học tập thành công.");
  } catch {
    toast(
      "File dữ liệu không hợp lệ. Hãy chọn đúng file JSON xuất từ Hiểu Thật.",
    );
  }
}

const workspace = createWorkspace({
  data,
  saved,
  state,
  esc,
  button,
  icon,
  pageHeading,
  render,
  persist,
  toast,
  openModal,
  closeModal,
  questionBank,
  lessons,
  getPractice: () => practice,
  activeQuestion,
});
companion = createCompanion({
  data,
  saved,
  persist,
  esc,
  ai: createOllamaClient(),
  getPractice: () => practice,
  getContext: () => {
    const hasOnline = online?.hasProfile?.() || false;
    const activeRole = hasOnline ? online.role() : state.role;
    const currentView =
      hasOnline && online.role() === "student"
        ? online.currentScreen() === "task"
          ? "task"
          : online.currentScreen()
        : state.view;
    const learning = currentView === "lessons" && state.activeLesson;
    const practicing =
      currentView === "practice" && practice && practice.phase !== "result";
    const lesson = learning || practicing ? lessonFor(state.lesson) : null;
    const page = hasOnline
      ? online.screenTitle()
      : navItems().find((i) => i[0] === state.view)?.[2] ||
        {
          editor: "Soạn câu hỏi",
          import: "Nhập đề bài",
          assign: "Giao bài",
          task: "Bài được giao",
          account: "Tài khoản",
          connections: "Kết nối dịch vụ",
          settings: "Cài đặt",
        }[state.view] ||
        "Hiểu Thật";
    return {
      role: activeRole,
      view: currentView,
      lesson,
      slide: learning ? lesson.slides[state.slide] : null,
      question: practicing ? activeQuestion() : null,
      label: lesson
        ? `${lesson.shortTitle}${learning ? " · Slide " + (state.slide + 1) : " · " + { base: "Làm bài", probe: "Xác minh", transfer: "Vận dụng" }[practice.phase]}`
        : page,
      obscured: state.mobile || document.body.classList.contains("modal-open"),
    };
  },
});

installLessonLabs();

document.addEventListener("click", async (event) => {
  if (
    event.target.closest("[data-online]") ||
    event.target.closest(".sidebar-brand") ||
    event.target.closest(".sidebar a")
  ) {
    state.mobile = false;
  }
  const el = event.target.closest("[data-action]");
  if (!el) return;
  if (el.tagName === "A") event.preventDefault();
  const action = el.dataset.action;
  if (action === "account" || action === "online") {
    closeModal();
    await online.open();
    return;
  }
  if (await workspace.handle(action, el)) return;
  if (action === "nav") {
    const targetView = el.dataset.view;
    state.activeLesson = false;
    state.presentation = false;
    state.mobile = false;
    if (online?.hasProfile?.()) {
      const mapped =
        targetView === "progress"
          ? "grades"
          : targetView === "home"
            ? "overview"
            : targetView;
      online.navigate(mapped);
    } else {
      state.view = targetView;
      render();
    }
    window.scrollTo({ top: 0 });
  } else if (action === "role") {
    if (online?.isSignedIn?.()) return;
    state.role = el.dataset.role;
    state.view = "home";
    state.activeLesson = false;
    state.presentation = false;
    render();
  } else if (action === "menu") {
    state.mobile = !state.mobile;
    render();
  } else if (action === "close-menu") {
    state.mobile = false;
    render();
  } else if (action === "open-lesson") openLesson(el.dataset.lesson);
  else if (action === "lesson-list") {
    state.activeLesson = false;
    state.presentation = false;
    render();
  } else if (action === "goto-slide") moveSlide(Number(el.dataset.index));
  else if (action === "next-slide") moveSlide(state.slide + 1);
  else if (action === "prev-slide") moveSlide(state.slide - 1);
  else if (action === "presentation") {
    state.presentation = !state.presentation;
    render();
  } else if (action === "finish-lesson") {
    markSlideVisited();
    newPractice(state.lesson);
    if (online?.hasProfile?.() && online.role() === "student") {
      online.navigate("practice");
    } else {
      render();
    }
    window.scrollTo({ top: 0 });
  } else if (action === "start-practice") {
    newPractice(el.dataset.lesson);
    if (online?.hasProfile?.() && online.role() === "student") {
      online.navigate("practice");
    } else {
      render();
    }
    window.scrollTo({ top: 0 });
  } else if (action === "choose-practice") {
    practice = null;
    render();
  } else if (action === "answer") {
    if (!practice.submitted) {
      practice.selected = Number(el.dataset.index);
      render();
    }
  } else if (action === "confidence") {
    if (practice && !practice.submitted) {
      practice.confidence = el.dataset.level === "unsure" ? "unsure" : "sure";
      render();
    }
  } else if (action === "submit-answer") submitAnswer();
  else if (action === "next-question") nextQuestion();
  else if (action === "support") {
    state.support = el.dataset.tab;
    render();
  } else if (action === "close-modal") closeModal();
  else if (action === "evidence") {
    const s = data.sessions.find((s) => s.id === el.dataset.id);
    if (s)
      openModal(
        "Căn cứ của phiên học",
        `<span class="tag green">${esc(lessonFor(s.lessonId).shortTitle)}</span><p class="muted">${dateLabel(s.time)} · ${s.hints} lượt mở gợi ý</p>${evidenceHistory(s)}${s.reflection ? `<div class="tip-box"><p><strong>Cách bạn suy nghĩ:</strong> ${esc(s.reflection)}</p></div>` : ""}<p>${esc(s.detail)}</p>`,
      );
  } else if (action === "help")
    openModal(
      "Hiểu Thật — Học để hiểu",
      `<div class="about-logo">${icon("book")}</div><p><strong>Hiểu Thật</strong> giúp bạn tìm ra điều mình đang hiểu và điều cần luyện thêm, qua bài học trực quan và những câu hỏi xác minh ngắn.</p><ol class="about-steps"><li>Khám phá 3 chủ đề Toán 10 qua 15 slide.</li><li>Làm bài, giải thích cách nghĩ và trả lời câu xác minh.</li><li>Vận dụng vào câu khác rồi xem căn cứ học tập.</li></ol><div class="demo-notice">Đây là bản trải nghiệm hoạt động trên trình duyệt. Nội dung và phản hồi dùng quy tắc soạn sẵn, chưa kết nối AI. Có thể soạn câu hỏi, đọc chữ từ ảnh, giao bài và nhận xét bài nộp trên thiết bị. Vai trò, hồ sơ và lớp học là mô phỏng; đăng nhập trực tuyến và đồng bộ nhiều thiết bị chưa được kết nối. Giáo viên cần rà soát nội dung trước khi sử dụng chính thức.</div>`,
    );
  else if (action === "notifications")
    openModal(
      "Thông báo của bạn",
      `<div class="notification-item">${icon("book")}<div><strong>3 chủ đề đã sẵn sàng</strong><p>Bắt đầu với Giá trị lượng giác, Dấu lượng giác hoặc Định lý cosin.</p></div></div>${data.assignments.length ? `<div class="notification-item">${icon("calendar")}<p>Bạn có ${data.assignments.length} bài được giao trong lớp minh họa.</p></div>` : ""}<p class="muted small-text">Thông báo giới thiệu của bản trải nghiệm.</p>`,
    );
  else if (action === "settings") {
    state.view = "settings";
    render();
  } else if (action === "goal")
    openModal(
      "Một mục tiêu vừa sức",
      `<p>Chọn số phiên luyện trong 7 ngày tới.</p><label class="field">Mục tiêu<select id="goal-select">${[2, 3, 5, 7].map((n) => `<option value="${n}" ${data.goal === n ? "selected" : ""}>${n} phiên / 7 ngày</option>`).join("")}</select></label>`,
      button("Lưu mục tiêu", "save-goal", "primary"),
    );
  else if (action === "save-goal") {
    data.goal = Number($("#goal-select").value);
    persist();
    closeModal();
    render();
    toast("Đã lưu mục tiêu học tập của bạn.");
  } else if (action === "save-note") {
    const text = $("#teacher-note").value.trim();
    if (!text) {
      toast("Hãy viết một nhận xét trước khi lưu.");
      return;
    }
    data.notes.push({ text, time: Date.now() });
    persist();
    render();
    toast("Đã lưu nhận xét vào hồ sơ trên thiết bị.");
  } else if (action === "review") {
    const q = questionBank.find((q) => q.id === el.dataset.id);
    if (q)
      openModal(
        "Rà soát câu hỏi mẫu",
        `<span class="tag gray">${esc(lessonFor(q.lessonId).shortTitle)}</span><h3>${esc(q.prompt)}</h3><div class="review-options">${q.options.map((o, i) => `<div class="${i === q.answer ? "is-answer" : ""}"><strong>${letters[i]}.</strong> ${esc(o)} ${i === q.answer ? icon("check") : ""}</div>`).join("")}</div><h3>Lời giải tham khảo</h3><p>${esc(q.explanation)}</p><label class="field">Ghi chú rà soát<textarea id="review-note" placeholder="Ghi lại điểm cần lưu ý khi dùng câu này…" rows="3"></textarea></label><p class="small-text muted">Nút duyệt ghi nhận việc rà soát trong bản trải nghiệm. Không phát hành nội dung tới học sinh khác.</p>`,
        button(
          "Lưu & đánh dấu đã duyệt",
          "approve",
          "primary",
          `data-id="${q.id}"`,
        ),
      );
  } else if (action === "approve") {
    if (!data.approved.includes(el.dataset.id))
      data.approved.push(el.dataset.id);
    const note = $("#review-note").value.trim();
    if (note)
      data.notes.push({ text: `[${el.dataset.id}] ${note}`, time: Date.now() });
    persist();
    closeModal();
    render();
    toast("Đã lưu trạng thái rà soát câu hỏi.");
  } else if (action === "resolve-alert") {
    const alertId = el.dataset.id;
    if (Array.isArray(data.teacherAlerts)) {
      const target = data.teacherAlerts.find((a) => a.id === alertId);
      if (target) {
        target.resolved = true;
        persist();
        render();
        toast("Đã đánh dấu đã hỗ trợ học sinh.");
      }
    }
  } else if (action === "export") exportData();
  else if (action === "reset-confirm")
    openModal(
      "Xóa dữ liệu trải nghiệm?",
      `<p>Thao tác này xóa ${data.sessions.length} phiên học, tiến độ slide, hồ sơ, câu hỏi, bản nháp, ảnh đang chọn, nhận xét, bài giao và cuộc trò chuyện với Bạn Hiểu đang lưu trên trình duyệt này. Bạn có thể xuất kết quả trước khi xóa.</p>`,
      `${button("Giữ lại dữ liệu", "close-modal", "secondary")}${button("Xóa dữ liệu", "reset", "danger-button")}`,
    );
  else if (action === "reset") {
    try {
      localStorage.removeItem(storageKey);
    } catch {}
    Object.assign(data, {
      sessions: [],
      completed: [],
      slideProgress: {},
      visited: {},
      notes: [],
      approved: [],
      assignments: [],
      joined: false,
      goal: 3,
      teacherDraft: "",
    });
    practice = null;
    companion.reset();
    persist();
    closeModal();
    render();
    toast("Đã xóa dữ liệu trải nghiệm trên thiết bị.");
  }
});
document.addEventListener("input", (e) => {
  if (e.target.id === "reflection" && practice)
    practice.reflection = e.target.value;
  if (e.target.id === "angle-slider") {
    const angle = Number(e.target.value);
    state.interactiveAngle = angle;
    const root = $("#interactive-circle-root");
    if (root) {
      const slot = $(".circle-svg-slot", root);
      if (slot) slot.innerHTML = circleVisual(angle);
      const lbl = $('label[for="angle-slider"]', root);
      if (lbl) lbl.innerHTML = `Kéo để thử góc α: <strong>${angle}°</strong>`;
      const ro = $(".angle-readout", root);
      if (ro) ro.innerHTML = angleReadoutHTML(angle);
      const cap = $("#signs-caption", root);
      if (cap)
        cap.textContent =
          angle > 0 && angle < 90
            ? "Góc nhọn: sin và cos dương"
            : angle === 90
              ? "Góc vuông: sin = 1, cos = 0"
              : angle > 90 && angle < 180
                ? "Góc tù: sin dương, cos âm"
                : "Góc biên trên trục hoành: sin = 0";
    }
  }
});
document.addEventListener("change", (e) => {
  if (e.target.id === "library-filter") {
    state.filter = e.target.value;
    render();
  }
  if (e.target.id === "chapter-filter") {
    state.chapterFilter = e.target.value;
    render();
  }
  if (e.target.id === "import-json-file") {
    importData(e.target.files?.[0]);
    e.target.value = "";
  }
});
document.addEventListener(
  "toggle",
  (e) => {
    if (e.target.matches?.("details[data-hint]") && e.target.open && practice) {
      practice.hints++;
    }
  },
  true,
);
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-backdrop")) closeModal();
});
document.addEventListener("keydown", (e) => {
  const modal = $(".modal");
  if (modal) {
    if (e.key === "Escape") closeModal();
    if (e.key === "Tab") {
      const focusable = [
        ...modal.querySelectorAll("button,input,textarea,select,a[href]"),
      ].filter((el) => !el.disabled);
      const first = focusable[0],
        last = focusable.at(-1);
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    return;
  }
  if (e.key === "Escape") {
    state.presentation = false;
    state.mobile = false;
    render();
    return;
  }
  if (
    e.target.closest("[data-lesson-lab], .knowledge-map, #companion-root") ||
    ["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)
  )
    return;
  if (state.view === "lessons" && state.activeLesson) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      moveSlide(state.slide + 1);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      moveSlide(state.slide - 1);
    }
  }
});
online = createOnline({
  state,
  render,
  toast,
  questionBank,
  lessons,
  localQuestions: () => data.customQuestions || [],
  localProgress: () => ({
    completedCount: data.completed.length,
    totalLessons: lessons.length,
    sessionCount: data.sessions.length,
    supportedCount: data.sessions.filter((s) => s.status === "supported")
      .length,
  }),
});
render();
online.init();
