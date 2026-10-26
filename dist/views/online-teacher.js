import { esc } from "../ui/dom.js";
import { icon } from "../ui/icons.js";
import { formatDate, formatScore } from "./online-student.js";

const letters = ["A", "B", "C", "D"];

const field = (label, html) =>
  `<label class="field"><span>${label}</span>${html}</label>`;
const onlineBtn = (label, action, extra = "", type = "secondary") =>
  `<button type="button" class="button ${type}" data-online="${action}" ${extra}>${label}</button>`;

export function teacherOverview(ctx) {
  const { snapshot } = ctx;
  const profile = snapshot.profile;
  const questions = snapshot.questions || [];
  const approvedCount = questions.filter(
    (q) => q.content.status === "approved",
  ).length;
  const assignments = snapshot.assignments || [];
  const submissions = snapshot.submissions || [];
  const members = snapshot.members || [];
  const pendingSubmissions = submissions.filter(
    (s) => s.score === null || s.pending > 0,
  );

  return `<div class="welcome-row">
    <div>
      <div class="eyebrow">KHÔNG GIAN GIẢNG DẠY · GIÁO VIÊN</div>
      <h1>Xin chào ${esc(profile.name)}</h1>
      <p class="muted">Soạn câu hỏi, giao bài tập và chấm điểm cho các học sinh kết nối bằng mã giáo viên của bạn.</p>
    </div>
    <div class="online-actions">
      ${onlineBtn(`${icon("pen")} Soạn câu hỏi`, "new", "", "primary")}
      ${onlineBtn(`${icon("calendar")} Giao bài mới`, "publish", "", "secondary")}
    </div>
  </div>

  <section class="card online-summary teacher-code-banner">
    <div>
      <span class="eyebrow">MÃ KẾT NỐI CỦA BẠN</span>
      <h2>Mã giáo viên: <strong class="teacher-code-text">${esc(profile.code)}</strong></h2>
      <p class="muted">Gửi mã này cho học sinh để các em nhập trong mục “Giáo viên của tôi” và nhận bài bạn giao.</p>
    </div>
    <div class="online-actions">
      ${onlineBtn("Sao chép mã giáo viên", "copy-code", "", "primary")}
      ${onlineBtn("Xem học sinh đã kết nối", "students", "", "ghost")}
    </div>
  </section>

  <div class="metric-grid online-metrics">
    <div class="metric-card card">
      <span class="metric-icon">${icon("users")}</span>
      <span class="metric-value">${members.length}</span>
      <span>Học sinh đã kết nối</span>
      <small class="muted">Qua mã ${esc(profile.code)}</small>
    </div>
    <div class="metric-card card">
      <span class="metric-icon">${icon("book")}</span>
      <span class="metric-value">${questions.length}</span>
      <span>Câu hỏi trong kho</span>
      <small class="muted">${approvedCount} câu đã duyệt sẵn sàng giao</small>
    </div>
    <div class="metric-card card">
      <span class="metric-icon">${icon("calendar")}</span>
      <span class="metric-value">${assignments.length}</span>
      <span>Bài đã giao</span>
      <small class="muted">Đề được lưu cố định lúc giao</small>
    </div>
    <div class="metric-card card">
      <span class="metric-icon">${icon("pen")}</span>
      <span class="metric-value">${pendingSubmissions.length}</span>
      <span>Bài nộp cần chấm</span>
      <small class="muted">${
        pendingSubmissions.length
          ? "Có câu tự luận chờ giáo viên chấm"
          : "Không có bài tồn đọng"
      }</small>
    </div>
  </div>

  <div class="online-grid-two">
    <section class="card online-section">
      <div class="section-heading">
        <div>
          <h2>Bài nộp cần chấm & gần đây (${submissions.length})</h2>
          <p class="muted">Trắc nghiệm chấm tự động ở máy chủ · Tự luận do giáo viên chấm</p>
        </div>
        ${onlineBtn("Tất cả bài nộp", "submissions", "", "ghost small")}
      </div>
      ${
        !submissions.length
          ? `<div class="empty-state">
              ${icon("pen")}
              <h3>Chưa có bài nộp nào</h3>
              <p>Khi học sinh hoàn thành và nộp bài bạn giao, danh sách bài làm sẽ xuất hiện tại đây để bạn chấm điểm và nhận xét.</p>
            </div>`
          : `<div class="online-list">${[...submissions]
              .sort((a, b) => {
                const aWait = a.score === null || a.pending > 0 ? 1 : 0;
                const bWait = b.score === null || b.pending > 0 ? 1 : 0;
                return bWait - aWait;
              })
              .slice(0, 4)
              .map((s) => {
                const waiting = s.score === null || s.pending > 0;
                return `<article class="card online-item-card">
                  <div>
                    <div class="question-meta">
                      <span class="tag ${waiting ? "amber" : "green"}">${
                        waiting
                          ? `Chờ chấm (${s.pending} câu tự luận)`
                          : `Đã chấm · ${formatScore(s.score)}/10`
                      }</span>
                      <span class="muted">${formatDate(s.created_at)}</span>
                    </div>
                    <h3>${esc(s.student_name)} · ${esc(s.title)}</h3>
                  </div>
                  ${onlineBtn(
                    waiting ? "Chấm bài" : "Xem bài",
                    "submission",
                    `data-id="${esc(s.id)}"`,
                    waiting ? "primary small" : "secondary small",
                  )}
                </article>`;
              })
              .join("")}</div>`
      }
    </section>

    <section class="card online-section">
      <div class="section-heading">
        <div>
          <h2>Các bài đã giao gần đây (${assignments.length})</h2>
          <p class="muted">Theo dõi tiến độ nộp bài của học sinh</p>
        </div>
        ${onlineBtn("Quản lý bài giao", "assignments", "", "ghost small")}
      </div>
      ${
        !assignments.length
          ? `<div class="empty-state">
              ${icon("calendar")}
              <h3>Chưa giao bài tập nào</h3>
              <p>Hãy duyệt ít nhất một câu hỏi trong kho rồi giao bài cho các học sinh đã kết nối.</p>
              <div class="online-actions">
                ${onlineBtn("Soạn câu hỏi", "new", "", "primary")}
                ${onlineBtn("Mở kho câu hỏi", "questions", "", "secondary")}
              </div>
            </div>`
          : `<div class="online-list">${assignments
              .slice(0, 4)
              .map((a) => {
                const subs = submissions.filter(
                  (s) => s.assignment_id === a.id,
                );
                const waitingCount = subs.filter(
                  (s) => s.score === null || s.pending > 0,
                ).length;
                return `<article class="card online-item-card">
                  <div>
                    <div class="question-meta">
                      <span class="tag green">${a.questions.length} câu</span>
                      <span class="tag gray">${subs.length}/${members.length} học sinh đã nộp</span>
                      ${waitingCount ? `<span class="tag amber">${waitingCount} bài chờ chấm</span>` : ""}
                    </div>
                    <h3>${esc(a.title)}</h3>
                    <p class="muted">Hạn nộp: ${formatDate(a.due)}</p>
                  </div>
                  <div class="online-actions">
                    ${onlineBtn("Bài nộp", "submissions", `data-assignment="${esc(a.id)}"`, "secondary small")}
                    ${onlineBtn("Xem đề", "preview-assignment", `data-id="${esc(a.id)}"`, "ghost small")}
                  </div>
                </article>`;
              })
              .join("")}</div>`
      }
    </section>
  </div>`;
}

export function teacherQuestionsView(ctx) {
  const { snapshot, questionFilter = "all", questionQuery = "" } = ctx;
  const questions = snapshot.questions || [];
  const approvedCount = questions.filter(
    (q) => q.content.status === "approved",
  ).length;
  const draftCount = questions.length - approvedCount;

  const filtered = questions.filter((q) => {
    const matchStatus =
      questionFilter === "all" || q.content.status === questionFilter;
    const text =
      `${q.content.prompt || ""} ${q.content.topic || ""}`.toLowerCase();
    return matchStatus && text.includes(questionQuery.trim().toLowerCase());
  });

  return `<div class="welcome-row">
    <div>
      <div class="eyebrow">NGÂN HÀNG ĐỀ RIÊNG</div>
      <h1>Kho câu hỏi của bạn (${questions.length})</h1>
      <p class="muted">${approvedCount} câu đã duyệt sẵn sàng giao · ${draftCount} bản nháp đang chờ kiểm tra.</p>
    </div>
    <div class="online-actions">
      ${onlineBtn(`${icon("pen")} Soạn câu mới`, "new", "", "primary")}
      ${onlineBtn("Giao bài từ câu đã duyệt", "publish", "", "secondary")}
    </div>
  </div>

  <div class="online-actions">
    ${onlineBtn("Nhập từ văn bản / ảnh OCR", "import", "", "secondary")}
    ${onlineBtn("Lấy câu mẫu Toán 10", "samples", "", "ghost")}
    ${onlineBtn("Nhập câu đã soạn trên máy", "local", "", "ghost")}
  </div>

  <div class="online-filter-row card online-section">
    ${field(
      "Tìm kiếm câu hỏi",
      `<input type="search" data-online-input="question-query" value="${esc(questionQuery)}" placeholder="Tìm theo đề bài hoặc chủ đề…">`,
    )}
    ${field(
      "Trạng thái câu hỏi",
      `<select data-online-input="question-filter">
        <option value="all" ${questionFilter === "all" ? "selected" : ""}>Tất cả (${questions.length})</option>
        <option value="approved" ${questionFilter === "approved" ? "selected" : ""}>Đã duyệt (${approvedCount})</option>
        <option value="draft" ${questionFilter === "draft" ? "selected" : ""}>Bản nháp (${draftCount})</option>
      </select>`,
    )}
  </div>

  ${
    !filtered.length
      ? `<section class="card online-section empty-state">
          ${icon("book")}
          <h3>${
            questions.length
              ? "Không tìm thấy câu hỏi phù hợp"
              : "Kho câu hỏi đang trống"
          }</h3>
          <p>${
            questions.length
              ? "Hãy thử từ khóa khác hoặc chuyển bộ lọc trạng thái."
              : "Soạn câu hỏi đầu tiên bằng bàn phím, dán văn bản đề có sẵn, đọc ảnh bằng OCR hoặc lấy bộ câu mẫu Toán 10."
          }</p>
          <div class="online-actions">
            ${onlineBtn("Soạn câu hỏi mới", "new", "", "primary")}
            ${onlineBtn("Nhập từ văn bản / OCR", "import", "", "secondary")}
          </div>
        </section>`
      : `<div class="online-list">${filtered
          .map((q) => {
            const c = q.content;
            const approved = c.status === "approved";
            const isWritten = c.type === "written";
            return `<article class="card online-section online-question-card">
              <div>
                <div class="question-meta">
                  <span class="tag ${approved ? "green" : "amber"}">${
                    approved ? "Đã duyệt" : "Bản nháp"
                  }</span>
                  <span class="tag gray">${
                    isWritten ? "Tự luận" : "Trắc nghiệm"
                  }</span>
                  <span class="muted">Chủ đề: ${esc(c.topic)}</span>
                </div>
                <h3>${esc(c.prompt)}</h3>
                ${
                  !isWritten && Array.isArray(c.options)
                    ? `<p class="muted small-text">${c.options
                        .map(
                          (opt, i) =>
                            `${letters[i]}. ${esc(opt)}${c.answer === i ? " (Đáp án đúng)" : ""}`,
                        )
                        .join(" · ")}</p>`
                    : ""
                }
              </div>
              <div class="online-actions">
                ${onlineBtn("Xem & sửa", "edit", `data-id="${esc(q.id)}"`, "secondary")}
              </div>
            </article>`;
          })
          .join("")}</div>`
  }`;
}

export function teacherEditorView(ctx) {
  const { question } = ctx;
  const isWritten = question.type === "written";
  return `<div class="welcome-row">
    <div>
      <div class="eyebrow">SOẠN & DUYỆT NỘI DUNG</div>
      <h1>${question.id ? "Chỉnh sửa câu hỏi" : "Soạn câu hỏi mới"}</h1>
      <p class="muted">Chỉ những câu hỏi đã kiểm tra đề, đáp án và lời giải (trạng thái Đã duyệt) mới được phép chọn khi giao bài.</p>
    </div>
    <div class="online-actions">
      ${onlineBtn("Nhập từ văn bản / ảnh OCR", "import", "", "secondary small")}
      ${onlineBtn("Về kho câu hỏi", "questions", "", "ghost small")}
    </div>
  </div>

  <section class="card online-section">
    <form data-online-form="question">
      <div class="field-pair">
        ${field(
          "Chủ đề câu hỏi",
          `<input name="topic" data-online-question="topic" value="${esc(question.topic)}" maxlength="120" required placeholder="Ví dụ: Giá trị lượng giác">`,
        )}
        ${field(
          "Loại câu hỏi",
          `<select name="type" data-online-question="type">
            <option value="choice" ${question.type === "choice" ? "selected" : ""}>Trắc nghiệm (4 lựa chọn)</option>
            <option value="written" ${question.type === "written" ? "selected" : ""}>Tự luận (Giáo viên chấm điểm)</option>
          </select>`,
        )}
      </div>

      ${field(
        "Nội dung đề bài",
        `<textarea name="prompt" data-online-question="prompt" maxlength="5000" rows="4" required placeholder="Nhập đầy đủ dữ kiện và câu hỏi…">${esc(question.prompt)}</textarea>`,
      )}

      ${
        isWritten
          ? `<div class="tip-box">
              <p><strong>Câu hỏi tự luận:</strong> Học sinh sẽ nhập bài giải chi tiết. Khi nộp bài, câu tự luận ở trạng thái “Chờ chấm” cho đến khi giáo viên chấm điểm (từ 0 đến 1 điểm) và nhận xét.</p>
            </div>`
          : `<fieldset>
              <legend>Các lựa chọn trắc nghiệm (4 phương án khác nhau)</legend>
              <div class="field-pair">
                ${letters
                  .map((l, i) =>
                    field(
                      `Lựa chọn ${l}`,
                      `<input name="option${i}" data-online-option="${i}" maxlength="1000" value="${esc(question.options?.[i] || "")}" placeholder="Nhập phương án ${l}">`,
                    ),
                  )
                  .join("")}
              </div>
              ${field(
                "Đáp án trắc nghiệm đúng",
                `<select name="answer" data-online-question="answer">
                  <option value="">Chọn đáp án đúng</option>
                  ${letters
                    .map(
                      (l, i) =>
                        `<option value="${i}" ${question.answer === i ? "selected" : ""}>Phương án ${l}</option>`,
                    )
                    .join("")}
                </select>`,
              )}
            </fieldset>`
      }

      ${field(
        isWritten
          ? "Hướng dẫn chấm / lời giải tham khảo (bắt buộc khi duyệt)"
          : "Lời giải chi tiết (hiển thị cho học sinh sau khi nộp, bắt buộc khi duyệt)",
        `<textarea name="explanation" data-online-question="explanation" maxlength="5000" rows="4" placeholder="Trình bày các bước giải và kết quả…">${esc(question.explanation)}</textarea>`,
      )}

      ${field(
        "Gợi ý trước khi nộp (tùy chọn)",
        `<textarea name="hint" data-online-question="hint" maxlength="1000" rows="2" placeholder="Gợi mở công thức hoặc bước đầu tiên mà không lộ đáp án…">${esc(question.hint || "")}</textarea>`,
      )}

      ${field(
        "Trạng thái câu hỏi",
        `<select name="status" data-online-question="status">
          <option value="draft" ${question.status !== "approved" ? "selected" : ""}>Bản nháp (lưu để hoàn thiện sau)</option>
          <option value="approved" ${question.status === "approved" ? "selected" : ""}>Đã kiểm tra đề, đáp án và lời giải (sẵn sàng giao bài)</option>
        </select>`,
      )}

      <div class="online-actions">
        <button type="submit" class="button primary">Lưu câu hỏi</button>
        ${
          question.id
            ? onlineBtn("Tạo câu hỏi mới trống", "new", "", "secondary")
            : ""
        }
      </div>
    </form>
  </section>`;
}

export function teacherImportView(ctx) {
  const {
    importDraft = { topic: "Toán 10", source: "" },
    ocrState = { busy: false, status: "", imageName: "", imageURL: "" },
  } = ctx;

  return `<div class="welcome-row">
    <div>
      <div class="eyebrow">NHẬP ĐỀ TỪ VĂN BẢN HOẶC ẢNH</div>
      <h1>Tách câu hỏi & đọc chữ OCR</h1>
      <p class="muted">Đọc chữ từ ảnh đề chụp (OCR) hoặc dán nội dung văn bản để tách thành các bản nháp trong kho câu hỏi.</p>
    </div>
    <div class="online-actions">
      ${onlineBtn("Soạn từng câu bằng bàn phím", "new", "", "secondary small")}
      ${onlineBtn("Về kho câu hỏi", "questions", "", "ghost small")}
    </div>
  </div>

  <div class="online-grid-two">
    <section class="card online-section">
      <span class="eyebrow">BƯỚC 1 · ĐỌC CHỮ TỪ ẢNH (TÙY CHỌN)</span>
      <h2>Tải ảnh hoặc chụp ảnh đề bài</h2>
      <p class="muted">Hỗ trợ ảnh JPG, PNG, WebP tối đa 10 MB. Tính năng này dùng OCR (Tesseract.js) đọc chữ trên trình duyệt, <strong>chưa kết nối AI tự tạo đề</strong>.</p>
      ${
        ocrState.imageURL
          ? `<div class="online-ocr-preview"><img src="${esc(ocrState.imageURL)}" alt="Ảnh đề bài đã chọn" class="source-preview"><p class="small-text muted">${esc(ocrState.imageName)}</p></div>`
          : ""
      }
      <div class="online-actions">
        <label class="button secondary">
          Chọn ảnh từ máy
          <input id="online-ocr-file" type="file" accept="image/jpeg,image/png,image/webp" class="screen-reader-only" ${ocrState.busy ? "disabled" : ""}>
        </label>
        <label class="button ghost">
          Chụp ảnh đề bài
          <input id="online-ocr-camera" type="file" accept="image/*" capture="environment" class="screen-reader-only" ${ocrState.busy ? "disabled" : ""}>
        </label>
      </div>
      <div class="online-actions">
        ${onlineBtn(
          ocrState.busy ? "Đang đọc chữ…" : "Đọc chữ từ ảnh (OCR)",
          "ocr-scan",
          !ocrState.imageURL || ocrState.busy ? "disabled" : "",
          "primary",
        )}
        ${ocrState.busy ? onlineBtn("Dừng đọc", "ocr-cancel", "", "ghost") : ""}
      </div>
      <p id="online-ocr-status" role="status" aria-live="polite" class="small-text muted">${esc(ocrState.status || "Sau khi đọc chữ, nội dung sẽ được chèn vào ô văn bản bên cạnh để bạn kiểm tra và chỉnh sửa.")}</p>
    </section>

    <section class="card online-section">
      <span class="eyebrow">BƯỚC 2 · KIỂM TRA & TÁCH CÂU HỎI</span>
      <h2>Dán hoặc chỉnh sửa nội dung đề</h2>
      <form data-online-form="import">
        ${field(
          "Chủ đề chung cho các câu nhập",
          `<input name="topic" data-online-import="topic" maxlength="120" value="${esc(importDraft.topic || "Toán 10")}" required>`,
        )}
        ${field(
          "Dán nội dung đề hoặc sửa văn bản OCR",
          `<textarea name="source" data-online-import="source" rows="12" maxlength="40000" required placeholder="Câu 1: Cho sin α = 3/5 (90° < α < 180°). Tính cos α.&#10;A. 4/5&#10;B. −4/5&#10;C. 3/4&#10;D. −3/4&#10;Lời giải: Vì góc tù nên cos α < 0, suy ra cos α = −4/5.&#10;&#10;Câu 2: Giải thích vì sao cos 120° âm.">${esc(importDraft.source || "")}</textarea>`,
        )}
        <p class="small-text muted">Phân tách bằng “Câu 1:”, “Câu 2:”… (tối đa 30 câu/lần). Câu nhập vào luôn ở trạng thái <strong>Bản nháp</strong> và <strong>không tự đoán đáp án đúng</strong>; giáo viên phải tự chọn đáp án và duyệt trước khi giao.</p>
        <button type="submit" class="button primary" ${ocrState.busy ? "disabled" : ""}>Tách câu & lưu bản nháp</button>
      </form>
    </section>
  </div>`;
}

export function teacherAssignmentsView(ctx) {
  const {
    snapshot,
    publishDraft = { title: "", due: "", instructions: "", ids: [] },
    previewAssignmentId = null,
    showPublishForm = false,
  } = ctx;
  const assignments = snapshot.assignments || [];
  const submissions = snapshot.submissions || [];
  const members = snapshot.members || [];
  const questions = snapshot.questions || [];
  const approvedList = questions.filter((q) => q.content.status === "approved");
  const draftCount = questions.length - approvedList.length;

  const selectedIds = Array.isArray(publishDraft.ids) ? publishDraft.ids : [];
  const selectedQuestions = selectedIds
    .map((id) => approvedList.find((q) => q.id === id))
    .filter(Boolean);

  const previewed = previewAssignmentId
    ? assignments.find((a) => a.id === previewAssignmentId)
    : null;

  return `<div class="welcome-row">
    <div>
      <div class="eyebrow">QUẢN LÝ ĐỀ GIAO</div>
      <h1>Bài đã giao & Giao bài mới</h1>
      <p class="muted">Đề giao được lưu thành bản cố định tại thời điểm giao cho học sinh đã kết nối qua mã ${esc(snapshot.profile.code)}.</p>
    </div>
    <div class="online-actions">
      ${onlineBtn(
        showPublishForm
          ? "Xem danh sách bài đã giao"
          : `${icon("calendar")} Tạo bài giao mới`,
        showPublishForm ? "assignments" : "publish",
        "",
        "primary",
      )}
    </div>
  </div>

  ${
    previewed
      ? `<section class="card online-section online-preview-box">
          <div class="section-heading">
            <div>
              <span class="eyebrow">BẢN ĐỀ CỐ ĐỊNH LÚC GIAO</span>
              <h2>${esc(previewed.title)}</h2>
              <p class="muted">Hạn nộp: ${formatDate(previewed.due)} · ${previewed.questions.length} câu hỏi · Sửa kho câu hỏi không làm thay đổi đề này.</p>
            </div>
            ${onlineBtn("Đóng xem đề", "close-preview", "", "ghost small")}
          </div>
          ${
            previewed.instructions
              ? `<p class="preserve-lines"><strong>Hướng dẫn:</strong> ${esc(previewed.instructions)}</p>`
              : ""
          }
          <ol class="submitted-answers">
            ${previewed.questions
              .map(
                (q, idx) => `<li class="card online-section">
                  <div class="question-meta">
                    <span class="tag ${q.type === "written" ? "amber" : "green"}">Câu ${idx + 1} · ${q.type === "written" ? "Tự luận" : "Trắc nghiệm"}</span>
                    <span class="muted">${esc(q.topic || "")}</span>
                  </div>
                  <h3>${esc(q.prompt)}</h3>
                  ${
                    q.type === "choice" && Array.isArray(q.options)
                      ? `<p>${q.options
                          .map(
                            (o, i) =>
                              `${letters[i]}. ${esc(o)}${q.answer === i ? " (Đáp án đúng)" : ""}`,
                          )
                          .join(" · ")}</p>`
                      : ""
                  }
                  <p class="preserve-lines muted"><strong>Lời giải / hướng dẫn chấm:</strong> ${esc(q.explanation || "")}</p>
                </li>`,
              )
              .join("")}
          </ol>
        </section>`
      : ""
  }

  <section class="card online-section">
    <h2>Giao bài cho học sinh đã kết nối (${members.length} học sinh)</h2>
    <form data-online-form="publish">
      <div class="field-pair">
        ${field(
          "Tên bài giao",
          `<input name="title" data-online-publish="title" maxlength="160" value="${esc(publishDraft.title)}" required placeholder="Ví dụ: Kiểm tra 15 phút — Giá trị lượng giác">`,
        )}
        ${field(
          "Hạn nộp (giờ trên thiết bị, không bắt buộc)",
          `<input name="due" data-online-publish="due" type="datetime-local" value="${esc(publishDraft.due)}">`,
        )}
      </div>
      ${field(
        "Hướng dẫn làm bài (không bắt buộc)",
        `<textarea name="instructions" data-online-publish="instructions" maxlength="2000" rows="2" placeholder="Dặn dò học sinh cách trình bày hoặc lưu ý khi làm bài…">${esc(publishDraft.instructions)}</textarea>`,
      )}
      <fieldset>
        <legend>Chọn 1–30 câu hỏi đã duyệt (${approvedList.length} câu khả dụng)</legend>
        ${
          draftCount > 0
            ? `<p class="small-text muted">Lưu ý: Còn ${draftCount} câu hỏi ở trạng thái Bản nháp chưa hiển thị ở đây. Chỉ câu đã duyệt mới được phép giao.</p>`
            : ""
        }
        ${
          approvedList.length
            ? `<div class="online-list">${approvedList
                .map((q) => {
                  const checked = selectedIds.includes(q.id);
                  return `<label class="assignment-pick">
                    <input name="ids" data-online-publish-id="${esc(q.id)}" type="checkbox" value="${esc(q.id)}" ${checked ? "checked" : ""}>
                    <span>
                      <strong>${esc(q.content.prompt)}</strong>
                      <small class="muted"> · ${esc(q.content.topic)} · ${q.content.type === "written" ? "Tự luận" : "Trắc nghiệm"}</small>
                    </span>
                  </label>`;
                })
                .join("")}</div>`
            : `<p>Chưa có câu hỏi nào ở trạng thái Đã duyệt. Hãy mở Kho câu hỏi để soạn và duyệt ít nhất một câu trước khi giao bài.</p>`
        }
      </fieldset>

      ${
        selectedQuestions.length
          ? `<div class="tip-box">
              <div>
                <strong>Xem trước đề chuẩn bị giao (${selectedQuestions.length} câu):</strong>
                <p>Gồm ${selectedQuestions.filter((q) => q.content.type === "choice").length} câu trắc nghiệm và ${selectedQuestions.filter((q) => q.content.type === "written").length} câu tự luận. Mỗi câu có trọng số điểm bằng nhau trên thang 10.</p>
                <ol class="online-preview-list">
                  ${selectedQuestions
                    .map(
                      (q) =>
                        `<li>[${q.content.type === "written" ? "Tự luận" : "Trắc nghiệm"}] ${esc(q.content.prompt)}</li>`,
                    )
                    .join("")}
                </ol>
              </div>
            </div>`
          : ""
      }

      <p class="muted small-text">Mỗi câu có trọng số bằng nhau. Đề được lưu thành bản riêng tại thời điểm giao; sửa kho câu hỏi sau đó sẽ không làm thay đổi bài đã giao.</p>
      <div class="online-actions">
        <button type="submit" class="button primary" ${approvedList.length ? "" : "disabled"}>Giao bài</button>
        ${
          !approvedList.length
            ? onlineBtn("Mở kho câu hỏi để duyệt", "questions", "", "secondary")
            : ""
        }
      </div>
    </form>
  </section>

  <section class="card online-section">
    <h2>Danh sách bài đã giao (${assignments.length})</h2>
    ${
      !assignments.length
        ? `<p class="muted">Bạn chưa giao bài tập nào.</p>`
        : `<div class="online-list">${assignments
            .map((a) => {
              const subs = submissions.filter((s) => s.assignment_id === a.id);
              const waiting = subs.filter(
                (s) => s.score === null || s.pending > 0,
              ).length;
              return `<article class="card online-item-card">
                <div>
                  <div class="question-meta">
                    <span class="tag green">${a.questions.length} câu</span>
                    <span class="tag gray">${subs.length}/${members.length} đã nộp</span>
                    ${waiting ? `<span class="tag amber">${waiting} bài chờ chấm</span>` : ""}
                  </div>
                  <h3>${esc(a.title)}</h3>
                  ${
                    a.instructions
                      ? `<p class="preserve-lines">${esc(a.instructions)}</p>`
                      : ""
                  }
                  <p class="muted">Hạn nộp: ${formatDate(a.due)}</p>
                </div>
                <div class="online-actions">
                  ${onlineBtn("Xem đề đã giao", "preview-assignment", `data-id="${esc(a.id)}"`, "ghost small")}
                  ${onlineBtn("Xem bài nộp & chấm điểm", "submissions", `data-assignment="${esc(a.id)}"`, "secondary small")}
                </div>
              </article>`;
            })
            .join("")}</div>`
    }
  </section>`;
}

export function teacherSubmissionsView(ctx) {
  const { snapshot, selectedAssignment = null, selectedStudent = null } = ctx;
  const submissions = snapshot.submissions || [];
  const assignments = snapshot.assignments || [];
  const members = snapshot.members || [];

  const list = submissions.filter(
    (s) =>
      (!selectedAssignment || s.assignment_id === selectedAssignment) &&
      (!selectedStudent || s.student_id === selectedStudent),
  );
  const pendingCount = list.filter(
    (s) => s.score === null || s.pending > 0,
  ).length;

  const activeAssignment = selectedAssignment
    ? assignments.find((a) => a.id === selectedAssignment)
    : null;
  const activeStudent = selectedStudent
    ? members.find((m) => m.id === selectedStudent)
    : null;

  return `<div class="welcome-row">
    <div>
      <div class="eyebrow">CHẤM BÀI & NHẬN XÉT</div>
      <h1>Bài nộp & chấm điểm (${list.length})</h1>
      <p class="muted">${
        pendingCount
          ? `Có ${pendingCount} bài nộp đang chờ chấm tự luận.`
          : "Tất cả bài nộp trong danh sách đã được chấm điểm."
      }</p>
    </div>
    <div class="online-actions">
      ${
        selectedAssignment || selectedStudent
          ? onlineBtn(
              "Xem tất cả bài nộp",
              "submissions-all",
              "",
              "secondary small",
            )
          : ""
      }
      ${onlineBtn("Làm mới", "refresh", "", "ghost small")}
    </div>
  </div>

  ${
    activeAssignment || activeStudent
      ? `<div class="tip-box">
          <p>Đang lọc bài nộp${activeAssignment ? ` của đề <strong>${esc(activeAssignment.title)}</strong>` : ""}${activeStudent ? ` từ học sinh <strong>${esc(activeStudent.name)}</strong>` : ""}.</p>
        </div>`
      : ""
  }

  <div class="online-filter-row card online-section">
    ${field(
      "Lọc theo bài giao",
      `<select data-online-input="submission-assignment">
        <option value="">Tất cả bài đã giao (${submissions.length})</option>
        ${assignments
          .map(
            (a) =>
              `<option value="${esc(a.id)}" ${selectedAssignment === a.id ? "selected" : ""}>${esc(a.title)}</option>`,
          )
          .join("")}
      </select>`,
    )}
    ${field(
      "Lọc theo học sinh",
      `<select data-online-input="submission-student">
        <option value="">Tất cả học sinh</option>
        ${members
          .map(
            (m) =>
              `<option value="${esc(m.id)}" ${selectedStudent === m.id ? "selected" : ""}>${esc(m.name)}</option>`,
          )
          .join("")}
      </select>`,
    )}
  </div>

  ${
    !list.length
      ? `<section class="card online-section empty-state">
          ${icon("pen")}
          <h3>Chưa có bài nộp nào</h3>
          <p>Khi học sinh nộp bài, danh sách bài làm sẽ hiển thị tại đây để bạn chấm tự luận và ghi nhận xét.</p>
        </section>`
      : `<div class="online-list">${list
          .map((s) => {
            const waiting = s.score === null || s.pending > 0;
            return `<article class="card online-section online-item-card">
              <div>
                <div class="question-meta">
                  <span class="tag ${waiting ? "amber" : "green"}">${
                    waiting
                      ? `Chờ chấm ${s.pending} câu tự luận`
                      : `Đã chấm · ${formatScore(s.score)}/10 điểm`
                  }</span>
                  <span class="muted">Nộp lúc: ${formatDate(s.created_at)}</span>
                </div>
                <h3>${esc(s.title)}</h3>
                <p>Học sinh: <strong>${esc(s.student_name)}</strong></p>
                <strong>${
                  waiting
                    ? `Chờ chấm ${s.pending} câu tự luận`
                    : `${formatScore(s.score)}/10 điểm`
                }</strong>
                ${
                  s.feedback
                    ? `<p class="preserve-lines muted">Nhận xét: ${esc(s.feedback)}</p>`
                    : ""
                }
              </div>
              ${onlineBtn(
                waiting ? "Chấm điểm & nhận xét" : "Xem / cập nhật điểm",
                "submission",
                `data-id="${esc(s.id)}"`,
                waiting ? "primary" : "secondary",
              )}
            </article>`;
          })
          .join("")}</div>`
  }`;
}

export function teacherSubmissionDetailView(ctx) {
  const { snapshot, selectedSubmission, markDrafts } = ctx;
  const s = snapshot.submissions.find((x) => x.id === selectedSubmission);
  if (!s) {
    return `<section class="card online-section empty-state">
      <h3>Không tìm thấy bài nộp</h3>
      ${onlineBtn("Về danh sách bài nộp", "submissions", "", "primary")}
    </section>`;
  }
  const waiting = s.score === null || s.pending > 0;
  const draft = markDrafts?.get(s.id) || {};
  const draftMarks = draft.marks || {};
  const feedbackValue =
    draft.feedback !== undefined ? draft.feedback : s.feedback || "";

  return `<div class="welcome-row">
    <div>
      <div class="eyebrow">CHẤM BÀI CỦA HỌC SINH</div>
      <h1>${esc(s.title)}</h1>
      <p class="muted">Học sinh: <strong>${esc(s.student_name)}</strong> · Nộp lúc: ${formatDate(s.created_at)}</p>
    </div>
    ${onlineBtn("Về danh sách bài nộp", "submissions", "", "ghost small")}
  </div>

  <section class="card online-section">
    <span class="tag ${waiting ? "amber" : "green"}">${
      waiting ? `Chờ chấm ${s.pending} câu tự luận` : "Đã chấm đủ các câu"
    }</span>
    <strong class="online-score">${
      waiting ? "Chờ chấm tự luận" : `${formatScore(s.score)}/10`
    }</strong>
    <p class="muted">Trắc nghiệm đã được chấm tự động ở máy chủ. Với mỗi câu tự luận, hãy nhập điểm từ <strong>0 đến 1</strong> (ví dụ: 0, 0.25, 0.5, 0.75, 1). Điểm 0 là hợp lệ.</p>

    <form data-online-form="mark">
      <ol class="submitted-answers">
        ${s.answers
          .map((a, idx) => {
            const isWritten = a.type === "written";
            const savedMark = s.marks?.[a.questionId];
            const currentMark =
              draftMarks[a.questionId] !== undefined
                ? draftMarks[a.questionId]
                : (savedMark ?? "");
            const choiceText =
              !isWritten && Array.isArray(a.options)
                ? `${letters[a.response] ? letters[a.response] + ". " : ""}${a.options[a.response] ?? ""}`
                : a.response;
            return `<li class="card online-section">
              <div class="question-meta">
                <span class="tag ${
                  isWritten ? "amber" : a.correct ? "green" : "gray"
                }">${
                  isWritten
                    ? "Tự luận"
                    : a.correct
                      ? "Trắc nghiệm · Đúng (1/1)"
                      : "Trắc nghiệm · Chưa đúng (0/1)"
                }</span>
              </div>
              <h3>Câu ${idx + 1}. ${esc(a.prompt)}</h3>
              <p class="preserve-lines"><strong>Bài làm của học sinh:</strong> ${esc(choiceText)}</p>
              <p class="preserve-lines muted"><strong>Lời giải / hướng dẫn chấm:</strong> ${esc(a.explanation || "")}</p>
              ${
                isWritten
                  ? field(
                      "Điểm câu này (0–1, điểm 0 hợp lệ)",
                      `<input type="number" name="mark-${esc(a.questionId)}" data-online-mark="${esc(a.questionId)}" min="0" max="1" step="0.01" value="${esc(currentMark)}" placeholder="Chưa chấm">`,
                    )
                  : ""
              }
            </li>`;
          })
          .join("")}
      </ol>

      ${field(
        "Nhận xét của giáo viên",
        `<textarea name="feedback" data-online-feedback="1" maxlength="3000" rows="3" placeholder="Ghi nhận bước làm đúng và hướng dẫn chỗ cần hoàn thiện…">${esc(feedbackValue)}</textarea>`,
      )}
      <div class="online-actions">
        <button type="submit" class="button primary">Lưu điểm & nhận xét</button>
      </div>
    </form>
  </section>`;
}

export function teacherStudentsView(ctx) {
  const { snapshot } = ctx;
  const profile = snapshot.profile;
  const members = snapshot.members || [];
  const assignments = snapshot.assignments || [];
  const submissions = snapshot.submissions || [];

  return `<div class="welcome-row">
    <div>
      <div class="eyebrow">DANH SÁCH KẾT NỐI</div>
      <h1>Học sinh đã kết nối (${members.length})</h1>
      <p class="muted">Danh sách học sinh đã nhập mã giáo viên <strong>${esc(profile.code)}</strong> của bạn.</p>
    </div>
    <div class="online-actions">
      ${onlineBtn("Sao chép mã giáo viên", "copy-code", "", "primary small")}
    </div>
  </div>

  <section class="card online-section">
    ${
      !members.length
        ? `<div class="empty-state">
            ${icon("users")}
            <h3>Chưa có học sinh kết nối</h3>
            <p>Hãy gửi mã giáo viên <strong>${esc(profile.code)}</strong> cho học sinh. Khi học sinh đăng nhập và nhập mã này trong mục “Giáo viên của tôi”, tên của các em sẽ xuất hiện tại đây.</p>
            <div class="online-actions">
              ${onlineBtn("Sao chép mã " + esc(profile.code), "copy-code", "", "primary")}
            </div>
          </div>`
        : `<div class="online-list">${members
            .map((m) => {
              const studentSubs = submissions.filter(
                (s) => s.student_id === m.id,
              );
              const pendingCount = studentSubs.filter(
                (s) => s.score === null || s.pending > 0,
              ).length;
              return `<article class="card online-item-card">
                <div>
                  <h3>${esc(m.name)}</h3>
                  <p class="muted">Đã nộp ${studentSubs.length}/${assignments.length} bài được giao${
                    pendingCount ? ` · ${pendingCount} bài đang chờ chấm` : ""
                  }</p>
                </div>
                <div class="online-actions">
                  ${onlineBtn("Xem bài nộp", "submissions", `data-student="${esc(m.id)}"`, "secondary small")}
                </div>
              </article>`;
            })
            .join("")}</div>`
    }
  </section>`;
}

export function teacherProfileView(ctx) {
  const { snapshot } = ctx;
  const profile = snapshot.profile;
  return `<div class="welcome-row">
    <div>
      <div class="eyebrow">TÀI KHOẢN CỦA BẠN</div>
      <h1>Hồ sơ giáo viên</h1>
      <p class="muted">Thông tin tài khoản, vai trò và mã giáo viên được lưu cố định trong cơ sở dữ liệu.</p>
    </div>
  </div>

  <div class="online-grid-two">
    <section class="card online-section">
      <h2>Thông tin giảng dạy</h2>
      <dl class="online-profile-list">
        <div><dt>Tên hiển thị</dt><dd><strong>${esc(profile.name)}</strong></dd></div>
        <div><dt>Vai trò tài khoản</dt><dd><span class="tag green">Giáo viên</span></dd></div>
        <div><dt>Mã giáo viên</dt><dd><strong>${esc(profile.code)}</strong> ${onlineBtn("Sao chép", "copy-code", "", "ghost small")}</dd></div>
        <div><dt>Học sinh đã kết nối</dt><dd>${snapshot.members.length} học sinh</dd></div>
        <div><dt>Kho câu hỏi</dt><dd>${snapshot.questions.length} câu</dd></div>
        <div><dt>Bài đã giao</dt><dd>${snapshot.assignments.length} bài</dd></div>
      </dl>
      <div class="online-actions">
        ${onlineBtn("Đăng xuất khỏi tài khoản", "logout", "", "ghost")}
      </div>
    </section>

    <section class="card online-section">
      <h2>Đổi mật khẩu</h2>
      <p class="muted">Cập nhật mật khẩu mới cho tài khoản đăng nhập của bạn.</p>
      <form data-online-form="password">
        ${field(
          "Mật khẩu mới (từ 8 ký tự)",
          '<input name="password" type="password" autocomplete="new-password" minlength="8" maxlength="128" required>',
        )}
        <button type="submit" class="button secondary">Cập nhật mật khẩu</button>
      </form>
    </section>
  </div>`;
}
