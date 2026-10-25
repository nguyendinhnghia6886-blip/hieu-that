// Pure helpers shared by the editor and verification checks.
export function emptyQuestion() {
  return {
    id: "",
    topic: "Toán 10",
    type: "choice",
    prompt: "",
    options: ["", "", "", ""],
    answer: null,
    explanation: "",
    hint: "",
    status: "draft",
  };
}

export function validateQuestion(q, publish = false) {
  if (!q.prompt?.trim()) return "Hãy nhập nội dung câu hỏi.";
  if (q.prompt.length > 5000) return "Nội dung câu hỏi tối đa 5.000 ký tự.";
  if (!q.topic?.trim()) return "Hãy nhập chủ đề.";
  if (!["choice", "written"].includes(q.type))
    return "Hãy chọn loại câu hỏi hợp lệ.";
  if (publish && q.type === "choice") {
    if (q.options.length !== 4 || q.options.some((o) => !o.trim()))
      return "Cần đủ 4 lựa chọn trước khi duyệt.";
    if (
      new Set(q.options.map((o) => o.trim().toLocaleLowerCase("vi"))).size !== 4
    )
      return "Các lựa chọn không được trùng nhau.";
    if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3)
      return "Hãy chọn đáp án đúng; hệ thống không tự đoán đáp án.";
  }
  if (publish && !q.explanation?.trim())
    return q.type === "written"
      ? "Hãy thêm hướng dẫn chấm hoặc câu trả lời tham khảo."
      : "Hãy thêm lời giải để học sinh xem lại sau khi nộp bài.";
  return "";
}

export function parseQuestionText(source) {
  const text = source.trim().slice(0, 40000).replace(/\r/g, "");
  if (!text) return [];
  const chunks = text
    .split(/(?:^|\n)\s*(?:Câu|Question)\s+\d+\s*[.:)\-]\s*/i)
    .filter((s) => s.trim());
  if (chunks.length > 30)
    throw new Error(
      "Mỗi lần tối đa 30 câu. Hãy chia đề thành các phần nhỏ; nội dung của bạn vẫn được giữ lại.",
    );
  return chunks
    .map((chunk) => {
      const lines = chunk.replace(/\s+([A-D])[.)]\s+/g, "\n$1. ").split("\n");
      const q = emptyQuestion();
      const prompt = [],
        options = ["", "", "", ""];
      let current = -1,
        inSolution = false;
      const solution = [];
      for (const raw of lines) {
        const line = raw.trim();
        const match = line.match(/^([A-D])[.)]\s*(.*)$/);
        // Never infer an answer key from OCR: a teacher must select it explicitly.
        const solutionStart = line.match(/^(?:Lời giải|Solution)\s*:\s*(.*)$/i);
        if (solutionStart) {
          inSolution = true;
          current = -1;
          if (solutionStart[1]) solution.push(solutionStart[1]);
          continue;
        }
        if (/^(Đáp án|Answer)\s*:/i.test(line)) {
          current = -1;
          continue;
        }
        if (inSolution) {
          solution.push(line);
          continue;
        }
        if (match) {
          current = match[1].charCodeAt(0) - 65;
          options[current] = match[2];
        } else if (current >= 0)
          options[current] += (options[current] ? " " : "") + line;
        else prompt.push(line);
      }
      q.prompt = prompt.join("\n").trim();
      q.options = options;
      q.explanation = solution.join("\n").trim();
      q.type = options.some(Boolean) ? "choice" : "written";
      q.source = "import";
      return q;
    })
    .filter((q) => q.prompt);
}

export function normalizeTeacherCode(value) {
  return String(value || "")
    .trim()
    .toUpperCase()
    .replace(/\s/g, "");
}

export function assessAnswers(questions, responses) {
  return questions.map((q) => ({
    questionId: q.id,
    prompt: q.prompt,
    type: q.type,
    response: responses[q.id] ?? (q.type === "written" ? "" : null),
    correct: q.type === "written" ? null : responses[q.id] === q.answer,
    expected: q.type === "choice" ? q.options[q.answer] : q.explanation,
    explanation: q.explanation,
  }));
}

export function tutorReply(q, message, turn = 0) {
  const text = message
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");
  const hints = (q.hints || [q.hint]).filter(Boolean);
  if (/(dap an|loi giai|giai day du)/.test(text))
    return {
      supported: true,
      text:
        q.explanation ||
        "Câu này chưa có lời giải. Hãy ghi lại cách làm để trao đổi với giáo viên.",
    };
  if (
    /(goi y|tiep|bat dau|khong hieu|buoc|cong thuc|dau|vi sao|tai sao)/.test(
      text,
    )
  ) {
    return {
      supported: true,
      text:
        hints[Math.min(turn, hints.length - 1)] ||
        "Hãy ghi ra điều đề đã cho và đại lượng cần tìm. Với câu tự luận, em có thể nêu một cách tiếp cận trước; giáo viên sẽ đọc bài làm của em.",
    };
  }
  return {
    supported: false,
    text: "Mình đã nhận câu hỏi của bạn. Chat hiện chỉ có gợi ý được soạn cho bài này, chưa có AI để trả lời câu hỏi tự do. Bạn có thể hỏi “Gợi ý bước đầu”, “Bước tiếp theo” hoặc “Xem lời giải”, và ghi câu hỏi riêng để trao đổi với giáo viên.",
  };
}

function toBase64Url(str) {
  const bytes = new TextEncoder().encode(str);
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  const b64 =
    typeof btoa === "function"
      ? btoa(bin)
      : Buffer.from(bytes).toString("base64");
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(token) {
  const clean = String(token || "")
    .trim()
    .replace(/-/g, "+")
    .replace(/_/g, "/");
  if (!clean || /[^A-Za-z0-9+/=]/.test(clean))
    throw new Error("Mã chia sẻ bài tập không đúng định dạng.");
  const padded = clean + "=".repeat((4 - (clean.length % 4)) % 4);
  const bin =
    typeof atob === "function"
      ? atob(padded)
      : Buffer.from(padded, "base64").toString("binary");
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
}

export function encodeSharedAssignment(assignment) {
  if (!assignment || typeof assignment !== "object")
    throw new Error("Dữ liệu bài tập không hợp lệ.");
  const title = String(assignment.title || "")
    .trim()
    .slice(0, 160);
  if (!title) throw new Error("Bài tập cần có tiêu đề trước khi chia sẻ.");
  if (
    !Array.isArray(assignment.questions) ||
    assignment.questions.length < 1 ||
    assignment.questions.length > 30
  ) {
    throw new Error("Bài tập chia sẻ cần có từ 1 đến 30 câu hỏi.");
  }
  const questions = assignment.questions.map((q, idx) => {
    const item = {
      id: String(q.id || `q-${idx + 1}`).slice(0, 80),
      type: q.type === "written" ? "written" : "choice",
      topic: String(q.topic || "Toán 10")
        .trim()
        .slice(0, 120),
      prompt: String(q.prompt || "")
        .trim()
        .slice(0, 5000),
      options:
        q.type === "written"
          ? ["", "", "", ""]
          : Array.isArray(q.options)
            ? q.options.slice(0, 4).map((o) =>
                String(o || "")
                  .trim()
                  .slice(0, 1000),
              )
            : ["", "", "", ""],
      answer:
        q.type === "written"
          ? null
          : Number.isInteger(q.answer)
            ? q.answer
            : null,
      explanation: String(q.explanation || "")
        .trim()
        .slice(0, 5000),
      hint: String(q.hint || q.hints?.[0] || "")
        .trim()
        .slice(0, 1000),
    };
    const err = validateQuestion(item, true);
    if (err) throw new Error(err);
    return item;
  });
  const payload = {
    id: String(assignment.id || `shared-${Date.now()}`).slice(0, 80),
    title,
    due: String(assignment.due || "").slice(0, 40),
    instructions: String(assignment.instructions || "")
      .trim()
      .slice(0, 2000),
    teacherCode: normalizeTeacherCode(assignment.teacherCode).slice(0, 20),
    questions,
  };
  const json = JSON.stringify(payload);
  if (json.length > 30000)
    throw new Error("Nội dung bài tập quá dài để chia sẻ qua liên kết.");
  return toBase64Url(json);
}

export function decodeSharedAssignment(token) {
  if (typeof token !== "string" || !token.trim() || token.length > 50000) {
    throw new Error("Liên kết bài tập không hợp lệ hoặc bị trống.");
  }
  let parsed;
  try {
    parsed = JSON.parse(fromBase64Url(token));
  } catch {
    throw new Error("Không thể giải mã liên kết bài tập.");
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error("Cấu trúc bài tập không hợp lệ.");
  }
  const title = String(parsed.title || "")
    .trim()
    .slice(0, 160);
  if (!title) throw new Error("Bài tập thiếu tiêu đề.");
  if (
    !Array.isArray(parsed.questions) ||
    parsed.questions.length < 1 ||
    parsed.questions.length > 30
  ) {
    throw new Error("Số lượng câu hỏi trong bài tập không hợp lệ (1–30 câu).");
  }
  const questions = parsed.questions.map((raw, idx) => {
    if (!raw || typeof raw !== "object")
      throw new Error(`Câu hỏi số ${idx + 1} không hợp lệ.`);
    const q = {
      id: String(raw.id || `q-${idx + 1}`).slice(0, 80),
      type:
        raw.type === "written"
          ? "written"
          : raw.type === "choice"
            ? "choice"
            : "",
      topic: String(raw.topic || "Toán 10")
        .trim()
        .slice(0, 120),
      prompt: String(raw.prompt || "")
        .trim()
        .slice(0, 5000),
      options:
        raw.type === "written"
          ? ["", "", "", ""]
          : Array.isArray(raw.options)
            ? raw.options.slice(0, 4).map((o) =>
                String(o || "")
                  .trim()
                  .slice(0, 1000),
              )
            : [],
      answer: raw.type === "written" ? null : raw.answer,
      explanation: String(raw.explanation || "")
        .trim()
        .slice(0, 5000),
      hint: String(raw.hint || "")
        .trim()
        .slice(0, 1000),
      status: "approved",
    };
    const err = validateQuestion(q, true);
    if (err) throw new Error(`Câu ${idx + 1}: ${err}`);
    return q;
  });
  return {
    id: String(parsed.id || `shared-${title.length}-${questions.length}`).slice(
      0,
      80,
    ),
    title,
    due: String(parsed.due || "").slice(0, 40),
    instructions: String(parsed.instructions || "")
      .trim()
      .slice(0, 2000),
    teacherCode: normalizeTeacherCode(parsed.teacherCode).slice(0, 20),
    questions,
    time: Date.now(),
  };
}
