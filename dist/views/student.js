import { lessons } from "../learning.js";
import { icon } from "../ui/icons.js";
import {
  button,
  pageHeading,
  todayLabel,
  todayIndex,
} from "../ui/helpers.js";
import { circleVisual, visual, slideVisual } from "../ui/visuals.js";
import { esc } from "../ui/dom.js";

function formatExampleBox(exampleText) {
  if (!exampleText) return "";
  const parts = exampleText.split(/\n•\s*/);
  if (parts.length <= 1) {
    return `<div class="example-box"><strong>${icon("pen")} Ví dụ minh họa</strong><div class="example-content">${esc(exampleText)}</div></div>`;
  }
  const intro = parts[0].trim();
  const steps = parts.slice(1).map((p) => p.trim());

  return `<div class="example-box step-interactive-box" data-step-total="${steps.length}" data-active-step="0">
    <div class="example-box-header">
      <strong>${icon("pen")} Ví dụ giải từng bước</strong>
      <div class="step-pill-group" role="tablist" aria-label="Các bước giải">
        ${steps
          .map(
            (_, idx) =>
              `<button type="button" class="step-pill ${idx === 0 ? "active" : ""}" data-step-target="${idx}" role="tab" aria-selected="${idx === 0}">Bước ${idx + 1}</button>`,
          )
          .join("")}
      </div>
    </div>
    ${intro ? `<div class="example-intro"><span class="example-intro-badge">Đề bài</span> <span class="example-intro-text">${esc(intro)}</span></div>` : ""}
    <div class="example-content step-cards">
      ${steps
        .map((step, idx) => {
          const colonIdx = step.indexOf(":");
          const stepLabel = colonIdx > -1 && colonIdx < 30 ? step.slice(0, colonIdx) : `Bước ${idx + 1}`;
          const stepBody = colonIdx > -1 && colonIdx < 30 ? step.slice(colonIdx + 1).trim() : step;
          return `<div class="step-card ${idx === 0 ? "active" : "step-collapsed"}" data-step-index="${idx}">
            <div class="step-card-lead">
              <span class="step-num">${esc(stepLabel)}</span>
              <span class="step-reason-hint">${icon("bulb")} Thao tác & suy luận</span>
            </div>
            <div class="step-card-body">${esc(stepBody)}</div>
          </div>`;
        })
        .join("")}
    </div>
    <div class="step-actions">
      <button type="button" class="btn-step btn-step-prev" data-example-btn="prev" disabled>${icon("left")} Quay lại</button>
      <button type="button" class="btn-step btn-step-next" data-example-btn="next">Xem bước tiếp theo ${icon("right")}</button>
      <button type="button" class="btn-step btn-step-toggle" data-example-btn="toggle-all">Hiện toàn bộ</button>
    </div>
  </div>`;
}

function formatFormula(formulaText) {
  if (!formulaText) return "";
  const pattern = /(a\s*≠\s*0|a²\s*\+\s*b²\s*≠\s*0|90°\s*<\s*α\s*<\s*180°|sin²\s*α\s*\+\s*cos²\s*α\s*=\s*1|∀|∃|Δ\s*>\s*0|Δ\s*=\s*0|Δ\s*<\s*0)/g;
  const escaped = esc(formulaText);
  const highlighted = escaped.replace(
    pattern,
    (match) => `<span class="notebook-pen-mark" data-pen="underline">${match}</span>`,
  );
  return `<div class="formula-block">${highlighted}</div>`;
}

export function createStudentViews(readContext) {
  function goalRing() {
    const { data, thisWeekSessions } = readContext();
    const n = thisWeekSessions().length,
      pct = Math.min(n / data.goal, 1);
    return `<div class="goal-ring"><svg viewBox="0 0 160 160" aria-label="${n} trên ${data.goal} phiên luyện"><circle cx="80" cy="80" r="62" fill="none" stroke="#edf1eb" stroke-width="10"/><circle cx="80" cy="80" r="62" fill="none" stroke="#146b50" stroke-width="10" stroke-dasharray="${pct * 390} 390" stroke-linecap="round" transform="rotate(-90 80 80)"/></svg><div class="goal-ring-label"><strong>${n}<small> / ${data.goal}</small></strong><span>phiên luyện</span></div></div>`;
  }

  function home() {
    const { data } = readContext();
    const done = data.completed.length,
      sessionCount = data.sessions.length;

    return `<div class="welcome-row"><div><div class="eyebrow">MỖI NGÀY, HIỂU THÊM MỘT CHÚT</div><h1>Chào bạn, cùng học nhé! <span class="greeting-leaf">${icon("leaf")}</span></h1><p class="muted">Bắt đầu từ điều bạn tò mò. Tiến bộ từ điều bạn đã hiểu.</p></div><span class="date-chip">${icon("calendar")} ${todayLabel()}</span></div>
    <div class="dashboard-hero"><section class="hero-card"><div class="hero-copy"><div class="hero-kicker"><span class="status-dot"></span> GÓC HỌC TẬP CỦA BẠN</div><h2>Hiểu bản chất.<br><span>Tự tin giải bài.</span></h2><p>Khám phá toàn bộ 9 chương Toán 10 Kết nối tri thức qua từng slide<br class="desktop-break"> và tìm ra cách học phù hợp với bạn.</p><div class="hero-bottom">${button(`Bắt đầu học ${icon("arrow")}`, "open-lesson", "primary", 'data-lesson="propositions"')}<span class="hero-meta">${icon("clock")} 8–10 phút học mỗi ngày</span></div></div><div class="hero-visual">${circleVisual(130, true)}<div class="floating-formula">sin² α + cos² α = 1 <span>✓</span></div></div><span class="hero-corner">01 / HÀNH TRÌNH HIỂU THẬT</span></section>
    <section class="goal-card card"><div class="section-heading"><h3>Mục tiêu 7 ngày</h3><button class="icon-button" data-action="goal" aria-label="Điều chỉnh mục tiêu">${icon("settings")}</button></div>${goalRing()}<p class="goal-caption">${data.sessions.length >= data.goal ? "Bạn đã hoàn thành mục tiêu!" : "Một bước nhỏ hôm nay, một thay đổi ngày mai."}</p><div class="week-dots">${["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map((d, i) => `<span class="${i === todayIndex() ? "today" : ""}">${d}<i>${i === todayIndex() ? "•" : ""}</i></span>`).join("")}</div></section></div>
    <div class="stats-strip"><div class="stat-item"><span class="stat-icon">${icon("book")}</span><div><span class="stat-value">${done}<small> / ${lessons.length}</small></span><span class="stat-label">Bài học đã xem xong</span></div></div><div class="stat-item"><span class="stat-icon amber">${icon("pen")}</span><div><span class="stat-value">${sessionCount.toString().padStart(2, "0")}</span><span class="stat-label">Phiên luyện đã hoàn thành</span></div></div><div class="stat-item"><span class="stat-icon purple">${icon("shield")}</span><div><span class="stat-value">${data.sessions
      .filter((s) => s.status === "supported")
      .length.toString()
      .padStart(
        2,
        "0",
      )}</span><span class="stat-label">Phiên có bằng chứng làm đúng</span></div></div></div>
    <div class="dashboard-bottom"><section><div class="section-heading"><div><h2>Lộ trình học tập</h2><p class="muted">Toán 10 KNTT · ${lessons.length} chủ đề từng bước nắm chắc kiến thức</p></div>${button(`Xem tất cả ${icon("right")}`, "nav", "ghost small", 'data-view="lessons"')}</div><div class="lesson-list">${lessons.map((l, i) => lessonRow(l, i)).join("")}</div></section>
    <aside><div class="section-heading"><h2>Góc hiểu sâu</h2><span class="tiny-label">DÀNH CHO BẠN</span></div><section class="insight-card"><div class="insight-icon">${icon("bulb")}</div><span class="eyebrow">MỘT CÂU HỎI NHỎ</span><h3>Đáp án đúng đã đủ<br>để hiểu thật?</h3><p>Thử giải thích <em>vì sao</em> bạn chọn đáp án đó. Một câu hỏi xác minh sẽ giúp bạn nhận ra điều mình đã nắm chắc.</p><div class="insight-footer">${button(`Thử một câu nhé ${icon("arrow")}`, "start-practice", "secondary small", 'data-lesson="values"')}</div></section><div class="teacher-note-preview">${icon("shield")}<p><strong>Mỗi nhận xét đều có căn cứ.</strong><span>Hiểu Thật ghi lại câu trả lời để bạn tự kiểm tra tiến bộ của mình.</span></p></div></aside></div>`;
  }

  function lessonRow(l, i) {
    const { data, lessonIcon } = readContext();
    const complete = data.completed.includes(l.id),
      p = complete
        ? 100
        : Math.round(
            ((data.visited[l.id] || []).length / l.slides.length) * 100,
          );
    return `<article class="lesson-row"><div class="lesson-icon tone-${i % 8}">${icon(lessonIcon(l.id))}</div><div class="lesson-info"><div class="lesson-meta">${esc(l.chapterTitle || `CHỦ ĐỀ ${String(i + 1).padStart(2, "0")}`)} <span>·</span> ${l.slides.length} slide</div><h3>${esc(l.shortTitle)}</h3><p class="muted">${esc(l.description)}</p></div><div class="lesson-progress"><span>${complete ? "Đã xem xong" : p ? `${p}% đã xem` : "Sẵn sàng học"}</span><div class="mini-track"><i style="width:${p}%"></i></div></div><button class="icon-button lesson-open" data-action="open-lesson" data-lesson="${l.id}" aria-label="Học ${esc(l.shortTitle)}">${icon("right")}</button></article>`;
  }

  function lessonView() {
    const { state, data, lessonFor } = readContext();

    if (!state.activeLesson) {
      const chapters = [
        { id: "all", name: "Tất cả các chương (9 chương)" },
        { id: "chuong-1", name: "Chương I: Mệnh đề và tập hợp" },
        { id: "chuong-2", name: "Chương II: Bất phương trình bậc nhất hai ẩn" },
        { id: "chuong-3", name: "Chương III: Hệ thức lượng trong tam giác" },
        { id: "chuong-4", name: "Chương IV: Vectơ" },
        { id: "chuong-5", name: "Chương V: Các số đặc trưng mẫu số liệu" },
        { id: "chuong-6", name: "Chương VI: Hàm số và tam thức bậc hai" },
        { id: "chuong-7", name: "Chương VII: Phương pháp tọa độ Oxy" },
        { id: "chuong-8", name: "Chương VIII: Đại số tổ hợp" },
        { id: "chuong-9", name: "Chương IX: Xác suất cổ điển" },
      ];
      const selectedChapter = state.chapterFilter || "all";
      const displayLessons =
        selectedChapter === "all"
          ? lessons
          : lessons.filter((l) => l.chapterId === selectedChapter);

      return `${pageHeading("KHÁM PHÁ & HIỂU", "Một bài học, một điều sáng tỏ.", "Slide ngắn gọn, hình vẽ trực quan và câu hỏi để bạn tự kiểm tra.")}<div class="filter-row"><span class="tag green">Toán 10 KNTT</span><label for="chapter-filter" class="screen-reader-only">Chọn chương</label><select id="chapter-filter" class="filter-select"><option value="all">Tất cả các chương (${lessons.length} chủ đề)</option>${chapters.slice(1).map((ch) => `<option value="${ch.id}" ${selectedChapter === ch.id ? "selected" : ""}>${esc(ch.name)}</option>`).join("")}</select><span class="muted">${displayLessons.length} chủ đề · ${displayLessons.flatMap((l) => l.slides).length} slide</span></div><div class="lesson-grid">${displayLessons.map((l, i) => `<article class="course-card card"><div class="course-cover tone-${i % 8}">${visual(l.slides[0].visual)}</div><div class="course-body"><div class="lesson-meta">${esc(l.lessonNumber || `CHỦ ĐỀ 0${i + 1}`)} · ${esc(l.chapterTitle?.split(":")[0] || "")} ${data.completed.includes(l.id) ? '<span class="tag green">Đã xem xong</span>' : ""}</div><h2>${esc(l.shortTitle)}</h2><p class="muted">${esc(l.description)}</p><div class="course-footer"><span>${icon("clock")} ${esc(l.duration)} · ${l.slides.length} slide</span>${button(icon("arrow"), "open-lesson", "primary small", `data-lesson="${l.id}" aria-label="Học ${esc(l.shortTitle)}"`)}</div></div></article>`).join("")}</div><div class="learning-tip">${icon("bulb")}<p><strong>Học theo nhịp của bạn.</strong> Dùng phím ← → để chuyển slide, hoặc bật chế độ trình chiếu để tập trung hơn.</p></div>`;
    }

    const l = lessonFor(state.lesson),
      s = l.slides[state.slide];
    return `<div class="lesson-topbar">${button(`${icon("left")} Bài học`, "lesson-list", "ghost small")}<span class="tag green">Toán 10 · ${esc(l.shortTitle)}</span>${button(`${icon(state.presentation ? "close" : "fullscreen")} ${state.presentation ? "Thoát trình chiếu" : "Trình chiếu"}`, "presentation", "secondary small")}</div><div class="slide-workspace"><aside class="slide-outline"><span class="eyebrow">NỘI DUNG BÀI HỌC</span>${l.slides.map((s, i) => `<button class="slide-step ${i === state.slide ? "active" : ""} ${(data.visited[l.id] || []).includes(i) ? "done" : ""}" data-action="goto-slide" data-index="${i}" ${i === state.slide ? 'aria-current="step"' : ""}><span>${(data.visited[l.id] || []).includes(i) && i !== state.slide ? icon("check") : String(i + 1).padStart(2, "0")}</span><strong>${esc(s.eyebrow)}</strong></button>`).join("")}<div class="outline-footer">${icon("clock")} ${esc(l.duration)}<br><small>Đi từng bước, hiểu thật sâu.</small></div></aside><section class="slide-stage"><div class="slide-topline"><span>HIỂU THẬT / ${esc(l.shortTitle).toUpperCase()}</span><span>${String(state.slide + 1).padStart(2, "0")} / ${String(l.slides.length).padStart(2, "0")}</span></div><div class="slide-content"><div class="slide-text"><span class="eyebrow">${esc(s.eyebrow)}</span><h2>${esc(s.title)}</h2><p>${esc(s.body)}</p>${formatFormula(s.formula)}${formatExampleBox(s.example)}${s.advanced ? `<div class="advanced-box"><strong>${icon("shield")} Bài toán nâng cao & Phương pháp</strong><div class="advanced-content">${esc(s.advanced)}</div></div>` : ""}<div class="tip-box">${icon("bulb")}<p>${esc(s.tip)}</p></div></div><div class="slide-visual">${slideVisual(l, state.slide, s, state.interactiveAngle)}</div></div><div class="slide-toolbar">${button(`${icon("left")} Quay lại`, "prev-slide", "ghost small", state.slide === 0 ? "disabled" : "")}<div class="slide-dots">${l.slides.map((_, i) => `<button class="${state.slide === i ? "active" : ""}" data-action="goto-slide" data-index="${i}" aria-label="Slide ${i + 1}" aria-pressed="${state.slide === i}"></button>`).join("")}</div>${state.slide === l.slides.length - 1 ? button(`Luyện tập ngay ${icon("arrow")}`, "finish-lesson", "primary small") : button(`Tiếp theo ${icon("right")}`, "next-slide", "primary small")}</div></section></div>`;
  }

  return { home, lessonRow, lessonView };
}
