import { knowledgeMap } from "../ui/knowledge-map.js";
import {
  lessons,
  questionBank,
  evaluateTrueFalse,
  checkShortAnswer,
} from "../learning.js";
import { icon } from "../ui/icons.js";
import { button, pageHeading, dateLabel } from "../ui/helpers.js";
import { triangleVisual, interactiveCircle, visual } from "../ui/visuals.js";
import { esc } from "../ui/dom.js";
import { letters } from "../content/labels.js";

export function createPracticeViews(readContext) {
  function practiceView() {
    const { state, practice, lessonFor, lessonIcon, activeQuestion } =
      readContext();

    if (!practice) {
      const chapters = [
        { id: "all", name: "Tất cả các chương" },
        { id: "chuong-1", name: "Chương I: Mệnh đề & Tập hợp" },
        { id: "chuong-2", name: "Chương II: BPT bậc nhất hai ẩn" },
        { id: "chuong-3", name: "Chương III: Hệ thức lượng tam giác" },
        { id: "chuong-4", name: "Chương IV: Vectơ" },
        { id: "chuong-5", name: "Chương V: Thống kê mô tả" },
        { id: "chuong-6", name: "Chương VI: Hàm số & Tam thức bậc hai" },
        { id: "chuong-7", name: "Chương VII: Tọa độ Oxy" },
        { id: "chuong-8", name: "Chương VIII: Đại số tổ hợp" },
        { id: "chuong-9", name: "Chương IX: Xác suất cổ điển" },
      ];
      const selectedChapter = state.chapterFilter || "all";
      const displayLessons =
        selectedChapter === "all"
          ? lessons
          : lessons.filter((l) => l.chapterId === selectedChapter);

      return `${pageHeading("LUYỆN TẬP CÓ CĂN CỨ", "Bắt đầu từ điều bạn đang học.", "Làm bài → Xác minh khi cần → Vận dụng → Xem căn cứ.")}<div class="filter-row"><span class="tag green">Toán 10 KNTT</span><label for="chapter-filter" class="screen-reader-only">Lọc theo chương</label><select id="chapter-filter" class="filter-select"><option value="all">Tất cả các chương (${lessons.length} chủ đề)</option>${chapters
        .slice(1)
        .map(
          (ch) =>
            `<option value="${ch.id}" ${selectedChapter === ch.id ? "selected" : ""}>${esc(ch.name)}</option>`,
        )
        .join(
          "",
        )}</select><span class="muted">${displayLessons.length} chủ đề luyện tập</span></div><div class="lesson-grid">${displayLessons
        .map((l, i) => {
          const qCount = questionBank.filter((q) => q.lessonId === l.id).length;
          return `<article class="card practice-picker"><div class="lesson-icon tone-${i % 8}">${icon(lessonIcon(l.id))}</div><div class="lesson-meta">${esc(l.lessonNumber || `CHỦ ĐỀ ${String(i + 1).padStart(2, "0")}`)}</div><h2>${esc(l.shortTitle)}</h2><p class="muted">${esc(l.description)}</p><div class="practice-picker-meta"><span>${icon("clock")} Khoảng 20–25 phút</span><span><strong>${qCount} câu hỏi</strong> (Trắc nghiệm, Đúng/Sai, Điền số)</span></div>${button(`Bắt đầu luyện ${icon("arrow")}`, "start-practice", "primary", `data-lesson="${l.id}"`)}</article>`;
        })
        .join(
          "",
        )}</div><div class="learning-tip">${icon("shield")}<p>Kết quả chỉ phản ánh những câu đã kiểm tra. Nếu câu trả lời chưa nhất quán, Hiểu Thật sẽ ghi <strong>“Chưa đủ bằng chứng”</strong>.</p></div>`;
    }

    state.lesson = practice.lessonId;
    if (practice.phase === "result") return resultView();
    const q = activeQuestion(),
      phase = practice.phase,
      isProbe = phase === "probe",
      isTransfer = phase === "transfer",
      selected = practice.selected;
    const queue = practice.queue || [practice.base];
    const curIdx = practice.queueIndex || 0;
    const currentQNum = String(curIdx + 1).padStart(2, "0");
    const totalQNum = String(queue.length).padStart(2, "0");
    const isLastBase = curIdx + 1 >= queue.length;

    // Xác định tính đúng/sai tùy theo loại câu hỏi
    const isTF = q.type === "true-false";
    const isSA = q.type === "short-answer";
    let correct = false;
    let tfScore = null;
    if (practice.submitted) {
      if (isTF) {
        tfScore = evaluateTrueFalse(selected, q.subQuestions);
        correct = tfScore.isFullyCorrect;
      } else if (isSA) {
        correct = checkShortAnswer(selected, q);
      } else {
        correct = selected === q.answer;
      }
    }

    // Kiểm tra đã đủ điều kiện để bấm nộp chưa
    const canSubmit = (() => {
      if (isTF) {
        return Boolean(
          selected &&
          typeof selected === "object" &&
          (q.subQuestions || []).length > 0 &&
          (q.subQuestions || []).every(
            (sq) => typeof selected[sq.id] === "boolean",
          ),
        );
      }
      if (isSA) {
        return typeof selected === "string" && selected.trim().length > 0;
      }
      return selected !== null && selected !== undefined;
    })();

    const activeLessonObj = lessonFor(state.lesson);
    const slideFormula =
      activeLessonObj.slides.find((s) => s.formula)?.formula ||
      "sin² α + cos² α = 1";
    const slideTip =
      activeLessonObj.slides.find((s) => s.tip)?.tip ||
      "Nắm chắc công thức gốc để tự tin khi làm bài.";

    // Render phần câu hỏi tùy theo loại
    let questionBodyHTML = "";
    if (isTF) {
      const sel = selected && typeof selected === "object" ? selected : {};
      const subQuestions = q.subQuestions || [];
      questionBodyHTML = `<div class="true-false-container" role="group" aria-label="Đánh giá Đúng Sai cho từng ý">
        ${subQuestions
          .map((sq) => {
            const chosen = sel[sq.id];
            const isSubSubmitted = practice.submitted;
            const isSubCorrect =
              isSubSubmitted && chosen === Boolean(sq.answer);
            return `<div class="tf-item ${isSubSubmitted ? (isSubCorrect ? "tf-correct" : "tf-incorrect") : ""}">
            <div class="tf-row">
              <div class="tf-content">
                <span class="tf-badge">${esc(sq.id.toUpperCase())})</span>
                <span class="tf-text">${esc(sq.text)}</span>
              </div>
              <div class="tf-choices">
                <button type="button" class="tf-choice-btn ${chosen === true ? "active" : ""}" data-action="answer-tf" data-id="${esc(sq.id)}" data-val="true" ${isSubSubmitted ? "disabled" : ""}>Đúng</button>
                <button type="button" class="tf-choice-btn ${chosen === false ? "active" : ""}" data-action="answer-tf" data-id="${esc(sq.id)}" data-val="false" ${isSubSubmitted ? "disabled" : ""}>Sai</button>
              </div>
            </div>
            ${isSubSubmitted ? `<div class="tf-explanation"><span class="tag ${isSubCorrect ? "green" : "amber"}">${isSubCorrect ? "Chính xác" : `Đáp án đúng: ${sq.answer ? "ĐÚNG" : "SAI"}`}</span> ${esc(sq.explanation || "")}</div>` : ""}
          </div>`;
          })
          .join("")}
      </div>`;
    } else if (isSA) {
      const userVal = typeof selected === "string" ? selected : "";
      questionBodyHTML = `<div class="short-answer-container">
        <label class="field" for="short-answer-input">
          <span>Nhập đáp số hoặc kết quả tính toán:</span>
          <div class="short-input-wrap">
            <input type="text" id="short-answer-input" class="short-answer-input" placeholder="Ví dụ: 12 hoặc 3/4 hoặc -2.5" value="${esc(userVal)}" ${practice.submitted ? "disabled" : ""} autocomplete="off" />
            ${q.unit ? `<span class="short-unit">${esc(q.unit)}</span>` : ""}
          </div>
        </label>
        ${practice.submitted ? `<div class="short-answer-feedback"><p><strong>Đáp số chấp nhận:</strong> <span class="tag green">${esc(Array.isArray(q.acceptedAnswers) ? q.acceptedAnswers.join(" hoặc ") : String(q.answer ?? ""))}</span></p></div>` : ""}
      </div>`;
    } else {
      // Multiple choice mặc định
      questionBodyHTML = `<div class="answer-grid" role="group" aria-label="Chọn đáp án">${(q.options || []).map((o, i) => `<button class="answer-option ${selected === i ? "selected" : ""} ${practice.submitted && (phase !== "base" || correct) && i === q.answer ? "correct" : ""} ${practice.submitted && selected === i && !correct ? "incorrect" : ""}" data-action="answer" data-index="${i}" aria-pressed="${selected === i}" ${practice.submitted ? "disabled" : ""}><span class="answer-letter">${letters[i]}</span><span class="answer-value">${esc(o)}</span>${practice.submitted && (phase !== "base" || correct) && i === q.answer ? icon("check") : ""}</button>`).join("")}</div>`;
    }

    const typeBadge = isProbe
      ? `<span class="tag amber">${icon("target")} Câu hỏi xác minh tư duy</span>`
      : isTransfer
        ? `<span class="tag green">${icon("pen")} Bài vận dụng độc lập</span>`
        : isTF
          ? `<span class="tag purple">${icon("target")} Trắc nghiệm Đúng / Sai (4 ý) · Dạng ${currentQNum}/${totalQNum}</span>`
          : isSA
            ? `<span class="tag blue">${icon("pen")} Trả lời ngắn (Điền số) · Dạng ${currentQNum}/${totalQNum}</span>`
            : `<span class="tag green">${icon("pen")} Trắc nghiệm nhiều lựa chọn · Dạng ${currentQNum}/${totalQNum}</span>`;

    return `${pageHeading("KHÔNG GIAN LÀM BÀI", esc(activeLessonObj.shortTitle), "Bạn không cần làm thật nhanh. Hãy dành thời gian cho cách mình suy nghĩ.", button("Đổi chủ đề", "choose-practice", "ghost small"))}
    <div class="steps-bar">${[
      ["base", `Luyện tập (${totalQNum} dạng)`],
      ["probe", "Xác minh"],
      ["transfer", "Vận dụng"],
      ["result", "Căn cứ"],
    ]
      .map(
        ([p, t], i) =>
          `<div class="step ${phase === p ? "active" : ""}"><span>${i + 1}</span>${t}${i < 3 ? icon("right") : ""}</div>`,
      )
      .join("")}</div>
    <div class="practice-layout"><section class="practice-card card"><div class="question-top">${typeBadge}<span class="question-number">${isProbe ? "XÁC MINH" : isTransfer ? "VẬN DỤNG" : `${currentQNum}/${totalQNum}`}</span></div>
    ${isProbe ? '<div class="verification-intro">Cùng kiểm tra một bước nhỏ để hiểu rõ câu trả lời vừa rồi của bạn.</div>' : ""}
    <div class="question-prompt"><h2>${esc(q.prompt)}</h2></div>
    ${questionBodyHTML}
    ${phase === "base" && !practice.submitted ? `<div class="confidence-selector" role="group" aria-label="Mức độ tự tin của bạn"><span>Mức độ tự tin:</span><button type="button" class="chip ${practice.confidence === "sure" ? "active" : ""}" data-action="confidence" data-level="sure" aria-pressed="${practice.confidence === "sure"}">Chắc chắn căn cứ</button><button type="button" class="chip ${practice.confidence === "unsure" ? "active" : ""}" data-action="confidence" data-level="unsure" aria-pressed="${practice.confidence === "unsure"}">Đang phân vân</button></div>` : ""}
    ${phase === "base" ? `<label class="reflection"><span>Cách bạn suy nghĩ <small>Không bắt buộc</small></span><textarea id="reflection" rows="2" placeholder="Mình chọn đáp án này vì…" ${practice.submitted ? "disabled" : ""}>${esc(practice.reflection)}</textarea></label>` : ""}
    ${practice.submitted ? `<div class="feedback-box ${correct ? "success" : "warning"}" role="status">${icon(correct ? "check" : "bulb")}<div><strong>${correct ? (phase === "base" && practice.confidence === "unsure" ? "Bạn đã chọn đúng dù còn phân vân — hãy xem kỹ công thức bên dưới để củng cố niềm tin nhé!" : isTF ? `Hoàn thành xuất sắc: Đạt ${tfScore?.score}/1.0 điểm!` : "Bạn đã chọn đúng.") : isTF ? `Cần xem lại một số ý: Đạt ${tfScore?.score || 0}/1.0 điểm (đúng ${tfScore?.numCorrect || 0}/4 ý)` : "Có một điểm mình cùng xem lại nhé."}</strong><p>${esc(phase === "base" && !correct && !isTF ? "Câu trả lời này chưa khớp. Mình sẽ kiểm tra thêm một bước trước khi kết luận." : q.explanation)}</p>${phase === "base" ? `<small>${correct && practice.confidence === "unsure" ? "Đừng lo nếu bước đầu còn ngập ngừng. Nắm chắc công thức gốc sẽ giúp bạn tự tin ở câu vận dụng tiếp theo." : "Một câu trả lời chưa đủ để kết luận. Cùng kiểm tra thêm ở bước tiếp theo."}</small>` : ""}</div></div>` : ""}
    <div class="practice-actions"><span>${icon("shield")} Căn cứ được lưu khi hoàn thành phiên</span>${practice.submitted ? button(`${isTransfer ? "Xem căn cứ & kết quả" : isProbe ? "Làm câu vận dụng" : isLastBase ? "Tổng hợp & Bước tiếp theo" : "Câu tiếp theo"} ${icon("arrow")}`, "next-question", "primary") : button(`Kiểm tra đáp án ${icon("arrow")}`, "submit-answer", "primary", !canSubmit ? "disabled" : "")}</div></section>
    <aside class="support-card card"><div class="support-tabs"><button class="${state.support === "formula" ? "active" : ""}" data-action="support" data-tab="formula">${icon("book")} Sổ tay</button><button class="${state.support === "hints" ? "active" : ""}" data-action="support" data-tab="hints">${icon("bulb")} Gợi ý</button></div><div class="support-content">${state.support === "formula" ? `<span class="eyebrow">NHẮC NHỚ KIẾN THỨC</span><h3>${esc(activeLessonObj.shortTitle)}</h3>${state.lesson === "cosine" ? triangleVisual() : state.lesson === "values" || state.lesson === "signs" ? interactiveCircle(state.interactiveAngle, false) : visual(activeLessonObj.slides[0].visual)}<div class="formula-block small-formula">${esc(slideFormula)}</div><p class="muted">${esc(slideTip)}</p><div class="support-note">${icon("leaf")} Hiểu từng bước, vững từng chút.</div>` : `<span class="eyebrow">GỢI Ý THEO CÂU HỎI</span><h3>Thử từng bước nhỏ</h3><p class="muted">Mở gợi ý khi cần. Mỗi lượt mở được ghi cùng kết quả luyện tập.</p>${q.hints?.length ? q.hints.map((hint, i) => `<details class="practice-hint" data-hint="${i}"><summary>Gợi ý ${i + 1}</summary><p>${esc(hint)}</p></details>`).join("") : '<p class="muted">Câu này chưa có gợi ý riêng. Bạn có thể xem kiến thức ở tab Sổ tay.</p>'}`}</div></aside></div>`;
  }

  function resultView() {
    const { practice } = readContext();
    const r = practice.result;
    return `${pageHeading("MỘT BƯỚC TIẾN MỚI", "Bạn đã dành thời gian để hiểu.", "Cùng nhìn lại những gì câu trả lời của bạn cho thấy.")}<div class="progress-layout"><section class="card result-card"><div class="result-symbol ${r.status}">${icon(r.status === "supported" ? "check" : r.status === "practice" ? "leaf" : "target")}</div><span class="tag ${r.status === "supported" ? "green" : "amber"}">${r.status === "supported" ? "Có bằng chứng làm đúng" : r.status === "practice" ? "Cần luyện thêm" : "Chưa đủ bằng chứng"}</span><h2>${esc(r.title)}</h2><p class="muted">${esc(r.detail)}</p>${r.teacherAlert ? `<div class="teacher-alert-banner"><span class="alert-icon">${icon("mail")}</span><div><strong>Hệ thống đã gửi thông báo đến giáo viên hỗ trợ:</strong><p>Hệ thống ghi nhận em cần hỗ trợ ở bài <em>${esc(r.teacherAlert.lessonTitle)}</em>, câu: “${esc(r.teacherAlert.wrongQuestionPrompt)}”. Điểm nghẽn nhận thức: <strong>${esc(r.teacherAlert.misconception)}</strong>. Thông tin đã được gửi lên trang làm việc của giáo viên để thầy cô hỗ trợ kịp thời.</p></div></div>` : ""}<div class="result-stats"><span><strong>${r.history.filter((h) => h.correct).length}/${r.history.length}</strong>Câu trả lời đúng</span><span><strong>${r.hints}</strong>Lượt mở gợi ý</span><span><strong>${Math.max(1, Math.round(r.duration / 60))} phút</strong>Thời gian của bạn</span></div><div class="result-actions">${button(`Xem tiến bộ ${icon("arrow")}`, "nav", "primary", 'data-view="progress"')}${button("Học lại chủ đề", "open-lesson", "secondary", `data-lesson="${r.lessonId}"`)}</div></section><section class="card evidence-summary"><h3>Căn cứ của phiên học</h3>${evidenceHistory(r)}<div class="tip-box">${icon("shield")}<p>Nhận xét chỉ áp dụng cho những câu vừa kiểm tra, chưa phản ánh toàn bộ mức độ hiểu.</p></div></section></div>`;
  }

  function evidenceHistory(s) {
    return `<ol class="evidence-timeline">${s.history.map((h) => `<li><span class="timeline-dot ${h.correct ? "correct" : ""}">${icon(h.correct ? "check" : "pen")}</span><div><span class="tiny-label">${h.phase === "base" ? "LÀM BÀI" : h.phase === "probe" ? "XÁC MINH" : "VẬN DỤNG"}</span><p>${esc(h.prompt)}</p><span class="answer-evidence">Bạn chọn: <strong>${esc(h.answer)}</strong> · ${h.correct ? "Đúng" : `Cần xem lại · Đáp án: ${esc(h.expected)}`}</span></div></li>`).join("")}</ol>`;
  }

  function progressView() {
    const { state, data, lessonFor } = readContext();
    const sessions = data.sessions,
      supported = sessions.filter((s) => s.status === "supported").length;
    return `${pageHeading("NHÌN LẠI ĐỂ ĐI XA HƠN", state.role === "student" ? "Tiến bộ có căn cứ." : "Căn cứ học tập trên thiết bị.", "Mỗi nhận xét đi cùng câu trả lời, thời điểm và mức hỗ trợ đã sử dụng.", button(`${icon("download")} Xuất kết quả`, "export", "secondary small", sessions.length ? "" : "disabled"))}<div class="metric-grid"><div class="metric-card card"><span class="metric-icon">${icon("pen")}</span><span class="metric-value">${sessions.length}</span><span>Phiên học đã hoàn thành</span></div><div class="metric-card card"><span class="metric-icon">${icon("check")}</span><span class="metric-value">${supported}</span><span>Phiên có bằng chứng làm đúng</span></div><div class="metric-card card"><span class="metric-icon">${icon("book")}</span><span class="metric-value">${data.completed.length}<small> / ${lessons.length}</small></span><span>Chủ đề đã học hết các phần</span></div></div><div class="progress-layout"><section><div class="section-heading"><h2>Hành trình học tập</h2><span class="tag gray">${sessions.length ? "Dữ liệu của bạn" : "Chưa có dữ liệu"}</span></div>${
      sessions.length
        ? `<div class="evidence-list">${[...sessions]
            .reverse()
            .map(
              (s) =>
                `<article class="evidence-item card"><div class="evidence-heading"><span class="tag ${s.status === "supported" ? "green" : s.status === "practice" ? "amber" : "gray"}">${s.status === "supported" ? "Có bằng chứng làm đúng" : s.status === "practice" ? "Cần luyện thêm" : "Chưa đủ bằng chứng"}</span><time>${dateLabel(s.time)}</time></div><h3>${esc(lessonFor(s.lessonId).shortTitle)}</h3><p class="evidence-detail">${esc(s.detail)}</p><div class="evidence-footer"><span>${s.history.length} câu · ${s.hints} lượt mở gợi ý</span>${button(`Xem căn cứ ${icon("right")}`, "evidence", "ghost small", `data-id="${s.id}"`)}</div></article>`,
            )
            .join("")}</div>`
        : `<div class="empty-state card">${icon("leaf")}<h3>Hành trình của bạn bắt đầu từ đây</h3><p>Hoàn thành một phiên luyện tập để xem câu trả lời<br>và những điều bạn cần luyện thêm.</p>${button("Luyện một câu đầu tiên", "start-practice", "primary", 'data-lesson="values"')}</div>`
    }</section><aside><section class="teacher-note-preview">${icon("shield")}<p><strong>Tiến bộ không chỉ là điểm số.</strong><span>Câu trả lời đúng sau gợi ý vẫn cần được kiểm tra bằng một bài độc lập.</span></p></section>${
      data.notes.length
        ? `<section class="card"><h3>Nhận xét đã ghi (${data.notes.length})</h3>${data.notes.map((n) => `<p class="muted small-text">${esc(n.text)}</p>`).join("")}</section>`
        : ""
    }</aside></div>${knowledgeMap(lessons, data)}`;
  }

  return { practiceView, resultView, progressView, evidenceHistory };
}
