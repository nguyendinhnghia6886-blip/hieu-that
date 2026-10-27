import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist/content");

const lessonTemplates = [
  {
    id: "propositions",
    chapterId: "chuong-1",
    chapterTitle: "Chương I: Mệnh đề và tập hợp",
    lessonNumber: "Bài 1",
    title: "Mệnh đề toán học",
    shortTitle: "Mệnh đề toán học",
    description: "Khái niệm mệnh đề, mệnh đề phủ định, mệnh đề kéo theo và các kí hiệu với mọi, tồn tại.",
    duration: "12 phút",
    visual: "logic",
    slides: [
      {
        eyebrow: "CHÂN LÝ TOÁN HỌC",
        title: "Khái niệm mệnh đề và mệnh đề chứa biến",
        body: "Mệnh đề toán học là một khẳng định có tính đúng hoặc sai rõ ràng. Một khẳng định không thể vừa đúng vừa sai. Các câu hỏi, câu cảm thán, câu cầu khiến không phải là mệnh đề. Mệnh đề chứa biến P(x) là câu khẳng định chứa biến số x mà tính đúng sai tùy thuộc vào giá trị cụ thể gán cho x.",
        formula: "Khẳng định → Đúng (Đ) hoặc Sai (S)  ·  P(x) xác định tính đúng sai khi gán x = x0",
        example: "Xét mệnh đề chứa biến P(n): “n² + 1 chia hết cho 5” với n ∈ ℕ.\n• Bước 1: Khi n = 1, 1² + 1 = 2 không chia hết cho 5 ⇒ P(1) là mệnh đề SAI.\n• Bước 2: Khi n = 2, 2² + 1 = 5 chia hết cho 5 ⇒ P(2) là mệnh đề ĐÚNG.\n• Bước 3: P(n) là mệnh đề chứa biến; gán n cụ thể biến nó thành mệnh đề có chân trị xác định.",
        advanced: "Cho P(x): “x² − 2mx + m² − 1 = 0”. Tìm m để P(1) là mệnh đề đúng.\n→ Lời giải: Thay x = 1 được 1 − 2m + m² − 1 = 0 ⇔ m(m − 2) = 0 ⇔ m = 0 hoặc m = 2.",
        tip: "Mẹo nhận diện: Câu chứa biến tự do (x, n) không có lượng từ là mệnh đề chứa biến; câu cảm xúc hoặc câu hỏi tuyệt đối không phải mệnh đề.",
        visual: "logic"
      },
      {
        eyebrow: "MỆNH ĐỀ PHỦ ĐỊNH",
        title: "Bác bỏ một khẳng định (¬P)",
        body: "Mệnh đề phủ định của P (kí hiệu ¬P hoặc P̄) khẳng định điều ngược lại với P. Quy tắc chân trị: Khi P đúng thì ¬P sai; khi P sai thì ¬P đúng. Trong ngôn ngữ, ta thường thêm hoặc bớt từ 'không' hoặc 'không phải'. Không bao giờ có trường hợp P và ¬P cùng đúng hoặc cùng sai.",
        formula: "P đúng ⇔ ¬P sai  ·  P sai ⇔ ¬P đúng  ·  ¬(¬P) ⇔ P",
        example: "Tìm phủ định của khẳng định P: “2024 chia hết cho cả 2 và 5”.\n• Bước 1: Khẳng định P có dạng “A và B” (A: chia hết cho 2; B: chia hết cho 5).\n• Bước 2: Theo quy tắc logic De Morgan, phủ định của “A và B” là “¬A hoặc ¬B”.\n• Bước 3: Kết luận ¬P: “2024 không chia hết cho 2 hoặc không chia hết cho 5”. Vì 2024 không chia hết cho 5 nên ¬P là mệnh đề ĐÚNG.",
        advanced: "Cho mệnh đề P: “Phương trình ax² + bx + c = 0 có hai nghiệm phân biệt”. Hãy lập phủ định ¬P.\n→ Lời giải: Phủ định của 'có 2 nghiệm phân biệt' (a ≠ 0 và Δ > 0) là 'vô nghiệm hoặc có nghiệm kép' (a = 0 hoặc Δ ≤ 0).",
        tip: "Lỗi thường gặp: Phủ định của 'chia hết cho 2 và 5' KHÔNG PHẢI là 'không chia hết cho cả 2 và 5', mà là 'không chia hết cho 2 HOẶC không chia hết cho 5'.",
        visual: "logic"
      },
      {
        eyebrow: "SUY LUẬN LOGIC",
        title: "Mệnh đề kéo theo P ⇒ Q và mệnh đề đảo",
        body: "Mệnh đề “Nếu P thì Q” (P ⇒ Q) chỉ sai trong một trường hợp duy nhất: P đúng mà Q sai. Khi P sai, mệnh đề P ⇒ Q luôn được thừa nhận là đúng. Mệnh đề đảo của P ⇒ Q là Q ⇒ P. Mệnh đề thuận và mệnh đề đảo có tính đúng sai hoàn toàn độc lập với nhau.",
        formula: "P ⇒ Q sai ⇔ (P đúng và Q sai)  ·  Mệnh đề đảo: Q ⇒ P (tính đúng sai độc lập)",
        example: "Cho mệnh đề thuận: “Nếu tam giác ABC có hai góc bằng 60° thì tam giác ABC đều”.\n• Bước 1: Xét mệnh đề thuận: Tổng 3 góc là 180° ⇒ góc thứ ba = 60° ⇒ tam giác đều. Chiều thuận ĐÚNG.\n• Bước 2: Lập mệnh đề đảo Q ⇒ P: “Nếu tam giác ABC đều thì tam giác ABC có hai góc bằng 60°”.\n• Bước 3: Xét tính đúng của mệnh đề đảo: Tam giác đều có 3 góc 60° nên có 2 góc 60°. Chiều đảo ĐÚNG.",
        advanced: "Cho định lý: “Nếu số tự nhiên n có chữ số tận cùng bằng 0 thì n chia hết cho 5”. Xét mệnh đề đảo và tính đúng sai.\n→ Lời giải: Đảo là: 'Nếu n chia hết cho 5 thì n có chữ số tận cùng bằng 0'. Mệnh đề đảo SAI vì phản ví dụ n = 15 chia hết cho 5 nhưng tận cùng bằng 5.",
        tip: "Lưu ý then chốt: Đừng bao giờ mặc định định lý thuận đúng thì định lý đảo cũng đúng!",
        visual: "logic"
      },
      {
        eyebrow: "CHUẨN HÓA THUẬT NGỮ",
        title: "Điều kiện cần, điều kiện đủ và điều kiện cần và đủ",
        body: "Khi định lý P ⇒ Q đúng: P gọi là giả thiết (điều kiện đủ để có Q), Q gọi là kết luận (điều kiện cần để có P). Khi cả P ⇒ Q và Q ⇒ P đều đúng, ta có mệnh đề tương đương P ⇔ Q. Lúc đó P là điều kiện cần và đủ để có Q (hoặc 'P khi và chỉ khi Q').",
        formula: "P ⇒ Q: P là ĐK đủ để có Q · Q là ĐK cần để có P  |  P ⇔ Q: ĐK cần và đủ",
        example: "Xét quan hệ giữa hai khẳng định với số tự nhiên n:\nP: “n chia hết cho 6”, Q: “n chia hết cho 2 và 3”.\n• Bước 1: Chiều P ⇒ Q: Số chia hết cho 6 chắc chắn chia hết cho 2 và 3 (Đúng).\n• Bước 2: Chiều Q ⇒ P: Vì 2 và 3 nguyên tố cùng nhau, số chia hết cho cả 2 và 3 chắc chắn chia hết cho 6 (Đúng).\n• Bước 3: Kết luận: P ⇔ Q. P là điều kiện cần và đủ để có Q.",
        advanced: "Chứng minh: “x = 1” là điều kiện đủ nhưng không phải điều kiện cần để “x² = 1”.\n→ Lời giải: Ta có x = 1 ⇒ x² = 1 (Đúng nên là ĐK đủ). Nhưng x² = 1 ⇔ x = ±1, có thể x = −1 ≠ 1 (Nên không phải ĐK cần).",
        tip: "Mẹo nhớ thần tốc: 'Đầu ĐỦ - Đuôi CẦN'. Trong mũi tên P ⇒ Q, cái ĐẦU mũi tên (P) là ĐỦ, cái ĐUÔI được chỉ tới (Q) là CẦN.",
        visual: "logic"
      },
      {
        eyebrow: "LƯỢNG TỪ TOÁN HỌC",
        title: "Kí hiệu với mọi (∀) và tồn tại (∃)",
        body: "Kí hiệu ∀ đọc là 'với mọi' hoặc 'tất cả'. Mệnh đề '∀x ∈ X, P(x)' đúng khi P(x) đúng với MỌI x thuộc X; chỉ cần một phần tử làm P(x) sai thì mệnh đề sai. Kí hiệu ∃ đọc là 'tồn tại' hoặc 'có ít nhất một'. Mệnh đề '∃x ∈ X, P(x)' đúng khi có ÍT NHẤT MỘT phần tử thuộc X làm P(x) đúng.",
        formula: "∀x ∈ X, P(x) [Đúng khi đúng hết]  ·  ∃x ∈ X, P(x) [Đúng khi có ≥ 1 cái đúng]",
        example: "Xét tính đúng sai của hai mệnh đề:\nA: “∀x ∈ ℝ, x² > 0”; B: “∃x ∈ ℝ, x² = 0”.\n• Bước 1: Với mệnh đề A, thử x = 0 ∈ ℝ, ta có 0² = 0 không lớn hơn 0. Do đó A là mệnh đề SAI.\n• Bước 2: Với mệnh đề B, chọn ngay x = 0 ∈ ℝ, ta có 0² = 0 thỏa mãn. Do đó B là mệnh đề ĐÚNG.\n• Bước 3: Phản ví dụ bác bỏ ∀; ví dụ đơn lẻ xác nhận ∃.",
        advanced: "Cho mệnh đề: “∀x ∈ ℝ, x² + 2x + m > 0”. Tìm m để mệnh đề đúng.\n→ Lời giải: Để tam thức bậc hai luôn dương với mọi x ∈ ℝ, cần a = 1 > 0 (luôn đúng) và Δ' = 1 − m < 0 ⇔ m > 1.",
        tip: "Để chứng minh mệnh đề 'Với mọi' là sai, không cần giải tổng quát, chỉ cần tìm ra MỘT PHẢN VÍ DỤ duy nhất!",
        visual: "logic"
      },
      {
        eyebrow: "QUY TẮC BÁC BỎ",
        title: "Quy tắc phủ định mệnh đề chứa lượng từ",
        body: "Khi lấy phủ định một mệnh đề có lượng từ, ta thực hiện hai thao tác bắt buộc: (1) Đổi lượng từ ∀ thành ∃ (hoặc ngược lại ∃ thành ∀); (2) Phủ định vị từ P(x). Lưu ý khi phủ định dấu bất đẳng thức: > thành ≤; < thành ≥; = thành ≠.",
        formula: "¬(∀x ∈ X, P(x)) ⇔ ∃x ∈ X, ¬P(x)  ·  ¬(∃x ∈ X, P(x)) ⇔ ∀x ∈ X, ¬P(x)",
        example: "Lập mệnh đề phủ định của P: “∀x ∈ ℝ, x² − 2x + 3 ≥ 0”.\n• Bước 1: Đổi lượng từ ∀ thành ∃.\n• Bước 2: Phủ định bất đẳng thức: '≥ 0' đổi thành '< 0'.\n• Bước 3: Kết luận mệnh đề phủ định ¬P: “∃x ∈ ℝ, x² − 2x + 3 < 0”.",
        advanced: "Phủ định mệnh đề: “Có ít nhất một học sinh trong lớp đạt học sinh giỏi và hạnh kiểm tốt”.\n→ Lời giải: Phủ định là 'Mọi học sinh trong lớp đều không đạt học sinh giỏi hoặc không có hạnh kiểm tốt'.",
        tip: "Bẫy đề thi: Nhiều bạn chỉ đổi lượng từ mà quên phủ định dấu bất đẳng thức, hoặc đổi dấu '>' thành '<' thay vì '≤'!",
        visual: "logic"
      },
      {
        eyebrow: "PHƯƠNG PHÁP CHỨNG MINH",
        title: "Phương pháp phản chứng trong mệnh đề toán học",
        body: "Chứng minh định lý P ⇒ Q bằng phương pháp phản chứng gồm 3 bước: (1) Giả sử kết luận sai, tức là thừa nhận ¬Q đúng; (2) Từ giả thiết P và điều giả sử ¬Q, dùng lập luận toán học dẫn tới mâu thuẫn (với giả thiết P hoặc với một định lý toán học đã biết); (3) Khẳng định giả sử là sai, vậy định lý đúng.",
        formula: "Giả sử ¬Q đúng + P ⇒ Dẫn tới mâu thuẫn ⇒ Kết luận Q đúng",
        example: "Chứng minh định lý: “Với số tự nhiên n, nếu n² là số chẵn thì n là số chẵn”.\n• Bước 1 (Giả sử phản chứng): Giả sử n không phải là số chẵn, tức n là số lẻ ⇒ n = 2k + 1 (k ∈ ℕ).\n• Bước 2: Ta tính n² = (2k + 1)² = 4k² + 4k + 1 = 2(2k² + 2k) + 1. Biểu thức này là số lẻ.\n• Bước 3: Điều này mâu thuẫn với giả thiết n² là số chẵn. Vậy giả sử sai ⇒ n bắt buộc phải là số chẵn.",
        advanced: "Chứng minh rằng số √2 là một số vô tỉ bằng phương pháp phản chứng.\n→ Lời giải: Giả sử √2 là số hữu tỉ ⇒ √2 = a/b với a, b nguyên tố cùng nhau. Bình phương: 2b² = a² ⇒ a chia hết cho 2 ⇒ a = 2k ⇒ 2b² = 4k² ⇒ b² = 2k² ⇒ b chia hết cho 2. Mâu thuẫn với giả thiết a và b nguyên tố cùng nhau!",
        tip: "Dấu hiệu dùng phản chứng: Khi đề bài chứa từ ngữ 'không', 'vô tỉ', 'duy nhất' hoặc chứng minh trực tiếp quá nhiều trường hợp phức tạp.",
        visual: "logic"
      },
      {
        eyebrow: "TỔNG KẾT VÀ BẪY ĐỀ THI",
        title: "Bản đồ tư duy logic mệnh đề và chiến lược giải bài",
        body: "Chương I là nền tảng tư duy toán học cấp ba. Để đạt điểm tối đa bài thi trắc nghiệm phần Mệnh đề: Phải nắm chắc chân trị 4 bảng logic: phủ định, kéo theo, tương đương và lượng từ. Đặc biệt cẩn thận câu hỏi chứa từ khóa 'điều kiện cần', 'điều kiện đủ' và các phát biểu có từ 'mọi', 'tồn tại'.",
        formula: "Logic toán: Phân biệt rõ Chân trị (Đ/S) · Lượng từ (∀/∃) · Suy luận (Cần/Đủ/Tương đương)",
        example: "Quy trình 3 bước xử lý câu trắc nghiệm Đúng/Sai phần Mệnh đề:\n• Bước 1: Đọc kỹ mệnh đề, xác định rõ giả thiết P và kết luận Q.\n• Bước 2: Viết lại mệnh đề dưới dạng ký hiệu toán học để tránh bẫy ngữ nghĩa tự nhiên.\n• Bước 3: Tìm phản ví dụ trước (nếu là mệnh đề ∀); kiểm tra tính khả dĩ trước (nếu là mệnh đề ∃).",
        advanced: "Xét tính đúng sai của khẳng định: 'Nếu x + y > 2 thì có ít nhất một số lớn hơn 1'.\n→ Lời giải: Dùng phản chứng: Nếu cả hai số đều ≤ 1 (x ≤ 1 và y ≤ 1) thì x + y ≤ 2, mâu thuẫn với x + y > 2. Do đó khẳng định ĐÚNG.",
        tip: "Chiến thuật phòng thi: Đọc thật kỹ xem đề hỏi 'Mệnh đề nào ĐÚNG' hay 'Mệnh đề nào SAI'!",
        visual: "logic"
      }
    ]
  },
  {
    id: "sets",
    chapterId: "chuong-1",
    chapterTitle: "Chương I: Mệnh đề và tập hợp",
    lessonNumber: "Bài 2",
    title: "Tập hợp và các phép toán",
    shortTitle: "Tập hợp",
    description: "Tập con, các tập hợp số thực, giao, hợp, hiệu và phần bù.",
    duration: "12 phút",
    visual: "venn",
    slides: [
      {
        eyebrow: "KHÁI NIỆM CỐT LÕI",
        title: "Khái niệm tập hợp và các cách cho một tập hợp",
        body: "Tập hợp là khái niệm cơ bản của toán học gồm các phần tử xác định. Có hai cách chính để xác định một tập hợp: (1) Liệt kê các phần tử của tập hợp: viết các phần tử trong dấu ngoặc nhọn { }, cách nhau bởi dấu chấm phẩy; (2) Chỉ ra tính chất đặc trưng cho các phần tử của tập hợp.",
        formula: "Liệt kê: A = {a1; a2; ...}  ·  Đặc trưng: A = {x ∈ X | P(x)}",
        example: "Xác định tập hợp A các nghiệm thực của phương trình (x² − 1)(2x − 3) = 0.\n• Bước 1: Cho từng thừa số bằng 0: x² − 1 = 0 ⇔ x = ±1; 2x − 3 = 0 ⇔ x = 3/2.\n• Bước 2: Cả ba giá trị −1, 1, 3/2 đều là số thực.\n• Bước 3: Viết dưới dạng liệt kê: A = {−1; 1; 3/2}.",
        advanced: "Cho tập hợp B = {x ∈ ℤ | |2x − 1| ≤ 5}. Liệt kê các phần tử của B.\n→ Lời giải: |2x − 1| ≤ 5 ⇔ −5 ≤ 2x − 1 ≤ 5 ⇔ −4 ≤ 2x ≤ 6 ⇔ −2 ≤ x ≤ 3. Vì x ∈ ℤ nên B = {−2; −1; 0; 1; 2; 3}.",
        tip: "Lưu ý quan trọng: Mỗi phần tử trong tập hợp chỉ được viết một lần, thứ tự liệt kê các phần tử không quan trọng.",
        visual: "venn"
      },
      {
        eyebrow: "QUAN HỆ TẬP HỢP",
        title: "Tập con và hai tập hợp bằng nhau",
        body: "Tập hợp A được gọi là tập con của B (kí hiệu A ⊂ B) nếu mọi phần tử của A đều thuộc B: ∀x, x ∈ A ⇒ x ∈ B. Tập rỗng ∅ là tập con của mọi tập hợp. Một tập hợp có n phần tử thì có đúng 2ⁿ tập con. Hai tập hợp A và B bằng nhau (A = B) khi và chỉ khi A ⊂ B và B ⊂ A.",
        formula: "A ⊂ B ⇔ (∀x ∈ A ⇒ x ∈ B)  ·  A có n phần tử có 2ⁿ tập con  ·  A = B ⇔ (A ⊂ B và B ⊂ A)",
        example: "Tìm tất cả các tập con của tập hợp S = {1; 2}.\n• Bước 1: Tập con không chứa phần tử nào: ∅.\n• Bước 2: Các tập con có 1 phần tử: {1}, {2}.\n• Bước 3: Tập con có 2 phần tử (chính nó): {1; 2}.\n• Kết luận: Tập S có 2² = 4 tập con.",
        advanced: "Cho tập A = {x ∈ ℝ | x² − 4 = 0} và B = {x ∈ ℝ | (x − 2)(x² + 1) = 0}. Hỏi A có là tập con của B không?\n→ Lời giải: A = {−2; 2}. B = {2} (vì x² + 1 > 0 vô nghiệm). Vì −2 ∈ A nhưng −2 ∉ B nên A không phải là tập con của B (A ⊄ B). Ngược lại B ⊂ A.",
        tip: "Phân biệt ký hiệu: Phần tử dùng thuộc (∈), tập hợp dùng con (⊂). Viết 1 ⊂ {1; 2} là SAI, phải viết {1} ⊂ {1; 2} hoặc 1 ∈ {1; 2}.",
        visual: "venn"
      },
      {
        eyebrow: "TẬP HỢP SỐ THỰC",
        title: "Các tập hợp con của tập số thực ℝ",
        body: "Các tập số quan trọng: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Các khoảng, đoạn, nửa khoảng trên ℝ: Đoạn [a; b] lấy cả hai đầu mút a và b; Khoảng (a; b) không lấy đầu mút; Nửa khoảng [a; b) hoặc (a; b] lấy một đầu mút; Khoảng vô cực (-∞; a) hoặc [b; +∞).",
        formula: "[a; b] = {x | a ≤ x ≤ b}  ·  (a; b) = {x | a < x < b}  ·  [a; +∞) = {x | x ≥ a}",
        example: "Biểu diễn tập hợp A = {x ∈ ℝ | −2 ≤ x < 3} dưới dạng khoảng/đoạn.\n• Bước 1: Đầu mút bên trái có dấu bằng '≤' nên dùng ngoặc vuông '[' tại −2.\n• Bước 2: Đầu mút bên phải là dấu ngặt '<' nên dùng ngoặc tròn ')' tại 3.\n• Kết luận: A = [−2; 3).",
        advanced: "Cho A = [m; m + 2] và B = [1; 5]. Tìm m để A ⊂ B.\n→ Lời giải: A ⊂ B khi và chỉ khi 1 ≤ m và m + 2 ≤ 5 ⇔ 1 ≤ m ≤ 3. Vậy m ∈ [1; 3].",
        tip: "Bí quyết trục số: Khi biểu diễn trên trục số, ngoặc tròn hay vuông đều hướng phần lõm về phía phần tử được giữ lại.",
        visual: "venn"
      },
      {
        eyebrow: "PHÉP TOÁN GIAO (∩)",
        title: "Phép giao của hai tập hợp: Phần chung của cả hai",
        body: "Giao của hai tập hợp A và B (kí hiệu A ∩ B) là tập hợp gồm tất cả các phần tử vừa thuộc A, vừa thuộc B. Từ khóa logic tương ứng là 'VÀ'. Khi A ∩ B = ∅, ta nói A và B là hai tập hợp rời nhau.",
        formula: "A ∩ B = {x | x ∈ A và x ∈ B}  ·  A ∩ B = ∅ (hai tập rời nhau)",
        example: "Cho hai tập hợp A = (−3; 2] và B = [0; 5). Tìm A ∩ B.\n• Bước 1: Vẽ trục số và đánh dấu các mốc −3, 0, 2, 5.\n• Bước 2: Phần vừa thuộc (−3; 2] vừa thuộc [0; 5) là đoạn từ 0 đến 2.\n• Bước 3: Tại 0 lấy ngoặc vuông, tại 2 lấy ngoặc vuông. Kết luận: A ∩ B = [0; 2].",
        advanced: "Cho A = (−∞; m + 1) và B = [3; +∞). Tìm m để A ∩ B = ∅.\n→ Lời giải: Hai tập rời nhau khi và chỉ khi m + 1 ≤ 3 ⇔ m ≤ 2.",
        tip: "Cẩn thận dấu bằng tại đầu mút khi tìm điều kiện rời nhau: A là ngoặc tròn m+1, B là ngoặc vuông 3 nên khi m+1 = 3 thì 3 ∉ A và 3 ∈ B ⇒ giao vẫn bằng rỗng!",
        visual: "venn"
      },
      {
        eyebrow: "PHÉP TOÁN HỢP (∪)",
        title: "Phép hợp của hai tập hợp: Gom tất cả các phần tử",
        body: "Hợp của hai tập hợp A và B (kí hiệu A ∪ B) là tập hợp gồm tất cả các phần tử thuộc A hoặc thuộc B. Từ khóa logic tương ứng là 'HOẶC'. Khi lấy hợp trên trục số, ta lấy tất cả các khoảng được phủ bởi ít nhất một trong hai tập hợp.",
        formula: "A ∪ B = {x | x ∈ A hoặc x ∈ B}",
        example: "Cho A = (−2; 1) và B = [0; 4]. Tìm A ∪ B.\n• Bước 1: Biểu diễn A trên trục số từ −2 đến 1.\n• Bước 2: Biểu diễn B trên trục số từ 0 đến 4. Hai khoảng này có phần chồng lấn từ 0 đến 1.\n• Bước 3: Vùng được phủ liên tục từ −2 đến 4. Kết luận: A ∪ B = (−2; 4].",
        advanced: "Cho A = (−∞; 2] và B = [m; +∞). Tìm m để A ∪ B = ℝ.\n→ Lời giải: Để hợp phủ kín trục số ℝ, khoảng B phải nối liền hoặc phủ chồng lên A, tức m ≤ 2.",
        tip: "Lỗi phổ biến: Quên kiểm tra xem hai tập có bị ngắt quãng ở giữa không (ví dụ (-∞; 1) và (2; +∞) thì hợp không bằng ℝ mà giữ nguyên dạng viết).",
        visual: "venn"
      },
      {
        eyebrow: "HIỆU VÀ PHẦN BÙ",
        title: "Phép hiệu (\\) và phần bù C_B(A)",
        body: "Hiệu của A và B (kí hiệu A \\ B) là tập hợp gồm các phần tử thuộc A nhưng không thuộc B. Khi A là tập con của E (A ⊂ E), thì hiệu E \\ A được gọi là phần bù của A trong E, kí hiệu C_E(A).",
        formula: "A \\ B = {x | x ∈ A và x ∉ B}  ·  Khi A ⊂ E: C_E(A) = E \\ A",
        example: "Cho E = ℝ và A = [−1; 3). Tìm C_ℝ(A).\n• Bước 1: C_ℝ(A) là lấy toàn bộ trục số ℝ bỏ đi nửa khoảng [−1; 3).\n• Bước 2: Bỏ mút −1 (thuộc A) thì phần bù lấy ngoặc tròn (−∞; −1).\n• Bước 3: Bỏ mút 3 (không thuộc A) thì phần bù lấy ngoặc vuông [3; +∞).\n• Kết luận: C_ℝ(A) = (−∞; −1) ∪ [3; +∞).",
        advanced: "Cho A = [1; 4] và B = (2; 6). Tìm A \\ B và B \\ A.\n→ Lời giải: A \\ B = [1; 2] (giữ lại 1 đến 2, tại 2 thuộc A nhưng không thuộc B nên lấy ngoặc vuông). B \\ A = (4; 6) (giữ lại 4 đến 6, tại 4 thuộc A nên bị loại, lấy ngoặc tròn).",
        tip: "Mẹo lấy phần bù trên ℝ: Đổi ngoặc vuông '[' thành ngoặc tròn ')' và ngược lại đổi ngoặc tròn '(' thành ngoặc vuông '['!",
        visual: "venn"
      },
      {
        eyebrow: "ỨNG DỤNG ĐẾM PHẦN TỬ",
        title: "Công thức đếm số phần tử của tập hợp hữu hạn",
        body: "Gọi n(X) là số phần tử của tập hữu hạn X. Công thức cộng số phần tử: n(A ∪ B) = n(A) + n(B) − n(A ∩ B). Biểu đồ Ven giúp giải quyết trực quan các bài toán thực tế có nhiều nhóm học sinh hoặc đối tượng đan xen.",
        formula: "n(A ∪ B) = n(A) + n(B) − n(A ∩ B)",
        example: "Lớp 10A có 45 học sinh, trong đó có 25 bạn thích bóng đá, 20 bạn thích bóng rổ và 10 bạn thích cả hai môn. Hỏi có bao nhiêu bạn thích ít nhất một trong hai môn?\n• Áp dụng công thức: n(Đ ∪ R) = n(Đ) + n(R) − n(Đ ∩ R) = 25 + 20 − 10 = 35 bạn.\n• Số bạn không thích môn nào: 45 − 35 = 10 bạn.",
        advanced: "Một trường có 100 học sinh dự thi 3 môn Toán, Lý, Hóa. Có 50 bạn giỏi Toán, 45 bạn giỏi Lý, 40 bạn giỏi Hóa, 20 bạn giỏi cả Toán và Lý, 15 bạn giỏi cả Lý và Hóa, 10 bạn giỏi cả Toán và Hóa, 5 bạn giỏi cả 3 môn. Hỏi có bao nhiêu bạn không giỏi môn nào?\n→ Lời giải: n(T ∪ L ∪ H) = 50 + 45 + 40 − (20 + 15 + 10) + 5 = 95 bạn. Số bạn không giỏi môn nào: 100 − 95 = 5 bạn.",
        tip: "Khi vẽ biểu đồ Ven: Luôn điền số liệu từ phần giao của tất cả các tập hợp (ở trong cùng) rồi mới trừ dần ra các vòng ngoài!",
        visual: "venn"
      },
      {
        eyebrow: "BÀI TOÁN THAM SỐ NÂNG CAO",
        title: "Kỹ thuật giải bài toán tập hợp chứa tham số m",
        body: "Các dạng toán chứa tham số m thường gặp: (1) Tìm m để A ⊂ B; (2) Tìm m để A ∩ B = ∅ hoặc A ∩ B ≠ ∅; (3) Tìm m để A ∪ B là một khoảng. Phương pháp chuẩn: Luôn vẽ hai trục số song song, so sánh các đầu mút và kiểm tra thật kỹ điều kiện có xảy ra dấu bằng hay không.",
        formula: "So sánh đầu mút: a < b hoặc a ≤ b tùy thuộc vào tính chất ngoặc tròn hay vuông",
        example: "Cho A = [m − 1; m + 3] và B = (−2; 5). Tìm m để A ⊂ B.\n• Bước 1: Để A ⊂ B, cả hai đầu mút của A phải nằm hoàn toàn trong khoảng (−2; 5).\n• Bước 2: Điều kiện: −2 < m − 1 và m + 3 < 5.\n• Bước 3: Giải hệ BPT: m > −1 và m < 2 ⇔ −1 < m < 2. Vậy m ∈ (−1; 2).",
        advanced: "Cho A = (−∞; 2m + 1] và B = [m + 3; +∞). Tìm m để A ∩ B chứa đúng một phần tử.\n→ Lời giải: A ∩ B chỉ có thể chứa đúng 1 phần tử khi hai đầu mút chạm nhau: 2m + 1 = m + 3 ⇔ m = 2. Khi đó A = (−∞; 5] và B = [5; +∞) ⇒ A ∩ B = {5}.",
        tip: "Cảnh báo bẫy dấu bằng: Nếu một đầu mút là ngoặc tròn, đầu kia là ngoặc vuông thì khi trùng nhau chúng vẫn không có điểm chung!",
        visual: "venn"
      }
    ]
  }
];

export { lessonTemplates };

