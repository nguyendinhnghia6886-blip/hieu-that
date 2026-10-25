import { createWorkspaceViews } from "./views/workspace.js";
import {
  emptyQuestion,
  validateQuestion,
  parseQuestionText,
  normalizeTeacherCode,
  assessAnswers,
  tutorReply,
  encodeSharedAssignment,
  decodeSharedAssignment,
} from "./authoring.js";

const safeUUID = () =>
  typeof globalThis !== "undefined" && globalThis.crypto?.randomUUID
    ? globalThis.crypto.randomUUID()
    : "id-" +
      Math.random().toString(36).slice(2, 10) +
      "-" +
      Date.now().toString(36);

export function createWorkspace(ctx) {
  const {
    data,
    saved,
    state,
    esc,
    button: btn,
    icon,
    pageHeading: heading,
    render,
    persist,
    toast,
    openModal,
    closeModal,
    questionBank,
    lessons,
    getPractice,
    activeQuestion,
  } = ctx;
  const $ = (s) => document.querySelector(s);
  const letters = ["A", "B", "C", "D"];
  const arrays = ["customQuestions", "assignmentSubmissions"];
  for (const key of arrays)
    data[key] = Array.isArray(saved[key]) ? saved[key] : [];
  for (const key of [
    "teacherProfile",
    "studentProfile",
    "questionDraft",
    "taskDraft",
  ])
    data[key] = saved[key] || null;
  data.taskDrafts =
    saved.taskDrafts && typeof saved.taskDrafts === "object"
      ? saved.taskDrafts
      : {};
  if (data.taskDraft?.assignmentId)
    data.taskDrafts[data.taskDraft.assignmentId] = data.taskDraft.responses;
  data.taskDraft = null;
  data.questionDrafts =
    saved.questionDrafts && typeof saved.questionDrafts === "object"
      ? saved.questionDrafts
      : {};
  if (data.questionDraft)
    data.questionDrafts[data.questionDraft.id || "new"] = data.questionDraft;
  data.questionDraft = null;
  data.assignmentDraft = saved.assignmentDraft || {
    title: "",
    due: "",
    instructions: "",
    selected: [],
  };
  let editorKey = "new",
    editor = data.questionDrafts.new || emptyQuestion();
  let accountRole = state.role === "teacher" ? "teacher" : "student";
  let filter = "all",
    query = "",
    importText = "",
    importTopic = "Toán 10",
    imageFile = null,
    imageURL = "",
    imageLoad = 0;
  let ocrBusy = false,
    ocrWorker = null,
    ocrRun = 0,
    ocrMessage = "",
    task = null;
  const accountDrafts = {
    student: {
      name: data.studentProfile?.name || "",
      teacherCode: data.studentProfile?.teacherCode || "",
    },
    teacher: { name: data.teacherProfile?.name || "" },
  };
  const profileName = () =>
    (state.role === "teacher"
      ? data.teacherProfile?.name
      : data.studentProfile?.name) ||
    (state.role === "teacher" ? "Không gian giáo viên" : "Người học");
  const error = (message, id = "workspace-error") => {
    const el = $("#" + id);
    if (el) {
      el.textContent = message;
      if (message) el.scrollIntoView({ block: "nearest" });
    } else if (message) toast(message);
  };
  const go = (view) => {
    if (ocrBusy && view !== "import") cancelScan();
    state.view = view;
    state.mobile = false;
    state.presentation = false;
    render();
    window.scrollTo({ top: 0 });
  };
  const field = (label, content) =>
    `<label class="field">${label}${content}</label>`;
  const input = (name, value, max = 200, placeholder = "") =>
    `<input data-q="${name}" value="${esc(value)}" maxlength="${max}" placeholder="${esc(placeholder)}">`;
  const textArea = (name, value, rows = 3, placeholder = "") =>
    `<textarea data-q="${name}" rows="${rows}" maxlength="5000" placeholder="${esc(placeholder)}">${esc(value)}</textarea>`;
  const localNote =
    '<p class="local-banner">Bản trải nghiệm trên thiết bị · Chưa đồng bộ giữa giáo viên và học sinh ở máy khác.</p>';
  const empty = (title, text, action = "") =>
    `<div class="empty-state card">${icon("pen")}<h3>${title}</h3><p>${text}</p>${action}</div>`;
  const lessonTitle = (id) =>
    lessons.find((l) => l.id === id)?.shortTitle || "Toán 10";
  const nextId = () => safeUUID();
  function teacherProfile() {
    if (!data.teacherProfile) {
      data.teacherProfile = {
        name: "Giáo viên trải nghiệm",
        code:
          "GV-" +
          safeUUID()
            .replace(/[^a-zA-Z0-9]/g, "")
            .slice(0, 8)
            .toUpperCase(),
      };
      persist();
    }
    return data.teacherProfile;
  }
  const {
    libraryLink,
    questionsView,
    editorView,
    importView,
    assignView,
    classView,
    taskView,
    accountView,
    connectionsView,
  } = createWorkspaceViews(() => ({
    data,
    state,
    esc,
    btn,
    icon,
    heading,
    questionBank,
    lessons,
    teacherProfile,
    field,
    input,
    textArea,
    localNote,
    empty,
    lessonTitle,
    letters,
    filter,
    query,
    editor,
    importText,
    importTopic,
    imageURL,
    imageFile,
    ocrBusy,
    ocrMessage,
    task,
    accountDrafts,
    accountRole,
  }));
  function submissionView(id) {
    const s = data.assignmentSubmissions.find((x) => x.id === id);
    if (!s) return;
    const teacher = state.role === "teacher",
      choices = s.answers.filter((a) => a.type === "choice"),
      pending = s.answers.some((a) => a.type === "written");
    openModal(
      teacher ? "Bài nộp của học sinh" : "Bài bạn đã nộp",
      `<span class="tag green">${choices.filter((a) => a.correct).length}/${choices.length} trắc nghiệm đúng</span>${pending ? ` <span class="tag ${s.feedback ? "green" : "amber"}">Tự luận: ${s.feedback ? "Đã nhận xét" : "Chờ giáo viên"}</span>` : ""}<h3>${esc(s.title)}</h3><p class="muted">${esc(s.studentName)} · ${new Date(s.time).toLocaleString("vi-VN", { timeZone: "Asia/Bangkok" })}</p><ol class="submitted-answers">${s.answers.map((a) => `<li><strong>${esc(a.prompt)}</strong><p class="preserve-lines">Bài làm: ${esc(a.type === "choice" ? s.questions.find((q) => q.id === a.questionId)?.options[a.response] : a.response)}</p><span class="tag ${a.correct === null ? "gray" : a.correct ? "green" : "amber"}">${a.correct === null ? "Giáo viên đọc bài" : a.correct ? "Đúng" : "Cần xem lại"}</span><p class="muted preserve-lines">${a.correct === null ? "Hướng dẫn tham khảo" : "Lời giải"}: ${esc(a.explanation)}</p></li>`).join("")}</ol>${teacher ? field("Nhận xét của giáo viên", `<textarea id="submission-feedback" maxlength="3000" rows="3" placeholder="Nêu bước làm tốt và điều cần luyện thêm…">${esc(s.feedback || "")}</textarea>`) : s.feedback ? `<div class="tip-box preserve-lines"><strong>Nhận xét của giáo viên</strong><p>${esc(s.feedback)}</p></div>` : ""}<p id="workspace-error" class="form-error" role="alert"></p>`,
      teacher
        ? btn(
            "Lưu nhận xét",
            "save-submission-feedback",
            "primary",
            `data-id="${s.id}"`,
          )
        : "",
    );
  }
  function chat(q, p) {
    p.chats ||= {};
    const thread = (p.chats[q.prompt] ||= {
      messages: [],
      hints: 0,
      draft: "",
    });
    return `<div class="tutor-heading"><span class="chat-avatar">${icon("sparkle")}</span><div><h3>Cùng nghĩ một chút</h3><span class="small-text muted">Hỏi đáp theo bài đang làm</span></div></div><div class="chat-status"><span></span>Gợi ý có sẵn · AI chưa kết nối</div><div class="chat-messages" role="log" aria-live="polite"><div class="chat-bubble assistant">Bạn đang vướng ở bước nào? Mình có thể mở từng gợi ý của câu hỏi này.</div>${thread.messages.map((m) => `<div class="chat-bubble ${m.role}"><span class="screen-reader-only">${m.role === "user" ? "Bạn" : "Trợ lý"}: </span>${esc(m.text)}</div>`).join("")}</div><div class="chat-suggestions">${["Gợi ý bước đầu", "Bước tiếp theo", "Xem lời giải"].map((t) => btn(t, "chat-suggest", "ghost small", `data-text="${t}"`)).join("")}</div><form id="chat-form" class="chat-composer"><label class="screen-reader-only" for="chat-message">Câu hỏi cho trợ lý</label><textarea id="chat-message" rows="2" maxlength="1000" placeholder="Mình chưa hiểu chỗ…">${esc(thread.draft)}</textarea><button type="submit" class="chat-send" aria-label="Gửi câu hỏi">${icon("arrow")}</button></form><p class="small-text muted chat-footnote">Enter để gửi · Shift + Enter xuống dòng.<br>Lượt xem hỗ trợ được ghi cùng kết quả.</p>`;
  }
  function sendChat(message) {
    const p = getPractice();
    if (!p || p.phase === "result") return;
    const q = activeQuestion(),
      text = (message || $("#chat-message")?.value || "").trim().slice(0, 1000);
    if (!text) return;
    p.chats ||= {};
    const thread = (p.chats[q.prompt] ||= {
      messages: [],
      hints: 0,
      draft: "",
    });
    if (thread.messages.length >= 100) {
      toast("Đoạn chat đã đủ dài. Bạn có thể tiếp tục làm bài và xem sổ tay.");
      return;
    }
    const reply = tutorReply(q, text, thread.hints);
    thread.messages.push(
      { role: "user", text },
      { role: "assistant", text: reply.text },
    );
    thread.draft = "";
    if (reply.supported) {
      thread.hints++;
      p.hints++;
    }
    render();
    const log = $(".chat-messages");
    if (log) log.scrollTop = log.scrollHeight;
    $("#chat-message")?.focus();
  }
  function saveDraft() {
    data.questionDrafts[editorKey] = structuredClone(editor);
    persist();
  }
  function updateQuestion() {
    if (!$("#review-confirm")) return;
    document
      .querySelectorAll("[data-q]")
      .forEach((el) => (editor[el.dataset.q] = el.value));
    document
      .querySelectorAll("[data-option]")
      .forEach((el) => (editor.options[+el.dataset.option] = el.value));
    const correct = document.querySelector("[data-answer]:checked");
    editor.answer = correct ? +correct.dataset.answer : null;
  }
  function storeQuestion(approved) {
    updateQuestion();
    const message = validateQuestion(editor, approved);
    if (message) {
      error(message);
      return;
    }
    if (approved && !$("#review-confirm")?.checked) {
      error("Hãy xác nhận bạn đã kiểm tra câu hỏi trước khi duyệt.");
      return;
    }
    const q = structuredClone(editor);
    q.id ||= nextId();
    q.status = approved ? "approved" : "draft";
    q.updatedAt = Date.now();
    const index = data.customQuestions.findIndex((x) => x.id === q.id);
    if (index < 0) data.customQuestions.push(q);
    else data.customQuestions[index] = q;
    delete data.questionDrafts[editorKey];
    editorKey = "new";
    editor = emptyQuestion();
    persist();
    go("questions");
    toast(
      approved
        ? "Đã duyệt. Câu hỏi sẵn sàng để giao bài."
        : "Đã lưu câu hỏi vào bản nháp.",
    );
  }
  async function readImage(file) {
    const load = ++imageLoad;
    if (!file) return;
    if (
      !["image/jpeg", "image/png", "image/webp"].includes(file.type) ||
      file.size > 10 * 1024 * 1024
    ) {
      toast("Hãy chọn ảnh JPG, PNG hoặc WebP không quá 10 MB.");
      return;
    }
    try {
      const bitmap = await createImageBitmap(file);
      const tooLarge = bitmap.width * bitmap.height > 20000000;
      bitmap.close();
      if (tooLarge) throw new Error();
    } catch {
      toast(
        "Ảnh chưa đọc được hoặc quá 20 triệu điểm ảnh. Hãy dùng ảnh nhỏ và rõ hơn.",
      );
      return;
    }
    if (load !== imageLoad) return;
    if (imageURL) URL.revokeObjectURL(imageURL);
    imageFile = file;
    imageURL = URL.createObjectURL(file);
    ocrMessage = "Ảnh sẵn sàng. Bấm đọc chữ để bắt đầu.";
    render();
  }
  function loadOCR() {
    if (window.Tesseract) return Promise.resolve(window.Tesseract);
    if (typeof navigator !== "undefined" && navigator.onLine === false)
      return Promise.reject(new Error("offline"));
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
  async function scan() {
    if (!imageFile || ocrBusy) return;
    const run = ++ocrRun;
    ocrBusy = true;
    ocrMessage = "Đang tải bộ đọc chữ, lần đầu có thể mất một lúc…";
    render();
    let worker;
    const status = (text) => {
      if (run !== ocrRun) return;
      ocrMessage = text;
      if ($("#ocr-status")) $("#ocr-status").textContent = text;
    };
    const timeout = setTimeout(() => {
      if (run === ocrRun) {
        cancelScan();
        ocrMessage = "Đọc ảnh quá lâu. Hãy kiểm tra mạng hoặc thử ảnh nhỏ hơn.";
        if (state.view === "import") render();
      }
    }, 180000);
    try {
      const api = await loadOCR();
      if (run !== ocrRun) return;
      worker = await api.createWorker("vie+eng", 1, {
        workerPath:
          "https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/worker.min.js",
        logger: (m) =>
          status(
            m.status === "recognizing text"
              ? `Đang đọc chữ: ${Math.round(m.progress * 100)}%`
              : "Đang chuẩn bị bộ đọc tiếng Việt…",
          ),
      });
      if (run !== ocrRun) {
        await worker.terminate();
        return;
      }
      ocrWorker = worker;
      const result = await worker.recognize(imageFile);
      if (run !== ocrRun) return;
      const text = result.data.text.trim();
      if (!text) throw new Error("empty");
      if (importText.length + text.length > 39998) throw new Error("length");
      importText = [importText, text].filter(Boolean).join("\n\n");
      ocrMessage =
        "Đã đọc chữ. Kiểm tra và sửa nội dung bên cạnh, nhất là dấu, số mũ và phân số.";
    } catch (err) {
      if (run === ocrRun) {
        ocrMessage =
          err?.message === "empty"
            ? "Không tìm thấy chữ rõ ràng trong ảnh. Hãy thử chụp gần hơn hoặc tăng độ sáng."
            : err?.message === "length"
              ? "Nội dung đọc được vượt quá giới hạn 40.000 ký tự. Hãy tách nhỏ đề bài trước khi nhập."
              : "Không thể tải bộ đọc chữ tiếng Việt. Hãy kiểm tra kết nối mạng hoặc dán văn bản trực tiếp vào ô bên cạnh.";
      }
    } finally {
      clearTimeout(timeout);
      if (worker) await worker.terminate().catch(() => {});
      if (run === ocrRun) {
        ocrWorker = null;
        ocrBusy = false;
        if (state.view === "import") render();
      }
    }
  }
  function cancelScan() {
    ocrRun++;
    ocrWorker?.terminate().catch(() => {});
    ocrWorker = null;
    ocrBusy = false;
    ocrMessage = "Đã dừng đọc ảnh. Bạn có thể thử lại hoặc dán nội dung.";
    if (state.view === "import") render();
  }
  function checkCode(code) {
    return !code || (data.teacherProfile && code === data.teacherProfile.code);
  }
  function codeModal() {
    openModal(
      "Kết nối với giáo viên",
      `<p>Bạn có thể bỏ qua bước này và nhập mã sau.</p>${field("Mã giáo viên", `<input id="teacher-code-input" maxlength="20" value="${esc(data.studentProfile?.teacherCode || "")}" placeholder="GV-…">`)}<p class="small-text muted">Trong bản trải nghiệm, chỉ kết nối mã được tạo ở hồ sơ giáo viên trên cùng trình duyệt này.</p><p id="workspace-error" class="form-error" role="alert"></p>`,
      btn("Kết nối giáo viên", "connect-teacher", "primary"),
    );
  }
  async function handle(action, el) {
    if (action === "new-question") {
      editorKey = "new";
      editor = structuredClone(data.questionDrafts.new || emptyQuestion());
      go("editor");
    } else if (action === "edit-question" || action === "duplicate-question") {
      const q = data.customQuestions.find((x) => x.id === el.dataset.id);
      if (!q) return true;
      if (action === "duplicate-question") {
        const draft = data.questionDrafts.new;
        if (draft)
          data.customQuestions.push({
            ...structuredClone(draft),
            id: nextId(),
            status: "draft",
            updatedAt: Date.now(),
          });
        editorKey = "new";
        editor = structuredClone(q);
        editor.id = "";
        editor.status = "draft";
        saveDraft();
      } else {
        editorKey = q.id;
        editor = structuredClone(data.questionDrafts[q.id] || q);
      }
      go("editor");
    } else if (action === "save-question-draft") storeQuestion(false);
    else if (action === "approve-question") storeQuestion(true);
    else if (action === "delete-question") {
      openModal(
        "Xóa câu hỏi khỏi kho?",
        `<p>Câu hỏi sẽ bị xóa khỏi kho. Bản đề đã giao vẫn giữ nguyên nội dung.</p>`,
        btn("Giữ lại", "close-modal", "secondary") +
          btn(
            "Xóa câu hỏi",
            "confirm-delete-question",
            "danger-button",
            `data-id="${el.dataset.id}"`,
          ),
      );
    } else if (action === "confirm-delete-question") {
      data.customQuestions = data.customQuestions.filter(
        (q) => q.id !== el.dataset.id,
      );
      delete data.questionDrafts[el.dataset.id];
      if (editorKey === el.dataset.id) {
        editorKey = "new";
        editor = emptyQuestion();
      }
      persist();
      closeModal();
      render();
      toast("Đã xóa câu hỏi khỏi kho.");
    } else if (action === "open-import") {
      go("import");
      if (el.dataset.mode === "text") $("#import-text")?.focus();
    } else if (action === "scan-image") await scan();
    else if (action === "cancel-scan") cancelScan();
    else if (action === "parse-import") {
      let parsed;
      try {
        parsed = parseQuestionText(importText);
      } catch (e) {
        error(e.message);
        return true;
      }
      if (!parsed.length) {
        error("Hãy nhập hoặc đọc nội dung trước khi tách câu.");
        return true;
      }
      if (!importTopic.trim()) {
        error("Hãy nhập chủ đề chung.");
        return true;
      }
      data.customQuestions.push(
        ...parsed.map((q) => ({
          ...q,
          id: nextId(),
          topic: importTopic.trim(),
          updatedAt: Date.now(),
        })),
      );
      persist();
      importText = "";
      go("questions");
      toast(
        `Đã tạo ${parsed.length} bản nháp. Mở từng câu để kiểm tra và chọn đáp án.`,
      );
    } else if (action === "assign") go("assign");
    else if (action === "publish-assignment") {
      const title = $("#assignment-title").value.trim(),
        ids = [
          ...document.querySelectorAll('[name="pick-question"]:checked'),
        ].map((el) => el.value);
      if (!title || !ids.length) {
        error(
          !title ? "Hãy đặt tên cho bài giao." : "Chọn ít nhất một câu hỏi.",
        );
        return true;
      }
      const questions = ids
        .map((id) => {
          const custom = data.customQuestions.find(
            (q) => q.id === id && q.status === "approved",
          );
          if (custom) return structuredClone(custom);
          const q = questionBank.find(
            (q) => q.id === id && data.approved.includes(id),
          );
          return q
            ? {
                ...structuredClone(q),
                type: "choice",
                topic: lessonTitle(q.lessonId),
                hint: q.hints?.[0] || "",
              }
            : null;
        })
        .filter(Boolean);
      if (questions.length !== ids.length) {
        error(
          "Một câu hỏi chưa còn ở trạng thái đã duyệt. Hãy tải lại danh sách.",
        );
        return true;
      }
      data.assignments.push({
        id: nextId(),
        title,
        questions,
        due: $("#assignment-due").value,
        instructions: $("#assignment-instructions").value.trim(),
        teacherCode: teacherProfile().code,
        time: Date.now(),
      });
      data.assignmentDraft = {
        title: "",
        due: "",
        instructions: "",
        selected: [],
      };
      persist();
      go("class");
      toast("Đã giao bài. Chuyển sang Học sinh để thử làm bài.");
    } else if (action === "share-assignment") {
      const a = data.assignments.find((x) => x.id === el.dataset.id);
      if (!a?.questions) return true;
      try {
        const token = encodeSharedAssignment(a);
        const base =
          typeof location !== "undefined"
            ? `${location.origin}${location.pathname}`
            : "https://hieu-that.vercel.app/";
        const url = `${base}?shared=${token}`;
        try {
          await navigator.clipboard.writeText(url);
          toast(
            "Đã sao chép liên kết bài tập. Gửi link này cho học sinh để làm bài.",
          );
        } catch {
          openModal(
            "Sao chép liên kết giao bài",
            `<p>Sao chép đường dẫn dưới đây và gửi cho học sinh:</p><label class="field">Liên kết bài tập<input value="${esc(url)}" readonly></label>`,
          );
        }
      } catch (e) {
        toast(e.message || "Không thể tạo liên kết chia sẻ cho bài tập này.");
      }
    } else if (action === "preview-assignment") {
      const a = data.assignments.find((x) => x.id === el.dataset.id);
      if (a)
        openModal(
          esc(a.title),
          `<p>${esc(a.instructions)}</p><ol class="submitted-answers">${a.questions.map((q) => `<li><strong>${esc(q.prompt)}</strong>${q.type === "choice" ? `<p>${q.options.map((o, i) => `${letters[i]}. ${esc(o)}`).join("<br>")}</p>` : ""}<p class="muted">${esc(q.explanation)}</p></li>`).join("")}</ol>`,
        );
    } else if (action === "start-assignment") {
      const a = data.assignments.find((x) => x.id === el.dataset.id);
      if (a) {
        task = {
          ...structuredClone(a),
          responses: data.taskDrafts[a.id] || {},
        };
        go("task");
      }
    } else if (action === "submit-assignment") {
      if (!task) return true;
      const missing = task.questions.findIndex((q) =>
        q.type === "written"
          ? !String(task.responses[q.id] || "").trim()
          : !Number.isInteger(task.responses[q.id]),
      );
      if (missing >= 0) {
        error(
          `Bạn chưa trả lời câu ${missing + 1}. Hãy hoàn thành trước khi nộp.`,
        );
        return true;
      }
      const existing = data.assignmentSubmissions.find(
        (s) => s.assignmentId === task.id,
      );
      if (existing) {
        submissionView(existing.id);
        return true;
      }
      const s = {
        id: nextId(),
        assignmentId: task.id,
        title: task.title,
        studentName: data.studentProfile?.name || "Học sinh trải nghiệm",
        questions: task.questions,
        answers: assessAnswers(task.questions, task.responses),
        time: Date.now(),
      };
      data.assignmentSubmissions.push(s);
      delete data.taskDrafts[task.id];
      persist();
      go("class");
      submissionView(s.id);
    } else if (action === "submission") submissionView(el.dataset.id);
    else if (action === "save-submission-feedback") {
      const s = data.assignmentSubmissions.find((s) => s.id === el.dataset.id),
        text = $("#submission-feedback").value.trim();
      if (!text) {
        error("Hãy viết nhận xét trước khi lưu.");
        return true;
      }
      if (s) {
        s.feedback = text;
        s.reviewedAt = Date.now();
        persist();
        closeModal();
        render();
        toast("Đã lưu nhận xét cho bài nộp.");
      }
    } else if (action === "account") {
      accountRole = state.role === "teacher" ? "teacher" : "student";
      go("account");
    } else if (action === "account-role") {
      accountRole = el.dataset.role;
      render();
    } else if (action === "provider") {
      const name = {
        google: "Google",
        phone: "số điện thoại",
        facebook: "Facebook",
        email: "email & mật khẩu",
      }[el.dataset.provider];
      openModal(
        `Đăng nhập bằng ${name}`,
        `<span class="tag amber">Chưa kết nối dịch vụ</span><p>Giao diện đã được chuẩn bị. Chủ website cần kết nối xác thực và dữ liệu trước khi tạo tài khoản ${accountRole === "teacher" ? "giáo viên" : "học sinh"} trực tuyến.</p><p>Hiện chưa gửi OTP hoặc chuyển sang nhà cung cấp. Bạn có thể quay lại để tạo hồ sơ trải nghiệm.</p>`,
        btn("Xem hướng dẫn kết nối", "connection-guide", "secondary") +
          btn("Về hồ sơ trải nghiệm", "close-modal", "primary"),
      );
    } else if (action === "connection-guide") {
      closeModal();
      go("connections");
    } else if (action === "save-profile") {
      const name = $("#profile-name").value.trim(),
        code = normalizeTeacherCode($("#profile-teacher-code")?.value);
      if (!name) {
        error("Hãy nhập tên hiển thị của bạn.");
        return true;
      }
      if (accountRole === "student" && !checkCode(code)) {
        error(
          "Chưa tìm thấy mã trên thiết bị này. Bạn có thể bỏ trống và nhập sau.",
        );
        return true;
      }
      if (accountRole === "teacher") {
        teacherProfile().name = name;
      } else data.studentProfile = { name, teacherCode: code };
      state.role = accountRole;
      persist();
      go("class");
      toast("Đã lưu hồ sơ trải nghiệm trên thiết bị.");
    } else if (action === "teacher-code" || action === "join") codeModal();
    else if (action === "connect-teacher") {
      const code = normalizeTeacherCode($("#teacher-code-input").value);
      if (!code || !checkCode(code)) {
        error(
          "Chưa tìm thấy mã giáo viên trên thiết bị này. Kiểm tra mã hoặc nhập sau.",
        );
        return true;
      }
      data.studentProfile ||= { name: "Học sinh trải nghiệm" };
      data.studentProfile.teacherCode = code;
      persist();
      closeModal();
      render();
      toast("Đã kết nối hồ sơ giáo viên trên thiết bị.");
    } else if (action === "copy-teacher-code") {
      const code = teacherProfile().code;
      try {
        await navigator.clipboard.writeText(code);
        toast("Đã sao chép mã giáo viên.");
      } catch {
        openModal(
          "Mã giáo viên",
          `<p class="class-code"><strong>${esc(code)}</strong></p><p>Chọn mã để sao chép.</p>`,
        );
      }
    } else if (action === "chat-suggest") sendChat(el.dataset.text);
    else if (action === "reset") {
      arrays.forEach((k) => (data[k] = []));
      [
        "teacherProfile",
        "studentProfile",
        "questionDraft",
        "taskDraft",
      ].forEach((k) => (data[k] = null));
      data.taskDrafts = {};
      data.questionDrafts = {};
      data.assignmentDraft = {
        title: "",
        due: "",
        instructions: "",
        selected: [],
      };
      cancelScan();
      imageLoad++;
      if (imageURL) URL.revokeObjectURL(imageURL);
      imageURL = "";
      imageFile = null;
      importText = "";
      importTopic = "Toán 10";
      ocrMessage = "";
      accountDrafts.student = { name: "", teacherCode: "" };
      accountDrafts.teacher = { name: "" };
      task = null;
      editorKey = "new";
      editor = emptyQuestion();
      return false;
    } else return false;
    return true;
  }
  if (typeof location !== "undefined" && location.search) {
    const params = new URLSearchParams(location.search);
    const sharedToken = params.get("shared");
    if (sharedToken) {
      try {
        const sharedAssignment = decodeSharedAssignment(sharedToken);
        if (!data.assignments.some((x) => x.id === sharedAssignment.id)) {
          data.assignments.push(sharedAssignment);
          persist();
        }
        if (
          typeof history !== "undefined" &&
          typeof history.replaceState === "function"
        ) {
          params.delete("shared");
          const qs = params.toString();
          history.replaceState(
            null,
            "",
            `${location.pathname || "/"}${qs ? "?" + qs : ""}${location.hash || ""}`,
          );
        }
        state.role = "student";
        const existing =
          data.assignments.find((x) => x.id === sharedAssignment.id) ||
          sharedAssignment;
        task = {
          ...structuredClone(existing),
          responses: data.taskDrafts[existing.id] || {},
        };
        state.view = "task";
        toast("Đã nhận bài tập được chia sẻ từ giáo viên.");
      } catch {
        toast("Liên kết bài tập chia sẻ không hợp lệ.");
      }
    }
  }
  document.addEventListener("input", (e) => {
    const el = e.target;
    if (el.id === "profile-name") accountDrafts[accountRole].name = el.value;
    if (el.id === "profile-teacher-code")
      accountDrafts.student.teacherCode = el.value;
    if (el.id === "assignment-title") {
      data.assignmentDraft.title = el.value;
      persist();
    }
    if (el.id === "assignment-due") {
      data.assignmentDraft.due = el.value;
      persist();
    }
    if (el.id === "assignment-instructions") {
      data.assignmentDraft.instructions = el.value;
      persist();
    }
    if (el.matches("[data-q],[data-option]")) {
      updateQuestion();
      saveDraft();
    }
    if (el.id === "import-text") importText = el.value;
    if (el.id === "import-topic") importTopic = el.value;
    if (el.id === "chat-message") {
      const p = getPractice();
      if (p) {
        p.chats ||= {};
        const t = (p.chats[activeQuestion().prompt] ||= {
          messages: [],
          hints: 0,
          draft: "",
        });
        t.draft = el.value;
      }
    }
    if (el.matches("textarea[data-response]") && task) {
      task.responses[el.dataset.response] = el.value;
      data.taskDrafts[task.id] = task.responses;
      persist();
    }
    if (el.id === "question-search") {
      query = el.value;
      const pos = el.selectionStart;
      render();
      const search = $("#question-search");
      search?.focus();
      try {
        search?.setSelectionRange(pos, pos);
      } catch {}
    }
  });
  document.addEventListener("change", (e) => {
    const el = e.target;
    if (el.id === "question-status") {
      filter = el.value;
      render();
    }
    if (el.name === "pick-question") {
      data.assignmentDraft.selected = [
        ...document.querySelectorAll('[name="pick-question"]:checked'),
      ].map((x) => x.value);
      persist();
    }
    if (el.matches("[data-answer]")) {
      editor.answer = +el.dataset.answer;
      saveDraft();
    }
    if (el.dataset.q === "type") {
      editor.type = el.value;
      saveDraft();
      render();
    }
    if (el.matches("input[data-response]") && task) {
      task.responses[el.dataset.response] = +el.value;
      data.taskDrafts[task.id] = task.responses;
      persist();
    }
    if (el.id === "source-image" || el.id === "camera-image")
      readImage(el.files[0]);
  });
  document.addEventListener("submit", (e) => {
    if (e.target.id === "chat-form") {
      e.preventDefault();
      sendChat();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (
      e.target.id === "chat-message" &&
      e.key === "Enter" &&
      !e.shiftKey &&
      !e.isComposing
    ) {
      e.preventDefault();
      sendChat();
    }
  });
  window.addEventListener("beforeunload", () => {
    if (imageURL) URL.revokeObjectURL(imageURL);
    ocrWorker?.terminate();
  });
  return {
    handle,
    chat,
    classView,
    libraryLink,
    profileName,
    view: () =>
      ({
        questions: questionsView,
        editor: editorView,
        import: importView,
        assign: assignView,
        task: taskView,
        account: accountView,
        connections: connectionsView,
      })[state.view]?.() || null,
  };
}
