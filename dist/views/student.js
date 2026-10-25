import { lessons } from "../learning.js";
import { icon } from "../ui/icons.js";
import {
  button,
  pageHeading,
  dateLabel,
  todayLabel,
  todayIndex,
} from "../ui/helpers.js";
import { circleVisual, visual, slideVisual } from "../ui/visuals.js";
import { esc } from "../ui/dom.js";
export function createStudentViews(readContext) {
  function goalRing() {
    const { data, thisWeekSessions } = readContext();
    const n = thisWeekSessions().length,
      pct = Math.min(n / data.goal, 1);
    return `<div class="goal-ring"><svg viewBox="0 0 160 160" aria-label="${n} trên ${data.goal} phiên luyện"><circle cx="80" cy="80" r="62" fill="none" stroke="#edf1eb" stroke-width="10"/><circle cx="80" cy="80" r="62" fill="none" stroke="#146b50" stroke-width="10" stroke-dasharray="${pct * 390} 390" stroke-linecap="round" transform="rotate(-90 80 80)"/></svg><div class="goal-ring-label"><strong>${n}<small> / ${data.goal}</small></strong><span>phiên luyện</span></div></div>`;
  }
  function home() {
    const { state, data, practice, thisWeekSessions, lessonFor } =
      readContext();

    const latest = lessonFor(state.lesson),
      done = data.completed.length,
      sessionCount = data.sessions.length;
    return `<div class="welcome-row"><div><div class="eyebrow">MỖI NGÀY, HIỂU THÊM MỘT CHÚT</div><h1>Chào bạn, cùng học nhé! <span class="greeting-leaf">${icon("leaf")}</span></h1><p class="muted">Bắt đầu từ điều bạn tò mò. Tiến bộ từ điều bạn đã hiểu.</p></div><span class="date-chip">${icon("calendar")} ${todayLabel()}</span></div>
    <div class="dashboard-hero"><section class="hero-card"><div class="hero-copy"><div class="hero-kicker"><span class="status-dot"></span> GÓC HỌC TẬP CỦA BẠN</div><h2>Hiểu bản chất.<br><span>Tự tin giải bài.</span></h2><p>Cùng khám phá lượng giác qua từng slide<br class="desktop-break"> và tìm ra cách học phù hợp với bạn.</p><div class="hero-bottom">${button(`Bắt đầu học ${icon("arrow")}`, "open-lesson", "primary", 'data-lesson="values"')}<span class="hero-meta">${icon("clock")} 8 phút học mỗi ngày</span></div></div><div class="hero-visual">${circleVisual(130, true)}<div class="floating-formula">sin² α + cos² α = 1 <span>✓</span></div></div><span class="hero-corner">01 / HÀNH TRÌNH HIỂU THẬT</span></section>
    <section class="goal-card card"><div class="section-heading"><h3>Mục tiêu 7 ngày</h3><button class="icon-button" data-action="goal" aria-label="Điều chỉnh mục tiêu">${icon("settings")}</button></div>${goalRing()}<p class="goal-caption">${thisWeekSessions().length >= data.goal ? "Bạn đã hoàn thành mục tiêu!" : "Một bước nhỏ hôm nay, một thay đổi ngày mai."}</p><div class="week-dots">${["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map((d, i) => `<span class="${i === todayIndex() ? "today" : ""}">${d}<i>${i === todayIndex() ? "•" : ""}</i></span>`).join("")}</div></section></div>
    <div class="stats-strip"><div class="stat-item"><span class="stat-icon">${icon("book")}</span><div><span class="stat-value">${done}<small> / 3</small></span><span class="stat-label">Bài học đã xem xong</span></div></div><div class="stat-item"><span class="stat-icon amber">${icon("pen")}</span><div><span class="stat-value">${sessionCount.toString().padStart(2, "0")}</span><span class="stat-label">Phiên luyện đã hoàn thành</span></div></div><div class="stat-item"><span class="stat-icon purple">${icon("shield")}</span><div><span class="stat-value">${data.sessions
      .filter((s) => s.status === "supported")
      .length.toString()
      .padStart(
        2,
        "0",
      )}</span><span class="stat-label">Phiên có bằng chứng làm đúng</span></div></div></div>
    <div class="dashboard-bottom"><section><div class="section-heading"><div><h2>Lộ trình học tập</h2><p class="muted">Toán 10 · Từng bước nắm chắc kiến thức</p></div>${button(`Xem tất cả ${icon("right")}`, "nav", "ghost small", 'data-view="lessons"')}</div><div class="lesson-list">${lessons.map((l, i) => lessonRow(l, i)).join("")}</div></section>
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
    return `<article class="lesson-row"><div class="lesson-icon tone-${i}">${icon(lessonIcon(l.id))}</div><div class="lesson-info"><div class="lesson-meta">CHỦ ĐỀ ${String(i + 1).padStart(2, "0")} <span>·</span> ${l.slides.length} slide</div><h3>${esc(l.shortTitle)}</h3><p class="muted">${esc(l.description)}</p></div><div class="lesson-progress"><span>${complete ? "Đã xem xong" : p ? `${p}% đã xem` : "Sẵn sàng học"}</span><div class="mini-track"><i style="width:${p}%"></i></div></div><button class="icon-button lesson-open" data-action="open-lesson" data-lesson="${l.id}" aria-label="Học ${esc(l.shortTitle)}">${icon("right")}</button></article>`;
  }
  function lessonView() {
    const { state, data, workspace, lessonFor } = readContext();

    if (!state.activeLesson)
      return `${pageHeading("KHÁM PHÁ & HIỂU", "Một bài học, một điều sáng tỏ.", "Slide ngắn gọn, hình vẽ trực quan và câu hỏi để bạn tự kiểm tra.")}<div class="filter-row"><span class="tag green">Toán 10</span><span class="tag gray">Lượng giác & hệ thức lượng</span><span class="muted">3 chủ đề · 15 slide</span></div><div class="lesson-grid">${lessons.map((l, i) => `<article class="course-card card"><div class="course-cover tone-${i}">${visual(l.slides[0].visual)}</div><div class="course-body"><div class="lesson-meta">CHỦ ĐỀ 0${i + 1} ${data.completed.includes(l.id) ? '<span class="tag green">Đã xem xong</span>' : ""}</div><h2>${esc(l.shortTitle)}</h2><p class="muted">${esc(l.description)}</p><div class="course-footer"><span>${icon("clock")} ${esc(l.duration)} · ${l.slides.length} slide</span>${button(icon("arrow"), "open-lesson", "primary small", `data-lesson="${l.id}" aria-label="Học ${esc(l.shortTitle)}"`)}</div></div></article>`).join("")}</div><div class="learning-tip">${icon("bulb")}<p><strong>Học theo nhịp của bạn.</strong> Dùng phím ← → để chuyển slide, hoặc bật chế độ trình chiếu để tập trung hơn.</p></div>`;
    const l = lessonFor(state.lesson),
      s = l.slides[state.slide];
    return `<div class="lesson-topbar">${button(`${icon("left")} Bài học`, "lesson-list", "ghost small")}<span class="tag green">Toán 10 · ${esc(l.shortTitle)}</span>${button(`${icon(state.presentation ? "close" : "fullscreen")} ${state.presentation ? "Thoát trình chiếu" : "Trình chiếu"}`, "presentation", "secondary small")}</div><div class="slide-workspace"><aside class="slide-outline"><span class="eyebrow">NỘI DUNG BÀI HỌC</span>${l.slides.map((s, i) => `<button class="slide-step ${i === state.slide ? "active" : ""} ${(data.visited[l.id] || []).includes(i) ? "done" : ""}" data-action="goto-slide" data-index="${i}" ${i === state.slide ? 'aria-current="step"' : ""}><span>${(data.visited[l.id] || []).includes(i) && i !== state.slide ? icon("check") : String(i + 1).padStart(2, "0")}</span><strong>${esc(s.eyebrow)}</strong></button>`).join("")}<div class="outline-footer">${icon("clock")} ${esc(l.duration)}<br><small>Đi từng bước, hiểu thật sâu.</small></div></aside><section class="slide-stage"><div class="slide-topline"><span>HIỂU THẬT / ${esc(l.shortTitle).toUpperCase()}</span><span>${String(state.slide + 1).padStart(2, "0")} / ${String(l.slides.length).padStart(2, "0")}</span></div><div class="slide-content"><div class="slide-text"><span class="eyebrow">${esc(s.eyebrow)}</span><h2>${esc(s.title)}</h2><p>${esc(s.body)}</p>${s.formula ? `<div class="formula-block">${esc(s.formula)}</div>` : ""}<div class="tip-box">${icon("bulb")}<p>${esc(s.tip)}</p></div></div><div class="slide-visual">${slideVisual(l, state.slide, s, state.interactiveAngle)}</div></div><div class="slide-toolbar">${button(`${icon("left")} Quay lại`, "prev-slide", "ghost small", state.slide === 0 ? "disabled" : "")}<div class="slide-dots">${l.slides.map((_, i) => `<button class="${state.slide === i ? "active" : ""}" data-action="goto-slide" data-index="${i}" aria-label="Slide ${i + 1}" aria-pressed="${state.slide === i}"></button>`).join("")}</div>${state.slide === l.slides.length - 1 ? button(`Luyện tập ngay ${icon("arrow")}`, "finish-lesson", "primary small") : button(`Tiếp theo ${icon("right")}`, "next-slide", "primary small")}</div></section></div>`;
  }

  return { home, lessonRow, lessonView };
}
