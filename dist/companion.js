import {
  companionReply,
  restoreConversation,
  recordCompanionHelp,
  studentPrompts,
  teacherPrompts,
} from "./companion-replies.js";

const mascot = `<svg class="companion-mascot" viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M10 15c8-4 15-3 22 2 7-5 14-6 22-2v34c-9-3-16-2-22 3-6-5-13-6-22-3Z" fill="#d8edce" stroke="#146b50" stroke-width="2.8" stroke-linejoin="round"/><path d="M32 18v33" stroke="#146b50" stroke-width="2"/><path d="M8 21 5 23v27c10-3 18-1 27 5 9-6 17-8 27-5V23l-3-2" stroke="#146b50" stroke-width="2.4" stroke-linecap="round"/><g class="companion-eye" fill="#146b50"><ellipse cx="23" cy="29" rx="2.4" ry="3.2"/><ellipse cx="42" cy="29" rx="2.4" ry="3.2"/></g><path d="M26 37q6 7 12 0" stroke="#146b50" stroke-width="2.4" stroke-linecap="round"/><circle cx="18" cy="35" r="3" fill="#e6b787"/><circle cx="47" cy="35" r="3" fill="#e6b787"/><path d="m45 10 2-4m4 7 4-1" stroke="#b38d44" stroke-width="2.2" stroke-linecap="round"/></svg>`;
const closeIcon =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 12h14"/></svg>';
const newIcon =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>';
const sendIcon =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m5 11 7-7 7 7M12 4v16"/></svg>';

export function createCompanion({
  data,
  saved,
  persist,
  esc,
  getContext,
  getPractice,
  ai = null,
}) {
  const root = document.getElementById("companion-root");
  data.companion = restoreConversation(saved.companion);
  let open = false;
  let pending = null;
  function cancelAI() {
    if (pending) {
      pending.controller.abort();
      pending = null;
      ai.state("Đã dừng. Tin đang soạn được giữ lại.");
    }
  }
  const historySeen = new WeakSet();
  root.innerHTML = `<button type="button" class="companion-launcher" aria-label="Mở trò chuyện với Bạn Hiểu" aria-expanded="false" aria-controls="companion-panel">${mascot}<span class="companion-launcher-label">Bạn Hiểu<small>Hỏi một chút</small></span></button>
    <section id="companion-panel" class="companion-panel" role="region" aria-labelledby="companion-title" hidden>
      <header class="companion-header">${mascot}<div><h2 id="companion-title">Bạn Hiểu</h2><p>Cùng bạn, hiểu từng chút.</p></div><div class="companion-header-actions"><button type="button" class="companion-icon-button" data-companion="new" aria-label="Bắt đầu cuộc trò chuyện mới" title="Cuộc trò chuyện mới">${newIcon}</button><button type="button" class="companion-icon-button" data-companion="close" aria-label="Thu gọn Bạn Hiểu" title="Thu gọn">${closeIcon}</button></div></header>
      <div class="companion-context"></div><p class="companion-status">Nội dung soạn sẵn · AI chưa kết nối</p>
      <div class="companion-log" role="log" aria-live="polite" aria-relevant="additions" aria-label="Cuộc trò chuyện với Bạn Hiểu" tabindex="0"></div>
      <div class="companion-suggestions" aria-label="Câu hỏi gợi ý"></div>
      <form class="companion-composer"><label class="screen-reader-only" for="companion-input">Nhắn cho Bạn Hiểu</label><textarea id="companion-input" rows="2" maxlength="1000" placeholder="Bạn đang vướng ở đâu?" aria-describedby="companion-note"></textarea><button type="submit" class="companion-send" aria-label="Gửi tin nhắn">${sendIcon}</button></form>
      <p id="companion-note" class="companion-footnote">Lưu trên trình duyệt này · Enter gửi, Shift + Enter xuống dòng.<br>Gợi ý được ghi nhận cùng phiên luyện đang làm.</p>
    </section>`;
  const $ = (selector) => root.querySelector(selector);
  const launcher = $(".companion-launcher"),
    panel = $(".companion-panel"),
    input = $("#companion-input"),
    log = $(".companion-log");
  input.value = data.companion.draft;
  function welcome() {
    const teacher = getContext().role === "teacher";
    return `<div class="companion-welcome"><h3>${teacher ? "Cùng chuẩn bị một bài học." : "Chỗ nào khó, mình cùng gỡ."}</h3><p>${teacher ? "Mình giúp thầy cô tìm cách soạn câu hỏi, nhập đề và giao bài." : "Mình ở đây khi bạn cần một ví dụ hoặc gợi ý nhỏ. Cứ thử nghĩ trước nhé."}</p></div>`;
  }
  function messageHTML(m) {
    return `<div class="companion-message ${m.role}"><small class="companion-message-context">${m.role === "user" ? "Bạn" : "Bạn Hiểu"}${m.context ? " · " + esc(m.context) : ""}</small><p>${esc(m.text)}</p></div>`;
  }
  function drawHistory() {
    log.innerHTML =
      welcome() + data.companion.messages.map(messageHTML).join("");
    log.scrollTop = log.scrollHeight;
  }
  function markVisibleHistory() {
    const practice = getPractice();
    if (!open || root.hidden || !practice || historySeen.has(practice)) return;
    if (data.companion.messages.some((m) => m.learningHelp)) {
      recordCompanionHelp(practice, { learningHelp: true });
      historySeen.add(practice);
    }
  }
  function setOpen(value) {
    open = value;
    panel.hidden = !open;
    root.dataset.open = String(open);
    launcher.setAttribute("aria-expanded", String(open));
    launcher.setAttribute(
      "aria-label",
      open ? "Thu gọn Bạn Hiểu" : "Mở trò chuyện với Bạn Hiểu",
    );
    if (open) {
      sync();
      markVisibleHistory();
      input.focus({ preventScroll: true });
      log.scrollTop = log.scrollHeight;
    } else launcher.focus({ preventScroll: true });
  }
  function sync() {
    const context = getContext();
    if (
      pending &&
      (pending.practice !== getPractice() ||
        pending.key !== contextKey(context))
    )
      cancelAI();
    root.hidden = Boolean(context.obscured);
    root.inert = Boolean(context.obscured);
    $(".companion-context").textContent = context.label;
    const prompts =
      context.role === "teacher" ? teacherPrompts : studentPrompts;
    const suggestions = $(".companion-suggestions");
    const key = context.role === "teacher" ? "teacher" : "student";
    if (suggestions.dataset.role !== key) {
      suggestions.dataset.role = key;
      suggestions.innerHTML = prompts
        .map(
          (t) =>
            `<button type="button" data-companion-prompt="${esc(t)}">${esc(t)}</button>`,
        )
        .join("");
    }
    if (!data.companion.messages.length) log.innerHTML = welcome();
    markVisibleHistory();
  }
  function send(message) {
    const text = String(message ?? input.value)
      .trim()
      .slice(0, 1000);
    if (!text) return;
    if (pending) return;
    if (ai?.enabled()) {
      sendAI(text);
      return;
    }
    const context = getContext(),
      practice = getPractice();
    const question = context.question;
    const turn = question ? practice?.chats?.[question.prompt]?.hints || 0 : 0;
    const reply = companionReply(context, text, turn);
    if (recordCompanionHelp(practice, reply, question))
      historySeen.add(practice);
    const pair = [
      { role: "user", text, context: context.label, learningHelp: false },
      {
        role: "assistant",
        text: reply.text,
        context: context.label,
        learningHelp: reply.learningHelp,
      },
    ];
    data.companion.messages.push(...pair);
    data.companion.draft = "";
    input.value = "";
    if (data.companion.messages.length > 80) {
      data.companion.messages = data.companion.messages.slice(-80);
      drawHistory();
    } else log.insertAdjacentHTML("beforeend", pair.map(messageHTML).join(""));
    persist();
    log.scrollTop = log.scrollHeight;
    input.focus({ preventScroll: true });
  }
  function reset() {
    cancelAI();
    data.companion = { messages: [], draft: "" };
    input.value = "";
    drawHistory();
    open = false;
    panel.hidden = true;
    root.dataset.open = "false";
    launcher.setAttribute("aria-expanded", "false");
    launcher.setAttribute("aria-label", "Mở trò chuyện với Bạn Hiểu");
  }
  launcher.addEventListener("click", () => setOpen(!open));
  root.addEventListener("click", (event) => {
    const action = event.target.closest("[data-companion]")?.dataset.companion;
    if (action === "close") setOpen(false);
    if (action === "new") {
      cancelAI();
      data.companion = { messages: [], draft: "" };
      input.value = "";
      persist();
      drawHistory();
      input.focus({ preventScroll: true });
    }
    const prompt = event.target.closest("[data-companion-prompt]")?.dataset
      .companionPrompt;
    if (prompt) send(prompt);
  });
  $(".companion-composer").addEventListener("submit", (event) => {
    event.preventDefault();
    send();
  });
  input.addEventListener("input", () => {
    data.companion.draft = input.value;
    persist();
  });
  root.addEventListener("keydown", (event) => {
    // Keep page-level presentation shortcuts away from this independent panel.
    event.stopPropagation();
    if (event.key === "Escape" && open) {
      event.preventDefault();
      setOpen(false);
    }
    if (
      event.target === input &&
      event.key === "Enter" &&
      !event.shiftKey &&
      !event.isComposing
    ) {
      event.preventDefault();
      send();
    }
  });
  function viewport() {
    const v = window.visualViewport;
    const height = v?.height || window.innerHeight;
    const bottom = v
      ? Math.max(0, window.innerHeight - v.height - v.offsetTop)
      : 0;
    root.style.setProperty("--companion-height", height + "px");
    root.style.setProperty("--companion-bottom", bottom + "px");
    root.dataset.compact = String(height < 540);
  }
  window.visualViewport?.addEventListener("resize", viewport);
  window.visualViewport?.addEventListener("scroll", viewport);
  window.addEventListener("resize", viewport);
  function contextKey(c) {
    return JSON.stringify([
      c.role,
      c.label,
      c.question?.prompt,
      getPractice()?.phase,
    ]);
  }
  async function sendAI(text) {
    const context = getContext(),
      practice = getPractice();
    const request = {
      controller: new AbortController(),
      practice,
      key: contextKey(context),
    };
    pending = request;
    input.value = text;
    data.companion.draft = text;
    persist();
    ai.state(
      "Ollama đang suy nghĩ… Lần đầu có thể cần tải model vào bộ nhớ.",
      true,
    );
    try {
      const reply = await ai.reply(
        context,
        text,
        data.companion.messages,
        request.controller.signal,
      );
      if (
        pending !== request ||
        request.key !== contextKey(getContext()) ||
        practice !== getPractice()
      )
        return;
      if (recordCompanionHelp(practice, reply)) historySeen.add(practice);
      data.companion.messages.push(
        { role: "user", text, context: context.label, learningHelp: false },
        {
          role: "assistant",
          text: reply.text,
          context: "Ollama · " + reply.model + " · " + context.label,
          learningHelp: true,
        },
      );
      data.companion.messages = data.companion.messages.slice(-80);
      if (input.value === text) {
        input.value = "";
        data.companion.draft = "";
      }
      persist();
      drawHistory();
      ai.state("Đã trả lời bằng Ollama. Hãy kiểm tra lại các bước tính.");
    } catch (e) {
      if (pending === request)
        ai.state(
          e.name === "AbortError"
            ? "Đã dừng. Tin nhắn được giữ lại."
            : (e.message || "Kết nối lỗi.") +
                " Tin nhắn vẫn còn, bấm Gửi để thử lại.",
        );
    } finally {
      if (pending === request) {
        pending = null;
        ai.state(root.querySelector(".ollama-state").textContent);
      }
    }
  }
  ai?.mount(root, cancelAI);
  drawHistory();
  sync();
  viewport();
  return { sync, reset };
}
