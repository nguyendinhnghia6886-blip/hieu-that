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
import { questionBank } from "../learning.js";
import { skillLabels } from "../content/labels.js";
export function createTeacherViews(readContext) {
  function teacherHome() {
    const { state, data, lessonFor } = readContext();
    const activeAlerts = (data.teacherAlerts || []).filter((a) => !a.resolved);
    return `${pageHeading("ĐỒNG HÀNH CÙNG NGƯỜI HỌC", "Hiểu học sinh từ từng câu trả lời.", "Xem căn cứ, điều chỉnh nhận xét và chuẩn bị bài luyện phù hợp.")}<div class="demo-notice">${icon("shield")}Không gian giáo viên minh họa. Hiện đang xem dữ liệu học trên chính trình duyệt này.</div><div class="metric-grid">${[
      [data.sessions.length, "Phiên học đã ghi nhận", "pen"],
      [
        data.sessions.filter((s) => s.status !== "supported").length,
        "Phiên cần xem lại căn cứ",
        "target",
      ],
      [data.approved.length, "Câu hỏi đã duyệt trong bản thử", "book"],
    ]
      .map(
        ([v, l, i]) =>
          `<div class="metric-card card"><span class="metric-icon">${icon(i)}</span><span class="metric-value">${v}</span><span>${l}</span></div>`,
      )
      .join(
        "",
      )}</div>${
      activeAlerts.length
        ? `<section class="card alert-card"><div class="section-heading"><div><h2>Tin nhắn cần hỗ trợ từ học sinh</h2><p class="muted">Học sinh làm sai câu xác minh, cần giáo viên giải thích điểm nghẽn nhận thức.</p></div><span class="tag amber">${activeAlerts.length} cần hỗ trợ</span></div><div class="teacher-alerts-list">${activeAlerts
            .map(
              (a) =>
                `<div class="teacher-alert-item" data-id="${esc(a.id)}"><div class="alert-meta"><span class="avatar amber">!</span><div><strong>${esc(a.studentName || "Học sinh")} · Bài: ${esc(a.lessonTitle)}</strong><p class="alert-desc"><strong>Câu hỏi bị sai:</strong> “${esc(a.questionPrompt || a.wrongQuestionPrompt || "")}”</p><p class="alert-misconception"><strong>Chưa hiểu ở:</strong> ${esc(a.misconception)}</p><span class="tiny-label muted">${new Date(a.time || a.timestamp || Date.now()).toLocaleTimeString("vi-VN")}</span></div></div>${button("Đã hỗ trợ", "resolve-alert", "secondary small", `data-id="${esc(a.id)}"`)}</div>`,
            )
            .join("")}</div></section>`
        : ""
    }<div class="teacher-grid"><section class="card teacher-overview"><div class="section-heading"><h2>Căn cứ gần đây</h2>${button("Xem tất cả", "nav", "ghost small", 'data-view="progress"')}</div>${
      data.sessions.length
        ? [...data.sessions]
            .reverse()
            .slice(0, 4)
            .map(
              (s) =>
                `<div class="teacher-session"><span class="avatar">B</span><div><strong>Người học · ${esc(lessonFor(s.lessonId).shortTitle)}</strong><p class="muted">${esc(s.title)}</p></div>${button("Xem", "evidence", "secondary small", `data-id="${s.id}"`)}</div>`,
            )
            .join("")
        : '<div class="empty-state"><p>Chưa có phiên học nào. Chuyển sang Học sinh và làm một bài để xem dòng thời gian tư duy tại đây.</p></div>'
    }</section><section class="card note-card"><span class="eyebrow">GHI CHÚ SƯ PHẠM</span><h2>Một lời nhắc đúng lúc.</h2><p class="muted">Gắn nhận xét với câu trả lời cụ thể để người học biết nên luyện gì tiếp theo.</p><label class="field">Nhận xét cho người học<textarea id="teacher-note" rows="4" placeholder="Ví dụ: Em đã dùng đúng hệ thức, hãy kiểm tra thêm dấu của cos khi góc tù…"></textarea></label>${button("Lưu nhận xét", "save-note", "primary")}</section></div>`;
  }
  function libraryView() {
    const { state, data, lessonFor } = readContext();
    const q = questionBank[0];
    return `${pageHeading("CHẤT LƯỢNG TỪ TỪNG CÂU HỎI", "Thư viện & duyệt nội dung.", "Nội dung mẫu được soạn sẵn. Cần giáo viên rà soát trước khi sử dụng chính thức.")}<div class="filter-row"><label for="library-filter" class="screen-reader-only">Lọc chủ đề</label><select id="library-filter"><option value="all">Tất cả chủ đề</option>${lessons.map((l) => `<option value="${l.id}" ${state.filter === l.id ? "selected" : ""}>${esc(l.shortTitle)}</option>`).join("")}</select><span class="tag gray">${questionBank.length} câu hỏi mẫu</span><span class="tag green">${data.approved.length} đã duyệt thử</span></div><div class="table-wrap card"><table class="data-table"><thead><tr><th>Câu hỏi & mục tiêu</th><th>Chủ đề</th><th>Trạng thái</th><th><span class="screen-reader-only">Thao tác</span></th></tr></thead><tbody>${questionBank
      .filter((q) => state.filter === "all" || q.lessonId === state.filter)
      .map(
        (q) =>
          `<tr><td><strong>${esc(q.prompt)}</strong><small>${esc(skillLabels[q.skill] || q.skill)}</small></td><td>${esc(lessonFor(q.lessonId).shortTitle)}</td><td><span class="tag ${data.approved.includes(q.id) ? "green" : "amber"}">${data.approved.includes(q.id) ? "Đã duyệt thử" : "Chờ rà soát"}</span></td><td>${button("Xem & duyệt", "review", "secondary small", `data-id="${q.id}"`)}</td></tr>`,
      )
      .join(
        "",
      )}</tbody></table></div><div class="learning-tip">${icon("sparkle")}<p>Bản trải nghiệm dùng thư viện và quy tắc có sẵn. Chưa kết nối dịch vụ AI; việc duyệt hiện chỉ lưu trên trình duyệt này.</p></div>`;
  }
  function settingsView() {
    const { data, storageAvailable } = readContext();
    return `${pageHeading("THEO NHỊP HỌC CỦA BẠN", "Cài đặt trải nghiệm.", "Quản lý mục tiêu và dữ liệu được lưu trên trình duyệt này.")}<div class="settings-grid"><section class="card settings-card"><h2>Mục tiêu học tập</h2><p class="muted">Số phiên luyện bạn muốn hoàn thành trong 7 ngày.</p><label class="field">Mục tiêu<select id="goal-select">${[2, 3, 5, 7].map((n) => `<option value="${n}" ${data.goal === n ? "selected" : ""}>${n} phiên / 7 ngày</option>`).join("")}</select></label>${button("Lưu mục tiêu", "save-goal", "primary")}</section><section class="card settings-card"><h2>Dữ liệu của bạn</h2><p class="muted">${storageAvailable ? "Kết quả đang được lưu cục bộ trong trình duyệt." : "Trình duyệt chưa cho phép lưu lâu dài."} Xuất dữ liệu nếu bạn muốn giữ một bản riêng.</p><div class="settings-actions">${button(`${icon("download")} Xuất kết quả JSON`, "export", "secondary")}<label class="button secondary">${icon("book")} Nhập dữ liệu JSON<input type="file" id="import-json-file" accept="application/json,.json" class="screen-reader-only"></label>${button("Xóa dữ liệu trải nghiệm", "reset-confirm", "ghost danger")}</div><p class="small-text muted">Chuyển vai trò chỉ dùng để xem thử giao diện, không phải phân quyền bảo mật.</p></section></div>`;
  }

  return { teacherHome, libraryView, settingsView };
}
