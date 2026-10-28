import { tutorReply } from "./authoring.js";

export const studentPrompts = [
  "Giải thích dễ hơn",
  "Cho ví dụ",
  "Gợi ý bước đầu",
  "Kiểm tra cách làm của mình",
];
export const teacherPrompts = [
  "Soạn câu hỏi mới",
  "Tạo bài từ ảnh",
  "Giao bài cho lớp",
  "Kết nối AI",
];
const normalize = (text) =>
  String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");
const examples = {
  values:
    "Ví dụ cùng chủ đề: với góc nhọn β và sin β = 5/13, ta có cos²β = 1 − 25/169 = 144/169. Vì β nhọn nên cos β = 12/13. Khi làm bài của mình, em nhớ kiểm tra điều kiện góc để chọn dấu.",
  signs:
    "Ví dụ: 150° là góc tù. Điểm trên đường tròn nằm bên trái trục tung và phía trên trục hoành, nên cos 150° < 0 còn sin 150° > 0. Góc 90° là trường hợp riêng: cos bằng 0.",
  cosine:
    "Ví dụ: tam giác có hai cạnh kề góc 60° dài 3 và 5. Cạnh a đối diện góc đó thỏa a² = 3² + 5² − 2 × 3 × 5 × cos 60° = 19. Vậy a = √19; kết quả nằm giữa 2 và 8, phù hợp bất đẳng thức tam giác.",
};
const simple = {
  values:
    "Hãy nghĩ sin và cos là hai tọa độ của một điểm trên đường tròn bán kính 1: cos theo chiều ngang, sin theo chiều dọc. Hệ thức sin²α + cos²α = 1 giúp tìm độ lớn; vị trí góc giúp chọn dấu.",
  signs:
    "Nhìn điểm trên đường tròn: ở bên phải trục tung thì cos dương, ở bên trái thì cos âm. Điểm ở trên trục hoành thì sin dương. Trên trục, một tọa độ có thể bằng 0.",
  cosine:
    "Định lý cosin nối ba cạnh với một góc. Đầu tiên tìm cạnh đối diện góc đã biết, gọi là a. Hai cạnh kẹp góc là b và c. Sau đó dùng a² = b² + c² − 2bc cos A; cuối cùng lấy căn dương.",
};

// Deliberately local and synchronous. A future server adapter must preserve
// explicit mode/error states and record help against the captured attempt.
export function companionReply(context, message, turn = 0) {
  const text = normalize(message);
  const answer = (text, learningHelp = false) => ({
    text,
    learningHelp,
    mode: "preset",
  });
  if (context.role === "teacher") {
    if (/anh|chup|quet|ocr/.test(text))
      return answer(
        "Vào “Câu hỏi thêm” → “Chụp / tải ảnh”. Chọn ảnh rõ nét rồi đọc chữ; kiểm tra lại ký hiệu toán, tách câu và chỉnh sửa. Thầy cô cần tự chọn đáp án, thêm lời giải và duyệt trước khi giao. Hiện đây là OCR đọc chữ, chưa có AI tự tạo đề.",
      );
    if (/giao bai|lop/.test(text))
      return answer(
        "Vào “Lớp học & giao bài” → tạo bài giao. Chọn những câu đã duyệt, nhập tên bài, hạn và lời nhắn rồi giao bài. Bản trải nghiệm hiện chỉ lưu trên trình duyệt này; cần kết nối máy chủ để học sinh nhận bài ở thiết bị khác.",
      );
    if (/soan|cau hoi|nhap|ban nhap/.test(text))
      return answer(
        "Vào “Câu hỏi thêm” → “Nhập bằng tay”. Chọn trắc nghiệm hoặc tự luận, nhập chủ đề, đề, lựa chọn và lời giải. Có thể lưu nháp trước; khi duyệt, hãy kiểm tra đáp án và xác nhận đã rà soát. Mình chưa có AI để tự soạn câu hỏi theo yêu cầu tự do.",
      );
    if (/ket noi|\bai\b/.test(text))
      return answer(
        "Mở “Đăng nhập / Đăng ký” → “Hướng dẫn kết nối dịch vụ” để tải hướng dẫn. Chat cần một API chạy qua máy chủ; khóa bí mật đặt trên máy chủ. Bạn Hiểu hiện dùng nội dung soạn sẵn và chưa gọi dịch vụ AI.",
      );
    return answer(
      "Mình có thể hướng dẫn soạn câu hỏi, đọc chữ từ ảnh và giao bài bằng các nút bên dưới. Câu hỏi tự do cần kết nối AI; hiện mình chưa thể tự tạo hoặc kiểm tra nội dung giảng dạy.",
    );
  }
  if (/kiem tra|cach lam|dung khong|dung chua/.test(text))
    return answer(
      "Mình chưa có AI để đọc và đánh giá cách làm tự do của em. Em có thể tự đối chiếu: đã dùng hết dữ kiện chưa, công thức có đúng điều kiện không, và kết quả có hợp lý không? Với bài đang luyện, chọn đáp án rồi bấm “Kiểm tra đáp án”; với tự luận, ghi cách làm để giáo viên nhận xét.",
    );
  if (context.view === "task")
    return answer(
      "Với bài giáo viên giao, hãy đọc từng câu, ghi cách làm và mở gợi ý ngay dưới câu nếu có. Bạn Hiểu chưa phân tích được đề riêng hay chấm tự luận. Em có thể lưu câu hỏi để trao đổi với giáo viên, rồi nộp bài khi đã kiểm tra lại.",
    );
  const lessonId = context.lesson?.id;
  if (/vi du/.test(text))
    return answer(examples[lessonId || "values"] || examples.values, true);
  if (/giai thich|de hon|don gian/.test(text)) {
    return lessonId
      ? answer(
          simple[lessonId] || context.slide?.body || context.lesson.description,
          true,
        )
      : answer(
          "Em mở một bài trong “Bài học” hoặc bắt đầu luyện tập nhé. Mình sẽ gợi ý theo chủ đề đang xem. Khi chuyển trang, đoạn chat này vẫn được giữ lại.",
        );
  }
  if (context.question) {
    const reply = tutorReply(context.question, message, turn);
    if (reply.supported)
      return { ...answer(reply.text, true), advanceQuestionHint: true };
  }
  if (/goi y|bat dau|buoc|cong thuc/.test(text)) {
    if (context.slide)
      return answer(
        [context.slide.tip, context.slide.formula].filter(Boolean).join("\n"),
        true,
      );
    if (context.lesson) return answer(context.lesson.slides[0].tip, true);
    return answer(
      "Bắt đầu từ “Bài học” để xem kiến thức, hoặc “Luyện tập & xác minh” để thử một câu. Khi mở câu hỏi, mình có thể đưa gợi ý từng bước theo bài đó.",
    );
  }
  if (/ma giao vien|tham gia|ket noi lop/.test(text))
    return answer(
      "Em vào “Lớp học của tôi” để nhập mã giáo viên. Mã này không bắt buộc khi tạo hồ sơ và có thể nhập sau. Bản trải nghiệm chỉ kết nối được dữ liệu đang có trên cùng trình duyệt.",
    );
  if (/chao|cam on/.test(text))
    return answer(
      "Chào em, mình là Bạn Hiểu. Em cứ học theo nhịp của mình; khi cần, mở mình lên để xem một gợi ý nhỏ nhé.",
    );
  return answer(
    "Mình chưa có AI để trả lời linh hoạt câu hỏi này. Các nút bên dưới mở nội dung đã soạn sẵn theo trang đang học. Em có thể ghi lại thắc mắc để trao đổi với giáo viên.",
  );
}

export function restoreConversation(saved) {
  const messages = Array.isArray(saved?.messages)
    ? saved.messages
        .filter(
          (m) =>
            m &&
            ["user", "assistant"].includes(m.role) &&
            typeof m.text === "string",
        )
        .slice(-80)
        .map((m) => ({
          role: m.role,
          text: m.text.slice(0, 3000),
          context: typeof m.context === "string" ? m.context.slice(0, 250) : "",
          learningHelp: m.role === "assistant" && m.learningHelp === true,
        }))
    : [];
  return {
    messages,
    draft: typeof saved?.draft === "string" ? saved.draft.slice(0, 1000) : "",
  };
}

// This is intentionally independent of view and role: leaving the practice
// page must not turn an assisted attempt into an independent result.
export function recordCompanionHelp(practice, reply, question = null) {
  if (!practice || practice.phase === "result" || !reply.learningHelp)
    return false;
  practice.hints = (practice.hints || 0) + 1;
  if (question && reply.advanceQuestionHint) {
    practice.chats ||= {};
    const thread = (practice.chats[question.prompt] ||= {
      messages: [],
      hints: 0,
      draft: "",
    });
    thread.hints++;
  }
  return true;
}
