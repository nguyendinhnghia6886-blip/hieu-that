import assert from "node:assert/strict";
import { test } from "node:test";
import { createCompanion } from "./dist/companion.js";
import { lessons, questionBank } from "./dist/learning.js";

const esc = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
// A controller unit harness, not a browser: only consumed DOM methods are modeled.
function harness(t, saved = {}, ai = null) {
  const h = {
    data: {},
    saved: null,
    focused: null,
    practice: null,
    context: { role: "student", view: "home", label: "Tổng quan" },
  };
  function element() {
    const listeners = new Map();
    return {
      dataset: {},
      attributes: {},
      style: { setProperty() {} },
      innerHTML: "",
      value: "",
      hidden: false,
      addEventListener(type, listener) {
        listeners.set(type, listener);
      },
      setAttribute(name, value) {
        this.attributes[name] = value;
      },
      focus() {
        h.focused = this;
      },
      insertAdjacentHTML(_position, html) {
        this.innerHTML += html;
      },
      emit(type, supplied = {}) {
        const event = {
          target: this,
          preventDefault() {
            this.prevented = true;
          },
          stopPropagation() {
            this.stopped = true;
          },
          ...supplied,
        };
        listeners.get(type)?.(event);
        return event;
      },
    };
  }
  const selectors = [
    ".companion-launcher",
    ".companion-panel",
    "#companion-input",
    ".companion-log",
    ".companion-context",
    ".companion-suggestions",
    ".companion-composer",
    ".ollama-state",
  ];
  const elements = Object.fromEntries(
    selectors.map((selector) => [selector, element()]),
  );
  h.root = element();
  h.root.querySelector = (selector) => elements[selector];
  h.$ = (selector) => elements[selector];
  for (const [key, value] of Object.entries({
    document: { getElementById: () => h.root },
    window: { innerHeight: 800, addEventListener() {} },
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
  h.controller = createCompanion({
    data: h.data,
    saved,
    esc,
    ai,
    persist: () => {
      h.saved = structuredClone(h.data);
    },
    getContext: () => h.context,
    getPractice: () => h.practice,
  });
  h.action = (action) =>
    h.root.emit("click", {
      target: {
        closest: (selector) =>
          selector === "[data-companion]"
            ? { dataset: { companion: action } }
            : null,
      },
    });
  h.toggle = () => h.$(".companion-launcher").emit("click");
  return h;
}

test("draft and history survive context changes; new chat persists deletion and global reset closes it", (t) => {
  const h = harness(t, {
    companion: {
      draft: "Chưa gửi",
      messages: [{ role: "user", text: "Câu cũ" }],
    },
  });
  const input = h.$("#companion-input");
  assert.equal(input.value, "Chưa gửi");
  input.value = "Bản nháp mới";
  input.emit("input");
  assert.equal(h.saved.companion.draft, "Bản nháp mới");
  h.context = { role: "teacher", view: "questions", label: "Câu hỏi thêm" };
  h.controller.sync();
  assert.equal(input.value, "Bản nháp mới");
  assert.equal(h.data.companion.messages[0].text, "Câu cũ");
  assert.equal(h.$(".companion-context").textContent, "Câu hỏi thêm");
  assert.match(h.$(".companion-suggestions").innerHTML, /Soạn câu hỏi mới/);
  h.toggle();
  h.action("new");
  assert.deepEqual(h.saved.companion, { messages: [], draft: "" });
  assert.equal(h.$(".companion-panel").hidden, false);
  h.controller.reset();
  assert.equal(h.$(".companion-panel").hidden, true);
  assert.equal(h.$(".companion-launcher").attributes["aria-expanded"], "false");
  assert.deepEqual(h.data.companion, { messages: [], draft: "" });
});

test("viewing saved learning help counts once per active attempt and only when visible", (t) => {
  const h = harness(t, {
    companion: {
      messages: [{ role: "assistant", text: "Gợi ý cũ", learningHelp: true }],
    },
  });
  h.practice = { phase: "question", hints: 0 };
  h.controller.sync();
  assert.equal(h.practice.hints, 0);
  h.toggle();
  assert.equal(h.practice.hints, 1);
  h.controller.sync();
  h.toggle();
  h.toggle();
  assert.equal(h.practice.hints, 1);
  h.practice = { phase: "transfer", hints: 0 };
  h.context.obscured = true;
  h.controller.sync();
  assert.equal(h.practice.hints, 0);
  assert.equal(h.root.inert, true);
  h.context.obscured = false;
  h.controller.sync();
  assert.equal(h.practice.hints, 1);
  h.practice = { phase: "result", hints: 0 };
  h.controller.sync();
  assert.equal(h.practice.hints, 0);
});

test("IME and Shift Enter preserve drafts; Enter sends escaped text and Escape returns focus", (t) => {
  const h = harness(t),
    input = h.$("#companion-input");
  h.context = {
    role: "student",
    view: "practice",
    label: "Luyện tập",
    lesson: lessons[0],
    question: questionBank[0],
  };
  h.practice = { phase: "question", hints: 0 };
  h.toggle();
  input.value = "Gợi ý bước đầu";
  for (const modifiers of [{ isComposing: true }, { shiftKey: true }]) {
    const event = h.root.emit("keydown", {
      target: input,
      key: "Enter",
      ...modifiers,
    });
    assert.equal(event.prevented, undefined);
    assert.equal(event.stopped, true);
  }
  assert.equal(h.data.companion.messages.length, 0);
  h.root.emit("keydown", { target: input, key: "Enter" });
  assert.equal(h.saved.companion.messages.length, 2);
  assert.equal(input.value, "");
  assert.equal(h.practice.hints, 1);
  assert.equal(h.data.companion.messages[1].text, questionBank[0].hints[0]);
  input.value = "<script>alert(1)</script>";
  h.$(".companion-composer").emit("submit");
  assert.match(h.$(".companion-log").innerHTML, /&lt;script&gt;/);
  assert.doesNotMatch(h.$(".companion-log").innerHTML, /<script>/);
  const event = h.root.emit("keydown", { target: input, key: "Escape" });
  assert.equal(event.prevented, true);
  assert.equal(h.$(".companion-panel").hidden, true);
  assert.equal(h.focused, h.$(".companion-launcher"));
});

test("late AI reply after reset or navigation cannot restore chat or mark a new attempt", async (t) => {
  let resolve;
  const ai = {
    enabled: () => true,
    mount() {},
    state() {},
    reply: () => new Promise((r) => (resolve = r)),
  };
  const h = harness(t, {}, ai),
    input = h.$("#companion-input");
  h.practice = { phase: "base", hints: 0 };
  const first = h.practice;
  input.value = "Giúp mình";
  h.$(".companion-composer").emit("submit");
  h.controller.reset();
  h.practice = { phase: "base", hints: 0 };
  resolve({ text: "Phản hồi muộn", model: "test", learningHelp: true });
  await new Promise((r) => setImmediate(r));
  assert.equal(h.data.companion.messages.length, 0);
  assert.equal(first.hints, 0);
  assert.equal(h.practice.hints, 0);
  input.value = "Câu mới";
  h.$(".companion-composer").emit("submit");
  h.context = { ...h.context, label: "Trang khác" };
  h.controller.sync();
  resolve({ text: "Muộn sau điều hướng", model: "test", learningHelp: true });
  await new Promise((r) => setImmediate(r));
  assert.equal(h.data.companion.messages.length, 0);
});

test("AI success counts help once and failure preserves draft without fake reply", async (t) => {
  let fail = false;
  const ai = {
    enabled: () => true,
    mount() {},
    state() {},
    reply: async () => {
      if (fail) throw new Error("Offline");
      return {
        text: "Gợi ý thật từ adapter",
        model: "test",
        learningHelp: true,
      };
    },
  };
  const h = harness(t, {}, ai),
    input = h.$("#companion-input");
  h.practice = { phase: "base", hints: 0 };
  input.value = "Câu hỏi";
  h.$(".companion-composer").emit("submit");
  await new Promise((r) => setImmediate(r));
  assert.equal(h.practice.hints, 1);
  assert.equal(h.data.companion.messages.length, 2);
  assert.equal(input.value, "");
  fail = true;
  input.value = "Giữ tin này";
  h.$(".companion-composer").emit("submit");
  await new Promise((r) => setImmediate(r));
  assert.equal(input.value, "Giữ tin này");
  assert.equal(h.practice.hints, 1);
  assert.equal(h.data.companion.messages.length, 2);
});
