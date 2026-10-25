export function createWorkspaceViews(readContext) {
  function libraryLink() {
    const { data, btn } = readContext();
    return `<div class="library-tabs"><span class="active">Câu hỏi mẫu</span>${btn(`Câu hỏi thêm <span class="tag gray">${data.customQuestions.length}</span>`, "nav", "ghost", 'data-view="questions"')}</div>`;
  }
  function questionsView() {
    const {
      data,
      esc,
      btn,
      icon,
      heading,
      field,
      input,
      localNote,
      empty,
      filter,
      query,
    } = readContext();

    const rows = data.customQuestions.filter(
      (q) =>
        (filter === "all" || q.status === filter) &&
        `${q.prompt} ${q.topic}`.toLowerCase().includes(query.toLowerCase()),
    );
    return `${heading("GÓC SOẠN BÀI CỦA GIÁO VIÊN", "Câu hỏi thêm.", "Biến ý tưởng, đề giấy và bài tự soạn thành những cơ hội học tập.", btn(`${icon("pen")} ${data.questionDrafts.new?.prompt ? "Tiếp tục câu đang soạn" : "Tạo câu hỏi"}`, "new-question", "primary"))}
    <div class="author-hero card"><div class="author-intro"><span class="eyebrow">BÀI CỦA THẦY CÔ, CÁCH HỌC CỦA CÁC EM</span><h2>Mỗi câu hỏi đều có<br>một người thầy phía sau.</h2><p>Soạn nội dung, thêm lời gợi ý, rồi duyệt trước khi giao cho học sinh.</p></div><div class="creation-methods">
    <button data-action="new-question"><span class="method-icon">${icon("pen")}</span><span><strong>Nhập bằng bàn phím</strong><small>Trắc nghiệm hoặc tự luận</small></span>${icon("right")}</button>
    <button data-action="open-import" data-mode="photo"><span class="method-icon">${icon("fullscreen")}</span><span><strong>Chụp / tải ảnh đề bài</strong><small>Đọc chữ OCR, kiểm tra rồi tạo câu</small></span>${icon("right")}</button>
    <button data-action="open-import" data-mode="text"><span class="method-icon">${icon("book")}</span><span><strong>Dán nội dung có sẵn</strong><small>Tách nhiều câu thành bản nháp</small></span>${icon("right")}</button></div></div>
    <div class="section-heading"><div><h2>Kho câu hỏi của bạn <span class="tag gray">${data.customQuestions.length}</span></h2><p class="muted">${data.customQuestions.filter((q) => q.status === "approved").length} câu đã duyệt, sẵn sàng giao bài</p></div>${btn("Giao bài cho lớp", "assign", "secondary small")}</div>
    <div class="question-filters"><label class="search-field"><span class="screen-reader-only">Tìm câu hỏi thêm</span><input id="question-search" type="search" placeholder="Tìm theo nội dung, chủ đề…" value="${esc(query)}"></label><label class="field"><span class="screen-reader-only">Trạng thái câu hỏi</span><select id="question-status">${[
      ["all", "Tất cả trạng thái"],
      ["draft", "Bản nháp"],
      ["approved", "Đã duyệt"],
    ]
      .map(
        ([v, t]) =>
          `<option value="${v}" ${filter === v ? "selected" : ""}>${t}</option>`,
      )
      .join("")}</select></label></div>
    <div id="question-results">${rows.length ? rows.map((q) => `<article class="custom-question card"><div class="question-meta"><span class="tag ${q.status === "approved" ? "green" : "amber"}">${q.status === "approved" ? "Đã duyệt" : "Bản nháp"}</span><span>${esc(q.topic)} · ${q.type === "written" ? "Tự luận" : "Trắc nghiệm"}</span>${q.source === "import" ? '<span class="tag gray">Từ nội dung nhập</span>' : ""}</div><h3>${esc(q.prompt || "Câu hỏi chưa có nội dung")}</h3><div class="question-row-actions">${btn("Xem & chỉnh sửa", "edit-question", "secondary small", `data-id="${q.id}"`)}${btn("Nhân bản", "duplicate-question", "ghost small", `data-id="${q.id}"`)}${btn("Xóa", "delete-question", "ghost small danger", `data-id="${q.id}"`)}</div></article>`).join("") : empty(data.customQuestions.length ? "Chưa tìm thấy câu phù hợp" : "Câu hỏi đầu tiên bắt đầu từ bạn", data.customQuestions.length ? "Thử một từ khóa hoặc trạng thái khác." : "Nhập một câu hỏi, chụp đề giấy hoặc dán nội dung để bắt đầu.", btn("Soạn câu hỏi đầu tiên", "new-question", "secondary"))}</div>${localNote}`;
  }
  function editorView() {
    const {
      data,
      esc,
      btn,
      icon,
      heading,
      field,
      input,
      textArea,
      letters,
      editor,
    } = readContext();

    return `${heading("SOẠN • KIỂM TRA • GIAO BÀI", editor.id ? "Chỉnh sửa câu hỏi." : "Một câu hỏi mới.", "Nội dung được lưu nháp trên thiết bị trong khi bạn nhập.", btn("Về kho câu hỏi", "nav", "ghost small", 'data-view="questions"'))}
  <div class="editor-layout"><section class="card editor-card"><div class="editor-topline"><span class="tag ${editor.status === "approved" ? "green" : "amber"}">${editor.status === "approved" ? "Đang sửa câu đã duyệt" : "Bản nháp"}</span><span class="muted small-text">* Nội dung cần có khi duyệt</span></div>
  <div class="field-pair">${field("Chủ đề *", input("topic", editor.topic, 120))}${field("Loại câu hỏi", `<select data-q="type"><option value="choice" ${editor.type === "choice" ? "selected" : ""}>Trắc nghiệm · 4 lựa chọn</option><option value="written" ${editor.type === "written" ? "selected" : ""}>Tự luận · Giáo viên nhận xét</option></select>`)}</div>
  ${field("Nội dung câu hỏi *", textArea("prompt", editor.prompt, 4, "Ví dụ: Cho góc tù α, biết sin α = 3/5. Tính cos α."))}
  ${editor.type === "choice" ? `<fieldset class="options-editor"><legend>Các lựa chọn * <small>Chọn vòng tròn ở đáp án đúng</small></legend>${letters.map((l, i) => `<div class="option-editor"><label class="answer-radio"><input type="radio" name="correct-answer" data-answer="${i}" ${editor.answer === i ? "checked" : ""} aria-label="Đáp án đúng ${l}"><span>${l}</span></label><input data-option="${i}" maxlength="1000" aria-label="Nội dung đáp án ${l}" value="${esc(editor.options[i])}" placeholder="Nhập lựa chọn ${l}"></div>`).join("")}</fieldset>` : '<div class="tip-box">Bài tự luận được lưu để giáo viên đọc và nhận xét. Hệ thống không tự chấm đúng sai.</div>'}
  ${field(editor.type === "choice" ? "Lời giải sau khi nộp bài *" : "Hướng dẫn chấm / câu trả lời tham khảo *", textArea("explanation", editor.explanation, 3, "Giải thích các bước và điều học sinh cần nắm."))}
  ${field("Gợi ý cho học sinh (không bắt buộc)", textArea("hint", editor.hint, 2, "Một câu hỏi gợi mở, chưa cần cho ngay đáp án."))}
  <label class="check-field"><input type="checkbox" id="review-confirm"> Tôi đã kiểm tra đề, đáp án và lời giải.</label><p id="workspace-error" class="form-error" role="alert"></p>
  <div class="editor-actions">${btn("Lưu bản nháp", "save-question-draft", "secondary")}${btn(`${icon("check")} Duyệt & lưu câu hỏi`, "approve-question", "primary")}</div></section>
  <aside class="card editor-aside"><span class="eyebrow">MỘT CÂU HỎI TỐT</span><h3>Gợi mở để hiểu thật.</h3><ol><li>Đề bài rõ ràng, đủ dữ kiện.</li><li>Các lựa chọn có ý nghĩa, không trùng nhau.</li><li>Lời giải cho thấy cách nghĩ.</li><li>Kiểm tra kỹ công thức đọc từ ảnh.</li></ol><div class="support-note">${icon("shield")} Chỉ câu đã duyệt mới xuất hiện khi giao bài.</div><p class="muted small-text">Sửa câu trong kho không thay đổi bản đề đã giao trước đó.</p></aside></div>`;
  }
  function importView() {
    const {
      data,
      esc,
      btn,
      icon,
      heading,
      field,
      input,
      editor,
      importText,
      importTopic,
      imageURL,
      imageFile,
      ocrBusy,
      ocrMessage,
    } = readContext();

    return `${heading("TỪ ĐỀ GIẤY ĐẾN BÀI HỌC", "Thêm từ ảnh hoặc văn bản.", "Đọc nội dung, chỉnh lại công thức, rồi lưu các câu hỏi thành bản nháp.", btn("Về kho câu hỏi", "nav", "ghost small", 'data-view="questions"'))}
  <div class="import-layout"><section class="card editor-card"><span class="eyebrow">01 / CHỌN NGUỒN</span><h2>Chụp rõ, đọc dễ hơn.</h2><p class="muted">Ảnh JPG, PNG hoặc WebP · tối đa 10 MB. Mỗi lần đọc một ảnh.</p><div class="upload-zone">${imageURL ? `<img src="${imageURL}" alt="Ảnh đề bài đã chọn" class="source-preview">` : `<span class="upload-symbol">${icon("fullscreen")}</span><strong>Một trang đề, nhiều câu hỏi</strong><span class="muted">Chọn ảnh có chữ rõ và đủ sáng</span>`}<div class="upload-actions"><label class="button secondary">Tải ảnh lên<input id="source-image" class="screen-reader-only" type="file" accept="image/jpeg,image/png,image/webp" ${ocrBusy ? "disabled" : ""}></label><label class="button ghost">Chụp ảnh<input id="camera-image" class="screen-reader-only" type="file" accept="image/*" capture="environment" ${ocrBusy ? "disabled" : ""}></label></div>${imageFile ? `<small>${esc(imageFile.name)}</small>` : ""}</div>
  <div class="editor-actions">${btn(ocrBusy ? "Đang đọc chữ…" : "Đọc chữ từ ảnh (OCR)", "scan-image", "primary", !imageFile || ocrBusy ? "disabled" : "")}${ocrBusy ? btn("Dừng đọc", "cancel-scan", "ghost") : ""}</div><p id="ocr-status" role="status" aria-live="polite" class="small-text muted">${esc(ocrMessage)}</p><p class="small-text muted">OCR xử lý ảnh trên thiết bị; lần đầu cần mạng để tải bộ đọc chữ. Chữ viết tay và công thức có thể nhận sai.</p><div class="integration-note">${icon("sparkle")}<div><strong>AI tạo bài từ ảnh · Chưa kết nối</strong><p>Hiện có OCR và tách câu theo mẫu. Sau khi kết nối AI, đề vẫn cần giáo viên kiểm tra.</p></div></div></section>
  <section class="card editor-card"><span class="eyebrow">02 / KIỂM TRA NỘI DUNG</span><h2>Văn bản để tạo câu hỏi.</h2>${field("Chủ đề chung", `<input id="import-topic" value="${esc(importTopic)}" maxlength="120">`)}${field("Dán đề bài hoặc sửa chữ đọc được", `<textarea id="import-text" rows="13" maxlength="40000" ${ocrBusy ? 'readonly aria-busy="true"' : ""} placeholder="Câu 1: Nội dung câu hỏi…&#10;A. Lựa chọn A&#10;B. Lựa chọn B&#10;C. Lựa chọn C&#10;D. Lựa chọn D&#10;&#10;Câu 2: Một câu hỏi tự luận…">${esc(importText)}</textarea>`)}<p class="small-text muted">Bắt đầu từng câu bằng “Câu 1:”, “Câu 2:”… Các lựa chọn ghi A., B., C., D. Tối đa 30 câu/lần; đáp án đúng được chọn ở bước duyệt.</p><p id="workspace-error" class="form-error" role="alert"></p>${btn("Tách câu & lưu bản nháp", "parse-import", "primary", ocrBusy ? "disabled" : "")}</section></div>`;
  }
  function assignView() {
    const {
      data,
      esc,
      btn,
      heading,
      questionBank,
      field,
      input,
      localNote,
      empty,
      lessonTitle,
      filter,
      editor,
    } = readContext();

    const custom = data.customQuestions.filter((q) => q.status === "approved");
    const samples = questionBank.filter((q) => data.approved.includes(q.id));
    const all = [...custom, ...samples];
    return `${heading("CHUẨN BỊ MỘT BÀI HỌC", "Giao bài của bạn.", "Chọn những câu đã duyệt từ kho tự soạn và thư viện mẫu.", btn("Về lớp học", "nav", "ghost small", 'data-view="class"'))}
  <section class="card editor-card assignment-composer">${field("Tên bài giao *", `<input id="assignment-title" maxlength="160" value="${esc(data.assignmentDraft.title)}" placeholder="Ví dụ: Luyện tập lượng giác tuần 1">`)}<div class="field-pair">${field("Lớp nhận bài", '<input value="Lớp trải nghiệm trên thiết bị" disabled>')}${field("Hạn hoàn thành (không bắt buộc)", `<input id="assignment-due" type="date" value="${esc(data.assignmentDraft.due)}">`)}</div>${field("Lời nhắn cho học sinh", `<textarea id="assignment-instructions" rows="2" maxlength="2000" placeholder="Hãy viết lại cách em suy nghĩ…">${esc(data.assignmentDraft.instructions)}</textarea>`)}
  <div class="section-heading"><h3>Chọn câu hỏi <span class="tag gray">${all.length} đã duyệt</span></h3>${btn("Thêm câu mới", "new-question", "ghost small")}</div>${all.length ? `<div class="assignment-picks">${all.map((q) => `<label class="assignment-pick"><input type="checkbox" name="pick-question" value="${q.id}" ${(data.assignmentDraft.selected || []).includes(q.id) ? "checked" : ""}><span><strong>${esc(q.prompt)}</strong><small>${esc(q.topic || lessonTitle(q.lessonId))} · ${q.type === "written" ? "Tự luận" : "Trắc nghiệm"} · ${q.topic ? "Tự soạn" : "Thư viện mẫu"}</small></span></label>`).join("")}</div>` : empty("Chưa có câu đã duyệt", "Hãy soạn và duyệt một câu hỏi, hoặc xem & duyệt câu trong thư viện mẫu.", btn("Mở thư viện mẫu", "nav", "secondary", 'data-view="library"'))}<p id="workspace-error" class="form-error" role="alert"></p><div class="editor-actions">${btn("Giao bài cho lớp trải nghiệm", "publish-assignment", "primary", all.length ? "" : "disabled")}</div>${localNote}</section>`;
  }
  function classView() {
    const {
      data,
      state,
      esc,
      btn,
      icon,
      heading,
      lessons,
      teacherProfile,
      localNote,
      empty,
      lessonTitle,
      filter,
    } = readContext();

    const teacher = state.role === "teacher";
    const p = teacher ? teacherProfile() : data.teacherProfile;
    return `${heading("KẾT NỐI QUA TỪNG BÀI HỌC", teacher ? "Lớp học & giao bài." : "Lớp học của tôi.", "Bài do giáo viên lựa chọn, lời giải giúp bạn hiểu thêm.", btn(teacher ? "Giao bài mới" : "Nhập mã giáo viên", teacher ? "assign" : "teacher-code", "primary"))}
    <div class="class-summary card"><div class="class-symbol">${icon("users")}</div><div><span class="eyebrow">LỚP TRẢI NGHIỆM</span><h2>${esc(p?.name || "Cùng học với Hiểu Thật")}</h2><p class="muted">${teacher ? "Dùng mã để thử kết nối hồ sơ học sinh trên thiết bị này." : data.studentProfile?.teacherCode ? "Đã kết nối mã " + esc(data.studentProfile.teacherCode) : "Bạn có thể nhập mã giáo viên sau, vẫn tự học bình thường."}</p></div>${teacher ? `<div class="teacher-code-box"><small>MÃ GIÁO VIÊN</small><strong>${esc(p.code)}</strong>${btn("Sao chép mã", "copy-teacher-code", "ghost small")}</div>` : ""}</div>
    <div class="section-heading"><h2>Bài được giao</h2><span class="tag gray">${data.assignments.length} bài</span></div><div class="assignment-list">${
      data.assignments.length
        ? [...data.assignments]
            .reverse()
            .map((a) => {
              const sub = data.assignmentSubmissions
                .filter((s) => s.assignmentId === a.id)
                .at(-1);
              return `<article class="card assignment-card"><div><div class="question-meta"><span class="tag green">${a.questions ? `${a.questions.length} câu` : "Chủ đề mẫu"}</span><span>${a.due ? "Hạn " + esc(a.due.split("-").reverse().join("/")) : "Không đặt hạn"}</span>${sub ? '<span class="tag gray">Đã nộp trên thiết bị</span>' : ""}</div><h3>${esc(a.title || lessonTitle(a.lessonId))}</h3>${a.instructions ? `<p class="muted preserve-lines">${esc(a.instructions)}</p>` : ""}</div><div class="question-row-actions">${a.questions ? `${btn("Sao chép link giao bài", "share-assignment", "ghost small", `data-id="${a.id}"`)}${teacher ? `${btn("Xem đề đã giao", "preview-assignment", "secondary small", `data-id="${a.id}"`)}${sub ? btn("Xem bài nộp", "submission", "primary small", `data-id="${sub.id}"`) : '<span class="muted small-text">Chưa có bài nộp</span>'}` : sub ? btn("Xem bài đã nộp", "submission", "secondary small", `data-id="${sub.id}"`) : btn("Làm bài", "start-assignment", "primary small", `data-id="${a.id}"`)}` : btn("Làm chủ đề mẫu", "start-practice", "secondary small", `data-lesson="${a.lessonId}"`)}</div></article>`;
            })
            .join("")
        : empty(
            "Chưa có bài được giao",
            teacher
              ? "Tạo bài từ câu hỏi của bạn hoặc từ thư viện mẫu."
              : "Bạn có thể học các slide trong lúc chờ bài mới.",
            btn(
              teacher ? "Giao bài đầu tiên" : "Xem bài học",
              teacher ? "assign" : "nav",
              "secondary",
              'data-view="lessons"',
            ),
          )
    }</div>${localNote}`;
  }
  function taskView() {
    const { data, esc, btn, heading, field, input, empty, letters, task } =
      readContext();

    if (!task)
      return empty(
        "Chọn một bài để bắt đầu",
        "Các bài đã giao nằm trong lớp học của bạn.",
        btn("Về lớp học", "nav", "primary", 'data-view="class"'),
      );
    return `${heading("BÀI TẬP GIÁO VIÊN GIAO", esc(task.title), "Câu trả lời được lưu nháp trên thiết bị. Nộp bài khi bạn đã sẵn sàng.", btn("Về lớp học", "nav", "ghost small", 'data-view="class"'))}${task.instructions ? `<div class="tip-box preserve-lines">${esc(task.instructions)}</div>` : ""}<div class="task-question-list">${task.questions.map((q, n) => `<section class="card task-question"><span class="eyebrow">CÂU ${n + 1} / ${task.questions.length} · ${q.type === "written" ? "TỰ LUẬN" : "TRẮC NGHIỆM"}</span><h2>${esc(q.prompt)}</h2>${q.type === "written" ? field("Bài làm của bạn", `<textarea data-response="${q.id}" rows="5" maxlength="8000" placeholder="Trình bày cách làm và kết quả…">${esc(task.responses[q.id] || "")}</textarea>`) : `<div class="task-options">${q.options.map((o, i) => `<label class="task-option"><input type="radio" name="task-${q.id}" data-response="${q.id}" value="${i}" ${task.responses[q.id] === i ? "checked" : ""}><span><b>${letters[i]}.</b> ${esc(o)}</span></label>`).join("")}</div>`}${q.hint ? `<details class="task-hint"><summary>Gợi ý của giáo viên</summary><p>${esc(q.hint)}</p></details>` : ""}</section>`).join("")}</div><section class="card submission-bar"><p class="muted">Câu tự luận sẽ chờ giáo viên nhận xét.</p><p id="workspace-error" class="form-error" role="alert"></p>${btn("Nộp bài", "submit-assignment", "primary")}</section>`;
  }
  function accountView() {
    const {
      data,
      esc,
      btn,
      icon,
      heading,
      field,
      input,
      accountDrafts,
      accountRole,
    } = readContext();

    const p = accountDrafts[accountRole];
    return `${heading("BẮT ĐẦU HÀNH TRÌNH CỦA BẠN", "Một tài khoản, đúng vai trò.", "Học sinh kết nối với giáo viên bằng mã riêng, hoặc nhập mã sau.")}
  <div class="account-layout"><section class="card account-card"><span class="eyebrow">01 / BẠN LÀ AI?</span><h2>Bạn là giáo viên hay học sinh?</h2><div class="account-roles">${[
    ["student", "book", "Tôi là học sinh", "Học, luyện tập và nhận bài"],
    ["teacher", "users", "Tôi là giáo viên", "Soạn câu hỏi và giao bài"],
  ]
    .map(
      ([role, ic, title, desc]) =>
        `<button data-action="account-role" data-role="${role}" class="account-role ${accountRole === role ? "selected" : ""}" aria-pressed="${accountRole === role}">${icon(ic)}<strong>${title}</strong><span>${desc}</span></button>`,
    )
    .join("")}</div>
  <span class="eyebrow">02 / CÁCH ĐĂNG KÝ HOẠC ĐĂNG NHẬP</span><div class="provider-list">${[
    ["google", "G", "Google"],
    ["phone", "☎", "Số điện thoại"],
    ["facebook", "f", "Facebook"],
    ["email", "@", "Email & mật khẩu"],
  ]
    .map(
      ([id, mark, title]) =>
        `<button class="provider" data-action="provider" data-provider="${id}"><span class="provider-mark provider-${id}">${mark}</span><strong>${title}</strong><small>Chưa kết nối</small>${icon("right")}</button>`,
    )
    .join(
      "",
    )}</div><p class="small-text muted">Các cách đăng nhập đang chờ kết nối dịch vụ. Chưa thể tạo tài khoản trực tuyến hay gửi mã OTP.</p>
  <div class="account-preview"><span class="eyebrow">TRẢI NGHIỆM TRƯỚC TRÊN THIẾT BỊ</span>${field("Tên hiển thị", `<input id="profile-name" maxlength="80" value="${esc(p?.name || "")}" autocomplete="nickname" placeholder="Tên bạn muốn hiển thị">`)}${accountRole === "student" ? field("Mã giáo viên (không bắt buộc)", `<input id="profile-teacher-code" value="${esc(p?.teacherCode || "")}" maxlength="20" placeholder="Có thể bỏ qua và nhập sau" autocomplete="off">`) : '<p class="muted small-text">Giáo viên không cần mã giới thiệu. Mã riêng sẽ được tạo cùng hồ sơ trải nghiệm.</p>'}<p id="workspace-error" class="form-error" role="alert"></p>${btn("Lưu hồ sơ trải nghiệm", "save-profile", "primary")}<p class="small-text muted">Đây là hồ sơ cục bộ, chưa phải tài khoản được xác thực.</p></div></section>
  <aside class="account-aside"><div class="account-illustration">${icon("book")}<span>Học để hiểu.<br>Hiểu để cùng tiến bộ.</span></div><h3>Một kết nối, nhiều cơ hội học.</h3><ul><li>Giáo viên có mã riêng khi tạo hồ sơ.</li><li>Học sinh có thể nhập mã lúc đầu hoặc nhập sau trong lớp học.</li><li>Hồ sơ trải nghiệm dùng chung dữ liệu trên trình duyệt này.</li></ul>${btn("Hướng dẫn kết nối dịch vụ", "nav", "secondary", 'data-view="connections"')}</aside></div>`;
  }
  function connectionsView() {
    const { icon, heading, editor } = readContext();

    return `${heading("CHUẨN BỊ ĐỂ ĐƯA VÀO SỬ DỤNG", "Kết nối dịch vụ.", "Bạn đang dùng bản trải nghiệm. Các bước dưới đây dành cho chủ website.")}
    <div class="connection-grid">${[
      [
        "users",
        "Tài khoản trực tuyến",
        "Google, Facebook, điện thoại và email",
        "Chưa kết nối",
      ],
      [
        "sparkle",
        "Chat & tạo đề bằng AI",
        "Trả lời theo bài học, đọc ảnh và soạn bản nháp",
        "Chưa kết nối",
      ],
      [
        "chart",
        "Dữ liệu lớp học",
        "Đồng bộ câu hỏi, bài giao và bài nộp",
        "Chỉ lưu trên thiết bị",
      ],
    ]
      .map(
        ([ic, title, desc, status]) =>
          `<section class="card connection-card">${icon(ic)}<h2>${title}</h2><p class="muted">${desc}</p><span class="tag amber">${status}</span></section>`,
      )
      .join("")}</div>
    <section class="card editor-card"><h2>Lộ trình kết nối</h2><ol class="connection-steps"><li><strong>Chọn nơi chạy tài khoản.</strong><p>Trang hiện tại dùng quyền truy cập của Sites. Đăng nhập Google, Facebook và OTP trong ứng dụng cần dịch vụ xác thực và nền tảng triển khai hỗ trợ.</p></li><li><strong>Tạo dịch vụ và cấu hình nhà cung cấp.</strong><p>Có thể dùng Firebase Authentication trên bản triển khai phù hợp. Giáo viên đăng ký bình thường; học sinh chọn vai trò và nhập mã giáo viên nếu có.</p></li><li><strong>Kết nối máy chủ và kho dữ liệu.</strong><p>Xác thực quyền giáo viên, lưu mã giáo viên, câu hỏi và bài nộp trước khi mở dùng nhiều người.</p></li><li><strong>Bật AI qua máy chủ.</strong><p>Khóa AI chỉ đặt trên máy chủ. Giáo viên kiểm tra mọi đề AI tạo trước khi giao.</p></li></ol><a class="button primary" href="./HUONG-DAN-KET-NOI.md" download>Tải hướng dẫn kết nối chi tiết</a></section>`;
  }

  return {
    libraryLink,
    questionsView,
    editorView,
    importView,
    assignView,
    classView,
    taskView,
    accountView,
    connectionsView,
  };
}
