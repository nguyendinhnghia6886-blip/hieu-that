import assert from "node:assert/strict";
import { test } from "node:test";
import { createWorkspace } from "./dist/workspace.js";
import {
  emptyQuestion,
  parseQuestionText,
  encodeSharedAssignment,
} from "./dist/authoring.js";

const escapeHTML = (value = "") =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char],
  );

function element(properties = {}) {
  return {
    id: "",
    name: "",
    value: "",
    tagName: "INPUT",
    dataset: {},
    checked: false,
    focus() {},
    scrollIntoView() {},
    ...properties,
    matches(selector) {
      return selector.split(",").some((part) => {
        const match = part.match(
          /^(input|textarea)?\[data-(q|option|answer|response)\]$/,
        );
        return (
          match &&
          (!match[1] || this.tagName.toLowerCase() === match[1]) &&
          match[2] in this.dataset
        );
      });
    },
  };
}

// Only the selectors and events used by workspace are stubbed. Rendering drops
// DOM controls, so tests cannot accidentally preserve values in old elements.
function harness(t, saved = {}, role = "teacher") {
  const listeners = new Map();
  let controls = [],
    workspace;
  const h = {
    data: {
      assignments: structuredClone(saved.assignments || []),
      approved: [],
    },
    state: { role, view: "questions", mobile: false, presentation: false },
    html: "",
    persisted: null,
    messages: [],
    mount(...elements) {
      controls = elements;
    },
    async emit(type, target) {
      for (const listener of listeners.get(type) || [])
        await listener({ target });
    },
    render() {
      h.html = workspace?.view() || "";
      controls = [];
    },
    handle(action, dataset = {}) {
      return workspace.handle(action, { dataset });
    },
  };
  const documentStub = {
    querySelector(selector) {
      if (selector.startsWith("#"))
        return (
          controls.find((control) => control.id === selector.slice(1)) || null
        );
      return this.querySelectorAll(selector)[0] || null;
    },
    querySelectorAll(selector) {
      if (selector === '[name="pick-question"]:checked')
        return controls.filter(
          (control) => control.name === "pick-question" && control.checked,
        );
      if (selector === "[data-answer]:checked")
        return controls.filter(
          (control) => "answer" in control.dataset && control.checked,
        );
      return controls.filter((control) => control.matches(selector));
    },
    addEventListener(type, listener) {
      if (!listeners.has(type)) listeners.set(type, []);
      listeners.get(type).push(listener);
    },
  };
  const windowStub = { scrollTo() {}, addEventListener() {} };
  for (const [key, value] of Object.entries({
    document: documentStub,
    window: windowStub,
  })) {
    const previous = Object.getOwnPropertyDescriptor(globalThis, key);
    Object.defineProperty(globalThis, key, {
      configurable: true,
      writable: true,
      value,
    });
    t.after(() =>
      previous
        ? Object.defineProperty(globalThis, key, previous)
        : delete globalThis[key],
    );
  }
  workspace = createWorkspace({
    data: h.data,
    saved: structuredClone(saved),
    state: h.state,
    esc: escapeHTML,
    button: (label, action, css, extra = "") =>
      `<button data-action="${action}" ${extra}>${label}</button>`,
    icon: () => "",
    pageHeading: (_, title) => `<h1>${title}</h1>`,
    render: h.render,
    persist: () => {
      h.persisted = structuredClone(h.data);
    },
    toast: (message) => h.messages.push(message),
    openModal() {},
    closeModal() {},
    questionBank: [],
    lessons: [],
    getPractice: () => null,
    activeQuestion: () => null,
  });
  h.window = windowStub;
  h.render();
  return h;
}

function editPrompt(h, text) {
  const prompt = element({
    tagName: "TEXTAREA",
    dataset: { q: "prompt" },
    value: text,
  });
  h.mount(element({ id: "review-confirm" }), prompt);
  return h.emit("input", prompt);
}

function question(id, prompt, overrides = {}) {
  return {
    ...emptyQuestion(),
    id,
    prompt,
    type: "written",
    explanation: "Giải thích tham khảo.",
    status: "approved",
    ...overrides,
  };
}

function deferred() {
  let resolve;
  const promise = new Promise((complete) => {
    resolve = complete;
  });
  return { promise, resolve };
}

function imageEnvironment(t) {
  const revoked = [];
  const previous = Object.getOwnPropertyDescriptor(
    globalThis,
    "createImageBitmap",
  );
  Object.defineProperty(globalThis, "createImageBitmap", {
    configurable: true,
    writable: true,
    value: async () => ({ width: 100, height: 100, close() {} }),
  });
  t.after(() =>
    previous
      ? Object.defineProperty(globalThis, "createImageBitmap", previous)
      : delete globalThis.createImageBitmap,
  );
  t.mock.method(URL, "createObjectURL", () => "blob:test-source");
  t.mock.method(URL, "revokeObjectURL", (url) => revoked.push(url));
  return {
    revoked,
    file: { type: "image/png", size: 200, name: "de-bai.png" },
  };
}

test("an autosaved new question survives opening and editing an existing question", async (t) => {
  const existing = question("existing", "Câu hỏi trong kho.");
  const h = harness(t, { customQuestions: [existing] });
  await h.handle("new-question");
  await editPrompt(h, "Câu mới chưa lưu vào kho.");
  await h.handle("edit-question", { id: existing.id });
  assert.match(h.html, /Câu hỏi trong kho\./);
  await editPrompt(h, "Bản sửa chưa lưu của câu trong kho.");
  await h.handle("new-question");
  assert.match(h.html, /Câu mới chưa lưu vào kho\./);
  assert.equal(
    h.persisted.questionDrafts.new.prompt,
    "Câu mới chưa lưu vào kho.",
  );
  assert.equal(
    h.persisted.questionDrafts.existing.prompt,
    "Bản sửa chưa lưu của câu trong kho.",
  );
  assert.equal(h.data.customQuestions[0].prompt, existing.prompt);
  await h.handle("edit-question", { id: existing.id });
  assert.match(h.html, /Bản sửa chưa lưu của câu trong kho\./);
});

test("assignment fields and selected questions survive render and a trip to the editor", async (t) => {
  const h = harness(t, {
    customQuestions: [
      question("selected", "Câu đã chọn."),
      question("other", "Câu khác."),
    ],
  });
  await h.handle("assign");
  for (const [id, value] of [
    ["assignment-title", 'Bài <ôn> & "luyện"'],
    ["assignment-due", "2026-11-01"],
    ["assignment-instructions", "Viết cách làm.\nKiểm tra lại kết quả."],
  ])
    await h.emit("input", element({ id, value }));
  const selected = element({
    name: "pick-question",
    value: "selected",
    checked: true,
  });
  h.mount(selected, element({ name: "pick-question", value: "other" }));
  await h.emit("change", selected);
  h.state.mobile = true;
  h.render();
  await h.handle("new-question");
  await h.handle("assign");
  assert.match(h.html, /value="Bài &lt;ôn&gt; &amp; &quot;luyện&quot;"/);
  assert.match(h.html, /value="2026-11-01"/);
  assert.match(h.html, /Viết cách làm\.\nKiểm tra lại kết quả\./);
  assert.match(h.html, /name="pick-question" value="selected" checked/);
  assert.doesNotMatch(h.html, /name="pick-question" value="other" checked/);
  assert.deepEqual(h.persisted.assignmentDraft.selected, ["selected"]);
  assert.equal(h.persisted.assignmentDraft.title, 'Bài <ôn> & "luyện"');
});

test("answer drafts remain separate across assignments and submitting one preserves the other", async (t) => {
  const sharedQuestion = question("shared-question", "Trình bày cách làm.");
  const assignments = ["first", "second"].map((id) => ({
    id,
    title: id,
    questions: [sharedQuestion],
  }));
  const h = harness(t, { assignments }, "student");
  for (const [id, value] of [
    ["first", "Bài làm thứ nhất."],
    ["second", "Bài làm thứ hai."],
  ]) {
    await h.handle("start-assignment", { id });
    await h.emit(
      "input",
      element({
        tagName: "TEXTAREA",
        dataset: { response: sharedQuestion.id },
        value,
      }),
    );
  }
  await h.handle("start-assignment", { id: "first" });
  assert.match(h.html, /Bài làm thứ nhất\./);
  assert.doesNotMatch(h.html, /Bài làm thứ hai\./);
  await h.handle("submit-assignment");
  assert.equal(h.data.assignmentSubmissions.length, 1);
  assert.equal(
    h.data.assignmentSubmissions[0].answers[0].response,
    "Bài làm thứ nhất.",
  );
  assert.equal(h.data.taskDrafts.first, undefined);
  assert.equal(
    h.persisted.taskDrafts.second[sharedQuestion.id],
    "Bài làm thứ hai.",
  );
  await h.handle("start-assignment", { id: "second" });
  assert.match(h.html, /Bài làm thứ hai\./);
});

test("reset clears import text and image and rejects a late OCR result", async (t) => {
  const h = harness(t);
  const { revoked, file } = imageEnvironment(t);
  const recognition = deferred(),
    started = deferred();
  let terminations = 0;
  h.window.Tesseract = {
    createWorker: async () => ({
      recognize() {
        started.resolve();
        return recognition.promise;
      },
      async terminate() {
        terminations++;
      },
    }),
  };
  await h.handle("open-import", { mode: "photo" });
  await h.emit(
    "input",
    element({ id: "import-text", value: "Nội dung cũ cần xóa." }),
  );
  await h.emit("input", element({ id: "import-topic", value: "Chủ đề cũ" }));
  await h.emit("change", element({ id: "source-image", files: [file] }));
  assert.match(h.html, /blob:test-source/);
  const scan = h.handle("scan-image");
  await started.promise;
  assert.match(h.html, /id="import-text"[^>]*readonly/);
  assert.equal(
    await h.handle("reset"),
    false,
    "the main app must also reset its own data",
  );
  h.render();
  recognition.resolve({ data: { text: "Kết quả OCR đến sau khi xóa." } });
  await scan;
  h.render();
  assert.ok(terminations >= 1);
  assert.deepEqual(revoked, ["blob:test-source"]);
  assert.doesNotMatch(
    h.html,
    /Nội dung cũ|Chủ đề cũ|Kết quả OCR đến sau|blob:test-source|de-bai\.png/,
  );
  assert.match(h.html, /id="import-topic" value="Toán 10"/);
  assert.match(h.html, /data-action="scan-image" disabled/);
  assert.doesNotMatch(h.html, /id="import-text"[^>]*readonly/);
});

test("reset prevents an image still decoding from reappearing", async (t) => {
  const h = harness(t);
  const { file } = imageEnvironment(t);
  const decoding = deferred();
  globalThis.createImageBitmap = () => decoding.promise;
  await h.handle("open-import", { mode: "photo" });
  await h.emit("change", element({ id: "source-image", files: [file] }));
  await h.handle("reset");
  decoding.resolve({ width: 100, height: 100, close() {} });
  await Promise.resolve();
  h.render();
  assert.doesNotMatch(h.html, /blob:test-source|de-bai\.png/);
  assert.match(h.html, /data-action="scan-image" disabled/);
});

test("imported multiline solutions stay outside the prompt without selecting an answer", () => {
  const parsed = parseQuestionText(`Câu 1: Giá trị của sin 30°?
A. 1/2 B. 1 C. 0 D. -1/2
Đáp án: A
Lời giải:
sin 30° = 1/2.
Đây là một góc đặc biệt.
Câu 2: Giải thích dấu của cos 120°.
Solution: Góc nằm ở góc phần tư II.
Hoành độ của điểm trên đường tròn âm.`);
  assert.equal(parsed.length, 2);
  assert.equal(parsed[0].prompt, "Giá trị của sin 30°?");
  assert.deepEqual(parsed[0].options, ["1/2", "1", "0", "-1/2"]);
  assert.equal(
    parsed[0].explanation,
    "sin 30° = 1/2.\nĐây là một góc đặc biệt.",
  );
  assert.equal(parsed[0].answer, null);
  assert.equal(parsed[1].prompt, "Giải thích dấu của cos 120°.");
  assert.equal(
    parsed[1].explanation,
    "Góc nằm ở góc phần tư II.\nHoành độ của điểm trên đường tròn âm.",
  );
  assert.ok(parsed.every((item) => item.status === "draft"));
});

test("shared assignment URL parameter imports assignment and opens student task view", (t) => {
  const shared = {
    id: "shared-1",
    title: "Bài tập chia sẻ qua URL",
    due: "2026-12-01",
    instructions: "Làm đầy đủ các bước.",
    teacherCode: "GV-TEST1234",
    questions: [question("q-shared", "Chứng minh sin²α + cos²α = 1.")],
  };
  const token = encodeSharedAssignment(shared);
  const prevLocation = Object.getOwnPropertyDescriptor(globalThis, "location");
  Object.defineProperty(globalThis, "location", {
    configurable: true,
    writable: true,
    value: {
      origin: "https://hieu-that.vercel.app",
      pathname: "/",
      search: `?shared=${token}`,
      hash: "",
    },
  });
  t.after(() =>
    prevLocation
      ? Object.defineProperty(globalThis, "location", prevLocation)
      : delete globalThis.location,
  );

  const h = harness(t, {}, "teacher");
  assert.equal(h.state.role, "student");
  assert.equal(h.state.view, "task");
  assert.equal(h.data.assignments.length, 1);
  assert.equal(h.data.assignments[0].title, "Bài tập chia sẻ qua URL");
  assert.match(h.html, /Chứng minh sin²α \+ cos²α = 1\./);
  assert.ok(
    h.messages.some((m) =>
      m.includes("Đã nhận bài tập được chia sẻ từ giáo viên."),
    ),
  );
});
