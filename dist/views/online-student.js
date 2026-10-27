import { esc } from "../ui/dom.js";
import { icon } from "../ui/icons.js";

const letters = ["A", "B", "C", "D"];

const field = (label, html) =>
  `<label class="field"><span>${label}</span>${html}</label>`;
const onlineBtn = (label, action, extra = "", type = "secondary") =>
  `<button type="button" class="button ${type}" data-online="${action}" ${extra}>${label}</button>`;

export const formatDate = (value) =>
  value
    ? new Date(value).toLocaleString("vi-VN", { timeZone: "Asia/Bangkok" })
    : "Không đặt hạn";

export const formatScore = (score) =>
  score === null || score === undefined || score === ""
    ? null
    : Number(score).toLocaleString("vi-VN");

export const isExpired = (due) =>
  Boolean(due && Date.now() > new Date(due).getTime());

export function submissionFor(snapshot, assignmentId) {
  if (!snapshot?.submissions || !snapshot?.profile) return null;
  return (
    snapshot.submissions.find(
      (s) =>
        s.assignment_id === assignmentId &&
        s.student_id === snapshot.profile.id,
    ) || null
  );
}

export function teacherFor(snapshot, teacherId) {
  return snapshot?.members?.find((m) => m.id === teacherId) || null;
}

export function assignmentStatus(assignment, submission) {
  if (submission) {
    if (submission.score === null || submission.pending > 0) {
      return {
        key: "pending",
        label: `Đã nộp · Chờ chấm (${submission.pending} câu tự luận)`,
        tag: "amber",
      };
    }
    return {
      key: "graded",
      label: `Đã có điểm · ${formatScore(submission.score)}/10`,
      tag: "green",
    };
  }
  if (isExpired(assignment.due)) {
    return {
      key: "expired",
      label: "Đã quá hạn nộp",
      tag: "gray",
    };
  }
  return {
    key: "todo",
    label: "Chưa làm",
    tag: "green",
  };
}

export function studentOverview(ctx) {
  const { snapshot, drafts } = ctx;
  const profile = snapshot.profile;
  const assignments = snapshot.assignments || [];
  const submissions = snapshot.submissions || [];
  const members = snapshot.members || [];

  const todoAssignments = assignments.filter(
    (a) => !submissionFor(snapshot, a.id) && !isExpired(a.due),
  );
  const expiredUnsubmitted = assignments.filter(
    (a) => !submissionFor(snapshot, a.id) && isExpired(a.due),
  );
  const withDue = todoAssignments
    .filter((a) => a.due)
    .sort((a, b) => new Date(a.due).getTime() - new Date(b.due).getTime());
  const nearestDue = withDue[0] || null;

  const pendingSubmissions = submissions.filter(
    (s) => s.score === null || s.pending > 0,
  );
  const gradedSubmissions = submissions
    .filter((s) => s.score !== null)
    .sort(
      (a, b) =>
        new Date(b.reviewed_at || b.created_at || 0).getTime() -
        new Date(a.reviewed_at || a.created_at || 0).getTime(),
    );
  const latestGraded = gradedSubmissions[0] || null;

  return `<div class="welcome-row">
    <div>
      <div class="eyebrow">KHÔNG GIAN HỌC TẬP · HỌC SINH</div>
      <h1>Chào ${esc(profile.name)}, cùng học tập nhé!</h1>
      <p class="muted">Theo dõi bài tập giáo viên giao, xem điểm số và tiếp tục lộ trình tự học Toán 10 của bạn.</p>
    </div>
    <div class="online-actions">
      ${onlineBtn(`${icon("book")} Học bài dạng slide`, "lessons", "", "primary")}
      ${onlineBtn(`${icon("pen")} Luyện tập`, "practice", "", "secondary")}
    </div>
  </div>

  <div class="metric-grid online-metrics">
    <div class="metric-card card">
      <span class="metric-icon">${icon("calendar")}</span>
      <span class="metric-value">${todoAssignments.length}</span>
      <span>Bài đang chờ làm</span>
      <small class="muted">${
        expiredUnsubmitted.length
          ? `${expiredUnsubmitted.length} bài khác đã quá hạn`
          : todoAssignments.length
            ? "Hãy hoàn thành trước hạn nộp"
            : "Không có bài tồn đọng"
      }</small>
    </div>
    <div class="metric-card card">
      <span class="metric-icon">${icon("clock")}</span>
      <span class="metric-value online-metric-date">${
        nearestDue ? formatDate(nearestDue.due) : "Không có"
      }</span>
      <span>Hạn nộp gần nhất</span>
      <small class="muted">${
        nearestDue ? esc(nearestDue.title) : "Chưa có bài đặt hạn gấp"
      }</small>
    </div>
    <div class="metric-card card">
      <span class="metric-icon">${icon("pen")}</span>
      <span class="metric-value">${pendingSubmissions.length}</span>
      <span>Bài đã nộp chờ chấm</span>
      <small class="muted">${
        pendingSubmissions.length
          ? "Có câu tự luận đang chờ giáo viên chấm"
          : "Tất cả bài nộp đã được chấm"
      }</small>
    </div>
    <div class="metric-card card">
      <span class="metric-icon">${icon("check")}</span>
      <span class="metric-value">${
        latestGraded ? `${formatScore(latestGraded.score)}/10` : "Chưa có"
      }</span>
      <span>Điểm mới nhất</span>
      <small class="muted">${
        latestGraded ? esc(latestGraded.title) : "Nộp bài để nhận điểm"
      }</small>
    </div>
  </div>

  <div class="online-grid-two">
    <section class="card online-section">
      <div class="section-heading">
        <div>
          <h2>Bài đang chờ làm (${todoAssignments.length})</h2>
          <p class="muted">Đề bài từ giáo viên bạn đã kết nối</p>
        </div>
        ${onlineBtn("Xem tất cả", "assigned", "", "ghost small")}
      </div>
      ${
        !members.length
          ? `<div class="empty-state">
              ${icon("users")}
              <h3>Bạn chưa kết nối với giáo viên</h3>
              <p>Nhập mã giáo viên (dạng GV-…) để nhận bài tập, hoặc bắt đầu tự học ngay với các bài giảng slide.</p>
              <div class="online-actions">
                ${onlineBtn("Nhập mã giáo viên", "teachers", "", "primary")}
                ${onlineBtn("Học bài dạng slide", "lessons", "", "secondary")}
              </div>
            </div>`
          : !todoAssignments.length
            ? `<div class="empty-state">
                ${icon("check")}
                <h3>${
                  assignments.length
                    ? expiredUnsubmitted.length
                      ? "Không còn bài trong hạn · Có bài quá hạn chưa nộp"
                      : "Bạn đã xử lý hết các bài được giao"
                    : "Chưa có bài được giao mới"
                }</h3>
                <p>${
                  assignments.length
                    ? "Bạn có thể xem lại điểm số hoặc tiếp tục tự luyện tập thêm."
                    : "Giáo viên đã kết nối chưa giao đề mới. Hãy tranh thủ ôn bài hoặc luyện tập nhé."
                }</p>
                <div class="online-actions">
                  ${onlineBtn("Luyện tập ngay", "practice", "", "primary")}
                  ${onlineBtn("Xem danh sách bài giao", "assigned", "", "secondary")}
                </div>
              </div>`
            : `<div class="online-list">${todoAssignments
                .slice(0, 4)
                .map((a) => {
                  const teacher = teacherFor(snapshot, a.teacher_id);
                  const hasDraft = drafts.has(a.id);
                  return `<article class="card online-item-card">
                    <div>
                      <div class="question-meta">
                        <span class="tag green">${a.questions.length} câu</span>
                        ${hasDraft ? '<span class="tag amber">Đang lưu nháp</span>' : ""}
                        ${teacher ? `<span class="muted">GV: ${esc(teacher.name)}</span>` : ""}
                      </div>
                      <h3>${esc(a.title)}</h3>
                      <p class="muted">Hạn nộp: ${formatDate(a.due)}</p>
                    </div>
                    ${onlineBtn("Làm bài", "task", `data-id="${esc(a.id)}"`, "primary")}
                  </article>`;
                })
                .join("")}</div>`
      }
    </section>

    <section class="card online-section">
      <div class="section-heading">
        <div>
          <h2>Điểm & nhận xét mới</h2>
          <p class="muted">Kết quả chấm từ máy chủ và giáo viên</p>
        </div>
        ${onlineBtn("Xem điểm & tiến độ", "grades", "", "ghost small")}
      </div>
      ${
        !submissions.length
          ? `<div class="empty-state">
              ${icon("chart")}
              <h3>Chưa có bài nộp nào</h3>
              <p>Khi bạn nộp bài được giao, điểm trắc nghiệm và nhận xét tự luận của giáo viên sẽ hiển thị tại đây.</p>
            </div>`
          : `<div class="online-list">${submissions
              .slice(0, 4)
              .map((s) => {
                const waiting = s.score === null || s.pending > 0;
                return `<article class="card online-item-card">
                  <div>
                    <div class="question-meta">
                      <span class="tag ${waiting ? "amber" : "green"}">${
                        waiting
                          ? `Chờ chấm (${s.pending} câu tự luận)`
                          : `Điểm: ${formatScore(s.score)}/10`
                      }</span>
                      <span class="muted">${formatDate(s.created_at)}</span>
                    </div>
                    <h3>${esc(s.title)}</h3>
                    <p class="preserve-lines ${s.feedback ? "" : "muted"}">${
                      s.feedback
                        ? `Nhận xét: ${esc(s.feedback)}`
                        : waiting
                          ? "Giáo viên đang chấm phần tự luận."
                          : "Chưa có nhận xét thêm."
                    }</p>
                  </div>
                  ${onlineBtn("Chi tiết", "submission", `data-id="${esc(s.id)}"`, "secondary small")}
                </article>`;
              })
              .join("")}</div>`
      }
    </section>
  </div>`;
}

export function studentAssignedView(ctx) {
  const { snapshot, drafts, assignedFilter = "all" } = ctx;
  const assignments = snapshot.assignments || [];
  const rows = assignments.filter((a) => {
    const sub = submissionFor(snapshot, a.id);
    const st = assignmentStatus(a, sub);
    return assignedFilter === "all" || st.key === assignedFilter;
  });

  return `<div class="welcome-row">
    <div>
      <div class="eyebrow">NHIỆM VỤ HỌC TẬP</div>
      <h1>Bài được giao (${assignments.length})</h1>
      <p class="muted">Mỗi bài chỉ nộp một lần. Bản nháp đang làm được giữ trong phiên trang hiện tại (tải lại hoặc đóng tab có thể mất).</p>
    </div>
    <div class="online-actions">
      ${onlineBtn("Làm mới dữ liệu", "refresh", "", "secondary small")}
    </div>
  </div>

  <div class="online-filter-bar" role="group" aria-label="Lọc bài được giao">
    ${[
      ["all", "Tất cả"],
      ["todo", "Chưa làm"],
      ["pending", "Chờ chấm"],
      ["graded", "Đã có điểm"],
      ["expired", "Đã quá hạn"],
    ]
      .map(
        ([key, label]) =>
          `<button type="button" class="button ${assignedFilter === key ? "primary" : "ghost"} small" data-online="assigned-filter" data-filter="${key}" aria-pressed="${assignedFilter === key}">${label}</button>`,
      )
      .join("")}
  </div>

  ${
    !rows.length
      ? `<section class="card online-section empty-state">
          ${icon("book")}
          <h3>${
            assignments.length
              ? "Không có bài nào thuộc bộ lọc này"
              : "Chưa có bài được giao"
          }</h3>
          <p>${
            snapshot.members?.length
              ? "Khi giáo viên giao đề mới, bài tập sẽ hiển thị tại đây."
              : "Hãy kết nối với giáo viên bằng mã GV-… để nhận bài tập trực tuyến."
          }</p>
          <div class="online-actions">
            ${
              snapshot.members?.length
                ? onlineBtn("Tự học bài dạng slide", "lessons", "", "primary")
                : onlineBtn("Kết nối giáo viên", "teachers", "", "primary")
            }
          </div>
        </section>`
      : `<div class="online-list">${rows
          .map((a) => {
            const sub = submissionFor(snapshot, a.id);
            const st = assignmentStatus(a, sub);
            const teacher = teacherFor(snapshot, a.teacher_id);
            const hasDraft = !sub && drafts.has(a.id);
            return `<article class="card online-section online-assignment-card">
              <div>
                <div class="question-meta">
                  <span class="tag ${st.tag}">${esc(st.label)}</span>
                  <span class="tag gray">${a.questions.length} câu</span>
                  ${hasDraft ? '<span class="tag amber">Có bản nháp chưa nộp</span>' : ""}
                  ${teacher ? `<span class="muted">Giáo viên: ${esc(teacher.name)}</span>` : ""}
                </div>
                <h2>${esc(a.title)}</h2>
                ${
                  a.instructions
                    ? `<p class="preserve-lines">${esc(a.instructions)}</p>`
                    : ""
                }
                <p class="muted">Hạn nộp: <strong>${formatDate(a.due)}</strong></p>
              </div>
              <div class="online-actions">
                ${
                  sub
                    ? onlineBtn(
                        sub.score === null
                          ? "Xem bài đã nộp (Chờ chấm)"
                          : `Xem điểm (${formatScore(sub.score)}/10)`,
                        "submission",
                        `data-id="${esc(sub.id)}"`,
                        "secondary",
                      )
                    : st.key === "expired"
                      ? onlineBtn(
                          "Đã quá hạn nộp",
                          "task",
                          `data-id="${esc(a.id)}" disabled`,
                          "ghost",
                        )
                      : onlineBtn(
                          hasDraft ? "Tiếp tục làm bài" : "Làm bài",
                          "task",
                          `data-id="${esc(a.id)}"`,
                          "primary",
                        )
                }
              </div>
            </article>`;
          })
          .join("")}</div>`
  }`;
}

export function studentTaskView(ctx) {
  const { snapshot, selectedAssignment, drafts } = ctx;
  const a = snapshot.assignments.find((x) => x.id === selectedAssignment);
  if (!a) {
    return `<section class="card online-section empty-state">
      <h3>Không tìm thấy bài được giao</h3>
      <p>Hãy chọn một bài từ danh sách bài được giao của bạn.</p>
      ${onlineBtn("Về danh sách bài được giao", "assigned", "", "primary")}
    </section>`;
  }
  const existing = submissionFor(snapshot, a.id);
  if (existing) {
    return `<section class="card online-section">
      <span class="tag green">Đã nộp bài</span>
      <h2>${esc(a.title)}</h2>
      <p>Bài tập này quy định chỉ nộp một lần. Bạn đã nộp bài lúc ${formatDate(existing.created_at)}.</p>
      <div class="online-actions">
        ${onlineBtn("Xem bài đã nộp & điểm", "submission", `data-id="${esc(existing.id)}"`, "primary")}
        ${onlineBtn("Về danh sách bài giao", "assigned", "", "secondary")}
      </div>
    </section>`;
  }
  if (isExpired(a.due)) {
    return `<section class="card online-section">
      <span class="tag gray">Đã quá hạn nộp</span>
      <h2>${esc(a.title)}</h2>
      <p>Hạn nộp của bài này là <strong>${formatDate(a.due)}</strong>. Hệ thống đã khóa nhận bài sau thời gian quy định.</p>
      <div class="online-actions">
        ${onlineBtn("Về danh sách bài giao", "assigned", "", "secondary")}
      </div>
    </section>`;
  }
  const values = drafts.get(a.id) || {};
  const teacher = teacherFor(snapshot, a.teacher_id);
  return `<div class="welcome-row">
    <div>
      <div class="eyebrow">LÀM BÀI TẬP ĐƯỢC GIAO</div>
      <h1>${esc(a.title)}</h1>
      <p class="muted">${teacher ? `Giáo viên: ${esc(teacher.name)} · ` : ""}Hạn nộp: ${formatDate(a.due)} · ${a.questions.length} câu hỏi</p>
    </div>
    ${onlineBtn("Quay lại Bài được giao", "assigned", "", "ghost small")}
  </div>
  ${
    a.instructions
      ? `<section class="card online-section"><p class="preserve-lines"><strong>Hướng dẫn của giáo viên:</strong> ${esc(a.instructions)}</p></section>`
      : ""
  }
  <p class="muted small-text">Bản nháp bài làm được giữ trong phiên trang hiện tại (kể cả khi mất mạng tạm thời; tải lại hoặc đóng tab có thể mất).</p>
  <form data-online-form="submit">
    ${a.questions
      .map(
        (q, n) => `<section class="card online-section">
          <div class="question-meta">
            <span class="tag ${q.type === "written" ? "amber" : "green"}">Câu ${n + 1} / ${a.questions.length} · ${q.type === "written" ? "Tự luận" : "Trắc nghiệm"}</span>
          </div>
          <h2>${n + 1}. ${esc(q.prompt)}</h2>
          ${
            q.type === "written"
              ? field(
                  `Bài làm tự luận câu ${n + 1}`,
                  `<textarea name="${esc(q.id)}" maxlength="8000" rows="5" required placeholder="Trình bày các bước giải và kết quả của bạn…">${esc(values[q.id] || "")}</textarea>`,
                )
              : `<fieldset>
                  <legend class="screen-reader-only">Chọn đáp án cho câu ${n + 1}</legend>
                  ${q.options
                    .map(
                      (o, i) => `<label class="assignment-pick">
                        <input type="radio" name="${esc(q.id)}" value="${i}" ${String(values[q.id]) === String(i) ? "checked" : ""} required>
                        <span><strong>${letters[i]}.</strong> ${esc(o)}</span>
                      </label>`,
                    )
                    .join("")}
                </fieldset>`
          }
          ${
            q.hint
              ? `<details class="task-hint"><summary>Gợi ý của giáo viên</summary><p class="preserve-lines">${esc(q.hint)}</p></details>`
              : ""
          }
        </section>`,
      )
      .join("")}
    <section class="card online-section online-submit-bar">
      <p><strong>Lưu ý trước khi nộp:</strong> Mỗi bài chỉ nộp một lần và không thể nộp lại để sửa điểm. Hãy kiểm tra kỹ các câu trả lời.</p>
      <button type="submit" class="button primary">Nộp bài</button>
    </section>
  </form>`;
}

export function studentGradesView(ctx) {
  const { snapshot, localProgress } = ctx;
  const submissions = snapshot.submissions || [];
  const graded = submissions.filter((s) => s.score !== null);
  const pending = submissions.filter((s) => s.score === null || s.pending > 0);
  const avg =
    graded.length > 0
      ? Math.round(
          (graded.reduce((sum, s) => sum + Number(s.score), 0) /
            graded.length) *
            10,
        ) / 10
      : null;

  return `<div class="welcome-row">
    <div>
      <div class="eyebrow">KẾT QUẢ HỌC TẬP</div>
      <h1>Điểm & tiến độ</h1>
      <p class="muted">Điểm bài giao trực tuyến được tính trên thang điểm 10. Bài có câu tự luận chưa chấm luôn giữ trạng thái “Chờ chấm”, không tính thành 0.</p>
    </div>
    ${onlineBtn("Làm mới điểm", "refresh", "", "secondary small")}
  </div>

  <div class="metric-grid online-metrics">
    <div class="metric-card card">
      <span class="metric-icon">${icon("book")}</span>
      <span class="metric-value">${submissions.length}</span>
      <span>Bài giao đã nộp</span>
    </div>
    <div class="metric-card card">
      <span class="metric-icon">${icon("check")}</span>
      <span class="metric-value">${graded.length}</span>
      <span>Bài đã có điểm</span>
    </div>
    <div class="metric-card card">
      <span class="metric-icon">${icon("clock")}</span>
      <span class="metric-value">${pending.length}</span>
      <span>Bài đang chờ chấm</span>
    </div>
    <div class="metric-card card">
      <span class="metric-icon">${icon("chart")}</span>
      <span class="metric-value">${avg !== null ? `${formatScore(avg)}/10` : "Chưa có"}</span>
      <span> Trung bình bài đã chấm</span>
    </div>
  </div>

  <section class="card online-section">
    <h2>Điểm bài giao trực tuyến (${submissions.length})</h2>
    ${
      !submissions.length
        ? `<div class="empty-state">
            <p>Bạn chưa có bài nộp trực tuyến nào. Hãy mở mục <strong>Bài được giao</strong> để làm bài từ giáo viên.</p>
            ${onlineBtn("Xem bài được giao", "assigned", "", "primary")}
          </div>`
        : `<div class="online-list">${submissions
            .map((s) => {
              const waiting = s.score === null || s.pending > 0;
              return `<article class="card online-item-card">
                <div>
                  <div class="question-meta">
                    <span class="tag ${waiting ? "amber" : "green"}">${
                      waiting
                        ? "Chờ chấm"
                        : `Đã chấm · ${formatScore(s.score)}/10`
                    }</span>
                    <span class="muted">Nộp lúc: ${formatDate(s.created_at)}</span>
                  </div>
                  <h3>${esc(s.title)}</h3>
                  <strong class="online-score-inline">${
                    waiting
                      ? `Chờ chấm (${s.pending} câu tự luận)`
                      : `${formatScore(s.score)}/10 điểm`
                  }</strong>
                  <p class="preserve-lines ${s.feedback ? "" : "muted"}">${
                    s.feedback
                      ? `Nhận xét giáo viên: ${esc(s.feedback)}`
                      : waiting
                        ? "Bài tự luận đang chờ giáo viên chấm điểm và nhận xét."
                        : "Giáo viên chưa để lại nhận xét thêm."
                  }</p>
                </div>
                ${onlineBtn("Xem bài & lời giải", "submission", `data-id="${esc(s.id)}"`, "secondary")}
              </article>`;
            })
            .join("")}</div>`
    }
  </section>

  <section class="card online-section">
    <div class="section-heading">
      <div>
        <h2>Tiến độ tự học trên thiết bị này</h2>
        <p class="muted">Lưu cục bộ trên trình duyệt hiện tại · Chưa đồng bộ giữa các thiết bị</p>
      </div>
      <div class="online-actions">
        ${onlineBtn("Học bài slide", "lessons", "", "secondary small")}
        ${onlineBtn("Tự luyện tập", "practice", "", "primary small")}
      </div>
    </div>
    <div class="tip-box">
      ${icon("shield")}
      <p>Tiến độ xem slide và các phiên tự luyện tập dưới đây được lưu riêng trên trình duyệt của thiết bị này, tách biệt với điểm bài giao trực tuyến ở trên.</p>
    </div>
    <div class="metric-grid online-metrics">
      <div class="metric-card card">
        <span class="metric-value">${localProgress.completedCount}/${localProgress.totalLessons}</span>
        <span>Chủ đề đã xem hết slide trên máy này</span>
      </div>
      <div class="metric-card card">
        <span class="metric-value">${localProgress.sessionCount}</span>
        <span>Phiên tự luyện tập trên máy này</span>
      </div>
      <div class="metric-card card">
        <span class="metric-value">${localProgress.supportedCount}</span>
        <span>Phiên có bằng chứng làm đúng</span>
      </div>
    </div>
  </section>`;
}

export function studentSubmissionDetailView(ctx) {
  const { snapshot, selectedSubmission } = ctx;
  const s = snapshot.submissions.find((x) => x.id === selectedSubmission);
  if (!s) {
    return `<section class="card online-section empty-state">
      <h3>Không tìm thấy bài nộp</h3>
      ${onlineBtn("Về Điểm & tiến độ", "grades", "", "primary")}
    </section>`;
  }
  const waiting = s.score === null || s.pending > 0;
  return `<div class="welcome-row">
    <div>
      <div class="eyebrow">CHI TIẾT BÀI ĐÃ NỘP</div>
      <h1>${esc(s.title)}</h1>
      <p class="muted">Học sinh: ${esc(s.student_name)} · Nộp lúc: ${formatDate(s.created_at)}</p>
    </div>
    ${onlineBtn("Về Điểm & tiến độ", "grades", "", "ghost small")}
  </div>

  <section class="card online-section">
    <span class="tag ${waiting ? "amber" : "green"}">${
      waiting ? "Đang chờ chấm tự luận" : "Đã có điểm chính thức"
    }</span>
    <strong class="online-score">${
      waiting ? "Chờ chấm" : `${formatScore(s.score)}/10`
    }</strong>
    <p class="muted">${
      waiting
        ? `Còn ${s.pending} câu tự luận đang chờ giáo viên chấm điểm. Câu tự luận chưa chấm không bị tính thành 0.`
        : "Điểm số đã bao gồm tất cả các câu trắc nghiệm và tự luận trên thang điểm 10."
    }</p>
    <div class="tip-box preserve-lines">
      <div>
        <strong>Nhận xét của giáo viên:</strong>
        <p>${esc(s.feedback || "Chưa có nhận xét từ giáo viên.")}</p>
      </div>
    </div>

    <h2>Chi tiết từng câu (${s.answers.length} câu)</h2>
    <ol class="submitted-answers">
      ${s.answers
        .map((a, idx) => {
          const isWritten = a.type === "written";
          const rawMark = s.marks?.[a.questionId];
          const hasMark =
            rawMark !== undefined && rawMark !== null && rawMark !== "";
          const choiceText =
            !isWritten && Array.isArray(a.options)
              ? `${letters[a.response] ? letters[a.response] + ". " : ""}${a.options[a.response] ?? ""}`
              : a.response;
          return `<li class="card online-section">
            <div class="question-meta">
              <span class="tag ${
                isWritten
                  ? hasMark
                    ? "green"
                    : "amber"
                  : a.correct
                    ? "green"
                    : "gray"
              }">${
                isWritten
                  ? hasMark
                    ? `Tự luận · Điểm: ${formatScore(rawMark)}/1`
                    : "Tự luận · Chờ chấm"
                  : a.correct
                    ? "Trắc nghiệm · Đúng (1/1)"
                    : "Trắc nghiệm · Chưa đúng (0/1)"
              }</span>
            </div>
            <h3>Câu ${idx + 1}. ${esc(a.prompt)}</h3>
            <p class="preserve-lines"><strong>Bài làm của bạn:</strong> ${esc(choiceText)}</p>
            ${
              isWritten
                ? `<p><strong>Điểm câu tự luận:</strong> ${
                    hasMark ? `${formatScore(rawMark)} / 1 điểm` : "Chờ chấm"
                  }</p>`
                : ""
            }
            ${
              a.explanation
                ? `<p class="preserve-lines muted"><strong>Lời giải / hướng dẫn chấm:</strong> ${esc(a.explanation)}</p>`
                : ""
            }
          </li>`;
        })
        .join("")}
    </ol>
  </section>`;
}

export function studentTeachersView(ctx) {
  const { snapshot, joinCodeDraft = "" } = ctx;
  const members = snapshot.members || [];
  const assignments = snapshot.assignments || [];

  return `<div class="welcome-row">
    <div>
      <div class="eyebrow">KẾT NỐI HỌC TẬP</div>
      <h1>Giáo viên của tôi</h1>
      <p class="muted">Nhập mã giáo viên để nhận đề giao trực tuyến. Dữ liệu làm bài của bạn được bảo mật riêng giữa bạn và giáo viên.</p>
    </div>
  </div>

  <div class="online-grid-two">
    <section class="card online-section">
      <h2>Kết nối bằng mã giáo viên</h2>
      <p class="muted">Nhận mã dạng <strong>GV-…</strong> từ giáo viên bộ môn và nhập vào ô dưới đây.</p>
      <form data-online-form="join">
        ${field(
          "Mã giáo viên",
          `<input name="code" maxlength="20" placeholder="Ví dụ: GV-1A2B3C4D5E6F" value="${esc(joinCodeDraft)}" required>`,
        )}
        <button type="submit" class="button primary">Kết nối giáo viên</button>
      </form>
    </section>

    <section class="card online-section">
      <h2>Giáo viên đã kết nối (${members.length})</h2>
      ${
        !members.length
          ? `<div class="empty-state">
              ${icon("users")}
              <h3>Chưa kết nối giáo viên nào</h3>
              <p>Khi chưa có mã giáo viên, bạn vẫn tự học các bài giảng slide và luyện tập bình thường. Bạn có thể bổ sung mã bất cứ lúc nào.</p>
            </div>`
          : `<div class="online-list">${members
              .map((m) => {
                const count = assignments.filter(
                  (a) => a.teacher_id === m.id,
                ).length;
                return `<article class="card online-item-card">
                  <div>
                    <strong>${esc(m.name)}</strong>
                    <p class="muted">Mã giáo viên: <strong>${esc(m.code || "")}</strong> · ${count} bài đã giao</p>
                  </div>
                  ${onlineBtn("Xem bài giao", "assigned", "", "secondary small")}
                </article>`;
              })
              .join("")}</div>`
      }
    </section>
  </div>`;
}

export function studentProfileView(ctx) {
  const { snapshot } = ctx;
  const profile = snapshot.profile;
  return `<div class="welcome-row">
    <div>
      <div class="eyebrow">TÀI KHOẢN CỦA BẠN</div>
      <h1>Hồ sơ học sinh</h1>
      <p class="muted">Thông tin tài khoản và vai trò được lưu cố định trong cơ sở dữ liệu.</p>
    </div>
  </div>

  <div class="online-grid-two">
    <section class="card online-section">
      <h2>Thông tin tài khoản</h2>
      <dl class="online-profile-list">
        <div><dt>Tên hiển thị</dt><dd><strong>${esc(profile.name)}</strong></dd></div>
        <div><dt>Vai trò tài khoản</dt><dd><span class="tag green">Học sinh</span></dd></div>
        <div><dt>Giáo viên đã kết nối</dt><dd>${snapshot.members.length} giáo viên</dd></div>
        <div><dt>Bài tập đã nộp</dt><dd>${snapshot.submissions.length} bài</dd></div>
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
