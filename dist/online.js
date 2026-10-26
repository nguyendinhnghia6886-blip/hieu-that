import { esc } from "./ui/dom.js";
import {
  emptyQuestion,
  validateQuestion,
  parseQuestionText,
  normalizeTeacherCode,
} from "./authoring.js";
import { parseWrittenMarks } from "./learning/grading.js";
import {
  studentOverview,
  studentAssignedView,
  studentTaskView,
  studentGradesView,
  studentSubmissionDetailView,
  studentTeachersView,
  studentProfileView,
} from "./views/online-student.js";
import {
  teacherOverview,
  teacherQuestionsView,
  teacherEditorView,
  teacherImportView,
  teacherAssignmentsView,
  teacherSubmissionsView,
  teacherSubmissionDetailView,
  teacherStudentsView,
  teacherProfileView,
} from "./views/online-teacher.js";

const letters = ["A", "B", "C", "D"];
const field = (label, html) =>
  `<label class="field"><span>${label}</span>${html}</label>`;
const button = (label, action, extra = "", type = "secondary") =>
  `<button type="button" class="button ${type}" data-online="${action}" ${extra}>${label}</button>`;

export const STUDENT_SCREENS = [
  "overview",
  "lessons",
  "practice",
  "assigned",
  "task",
  "grades",
  "submission",
  "teachers",
  "profile",
];

export const TEACHER_SCREENS = [
  "overview",
  "questions",
  "editor",
  "import",
  "assignments",
  "publish",
  "submissions",
  "submission",
  "students",
  "profile",
];

const SCREEN_TITLES = {
  student: {
    overview: "Tổng quan học tập",
    lessons: "Bài học dạng slide",
    practice: "Luyện tập & xác minh",
    assigned: "Bài được giao",
    task: "Làm bài được giao",
    grades: "Điểm & tiến độ",
    submission: "Chi tiết bài đã nộp",
    teachers: "Giáo viên của tôi",
    profile: "Hồ sơ học sinh",
  },
  teacher: {
    overview: "Tổng quan giảng dạy",
    questions: "Kho câu hỏi",
    editor: "Soạn câu hỏi",
    import: "Nhập đề & đọc ảnh OCR",
    assignments: "Bài đã giao",
    publish: "Giao bài mới",
    submissions: "Bài nộp & chấm điểm",
    submission: "Chấm điểm bài nộp",
    students: "Học sinh đã kết nối",
    profile: "Hồ sơ giáo viên",
  },
};

export function resolveScreenForRole(role, requested) {
  const target =
    requested === "dashboard" || !requested ? "overview" : requested;
  const allowed = role === "teacher" ? TEACHER_SCREENS : STUDENT_SCREENS;
  if (allowed.includes(target)) {
    return { screen: target, redirected: false };
  }
  return { screen: "overview", redirected: Boolean(requested) };
}

export function createOnline({
  state,
  render,
  toast,
  questionBank = [],
  lessons = [],
  localQuestions = () => [],
  localProgress = () => ({
    completedCount: 0,
    totalLessons: lessons.length || 15,
    sessionCount: 0,
    supportedCount: 0,
  }),
  fetchImpl = (...args) => fetch(...args),
}) {
  let snapshot = null,
    signedIn = false,
    busy = false,
    message = "",
    screen = "overview",
    authMode = "login",
    recovery = false;

  let question = emptyQuestion(),
    questionFilter = "all",
    questionQuery = "",
    assignedFilter = "all",
    selectedAssignment = null,
    selectedSubmission = null,
    selectedStudent = null,
    previewAssignmentId = null,
    showPublishForm = false,
    joinCodeDraft = "",
    authEmailDraft = "",
    profileDraft = { name: "", role: "student" },
    importDraft = { topic: "Toán 10", source: "" },
    publishDraft = { title: "", due: "", instructions: "", ids: [] };

  const drafts = new Map();
  const markDrafts = new Map();
  let draftOwnerId = null;

  let ocrState = {
    busy: false,
    status: "",
    imageName: "",
    imageURL: "",
    file: null,
    run: 0,
    worker: null,
  };

  const role = () => snapshot?.profile?.role || null;
  const hasProfile = () => Boolean(signedIn && snapshot?.profile?.role);
  const isSignedIn = () => Boolean(signedIn);
  const profile = () => snapshot?.profile || null;

  function syncRoleState() {
    const r = role();
    if (r === "teacher" || r === "student") {
      state.role = r;
    }
  }

  function clearSessionState({ keepDrafts = false } = {}) {
    ocrState.run++;
    ocrState.worker?.terminate?.().catch(() => {});
    if (
      ocrState.imageURL &&
      typeof URL !== "undefined" &&
      URL.revokeObjectURL
    ) {
      URL.revokeObjectURL(ocrState.imageURL);
    }
    ocrState = {
      busy: false,
      status: "",
      imageName: "",
      imageURL: "",
      file: null,
      run: ocrState.run,
      worker: null,
    };
    snapshot = null;
    signedIn = false;
    recovery = false;
    question = emptyQuestion();
    questionFilter = "all";
    questionQuery = "";
    assignedFilter = "all";
    selectedAssignment = null;
    selectedSubmission = null;
    selectedStudent = null;
    previewAssignmentId = null;
    showPublishForm = false;
    joinCodeDraft = "";
    profileDraft = { name: "", role: "student" };
    importDraft = { topic: "Toán 10", source: "" };
    publishDraft = { title: "", due: "", instructions: "", ids: [] };
    if (!keepDrafts) {
      drafts.clear();
      markDrafts.clear();
      draftOwnerId = null;
    }
  }

  function refreshView() {
    syncRoleState();
    render();
  }

  function parseHashTarget(raw) {
    if (!raw) return { screen: "overview", id: null };
    const clean = String(raw).replace(/^#/, "").split("?")[0].trim();
    if (!clean || clean === "home") return { screen: "overview", id: null };
    if (clean.includes("/")) {
      const parts = clean.split("/");
      const scr = parts[0] || "overview";
      const id = decodeURIComponent(parts.slice(1).join("/")) || null;
      return { screen: scr, id };
    }
    return { screen: clean, id: null };
  }

  function updateHash(targetScreen) {
    if (typeof history === "undefined" || typeof location === "undefined")
      return;
    let hash = "";
    if (targetScreen && targetScreen !== "overview") {
      if (targetScreen === "task" && selectedAssignment) {
        hash = `#task/${encodeURIComponent(selectedAssignment)}`;
      } else if (targetScreen === "submission" && selectedSubmission) {
        hash = `#submission/${encodeURIComponent(selectedSubmission)}`;
      } else {
        hash = `#${targetScreen}`;
      }
    }
    const search = hasProfile() ? "" : location.search;
    const nextUrl = `${location.pathname}${search}${hash}`;
    if (`${location.pathname}${location.search}${location.hash}` !== nextUrl) {
      history.replaceState(null, "", nextUrl);
    }
  }

  function applyRoleNavigation(requestedScreen, targetId = null) {
    const r = role();
    if (!r) return;
    syncRoleState();
    const { screen: resolved, redirected } = resolveScreenForRole(
      r,
      requestedScreen,
    );
    screen = resolved;
    if (targetId) {
      if (screen === "task") selectedAssignment = targetId;
      if (screen === "submission") selectedSubmission = targetId;
    }
    if (redirected) {
      message =
        "Màn hình vừa yêu cầu không thuộc vai trò tài khoản của bạn. Hệ thống đã mở trang Tổng quan.";
    }
    if (r === "student" && (screen === "lessons" || screen === "practice")) {
      state.view = screen;
      if (screen === "lessons") {
        state.presentation = false;
      } else {
        state.activeLesson = false;
        state.presentation = false;
      }
    } else {
      state.view = "online";
      state.activeLesson = false;
      state.presentation = false;
    }
    updateHash(screen);
  }

  async function request(action, payload = {}) {
    const response = await fetchImpl("/api/learning", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, payload }),
      signal:
        typeof AbortSignal !== "undefined" && AbortSignal.timeout
          ? AbortSignal.timeout(30000)
          : undefined,
    });
    const body = await response
      .json()
      .catch(() => ({ error: "Máy chủ chưa sẵn sàng. Hãy thử lại sau." }));
    if (!response.ok) {
      const errMsg = body.signedOut
        ? `${body.error || "Phiên đăng nhập đã hết hạn. Hãy đăng nhập lại."} (Bản nháp của bạn vẫn được giữ trong phiên trang này).`
        : body.error || "Kết nối chưa thành công.";
      if (body.signedOut) {
        clearSessionState({ keepDrafts: true });
        state.view = "online";
        authMode = "login";
        message = errMsg;
        refreshView();
      }
      throw new Error(errMsg);
    }
    return body;
  }

  async function load() {
    const result = await request("load");
    snapshot = result.data;
    signedIn = true;
    syncRoleState();
    if (snapshot?.profile?.id) {
      if (draftOwnerId && draftOwnerId !== snapshot.profile.id) {
        drafts.clear();
        markDrafts.clear();
      }
      draftOwnerId = snapshot.profile.id;
    }
  }

  async function open(requestedScreen, targetId = null) {
    state.view = "online";
    state.mobile = false;
    state.presentation = false;
    busy = true;
    message = "";
    render();
    try {
      await load();
      if (hasProfile()) {
        applyRoleNavigation(requestedScreen || screen, targetId);
      }
    } catch (e) {
      if (signedIn || !String(e.message || "").includes("đăng nhập")) {
        message = e.message;
      }
    } finally {
      busy = false;
      refreshView();
    }
  }

  function authView() {
    const signup = authMode === "signup",
      recover = authMode === "recover";
    return `<section class="card online-auth">
      <span class="eyebrow">TÀI KHOẢN HIỂU THẬT</span>
      <h2>${
        recover
          ? "Lấy lại mật khẩu"
          : signup
            ? "Tạo tài khoản mới"
            : "Đăng nhập vào không gian của bạn"
      }</h2>
      <p class="muted">${
        recover
          ? "Nhập địa chỉ email đã đăng ký để nhận hướng dẫn đặt lại mật khẩu."
          : "Sau khi đăng nhập, hệ thống tự động mở đúng giao diện Học sinh hoặc Giáo viên theo hồ sơ của bạn."
      }</p>
      <form data-online-form="${authMode}">
        ${field(
          "Email",
          `<input name="email" data-online-auth="email" type="email" autocomplete="email" maxlength="254" value="${esc(authEmailDraft)}" required placeholder="ten@email.com">`,
        )}
        ${
          recover
            ? ""
            : field(
                "Mật khẩu",
                `<input name="password" type="password" autocomplete="${
                  signup ? "new-password" : "current-password"
                }" minlength="8" maxlength="128" required placeholder="Từ 8 ký tự trở lên"><small class="muted">Mật khẩu cần từ 8 đến 128 ký tự.</small>`,
              )
        }
        <button type="submit" class="button primary" ${busy ? "disabled" : ""}>${
          busy
            ? "Đang xử lý…"
            : recover
              ? "Gửi hướng dẫn đặt lại mật khẩu"
              : signup
                ? "Đăng ký tài khoản"
                : "Đăng nhập"
        }</button>
      </form>
      <div class="online-actions">
        ${button(
          signup || recover
            ? "Đã có tài khoản? Đăng nhập"
            : "Chưa có tài khoản? Tạo tài khoản mới",
          signup || recover ? "login-mode" : "signup-mode",
        )}
        ${recover ? "" : button("Quên mật khẩu", "recover-mode", "", "ghost")}
      </div>
      <div class="online-auth-footer">
        <p class="small-text muted">Tài khoản mới chỉ cần chọn vai trò Học sinh hoặc Giáo viên ở lần đăng nhập đầu tiên. Đăng nhập Google, Facebook và SMS hiện chưa được kết nối.</p>
        ${button("Tự học không cần đăng nhập", "exit-online", "", "ghost small")}
      </div>
    </section>`;
  }

  function profileView() {
    return `<section class="card online-auth">
      <span class="eyebrow">THIẾT LẬP HỒ SƠ LẦN ĐẦU</span>
      <h2>Bạn là giáo viên hay học sinh?</h2>
      <p class="muted">Bước này chỉ thực hiện một lần duy nhất. Những lần đăng nhập sau hệ thống sẽ tự mở đúng không gian của bạn.</p>
      <form data-online-form="profile">
        ${field(
          "Tên hiển thị của bạn",
          `<input name="name" data-online-profile="name" maxlength="80" autocomplete="name" value="${esc(profileDraft.name)}" required placeholder="Ví dụ: Nguyễn Minh An">`,
        )}
        ${field(
          "Vai trò của bạn",
          `<select name="role" data-online-profile="role">
            <option value="student" ${profileDraft.role !== "teacher" ? "selected" : ""}>Học sinh — Học bài, luyện tập, nhận bài giao và xem điểm</option>
            <option value="teacher" ${profileDraft.role === "teacher" ? "selected" : ""}>Giáo viên — Soạn câu hỏi, quản lý học sinh, giao bài và chấm điểm</option>
          </select>`,
        )}
        <p class="small-text muted">Vai trò được lưu cố định với tài khoản trong cơ sở dữ liệu. Học sinh có thể nhập mã giáo viên sau khi vào không gian học tập.</p>
        <div class="online-actions">
          <button type="submit" class="button primary" ${busy ? "disabled" : ""}>Hoàn tất & mở giao diện</button>
          ${button("Đăng xuất", "logout", "", "ghost")}
        </div>
      </form>
    </section>`;
  }

  function renderRoleScreen() {
    const r = role();
    const ctx = {
      snapshot,
      screen,
      drafts,
      markDrafts,
      question,
      questionFilter,
      questionQuery,
      assignedFilter,
      selectedAssignment,
      selectedSubmission,
      selectedStudent,
      previewAssignmentId,
      showPublishForm,
      joinCodeDraft,
      importDraft,
      publishDraft,
      ocrState,
      localProgress: localProgress(),
    };

    if (r === "teacher") {
      const views = {
        overview: teacherOverview,
        questions: teacherQuestionsView,
        editor: teacherEditorView,
        import: teacherImportView,
        assignments: teacherAssignmentsView,
        publish: (c) => teacherAssignmentsView({ ...c, showPublishForm: true }),
        submissions: teacherSubmissionsView,
        submission: teacherSubmissionDetailView,
        students: teacherStudentsView,
        profile: teacherProfileView,
      };
      return (views[screen] || teacherOverview)(ctx);
    }

    const views = {
      overview: studentOverview,
      assigned: studentAssignedView,
      task: studentTaskView,
      grades: studentGradesView,
      submission: studentSubmissionDetailView,
      teachers: studentTeachersView,
      profile: studentProfileView,
    };
    return (views[screen] || studentOverview)(ctx);
  }

  function view() {
    const prof = snapshot?.profile;
    return `<div class="online-space">
      ${
        !prof
          ? `<div class="page-heading">
              <span class="eyebrow">HIỂU THẬT · TÀI KHOẢN TRỰC TUYẾN</span>
              <h1>Học cùng nhau, tiến bộ mỗi ngày.</h1>
              <p class="muted">Đăng nhập để mở không gian Học sinh hoặc Giáo viên của bạn.</p>
            </div>`
          : ""
      }
      <p id="online-message" role="status" aria-live="polite" class="${
        message ? "tip-box online-status-banner" : ""
      }" ${message ? "" : "hidden"}>${esc(message)}</p>
      ${
        busy && !snapshot
          ? '<section class="card online-section" role="status">Đang tải không gian của bạn…</section>'
          : !signedIn
            ? authView()
            : recovery
              ? `<section class="card online-auth">
                  <span class="eyebrow">KHÔI PHỤC MẬT KHẨU</span>
                  <h2>Đặt mật khẩu mới</h2>
                  <form data-online-form="password">
                    ${field(
                      "Mật khẩu mới (từ 8 ký tự)",
                      '<input name="password" type="password" autocomplete="new-password" minlength="8" maxlength="128" required>',
                    )}
                    <button type="submit" class="button primary">Cập nhật mật khẩu</button>
                  </form>
                </section>`
              : !prof
                ? profileView()
                : renderRoleScreen()
      }
    </div>`;
  }

  async function perform(fn) {
    if (busy) return;
    busy = true;
    message = "";
    const controls =
      typeof document !== "undefined" && document.querySelectorAll
        ? [...document.querySelectorAll(".online-space button:not(:disabled)")]
        : [];
    controls.forEach((b) => (b.disabled = true));
    let succeeded = false;
    try {
      await fn();
      succeeded = true;
    } catch (e) {
      message =
        e.name === "TimeoutError"
          ? "Máy chủ phản hồi chậm. Nội dung bạn vừa nhập vẫn được giữ nguyên, hãy thử lại."
          : e.message;
      const status =
        typeof document !== "undefined" && document.getElementById
          ? document.getElementById("online-message")
          : null;
      if (status) {
        status.textContent = message;
        status.className = "tip-box online-status-banner";
        status.hidden = false;
        status.scrollIntoView?.({ block: "nearest" });
      }
    } finally {
      busy = false;
      controls.forEach((b) => (b.disabled = false));
      if (succeeded || !signedIn) refreshView();
    }
  }

  async function readOCRFile(file) {
    if (!file) return;
    if (
      !["image/jpeg", "image/png", "image/webp"].includes(file.type) ||
      file.size > 10 * 1024 * 1024
    ) {
      message = "Hãy chọn ảnh JPG, PNG hoặc WebP không quá 10 MB.";
      refreshView();
      return;
    }
    if (
      ocrState.imageURL &&
      typeof URL !== "undefined" &&
      URL.revokeObjectURL
    ) {
      URL.revokeObjectURL(ocrState.imageURL);
    }
    ocrState.file = file;
    ocrState.imageName = file.name || "anh-de-bai";
    ocrState.imageURL =
      typeof URL !== "undefined" && URL.createObjectURL
        ? URL.createObjectURL(file)
        : "blob:ocr-preview";
    ocrState.status = "Ảnh đã sẵn sàng. Bấm “Đọc chữ từ ảnh (OCR)” để bắt đầu.";
    refreshView();
  }

  function loadTesseract() {
    if (typeof window !== "undefined" && window.Tesseract) {
      return Promise.resolve(window.Tesseract);
    }
    if (typeof navigator !== "undefined" && navigator.onLine === false) {
      return Promise.reject(new Error("offline"));
    }
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js";
      script.crossOrigin = "anonymous";
      const timer = setTimeout(() => {
        script.remove();
        reject(new Error("timeout"));
      }, 30000);
      script.onload = () => {
        clearTimeout(timer);
        resolve(window.Tesseract);
      };
      script.onerror = () => {
        clearTimeout(timer);
        script.remove();
        reject(new Error("load"));
      };
      document.head.append(script);
    });
  }

  async function runOCRScan() {
    if (!ocrState.file || ocrState.busy) return;
    const run = ++ocrState.run;
    ocrState.busy = true;
    ocrState.status = "Đang chuẩn bị bộ đọc chữ tiếng Việt…";
    refreshView();
    let worker;
    try {
      const api = await loadTesseract();
      if (run !== ocrState.run) return;
      worker = await api.createWorker("vie+eng", 1, {
        workerPath:
          "https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/worker.min.js",
        logger: (m) => {
          if (run !== ocrState.run) return;
          ocrState.status =
            m.status === "recognizing text"
              ? `Đang đọc chữ: ${Math.round(m.progress * 100)}%`
              : "Đang tải dữ liệu nhận dạng chữ…";
          const el =
            typeof document !== "undefined" &&
            document.getElementById?.("online-ocr-status");
          if (el) el.textContent = ocrState.status;
        },
      });
      if (run !== ocrState.run) {
        await worker.terminate();
        return;
      }
      ocrState.worker = worker;
      const result = await worker.recognize(ocrState.file);
      if (run !== ocrState.run) return;
      const text = (result?.data?.text || "").trim();
      if (!text) throw new Error("empty");
      importDraft.source = [importDraft.source, text]
        .filter(Boolean)
        .join("\n\n")
        .slice(0, 40000);
      ocrState.status =
        "Đã đọc chữ từ ảnh. Hãy kiểm tra và chỉnh sửa nội dung ở khung bên cạnh trước khi tách câu.";
    } catch (err) {
      if (run === ocrState.run) {
        ocrState.status =
          err?.message === "empty"
            ? "Không nhận diện được chữ rõ ràng trong ảnh. Hãy thử ảnh rõ hơn hoặc dán văn bản trực tiếp."
            : "Không tải được bộ đọc chữ OCR. Hãy kiểm tra mạng hoặc dán văn bản đề bài vào khung bên cạnh.";
      }
    } finally {
      if (worker) await worker.terminate().catch(() => {});
      if (run === ocrState.run) {
        ocrState.worker = null;
        ocrState.busy = false;
        refreshView();
      }
    }
  }

  function cancelOCRScan() {
    ocrState.run++;
    ocrState.worker?.terminate?.().catch(() => {});
    ocrState.worker = null;
    ocrState.busy = false;
    ocrState.status = "Đã dừng đọc ảnh. Bạn có thể thử lại hoặc dán văn bản.";
    refreshView();
  }

  function handleInput(e) {
    const target = e.target;
    if (!target) return;

    const submitForm = target.closest?.('[data-online-form="submit"]');
    if (submitForm && selectedAssignment) {
      if (snapshot?.profile?.id) draftOwnerId = snapshot.profile.id;
      let vals = {};
      if (submitForm.values) {
        vals = { ...submitForm.values, [target.name]: target.value };
      } else {
        try {
          vals = Object.fromEntries(new FormData(submitForm));
        } catch {
          vals = { [target.name]: target.value };
        }
      }
      drafts.set(selectedAssignment, vals);
      return;
    }

    if (target.dataset?.onlineAuth === "email") {
      authEmailDraft = target.value;
      return;
    }
    if (target.dataset?.onlineProfile) {
      profileDraft[target.dataset.onlineProfile] = target.value;
      return;
    }
    if (
      target.closest?.('[data-online-form="join"]') &&
      target.name === "code"
    ) {
      joinCodeDraft = target.value;
      return;
    }
    if (target.dataset?.onlineQuestion) {
      const key = target.dataset.onlineQuestion;
      if (key === "answer") {
        question.answer = target.value === "" ? null : Number(target.value);
      } else {
        question[key] = target.value;
      }
      if (key === "type") refreshView();
      return;
    }
    if (target.dataset?.onlineOption !== undefined) {
      question.options ||= ["", "", "", ""];
      question.options[Number(target.dataset.onlineOption)] = target.value;
      return;
    }
    if (target.dataset?.onlineImport) {
      importDraft[target.dataset.onlineImport] = target.value;
      return;
    }
    if (target.dataset?.onlinePublish) {
      publishDraft[target.dataset.onlinePublish] = target.value;
      return;
    }
    if (target.dataset?.onlinePublishId !== undefined) {
      const id = target.dataset.onlinePublishId;
      const set = new Set(publishDraft.ids || []);
      if (target.checked) set.add(id);
      else set.delete(id);
      publishDraft.ids = [...set];
      refreshView();
      return;
    }
    if (
      (target.dataset?.onlineMark !== undefined ||
        target.dataset?.onlineFeedback !== undefined) &&
      selectedSubmission
    ) {
      if (snapshot?.profile?.id) draftOwnerId = snapshot.profile.id;
      const current = markDrafts.get(selectedSubmission) || {
        marks: {},
        feedback: undefined,
      };
      if (target.dataset.onlineMark !== undefined) {
        current.marks[target.dataset.onlineMark] = target.value;
      }
      if (target.dataset.onlineFeedback !== undefined) {
        current.feedback = target.value;
      }
      markDrafts.set(selectedSubmission, current);
      return;
    }
    if (target.dataset?.onlineInput === "question-query") {
      questionQuery = target.value;
      refreshView();
      return;
    }
  }

  function handleChange(e) {
    const target = e.target;
    if (!target) return;
    if (target.id === "online-ocr-file" || target.id === "online-ocr-camera") {
      readOCRFile(target.files?.[0]);
      target.value = "";
      return;
    }
    if (target.dataset?.onlineInput === "question-filter") {
      questionFilter = target.value;
      refreshView();
      return;
    }
    if (target.dataset?.onlineInput === "submission-assignment") {
      selectedAssignment = target.value || null;
      refreshView();
      return;
    }
    if (target.dataset?.onlineInput === "submission-student") {
      selectedStudent = target.value || null;
      refreshView();
      return;
    }
    handleInput(e);
  }

  function handleSubmit(e) {
    const form = e.target?.closest?.("[data-online-form]");
    if (!form) return Promise.resolve();
    e.preventDefault();
    const fd = form.values ? null : new FormData(form),
      values = form.values ? { ...form.values } : Object.fromEntries(fd),
      action = form.dataset.onlineForm;

    return perform(async () => {
      if (["login", "signup", "recover"].includes(action)) {
        authEmailDraft = String(values.email || "").trim();
        if (action === "login" || action === "signup") {
          clearSessionState({ keepDrafts: action === "login" });
          authEmailDraft = String(values.email || "").trim();
        }
        const r = await request(action, values);
        message = r.message || "";
        if (r.signedIn) {
          signedIn = true;
          authEmailDraft = "";
          await load();
          if (hasProfile()) {
            applyRoleNavigation("overview");
          } else {
            state.view = "online";
          }
        }
      } else if (action === "profile") {
        profileDraft = {
          name: String(values.name || "").trim(),
          role: values.role === "teacher" ? "teacher" : "student",
        };
        await request("profile", profileDraft);
        await load();
        applyRoleNavigation("overview");
        message =
          role() === "teacher"
            ? "Chào mừng thầy/cô! Không gian giảng dạy đã sẵn sàng."
            : "Chào mừng bạn! Không gian học tập đã sẵn sàng.";
      } else if (action === "join") {
        if (role() !== "student") {
          throw new Error(
            "Chỉ tài khoản học sinh mới dùng chức năng kết nối giáo viên.",
          );
        }
        joinCodeDraft = normalizeTeacherCode(values.code);
        await request("join", { code: joinCodeDraft });
        joinCodeDraft = "";
        await load();
        screen = "teachers";
        message = "Đã kết nối với giáo viên thành công.";
      } else if (action === "password") {
        await request("password", values);
        recovery = false;
        message = "Đã cập nhật mật khẩu thành công.";
        await load();
      } else if (action === "question") {
        if (role() !== "teacher") {
          throw new Error("Chỉ giáo viên mới có quyền soạn câu hỏi.");
        }
        const q = {
          ...emptyQuestion(),
          ...question,
          ...values,
          options:
            values.type === "written"
              ? ["", "", "", ""]
              : letters.map(
                  (_, i) => values["option" + i] ?? question.options?.[i] ?? "",
                ),
          answer:
            values.type === "written" ||
            values.answer === "" ||
            values.answer === undefined
              ? null
              : Number(values.answer),
        };
        question = { ...q, id: question.id };
        const error = validateQuestion(q, q.status === "approved");
        if (error) throw new Error(error);
        await request("question", { id: question.id, content: q });
        await load();
        question = emptyQuestion();
        applyRoleNavigation("questions");
        message =
          q.status === "approved"
            ? "Đã duyệt và lưu câu hỏi vào kho."
            : "Đã lưu câu hỏi vào bản nháp.";
      } else if (action === "publish") {
        if (role() !== "teacher") {
          throw new Error("Chỉ giáo viên mới có quyền giao bài.");
        }
        const rawIds = fd
          ? fd.getAll("ids")
          : Array.isArray(values.ids)
            ? values.ids
            : [];
        const ids = rawIds.length ? rawIds : publishDraft.ids || [];
        publishDraft = {
          title: String(values.title || "").trim(),
          due: values.due || "",
          instructions: String(values.instructions || ""),
          ids,
        };
        if (!publishDraft.title) {
          throw new Error("Hãy nhập tên bài giao.");
        }
        if (!ids.length || ids.length > 30) {
          throw new Error("Hãy chọn từ 1 đến 30 câu hỏi đã duyệt.");
        }
        await request("publish", {
          title: publishDraft.title,
          instructions: publishDraft.instructions,
          ids,
          due: publishDraft.due ? new Date(publishDraft.due).toISOString() : "",
        });
        publishDraft = { title: "", due: "", instructions: "", ids: [] };
        showPublishForm = false;
        await load();
        applyRoleNavigation("assignments");
        message = "Đã giao bài thành công cho các học sinh kết nối với bạn.";
      } else if (action === "submit") {
        if (role() !== "student") {
          throw new Error("Chỉ học sinh mới nộp bài tập.");
        }
        const a = snapshot.assignments.find((x) => x.id === selectedAssignment);
        if (!a) throw new Error("Không tìm thấy bài tập cần nộp.");
        drafts.set(a.id, values);
        const responses = Object.fromEntries(
          a.questions.map((q) => [
            q.id,
            q.type === "choice"
              ? values[q.id] === undefined || values[q.id] === ""
                ? null
                : Number(values[q.id])
              : String(values[q.id] || ""),
          ]),
        );
        const r = await request("submit", { id: a.id, responses });
        selectedSubmission = r.data.id;
        drafts.delete(a.id);
        await load();
        applyRoleNavigation("submission");
        message = "Đã nộp bài thành công.";
      } else if (action === "mark") {
        if (role() !== "teacher") {
          throw new Error("Chỉ giáo viên mới có quyền chấm điểm.");
        }
        const s = snapshot.submissions.find((x) => x.id === selectedSubmission);
        if (!s) throw new Error("Không tìm thấy bài nộp.");
        const rawMarks = Object.fromEntries(
          s.answers.map((a) => [a.questionId, values["mark-" + a.questionId]]),
        );
        markDrafts.set(s.id, {
          marks: rawMarks,
          feedback: values.feedback || "",
        });
        const marks = parseWrittenMarks(s.answers, rawMarks);
        await request("mark", {
          id: s.id,
          marks,
          feedback: values.feedback || "",
        });
        markDrafts.delete(s.id);
        await load();
        message =
          "Đã lưu điểm và nhận xét. Học sinh đã có thể xem kết quả cập nhật.";
      } else if (action === "import") {
        if (role() !== "teacher") {
          throw new Error("Chỉ giáo viên mới có quyền nhập câu hỏi.");
        }
        importDraft = {
          topic: String(values.topic || "Toán 10").trim() || "Toán 10",
          source: String(values.source || ""),
        };
        const parsed = parseQuestionText(importDraft.source);
        if (!parsed.length)
          throw new Error("Chưa đọc được câu hỏi từ nội dung đã nhập.");
        for (const q of parsed) {
          await request("question", {
            content: { ...q, topic: importDraft.topic, status: "draft" },
          });
        }
        importDraft = { topic: importDraft.topic, source: "" };
        await load();
        applyRoleNavigation("questions");
        message = `Đã nhập ${parsed.length} câu thành bản nháp. Hãy mở từng câu để chọn đáp án đúng và duyệt.`;
      }
    });
  }

  function navigate(targetScreen, dataset = {}) {
    if (busy) return;
    state.mobile = false;
    message = "";
    if (targetScreen === "logout") {
      perform(async () => {
        try {
          await request("logout");
        } finally {
          clearSessionState({ keepDrafts: false });
          state.role = "student";
          state.view = "online";
          authMode = "login";
          if (
            typeof history !== "undefined" &&
            typeof location !== "undefined"
          ) {
            history.replaceState(null, "", `${location.pathname}?online=1`);
          }
          message = "Bạn đã đăng xuất khỏi tài khoản.";
        }
      });
      return;
    }

    if (!hasProfile()) {
      state.view = "online";
      refreshView();
      return;
    }

    if (targetScreen === "new") {
      question = emptyQuestion();
      applyRoleNavigation("editor");
    } else if (targetScreen === "edit") {
      const q = snapshot?.questions?.find((item) => item.id === dataset.id);
      if (q) {
        question = {
          ...emptyQuestion(),
          ...structuredClone(q.content),
          id: q.id,
        };
        applyRoleNavigation("editor");
      }
    } else if (targetScreen === "task") {
      selectedAssignment = dataset.id || selectedAssignment;
      applyRoleNavigation("task", selectedAssignment);
    } else if (targetScreen === "submission") {
      selectedSubmission = dataset.id || selectedSubmission;
      applyRoleNavigation("submission", selectedSubmission);
    } else if (targetScreen === "submissions") {
      if ("assignment" in dataset)
        selectedAssignment = dataset.assignment || null;
      if ("student" in dataset) selectedStudent = dataset.student || null;
      applyRoleNavigation("submissions");
    } else if (targetScreen === "submissions-all") {
      selectedAssignment = null;
      selectedStudent = null;
      applyRoleNavigation("submissions");
    } else if (targetScreen === "preview-assignment") {
      previewAssignmentId = dataset.id || null;
      applyRoleNavigation("assignments");
    } else if (targetScreen === "close-preview") {
      previewAssignmentId = null;
      refreshView();
      return;
    } else if (targetScreen === "assigned-filter") {
      assignedFilter = dataset.filter || "all";
      refreshView();
      return;
    } else {
      applyRoleNavigation(targetScreen);
    }
    refreshView();
  }

  function handleClick(e) {
    const el = e.target?.closest?.("[data-online]");
    if (!el) return;
    const action = el.dataset.online;
    if (busy) return;
    message = "";

    if (action.endsWith("-mode")) {
      authMode = action.replace("-mode", "");
      refreshView();
      return;
    }
    if (action === "exit-online") {
      state.view = "home";
      if (typeof history !== "undefined" && typeof location !== "undefined") {
        history.replaceState(null, "", location.pathname);
      }
      refreshView();
      return;
    }
    if (action === "copy-code") {
      const code = snapshot?.profile?.code || "";
      if (!code) return;
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        navigator.clipboard
          .writeText(code)
          .then(() => {
            toast?.(`Đã sao chép mã giáo viên: ${code}`);
          })
          .catch(() => {
            message = `Mã giáo viên của bạn: ${code}`;
            refreshView();
          });
      } else {
        message = `Mã giáo viên của bạn: ${code}`;
        refreshView();
      }
      return;
    }
    if (action === "ocr-scan") {
      runOCRScan();
      return;
    }
    if (action === "ocr-cancel") {
      cancelOCRScan();
      return;
    }
    if (["refresh", "samples", "local"].includes(action)) {
      return perform(async () => {
        if (action === "refresh") {
          await load();
          message = "Dữ liệu đã được làm mới.";
        } else {
          if (role() !== "teacher") {
            throw new Error("Chỉ giáo viên mới có quyền nhập câu hỏi.");
          }
          const source =
            action === "samples"
              ? questionBank.map((q) => ({
                  ...q,
                  type: "choice",
                  topic:
                    lessons.find((l) => l.id === q.lessonId)?.shortTitle ||
                    "Toán 10",
                  hint: q.hints?.[0] || "",
                  status: "draft",
                }))
              : localQuestions().map((q) => ({ ...q, status: "draft" }));
          if (!source.length)
            throw new Error("Chưa có câu hỏi đã soạn trên thiết bị này.");
          for (const q of source) {
            await request("question", { content: q });
          }
          await load();
          applyRoleNavigation("questions");
          message = `Đã nhập toàn bộ ${source.length} câu vào kho câu hỏi.`;
        }
      });
    }
    navigate(action, el.dataset);
  }

  if (typeof document !== "undefined" && document.addEventListener) {
    document.addEventListener("input", handleInput);
    document.addEventListener("change", handleChange);
    document.addEventListener("submit", handleSubmit);
    document.addEventListener("click", handleClick);
  }

  function navItems() {
    if (!hasProfile()) return [];
    if (role() === "teacher") {
      const pendingCount = (snapshot?.submissions || []).filter(
        (s) => s.score === null || s.pending > 0,
      ).length;
      return [
        ["overview", "grid", "Tổng quan", ""],
        [
          "questions",
          "book",
          "Kho câu hỏi",
          String(snapshot?.questions?.length || 0),
        ],
        ["editor", "pen", "Soạn câu hỏi", ""],
        [
          "assignments",
          "calendar",
          "Bài đã giao",
          String(snapshot?.assignments?.length || 0),
        ],
        [
          "submissions",
          "check",
          "Bài nộp & chấm điểm",
          pendingCount ? String(pendingCount) : "",
        ],
        [
          "students",
          "users",
          "Học sinh",
          String(snapshot?.members?.length || 0),
        ],
        ["profile", "settings", "Hồ sơ", ""],
        ["logout", "logout", "Đăng xuất", ""],
      ];
    }
    const todoCount = (snapshot?.assignments || []).filter(
      (a) =>
        !snapshot.submissions?.some(
          (s) =>
            s.assignment_id === a.id && s.student_id === snapshot.profile.id,
        ) && !(a.due && Date.now() > new Date(a.due).getTime()),
    ).length;
    return [
      ["overview", "grid", "Tổng quan", ""],
      ["lessons", "book", "Bài học", String(lessons.length || 15)],
      ["practice", "pen", "Luyện tập", ""],
      [
        "assigned",
        "calendar",
        "Bài được giao",
        todoCount ? String(todoCount) : "",
      ],
      ["grades", "chart", "Điểm & tiến độ", ""],
      ["teachers", "users", "Giáo viên của tôi", ""],
      ["profile", "settings", "Hồ sơ", ""],
      ["logout", "logout", "Đăng xuất", ""],
    ];
  }

  function activeNavId() {
    if (!hasProfile()) return "online";
    if (role() === "teacher") {
      if (screen === "import") return "editor";
      if (screen === "publish") return "assignments";
      if (screen === "submission") return "submissions";
      return screen;
    }
    if (screen === "task") return "assigned";
    if (screen === "submission") return "grades";
    return screen;
  }

  function screenTitle() {
    if (!signedIn) return "Đăng nhập & tạo tài khoản";
    if (!hasProfile()) return "Chọn vai trò tài khoản";
    const r = role();
    return (
      SCREEN_TITLES[r]?.[screen] || SCREEN_TITLES[r]?.overview || "Hiểu Thật"
    );
  }

  async function init() {
    if (typeof location === "undefined") return;
    const rawHash = location.hash ? location.hash.slice(1) : "";
    const fragment = new URLSearchParams(rawHash);
    if (fragment.has("access_token") && fragment.has("refresh_token")) {
      const payload = {
        access_token: fragment.get("access_token"),
        refresh_token: fragment.get("refresh_token"),
      };
      recovery = fragment.get("type") === "recovery";
      history.replaceState(null, "", location.pathname + "?online=1");
      try {
        await request("callback", payload);
        signedIn = true;
      } catch (e) {
        toast?.(e.message);
      }
    }

    const searchParams = new URLSearchParams(location.search);
    const explicitOnline = searchParams.has("online");
    const { screen: requestedHashScreen, id: requestedHashId } =
      parseHashTarget(rawHash);

    if (explicitOnline) {
      await open(requestedHashScreen || "overview", requestedHashId);
      return;
    }

    // Tự động khôi phục phiên đăng nhập khi tải lại trang và mở đúng giao diện vai trò.
    try {
      await load();
      if (signedIn) {
        if (hasProfile()) {
          applyRoleNavigation(
            requestedHashScreen || "overview",
            requestedHashId,
          );
        } else {
          state.view = "online";
        }
        refreshView();
      }
    } catch {
      // Người chưa đăng nhập tiếp tục dùng trang tự học bình thường.
    }
  }

  if (typeof window !== "undefined" && window.addEventListener) {
    window.addEventListener("popstate", () => {
      state.mobile = false;
      if (!hasProfile()) return;
      const { screen: s, id } = parseHashTarget(location.hash);
      applyRoleNavigation(s || "overview", id);
      refreshView();
    });
  }

  return {
    view,
    open,
    init,
    navigate,
    handleInput,
    handleChange,
    handleSubmit,
    handleClick,
    isSignedIn,
    hasProfile,
    profile,
    role,
    currentScreen: () => screen,
    navItems,
    activeNavId,
    screenTitle,
  };
}
