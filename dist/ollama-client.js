export function createOllamaClient() {
  let select, status, stop, check;
  const local = ["127.0.0.1", "localhost"].includes(location.hostname);
  return {
    enabled: () => Boolean(select?.value),
    mount(root, cancel) {
      root
        .querySelector(".companion-status")
        .insertAdjacentHTML(
          "afterend",
          `<details class="ollama-settings"><summary>Kết nối Ollama</summary><label>Chế độ trả lời<select class="ollama-model"><option value="">Gợi ý có sẵn</option></select></label><button type="button" class="ollama-check">Kiểm tra model trên máy</button><a href="./OLLAMA.md" target="_blank" rel="noopener">Hướng dẫn cài Ollama</a><p class="ollama-state" role="status">${local ? "Chưa kiểm tra kết nối." : "Ollama chỉ hoạt động khi chạy bản máy chủ cục bộ."}</p></details><button type="button" class="ollama-stop" hidden>Dừng trả lời</button>`,
        );
      select = root.querySelector(".ollama-model");
      status = root.querySelector(".ollama-state");
      stop = root.querySelector(".ollama-stop");
      check = root.querySelector(".ollama-check");
      check.disabled = !local;
      select.addEventListener("change", () => {
        cancel();
        root.querySelector(".companion-status").textContent = select.value
          ? "Ollama · " + select.value + " · AI có thể sai"
          : "Nội dung soạn sẵn · AI chưa kết nối";
      });
      stop.addEventListener("click", cancel);
      check.addEventListener("click", async () => {
        cancel();
        check.disabled = true;
        status.textContent = "Đang kiểm tra…";
        try {
          const r = await fetch("/api/ollama/models", {
            signal: AbortSignal.timeout(6000),
          });
          const b = await r.json();
          if (!r.ok) throw new Error(b.error);
          const previous = select.value;
          select.replaceChildren(
            new Option("Gợi ý có sẵn", ""),
            ...b.models.map((name) => new Option(name, name)),
          );
          select.value = b.models.includes(previous) ? previous : "";
          root.querySelector(".companion-status").textContent = select.value
            ? "Ollama · " + select.value + " · AI có thể sai"
            : "Nội dung soạn sẵn · AI chưa kết nối";
          status.textContent = b.models.length
            ? "Chọn model để bật AI. Tin nhắn và ngữ cảnh bài học được gửi tới Ollama trên máy này."
            : "Ollama đã mở nhưng chưa có model cục bộ. Xem hướng dẫn để tải model.";
        } catch (e) {
          status.textContent = e.message?.startsWith("Chưa kết nối")
            ? e.message
            : "Chưa kết nối được. Hãy mở Ollama và chạy website bằng npm start.";
        } finally {
          check.disabled = !local;
        }
      });
    },
    state(message, busy = false) {
      if (status) status.textContent = message;
      if (stop) stop.hidden = !busy;
      if (select) select.disabled = busy;
      if (check) check.disabled = busy || !local;
    },
    async reply(context, text, history, signal) {
      const model = select.value;
      const r = await fetch("/api/ollama/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal,
        body: JSON.stringify({
          model,
          message: text,
          history: history
            .slice(-8)
            .map((m) => ({ role: m.role, text: m.text.slice(0, 1500) })),
          context: {
            role: context.role,
            label: context.label,
            lesson: context.lesson?.shortTitle,
            slide: context.slide?.body,
            question: context.question?.prompt,
          },
        }),
      });
      const body = await r.json();
      if (!r.ok) throw new Error(body.error || "Chưa nhận được phản hồi.");
      if (
        body.mode !== "ollama" ||
        typeof body.reply !== "string" ||
        !body.reply.trim()
      )
        throw new Error("Phản hồi không hợp lệ.");
      return { text: body.reply, model, learningHelp: true };
    },
  };
}
