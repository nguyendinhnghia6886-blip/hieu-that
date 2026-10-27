// Auto-generated comprehensive curriculum for Grade 10 Math (15 lessons, 120 slides)
export const lessons = [
  {
    "id": "propositions",
    "chapterId": "chuong-1",
    "chapterTitle": "Chương I: Mệnh đề và tập hợp",
    "lessonNumber": "Bài 1",
    "title": "Mệnh đề toán học",
    "shortTitle": "Mệnh đề toán học",
    "description": "Khái niệm mệnh đề, mệnh đề phủ định, mệnh đề kéo theo và các kí hiệu với mọi, tồn tại.",
    "duration": "12 phút",
    "visual": "logic",
    "slides": [
      {
        "eyebrow": "CHÂN LÝ TOÁN HỌC",
        "title": "Khái niệm mệnh đề và mệnh đề chứa biến",
        "body": "Mệnh đề toán học là một khẳng định có tính đúng hoặc sai rõ ràng. Một khẳng định không thể vừa đúng vừa sai. Các câu hỏi, câu cảm thán, câu cầu khiến không phải là mệnh đề. Mệnh đề chứa biến P(x) là câu khẳng định chứa biến số x mà tính đúng sai tùy thuộc vào giá trị cụ thể gán cho x.",
        "formula": "Khẳng định → Đúng (Đ) hoặc Sai (S)  ·  P(x) xác định tính đúng sai khi gán x = x0",
        "example": "Xét mệnh đề chứa biến P(n): “n² + 1 chia hết cho 5” với n ∈ ℕ.\n• Bước 1: Khi n = 1, 1² + 1 = 2 không chia hết cho 5 ⇒ P(1) là mệnh đề SAI.\n• Bước 2: Khi n = 2, 2² + 1 = 5 chia hết cho 5 ⇒ P(2) là mệnh đề ĐÚNG.\n• Bước 3: P(n) là mệnh đề chứa biến; gán n cụ thể biến nó thành mệnh đề có chân trị xác định.",
        "advanced": "Cho P(x): “x² − 2mx + m² − 1 = 0”. Tìm m để P(1) là mệnh đề đúng.\n→ Lời giải: Thay x = 1 được 1 − 2m + m² − 1 = 0 ⇔ m(m − 2) = 0 ⇔ m = 0 hoặc m = 2.",
        "tip": "Mẹo nhận diện: Câu chứa biến tự do (x, n) không có lượng từ là mệnh đề chứa biến; câu cảm xúc hoặc câu hỏi tuyệt đối không phải mệnh đề.",
        "visual": "logic"
      },
      {
        "eyebrow": "MỆNH ĐỀ PHỦ ĐỊNH",
        "title": "Bác bỏ một khẳng định (¬P)",
        "body": "Mệnh đề phủ định của P (kí hiệu ¬P hoặc P̄) khẳng định điều ngược lại với P. Quy tắc chân trị: Khi P đúng thì ¬P sai; khi P sai thì ¬P đúng. Trong ngôn ngữ, ta thường thêm hoặc bớt từ 'không' hoặc 'không phải'. Không bao giờ có trường hợp P và ¬P cùng đúng hoặc cùng sai.",
        "formula": "P đúng ⇔ ¬P sai  ·  P sai ⇔ ¬P đúng  ·  ¬(¬P) ⇔ P",
        "example": "Tìm phủ định của khẳng định P: “2024 chia hết cho cả 2 và 5”.\n• Bước 1: Khẳng định P có dạng “A và B” (A: chia hết cho 2; B: chia hết cho 5).\n• Bước 2: Theo quy tắc logic De Morgan, phủ định của “A và B” là “¬A hoặc ¬B”.\n• Bước 3: Kết luận ¬P: “2024 không chia hết cho 2 hoặc không chia hết cho 5”. Vì 2024 không chia hết cho 5 nên ¬P là mệnh đề ĐÚNG.",
        "advanced": "Cho mệnh đề P: “Phương trình ax² + bx + c = 0 có hai nghiệm phân biệt”. Hãy lập phủ định ¬P.\n→ Lời giải: Phủ định của 'có 2 nghiệm phân biệt' (a ≠ 0 và Δ > 0) là 'vô nghiệm hoặc có nghiệm kép' (a = 0 hoặc Δ ≤ 0).",
        "tip": "Lỗi thường gặp: Phủ định của 'chia hết cho 2 và 5' KHÔNG PHẢI là 'không chia hết cho cả 2 và 5', mà là 'không chia hết cho 2 HOẶC không chia hết cho 5'.",
        "visual": "logic"
      },
      {
        "eyebrow": "SUY LUẬN LOGIC",
        "title": "Mệnh đề kéo theo P ⇒ Q và mệnh đề đảo",
        "body": "Mệnh đề “Nếu P thì Q” (P ⇒ Q) chỉ sai trong một trường hợp duy nhất: P đúng mà Q sai. Khi P sai, mệnh đề P ⇒ Q luôn được thừa nhận là đúng. Mệnh đề đảo của P ⇒ Q là Q ⇒ P. Mệnh đề thuận và mệnh đề đảo có tính đúng sai hoàn toàn độc lập với nhau.",
        "formula": "P ⇒ Q sai ⇔ (P đúng và Q sai)  ·  Mệnh đề đảo: Q ⇒ P (tính đúng sai độc lập)",
        "example": "Cho mệnh đề thuận: “Nếu tam giác ABC có hai góc bằng 60° thì tam giác ABC đều”.\n• Bước 1: Xét mệnh đề thuận: Tổng 3 góc là 180° ⇒ góc thứ ba = 60° ⇒ tam giác đều. Chiều thuận ĐÚNG.\n• Bước 2: Lập mệnh đề đảo Q ⇒ P: “Nếu tam giác ABC đều thì tam giác ABC có hai góc bằng 60°”.\n• Bước 3: Xét tính đúng của mệnh đề đảo: Tam giác đều có 3 góc 60° nên có 2 góc 60°. Chiều đảo ĐÚNG.",
        "advanced": "Cho định lý: “Nếu số tự nhiên n có chữ số tận cùng bằng 0 thì n chia hết cho 5”. Xét mệnh đề đảo và tính đúng sai.\n→ Lời giải: Đảo là: 'Nếu n chia hết cho 5 thì n có chữ số tận cùng bằng 0'. Mệnh đề đảo SAI vì phản ví dụ n = 15 chia hết cho 5 nhưng tận cùng bằng 5.",
        "tip": "Lưu ý then chốt: Đừng bao giờ mặc định định lý thuận đúng thì định lý đảo cũng đúng!",
        "visual": "logic"
      },
      {
        "eyebrow": "CHUẨN HÓA THUẬT NGỮ",
        "title": "Điều kiện cần, điều kiện đủ và điều kiện cần và đủ",
        "body": "Khi định lý P ⇒ Q đúng: P gọi là giả thiết (điều kiện đủ để có Q), Q gọi là kết luận (điều kiện cần để có P). Khi cả P ⇒ Q và Q ⇒ P đều đúng, ta có mệnh đề tương đương P ⇔ Q. Lúc đó P là điều kiện cần và đủ để có Q (hoặc 'P khi và chỉ khi Q').",
        "formula": "P ⇒ Q: P là ĐK đủ để có Q · Q là ĐK cần để có P  |  P ⇔ Q: ĐK cần và đủ",
        "example": "Xét quan hệ giữa hai khẳng định với số tự nhiên n:\nP: “n chia hết cho 6”, Q: “n chia hết cho 2 và 3”.\n• Bước 1: Chiều P ⇒ Q: Số chia hết cho 6 chắc chắn chia hết cho 2 và 3 (Đúng).\n• Bước 2: Chiều Q ⇒ P: Vì 2 và 3 nguyên tố cùng nhau, số chia hết cho cả 2 và 3 chắc chắn chia hết cho 6 (Đúng).\n• Bước 3: Kết luận: P ⇔ Q. P là điều kiện cần và đủ để có Q.",
        "advanced": "Chứng minh: “x = 1” là điều kiện đủ nhưng không phải điều kiện cần để “x² = 1”.\n→ Lời giải: Ta có x = 1 ⇒ x² = 1 (Đúng nên là ĐK đủ). Nhưng x² = 1 ⇔ x = ±1, có thể x = −1 ≠ 1 (Nên không phải ĐK cần).",
        "tip": "Mẹo nhớ thần tốc: 'Đầu ĐỦ - Đuôi CẦN'. Trong mũi tên P ⇒ Q, cái ĐẦU mũi tên (P) là ĐỦ, cái ĐUÔI được chỉ tới (Q) là CẦN.",
        "visual": "logic"
      },
      {
        "eyebrow": "LƯỢNG TỪ TOÁN HỌC",
        "title": "Kí hiệu với mọi (∀) và tồn tại (∃)",
        "body": "Kí hiệu ∀ đọc là 'với mọi' hoặc 'tất cả'. Mệnh đề '∀x ∈ X, P(x)' đúng khi P(x) đúng với MỌI x thuộc X; chỉ cần một phần tử làm P(x) sai thì mệnh đề sai. Kí hiệu ∃ đọc là 'tồn tại' hoặc 'có ít nhất một'. Mệnh đề '∃x ∈ X, P(x)' đúng khi có ÍT NHẤT MỘT phần tử thuộc X làm P(x) đúng.",
        "formula": "∀x ∈ X, P(x) [Đúng khi đúng hết]  ·  ∃x ∈ X, P(x) [Đúng khi có ≥ 1 cái đúng]",
        "example": "Xét tính đúng sai của hai mệnh đề:\nA: “∀x ∈ ℝ, x² > 0”; B: “∃x ∈ ℝ, x² = 0”.\n• Bước 1: Với mệnh đề A, thử x = 0 ∈ ℝ, ta có 0² = 0 không lớn hơn 0. Do đó A là mệnh đề SAI.\n• Bước 2: Với mệnh đề B, chọn ngay x = 0 ∈ ℝ, ta có 0² = 0 thỏa mãn. Do đó B là mệnh đề ĐÚNG.\n• Bước 3: Phản ví dụ bác bỏ ∀; ví dụ đơn lẻ xác nhận ∃.",
        "advanced": "Cho mệnh đề: “∀x ∈ ℝ, x² + 2x + m > 0”. Tìm m để mệnh đề đúng.\n→ Lời giải: Để tam thức bậc hai luôn dương với mọi x ∈ ℝ, cần a = 1 > 0 (luôn đúng) và Δ' = 1 − m < 0 ⇔ m > 1.",
        "tip": "Để chứng minh mệnh đề 'Với mọi' là sai, không cần giải tổng quát, chỉ cần tìm ra MỘT PHẢN VÍ DỤ duy nhất!",
        "visual": "logic"
      },
      {
        "eyebrow": "QUY TẮC BÁC BỎ",
        "title": "Quy tắc phủ định mệnh đề chứa lượng từ",
        "body": "Khi lấy phủ định một mệnh đề có lượng từ, ta thực hiện hai thao tác bắt buộc: (1) Đổi lượng từ ∀ thành ∃ (hoặc ngược lại ∃ thành ∀); (2) Phủ định vị từ P(x). Lưu ý khi phủ định dấu bất đẳng thức: > thành ≤; < thành ≥; = thành ≠.",
        "formula": "¬(∀x ∈ X, P(x)) ⇔ ∃x ∈ X, ¬P(x)  ·  ¬(∃x ∈ X, P(x)) ⇔ ∀x ∈ X, ¬P(x)",
        "example": "Lập mệnh đề phủ định của P: “∀x ∈ ℝ, x² − 2x + 3 ≥ 0”.\n• Bước 1: Đổi lượng từ ∀ thành ∃.\n• Bước 2: Phủ định bất đẳng thức: '≥ 0' đổi thành '< 0'.\n• Bước 3: Kết luận mệnh đề phủ định ¬P: “∃x ∈ ℝ, x² − 2x + 3 < 0”.",
        "advanced": "Phủ định mệnh đề: “Có ít nhất một học sinh trong lớp đạt học sinh giỏi và hạnh kiểm tốt”.\n→ Lời giải: Phủ định là 'Mọi học sinh trong lớp đều không đạt học sinh giỏi hoặc không có hạnh kiểm tốt'.",
        "tip": "Bẫy đề thi: Nhiều bạn chỉ đổi lượng từ mà quên phủ định dấu bất đẳng thức, hoặc đổi dấu '>' thành '<' thay vì '≤'!",
        "visual": "logic"
      },
      {
        "eyebrow": "PHƯƠNG PHÁP CHỨNG MINH",
        "title": "Phương pháp phản chứng trong mệnh đề toán học",
        "body": "Chứng minh định lý P ⇒ Q bằng phương pháp phản chứng gồm 3 bước: (1) Giả sử kết luận sai, tức là thừa nhận ¬Q đúng; (2) Từ giả thiết P và điều giả sử ¬Q, dùng lập luận toán học dẫn tới mâu thuẫn (với giả thiết P hoặc với một định lý toán học đã biết); (3) Khẳng định giả sử là sai, vậy định lý đúng.",
        "formula": "Giả sử ¬Q đúng + P ⇒ Dẫn tới mâu thuẫn ⇒ Kết luận Q đúng",
        "example": "Chứng minh định lý: “Với số tự nhiên n, nếu n² là số chẵn thì n là số chẵn”.\n• Bước 1 (Giả sử phản chứng): Giả sử n không phải là số chẵn, tức n là số lẻ ⇒ n = 2k + 1 (k ∈ ℕ).\n• Bước 2: Ta tính n² = (2k + 1)² = 4k² + 4k + 1 = 2(2k² + 2k) + 1. Biểu thức này là số lẻ.\n• Bước 3: Điều này mâu thuẫn với giả thiết n² là số chẵn. Vậy giả sử sai ⇒ n bắt buộc phải là số chẵn.",
        "advanced": "Chứng minh rằng số √2 là một số vô tỉ bằng phương pháp phản chứng.\n→ Lời giải: Giả sử √2 là số hữu tỉ ⇒ √2 = a/b với a, b nguyên tố cùng nhau. Bình phương: 2b² = a² ⇒ a chia hết cho 2 ⇒ a = 2k ⇒ 2b² = 4k² ⇒ b² = 2k² ⇒ b chia hết cho 2. Mâu thuẫn với giả thiết a và b nguyên tố cùng nhau!",
        "tip": "Dấu hiệu dùng phản chứng: Khi đề bài chứa từ ngữ 'không', 'vô tỉ', 'duy nhất' hoặc chứng minh trực tiếp quá nhiều trường hợp phức tạp.",
        "visual": "logic"
      },
      {
        "eyebrow": "TỔNG KẾT VÀ BẪY ĐỀ THI",
        "title": "Bản đồ tư duy logic mệnh đề và chiến lược giải bài",
        "body": "Chương I là nền tảng tư duy toán học cấp ba. Để đạt điểm tối đa bài thi trắc nghiệm phần Mệnh đề: Phải nắm chắc chân trị 4 bảng logic: phủ định, kéo theo, tương đương và lượng từ. Đặc biệt cẩn thận câu hỏi chứa từ khóa 'điều kiện cần', 'điều kiện đủ' và các phát biểu có từ 'mọi', 'tồn tại'.",
        "formula": "Logic toán: Phân biệt rõ Chân trị (Đ/S) · Lượng từ (∀/∃) · Suy luận (Cần/Đủ/Tương đương)",
        "example": "Quy trình 3 bước xử lý câu trắc nghiệm Đúng/Sai phần Mệnh đề:\n• Bước 1: Đọc kỹ mệnh đề, xác định rõ giả thiết P và kết luận Q.\n• Bước 2: Viết lại mệnh đề dưới dạng ký hiệu toán học để tránh bẫy ngữ nghĩa tự nhiên.\n• Bước 3: Tìm phản ví dụ trước (nếu là mệnh đề ∀); kiểm tra tính khả dĩ trước (nếu là mệnh đề ∃).",
        "advanced": "Xét tính đúng sai của khẳng định: 'Nếu x + y > 2 thì có ít nhất một số lớn hơn 1'.\n→ Lời giải: Dùng phản chứng: Nếu cả hai số đều ≤ 1 (x ≤ 1 và y ≤ 1) thì x + y ≤ 2, mâu thuẫn với x + y > 2. Do đó khẳng định ĐÚNG.",
        "tip": "Chiến thuật phòng thi: Đọc thật kỹ xem đề hỏi 'Mệnh đề nào ĐÚNG' hay 'Mệnh đề nào SAI'!",
        "visual": "logic"
      }
    ]
  },
  {
    "id": "sets",
    "chapterId": "chuong-1",
    "chapterTitle": "Chương I: Mệnh đề và tập hợp",
    "lessonNumber": "Bài 2",
    "title": "Tập hợp và các phép toán trên tập hợp",
    "shortTitle": "Tập hợp & Phép toán",
    "description": "Tập con, các tập hợp số thực, giao, hợp, hiệu và phần bù.",
    "duration": "12 phút",
    "visual": "venn",
    "slides": [
      {
        "eyebrow": "KHÁI NIỆM CỐT LÕI",
        "title": "Khái niệm tập hợp và các cách cho một tập hợp",
        "body": "Tập hợp là khái niệm cơ bản của toán học gồm các phần tử xác định. Có hai cách chính để xác định một tập hợp: (1) Liệt kê các phần tử của tập hợp: viết các phần tử trong dấu ngoặc nhọn { }, cách nhau bởi dấu chấm phẩy; (2) Chỉ ra tính chất đặc trưng cho các phần tử của tập hợp.",
        "formula": "Liệt kê: A = {a1; a2; ...}  ·  Đặc trưng: A = {x ∈ X | P(x)}",
        "example": "Xác định tập hợp A các nghiệm thực của phương trình (x² − 1)(2x − 3) = 0.\n• Bước 1: Cho từng thừa số bằng 0: x² − 1 = 0 ⇔ x = ±1; 2x − 3 = 0 ⇔ x = 3/2.\n• Bước 2: Cả ba giá trị −1, 1, 3/2 đều là số thực.\n• Bước 3: Viết dưới dạng liệt kê: A = {−1; 1; 3/2}.",
        "advanced": "Cho tập hợp B = {x ∈ ℤ | |2x − 1| ≤ 5}. Liệt kê các phần tử của B.\n→ Lời giải: |2x − 1| ≤ 5 ⇔ −5 ≤ 2x − 1 ≤ 5 ⇔ −4 ≤ 2x ≤ 6 ⇔ −2 ≤ x ≤ 3. Vì x ∈ ℤ nên B = {−2; −1; 0; 1; 2; 3}.",
        "tip": "Lưu ý quan trọng: Mỗi phần tử trong tập hợp chỉ được viết một lần, thứ tự liệt kê các phần tử không quan trọng.",
        "visual": "venn"
      },
      {
        "eyebrow": "QUAN HỆ TẬP HỢP",
        "title": "Tập con và hai tập hợp bằng nhau",
        "body": "Tập hợp A được gọi là tập con của B (kí hiệu A ⊂ B) nếu mọi phần tử của A đều thuộc B: ∀x, x ∈ A ⇒ x ∈ B. Tập rỗng ∅ là tập con của mọi tập hợp. Một tập hợp có n phần tử thì có đúng 2ⁿ tập con. Hai tập hợp A và B bằng nhau (A = B) khi và chỉ khi A ⊂ B và B ⊂ A.",
        "formula": "A ⊂ B ⇔ (∀x ∈ A ⇒ x ∈ B)  ·  A có n phần tử có 2ⁿ tập con  ·  A = B ⇔ (A ⊂ B và B ⊂ A)",
        "example": "Tìm tất cả các tập con của tập hợp S = {1; 2}.\n• Bước 1: Tập con không chứa phần tử nào: ∅.\n• Bước 2: Các tập con có 1 phần tử: {1}, {2}.\n• Bước 3: Tập con có 2 phần tử (chính nó): {1; 2}.\n• Kết luận: Tập S có 2² = 4 tập con.",
        "advanced": "Cho tập A = {x ∈ ℝ | x² − 4 = 0} và B = {x ∈ ℝ | (x − 2)(x² + 1) = 0}. Hỏi A có là tập con của B không?\n→ Lời giải: A = {−2; 2}. B = {2} (vì x² + 1 > 0 vô nghiệm). Vì −2 ∈ A nhưng −2 ∉ B nên A không phải là tập con của B (A ⊄ B). Ngược lại B ⊂ A.",
        "tip": "Phân biệt ký hiệu: Phần tử dùng thuộc (∈), tập hợp dùng con (⊂). Viết 1 ⊂ {1; 2} là SAI, phải viết {1} ⊂ {1; 2} hoặc 1 ∈ {1; 2}.",
        "visual": "venn"
      },
      {
        "eyebrow": "TẬP HỢP SỐ THỰC",
        "title": "Các tập hợp con của tập số thực ℝ",
        "body": "Các tập số quan trọng: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Các khoảng, đoạn, nửa khoảng trên ℝ: Đoạn [a; b] lấy cả hai đầu mút a và b; Khoảng (a; b) không lấy đầu mút; Nửa khoảng [a; b) hoặc (a; b] lấy một đầu mút; Khoảng vô cực (-∞; a) hoặc [b; +∞).",
        "formula": "[a; b] = {x | a ≤ x ≤ b}  ·  (a; b) = {x | a < x < b}  ·  [a; +∞) = {x | x ≥ a}",
        "example": "Biểu diễn tập hợp A = {x ∈ ℝ | −2 ≤ x < 3} dưới dạng khoảng/đoạn.\n• Bước 1: Đầu mút bên trái có dấu bằng '≤' nên dùng ngoặc vuông '[' tại −2.\n• Bước 2: Đầu mút bên phải là dấu ngặt '<' nên dùng ngoặc tròn ')' tại 3.\n• Kết luận: A = [−2; 3).",
        "advanced": "Cho A = [m; m + 2] và B = [1; 5]. Tìm m để A ⊂ B.\n→ Lời giải: A ⊂ B khi và chỉ khi 1 ≤ m và m + 2 ≤ 5 ⇔ 1 ≤ m ≤ 3. Vậy m ∈ [1; 3].",
        "tip": "Bí quyết trục số: Khi biểu diễn trên trục số, ngoặc tròn hay vuông đều hướng phần lõm về phía phần tử được giữ lại.",
        "visual": "venn"
      },
      {
        "eyebrow": "PHÉP TOÁN GIAO (∩)",
        "title": "Phép giao của hai tập hợp: Phần chung của cả hai",
        "body": "Giao của hai tập hợp A và B (kí hiệu A ∩ B) là tập hợp gồm tất cả các phần tử vừa thuộc A, vừa thuộc B. Từ khóa logic tương ứng là 'VÀ'. Khi A ∩ B = ∅, ta nói A và B là hai tập hợp rời nhau.",
        "formula": "A ∩ B = {x | x ∈ A và x ∈ B}  ·  A ∩ B = ∅ (hai tập rời nhau)",
        "example": "Cho hai tập hợp A = (−3; 2] và B = [0; 5). Tìm A ∩ B.\n• Bước 1: Vẽ trục số và đánh dấu các mốc −3, 0, 2, 5.\n• Bước 2: Phần vừa thuộc (−3; 2] vừa thuộc [0; 5) là đoạn từ 0 đến 2.\n• Bước 3: Tại 0 lấy ngoặc vuông, tại 2 lấy ngoặc vuông. Kết luận: A ∩ B = [0; 2].",
        "advanced": "Cho A = (−∞; m + 1) và B = [3; +∞). Tìm m để A ∩ B = ∅.\n→ Lời giải: Hai tập rời nhau khi và chỉ khi m + 1 ≤ 3 ⇔ m ≤ 2.",
        "tip": "Cẩn thận dấu bằng tại đầu mút khi tìm điều kiện rời nhau: A là ngoặc tròn m+1, B là ngoặc vuông 3 nên khi m+1 = 3 thì 3 ∉ A và 3 ∈ B ⇒ giao vẫn bằng rỗng!",
        "visual": "venn"
      },
      {
        "eyebrow": "PHÉP TOÁN HỢP (∪)",
        "title": "Phép hợp của hai tập hợp: Gom tất cả các phần tử",
        "body": "Hợp của hai tập hợp A và B (kí hiệu A ∪ B) là tập hợp gồm tất cả các phần tử thuộc A hoặc thuộc B. Từ khóa logic tương ứng là 'HOẶC'. Khi lấy hợp trên trục số, ta lấy tất cả các khoảng được phủ bởi ít nhất một trong hai tập hợp.",
        "formula": "A ∪ B = {x | x ∈ A hoặc x ∈ B}",
        "example": "Cho A = (−2; 1) và B = [0; 4]. Tìm A ∪ B.\n• Bước 1: Biểu diễn A trên trục số từ −2 đến 1.\n• Bước 2: Biểu diễn B trên trục số từ 0 đến 4. Hai khoảng này có phần chồng lấn từ 0 đến 1.\n• Bước 3: Vùng được phủ liên tục từ −2 đến 4. Kết luận: A ∪ B = (−2; 4].",
        "advanced": "Cho A = (−∞; 2] và B = [m; +∞). Tìm m để A ∪ B = ℝ.\n→ Lời giải: Để hợp phủ kín trục số ℝ, khoảng B phải nối liền hoặc phủ chồng lên A, tức m ≤ 2.",
        "tip": "Lỗi phổ biến: Quên kiểm tra xem hai tập có bị ngắt quãng ở giữa không (ví dụ (-∞; 1) và (2; +∞) thì hợp không bằng ℝ mà giữ nguyên dạng viết).",
        "visual": "venn"
      },
      {
        "eyebrow": "HIỆU VÀ PHẦN BÙ",
        "title": "Phép hiệu (\\) và phần bù C_B(A)",
        "body": "Hiệu của A và B (kí hiệu A \\ B) là tập hợp gồm các phần tử thuộc A nhưng không thuộc B. Khi A là tập con của E (A ⊂ E), thì hiệu E \\ A được gọi là phần bù của A trong E, kí hiệu C_E(A).",
        "formula": "A \\ B = {x | x ∈ A và x ∉ B}  ·  Khi A ⊂ E: C_E(A) = E \\ A",
        "example": "Cho E = ℝ và A = [−1; 3). Tìm C_ℝ(A).\n• Bước 1: C_ℝ(A) là lấy toàn bộ trục số ℝ bỏ đi nửa khoảng [−1; 3).\n• Bước 2: Bỏ mút −1 (thuộc A) thì phần bù lấy ngoặc tròn (−∞; −1).\n• Bước 3: Bỏ mút 3 (không thuộc A) thì phần bù lấy ngoặc vuông [3; +∞).\n• Kết luận: C_ℝ(A) = (−∞; −1) ∪ [3; +∞).",
        "advanced": "Cho A = [1; 4] và B = (2; 6). Tìm A \\ B và B \\ A.\n→ Lời giải: A \\ B = [1; 2] (giữ lại 1 đến 2, tại 2 thuộc A nhưng không thuộc B nên lấy ngoặc vuông). B \\ A = (4; 6) (giữ lại 4 đến 6, tại 4 thuộc A nên bị loại, lấy ngoặc tròn).",
        "tip": "Mẹo lấy phần bù trên ℝ: Đổi ngoặc vuông '[' thành ngoặc tròn ')' và ngược lại đổi ngoặc tròn '(' thành ngoặc vuông '['!",
        "visual": "venn"
      },
      {
        "eyebrow": "ỨNG DỤNG ĐẾM PHẦN TỬ",
        "title": "Công thức đếm số phần tử của tập hợp hữu hạn",
        "body": "Gọi n(X) là số phần tử của tập hữu hạn X. Công thức cộng số phần tử: n(A ∪ B) = n(A) + n(B) − n(A ∩ B). Biểu đồ Ven giúp giải quyết trực quan các bài toán thực tế có nhiều nhóm học sinh hoặc đối tượng đan xen.",
        "formula": "n(A ∪ B) = n(A) + n(B) − n(A ∩ B)",
        "example": "Lớp 10A có 45 học sinh, trong đó có 25 bạn thích bóng đá, 20 bạn thích bóng rổ và 10 bạn thích cả hai môn. Hỏi có bao nhiêu bạn thích ít nhất một trong hai môn?\n• Áp dụng công thức: n(Đ ∪ R) = n(Đ) + n(R) − n(Đ ∩ R) = 25 + 20 − 10 = 35 bạn.\n• Số bạn không thích môn nào: 45 − 35 = 10 bạn.",
        "advanced": "Một trường có 100 học sinh dự thi 3 môn Toán, Lý, Hóa. Có 50 bạn giỏi Toán, 45 bạn giỏi Lý, 40 bạn giỏi Hóa, 20 bạn giỏi cả Toán và Lý, 15 bạn giỏi cả Lý và Hóa, 10 bạn giỏi cả Toán và Hóa, 5 bạn giỏi cả 3 môn. Hỏi có bao nhiêu bạn không giỏi môn nào?\n→ Lời giải: n(T ∪ L ∪ H) = 50 + 45 + 40 − (20 + 15 + 10) + 5 = 95 bạn. Số bạn không giỏi môn nào: 100 − 95 = 5 bạn.",
        "tip": "Khi vẽ biểu đồ Ven: Luôn điền số liệu từ phần giao của tất cả các tập hợp (ở trong cùng) rồi mới trừ dần ra các vòng ngoài!",
        "visual": "venn"
      },
      {
        "eyebrow": "BÀI TOÁN THAM SỐ NÂNG CAO",
        "title": "Kỹ thuật giải bài toán tập hợp chứa tham số m",
        "body": "Các dạng toán chứa tham số m thường gặp: (1) Tìm m để A ⊂ B; (2) Tìm m để A ∩ B = ∅ hoặc A ∩ B ≠ ∅; (3) Tìm m để A ∪ B là một khoảng. Phương pháp chuẩn: Luôn vẽ hai trục số song song, so sánh các đầu mút và kiểm tra thật kỹ điều kiện có xảy ra dấu bằng hay không.",
        "formula": "So sánh đầu mút: a < b hoặc a ≤ b tùy thuộc vào tính chất ngoặc tròn hay vuông",
        "example": "Cho A = [m − 1; m + 3] và B = (−2; 5). Tìm m để A ⊂ B.\n• Bước 1: Để A ⊂ B, cả hai đầu mút của A phải nằm hoàn toàn trong khoảng (−2; 5).\n• Bước 2: Điều kiện: −2 < m − 1 và m + 3 < 5.\n• Bước 3: Giải hệ BPT: m > −1 và m < 2 ⇔ −1 < m < 2. Vậy m ∈ (−1; 2).",
        "advanced": "Cho A = (−∞; 2m + 1] và B = [m + 3; +∞). Tìm m để A ∩ B chứa đúng một phần tử.\n→ Lời giải: A ∩ B chỉ có thể chứa đúng 1 phần tử khi hai đầu mút chạm nhau: 2m + 1 = m + 3 ⇔ m = 2. Khi đó A = (−∞; 5] và B = [5; +∞) ⇒ A ∩ B = {5}.",
        "tip": "Cảnh báo bẫy dấu bằng: Nếu một đầu mút là ngoặc tròn, đầu kia là ngoặc vuông thì khi trùng nhau chúng vẫn không có điểm chung!",
        "visual": "venn"
      }
    ]
  },
  {
    "id": "inequalities-2var",
    "chapterId": "chuong-2",
    "chapterTitle": "Chương II: Bất phương trình và hệ BPT bậc nhất hai ẩn",
    "lessonNumber": "Bài 3",
    "title": "Bất phương trình bậc nhất hai ẩn",
    "shortTitle": "BPT bậc nhất hai ẩn",
    "description": "Nhận dạng bất phương trình và cách biểu diễn miền nghiệm trên mặt phẳng tọa độ.",
    "duration": "12 phút",
    "visual": "halfplane",
    "slides": [
      {
        "eyebrow": "DẠNG CHUẨN VÀ ĐIỀU KIỆN",
        "title": "Khái niệm bất phương trình bậc nhất hai ẩn",
        "body": "Bất phương trình bậc nhất hai ẩn x, y có dạng tổng quát là ax + by + c < 0 (hoặc ≤ 0, > 0, ≥ 0), trong đó a, b, c là các số thực đã cho và a, b không đồng thời bằng 0 (a² + b² > 0). Mỗi cặp số (x0; y0) thỏa mãn bất đẳng thức được gọi là một nghiệm.",
        "formula": "ax + by + c ≤ 0 (hoặc < 0, ≥ 0, > 0) với a² + b² ≠ 0",
        "example": "Kiểm tra xem cặp số (1; 2) và (−1; 3) có là nghiệm của 2x − 3y + 5 ≥ 0 không.\n• Với (1; 2): Thay x = 1, y = 2 vào vế trái: 2(1) − 3(2) + 5 = 1 ≥ 0 (Đúng) ⇒ (1; 2) là một nghiệm.\n• Với (−1; 3): Thay x = −1, y = 3 vào vế trái: 2(−1) − 3(3) + 5 = −6 < 0 (Sai) ⇒ (−1; 3) không phải là nghiệm.",
        "advanced": "Tìm m để cặp số (m; 1) là nghiệm của bất phương trình 3x − 2y + 4 > 0.\n→ Lời giải: Thay x = m, y = 1 được 3m − 2(1) + 4 > 0 ⇔ 3m + 2 > 0 ⇔ m > −2/3.",
        "tip": "Mẹo nhận dạng: Bậc của x và y đều phải là bậc 1 và không chứa tích x·y hoặc phân thức chứa ẩn ở mẫu.",
        "visual": "halfplane"
      },
      {
        "eyebrow": "ĐƯỜNG THẲNG BỜ",
        "title": "Đường thẳng bờ d chia mặt phẳng thành hai nửa",
        "body": "Đường thẳng d: ax + by + c = 0 chia mặt phẳng tọa độ Oxy thành hai nửa mặt phẳng đối xứng nhau. Một nửa mặt phẳng gồm các điểm làm cho ax + by + c > 0, và nửa mặt phẳng còn lại gồm các điểm làm cho ax + by + c < 0.",
        "formula": "Đường thẳng d: ax + by + c = 0 là bờ của hai nửa mặt phẳng",
        "example": "Vẽ đường thẳng bờ d: x + 2y − 4 = 0.\n• Tìm giao với trục tung Oy (cho x = 0): 0 + 2y − 4 = 0 ⇔ y = 2 ⇒ A(0; 2).\n• Tìm giao với trục hoành Ox (cho y = 0): x + 2(0) − 4 = 0 ⇔ x = 4 ⇒ B(4; 0).\n• Nối A và B ta được đường thẳng bờ d.",
        "advanced": "Cho đường thẳng d: (m − 1)x + 2y − 6 = 0. Tìm m để d đi qua điểm M(2; 1).\n→ Lời giải: Thay x = 2, y = 1 vào PT: 2(m − 1) + 2(1) − 6 = 0 ⇔ 2m − 2 + 2 − 6 = 0 ⇔ 2m = 6 ⇔ m = 3.",
        "tip": "Để vẽ đường thẳng bờ chính xác, luôn chọn 2 điểm cắt trục tọa độ (cho x=0 tìm y và cho y=0 tìm x).",
        "visual": "halfplane"
      },
      {
        "eyebrow": "PHƯƠNG PHÁP CHỌN ĐIỂM THỬ",
        "title": "Kỹ thuật thử điểm O(0; 0) xác định miền nghiệm",
        "body": "Để biết nửa mặt phẳng nào là miền nghiệm, ta lấy một điểm M0(x0; y0) không nằm trên bờ d (thông thường chọn ngay gốc tọa độ O(0; 0) nếu c ≠ 0). Thay tọa độ M0 vào biểu thức ax + by + c. Nếu thỏa mãn BPT thì nửa mặt phẳng chứa M0 là miền nghiệm; nếu không thỏa mãn thì nửa mặt phẳng còn lại là miền nghiệm.",
        "formula": "Tính giá trị tại O(0; 0): a(0) + b(0) + c = c, so sánh với 0",
        "example": "Xác định miền nghiệm của BPT 3x − y + 6 > 0.\n• Bước 1: Đường thẳng bờ d: 3x − y + 6 = 0 đi qua (−2; 0) và (0; 6).\n• Bước 2: Thử O(0; 0): 3(0) − 0 + 6 = 6 > 0 (Thỏa mãn BPT).\n• Bước 3: Miền nghiệm là nửa mặt phẳng bờ d có chứa gốc tọa độ O(0; 0).",
        "advanced": "Nếu đường thẳng d đi qua gốc tọa độ O (tức c = 0, ví dụ 2x − y ≤ 0), ta chọn điểm thử như thế nào?\n→ Lời giải: Vì O nằm trên bờ d, ta chọn điểm khác không thuộc d, ví dụ chọn điểm A(1; 0) trên trục Ox. Thay vào: 2(1) − 0 = 2 ≤ 0 (Sai) ⇒ Miền nghiệm là nửa mặt phẳng không chứa điểm A(1; 0).",
        "tip": "Cực kỳ lưu ý: Chỉ được thử gốc O(0; 0) khi c ≠ 0! Nếu c = 0, hãy thử ngay điểm (1; 0) hoặc (0; 1).",
        "visual": "halfplane"
      },
      {
        "eyebrow": "PHÂN BIỆT BỜ NGẶT VÀ KHÔNG NGẶT",
        "title": "Kể cả bờ (nét liền) và không kể bờ (nét đứt)",
        "body": "Nếu bất phương trình có dấu ≤ hoặc ≥ (chứa dấu bằng), các điểm nằm trên đường thẳng bờ d cũng là nghiệm. Ta vẽ bờ d bằng NÉT LIỀN. Nếu bất phương trình có dấu < hoặc > (ngặt), các điểm trên bờ d không phải là nghiệm, ta vẽ bờ d bằng NÉT ĐỨT.",
        "formula": "≤ hoặc ≥ : Nét liền (kể cả bờ)  |  < hoặc > : Nét đứt (không kể bờ)",
        "example": "Xác định bờ của BPT 2x + 5y ≥ 10.\n• Vì có dấu '≥' (chứa dấu bằng), các nghiệm bao gồm cả các điểm thỏa mãn 2x + 5y = 10.\n• Khi vẽ đồ thị, đường thẳng 2x + 5y = 10 bắt buộc phải vẽ bằng NÉT LIỀN.",
        "advanced": "Một bài thi trắc nghiệm hỏi: 'Cặp số nào sau đây thuộc miền nghiệm của x − 2y > 4?'. Các phương án có điểm A(6; 1).\n→ Lời giải: Thay A(6; 1): 6 − 2(1) = 4 > 4 (Sai vì 4 không lớn hơn 4). Điểm A nằm trên bờ nét đứt nên KHÔNG thuộc miền nghiệm!",
        "tip": "Bẫy điểm thi cực hay gặp: Điểm nằm trên đường bờ chỉ là nghiệm khi BPT có dấu '≤' hoặc '≥'!",
        "visual": "halfplane"
      },
      {
        "eyebrow": "QUY TRÌNH BIỂU DIỄN",
        "title": "Ba bước vẽ miền nghiệm chuẩn trong phòng thi",
        "body": "Quy trình vẽ miền nghiệm chuẩn 3 bước: (1) Vẽ đường thẳng d: ax + by + c = 0 (nét liền nếu ≤, ≥; nét đứt nếu <, >); (2) Lấy một điểm thử M0(x0; y0) không thuộc d và kiểm tra tính đúng sai; (3) Kết luận miền nghiệm và gạch bỏ phần mặt phẳng không lấy.",
        "formula": "Bước 1: Vẽ d  →  Bước 2: Thử điểm  →  Bước 3: Gạch bỏ và kết luận",
        "example": "Biểu diễn miền nghiệm của x − y − 2 ≤ 0.\n• Bước 1: Vẽ bờ d: x − y − 2 = 0 qua (2; 0) và (0; −2) bằng nét liền.\n• Bước 2: Thử O(0; 0): 0 − 0 − 2 = −2 ≤ 0 (Đúng).\n• Bước 3: Miền nghiệm là nửa mặt phẳng bờ d chứa điểm O(0; 0) (kể cả bờ d).",
        "advanced": "Biểu diễn miền nghiệm của BPT đặc biệt: x ≥ 3.\n→ Lời giải: Bờ là đường thẳng x = 3 song song với trục Oy. Thử O(0; 0): 0 ≥ 3 (Sai). Miền nghiệm là nửa mặt phẳng bên phải đường thẳng x = 3 (kể cả bờ x = 3).",
        "tip": "Quy ước tự luận: Nhớ ghi rõ câu 'kể cả bờ d' hoặc 'không kể bờ d' ở dòng kết luận cuối cùng.",
        "visual": "halfplane"
      },
      {
        "eyebrow": "ỨNG DỤNG THỰC TẾ 1",
        "title": "Mô hình hóa bài toán ngân sách và tiêu dùng",
        "body": "Trong thực tế, các ràng buộc về tài chính, mua sắm thường dẫn đến bất phương trình bậc nhất hai ẩn. Ta gọi x, y lần lượt là số lượng các mặt hàng cần mua, xác định đơn giá và thiết lập bất đẳng thức biểu thị tổng số tiền không vượt quá ngân sách.",
        "formula": "Giá_A · x + Giá_B · y ≤ Tổng ngân sách (x, y ∈ ℕ)",
        "example": "Gia đình bạn Nam dự định chi tối đa 1.200.000 đồng mua thịt bò (giá 300.000 đ/kg) và thịt lợn (giá 150.000 đ/kg). Gọi x, y là số kg mỗi loại.\n• Lập BPT: 300.000x + 150.000y ≤ 1.200.000.\n• Rút gọn chia cả 2 vế cho 150.000: 2x + y ≤ 8 (với x ≥ 0, y ≥ 0).",
        "advanced": "Nếu gia đình Nam mua 2.5 kg thịt bò thì có thể mua tối đa bao nhiêu kg thịt lợn?\n→ Lời giải: Thay x = 2.5 vào BPT: 2(2.5) + y ≤ 8 ⇔ 5 + y ≤ 8 ⇔ y ≤ 3. Vậy có thể mua tối đa 3 kg thịt lợn.",
        "tip": "Luôn chú ý đổi tất cả các đại lượng tiền tệ hoặc khối lượng về cùng một đơn vị đo trước khi lập BPT.",
        "visual": "halfplane"
      },
      {
        "eyebrow": "ỨNG DỤNG THỰC TẾ 2",
        "title": "Ràng buộc thời gian và công suất máy móc",
        "body": "Các phân xưởng sản xuất hai loại sản phẩm A và B chịu ràng buộc về thời gian vận hành của máy móc. Đặt x, y là số lượng sản phẩm mỗi loại, tổng thời gian sử dụng máy không được vượt quá quỹ thời gian tối đa cho phép.",
        "formula": "Thời_gian_A · x + Thời_gian_B · y ≤ Tổng thời gian máy",
        "example": "Để sản xuất 1 chiếc bàn cần 3 giờ tiện và 1 chiếc ghế cần 1 giờ tiện. Máy tiện hoạt động tối đa 12 giờ mỗi ngày.\n• Bất phương trình ràng buộc: 3x + y ≤ 12 (x, y ∈ ℕ).\n• Cặp (3; 2) nghĩa là sản xuất 3 bàn, 2 ghế: 3(3) + 2 = 11 ≤ 12 (Khả thi). Cặp (4; 1) tốn 3(4) + 1 = 13 > 12 (Không khả thi).",
        "advanced": "Nếu xưởng muốn sản xuất ít nhất 2 chiếc bàn (x ≥ 2) thì số ghế y tối đa có thể làm là bao nhiêu?\n→ Lời giải: Với x ≥ 2, ta có y ≤ 12 − 3x ≤ 12 − 3(2) = 6. Vậy làm được tối đa 6 chiếc ghế.",
        "tip": "Đừng quên điều kiện thực tế: Số sản phẩm x, y luôn phải là số tự nhiên không âm (x, y ∈ ℕ).",
        "visual": "halfplane"
      },
      {
        "eyebrow": "TỔNG KẾT VÀ BẪY ĐỀ THI",
        "title": "Chiến thuật xử lý nhanh câu trắc nghiệm BPT hai ẩn",
        "body": "Để giải nhanh câu trắc nghiệm BPT bậc nhất hai ẩn trong đề thi: 1) Kiểm tra điểm (0; 0) xem thuộc miền nghiệm đề bài vẽ hay không; 2) Quan sát đường bờ xem vẽ nét liền hay nét đứt để loại trừ dấu bất đẳng thức; 3) Kiểm tra hệ số góc hoặc giao điểm của bờ với các trục Ox, Oy.",
        "formula": "Mẹo 3 giây: Nhìn nét bờ (liền/đứt) → Thử điểm (0; 0) → Đối chiếu giao trục",
        "example": "Đồ thị cho đường bờ x − y = 1 nét đứt và miền nghiệm không chứa O(0; 0). Hỏi BPT nào đúng?\n• Bước 1: Nét đứt nên loại các phương án có dấu '≤' hoặc '≥'.\n• Bước 2: Thay O(0; 0): 0 − 0 = 0. Để không chứa O, giá trị 0 phải làm BPT sai.\n• Bước 3: BPT x − y > 1 (0 > 1 là sai) thỏa mãn! Kết luận ngay x − y > 1.",
        "advanced": "Cho BPT 2x + (m − 1)y < 4. Tìm m để miền nghiệm chứa điểm A(1; 2).\n→ Lời giải: Điểm A thuộc miền nghiệm ⇔ 2(1) + (m − 1)2 < 4 ⇔ 2 + 2m − 2 < 4 ⇔ 2m < 4 ⇔ m < 2.",
        "tip": "Khi làm bài thi: Phương pháp thử nhanh tọa độ điểm O hoặc các điểm đặc biệt giúp giải quyết 90% câu hỏi trắc nghiệm dưới 15 giây.",
        "visual": "halfplane"
      }
    ]
  },
  {
    "id": "system-inequalities",
    "chapterId": "chuong-2",
    "chapterTitle": "Chương II: Bất phương trình và hệ BPT bậc nhất hai ẩn",
    "lessonNumber": "Bài 4",
    "title": "Hệ bất phương trình bậc nhất hai ẩn",
    "shortTitle": "Hệ BPT bậc nhất hai ẩn",
    "description": "Miền nghiệm đa giác và bài toán tối ưu quy hoạch tuyến tính trong thực tế.",
    "duration": "14 phút",
    "visual": "halfplane",
    "slides": [
      {
        "eyebrow": "KHÁI NIỆM HỆ BPT",
        "title": "Nghiệm chung thỏa mãn đồng thời nhiều điều kiện",
        "body": "Hệ bất phương trình bậc nhất hai ẩn gồm hai hay nhiều bất phương trình bậc nhất hai ẩn. Cặp số (x0; y0) là một nghiệm của hệ khi và chỉ khi nó là nghiệm chung của tất cả các bất phương trình có trong hệ. Miền nghiệm của hệ là phần giao nhau của các miền nghiệm của từng bất phương trình.",
        "formula": "(x0; y0) là nghiệm của hệ ⇔ thỏa mãn đồng thời tất cả các BPT của hệ",
        "example": "Kiểm tra xem điểm M(1; 1) có là nghiệm của hệ { x + y − 3 ≤ 0; 2x − y ≥ 0; y ≥ 0 } không.\n• Thay vào BPT 1: 1 + 1 − 3 = −1 ≤ 0 (Thỏa mãn).\n• Thay vào BPT 2: 2(1) − 1 = 1 ≥ 0 (Thỏa mãn).\n• Thay vào BPT 3: 1 ≥ 0 (Thỏa mãn).\n• Kết luận: Điểm M(1; 1) thỏa mãn tất cả các BPT nên là một nghiệm của hệ.",
        "advanced": "Cho hệ { x − y ≤ 1; x + 2y ≥ 4 }. Cặp số (2; 1) có là nghiệm không?\n→ Lời giải: Thay (2; 1) vào BPT 1: 2 − 1 = 1 ≤ 1 (Đúng). Thay vào BPT 2: 2 + 2(1) = 4 ≥ 4 (Đúng). Cặp (2; 1) là một nghiệm của hệ (nằm đúng trên giao điểm của 2 đường bờ).",
        "tip": "Chỉ cần vi phạm một BPT duy nhất trong hệ thì cặp số đó bị loại ngay lập tức!",
        "visual": "halfplane"
      },
      {
        "eyebrow": "BIỂU DIỄN MIỀN NGHIỆM",
        "title": "Miền nghiệm đa giác lồi trên mặt phẳng Oxy",
        "body": "Để biểu diễn miền nghiệm của hệ: Ta lần lượt vẽ tất cả các đường thẳng bờ trên cùng một mặt phẳng tọa độ Oxy. Với mỗi đường thẳng, xác định nửa mặt phẳng không lấy và gạch sọc bỏ đi. Phần mặt phẳng trắng không bị gạch chính là miền nghiệm chung của hệ (thường là miền tam giác hoặc tứ giác lồi).",
        "formula": "Miền nghiệm của hệ = Giao của các nửa mặt phẳng nghiệm",
        "example": "Xác định hình dạng miền nghiệm của hệ { x ≥ 0; y ≥ 0; x + y ≤ 4 }.\n• x ≥ 0: Nửa mặt phẳng bên phải trục tung Oy.\n• y ≥ 0: Nửa mặt phẳng phía trên trục hoành Ox.\n• x + y ≤ 4: Nửa mặt phẳng chứa O(0; 0) có bờ là đường x + y = 4.\n• Giao của 3 miền là tam giác vuông OAB với O(0; 0), A(4; 0), B(0; 4).",
        "advanced": "Khi nào miền nghiệm của một hệ BPT là tập rỗng (∅)?\n→ Lời giải: Khi các nửa mặt phẳng nghiệm không có điểm chung nào, ví dụ hệ { x + y ≤ 1; x + y ≥ 3 } có hai bờ song song và miền nghiệm quay lưng vào nhau nên hệ vô nghiệm.",
        "tip": "Quy ước gạch bỏ: Luôn gạch bỏ phần KHÔNG lấy để phần nghiệm chung là phần giấy trắng sạch sẽ, dễ nhìn tọa độ các đỉnh.",
        "visual": "halfplane"
      },
      {
        "eyebrow": "TỌA ĐỘ ĐỈNH",
        "title": "Phương pháp tìm tọa độ chính xác các đỉnh đa giác",
        "body": "Các đỉnh của đa giác nghiệm là giao điểm của từng cặp đường thẳng bờ tương ứng. Để tìm tọa độ đỉnh, ta lập hệ gồm hai phương trình đường thẳng bờ và giải bằng phương pháp cộng đại số hoặc bấm máy tính cầm tay (Casio Mode 9-1-2 / 5-1).",
        "formula": "Tọa độ đỉnh (x; y) là nghiệm của hệ 2 PT đường thẳng bờ giao nhau",
        "example": "Tìm giao điểm của hai đường thẳng d1: x + y = 5 và d2: 2x − y = 1.\n• Cộng hai vế của hai phương trình: (x + y) + (2x − y) = 5 + 1 ⇔ 3x = 6 ⇔ x = 2.\n• Thay x = 2 vào d1: 2 + y = 5 ⇔ y = 3.\n• Kết luận: Giao điểm có tọa độ A(2; 3).",
        "advanced": "Cho miền nghiệm tứ giác giới hạn bởi { x ≥ 0; y ≥ 0; x + y ≤ 6; 2x + y ≤ 8 }. Tìm tọa độ tất cả 4 đỉnh.\n→ Lời giải: Đỉnh 1: Gốc O(0; 0). Đỉnh 2: Giao 2x + y = 8 với Ox ⇒ A(4; 0). Đỉnh 3: Giao x + y = 6 với Oy ⇒ C(0; 6). Đỉnh 4: Giao x + y = 6 và 2x + y = 8 ⇒ B(2; 4). Tứ giác là OABC.",
        "tip": "Luôn thay lại tọa độ đỉnh tìm được vào các BPT còn lại để kiểm tra xem đỉnh đó có nằm trong miền nghiệm hay bị gạch bỏ rồi.",
        "visual": "halfplane"
      },
      {
        "eyebrow": "ĐỊNH LÝ TỐI ƯU HÓA",
        "title": "Định lý giá trị lớn nhất và nhỏ nhất của biểu thức F(x; y)",
        "body": "Định lý cốt lõi của quy hoạch tuyến tính: Nếu miền nghiệm của hệ là một đa giác lồi kín, bị chặn (có diện tích hữu hạn), thì biểu thức bậc nhất F(x; y) = ax + by luôn đạt giá trị lớn nhất (GTLN) và giá trị nhỏ nhất (GTNN) tại ít nhất một trong các ĐỈNH của đa giác đó.",
        "formula": "Max / Min F(x; y) trên đa giác kín luôn đạt tại ít nhất một ĐỈNH",
        "example": "Tìm GTLN của F(x; y) = 3x + 2y trên miền tam giác đỉnh O(0; 0), A(4; 0), B(0; 3).\n• Tính F tại từng đỉnh:\n  F(O) = 3(0) + 2(0) = 0.\n  F(A) = 3(4) + 2(0) = 12.\n  F(B) = 3(0) + 2(3) = 6.\n• So sánh: GTLN của F bằng 12, đạt được tại đỉnh A(4; 0).",
        "advanced": "Tìm GTNN và GTLN của F(x; y) = 2x − y trên tứ giác đỉnh O(0; 0), A(3; 0), B(2; 4), C(0; 3).\n→ Lời giải: F(O) = 0; F(A) = 2(3) − 0 = 6; F(B) = 2(2) − 4 = 0; F(C) = 2(0) − 3 = −3. GTNN là −3 (tại C), GTLN là 6 (tại A).",
        "tip": "Nguyên tắc vàng: Tuyệt đối không cần thử các điểm nằm sâu bên trong miền nghiệm, chỉ cần tính F tại các đỉnh rồi so sánh!",
        "visual": "halfplane"
      },
      {
        "eyebrow": "BÀI TOÁN TỐI ƯU LỢI NHUẬN",
        "title": "Bài toán thực tế: Lập kế hoạch sản xuất để lợi nhuận tối đa",
        "body": "Quy trình giải bài toán tối ưu sản xuất: 1) Đặt ẩn x, y là số lượng sản phẩm mỗi loại; 2) Lập hệ BPT ràng buộc về nguyên liệu, nhân công, vốn; 3) Xác định tọa độ các đỉnh của miền đa giác nghiệm; 4) Thiết lập hàm lợi nhuận F(x; y) và tính giá trị tại các đỉnh để chọn phương án tối ưu.",
        "formula": "Lợi nhuận F(x; y) = Lợi_nhuận_A · x + Lợi_nhuận_B · y → Tối đa hóa (Max)",
        "example": "Một xưởng đóng 2 loại bàn ghế A và B. Lãi 400 nghìn/chiếc A và 300 nghìn/chiếc B. Miền ràng buộc nguyên liệu là tứ giác đỉnh O(0; 0), M(20; 0), N(15; 10), P(0; 20). Hỏi cần đóng bao nhiêu chiếc mỗi loại để lãi cao nhất?\n• Lập hàm lãi: F(x; y) = 400x + 300y (nghìn đồng).\n• F(O) = 0.\n• F(M) = 400(20) + 0 = 8.000 nghìn.\n• F(N) = 400(15) + 300(10) = 9.000 nghìn.\n• F(P) = 0 + 300(20) = 6.000 nghìn.\n• Kết luận: Lãi lớn nhất là 9 triệu đồng khi đóng 15 chiếc A và 10 chiếc B.",
        "advanced": "Nếu mỗi chiếc bàn A cần 2m² gỗ và bàn B cần 3m² gỗ, kho có 60m² gỗ. Lập BPT biểu diễn.\n→ Lời giải: Bất phương trình là 2x + 3y ≤ 60 với x, y ∈ ℕ.",
        "tip": "Bước kiểm tra cuối: Đảm bảo số lượng sản phẩm x, y tại đỉnh tối ưu phải là số tự nhiên phù hợp với đề bài.",
        "visual": "halfplane"
      },
      {
        "eyebrow": "BÀI TOÁN GIẢM CHI PHÍ",
        "title": "Bài toán dinh dưỡng và tối thiểu hóa chi phí (Min)",
        "body": "Trong chăn nuôi hoặc khẩu phần ăn, cần đảm bảo lượng chất dinh dưỡng tối thiểu với chi phí thấp nhất. Ta lập hệ bất phương trình có dấu '≥' (đảm bảo mức tối thiểu) và hàm mục tiêu F(x; y) cần tìm giá trị nhỏ nhất (Min).",
        "formula": "Chi phí F(x; y) = Giá_A · x + Giá_B · y → Tối thiểu hóa (Min)",
        "example": "Cần phối hợp x kg thức ăn loại 1 (giá 40k/kg) và y kg thức ăn loại 2 (giá 30k/kg). Miền nghiệm có 3 đỉnh A(10; 0), B(4; 6), C(0; 12). Tìm chi phí nhỏ nhất.\n• Hàm chi phí: F(x; y) = 40x + 30y (nghìn đồng).\n• F(A) = 40(10) + 0 = 400k.\n• F(B) = 40(4) + 30(6) = 160 + 180 = 340k.\n• F(C) = 0 + 30(12) = 360k.\n• Kết luận: Chi phí nhỏ nhất là 340 nghìn đồng khi dùng 4 kg loại 1 và 6 kg loại 2.",
        "advanced": "Một người cần tối thiểu 90 đơn vị vitamin A và 120 đơn vị vitamin B mỗi tuần từ hai loại viên bổ sung. Lập hệ BPT nếu mỗi viên loại 1 có 3 đơn vị A, 2 đơn vị B; viên loại 2 có 1 đơn vị A, 3 đơn vị B.\n→ Lời giải: { 3x + y ≥ 90; 2x + 3y ≥ 120; x ≥ 0; y ≥ 0 }.",
        "tip": "Phân biệt từ khóa: 'Tối đa', 'không quá' tương ứng với dấu ≤. 'Tối thiểu', 'ít nhất' tương ứng với dấu ≥.",
        "visual": "halfplane"
      },
      {
        "eyebrow": "MIỀN KHÔNG BỊ CHẶN",
        "title": "Cẩn thận với miền nghiệm mở (không bị chặn)",
        "body": "Nếu miền nghiệm mở rộng ra vô cực (miền không bị chặn), biểu thức F(x; y) có thể không đạt giá trị lớn nhất hoặc không đạt giá trị nhỏ nhất. Lúc đó cần vẽ một đường mức F(x; y) = k và tịnh tiến để kiểm tra chiều tăng giảm của hàm số.",
        "formula": "Miền mở ra vô cực: Có thể không tồn tại Max hoặc Min",
        "example": "Xét hệ { x ≥ 1; y ≥ 2 } và hàm F(x; y) = x + y.\n• Miền nghiệm mở rộng vô tận về phía trên và bên phải.\n• Giá trị nhỏ nhất: Đạt tại đỉnh duy nhất A(1; 2) với Min F = 1 + 2 = 3.\n• Giá trị lớn nhất: Vì x, y có thể tăng tùy ý tới vô cực nên KHÔNG TỒN TẠI giá trị lớn nhất.",
        "advanced": "Với hệ { x ≥ 0; y ≥ 0; x − y ≥ 2 }, biểu thức F(x; y) = x − 2y có đạt GTLN không?\n→ Lời giải: Miền nghiệm mở, cho y = 0 thì x ≥ 2. Khi x tiến ra +∞ thì F = x tiến ra +∞, do đó không có GTLN.",
        "tip": "Cảnh báo bài thi: Chỉ được áp dụng ngay định lý so sánh đỉnh khi khẳng định chắc chắn miền nghiệm là đa giác kín!",
        "visual": "halfplane"
      },
      {
        "eyebrow": "TỔNG KẾT VÀ BẢN ĐỒ TƯ DUY",
        "title": "Toàn bộ quy trình giải bài toán quy hoạch tuyến tính",
        "body": "Bản đồ tư duy 4 bước bài toán tối ưu: 1. Đặt biến và điều kiện thực tế (x, y ≥ 0) → 2. Lập hệ BPT và hàm mục tiêu F(x; y) → 3. Vẽ miền nghiệm, giải hệ tìm tọa độ các đỉnh → 4. Tính F tại tất cả các đỉnh và kết luận phương án tối ưu.",
        "formula": "Đặt biến → Hệ BPT & F(x; y) → Tọa độ đỉnh → So sánh giá trị F",
        "example": "Quy tắc bấm máy Casio tìm đỉnh: Bấm Mode 9 → 1 → 2 để giải hệ hai phương trình bậc nhất hai ẩn ax + by = c chỉ trong 3 giây.",
        "advanced": "Nếu hàm F(x; y) đạt giá trị lớn nhất tại hai đỉnh kề nhau A và B của đa giác thì sao?\n→ Lời giải: Khi đó F(x; y) đạt giá trị lớn nhất tại TẤT CẢ các điểm nằm trên đoạn thẳng nối hai đỉnh A và B!",
        "tip": "Chiến thuật phòng thi: Đọc kỹ câu hỏi hỏi 'giá trị lớn nhất bằng bao nhiêu' hay hỏi 'đạt được khi x, y bằng bao nhiêu' để chọn đáp án đúng.",
        "visual": "halfplane"
      }
    ]
  },
  {
    "id": "values",
    "chapterId": "chuong-3",
    "chapterTitle": "Chương III: Hệ thức lượng trong tam giác",
    "lessonNumber": "Bài 5",
    "title": "Giá trị lượng giác của một góc",
    "shortTitle": "Giá trị lượng giác",
    "description": "Từ nửa đường tròn đơn vị đến các hệ thức lượng giác cơ bản từ 0° đến 180°.",
    "duration": "12 phút",
    "visual": "circle",
    "slides": [
      {
        "eyebrow": "ĐỊNH NGHĨA HÌNH HỌC",
        "title": "Nửa đường tròn đơn vị và tọa độ điểm M(cos α; sin α)",
        "body": "Trên mặt phẳng Oxy, nửa đường tròn tâm O bán kính R = 1 nằm phía trên trục hoành được gọi là nửa đường tròn đơn vị. Với mỗi góc α (0° ≤ α ≤ 180°), có duy nhất điểm M trên nửa đường tròn sao cho xOM = α. Hoành độ x của M là cos α, tung độ y của M là sin α.",
        "formula": "M(cos α; sin α) trên nửa đường tròn x² + y² = 1 (y ≥ 0)",
        "example": "Xác định tọa độ điểm M trên nửa đường tròn đơn vị ứng với góc α = 150°.\n• Hoành độ: x = cos 150° = −cos 30° = −√3/2.\n• Tung độ: y = sin 150° = sin 30° = 1/2.\n• Tọa độ điểm M là M(−√3/2; 1/2).",
        "advanced": "Điểm M trên nửa đường tròn đơn vị có hoành độ x = −3/5. Tính sin α và tan α.\n• Ta có sin²α = 1 − x² = 1 − 9/25 = 16/25. Vì y ≥ 0 nên sin α = 4/5.\n• tan α = sin α / cos α = (4/5) / (−3/5) = −4/3.",
        "tip": "Quy tắc chiếu trục: Trục hoành Ox là trục Cosin, trục tung Oy là trục Sin.",
        "visual": "circle"
      },
      {
        "eyebrow": "HỆ THỨC CỐT LÕI",
        "title": "Hằng đẳng thức lượng giác căn bản: sin² α + cos² α = 1",
        "body": "Do điểm M(cos α; sin α) thuộc đường tròn đơn vị x² + y² = 1, ta luôn có sin² α + cos² α = 1 với mọi góc α từ 0° đến 180°. Hệ thức này là chìa khóa để chuyển đổi qua lại giữa giá trị của sin và cos.",
        "formula": "sin² α + cos² α = 1  ⇒  cos² α = 1 − sin² α  ;  sin² α = 1 − cos² α",
        "example": "Cho biết sin α = 5/13 và α là góc tù. Tính cos α.\n• cos² α = 1 − sin² α = 1 − (5/13)² = 1 − 25/169 = 144/169.\n• Vì α là góc tù (90° < α < 180°), điểm M nằm bên trái trục Oy nên cos α < 0.\n• Kết luận: cos α = −√(144/169) = −12/13.",
        "advanced": "Cho sin α + cos α = 1/5. Tính tích P = sin α · cos α.\n→ Lời giải: Bình phương hai vế: (sin α + cos α)² = 1/25 ⇔ sin² α + cos² α + 2 sin α cos α = 1/25 ⇔ 1 + 2P = 1/25 ⇔ 2P = −24/25 ⇔ P = −12/25.",
        "tip": "Lưu ý sống còn: Khi lấy căn bậc hai của cos² α, bắt buộc phải nhìn điều kiện góc để chọn dấu cộng hay dấu trừ!",
        "visual": "circle"
      },
      {
        "eyebrow": "TANG VÀ CÔTANG",
        "title": "Định nghĩa tan α, cot α và mối quan hệ nghịch đảo",
        "body": "Với α ≠ 90°: tan α = sin α / cos α. Với α ≠ 0° và α ≠ 180°: cot α = cos α / sin α. Mối quan hệ liên hệ cốt lõi: tan α · cot α = 1; 1 + tan² α = 1 / cos² α (α ≠ 90°); 1 + cot² α = 1 / sin² α (α ≠ 0°, 180°).",
        "formula": "tan α · cot α = 1  ·  1 + tan² α = 1 / cos² α  ·  1 + cot² α = 1 / sin² α",
        "example": "Cho tan α = 3. Tính cot α và cos² α.\n• cot α = 1 / tan α = 1/3.\n• 1 / cos² α = 1 + tan² α = 1 + 3² = 10 ⇒ cos² α = 1/10.",
        "advanced": "Cho tan α = 2. Tính giá trị biểu thức A = (2 sin α − 3 cos α) / (sin α + 2 cos α).\n→ Lời giải: Chia cả tử và mẫu cho cos α ≠ 0: A = (2 tan α − 3) / (tan α + 2) = (2·2 − 3) / (2 + 2) = 1/4.",
        "tip": "Mẹo làm nhanh dạng phân thức thuần nhất bậc 1 theo sin và cos: Chia cả tử và mẫu cho cos α để đưa toàn bộ về tan α!",
        "visual": "circle"
      },
      {
        "eyebrow": "CÁC GÓC ĐẶC BIỆT",
        "title": "Bảng giá trị lượng giác các góc đặc biệt từ 0° đến 180°",
        "body": "Các góc chuẩn cần thuộc nằm lòng: 0°, 30°, 45°, 60°, 90°, 120°, 135°, 150°, 180°. Sin tăng từ 0 lên 1 tại 90° rồi giảm về 0 tại 180°. Cos giảm từ 1 xuống 0 tại 90° rồi giảm tiếp xuống −1 tại 180°.",
        "formula": "sin(30°)=1/2; sin(45°)=√2/2; sin(60°)=√3/2; cos(30°)=√3/2; cos(60°)=1/2",
        "example": "Tính giá trị biểu thức M = 2 sin 30° + 4 cos 60° − tan 45°.\n• Thay các giá trị: sin 30° = 1/2; cos 60° = 1/2; tan 45° = 1.\n• M = 2(1/2) + 4(1/2) − 1 = 1 + 2 − 1 = 2.",
        "advanced": "Tính giá trị biểu thức P = sin² 10° + sin² 20° + ... + sin² 80°.\n→ Lời giải: Vì sin(90° − x) = cos x, ghép cặp: sin² 10° + sin² 80° = sin² 10° + cos² 10° = 1. Có 4 cặp như vậy ⇒ P = 4.",
        "tip": "Mẹo nhớ dãy sin góc nhọn 0°, 30°, 45°, 60°, 90°: Lấy căn bậc hai chia 2 của các số 0, 1, 2, 3, 4 (tức √0/2, √1/2, √2/2, √3/2, √4/2).",
        "visual": "circle"
      },
      {
        "eyebrow": "HAI GÓC BÙ NHAU",
        "title": "Tính chất lượng giác của hai góc bù nhau (tổng bằng 180°)",
        "body": "Nếu hai góc α và β bù nhau (α + β = 180°), hai điểm biểu diễn trên nửa đường tròn đơn vị đối xứng qua trục Oy. Do đó: sin(180° − α) = sin α; cos(180° − α) = −cos α; tan(180° − α) = −tan α; cot(180° − α) = −cot α.",
        "formula": "Góc bù: Sin giữ nguyên  ·  Cos, Tan, Cot đổi dấu âm",
        "example": "Tính sin 120° và cos 120°.\n• 120° bù với 60° (120° = 180° − 60°).\n• sin 120° = sin 60° = √3/2.\n• cos 120° = −cos 60° = −1/2.",
        "advanced": "Trong tam giác ABC, chứng minh sin(A + B) = sin C và cos(A + B) = −cos C.\n→ Lời giải: Trong tam giác, A + B + C = 180° ⇒ A + B = 180° − C. Áp dụng tính chất góc bù: sin(A + B) = sin(180° − C) = sin C; cos(A + B) = cos(180° − C) = −cos C.",
        "tip": "Khẩu quyết tam giác: 'Sin thì bằng nhau, Cos thì đối dấu' khi lấy tổng hai góc đối với góc thứ ba.",
        "visual": "circle"
      },
      {
        "eyebrow": "HAI GÓC PHỤ NHAU",
        "title": "Tính chất lượng giác của hai góc phụ nhau (tổng bằng 90°)",
        "body": "Nếu hai góc phụ nhau (α + β = 90°), giá trị hàm này bằng 'co-' hàm kia: sin(90° − α) = cos α; cos(90° − α) = sin α; tan(90° − α) = cot α; cot(90° − α) = tan α.",
        "formula": "Góc phụ: sin ↔ cos  ·  tan ↔ cot",
        "example": "Tính tan 20° · tan 70°.\n• Vì 20° + 70° = 90°, ta có tan 70° = cot 20°.\n• Khi đó tan 20° · tan 70° = tan 20° · cot 20° = 1.",
        "advanced": "Rút gọn biểu thức B = cos 15° · cos 75° + sin 15° · sin 75°.\n→ Lời giải: Đổi cos 75° = sin 15° và sin 75° = cos 15°. B = cos 15° · sin 15° + sin 15° · cos 15° = 2 sin 15° cos 15° = sin 30° = 1/2.",
        "tip": "Nhận diện góc phụ: Bất cứ khi nào thấy hai góc có tổng bằng 90° (như 15° và 75°, 20° và 70°), lập tức đưa về cùng một góc nhọn.",
        "visual": "circle"
      },
      {
        "eyebrow": "KỸ THUẬT RÚT GỌN",
        "title": "Phương pháp biến đổi và rút gọn biểu thức lượng giác",
        "body": "Các bước chuẩn khi rút gọn biểu thức lượng giác: 1) Quy đổi các góc lớn về góc nhọn bằng tính chất góc bù hoặc góc phụ; 2) Đổi tan, cot về sin và cos nếu cần quy đồng phân thức; 3) Khai triển hằng đẳng thức và gom các cụm sin² + cos² = 1.",
        "formula": "Đổi về góc nhọn → Đổi tan, cot về sin, cos → Áp dụng sin² + cos² = 1",
        "example": "Rút gọn A = (1 − sin² x) · (1 + tan² x) với x ≠ 90°.\n• Bước 1: 1 − sin² x = cos² x.\n• Bước 2: 1 + tan² x = 1 / cos² x.\n• Bước 3: Nhân lại: A = cos² x · (1 / cos² x) = 1.",
        "advanced": "Chứng minh biểu thức độc lập với x: P = (sin⁴ x − cos⁴ x + cos² x) / (2 − cos² x).\n→ Lời giải: Tử số = (sin² x − cos² x)(sin² x + cos² x) + cos² x = sin² x − cos² x + cos² x = sin² x. Biểu thức rút gọn bằng sin² x / (1 + sin² x).",
        "tip": "Biểu thức 'không phụ thuộc vào x' nghĩa là sau khi rút gọn toàn bộ biến x bị triệt tiêu và kết quả là một hằng số thực.",
        "visual": "circle"
      },
      {
        "eyebrow": "TỔNG KẾT VÀ BẤY ĐỀ THI",
        "title": "Chiến thuật xử lý câu hỏi lượng giác trong bài thi trắc nghiệm",
        "body": "Các bẫy đề thi kinh điển chương Lượng giác: 1) Quên dấu âm của cos, tan, cot khi góc tù; 2) Quên điều kiện xác định của tan (khác 90°) và cot (khác 0°, 180°); 3) Nhập máy tính cầm tay quên chuyển đơn vị góc Deg (D) / Rad (R).",
        "formula": "Kiểm tra đơn vị Deg (chữ D nhỏ trên màn hình) trước khi bấm máy tính!",
        "example": "Bấm máy tính kiểm tra nhanh biểu thức: Gán một góc bất kỳ thỏa mãn đề bài (ví dụ α = 135° gán vào phím STO A) rồi bấm biểu thức cần tính để đối chiếu 4 phương án.",
        "advanced": "Cho tam giác ABC. Xét tính đúng sai của khẳng định: cos(A + B) = cos C.\n→ Lời giải: Khẳng định SAI, vì A + B = 180° − C nên cos(A + B) = −cos C. Đây là bẫy sai dấu kinh điển nhất trong hình học 10!",
        "tip": "Phòng thi: Luôn kiểm tra xem màn hình máy tính đang hiển thị chữ D (Degree) hay R (Radian) để tránh tính sai số đo góc!",
        "visual": "circle"
      }
    ]
  },
  {
    "id": "signs",
    "chapterId": "chuong-3",
    "chapterTitle": "Chương III: Hệ thức lượng trong tam giác",
    "lessonNumber": "Bài 5",
    "title": "Dấu của các giá trị lượng giác",
    "shortTitle": "Dấu lượng giác",
    "description": "Hiểu dấu từ vị trí của góc, thay vì chỉ học thuộc lòng bảng dấu.",
    "duration": "10 phút",
    "visual": "signs",
    "slides": [
      {
        "eyebrow": "BẢN CHẤT HÌNH HỌC",
        "title": "Dấu của giá trị lượng giác đến từ vị trí của điểm M",
        "body": "Khi góc α biến thiên từ 0° đến 180°, điểm M(cos α; sin α) chạy trên nửa đường tròn đơn vị phía trên trục hoành. Vì M luôn có tung độ y ≥ 0, nên sin α luôn KHÔNG ÂM (sin α > 0 với 0° < α < 180°). Hoành độ x đổi dấu khi điểm M đi từ bên phải sang bên trái trục tung Oy.",
        "formula": "0° < α < 180° ⇒ sin α > 0  ·  Cos đổi dấu qua trục tung",
        "example": "Xét dấu của sin 135° và cos 135°.\n• 135° nằm giữa 90° và 180° (góc tù).\n• Điểm M nằm phía trên trục Ox nên sin 135° > 0.\n• Điểm M nằm bên trái trục Oy nên cos 135° < 0.\n• Cụ thể: sin 135° = √2/2 > 0 và cos 135° = −√2/2 < 0.",
        "advanced": "Cho tam giác ABC có góc A tù. Xét dấu của P = sin A · cos B · cos C.\n→ Lời giải: Tam giác có góc A tù nên sin A > 0. Vì tam giác chỉ có tối đa một góc tù, nên B và C bắt buộc là góc nhọn ⇒ cos B > 0 và cos C > 0. Vậy tích P mang dấu DƯƠNG.",
        "tip": "Điểm chốt: Trên phạm vi từ 0° đến 180°, hàm Sin KHÔNG BAO GIỜ mang dấu âm!",
        "visual": "signs"
      },
      {
        "eyebrow": "GÓC NHỌN (0° < α < 90°)",
        "title": "Góc nhọn: Cả bốn giá trị lượng giác đều DƯƠNG",
        "body": "Khi 0° < α < 90°, điểm M nằm trong góc phần tư thứ nhất (phía trên Ox, bên phải Oy). Do đó cả hoành độ và tung độ của M đều dương. Kéo theo tang và côtang cũng là thương của hai số dương nên đều dương.",
        "formula": "Góc nhọn α ∈ (0°; 90°) ⇒ sin α > 0, cos α > 0, tan α > 0, cot α > 0",
        "example": "Cho góc nhọn α có cos α = 3/5. Tính tan α và xét dấu.\n• sin α = √(1 − cos² α) = √(1 − 9/25) = 4/5 (vì α nhọn nên sin dương).\n• tan α = sin α / cos α = (4/5) / (3/5) = 4/3 > 0.\n• Tất cả các giá trị đều mang dấu dương.",
        "advanced": "Cho 0° < α < 90°. So sánh sin α và tan α.\n• Ta có tan α = sin α / cos α. Vì 0 < cos α < 1 với mọi góc nhọn, chia sin α cho một số nhỏ hơn 1 sẽ được kết quả lớn hơn sin α.\n• Kết luận: Với mọi góc nhọn α, luôn có tan α > sin α.",
        "tip": "Quy tắc kiểm tra nhanh: Cứ thấy góc nhọn thì toàn bộ sin, cos, tan, cot đều là số dương.",
        "visual": "signs"
      },
      {
        "eyebrow": "GÓC TÙ (90° < α < 180°)",
        "title": "Góc tù: Chỉ Sin dương, còn Cos, Tan, Cot đều ÂM",
        "body": "Khi 90° < α < 180°, điểm M nằm trong góc phần tư thứ hai (phía trên Ox, bên trái Oy). Tung độ y > 0 (sin dương) nhưng hoành độ x < 0 (cos âm). Vì tang và côtang là thương giữa sin và cos nên chúng mang dấu ÂM.",
        "formula": "Góc tù α ∈ (90°; 180°) ⇒ sin α > 0  ·  cos α < 0  ·  tan α < 0  ·  cot α < 0",
        "example": "Tính dấu của các biểu thức khi α = 120°.\n• sin 120° = √3/2 > 0.\n• cos 120° = −1/2 < 0.\n• tan 120° = −√3 < 0.\n• cot 120° = −1/√3 < 0.",
        "advanced": "Cho tam giác ABC. Hỏi biểu thức Q = cos A + cos B + cos C có thể mang dấu âm không?\n→ Lời giải: Có thể. Nếu tam giác có một góc rất tù, ví dụ A = 150°, B = 15°, C = 15° thì cos 150° = −0.866, trong khi cos 15° + cos 15° ≈ 1.932 vẫn dương; nhưng trong tam giác suy biến hoặc góc tù lớn hơn thì cos A chi phối mạnh.",
        "tip": "Khẩu quyết sống còn: 'Góc tù thì Cos âm, Tan và Cot cùng âm, chỉ duy nhất Sin là dương'.",
        "visual": "signs"
      },
      {
        "eyebrow": "CÁC GÓC BIÊN",
        "title": "Giá trị tại các vị trí đặc biệt: 0°, 90°, 180°",
        "body": "Tại 0°: M(1; 0) ⇒ cos 0° = 1, sin 0° = 0, tan 0° = 0, cot 0° không xác định. Tại 90°: M(0; 1) ⇒ cos 90° = 0, sin 90° = 1, tan 90° không xác định, cot 90° = 0. Tại 180°: M(−1; 0) ⇒ cos 180° = −1, sin 180° = 0, tan 180° = 0, cot 180° không xác định.",
        "formula": "cos 90° = 0  ·  sin 90° = 1  ·  tan 90° không xác định  ·  cot 90° = 0",
        "example": "Tính giá trị biểu thức H = sin 90° + cos 180° + cos 90°.\n• sin 90° = 1.\n• cos 180° = −1.\n• cos 90° = 0.\n• H = 1 + (−1) + 0 = 0.",
        "advanced": "Phương trình cos x = 0 có nghiệm nào trong đoạn [0°; 180°]?\n→ Lời giải: Trên nửa đường tròn đơn vị, chỉ có duy nhất điểm đỉnh cao nhất tại góc 90° có hoành độ bằng 0. Vậy nghiệm duy nhất là x = 90°.",
        "tip": "Lưu ý bài thi: Số 0 là số không âm cũng không dương. Khi cos 90° = 0 thì nó không mang dấu dương hay âm.",
        "visual": "signs"
      },
      {
        "eyebrow": "GÓC BÙ NHAU",
        "title": "Quan hệ dấu của hai góc bù nhau",
        "body": "Hai góc bù nhau có tổng bằng 180°: α và 180° − α. Hai điểm biểu diễn đối xứng qua trục Oy nên tung độ bằng nhau và hoành độ đối nhau. Do đó sin giữ nguyên giá trị, còn cos, tan, cot đổi dấu.",
        "formula": "sin(180° − α) = sin α  ·  cos(180° − α) = −cos α  ·  tan(180° − α) = −tan α",
        "example": "Rút gọn S = cos 20° + cos 40° + cos 140° + cos 160°.\n• cos 160° = cos(180° − 20°) = −cos 20°.\n• cos 140° = cos(180° − 40°) = −cos 40°.\n• S = cos 20° + cos 40° − cos 40° − cos 20° = 0.",
        "advanced": "Tính giá trị của tích P = tan 10° · tan 20° · ... · tan 170°.\n• tan 170° = −tan 10°; tan 160° = −tan 20°, ...\n• Cặp tan 90° không xác định nên tích này chỉ xét các giá trị xác định; tuy nhiên tại 90° hàm tan không xác định nên biểu thức tổng quát trên không xác định.",
        "tip": "Khi thấy các cặp góc có tổng bằng 180° (như 20° và 160°), chúng triệt tiêu nhau khi cộng cos!",
        "visual": "signs"
      },
      {
        "eyebrow": "GÓC PHỤ NHAU",
        "title": "Đổi hàm khi hai góc phụ nhau (tổng bằng 90°)",
        "body": "Hai góc phụ nhau có tổng bằng 90°: α và 90° − α. Tung độ của góc này là hoành độ của góc kia: sin(90° − α) = cos α; cos(90° − α) = sin α; tan(90° − α) = cot α; cot(90° − α) = tan α.",
        "formula": "sin(90° − α) = cos α  ·  cos(90° − α) = sin α  ·  tan(90° − α) = cot α",
        "example": "Rút gọn A = sin² 25° + sin² 65°.\n• Vì 25° + 65° = 90°, ta có sin 65° = cos 25°.\n• Do đó A = sin² 25° + cos² 25° = 1.",
        "advanced": "Tính giá trị biểu thức Q = (sin 35° / cos 55°) + (tan 20° / cot 70°).\n→ Lời giải: Vì 35° + 55° = 90° nên sin 35° = cos 55° ⇒ tỉ số bằng 1. Vì 20° + 70° = 90° nên tan 20° = cot 70° ⇒ tỉ số bằng 1. Vậy Q = 1 + 1 = 2.",
        "tip": "Mẹo nhớ: 'Phụ chéo' - tức là phụ nhau thì đổi chéo sin thành cos, tan thành cot.",
        "visual": "signs"
      },
      {
        "eyebrow": "KỸ THUẬT XÉT DẤU BIỂU THỨC",
        "title": "Phương pháp xét dấu tích, thương lượng giác trong tam giác",
        "body": "Để xét dấu biểu thức tích hoặc thương của nhiều góc lượng giác trong tam giác ABC: 1) Nhớ rằng trong mọi tam giác, 0° < A, B, C < 180° nên sin A, sin B, sin C luôn DƯƠNG; 2) Dấu của biểu thức hoàn toàn phụ thuộc vào dấu của các hàm Cosin tương ứng; 3) Tam giác chỉ có tối đa một góc tù.",
        "formula": "Trong tam giác ABC: sin A, sin B, sin C luôn > 0",
        "example": "Xét dấu biểu thức T = sin A · sin B · sin C trong tam giác ABC.\n• Vì A, B, C là các góc trong tam giác nên 0° < A, B, C < 180°.\n• Suy ra sin A > 0, sin B > 0, sin C > 0.\n• Tích của ba số dương là số dương. Vậy T > 0 trong mọi tam giác.",
        "advanced": "Cho tam giác nhọn ABC. Xét dấu biểu thức M = cos A · cos B · cos C.\n→ Lời giải: Vì tam giác nhọn nên 0° < A, B, C < 90°, do đó cos A > 0, cos B > 0, cos C > 0. Tích ba số dương là số dương: M > 0.",
        "tip": "Nếu tam giác có một góc tù, tích ba cosin sẽ mang dấu âm; nếu tam giác nhọn, tích ba cosin mang dấu dương; nếu tam giác vuông, tích ba cosin bằng 0.",
        "visual": "signs"
      },
      {
        "eyebrow": "TỔNG KẾT VÀ BẪY ĐỀ THI",
        "title": "Bảng tổng hợp dấu và chiến lược giải bài thi lượng giác",
        "body": "Bảng vàng dấu lượng giác: Góc nhọn (0° đến 90°): Tất cả (+). Góc tù (90° đến 180°): Sin (+), Cos (−), Tan (−), Cot (−). Góc vuông 90°: Cos = 0, Sin = 1, Tan không xác định, Cot = 0. Hai góc bù nhau: Sin bằng nhau, ba hàm kia đối dấu nhau.",
        "formula": "Khẩu quyết: 'Góc tù Cos âm, Sin luôn dương'",
        "example": "Đề bài cho biết sin α = 3/5. Bạn An kết luận ngay cos α = 4/5. Bạn An đúng hay sai?\n• Bạn An SAI vì nếu α là góc tù thì cos α = −4/5. Đề bài chưa cho điều kiện góc nhọn hay tù nên không thể khẳng định dấu của cos α.",
        "advanced": "Tìm x ∈ (90°; 180°) thỏa mãn sin x = 1/2.\n→ Lời giải: sin x = 1/2 thì x = 30° hoặc x = 180° − 30° = 150°. Vì x thuộc khoảng góc tù (90°; 180°) nên nghiệm duy nhất là x = 150°.",
        "tip": "Chiến thuật phòng thi: Đọc kỹ đề xem đề cho 'góc nhọn', 'góc tù' hay không cho gì để tránh mất điểm đáng tiếc.",
        "visual": "signs"
      }
    ]
  },
  {
    "id": "cosine",
    "chapterId": "chuong-3",
    "chapterTitle": "Chương III: Hệ thức lượng trong tam giác",
    "lessonNumber": "Bài 6",
    "title": "Định lý cosin trong tam giác",
    "shortTitle": "Định lý cosin",
    "description": "Tính cạnh, tính góc, độ dài đường trung tuyến và nhận dạng tam giác.",
    "duration": "14 phút",
    "visual": "triangle",
    "slides": [
      {
        "eyebrow": "QUY ƯỚC KÝ HIỆU",
        "title": "Quy ước cạnh và góc chuẩn trong tam giác ABC",
        "body": "Trong tam giác ABC: Góc A đối diện cạnh a = BC; Góc B đối diện cạnh b = CA; Góc C đối diện cạnh c = AB. Góc A kẹp giữa hai cạnh b và c; Góc B kẹp giữa hai cạnh a và c; Góc C kẹp giữa hai cạnh a và b.",
        "formula": "a = BC  ·  b = CA  ·  c = AB  ·  Góc A kẹp giữa b và c",
        "example": "Cho tam giác ABC có AB = 5, AC = 7, BC = 8. Xác định a, b, c và góc đối diện.\n• Cạnh a = BC = 8, đối diện góc A.\n• Cạnh b = AC = 7, đối diện góc B.\n• Cạnh c = AB = 5, đối diện góc C.",
        "advanced": "Trong tam giác ABC, góc lớn nhất luôn đối diện với cạnh nào?\n→ Lời giải: Theo quan hệ giữa cạnh và góc trong tam giác, góc lớn nhất luôn đối diện với cạnh có độ dài lớn nhất. Ở ví dụ trên, cạnh a = 8 lớn nhất nên góc A là góc lớn nhất.",
        "tip": "Luôn vẽ hình phác thảo và điền đúng vị trí cạnh đối diện để không lắp nhầm số vào công thức.",
        "visual": "triangle"
      },
      {
        "eyebrow": "ĐỊNH LÝ TỔNG QUÁT",
        "title": "Định lý cosin: Mở rộng của định lý Pythagore",
        "body": "Trong tam giác ABC bất kỳ, bình phương một cạnh bằng tổng bình phương hai cạnh kia trừ đi hai lần tích của hai cạnh đó nhân với cosin của góc xen giữa. Khi góc A = 90° (tam giác vuông), cos A = 0, công thức trở về định lý Pythagore quen thuộc.",
        "formula": "a² = b² + c² − 2bc cos A  ·  b² = a² + c² − 2ac cos B  ·  c² = a² + b² − 2ab cos C",
        "example": "Tam giác ABC có b = 6, c = 8 và góc A = 60°. Tính độ dài cạnh a.\n• Áp dụng định lý: a² = b² + c² − 2bc cos A = 6² + 8² − 2·6·8·cos 60°.\n• Thay cos 60° = 1/2: a² = 36 + 64 − 96·(1/2) = 100 − 48 = 52.\n• Lấy căn bậc hai: a = √52 = 2√13 ≈ 7.21.",
        "advanced": "Tam giác ABC có b = 4, c = 5 và góc A = 120°. Tính cạnh a.\n• cos 120° = −1/2 (dấu âm).\n• a² = 4² + 5² − 2·4·5·(−1/2) = 16 + 25 + 20 = 61.\n• Suy ra a = √61 ≈ 7.81.",
        "tip": "Cẩn thận bẫy dấu: Khi góc xen giữa là góc tù, cos của nó âm nên dấu trừ biến thành dấu cộng!",
        "visual": "triangle"
      },
      {
        "eyebrow": "HỆ QUẢ TÍNH GÓC",
        "title": "Công thức tính cosin của góc khi biết độ dài 3 cạnh",
        "body": "Chuyển vế định lý cosin, ta có công thức tính trực tiếp góc trong tam giác khi biết độ dài cả ba cạnh. Để tìm số đo góc theo độ, bấm máy tính cầm tay phím Shift Cos (arccos) và đặt đơn vị đo góc ở chế độ Degree.",
        "formula": "cos A = (b² + c² − a²) / (2bc)  ·  cos B = (a² + c² − b²) / (2ac)",
        "example": "Tam giác ABC có a = 7, b = 5, c = 3. Tính góc A.\n• Áp dụng công thức: cos A = (b² + c² − a²) / (2bc) = (5² + 3² − 7²) / (2·5·3).\n• Tử số: 25 + 9 − 49 = −15. Mẫu số: 30.\n• cos A = −15 / 30 = −1/2.\n• Bấm Shift Cos(−1/2): Ta được góc A = 120°.",
        "advanced": "Tam giác ABC có a = 3, b = 4, c = 5. Tính góc C.\n→ Lời giải: cos C = (3² + 4² − 5²) / (2·3·4) = (9 + 16 − 25) / 24 = 0 / 24 = 0 ⇒ C = 90° (tam giác vuông tại C).",
        "tip": "Dấu của tử số quyết định loại góc: Tử số > 0 thì góc nhọn, tử số = 0 thì góc vuông, tử số < 0 thì góc tù.",
        "visual": "triangle"
      },
      {
        "eyebrow": "NHẬN DẠNG TAM GIÁC",
        "title": "Nhận dạng tam giác nhọn, vuông, tù qua định lý cosin",
        "body": "Để biết tam giác là tam giác nhọn, vuông hay tù, ta chỉ cần so sánh bình phương cạnh lớn nhất với tổng bình phương hai cạnh còn lại. Gọi a là cạnh lớn nhất: Nếu a² < b² + c² thì tam giác nhọn; Nếu a² = b² + c² thì tam giác vuông; Nếu a² > b² + c² thì tam giác tù tại A.",
        "formula": "a² < b² + c² (nhọn)  ·  a² = b² + c² (vuông)  ·  a² > b² + c² (tù)",
        "example": "Tam giác có 3 cạnh là 4, 5, 7 là loại tam giác gì?\n• Cạnh lớn nhất là a = 7. Tính a² = 7² = 49.\n• Tổng bình phương hai cạnh kia: b² + c² = 4² + 5² = 16 + 25 = 41.\n• So sánh: 49 > 41 (a² > b² + c²).\n• Kết luận: Tam giác là tam giác tù, góc tù đối diện cạnh 7.",
        "advanced": "Tìm điều kiện để tam giác có ba cạnh 5, 12, x là một tam giác vuông.\n→ Lời giải: Trường hợp 1: x là cạnh huyền ⇒ x² = 5² + 12² = 169 ⇒ x = 13. Trường hợp 2: 12 là cạnh huyền ⇒ x² = 12² − 5² = 144 − 25 = 119 ⇒ x = √119.",
        "tip": "Luôn kiểm tra cạnh lớn nhất trước tiên! Không cần xét hai cạnh nhỏ hơn vì góc đối diện cạnh nhỏ luôn là góc nhọn.",
        "visual": "triangle"
      },
      {
        "eyebrow": "ĐỘ DÀI ĐƯỜNG TRUNG TUYẾN",
        "title": "Công thức độ dài đường trung tuyến trong tam giác",
        "body": "Độ dài đường trung tuyến ma xuất phát từ đỉnh A đến trung điểm cạnh đối diện a được tính qua độ dài 3 cạnh của tam giác bằng công thức trung tuyến. Công thức này được suy ra trực tiếp từ định lý cosin áp dụng cho tam giác con.",
        "formula": "ma² = (2b² + 2c² − a²) / 4  ·  mb² = (2a² + 2c² − b²) / 4  ·  mc² = (2a² + 2b² − c²) / 4",
        "example": "Tam giác ABC có a = 6, b = 8, c = 10. Tính độ dài đường trung tuyến ma.\n• ma² = (2b² + 2c² − a²) / 4 = [2(8²) + 2(10²) − 6²] / 4.\n• ma² = [2(64) + 2(100) − 36] / 4 = [128 + 200 − 36] / 4 = 292 / 4 = 73.\n• Độ dài trung tuyến ma = √73 ≈ 8.54.",
        "advanced": "Tam giác vuông tại A có cạnh huyền a = 10. Tính ma bằng công thức trung tuyến.\n→ Lời giải: ma² = (2b² + 2c² − a²) / 4. Vì tam giác vuông tại A nên b² + c² = a² = 100. Suy ra ma² = (2·100 − 100) / 4 = 100 / 4 = 25 ⇒ ma = 5 = a/2. Hoàn toàn khớp tính chất hình học!",
        "tip": "Mẹo nhớ công thức trung tuyến: Hai cạnh kề nhân 2 trừ đi cạnh đối diện rồi chia cho 4.",
        "visual": "triangle"
      },
      {
        "eyebrow": "ỨNG DỤNG THỰC TẾ 1",
        "title": "Đo khoảng cách giữa hai điểm không đến được",
        "body": "Trong trắc địa, để đo khoảng cách giữa hai điểm A và B bị ngăn cách bởi hồ nước hay chướng ngại vật: Ta chọn một vị trí quan sát C sao cho có thể đo được khoảng cách CA = b, CB = a và ngắm đo được góc xen giữa C = ACB. Khoảng cách AB được tính bằng định lý cosin.",
        "formula": "AB² = CA² + CB² − 2 · CA · CB · cos C",
        "example": "Đo khoảng cách hai bờ hồ AB. Từ điểm C ngắm được CA = 150m, CB = 200m và góc C = 60°.\n• AB² = 150² + 200² − 2·150·200·cos 60° = 22500 + 40000 − 60000·(1/2).\n• AB² = 62500 − 30000 = 32500.\n• Khoảng cách AB = √32500 ≈ 180.28 mét.",
        "advanced": "Hai tàu thủy rời cảng cùng một lúc, tàu thứ nhất chạy theo hướng Đông với tốc độ 30 km/h, tàu thứ hai chạy theo hướng Đông Bắc góc 45° với tốc độ 40 km/h. Sau 2 giờ, hai tàu cách nhau bao nhiêu km?\n→ Lời giải: Sau 2h: b = 60 km, c = 80 km, góc xen giữa A = 45°. a² = 60² + 80² − 2·60·80·cos 45° = 3600 + 6400 − 9600·(√2/2) = 10000 − 4800√2 ≈ 3211.77 ⇒ a ≈ 56.67 km.",
        "tip": "Luôn vẽ hình tam giác thể hiện sơ đồ chuyển động để xác định chính xác góc kẹp giữa hai hướng đi.",
        "visual": "triangle"
      },
      {
        "eyebrow": "ỨNG DỤNG HÌNH HỌC PHẲNG",
        "title": "Tính đường chéo hình bình hành và hình thoi",
        "body": "Trong hình bình hành ABCD có hai cạnh kề a, b và góc nhọn α: Đường chéo ngắn d1 đối diện góc α tính theo định lý cosin với góc α; Đường chéo dài d2 đối diện góc bù (180° − α) tính theo định lý cosin với góc tù.",
        "formula": "d1² = a² + b² − 2ab cos α  ·  d2² = a² + b² + 2ab cos α  ·  d1² + d2² = 2(a² + b²)",
        "example": "Hình bình hành ABCD có AB = 4, AD = 6 và góc A = 60°. Tính độ dài đường chéo BD.\n• Trong tam giác ABD, cạnh BD đối diện góc A = 60°.\n• BD² = AB² + AD² − 2·AB·AD·cos 60° = 4² + 6² − 2·4·6·(1/2) = 16 + 36 − 24 = 28.\n• BD = √28 = 2√7 ≈ 5.29.",
        "advanced": "Tính đường chéo AC của hình bình hành trên.\n→ Lời giải: Góc B bù với góc A nên B = 120°. Áp dụng tam giác ABC: AC² = AB² + BC² − 2·AB·BC·cos 120° = 16 + 36 − 48(−1/2) = 52 + 24 = 76 ⇒ AC = √76 = 2√19 ≈ 8.72.",
        "tip": "Đẳng thức hình bình hành: Tổng bình phương hai đường chéo bằng tổng bình phương 4 cạnh: d1² + d2² = 2(a² + b²).",
        "visual": "triangle"
      },
      {
        "eyebrow": "TỔNG KẾT VÀ BẪY ĐỀ THI",
        "title": "Chiến thuật giải nhanh bài toán định lý cosin",
        "body": "Các bẫy đề thi cần nhớ: 1) Nhầm cạnh đối diện góc trong công thức (cạnh đứng riêng ở vế trái phải luôn là cạnh đối diện góc ở vế phải); 2) Quên đổi dấu âm khi góc tù; 3) Quên lấy căn bậc hai khi đề bài hỏi độ dài cạnh a (mới chỉ tính ra a²).",
        "formula": "Bấm máy: Shift Cos((b² + c² − a²) / (2bc)) để ra số đo góc tức thì",
        "example": "Tam giác có ba cạnh tỉ lệ 2 : 3 : 4. Tính cosin của góc nhỏ nhất.\n• Góc nhỏ nhất đối diện cạnh nhỏ nhất (cạnh 2x).\n• cos = (3² + 4² − 2²) / (2·3·4) = (9 + 16 − 4) / 24 = 21 / 24 = 7/8.",
        "advanced": "Cho tam giác ABC có b + c = 2a. Chứng minh rằng 2 sin A = sin B + sin C.\n→ Lời giải: Theo định lý sin: a = 2R sin A, b = 2R sin B, c = 2R sin C. Thay vào giả thiết: 2R sin B + 2R sin C = 2(2R sin A) ⇔ sin B + sin C = 2 sin A.",
        "tip": "Khi đề cho cạnh tỉ lệ: Đặt cạnh là 2x, 3x, 4x; biến x sẽ tự động triệt tiêu ở cả tử và mẫu khi lập tỉ số cos!",
        "visual": "triangle"
      }
    ]
  },
  {
    "id": "sine-law",
    "chapterId": "chuong-3",
    "chapterTitle": "Chương III: Hệ thức lượng trong tam giác",
    "lessonNumber": "Bài 7",
    "title": "Định lý sin và diện tích tam giác",
    "shortTitle": "Định lý sin & Diện tích",
    "description": "Định lý sin, bán kính đường tròn ngoại tiếp, nội tiếp và 5 công thức diện tích tam giác.",
    "duration": "14 phút",
    "visual": "triangle",
    "slides": [
      {
        "eyebrow": "ĐỊNH LÝ SIN",
        "title": "Tỉ số giữa độ dài cạnh và sin của góc đối diện",
        "body": "Trong tam giác ABC có bán kính đường tròn ngoại tiếp R, tỉ số giữa mỗi cạnh và sin của góc đối diện luôn bằng nhau và bằng đường kính 2R của đường tròn ngoại tiếp đó. Định lý này đặc biệt hiệu quả khi biết một cạnh và hai góc, hoặc biết hai cạnh và một góc đối diện.",
        "formula": "a / sin A = b / sin B = c / sin C = 2R",
        "example": "Tam giác ABC có a = 10 và góc A = 30°. Tính bán kính đường tròn ngoại tiếp R.\n• Áp dụng định lý sin: 2R = a / sin A = 10 / sin 30° = 10 / (1/2) = 20.\n• Suy ra bán kính R = 20 / 2 = 10.",
        "advanced": "Tam giác ABC có góc B = 60°, góc C = 45° và cạnh b = 6. Tính độ dài cạnh c.\n→ Lời giải: Theo định lý sin: c / sin C = b / sin B ⇒ c = b · sin C / sin B = 6 · sin 45° / sin 60° = 6 · (√2/2) / (√3/2) = 6√2 / √3 = 2√6.",
        "tip": "Lỗi phổ biến nhất: Nhầm tỉ số a / sin A bằng bán kính R thay vì đường kính 2R!",
        "visual": "triangle"
      },
      {
        "eyebrow": "CÔNG THỨC DIỆN TÍCH 1",
        "title": "Diện tích theo hai cạnh và góc xen giữa",
        "body": "Diện tích tam giác bằng một nửa tích hai cạnh nhân với sin của góc xen giữa hai cạnh đó. Đây là công thức diện tích lượng giác được sử dụng nhiều nhất trong chương trình toán phổ thông.",
        "formula": "S = 1/2 ab sin C = 1/2 bc sin A = 1/2 ca sin B",
        "example": "Tam giác ABC có a = 8, b = 10 và góc C = 30°. Tính diện tích tam giác S.\n• Áp dụng công thức: S = 1/2 · a · b · sin C = 1/2 · 8 · 10 · sin 30°.\n• Thay sin 30° = 1/2: S = 40 · (1/2) = 20.",
        "advanced": "Tam giác ABC có diện tích S = 15, cạnh a = 6, b = 10. Tìm số đo góc C.\n→ Lời giải: S = 1/2 ab sin C ⇔ 15 = 1/2 · 6 · 10 · sin C ⇔ 30 sin C = 15 ⇔ sin C = 1/2. Vì C là góc tam giác nên C = 30° hoặc C = 150° (hai trường hợp góc nhọn hoặc tù).",
        "tip": "Cảnh báo đề thi: Khi biết sin C = 1/2, góc C có thể bằng 30° HOẶC 150° nếu đề không cho điều kiện tam giác nhọn!",
        "visual": "triangle"
      },
      {
        "eyebrow": "CÔNG THỨC DIỆN TÍCH 2",
        "title": "Công thức diện tích liên hệ bán kính ngoại tiếp R",
        "body": "Từ định lý sin sin C = c / (2R), thay vào công thức diện tích S = 1/2 ab sin C ta được công thức tính diện tích qua tích 3 cạnh chia cho 4R. Từ đó suy ra R = abc / (4S).",
        "formula": "S = abc / (4R)  ⇒  R = abc / (4S)",
        "example": "Tam giác ABC có a = 5, b = 6, c = 7 và diện tích S = 6√6. Tính bán kính R.\n• Tích 3 cạnh: abc = 5 · 6 · 7 = 210.\n• R = abc / (4S) = 210 / (4 · 6√6) = 210 / (24√6) = 35 / (4√6) = 35√6 / 24.",
        "advanced": "Tam giác vuông tại A có hai cạnh góc vuông b = 6, c = 8. Tính bán kính R bằng hai cách.\n→ Lời giải: Cách 1: Tam giác vuông nên R = a/2. a = √(6² + 8²) = 10 ⇒ R = 5. Cách 2: S = 1/2 · 6 · 8 = 24. R = (10·6·8) / (4·24) = 480 / 96 = 5. Hai cách cho cùng kết quả!",
        "tip": "Công thức R = abc / (4S) là công cụ nhanh nhất để tìm bán kính đường tròn ngoại tiếp khi biết độ dài cả 3 cạnh.",
        "visual": "triangle"
      },
      {
        "eyebrow": "BÁN KÍNH NỘI TIẾP r",
        "title": "Diện tích theo nửa chu vi và bán kính nội tiếp r",
        "body": "Gọi p = (a + b + c)/2 là nửa chu vi tam giác và r là bán kính đường tròn nội tiếp (tiếp xúc trong với cả 3 cạnh). Diện tích tam giác bằng nửa chu vi nhân bán kính nội tiếp: S = p · r. Suy ra r = S / p.",
        "formula": "S = p · r  ⇒  r = S / p  (với p = (a + b + c) / 2)",
        "example": "Tam giác ABC có a = 5, b = 7, c = 8 và diện tích S = 10√3. Tính bán kính nội tiếp r.\n• Nửa chu vi: p = (5 + 7 + 8) / 2 = 20 / 2 = 10.\n• Bán kính nội tiếp: r = S / p = (10√3) / 10 = √3.",
        "advanced": "Tính bán kính đường tròn nội tiếp của tam giác vuông có hai cạnh góc vuông là 6 và 8.\n→ Lời giải: Cạnh huyền a = 10. Nửa chu vi p = (6 + 8 + 10) / 2 = 12. Diện tích S = 1/2 · 6 · 8 = 24. Bán kính r = S / p = 24 / 12 = 2.",
        "tip": "Công thức tính nhanh r cho tam giác vuông tại A: r = (b + c − a) / 2 = (6 + 8 − 10) / 2 = 2.",
        "visual": "triangle"
      },
      {
        "eyebrow": "CÔNG THỨC HÊ-RÔNG",
        "title": "Công thức Hê-rông: Tính diện tích chỉ từ 3 cạnh",
        "body": "Khi biết độ dài ba cạnh a, b, c của một tam giác mà không biết bất kỳ góc nào, công thức Hê-rông là công cụ mạnh mẽ nhất để tính trực tiếp diện tích tam giác thông qua nửa chu vi p.",
        "formula": "S = √(p(p − a)(p − b)(p − c))  với p = (a + b + c) / 2",
        "example": "Tính diện tích tam giác có các cạnh a = 13, b = 14, c = 15.\n• Nửa chu vi: p = (13 + 14 + 15) / 2 = 42 / 2 = 21.\n• Các hiệu: p − a = 8; p − b = 7; p − c = 6.\n• S = √(21 · 8 · 7 · 6) = √(7 · 3 · 8 · 7 · 6) = √(7² · 144) = 7 · 12 = 84.",
        "advanced": "Tính chiều cao ha tương ứng với cạnh a = 13 của tam giác trên.\n→ Lời giải: Ta có S = 1/2 · a · ha ⇒ ha = 2S / a = (2 · 84) / 13 = 168 / 13 ≈ 12.92.",
        "tip": "Kỹ thuật tách thừa số: Khi tính biểu thức trong căn của Hê-rông, hãy phân tích ra thừa số nguyên tố thay vì nhân dồn thành số lớn rồi mới bấm căn!",
        "visual": "triangle"
      },
      {
        "eyebrow": "ỨNG DỤNG THỰC TẾ",
        "title": "Đo chiều cao của tháp hoặc núi từ xa",
        "body": "Để đo chiều cao h của một ngọn tháp CD trên đỉnh núi mà chân tháp D không thể tiếp cận: Ta cắm hai giác kế tại hai điểm A và B trên mặt đất thẳng hàng với chân tháp, cách nhau khoảng d = AB. Đo các góc nâng CAD = α và CBD = β. Áp dụng định lý sin trong tam giác ABC rồi tính h.",
        "formula": "Tính cạnh AC qua định lý sin trong tam giác ABC → Chiều cao h = AC · sin α",
        "example": "Đo chiều cao tháp CD. Đo được AB = 40m, góc CAD = 60°, góc CBD = 45°. Tính CD.\n• Trong tam giác ABC: góc ACB = 60° − 45° = 15°.\n• Theo định lý sin: AC / sin 45° = AB / sin 15° ⇒ AC = 40 · sin 45° / sin 15° ≈ 109.28m.\n• Chiều cao tháp: h = CD = AC · sin 60° ≈ 109.28 · (√3/2) ≈ 94.64 mét.",
        "advanced": "Một người đứng tại ngọn hải đăng cao 50m nhìn thấy hai chiếc tàu dưới các góc hạ 30° và 45°. Khoảng cách giữa hai tàu là bao nhiêu nếu hai tàu và chân hải đăng thẳng hàng?\n→ Lời giải: Khoảng cách từ tàu 1 đến chân tháp: d1 = 50 / tan 30° = 50√3 ≈ 86.6m. Tàu 2: d2 = 50 / tan 45° = 50m. Khoảng cách hai tàu = 50√3 − 50 ≈ 36.6m (hoặc 136.6m nếu ở hai phía).",
        "tip": "Luôn xác định rõ hai trường hợp: Hai đối tượng nằm cùng một phía hay nằm ở hai phía so với điểm quan sát.",
        "visual": "triangle"
      },
      {
        "eyebrow": "HỆ THỐNG 5 CÔNG THỨC DIỆN TÍCH",
        "title": "Bảng tổng hợp 5 công thức tính diện tích tam giác",
        "body": "Bộ 5 công thức diện tích tam giác kinh điển cần thuộc lòng: 1) S = 1/2 a ha (đáy nhân chiều cao); 2) S = 1/2 ab sin C (hai cạnh và góc xen giữa); 3) S = abc / (4R) (ba cạnh và bán kính ngoại tiếp); 4) S = p · r (nửa chu vi và bán kính nội tiếp); 5) S = √(p(p−a)(p−b)(p−c)) (công thức Hê-rông).",
        "formula": "1/2 a ha = 1/2 ab sin C = abc / (4R) = p · r = √(p(p−a)(p−b)(p−c))",
        "example": "Chọn công thức nào khi biết độ dài 3 cạnh a = 5, b = 6, c = 7 và cần tìm bán kính r?\n• Bước 1: Dùng công thức Hê-rông (5) để tính diện tích S.\n• Bước 2: Dùng công thức S = p · r (4) để tìm r = S / p.",
        "advanced": "Chứng minh rằng trong tam giác đều cạnh a: S = a²√3 / 4; R = a√3 / 3; r = a√3 / 6.\n→ Lời giải: Tam giác đều có góc 60°: S = 1/2 · a · a · sin 60° = a²√3/4. p = 3a/2. r = S/p = (a²√3/4) / (3a/2) = a√3/6. R = abc/(4S) = a³ / (a²√3) = a√3/3 = 2r.",
        "tip": "Bí quyết chọn công thức: Nhìn dữ kiện đề bài cho để ghép nối hai công thức diện tích lại với nhau để giải ẩn cần tìm!",
        "visual": "triangle"
      },
      {
        "eyebrow": "TỔNG KẾT VÀ BẪY ĐỀ THI",
        "title": "Chiến thuật giải trắc nghiệm Hệ thức lượng tam giác",
        "body": "Các bẫy đề thi kinh điển: 1) Nhầm giữa bán kính ngoại tiếp R và nội tiếp r; 2) Bỏ sót trường hợp góc tù khi biết sin góc bằng 1/2 hoặc √2/2; 3) Quên nhân hệ số 1/2 trong công thức diện tích S = 1/2 ab sin C.",
        "formula": "Tóm tắt: Định lý sin dùng khi có cặp CẠNH - GÓC ĐỐI DIỆN",
        "example": "Dấu hiệu nhận biết dùng định lý Sin hay định lý Cosin:\n• Nếu đề bài cho hoặc hỏi về BÁN KÍNH NGOẠI TIẾP R ⇒ 99% dùng định lý Sin (a / sin A = 2R).\n• Nếu đề bài cho 3 CẠNH hoặc 2 CẠNH VÀ GÓC XEN GIỮA ⇒ Dùng định lý Cosin.",
        "advanced": "Cho tam giác ABC có a = 2b cos C. Tam giác ABC là tam giác gì?\n→ Lời giải: Theo định lý cosin: cos C = (a² + b² − c²) / (2ab). Thay vào: a = 2b · (a² + b² − c²) / (2ab) ⇔ a = (a² + b² − c²) / a ⇔ a² = a² + b² − c² ⇔ b² = c² ⇔ b = c. Vậy tam giác ABC cân tại A.",
        "tip": "Dạng bài nhận dạng tam giác: Luôn quy đổi góc về cạnh (qua định lý Cosin hoặc Sin) rồi rút gọn đẳng thức đại số.",
        "visual": "triangle"
      }
    ]
  },
  {
    "id": "vectors-intro",
    "chapterId": "chuong-4",
    "chapterTitle": "Chương IV: Vectơ",
    "lessonNumber": "Bài 8",
    "title": "Khái niệm vectơ & Phép toán cộng trừ",
    "shortTitle": "Vectơ & Phép cộng trừ",
    "description": "Đoạn thẳng có hướng, hai vectơ bằng nhau, đối nhau và các quy tắc cộng trừ.",
    "duration": "14 phút",
    "visual": "vector",
    "slides": [
      {
        "eyebrow": "KHÁI NIỆM ĐOẠN THẲNG CÓ HƯỚNG",
        "title": "Vectơ là gì? Điểm đầu, điểm cuối và độ dài",
        "body": "Vectơ là một đoạn thẳng có hướng, nghĩa là trong hai điểm mút của đoạn thẳng đã chỉ rõ điểm nào là điểm đầu (gốc), điểm nào là điểm cuối (ngọn). Kí hiệu vectơ có điểm đầu A và điểm cuối B là AB→. Độ dài của vectơ AB→ là khoảng cách giữa A và B, kí hiệu là |AB→| = AB.",
        "formula": "Vectơ AB→ có điểm đầu A, điểm cuối B  ·  Độ dài |AB→| = AB",
        "example": "Cho hình vuông ABCD cạnh a = 4. Tính độ dài của các vectơ AB→, BC→ và AC→.\n• |AB→| = AB = 4.\n• |BC→| = BC = 4.\n• Độ dài đường chéo hình vuông: AC = √(4² + 4²) = 4√2. Vậy |AC→| = 4√2.",
        "advanced": "Với 4 điểm phân biệt A, B, C, D không thẳng hàng, có thể tạo được bao nhiêu vectơ khác vectơ-không có điểm đầu và điểm cuối là các điểm đã cho?\n→ Lời giải: Chọn 2 điểm có phân biệt thứ tự điểm đầu và điểm cuối trong 4 điểm: A_4^2 = 4 · 3 = 12 vectơ.",
        "tip": "Phân biệt đoạn thẳng và vectơ: Đoạn thẳng AB = BA, nhưng vectơ AB→ khác hoàn toàn vectơ BA→ về hướng!",
        "visual": "vector"
      },
      {
        "eyebrow": "PHƯƠNG VÀ HƯỚNG",
        "title": "Hai vectơ cùng phương, cùng hướng và vectơ-không",
        "body": "Đường thẳng đi qua điểm đầu và điểm cuối của vectơ gọi là giá của vectơ đó. Hai vectơ được gọi là cùng phương nếu giá của chúng song song hoặc trùng nhau. Hai vectơ cùng phương thì có thể cùng hướng hoặc ngược hướng. Vectơ-không (kí hiệu 0→) có điểm đầu và điểm cuối trùng nhau, độ dài bằng 0 và được quy ước là cùng phương, cùng hướng với mọi vectơ.",
        "formula": "Cùng phương ⇔ Giá song song hoặc trùng nhau  ·  Vectơ-không: 0→ = AA→ (|0→| = 0)",
        "example": "Cho hình bình hành ABCD tâm O. Chỉ ra các vectơ cùng hướng và ngược hướng với AB→.\n• Các vectơ có giá song song hoặc trùng với AB là: AB→, BA→, CD→, DC→.\n• Vectơ cùng hướng với AB→: DC→.\n• Vectơ ngược hướng với AB→: BA→ và CD→.",
        "advanced": "Ba điểm phân biệt A, B, C thẳng hàng khi và chỉ khi hai vectơ nào cùng phương?\n→ Lời giải: Ba điểm A, B, C thẳng hàng khi và chỉ khi hai vectơ AB→ và AC→ cùng phương (tức tồn tại số thực k ≠ 0 sao cho AB→ = k · AC→).",
        "tip": "Nhớ kỹ: Hai vectơ cùng hướng thì bắt buộc phải cùng phương; nhưng hai vectơ cùng phương thì có thể ngược hướng nhau.",
        "visual": "vector"
      },
      {
        "eyebrow": "BẰNG NHAU VÀ ĐỐI NHAU",
        "title": "Hai vectơ bằng nhau và hai vectơ đối nhau",
        "body": "Hai vectơ được gọi là bằng nhau nếu chúng có cùng hướng và cùng độ dài: a→ = b→ ⇔ (|a→| = |b→| và a→ cùng hướng b→). Hai vectơ được gọi là đối nhau nếu chúng có cùng độ dài nhưng ngược hướng nhau. Vectơ đối của AB→ là −AB→ = BA→.",
        "formula": "a→ = b→ (cùng hướng và cùng độ dài)  ·  Vectơ đối: −AB→ = BA→  ·  AB→ + BA→ = 0→",
        "example": "Cho hình bình hành ABCD. Cặp vectơ nào bằng nhau?\n• AB→ = DC→ (cùng hướng từ trái sang phải, cùng độ dài AB = DC).\n• AD→ = BC→ (cùng hướng từ dưới lên trên, cùng độ dài AD = BC).\n• Cặp vectơ đối nhau: AB→ và CD→ (ngược hướng nhau).",
        "advanced": "Cho tam giác ABC. Gọi M, N lần lượt là trung điểm của AB và AC. Tìm các vectơ bằng vectơ MN→.\n→ Lời giải: MN là đường trung bình của tam giác ABC nên MN song song và bằng 1/2 BC. Gọi P là trung điểm BC thì MN→ = BP→ = PC→.",
        "tip": "Lỗi kinh điển: Ghi AB→ = CD→ trong hình bình hành ABCD là SAI vì AB→ đi từ A đến B (sang phải), còn CD→ đi từ C đến D (sang trái) nên chúng ngược hướng nhau! Phải viết AB→ = DC→.",
        "visual": "vector"
      },
      {
        "eyebrow": "QUY TẮC BA ĐIỂM (CỘNG)",
        "title": "Quy tắc 3 điểm: Nối đuôi liên tiếp trong phép cộng",
        "body": "Với ba điểm bất kỳ A, B, C, ta luôn có: AB→ + BC→ = AC→. Quy tắc này gọi là quy tắc 3 điểm (hay quy tắc tam giác). Điểm cuối của vectơ thứ nhất trùng với điểm đầu của vectơ thứ hai, kết quả là vectơ nối từ điểm đầu của vectơ thứ nhất đến điểm cuối của vectơ thứ hai.",
        "formula": "AB→ + BC→ = AC→  ·  Mở rộng: A1 A2→ + A2 A3→ + ... + An-1 An→ = A1 An→",
        "example": "Tính tổng vectơ S = AB→ + BC→ + CD→ + DA→.\n• Áp dụng quy tắc 3 điểm nối đuôi liên tiếp:\n  AB→ + BC→ = AC→.\n  AC→ + CD→ = AD→.\n  AD→ + DA→ = AA→ = 0→.\n• Kết luận: S = 0→.",
        "advanced": "Cho 4 điểm A, B, C, D. Rút gọn biểu thức u→ = AB→ + CD→ + BC→ + DA→.\n→ Lời giải: Đổi chỗ giao hoán: u→ = (AB→ + BC→) + (CD→ + DA→) = AC→ + CA→ = AA→ = 0→.",
        "tip": "Phương pháp giải nhanh: Tìm các vectơ có điểm cuối của vectơ này trùng điểm đầu vectơ kia để ghép cặp triệt tiêu.",
        "visual": "vector"
      },
      {
        "eyebrow": "QUY TẮC HÌNH BÌNH HÀNH",
        "title": "Cộng hai vectơ chung gốc qua đường chéo hình bình hành",
        "body": "Nếu ABCD là hình bình hành, thì tổng của hai vectơ chung gốc xuất phát từ một đỉnh bằng vectơ đường chéo xuất phát từ đỉnh đó: AB→ + AD→ = AC→. Quy tắc này có ý nghĩa vật lý trực quan trong việc tổng hợp hai lực tác dụng lên một vật.",
        "formula": "AB→ + AD→ = AC→ (với ABCD là hình bình hành)",
        "example": "Cho hình vuông ABCD cạnh 3. Tính độ dài của vectơ tổng u→ = AB→ + AD→.\n• Theo quy tắc hình bình hành: u→ = AB→ + AD→ = AC→.\n• Độ dài |u→| = |AC→| = AC.\n• Đường chéo hình vuông: AC = 3√2. Vậy |u→| = 3√2.",
        "advanced": "Hai lực F1→ và F2→ cùng tác dụng vào một chất điểm tại O, có độ lớn |F1→| = 30N, |F2→| = 40N và vuông góc với nhau. Tính độ lớn của hợp lực F→ = F1→ + F2→.\n→ Lời giải: Theo quy tắc hình bình hành, vì hai lực vuông góc nên tứ giác là hình chữ nhật. Độ lớn hợp lực |F→| = √(30² + 40²) = 50N.",
        "tip": "Phân biệt: Quy tắc 3 điểm dùng cho hai vectơ 'nối đuôi' (cuối trùng đầu); quy tắc hình bình hành dùng cho hai vectơ 'chung gốc'.",
        "visual": "vector"
      },
      {
        "eyebrow": "PHÉP TRỪ VECTƠ",
        "title": "Quy tắc trừ hai vectơ chung gốc",
        "body": "Hiệu của hai vectơ: a→ − b→ = a→ + (−b→). Với ba điểm A, B, O bất kỳ, quy tắc trừ hai vectơ chung gốc khẳng định: OB→ − OA→ = AB→ (ngọn trừ gốc, lấy điểm ngọn của số trừ làm gốc, điểm ngọn của số bị trừ làm ngọn).",
        "formula": "OB→ − OA→ = AB→  ·  AB→ = B − A (ngọn trừ gốc)",
        "example": "Rút gọn biểu thức v→ = AC→ − AB→.\n• Hai vectơ chung gốc A: AC→ − AB→ = BC→.\n• Kiểm tra lại: AB→ + BC→ = AC→ (Đúng).",
        "advanced": "Cho tam giác đều ABC cạnh a. Tính độ dài của vectơ hiệu w→ = AB→ − AC→.\n→ Lời giải: w→ = AB→ − AC→ = CB→. Độ dài |w→| = |CB→| = CB = a.",
        "tip": "Mẹo nhớ thần tốc quy tắc trừ chung gốc: 'Sau trừ Trước': OB→ − OA→ thì lấy chữ B ở đuôi ghép với chữ A ở đuôi thành AB→.",
        "visual": "vector"
      },
      {
        "eyebrow": "TRUNG ĐIỂM VÀ TRỌNG TÂM",
        "title": "Tính chất vectơ của trung điểm và trọng tâm tam giác",
        "body": "Điểm I là trung điểm của đoạn thẳng AB khi và chỉ khi: IA→ + IB→ = 0→; với điểm M bất kỳ: MA→ + MB→ = 2 MI→. Điểm G là trọng tâm của tam giác ABC khi và chỉ khi: GA→ + GB→ + GC→ = 0→; với điểm M bất kỳ: MA→ + MB→ + MC→ = 3 MG→.",
        "formula": "I là trung điểm: MA→ + MB→ = 2 MI→  |  G là trọng tâm: MA→ + MB→ + MC→ = 3 MG→",
        "example": "Cho đoạn thẳng AB có độ dài 6, I là trung điểm AB. Tính độ dài vectơ MA→ + MB→ khi M trùng A.\n• Khi M trùng A: MA→ + MB→ = AA→ + AB→ = 0→ + AB→ = AB→.\n• Độ dài |AB→| = 6. Hoặc dùng 2|MI→| = 2·AI = 2·3 = 6.",
        "advanced": "Cho tam giác ABC và G là trọng tâm. Chứng minh rằng với điểm O bất kỳ: OG→ = 1/3 (OA→ + OB→ + OC→).\n→ Lời giải: Theo tính chất trọng tâm: OA→ + OB→ + OC→ = 3 OG→. Chia hai vế cho 3 ta được biểu thức tọa độ trọng tâm quen thuộc.",
        "tip": "Hệ thức trung điểm và trọng tâm là công cụ mạnh nhất để thu gọn một tổng nhiều vectơ về một vectơ duy nhất!",
        "visual": "vector"
      },
      {
        "eyebrow": "TỔNG KẾT VÀ BẪY ĐỀ THI",
        "title": "Chiến thuật xử lý câu trắc nghiệm đẳng thức vectơ",
        "body": "Các bẫy đề thi về vectơ: 1) Nhầm lẫn giữa độ dài của tổng vectơ và tổng độ dài: |a→ + b→| nói chung KHÔNG BẰNG |a→| + |b→| (chỉ bằng khi hai vectơ cùng hướng); 2) Quên đổi chiều khi lấy hiệu hai vectơ chung gốc; 3) Quên mũi tên vectơ trên đầu dẫn tới viết sai bản chất toán học.",
        "formula": "Bất đẳng thức tam giác: ||a→| − |b→|| ≤ |a→ + b→| ≤ |a→| + |b→|",
        "example": "Cho hai vectơ a→ và b→ vuông góc nhau có độ dài lần lượt là 3 và 4. So sánh |a→ + b→| và |a→| + |b→|.\n• |a→| + |b→| = 3 + 4 = 7.\n• |a→ + b→| = √(3² + 4²) = 5.\n• Rõ ràng 5 < 7. Tuyệt đối không được cộng độ dài trước khi cộng vectơ!",
        "advanced": "Cho hình bình hành ABCD. Biểu diễn vectơ AC→ và BD→ theo hai vectơ u→ = AB→ và v→ = AD→.\n→ Lời giải: Theo quy tắc hình bình hành: AC→ = u→ + v→. Theo quy tắc trừ: BD→ = AD→ − AB→ = v→ − u→.",
        "tip": "Phương pháp làm nhanh: Luôn vẽ hình và dùng các quy tắc tam giác, hình bình hành để đưa về một vectơ duy nhất rồi mới tính độ dài đoạn thẳng.",
        "visual": "vector"
      }
    ]
  },
  {
    "id": "scalar-product",
    "chapterId": "chuong-4",
    "chapterTitle": "Chương IV: Vectơ",
    "lessonNumber": "Bài 9",
    "title": "Tích vô hướng của hai vectơ",
    "shortTitle": "Tích vô hướng",
    "description": "Góc giữa hai vectơ, tích vô hướng, điều kiện vuông góc và ứng dụng tọa độ.",
    "duration": "14 phút",
    "visual": "vector",
    "slides": [
      {
        "eyebrow": "GÓC GIỮA HAI VECTƠ",
        "title": "Định nghĩa góc giữa hai vectơ từ 0° đến 180°",
        "body": "Cho hai vectơ khác không a→ và b→. Từ một điểm O bất kỳ, vẽ OA→ = a→ và OB→ = b→. Khi đó góc AOB với số đo từ 0° đến 180° được gọi là góc giữa hai vectơ a→ và b→, kí hiệu là (a→, b→). Nếu a→ và b→ cùng hướng thì góc bằng 0°; nếu ngược hướng thì góc bằng 180°; nếu vuông góc thì góc bằng 90°.",
        "formula": "0° ≤ (a→, b→) ≤ 180°  ·  Cùng hướng: 0°  ·  Ngược hướng: 180°  ·  Vuông góc: 90°",
        "example": "Cho tam giác đều ABC. Tính góc giữa hai vectơ AB→ và BC→.\n• Dựng vectơ BD→ = AB→ để đưa về chung gốc B.\n• Góc giữa AB→ và BC→ là góc giữa BD→ và BC→, chính là góc bù với góc B của tam giác đều.\n• (AB→, BC→) = 180° − 60° = 120°.",
        "advanced": "Cho tam giác vuông cân ABC tại A. Tính góc giữa AB→ và AC→, và góc giữa BA→ và BC→.\n→ Lời giải: AB và AC vuông góc tại A nên (AB→, AC→) = 90°. Trong tam giác vuông cân, góc B = 45°, hai vectơ BA→ và BC→ cùng chung gốc B nên (BA→, BC→) = 45°.",
        "tip": "Lưu ý quan trọng: Hai vectơ phải được đưa về CÙNG CHUNG GỐC thì góc giữa hai tia mới chính là góc giữa hai vectơ!",
        "visual": "vector"
      },
      {
        "eyebrow": "ĐỊNH NGHĨA TÍCH VÔ HƯỚNG",
        "title": "Công thức tích vô hướng: Tích hai độ dài nhân cosin góc xen giữa",
        "body": "Tích vô hướng của hai vectơ a→ và b→ là một SỐ THỰC (không phải là vectơ), kí hiệu là a→ · b→, được xác định bởi công thức: a→ · b→ = |a→| · |b→| · cos(a→, b→). Khi ít nhất một trong hai vectơ là 0→, tích vô hướng quy ước bằng 0.",
        "formula": "a→ · b→ = |a→| · |b→| · cos(a→, b→)  (Kết quả là một số thực)",
        "example": "Cho hai vectơ a→ và b→ có độ dài lần lượt là 4 và 6, góc giữa chúng bằng 60°. Tính a→ · b→.\n• a→ · b→ = |a→| · |b→| · cos 60° = 4 · 6 · (1/2) = 12.",
        "advanced": "Cho hai vectơ có độ dài 3 và 5, góc giữa chúng bằng 120°. Tính tích vô hướng.\n→ Lời giải: a→ · b→ = 3 · 5 · cos 120° = 15 · (−1/2) = −7.5. Tích vô hướng mang dấu ÂM khi góc giữa hai vectơ là góc tù!",
        "tip": "Dấu của tích vô hướng: a→ · b→ > 0 khi góc nhọn; a→ · b→ = 0 khi vuông góc; a→ · b→ < 0 khi góc tù.",
        "visual": "vector"
      },
      {
        "eyebrow": "ĐIỀU KIỆN VUÔNG GÓC",
        "title": "Hai vectơ vuông góc khi và chỉ khi tích vô hướng bằng 0",
        "body": "Hệ quả quan trọng nhất của tích vô hướng: Với hai vectơ khác không a→ và b→, chúng vuông góc với nhau (a→ ⊥ b→) khi và chỉ khi tích vô hướng của chúng bằng 0. Đây là công cụ hàng đầu để chứng minh quan hệ vuông góc trong hình học.",
        "formula": "a→ ⊥ b→ ⇔ a→ · b→ = 0  (với a→, b→ ≠ 0→)",
        "example": "Cho hình chữ nhật ABCD. Tính tích vô hướng AB→ · AD→.\n• Vì AB vuông góc với AD tại A, góc giữa chúng bằng 90°.\n• cos 90° = 0 ⇒ AB→ · AD→ = |AB→| · |AD→| · 0 = 0.",
        "advanced": "Cho tam giác ABC có AB = c, AC = b. Tính AB→ · AC→ theo công thức định lý cosin.\n→ Lời giải: AB→ · AC→ = b · c · cos A. Theo định lý cosin, cos A = (b² + c² − a²) / (2bc). Thay vào ta được: AB→ · AC→ = (b² + c² − a²) / 2. Đẳng thức này rất hay dùng trong các bài toán chứng minh hình học!",
        "tip": "Khẩu quyết: Muốn chứng minh hai đường thẳng vuông góc, hãy tính tích vô hướng của hai vectơ chỉ phương và chứng minh nó bằng 0!",
        "visual": "vector"
      },
      {
        "eyebrow": "BÌNH PHƯƠNG VÔ HƯỚNG",
        "title": "Bình phương vô hướng bằng bình phương độ dài",
        "body": "Khi b→ = a→, góc giữa a→ và chính nó bằng 0°, cos 0° = 1. Do đó: a→ · a→ = |a→| · |a→| · cos 0° = |a→|². Tích vô hướng của một vectơ với chính nó được gọi là bình phương vô hướng và luôn bằng bình phương độ dài của vectơ đó.",
        "formula": "a→² = |a→|²  ·  AB→² = AB²",
        "example": "Cho đoạn thẳng AB = 5. Tính giá trị của AB→².\n• Bình phương vô hướng bằng bình phương độ dài: AB→² = AB² = 5² = 25.",
        "advanced": "Khai triển biểu thức (u→ + v→)² theo tích vô hướng.\n→ Lời giải: (u→ + v→)² = u→² + 2 u→ · v→ + v→² = |u→|² + 2 u→ · v→ + |v→|². Từ đây suy ra độ dài vectơ tổng: |u→ + v→| = √( |u→|² + |v→|² + 2 u→ · v→ ).",
        "tip": "Nhờ tính chất a→² = |a→|², ta có thể chuyển đổi linh hoạt giữa các bài toán độ dài đoạn thẳng và đại số vectơ.",
        "visual": "vector"
      },
      {
        "eyebrow": "BIỂU THỨC TỌA ĐỘ",
        "title": "Tích vô hướng trong hệ tọa độ Oxy: Hoành nhân hoành cộng tung nhân tung",
        "body": "Trong mặt phẳng tọa độ Oxy, cho hai vectơ u→ = (x1; y1) và v→ = (x2; y2). Tích vô hướng của chúng được tính bằng công thức tọa độ cực kỳ đơn giản: u→ · v→ = x1 · x2 + y1 · y2. Điều kiện vuông góc: x1 x2 + y1 y2 = 0.",
        "formula": "u→ · v→ = x1 x2 + y1 y2  ·  u→ ⊥ v→ ⇔ x1 x2 + y1 y2 = 0",
        "example": "Cho u→ = (2; 3) và v→ = (4; −1). Tính u→ · v→.\n• u→ · v→ = x1 x2 + y1 y2 = 2 · 4 + 3 · (−1) = 8 − 3 = 5.",
        "advanced": "Cho a→ = (1; 2) và b→ = (m; 4). Tìm m để hai vectơ a→ và b→ vuông góc với nhau.\n→ Lời giải: a→ ⊥ b→ ⇔ a→ · b→ = 0 ⇔ 1 · m + 2 · 4 = 0 ⇔ m + 8 = 0 ⇔ m = −8.",
        "tip": "Công thức tọa độ giúp tính tích vô hướng ngay lập tức mà không cần phải biết góc giữa hai vectơ!",
        "visual": "vector"
      },
      {
        "eyebrow": "ĐỘ DÀI VÀ GÓC THEO TỌA ĐỘ",
        "title": "Công thức tính độ dài và góc giữa hai vectơ theo tọa độ",
        "body": "Độ dài vectơ u→ = (x; y) là: |u→| = √(x² + y²). Khoảng cách giữa hai điểm A(xA; yA) và B(xB; yB) là: AB = √((xB − xA)² + (yB − yA)²). Cosin của góc giữa hai vectơ: cos(u→, v→) = (u→ · v→) / (|u→| · |v→|) = (x1 x2 + y1 y2) / (√(x1² + y1²) · √(x2² + y2²)).",
        "formula": "cos(u→, v→) = (x1 x2 + y1 y2) / (√(x1² + y1²) · √(x2² + y2²))",
        "example": "Tính cosin của góc giữa a→ = (1; 2) và b→ = (2; −1).\n• Tử số: 1·2 + 2·(−1) = 2 − 2 = 0.\n• Mẫu số: √(1² + 2²) · √(2² + (−1)²) = √5 · √5 = 5.\n• cos(a→, b→) = 0 / 5 = 0 ⇒ Góc giữa hai vectơ bằng 90° (hai vectơ vuông góc).",
        "advanced": "Cho hai điểm A(1; 3) và B(4; 7). Tính độ dài đoạn thẳng AB.\n→ Lời giải: AB→ = (4 − 1; 7 − 3) = (3; 4). Độ dài AB = √(3² + 4²) = √25 = 5.",
        "tip": "Công thức cos góc giữa hai vectơ cho phép tính góc của bất kỳ tam giác nào khi biết tọa độ ba đỉnh.",
        "visual": "vector"
      },
      {
        "eyebrow": "ỨNG DỤNG VẬT LÝ",
        "title": "Công của lực trong vật lý là một tích vô hướng",
        "body": "Trong cơ học, khi một lực F→ không đổi tác dụng lên một vật làm vật di chuyển một quãng đường biểu diễn bởi vectơ độ dời s→, thì công cơ học A sinh ra bởi lực F→ được định nghĩa chính là tích vô hướng của hai vectơ: A = F→ · s→ = |F→| · |s→| · cos α, trong đó α là góc giữa hướng của lực và hướng chuyển dời.",
        "formula": "Công cơ học: A = F→ · s→ = F · s · cos α (Đơn vị: Jun - J)",
        "example": "Một lực kéo F có độ lớn 50 N tác dụng lên một toa xe làm xe dịch chuyển quãng đường 10 m trên mặt phẳng ngang. Góc giữa dây kéo và phương chuyển động là 60°. Tính công của lực F.\n• A = F · s · cos 60° = 50 · 10 · (1/2) = 250 Jun (J).",
        "advanced": "Khi nào công của lực bằng 0 và khi nào sinh công cản (công âm)?\n→ Lời giải: Khi lực tác dụng vuông góc với phương chuyển động (α = 90° ⇒ cos 90° = 0) thì lực không sinh công (A = 0, ví dụ trọng lực khi vật lăn trên mặt phẳng ngang). Khi góc α là góc tù (90° < α ≤ 180° ⇒ cos α < 0), lực sinh công cản (A < 0, ví dụ lực ma sát cản trở chuyển động).",
        "tip": "Liên môn Vật lý: Hiểu bản chất tích vô hướng giúp em giải xuất sắc các bài toán công cơ học trong môn Vật lý 10!",
        "visual": "vector"
      },
      {
        "eyebrow": "TỔNG KẾT VÀ BẪY ĐỀ THI",
        "title": "Chiến thuật xử lý câu trắc nghiệm Tích vô hướng",
        "body": "Các bẫy đề thi cần đặc biệt lưu ý: 1) Nhầm lẫn: Tích vô hướng của hai vectơ là một SỐ THỰC, không được viết mũi tên vectơ trên kết quả; 2) Nhầm góc: Chưa đưa về chung gốc trước khi xác định góc α; 3) Quên điều kiện vuông góc là x1 x2 + y1 y2 = 0.",
        "formula": "Nhớ nhanh: a→ ⊥ b→ ⇔ x1 x2 + y1 y2 = 0  ·  |a→| = √(x² + y²)",
        "example": "Cho hai vectơ u→ = (m − 2; 3) và v→ = (2; −1). Tìm m để u→ vuông góc với v→.\n• u→ ⊥ v→ ⇔ (m − 2) · 2 + 3 · (−1) = 0 ⇔ 2m − 4 − 3 = 0 ⇔ 2m = 7 ⇔ m = 7/2.",
        "advanced": "Cho tam giác ABC đều cạnh a, trọng tâm G. Tính tích vô hướng GA→ · GB→.\n→ Lời giải: Trong tam giác đều, góc giữa GA và GB bằng 120°. Độ dài GA = GB = a√3/3. Vậy GA→ · GB→ = (a√3/3)² · cos 120° = (a²/3) · (−1/2) = −a²/6.",
        "tip": "Phương pháp CASIO: Sử dụng chế độ VECTOR trên máy tính cầm tay (Mode 5 trên fx-580VN X) để tính tích vô hướng và góc giữa hai vectơ chỉ trong 5 giây!",
        "visual": "vector"
      }
    ]
  },
  {
    "id": "statistics",
    "chapterId": "chuong-5",
    "chapterTitle": "Chương V: Các số đặc trưng của mẫu số liệu không ghép nhóm",
    "lessonNumber": "Bài 10",
    "title": "Các số đặc trưng của mẫu số liệu",
    "shortTitle": "Thống kê mô tả",
    "description": "Số trung bình, trung vị, tứ phân vị, mốt và phát hiện giá trị bất thường.",
    "duration": "14 phút",
    "visual": "statistics",
    "slides": [
      {
        "eyebrow": "SỐ TRUNG BÌNH CỘNG",
        "title": "Số trung bình (x̄) và ý nghĩa đại diện",
        "body": "Số trung bình của mẫu số liệu x1, x2, ..., xn là tổng của tất cả các giá trị chia cho số phần tử n. Số trung bình là số đặc trưng phản ánh mức độ trung bình của mẫu số liệu. Tuy nhiên, số trung bình rất nhạy cảm và dễ bị bóp méo bởi các giá trị quá lớn hoặc quá nhỏ bất thường.",
        "formula": "x̄ = (x1 + x2 + ... + xn) / n = (1/n) ∑ xi",
        "example": "Điểm kiểm tra của một nhóm 5 học sinh là: 7, 8, 9, 6, 10. Tính điểm trung bình.\n• Tổng điểm: 7 + 8 + 9 + 6 + 10 = 40.\n• Số học sinh: n = 5.\n• Điểm trung bình: x̄ = 40 / 5 = 8.0.",
        "advanced": "Một công ty có 9 nhân viên lương 10 triệu/tháng và 1 giám đốc lương 110 triệu/tháng. Tính lương trung bình và nhận xét.\n• Tổng lương = 9·10 + 110 = 200 triệu. Lương trung bình: x̄ = 200 / 10 = 20 triệu.\n• Nhận xét: Lương trung bình là 20 triệu nhưng 90% nhân viên chỉ nhận 10 triệu. Số trung bình bị kéo lệch mạnh bởi mức lương bất thường của giám đốc.",
        "tip": "Nhớ kỹ: Số trung bình chỉ đáng tin cậy khi các số liệu trong mẫu không chênh lệch quá đột biến!",
        "visual": "statistics"
      },
      {
        "eyebrow": "TRUNG VỊ (Me)",
        "title": "Trung vị: Giá trị chia đôi mẫu số liệu đã sắp xếp",
        "body": "Để tìm trung vị Me: BẮT BUỘC bước đầu tiên là sắp xếp mẫu số liệu theo thứ tự không giảm (từ bé đến lớn). Nếu n lẻ (n = 2k + 1), trung vị là số ở chính giữa x_(k+1). Nếu n chẵn (n = 2k), trung vị là trung bình cộng của hai số đứng ở giữa: (x_k + x_(k+1)) / 2. Trung vị không bị ảnh hưởng bởi giá trị bất thường.",
        "formula": "n lẻ: Me = x_((n+1)/2)  ·  n chẵn: Me = (x_(n/2) + x_(n/2 + 1)) / 2",
        "example": "Tìm trung vị của mẫu số liệu điểm: 9, 4, 7, 8, 5.\n• Bước 1: Sắp xếp theo thứ tự tăng dần: 4, 5, 7, 8, 9.\n• Bước 2: Vì n = 5 là số lẻ, số đứng ở vị trí chính giữa (vị trí thứ 3) là 7.\n• Kết luận: Trung vị Me = 7.",
        "advanced": "Tìm trung vị của mẫu số liệu gồm 6 số: 2, 8, 4, 10, 6, 12.\n• Sắp xếp: 2, 4, 6, 8, 10, 12.\n• Vì n = 6 là số chẵn, lấy trung bình cộng của 2 số ở giữa (vị trí 3 và 4): Me = (6 + 8) / 2 = 7.",
        "tip": "Bẫy điểm thi lớn nhất: Quên sắp xếp dãy số liệu tăng dần mà lấy ngay số đứng giữa của đề bài cho là SAI 100%!",
        "visual": "statistics"
      },
      {
        "eyebrow": "TỨ PHÂN VỊ (Q1, Q2, Q3)",
        "title": "Tứ phân vị: Chia mẫu số liệu thành bốn phần bằng nhau",
        "body": "Tứ phân vị gồm ba giá trị Q1, Q2, Q3 chia mẫu số liệu đã sắp xếp thành 4 phần bằng nhau. Q2 chính là trung vị Me của cả mẫu. Q1 là trung vị của nửa số liệu phía dưới Q2 (tứ phân vị thứ nhất). Q3 là trung vị của nửa số liệu phía trên Q2 (tứ phân vị thứ ba). Khoảng tứ phân vị: ΔQ = Q3 − Q1.",
        "formula": "Q2 = Me  ·  Q1 = Trung vị nửa dưới  ·  Q3 = Trung vị nửa trên  ·  ΔQ = Q3 − Q1",
        "example": "Tìm tứ phân vị của mẫu số liệu: 1, 3, 5, 7, 9, 11, 13.\n• Q2 là trung vị của cả mẫu: Q2 = 7.\n• Nửa dưới gồm: 1, 3, 5 ⇒ Q1 = 3.\n• Nửa trên gồm: 9, 11, 13 ⇒ Q3 = 11.\n• Khoảng tứ phân vị: ΔQ = 11 − 3 = 8.",
        "advanced": "Khi nào không tính Q2 vào nửa dưới và nửa trên?\n→ Lời giải: Khi n lẻ, giá trị Q2 ở vị trí chính giữa KHÔNG ĐƯỢC tính vào nửa dưới hay nửa trên. Khi n chẵn, mẫu được chia đôi thành 2 nửa hoàn toàn bằng nhau và lấy trung vị của từng nửa.",
        "tip": "Khoảng tứ phân vị ΔQ = Q3 − Q1 là số đặc trưng đo độ phân tán của 50% số liệu ở trung tâm.",
        "visual": "statistics"
      },
      {
        "eyebrow": "GIÁ TRỊ BẤT THƯỜNG",
        "title": "Quy tắc hàng rào phát hiện giá trị bất thường (outlier)",
        "body": "Giá trị bất thường (outlier) là giá trị quá lớn hoặc quá nhỏ so với phần lớn các số liệu trong mẫu. Quy tắc hàng rào tứ phân vị xác định giá trị x là bất thường nếu: x < Q1 − 1.5 · ΔQ (hàng rào dưới) hoặc x > Q3 + 1.5 · ΔQ (hàng rào trên).",
        "formula": "Bất thường nếu: x < Q1 − 1.5 · ΔQ  hoặc  x > Q3 + 1.5 · ΔQ",
        "example": "Mẫu số liệu có Q1 = 15, Q3 = 25. Kiểm tra xem giá trị x = 45 có phải là bất thường không.\n• Khoảng tứ phân vị: ΔQ = 25 − 15 = 10.\n• Hàng rào trên: Q3 + 1.5 · ΔQ = 25 + 1.5 · 10 = 25 + 15 = 40.\n• Vì x = 45 > 40 nên 45 là một giá trị bất thường.",
        "advanced": "Giá trị x = 0 có phải là giá trị bất thường trong mẫu số liệu trên không?\n→ Lời giải: Hàng rào dưới: Q1 − 1.5 · ΔQ = 15 − 1.5 · 10 = 0. Vì x = 0 không nhỏ hơn 0 (x = 0 thuộc biên) nên 0 không phải là giá trị bất thường.",
        "tip": "Ứng dụng thực tế: Phát hiện giá trị bất thường giúp các nhà khoa học và bác sĩ loại bỏ lỗi nhập liệu hoặc sự cố máy đo.",
        "visual": "statistics"
      },
      {
        "eyebrow": "MỐT (Mo)",
        "title": "Mốt (Mo): Giá trị có tần số xuất hiện nhiều nhất",
        "body": "Mốt của mẫu số liệu là giá trị có tần số xuất hiện lớn nhất trong mẫu số liệu, kí hiệu là Mo. Một mẫu số liệu có thể có một mốt, có thể có nhiều hơn một mốt (đa mốt), hoặc không có mốt nếu tất cả các giá trị có tần số xuất hiện bằng nhau.",
        "formula": "Mo = Giá trị có tần số lớn nhất",
        "example": "Tìm mốt của mẫu số đo cỡ áo bán được: 38, 39, 40, 40, 40, 41, 42.\n• Cỡ 40 xuất hiện 3 lần, nhiều nhất trong mẫu.\n• Vậy mốt Mo = 40 (cỡ áo bán chạy nhất).",
        "advanced": "Mẫu số liệu: 1, 2, 2, 3, 4, 4, 5 có mốt là bao nhiêu?\n→ Lời giải: Cả hai số 2 và 4 đều xuất hiện 2 lần (nhiều nhất). Mẫu số liệu này có hai mốt là Mo1 = 2 và Mo2 = 4.",
        "tip": "Ứng dụng trong thương mại: Mốt được các chủ cửa hàng dùng để quyết định nhập mặt hàng nào có kích cỡ hay màu sắc được ưa chuộng nhất.",
        "visual": "statistics"
      },
      {
        "eyebrow": "KHOẢNG BIẾN THIÊN (R)",
        "title": "Khoảng biến thiên R: Đo độ phân tán tổng thể",
        "body": "Khoảng biến thiên R là hiệu giữa giá trị lớn nhất (x_max) và giá trị nhỏ nhất (x_min) trong mẫu số liệu: R = x_max − x_min. Khoảng biến thiên là đại lượng đơn giản nhất để đo mức độ phân tán của số liệu, nhưng rất dễ bị ảnh hưởng bởi giá trị bất thường.",
        "formula": "R = x_max − x_min  (Khoảng biến thiên)",
        "example": "Nhiệt độ cao nhất trong tuần là 35°C, thấp nhất là 21°C. Tính khoảng biến thiên nhiệt độ.\n• R = 35 − 21 = 14°C.\n• Độ chênh lệch nhiệt độ trong tuần là 14°C.",
        "advanced": "So sánh mức độ phân tán của hai lớp: Lớp A có điểm từ 4 đến 9; Lớp B có điểm từ 6 đến 8.\n→ Lời giải: RA = 9 − 4 = 5; RB = 8 − 6 = 2. Lớp A có khoảng biến thiên lớn hơn, chứng tỏ điểm số lớp A phân tán rộng hơn và học sinh có học lực chênh lệch hơn lớp B.",
        "tip": "Khoảng biến thiên càng nhỏ thì mẫu số liệu càng đồng đều và tập trung xung quanh giá trị trung tâm.",
        "visual": "statistics"
      },
      {
        "eyebrow": "SO SÁNH CÁC ĐẠI LƯỢNG",
        "title": "Khi nào dùng số trung bình, khi nào dùng trung vị?",
        "body": "Khi mẫu số liệu không có giá trị bất thường và phân bố tương đối đối xứng: Dùng số trung bình x̄ là tốt nhất vì nó tận dụng thông tin của tất cả các phần tử. Khi mẫu số liệu có chứa giá trị quá lớn hoặc quá nhỏ bất thường: Bắt buộc dùng trung vị Me làm đại diện vì trung vị không bị méo mó bởi ngoại lai.",
        "formula": "Không có ngoại lai → Dùng x̄  |  Có giá trị bất thường → Dùng Me",
        "example": "Thu nhập hàng tháng (triệu đồng) của 5 hộ gia đình: 8, 9, 10, 11, 200.\n• Số trung bình: x̄ = (8 + 9 + 10 + 11 + 200) / 5 = 238 / 5 = 47.6 triệu.\n• Trung vị: Me = 10 triệu.\n• Đại lượng nào đại diện đúng thực tế đời sống hơn? Rõ ràng trung vị Me = 10 triệu phản ánh đúng mức sống của đa số các hộ dân.",
        "advanced": "Nếu cộng tất cả các giá trị của mẫu số liệu với một số thực c thì số trung bình và trung vị thay đổi thế nào?\n→ Lời giải: Cả số trung bình mới và trung vị mới đều tăng đúng bằng c: x̄_mới = x̄ + c; Me_mới = Me + c.",
        "tip": "Câu hỏi nhận định sư phạm: Trong các cuộc điều tra về giá nhà hay thu nhập bình quân, các cơ quan thống kê uy tín luôn công bố giá TRUNG VỊ chứ không chỉ công bố số trung bình.",
        "visual": "statistics"
      },
      {
        "eyebrow": "TỔNG KẾT VÀ BẤY ĐỀ THI",
        "title": "Chiến thuật xử lý câu trắc nghiệm Thống kê mô tả",
        "body": "Các bẫy đề thi thống kê thường gặp: 1) Quên sắp xếp dãy số liệu trước khi tìm trung vị hoặc tứ phân vị; 2) Tính sai Q1, Q3 do gộp nhầm giá trị Q2 vào các nửa; 3) Quên nhân hệ số 1.5 trong công thức tìm giá trị bất thường (Q1 − 1.5ΔQ hoặc Q3 + 1.5ΔQ).",
        "formula": "Bấm máy Casio: Mode 6 (Statistics) → 1-Variable để đọc x̄, Q1, Med, Q3 tức thì!",
        "example": "Quy trình bấm máy Casio fx-580VN X: Bấm Mode 6 → chọn 1 (1-Variable) → Nhập toàn bộ dãy số liệu → Bấm OPTN → chọn 3 (1-Variable Calc) → Màn hình hiện đầy đủ x̄, Min, Q1, Med, Q3, Max.",
        "advanced": "Mẫu số liệu 10 học sinh có x̄ = 7.5. Một học sinh thứ 11 được thêm vào có điểm 9.7. Điểm trung bình mới của cả 11 học sinh là bao nhiêu?\n→ Lời giải: Tổng điểm 10 bạn đầu = 10 · 7.5 = 75. Tổng điểm 11 bạn = 75 + 9.7 = 84.7. Điểm trung bình mới = 84.7 / 11 = 7.7.",
        "tip": "Tận dụng máy tính cầm tay trong phòng thi: Nhập số liệu vào bảng thống kê của máy sẽ triệt tiêu 100% lỗi tính toán nhầm bằng tay.",
        "visual": "statistics"
      }
    ]
  },
  {
    "id": "quadratic-functions",
    "chapterId": "chuong-6",
    "chapterTitle": "Chương VI: Hàm số, đồ thị và tam thức bậc hai",
    "lessonNumber": "Bài 11",
    "title": "Hàm số bậc hai và dấu của tam thức",
    "shortTitle": "Hàm số bậc hai & Tam thức",
    "description": "Đỉnh parabol, trục đối xứng, bảng biến thiên, định lý dấu tam thức bậc hai và bất phương trình.",
    "duration": "15 phút",
    "visual": "parabola",
    "slides": [
      {
        "eyebrow": "KHÁI NIỆM HÀM SỐ BẬC HAI",
        "title": "Định nghĩa hàm số bậc hai y = ax² + bx + c (a ≠ 0)",
        "body": "Hàm số bậc hai là hàm số được cho bởi công thức y = ax² + bx + c, trong đó a, b, c là các số thực và a ≠ 0. Tập xác định của hàm số bậc hai luôn là ℝ. Đồ thị của hàm số bậc hai là một đường cong parabol có bề lõm quay lên trên nếu a > 0 và quay xuống dưới nếu a < 0.",
        "formula": "y = ax² + bx + c  (a ≠ 0)  ·  Tập xác định D = ℝ",
        "example": "Xác định các hệ số a, b, c và bề lõm của parabol y = −2x² + 4x − 1.\n• Hệ số a = −2, b = 4, c = −1.\n• Vì a = −2 < 0 nên parabol có bề lõm quay xuống dưới (hình chữ ∩).",
        "advanced": "Xác định parabol y = ax² + bx + 2 biết đồ thị đi qua hai điểm A(1; 5) và B(−1; 1).\n→ Lời giải: Thay A(1; 5): a(1)² + b(1) + 2 = 5 ⇔ a + b = 3. Thay B(−1; 1): a(−1)² + b(−1) + 2 = 1 ⇔ a − b = −1. Giải hệ: a = 1, b = 2. Vậy parabol là y = x² + 2x + 2.",
        "tip": "Nhận biết nhanh: a > 0 thì parabol hình cái bát ngửa (đáy là điểm thấp nhất); a < 0 thì parabol hình cái bát úp (đỉnh là điểm cao nhất).",
        "visual": "parabola"
      },
      {
        "eyebrow": "TỌA ĐỘ ĐỈNH VÀ TRỤC ĐỐI XỨNG",
        "title": "Tọa độ đỉnh I và phương trình trục đối xứng",
        "body": "Đỉnh của parabol là điểm I(−b/(2a); −Δ/(4a)). Trục đối xứng của parabol là đường thẳng đứng có phương trình x = −b/(2a). Điểm đỉnh I luôn nằm trên trục đối xứng. Để tìm tung độ đỉnh yI, cách nhanh nhất là thay hoành độ xI = −b/(2a) vào phương trình hàm số: yI = f(−b/(2a)).",
        "formula": "Đỉnh I(−b / (2a); yI)  ·  Trục đối xứng: x = −b / (2a)",
        "example": "Tìm tọa độ đỉnh và trục đối xứng của parabol y = x² − 4x + 3.\n• Hoành độ đỉnh: xI = −b / (2a) = −(−4) / (2 · 1) = 4 / 2 = 2.\n• Tung độ đỉnh: yI = 2² − 4(2) + 3 = 4 − 8 + 3 = −1.\n• Tọa độ đỉnh là I(2; −1). Trục đối xứng là đường thẳng x = 2.",
        "advanced": "Tìm parabol y = ax² + bx + c có đỉnh I(1; −4) và cắt trục tung tại điểm có tung độ bằng −3.\n→ Lời giải: Cắt trục tung tại (0; −3) ⇒ c = −3. Trục đối xứng x = −b/(2a) = 1 ⇔ b = −2a. Đi qua I(1; −4): a(1)² + b(1) − 3 = −4 ⇔ a + b = −1. Thay b = −2a ⇒ a − 2a = −1 ⇔ a = 1 ⇒ b = −2. Parabol là y = x² − 2x − 3.",
        "tip": "Mẹo nhớ hoành độ đỉnh: Bằng nghiệm kép của phương trình bậc hai x = −b/(2a).",
        "visual": "parabola"
      },
      {
        "eyebrow": "BẢNG BIẾN THIÊN",
        "title": "Bảng biến thiên và khoảng đồng biến, nghịch biến",
        "body": "Trường hợp a > 0: Hàm số nghịch biến trên khoảng (−∞; −b/(2a)) và đồng biến trên khoảng (−b/(2a); +∞). Giá trị nhỏ nhất là y = −Δ/(4a) tại x = −b/(2a). Trường hợp a < 0: Hàm số đồng biến trên (−∞; −b/(2a)) và nghịch biến trên (−b/(2a); +∞). Giá trị lớn nhất là y = −Δ/(4a) tại x = −b/(2a).",
        "formula": "a > 0: Giảm rồi Tăng (Min tại đỉnh)  ·  a < 0: Tăng rồi Giảm (Max tại đỉnh)",
        "example": "Lập bảng biến thiên của hàm số y = −x² + 2x + 1.\n• Hệ số a = −1 < 0. Đỉnh I: xI = −2 / (2 · (−1)) = 1; yI = −1² + 2(1) + 1 = 2.\n• Hàm số đồng biến trên (−∞; 1) và nghịch biến trên (1; +∞).\n• Giá trị lớn nhất của hàm số bằng 2 đạt tại x = 1.",
        "advanced": "Tìm m để hàm số y = (m − 2)x² − 2x + 3 đồng biến trên khoảng (1; +∞).\n→ Lời giải: Để hàm số đồng biến trên (1; +∞), trước hết parabol phải có bề lõm quay lên: a = m − 2 > 0 ⇔ m > 2. Hoành độ đỉnh xI = −(−2) / (2(m − 2)) = 1 / (m − 2) phải nằm bên trái hoặc bằng 1: 1 / (m − 2) ≤ 1 ⇔ m − 2 ≥ 1 ⇔ m ≥ 3. Kết hợp điều kiện: m ≥ 3.",
        "tip": "Quy tắc đọc bảng biến thiên: Mũi tên đi xuống là nghịch biến (giảm), mũi tên đi lên là đồng biến (tăng).",
        "visual": "parabola"
      },
      {
        "eyebrow": "GIÁ TRỊ LỚN NHẤT VÀ NHỎ NHẤT TRÊN ĐOẠN",
        "title": "Tìm GTLN và GTNN của hàm số bậc hai trên đoạn [α; β]",
        "body": "Để tìm GTLN và GTNN của hàm số bậc hai trên đoạn [α; β]: 1) Tính hoành độ đỉnh x0 = −b/(2a); 2) Kiểm tra xem x0 có thuộc đoạn [α; β] hay không; 3) Tính giá trị của hàm số tại hai đầu mút f(α), f(β) và tại đỉnh f(x0) (nếu x0 ∈ [α; β]); 4) So sánh các giá trị đã tính để chọn số lớn nhất (Max) và số nhỏ nhất (Min).",
        "formula": "Max / Min trên [α; β] nằm trong tập các giá trị { f(α); f(β); f(x0) }",
        "example": "Tìm GTLN và GTNN của y = x² − 4x + 5 trên đoạn [0; 3].\n• Hoành độ đỉnh: x0 = −(−4)/(2·1) = 2. Nhận thấy 2 ∈ [0; 3].\n• Tính các giá trị: f(0) = 5; f(2) = 2² − 4(2) + 5 = 1; f(3) = 3² − 4(3) + 5 = 2.\n• So sánh: Giá trị nhỏ nhất là Min y = 1 (tại x = 2). Giá trị lớn nhất là Max y = 5 (tại x = 0).",
        "advanced": "Tìm GTLN và GTNN của y = x² − 4x + 5 trên đoạn [3; 5].\n→ Lời giải: Đỉnh x0 = 2 không thuộc đoạn [3; 5]! Hàm số đồng biến trên [3; 5] vì a = 1 > 0 và x ≥ 2. Vậy Min y = f(3) = 2; Max y = f(5) = 5² − 4(5) + 5 = 10.",
        "tip": "Bẫy điểm thi: Nếu hoành độ đỉnh KHÔNG THUỘC đoạn [α; β], tuyệt đối không được đưa giá trị đỉnh vào so sánh!",
        "visual": "parabola"
      },
      {
        "eyebrow": "ĐỊNH LÝ DẤU TAM THỨC BẬC HAI",
        "title": "Định lý về dấu của tam thức bậc hai f(x) = ax² + bx + c",
        "body": "Cho tam thức f(x) = ax² + bx + c (a ≠ 0). 1) Nếu Δ < 0: f(x) luôn CÙNG DẤU với hệ số a với mọi x ∈ ℝ. 2) Nếu Δ = 0: f(x) cùng dấu với a với mọi x ≠ −b/(2a). 3) Nếu Δ > 0: f(x) có hai nghiệm x1 < x2; f(x) TRÁI DẤU với a ở khoảng trong hai nghiệm (x1; x2) và CÙNG DẤU với a ở ngoài hai nghiệm.",
        "formula": "Δ < 0: Luôn cùng dấu a  ·  Δ > 0: 'Trong trái - Ngoài cùng'",
        "example": "Xét dấu tam thức f(x) = x² − 5x + 6.\n• Cho x² − 5x + 6 = 0 có hai nghiệm phân biệt: x1 = 2, x2 = 3.\n• Hệ số a = 1 > 0.\n• Theo quy tắc 'Trong trái - Ngoài cùng':\n  f(x) < 0 (trái dấu a) khi x ∈ (2; 3).\n  f(x) > 0 (cùng dấu a) khi x ∈ (−∞; 2) ∪ (3; +∞).",
        "advanced": "Xét dấu tam thức g(x) = −x² + 2x − 3.\n→ Lời giải: Tính Δ' = 1² − (−1)(−3) = 1 − 3 = −2 < 0. Vì Δ' < 0 và a = −1 < 0, theo định lý thì g(x) < 0 với MỌI x ∈ ℝ.",
        "tip": "Khẩu quyết bốn từ bất hủ của đại số 10: 'TRONG TRÁI - NGOÀI CÙNG' (trong khoảng hai nghiệm trái dấu với a, ngoài khoảng cùng dấu với a).",
        "visual": "parabola"
      },
      {
        "eyebrow": "BẤT PHƯƠNG TRÌNH BẬC HAI",
        "title": "Phương pháp giải bất phương trình bậc hai một ẩn",
        "body": "Giải bất phương trình ax² + bx + c > 0 (hoặc ≥ 0, < 0, ≤ 0): Bước 1: Tìm nghiệm của tam thức ax² + bx + c = 0. Bước 2: Dùng định lý 'Trong trái - Ngoài cùng' để vẽ bảng xét dấu trục số. Bước 3: Đọc tập nghiệm phù hợp với dấu của bất phương trình.",
        "formula": "ax² + bx + c > 0 ⇔ Lấy khoảng ngoài nghiệm (nếu a > 0 và Δ > 0)",
        "example": "Giải bất phương trình x² − 3x − 4 ≤ 0.\n• Bước 1: Cho x² − 3x − 4 = 0 có hai nghiệm: x1 = −1 và x2 = 4.\n• Bước 2: Hệ số a = 1 > 0. Dấu BPT là '≤ 0' (cần trái dấu với a hoặc bằng 0).\n• Bước 3: Lấy khoảng trong hai nghiệm kể cả hai đầu mút: Tập nghiệm S = [−1; 4].",
        "advanced": "Giải bất phương trình: −2x² + 3x − 1 > 0.\n→ Lời giải: Đổi dấu nhân cả hai vế với −1: 2x² − 3x + 1 < 0. Nghiệm phương trình là x = 1/2 và x = 1. Hệ số a = 2 > 0, cần lấy khoảng trái dấu nên tập nghiệm là S = (1/2; 1).",
        "tip": "Mẹo chuẩn hóa: Luôn biến đổi để hệ số a > 0 (bằng cách nhân hai vế với −1 và đổi chiều bất đẳng thức nếu a âm) trước khi đọc nghiệm để không bị nhầm dấu.",
        "visual": "parabola"
      },
      {
        "eyebrow": "BÀI TOÁN THAM SỐ m",
        "title": "Tìm tham số m để tam thức luôn dương hoặc luôn âm trên ℝ",
        "body": "Để tam thức f(x) = ax² + bx + c luôn mang một dấu trên toàn bộ tập số thực ℝ: (1) f(x) > 0 với mọi x ∈ ℝ ⇔ a > 0 và Δ < 0; (2) f(x) ≥ 0 với mọi x ∈ ℝ ⇔ a > 0 và Δ ≤ 0; (3) f(x) < 0 với mọi x ∈ ℝ ⇔ a < 0 và Δ < 0; (4) f(x) ≤ 0 với mọi x ∈ ℝ ⇔ a < 0 và Δ ≤ 0. Nếu hệ số a chứa tham số, bắt buộc phải xét riêng trường hợp a = 0.",
        "formula": "f(x) > 0, ∀x ∈ ℝ ⇔ { a > 0; Δ < 0 }  ·  f(x) < 0, ∀x ∈ ℝ ⇔ { a < 0; Δ < 0 }",
        "example": "Tìm m để tam thức f(x) = x² − 2mx + 4 luôn dương với mọi x ∈ ℝ.\n• f(x) > 0 với mọi x ∈ ℝ ⇔ a = 1 > 0 (luôn đúng) và Δ' < 0.\n• Δ' = (−m)² − 1 · 4 = m² − 4 < 0.\n• Giải BPT m² − 4 < 0: Ta được −2 < m < 2. Vậy m ∈ (−2; 2).",
        "advanced": "Tìm m để bất phương trình (m − 1)x² + 2(m − 1)x + 2 > 0 nghiệm đúng với mọi x ∈ ℝ.\n→ Lời giải: TH1: a = m − 1 = 0 ⇔ m = 1. Khi đó BPT trở thành 0x² + 0x + 2 = 2 > 0 (luôn đúng với mọi x ∈ ℝ) ⇒ m = 1 thỏa mãn. TH2: m ≠ 1. Cần a = m − 1 > 0 ⇔ m > 1 và Δ' = (m − 1)² − 2(m − 1) < 0 ⇔ (m − 1)(m − 3) < 0 ⇔ 1 < m < 3. Kết hợp hai trường hợp: 1 ≤ m < 3.",
        "tip": "Bẫy điểm 9–10: Nếu hệ số a chứa tham số m, quên xét trường hợp a = 0 sẽ bị mất ngay nửa số điểm của bài toán!",
        "visual": "parabola"
      },
      {
        "eyebrow": "TỔNG KẾT VÀ BẪY ĐỀ THI",
        "title": "Chiến thuật xử lý câu trắc nghiệm Hàm số và Tam thức bậc hai",
        "body": "Các bẫy đề thi kinh điển: 1) Nhầm công thức đỉnh x = −b/(2a) thành b/(2a); 2) Bấm máy giải BPT bậc hai lấy khoảng nghiệm mà quên đổi dấu ngoặc tròn sang ngoặc vuông khi có dấu bằng; 3) Quên xét trường hợp a = 0 khi giải bài toán tham số.",
        "formula": "Bấm máy Casio: Mode A (Inequality) → chọn bậc 2 để giải bất phương trình trong 2 giây!",
        "example": "Tìm tập nghiệm của BPT x² − 4x + 4 > 0.\n• Tam thức là (x − 2)². Vì (x − 2)² ≥ 0 với mọi x nên (x − 2)² > 0 khi và chỉ khi x − 2 ≠ 0 ⇔ x ≠ 2.\n• Tập nghiệm là S = ℝ \\ {2}.",
        "advanced": "Một quả bóng được sút lên có quỹ đạo h(t) = −5t² + 20t (tính bằng mét, t tính bằng giây). Quả bóng đạt độ cao lớn nhất là bao nhiêu mét và sau bao lâu?\n→ Lời giải: Đây là hàm số bậc hai với a = −5 < 0. Đỉnh t = −20 / (2 · (−5)) = 2 giây. Độ cao lớn nhất h_max = h(2) = −5(4) + 20(2) = 20 mét.",
        "tip": "Phương pháp CASIO: Bấm Mode A → 2 (bậc 2) để giải bất phương trình bậc hai, hoặc Mode 9-2-2 để tìm tọa độ đỉnh Max/Min của parabol cực nhanh.",
        "visual": "parabola"
      }
    ]
  },
  {
    "id": "analytic-geometry",
    "chapterId": "chuong-7",
    "chapterTitle": "Chương VII: Phương pháp tọa độ trong mặt phẳng",
    "lessonNumber": "Bài 12",
    "title": "Phương trình đường thẳng và đường tròn",
    "shortTitle": "Đường thẳng & Đường tròn",
    "description": "Phương trình đường thẳng, khoảng cách, góc và phương trình đường tròn.",
    "duration": "15 phút",
    "visual": "coordinate",
    "slides": [
      {
        "eyebrow": "VECTƠ PHÁP TUYẾN VÀ CHỈ PHƯƠNG",
        "title": "Vectơ pháp tuyến n và vectơ chỉ phương u của đường thẳng",
        "body": "Vectơ chỉ phương u→ (khác 0→) có giá song song hoặc trùng với đường thẳng d. Vectơ pháp tuyến n→ (khác 0→) vuông góc với vectơ chỉ phương của đường thẳng d (tức n→ ⊥ u→ ⇔ n→ · u→ = 0). Nếu đường thẳng d có một vectơ chỉ phương u→ = (a; b) thì một vectơ pháp tuyến của d là n→ = (−b; a) hoặc n→ = (b; −a).",
        "formula": "u→ = (a; b)  ⇔  n→ = (−b; a)  (vì a(−b) + ba = 0)",
        "example": "Đường thẳng d có vectơ chỉ phương u→ = (2; 3). Tìm một vectơ pháp tuyến của d.\n• Đổi chỗ hai tọa độ và đổi dấu một tọa độ: n→ = (−3; 2) hoặc n→ = (3; −2).\n• Kiểm tra: u→ · n→ = 2(−3) + 3(2) = −6 + 6 = 0 (Đúng vuông góc).",
        "advanced": "Đường thẳng d đi qua hai điểm A(1; 2) và B(4; 6). Tìm vectơ pháp tuyến của d.\n→ Lời giải: Vectơ chỉ phương AB→ = (4 − 1; 6 − 2) = (3; 4). Suy ra vectơ pháp tuyến của d là n→ = (−4; 3).",
        "tip": "Quy tắc đảo tọa độ: Muốn đổi từ chỉ phương sang pháp tuyến: 'ĐỔI CHỖ VÀ ĐỔI DẤU MỘT VỊ TRÍ' (a; b) → (−b; a).",
        "visual": "coordinate"
      },
      {
        "eyebrow": "PHƯƠNG TRÌNH TỔNG QUÁT",
        "title": "Phương trình tổng quát của đường thẳng: ax + by + c = 0",
        "body": "Đường thẳng d đi qua điểm M0(x0; y0) và nhận n→ = (a; b) làm vectơ pháp tuyến có phương trình: a(x − x0) + b(y − y0) = 0. Khai triển rút gọn ta được phương trình tổng quát: ax + by + c = 0 (với c = −ax0 − by0 và a² + b² > 0).",
        "formula": "a(x − x0) + b(y − y0) = 0  ⇔  ax + by + c = 0",
        "example": "Viết phương trình tổng quát của đường thẳng d đi qua M(2; −1) và có VTPT n→ = (3; 4).\n• Phương trình: 3(x − 2) + 4(y − (−1)) = 0.\n• Khai triển: 3x − 6 + 4y + 4 = 0 ⇔ 3x + 4y − 2 = 0.",
        "advanced": "Viết phương trình đường trung trực của đoạn thẳng AB với A(1; 3) và B(5; 1).\n→ Lời giải: Trung điểm I của AB là I((1+5)/2; (3+1)/2) = I(3; 2). Đường trung trực nhận AB→ = (4; −2) = 2(2; −1) làm VTPT. Phương trình: 2(x − 3) − 1(y − 2) = 0 ⇔ 2x − y − 4 = 0.",
        "tip": "Nhìn nhanh VTPT: Cho phương trình 2x − 5y + 7 = 0 thì VTPT đọc ngay là các hệ số đứng trước x và y: n→ = (2; −5).",
        "visual": "coordinate"
      },
      {
        "eyebrow": "PHƯƠNG TRÌNH THAM SỐ",
        "title": "Phương trình tham số của đường thẳng",
        "body": "Đường thẳng d đi qua điểm M0(x0; y0) và nhận u→ = (u1; u2) làm vectơ chỉ phương có phương trình tham số: x = x0 + u1 · t và y = y0 + u2 · t (với tham số t ∈ ℝ). Mỗi giá trị cụ thể của t cho ta tọa độ của một điểm M(x; y) nằm trên đường thẳng d.",
        "formula": "{ x = x0 + u1 · t ; y = y0 + u2 · t } (với t ∈ ℝ)",
        "example": "Viết phương trình tham số của đường thẳng d đi qua A(1; 3) và có VTCP u→ = (2; −5).\n• Phương trình tham số: { x = 1 + 2t ; y = 3 − 5t } (t ∈ ℝ).\n• Với t = 1, ta được điểm M(3; −2) thuộc đường thẳng d.",
        "advanced": "Chuyển phương trình tổng quát 2x − 3y + 6 = 0 sang phương trình tham số.\n→ Lời giải: VTPT n→ = (2; −3) ⇒ VTCP u→ = (3; 2). Chọn điểm thuộc đường thẳng: cho y = 0 ⇒ 2x + 6 = 0 ⇒ x = −3 ⇒ M(−3; 0). Phương trình tham số: { x = −3 + 3t ; y = 2t }.",
        "tip": "Chuyển đổi tham số ↔ tổng quát: Muốn khử tham số t, nhân hai dòng rồi cộng trừ để triệt tiêu biến t là ra phương trình tổng quát.",
        "visual": "coordinate"
      },
      {
        "eyebrow": "VỊ TRÍ TƯƠNG ĐỐI HAI ĐƯỜNG THẲNG",
        "title": "Xét vị trí tương đối: Cắt nhau, song song hay trùng nhau",
        "body": "Cho hai đường thẳng d1: a1 x + b1 y + c1 = 0 và d2: a2 x + b2 y + c2 = 0. Tọa độ giao điểm là nghiệm của hệ hai phương trình. 1) Hệ có nghiệm duy nhất ⇔ d1 cắt d2 (a1/a2 ≠ b1/b2). 2) Hệ vô nghiệm ⇔ d1 // d2 (a1/a2 = b1/b2 ≠ c1/c2). 3) Hệ vô số nghiệm ⇔ d1 trùng d2 (a1/a2 = b1/b2 = c1/c2).",
        "formula": "d1 // d2: a1/a2 = b1/b2 ≠ c1/c2  ·  d1 ⊥ d2: a1 a2 + b1 b2 = 0",
        "example": "Xét vị trí tương đối của d1: 2x − y + 3 = 0 và d2: 4x − 2y + 6 = 0.\n• Tỉ số các hệ số: 2/4 = (−1)/(−2) = 3/6 = 1/2.\n• Cả ba tỉ số đều bằng nhau. Vậy hai đường thẳng d1 và d2 trùng nhau.",
        "advanced": "Tìm m để hai đường thẳng d1: mx + y − 2 = 0 và d2: 4x + my + 4 = 0 song song với nhau.\n→ Lời giải: d1 // d2 ⇔ m/4 = 1/m ≠ −2/4. Từ m/4 = 1/m ⇔ m² = 4 ⇔ m = 2 hoặc m = −2. Thử lại: Với m = 2, tỉ số 2/4 = 1/2 ≠ −1/2 (Thỏa mãn song song). Với m = −2, tỉ số −2/4 = 1/(−2) = −2/4 (Trùng nhau, loại). Vậy m = 2.",
        "tip": "Nhớ điều kiện vuông góc: Hai đường thẳng vuông góc khi và chỉ khi tích vô hướng hai VTPT bằng 0: a1 a2 + b1 b2 = 0.",
        "visual": "coordinate"
      },
      {
        "eyebrow": "KHOẢNG CÁCH TỪ ĐIỂM ĐẾN ĐƯỜNG THẲNG",
        "title": "Công thức tính khoảng cách từ một điểm đến đường thẳng",
        "body": "Khoảng cách từ điểm M0(x0; y0) đến đường thẳng d: ax + by + c = 0 được tính bằng công thức: Lấy trị tuyệt đối khi thay tọa độ điểm M0 vào vế trái của phương trình đường thẳng, rồi chia cho căn bậc hai của tổng bình phương hai hệ số a² + b².",
        "formula": "d(M0, d) = |ax0 + by0 + c| / √(a² + b²)",
        "example": "Tính khoảng cách từ điểm M(1; 2) đến đường thẳng d: 3x + 4y − 1 = 0.\n• Tử số: |3(1) + 4(2) − 1| = |3 + 8 − 1| = |10| = 10.\n• Mẫu số: √(3² + 4²) = √(9 + 16) = √25 = 5.\n• Khoảng cách: d(M, d) = 10 / 5 = 2.",
        "advanced": "Tính khoảng cách giữa hai đường thẳng song song d1: 3x − 4y + 5 = 0 và d2: 3x − 4y − 10 = 0.\n→ Lời giải: Chọn điểm A(1; 2) thuộc d1 (3(1) − 4(2) + 5 = 0). Khoảng cách giữa 2 đường thẳng là d(A, d2) = |3(1) − 4(2) − 10| / √(3² + (−4)²) = |−15| / 5 = 3.",
        "tip": "Lưu ý sống còn: Phải đưa phương trình đường thẳng về DẠNG TỔNG QUÁT ax + by + c = 0 trước khi áp dụng công thức khoảng cách!",
        "visual": "coordinate"
      },
      {
        "eyebrow": "GÓC GIỮA HAI ĐƯỜNG THẲNG",
        "title": "Công thức tính cosin của góc giữa hai đường thẳng",
        "body": "Góc giữa hai đường thẳng d1 và d2 luôn là một góc không tù: 0° ≤ φ ≤ 90°. Cosin của góc giữa hai đường thẳng bằng trị tuyệt đối cosin của góc giữa hai vectơ pháp tuyến (để đảm bảo kết quả luôn không âm).",
        "formula": "cos φ = |a1 a2 + b1 b2| / (√(a1² + b1²) · √(a2² + b2²))  (0° ≤ φ ≤ 90°)",
        "example": "Tính góc giữa d1: x + 2y − 3 = 0 và d2: 2x − y + 5 = 0.\n• n1→ = (1; 2) và n2→ = (2; −1).\n• Tử số: |1(2) + 2(−1)| = |2 − 2| = 0.\n• cos φ = 0 ⇒ Góc giữa hai đường thẳng bằng 90° (hai đường thẳng vuông góc).",
        "advanced": "Tìm góc giữa hai đường thẳng d1: x − y + 1 = 0 và d2: x + (2 − √3)y − 4 = 0.\n→ Lời giải: Áp dụng công thức tính ra cos φ = √3/2 ⇒ φ = 30°.",
        "tip": "Dấu trị tuyệt đối ở tử số: Bắt buộc phải có dấu trị tuyệt đối |a1 a2 + b1 b2| vì góc giữa hai đường thẳng không bao giờ vượt quá 90°.",
        "visual": "coordinate"
      },
      {
        "eyebrow": "PHƯƠNG TRÌNH ĐƯỜNG TRÒN",
        "title": "Phương trình đường tròn tâm I(a; b) bán kính R",
        "body": "Đường tròn tâm I(a; b) bán kính R có phương trình chính tắc: (x − a)² + (y − b)² = R². Dạng khai triển tổng quát: x² + y² − 2ax − 2by + c = 0 với điều kiện a² + b² − c > 0. Khi đó tâm là I(a; b) và bán kính R = √(a² + b² − c).",
        "formula": "(x − a)² + (y − b)² = R²  ·  Dạng khai triển: R = √(a² + b² − c)",
        "example": "Tìm tâm và bán kính của đường tròn (C): (x − 2)² + (y + 3)² = 16.\n• Tâm I(2; −3).\n• Bán kính: R = √16 = 4.",
        "advanced": "Phương trình x² + y² − 4x + 6y − 12 = 0 có là đường tròn không? Tìm tâm và bán kính.\n→ Lời giải: a = −4 / (−2) = 2; b = 6 / (−2) = −3; c = −12. Tính a² + b² − c = 2² + (−3)² − (−12) = 4 + 9 + 12 = 25 > 0. Đây là đường tròn tâm I(2; −3) và bán kính R = √25 = 5.",
        "tip": "Cách tìm tâm từ dạng khai triển: Lấy hệ số đứng trước x chia cho −2 được hoành độ a, lấy hệ số đứng trước y chia cho −2 được tung độ b.",
        "visual": "coordinate"
      },
      {
        "eyebrow": "TIẾP TUYẾN CỦA ĐƯỜNG TRÒN",
        "title": "Phương trình tiếp tuyến của đường tròn tại một điểm",
        "body": "Tiếp tuyến của đường tròn (C) tâm I(a; b) tại điểm M0(x0; y0) thuộc đường tròn là đường thẳng đi qua M0 và vuông góc với bán kính IM0, do đó nhận IM0→ = (x0 − a; y0 − b) làm vectơ pháp tuyến. Phương trình tiếp tuyến: (x0 − a)(x − x0) + (y0 − b)(y − y0) = 0.",
        "formula": "Tiếp tuyến tại M0: IM0→ là vectơ pháp tuyến",
        "example": "Viết phương trình tiếp tuyến của đường tròn (C): (x − 1)² + (y − 2)² = 25 tại điểm M(4; 6).\n• Tâm I(1; 2). Vectơ pháp tuyến IM→ = (4 − 1; 6 − 2) = (3; 4).\n• Phương trình tiếp tuyến: 3(x − 4) + 4(y − 6) = 0 ⇔ 3x + 4y − 36 = 0.",
        "advanced": "Đường thẳng d: ax + by + c = 0 tiếp xúc với đường tròn tâm I bán kính R khi và chỉ khi nào?\n→ Lời giải: Đường thẳng tiếp xúc với đường tròn khi và chỉ khi khoảng cách từ tâm I đến đường thẳng d bằng đúng bán kính R: d(I, d) = R.",
        "tip": "Điều kiện tiếp xúc d(I, d) = R là chìa khóa để giải quyết mọi bài toán viết phương trình tiếp tuyến song song hoặc vuông góc với đường thẳng cho trước.",
        "visual": "coordinate"
      }
    ]
  },
  {
    "id": "combinatorics",
    "chapterId": "chuong-8",
    "chapterTitle": "Chương VIII: Đại số tổ hợp",
    "lessonNumber": "Bài 13",
    "title": "Quy tắc đếm, hoán vị, chỉnh hợp và tổ hợp",
    "shortTitle": "Đại số tổ hợp",
    "description": "Quy tắc cộng, quy tắc nhân, phân biệt hoán vị, chỉnh hợp và tổ hợp.",
    "duration": "15 phút",
    "visual": "combinatorics",
    "slides": [
      {
        "eyebrow": "QUY TẮC CỘNG",
        "title": "Quy tắc cộng: Phân chia các phương án độc lập",
        "body": "Một công việc có thể được hoàn thành bởi một trong hai phương án A hoặc B. Phương án A có m cách thực hiện, phương án B có n cách thực hiện (hai phương án không trùng lặp cách nào). Khi đó, công việc có thể được hoàn thành bằng: m + n cách. Từ khóa logic: 'HOẶC' (làm theo cách này thì không làm cách kia).",
        "formula": "Công việc = Phương án 1 HOẶC Phương án 2  ⇒  Số cách = m + n",
        "example": "Trên bàn có 5 quyển sách Toán khác nhau và 6 quyển sách Văn khác nhau. Có bao nhiêu cách chọn một quyển sách để đọc?\n• Chọn sách Toán: 5 cách.\n• Chọn sách Văn: 6 cách.\n• Đây là hai phương án độc lập: Tổng số cách chọn 1 quyển sách là: 5 + 6 = 11 cách.",
        "advanced": "Một trường có 20 giáo viên dạy Toán, 15 giáo viên dạy Lý và 5 giáo viên dạy được cả hai môn. Cần chọn 1 giáo viên phụ trách đội tuyển STEM. Có bao nhiêu cách?\n→ Lời giải: Áp dụng quy tắc cộng có phần giao: n(T ∪ L) = n(T) + n(L) − n(T ∩ L) = 20 + 15 − 5 = 30 cách.",
        "tip": "Phân biệt then chốt: Dùng quy tắc cộng khi mỗi phương án độc lập đều ĐÃ HOÀN THÀNH trọn vẹn yêu cầu bài toán.",
        "visual": "combinatorics"
      },
      {
        "eyebrow": "QUY TẮC NHÂN",
        "title": "Quy tắc nhân: Thực hiện công việc qua nhiều công đoạn liên tiếp",
        "body": "Một công việc phải trải qua hai công đoạn liên tiếp 1 và 2. Công đoạn 1 có m cách thực hiện; ứng với mỗi cách của công đoạn 1, có n cách thực hiện công đoạn 2. Khi đó toàn bộ công việc có: m · n cách hoàn thành. Từ khóa logic: 'VÀ' (bắt buộc phải làm lần lượt từng bước liên tiếp).",
        "formula": "Công việc = Công đoạn 1 VÀ Công đoạn 2  ⇒  Số cách = m · n",
        "example": "Bạn Lan có 4 chiếc áo sơ mi khác nhau và 3 chiếc chân váy khác nhau. Hỏi Lan có bao nhiêu cách chọn một bộ trang phục (gồm 1 áo và 1 váy)?\n• Công đoạn 1: Chọn áo có 4 cách.\n• Công đoạn 2: Chọn váy có 3 cách.\n• Số cách phối một bộ trang phục hoàn chỉnh: 4 · 3 = 12 cách.",
        "advanced": "Từ các chữ số {1, 2, 3, 4, 5}, có thể lập được bao nhiêu số tự nhiên có 3 chữ số đôi một khác nhau?\n→ Lời giải: Gọi số cần lập là abc̄. Chọn a: 5 cách. Chọn b (khác a): 4 cách. Chọn c (khác a, b): 3 cách. Theo quy tắc nhân, có 5 · 4 · 3 = 60 số.",
        "tip": "Phân biệt Quy tắc cộng vs Quy tắc nhân: Làm xong 1 bước mà công việc ĐÃ XONG thì CỘNG (+); nếu mới XONG MỘT NỬA và phải làm tiếp bước sau thì NHÂN (·)!",
        "visual": "combinatorics"
      },
      {
        "eyebrow": "SƠ ĐỒ CÂY",
        "title": "Sơ đồ cây: Trực quan hóa các khả năng lựa chọn",
        "body": "Sơ đồ cây là hình vẽ phân nhánh hình cây mô tả trực quan tất cả các khả năng xảy ra của một chuỗi hành động. Gốc cây biểu thị điểm xuất phát, mỗi nhánh biểu thị một lựa chọn, và các ngọn cây ở cuối cùng biểu thị từng kết quả hoàn chỉnh.",
        "formula": "Số ngọn cây ở hàng cuối = Tổng số cách lựa chọn",
        "example": "Gieo một đồng xu cân đối 2 lần liên tiếp. Vẽ sơ đồ cây xác định các kết quả có thể xảy ra.\n• Lần 1: Có 2 nhánh S (Sấp) và N (Ngửa).\n• Lần 2: Từ mỗi nhánh của lần 1, lại tách thành 2 nhánh S và N.\n• Kết quả cuối cùng: 4 ngọn cây: {SS, SN, NS, NN}.",
        "advanced": "Có bao nhiêu đường đi từ đỉnh A đến đỉnh C qua đỉnh B nếu có 3 con đường từ A đến B và 4 con đường từ B đến C?\n→ Lời giải: Theo sơ đồ cây và quy tắc nhân: 3 · 4 = 12 đường đi.",
        "tip": "Sơ đồ cây rất hữu ích khi số lượng trường hợp nhỏ và bài toán có các điều kiện ràng buộc phức tạp.",
        "visual": "combinatorics"
      },
      {
        "eyebrow": "HOÁN VỊ (Pn)",
        "title": "Hoán vị của n phần tử: Sắp xếp thứ tự tất cả n đối tượng",
        "body": "Một hoán vị của n phần tử là một cách sắp xếp có thứ tự n phần tử đó vào n vị trí khác nhau. Số các hoán vị của n phần tử được kí hiệu là P_n và tính bằng giai thừa của n: P_n = n! = n · (n − 1) · (n − 2) · ... · 2 · 1. Quy ước: 0! = 1.",
        "formula": "P_n = n! = n(n − 1)(n − 2)...1  ·  0! = 1",
        "example": "Có bao nhiêu cách xếp 5 học sinh thành một hàng dọc?\n• Mỗi cách xếp là một hoán vị của 5 học sinh vào 5 vị trí hàng dọc.\n• Số cách xếp: P5 = 5! = 5 · 4 · 3 · 2 · 1 = 120 cách.",
        "advanced": "Xếp 5 học sinh gồm 3 nam và 2 nữ thành một hàng dọc sao cho 2 bạn nữ luôn đứng cạnh nhau. Có bao nhiêu cách?\n→ Lời giải: Phương pháp 'buộc phần tử': Gom 2 bạn nữ thành 1 khối X. Khối X có 2! = 2 cách xếp hai bạn nữ với nhau. Bây giờ xếp khối X cùng với 3 bạn nam (tổng cộng 4 đối tượng): có 4! = 24 cách. Theo quy tắc nhân: 2! · 4! = 2 · 24 = 48 cách.",
        "tip": "Phương pháp 'Buộc phần tử': Cứ bài toán yêu cầu 'luôn đứng cạnh nhau' thì buộc các đối tượng đó lại thành 1 phần tử duy nhất!",
        "visual": "combinatorics"
      },
      {
        "eyebrow": "CHỈNH HỢP (A_n^k)",
        "title": "Chỉnh hợp chập k của n phần tử: Chọn k và xếp thứ tự",
        "body": "Cho tập hợp có n phần tử (1 ≤ k ≤ n). Một chỉnh hợp chập k của n phần tử là một cách chọn ra k phần tử và sắp xếp k phần tử đó vào k vị trí có thứ tự. Số chỉnh hợp chập k của n phần tử là: A_n^k = n! / (n − k)! = n · (n − 1) · ... · (n − k + 1).",
        "formula": "A_n^k = n! / (n − k)!  (Chọn k phần tử CÓ XẾP THỨ TỰ)",
        "example": "Một lớp có 40 học sinh. Cần bầu ra một ban cán sự gồm: 1 Lớp trưởng, 1 Lớp phó và 1 Bí thư. Có bao nhiêu cách chọn?\n• Chọn 3 bạn từ 40 bạn và gán vào 3 chức vụ khác nhau (có thứ tự phân biệt chức vụ).\n• Số cách chọn: A_40^3 = 40 · 39 · 38 = 59.280 cách.",
        "advanced": "Từ các chữ số 1, 2, 3, 4, 5, 6, 7, có thể lập được bao nhiêu số tự nhiên có 4 chữ số khác nhau?\n→ Lời giải: Chọn 4 chữ số từ 7 chữ số và xếp thứ tự vào 4 vị trí: A_7^4 = 7 · 6 · 5 · 4 = 840 số.",
        "tip": "Dấu hiệu nhận biết Chỉnh hợp: Có chọn ra k phần tử VÀ CÓ PHÂN BIỆT THỨ TỰ (như chức vụ lớp trưởng/phó, chữ số hàng chục/đơn vị, giải nhất/nhì/ba).",
        "visual": "combinatorics"
      },
      {
        "eyebrow": "TỔ HỢP (C_n^k)",
        "title": "Tổ hợp chập k của n phần tử: Chỉ chọn nhóm, không phân biệt thứ tự",
        "body": "Cho tập hợp có n phần tử (0 ≤ k ≤ n). Một tổ hợp chập k của n phần tử là một tập hợp con gồm k phần tử lấy từ n phần tử đó (không phân biệt thứ tự sắp xếp). Số tổ hợp chập k của n phần tử là: C_n^k = n! / [k! · (n − k)!]. Tính chất đối xứng: C_n^k = C_n^(n−k).",
        "formula": "C_n^k = n! / (k!(n − k)!) = A_n^k / k!  ·  C_n^k = C_n^(n−k)",
        "example": "Một đội thanh niên tình nguyện có 10 người. Cần chọn một nhóm 3 người đi hỗ trợ điểm thi. Có bao nhiêu cách chọn?\n• Chọn 3 người không phân biệt chức vụ hay thứ tự.\n• Số cách chọn: C_10^3 = (10 · 9 · 8) / (3 · 2 · 1) = 720 / 6 = 120 cách.",
        "advanced": "Một hộp có 6 bi đỏ và 4 bi xanh. Có bao nhiêu cách chọn 4 viên bi sao cho có đúng 2 bi đỏ và 2 bi xanh?\n→ Lời giải: Công đoạn 1: Chọn 2 bi đỏ từ 6 bi đỏ: C_6^2 = 15 cách. Công đoạn 2: Chọn 2 bi xanh từ 4 bi xanh: C_4^2 = 6 cách. Theo quy tắc nhân: 15 · 6 = 90 cách.",
        "tip": "Tính chất đối xứng kỳ diệu: Chọn k người để đi làm thì cũng tương đương với việc chọn (n − k) người ở lại: C_n^k = C_n^(n−k). Ví dụ C_10^8 = C_10^2 = 45.",
        "visual": "combinatorics"
      },
      {
        "eyebrow": "PHÂN BIỆT BẢN CHẤT",
        "title": "Bảng so sánh cốt lõi: Khi nào dùng Chỉnh hợp, khi nào dùng Tổ hợp?",
        "body": "Sự khác biệt duy nhất giữa Chỉnh hợp và Tổ hợp nằm ở yếu tố: CÓ THỨ TỰ HAY KHÔNG. Chỉnh hợp: Chọn k phần tử và hoán đổi vị trí thì sinh ra phương án MỚI (chức vụ, số tự nhiên, xếp ghế). Tổ hợp: Chọn k phần tử nhưng hoán đổi vị trí thì phương án VẪN NHƯ CŨ (nhóm người, tập con, bàn tay bài, tam giác từ các đỉnh).",
        "formula": "Có phân biệt thứ tự → Dùng CHỈNH HỢP  |  Không phân biệt thứ tự → Dùng TỔ HỢP",
        "example": "Chọn 2 học sinh từ 30 học sinh:\n• Nếu chọn làm Lớp trưởng và Lớp phó ⇒ CHỈNH HỢP: A_30^2 = 870 cách.\n• Nếu chọn 2 bạn cùng đi quét sân ⇒ TỔ HỢP: C_30^2 = 435 cách (bằng đúng một nửa vì không phân biệt ai trước ai sau).",
        "advanced": "Cho 10 điểm phân biệt trên mặt phẳng không có 3 điểm nào thẳng hàng. Có thể tạo được bao nhiêu vectơ khác 0 và bao nhiêu đoạn thẳng từ 10 điểm đó?\n→ Lời giải: Vectơ có phân biệt điểm đầu và cuối ⇒ A_10^2 = 90 vectơ. Đoạn thẳng không phân biệt thứ tự hai đầu mút ⇒ C_10^2 = 45 đoạn thẳng.",
        "tip": "Câu thần chú phòng thi: Đổi chỗ 2 phần tử mà có tạo ra kết quả mới không? Có thì Chỉnh hợp (A), Không thì Tổ hợp (C)!",
        "visual": "combinatorics"
      },
      {
        "eyebrow": "TỔNG KẾT VÀ BẪY ĐỀ THI",
        "title": "Chiến thuật giải bài toán đếm: Phương pháp phần bù",
        "body": "Khi bài toán yêu cầu đếm số phương án thỏa mãn điều kiện phức tạp chứa các từ khóa 'có ít nhất một', 'không đồng thời': Phương pháp phần bù giúp giải quyết nhanh gấp 3 lần: Số cách thỏa mãn = Tổng số cách tùy ý − Số cách vi phạm điều kiện.",
        "formula": "Số cách cần tìm = Tổng số cách chọn tùy ý − Số cách phần bù",
        "example": "Một tổ có 6 nam và 4 nữ. Chọn ngẫu nhiên 3 người. Có bao nhiêu cách chọn sao cho có ít nhất một bạn nữ?\n• Tổng số cách chọn 3 người tùy ý từ 10 người: C_10^3 = 120 cách.\n• Phần bù (không có bạn nữ nào, tức chọn cả 3 bạn nam): C_6^3 = 20 cách.\n• Số cách có ít nhất một nữ: 120 − 20 = 100 cách.",
        "advanced": "Bấm máy Casio tính chỉnh hợp và tổ hợp: Phím nPr (Shift nhân) để tính Chỉnh hợp A_n^k; Phím nCr (Shift chia) để tính Tổ hợp C_n^k. Ví dụ bấm 10 Shift ÷ 3 = 120.",
        "tip": "Chiến thuật nhận diện: Cứ thấy cụm từ 'CÓ ÍT NHẤT MỘT' thì 90% nên nghĩ ngay đến phương pháp phần bù!",
        "visual": "combinatorics"
      }
    ]
  },
  {
    "id": "probability",
    "chapterId": "chuong-9",
    "chapterTitle": "Chương IX: Biến cố và định nghĩa cổ điển của xác suất",
    "lessonNumber": "Bài 14",
    "title": "Biến cố và tính xác suất cổ điển",
    "shortTitle": "Xác suất cổ điển",
    "description": "Phép thử, không gian mẫu, biến cố, công thức xác suất cổ điển và quy tắc biến cố đối.",
    "duration": "15 phút",
    "visual": "probability",
    "slides": [
      {
        "eyebrow": "PHÉP THỬ VÀ KHÔNG GIAN MẪU",
        "title": "Phép thử ngẫu nhiên và không gian mẫu (Ω)",
        "body": "Phép thử ngẫu nhiên là một thí nghiệm, hành động mà kết quả của nó không thể đoán trước được nhưng ta biết trước tập hợp tất cả các kết quả có thể xảy ra. Không gian mẫu (kí hiệu là Ω) là tập hợp tất cả các kết quả có thể xảy ra của phép thử. Số phần tử của không gian mẫu kí hiệu là n(Ω) hoặc |Ω|.",
        "formula": "Ω = Tập tất cả các kết quả có thể  ·  n(Ω) = Số phần tử của Ω",
        "example": "Phép thử gieo một con xúc xắc 6 mặt cân đối và đồng chất.\n• Các kết quả có thể xảy ra: xuất hiện mặt 1, 2, 3, 4, 5, 6 chấm.\n• Không gian mẫu: Ω = {1; 2; 3; 4; 5; 6}.\n• Số phần tử của không gian mẫu: n(Ω) = 6.",
        "advanced": "Gieo đồng thời hai con xúc xắc 6 mặt. Tính số phần tử của không gian mẫu n(Ω).\n→ Lời giải: Con xúc xắc thứ nhất có 6 khả năng, con xúc xắc thứ hai có 6 khả năng. Theo quy tắc nhân: n(Ω) = 6 · 6 = 36.",
        "tip": "Mỗi phần tử của không gian mẫu tương ứng với một kết quả sơ cấp duy nhất và không thể chia nhỏ hơn nữa.",
        "visual": "probability"
      },
      {
        "eyebrow": "KHÁI NIỆM BIẾN CỐ",
        "title": "Biến cố là tập con của không gian mẫu",
        "body": "Biến cố A liên quan đến phép thử là một tập hợp con của không gian mẫu (A ⊂ Ω). Biến cố xảy ra khi kết quả của phép thử là một phần tử thuộc A. Biến cố chắc chắn là chính không gian mẫu Ω (luôn xảy ra). Biến cố không thể là tập rỗng ∅ (không bao giờ xảy ra).",
        "formula": "A ⊂ Ω  ·  Biến cố chắc chắn: Ω  ·  Biến cố không thể: ∅",
        "example": "Gieo xúc xắc 6 mặt, xét biến cố A: “Xuất hiện mặt có số chấm là số chẵn”.\n• Các kết quả thuận lợi cho A: {2; 4; 6}.\n• Tập hợp A = {2; 4; 6} là một tập con của Ω = {1; 2; 3; 4; 5; 6}.\n• Số kết quả thuận lợi: n(A) = 3.",
        "advanced": "Gieo hai con xúc xắc, biến cố B: “Tổng số chấm xuất hiện bằng 7”. Liệt kê các kết quả thuận lợi.\n→ Lời giải: B = {(1; 6), (2; 5), (3; 4), (4; 3), (5; 2), (6; 1)}. Số kết quả thuận lợi là n(B) = 6.",
        "tip": "Kết quả thuận lợi cho A là những kết quả của phép thử làm cho biến cố A xảy ra.",
        "visual": "probability"
      },
      {
        "eyebrow": "ĐỊNH NGHĨA CỔ ĐIỂN CỦA XÁC SUẤT",
        "title": "Công thức xác suất cổ điển: Tỉ số kết quả thuận lợi trên tổng số kết quả",
        "body": "Giả sử các kết quả của phép thử có khả năng xảy ra như nhau (đồng khả năng). Xác suất của biến cố A, kí hiệu là P(A), bằng số kết quả thuận lợi cho A chia cho tổng số phần tử của không gian mẫu: P(A) = n(A) / n(Ω).",
        "formula": "P(A) = n(A) / n(Ω)  (với n(Ω) > 0)",
        "example": "Gieo một con xúc xắc cân đối. Tính xác suất xuất hiện mặt số lẻ.\n• Không gian mẫu: n(Ω) = 6.\n• Biến cố A: {1; 3; 5} ⇒ n(A) = 3.\n• Xác suất: P(A) = n(A) / n(Ω) = 3 / 6 = 1/2 = 0.5 (50%).",
        "advanced": "Một hộp chứa 5 viên bi đỏ và 3 viên bi xanh. Lấy ngẫu nhiên 2 viên bi. Tính xác suất để lấy được 2 viên bi đỏ.\n→ Lời giải: Số cách chọn 2 viên bi từ 8 viên: n(Ω) = C_8^2 = 28. Số cách chọn 2 viên bi đỏ từ 5 viên đỏ: n(A) = C_5^2 = 10. Xác suất: P(A) = 10 / 28 = 5/14 ≈ 0.357.",
        "tip": "Công thức cổ điển chỉ áp dụng được khi các kết quả sơ cấp có tính chất 'đồng khả năng' (như xúc xắc cân đối, bốc thăm ngẫu nhiên).",
        "visual": "probability"
      },
      {
        "eyebrow": "TÍNH CHẤT CỦA XÁC SUẤT",
        "title": "Các tính chất nền tảng của xác suất",
        "body": "Các tính chất chuẩn mực của xác suất: 1) Xác suất của một biến cố bất kỳ luôn nằm trong đoạn từ 0 đến 1: 0 ≤ P(A) ≤ 1. 2) Xác suất của biến cố chắc chắn luôn bằng 1: P(Ω) = 1. 3) Xác suất của biến cố không thể luôn bằng 0: P(∅) = 0.",
        "formula": "0 ≤ P(A) ≤ 1  ·  P(Ω) = 1  ·  P(∅) = 0",
        "example": "Gieo xúc xắc 6 mặt, tính xác suất biến cố 'Xuất hiện mặt 8 chấm'.\n• Không thể xuất hiện mặt 8 chấm vì xúc xắc chỉ có từ 1 đến 6 chấm.\n• Đây là biến cố không thể: P = 0.",
        "advanced": "Học sinh tính ra xác suất P(A) = 1.25 hoặc P(A) = −0.2. Kết quả này đúng hay sai?\n→ Lời giải: Chắc chắn SAI 100% vì xác suất của mọi biến cố bắt buộc phải thuộc đoạn [0; 1].",
        "tip": "Quy tắc tự kiểm tra: Tính xong xác suất nếu thấy kết quả nhỏ hơn 0 hoặc lớn hơn 1 thì lập tức rà soát lại phép tính!",
        "visual": "probability"
      },
      {
        "eyebrow": "BIẾN CỐ ĐỐI",
        "title": "Biến cố đối (Ā) và định lý tổng xác suất bằng 1",
        "body": "Biến cố đối của A, kí hiệu là Ā (hoặc ¬A), là biến cố 'A không xảy ra'. Tập hợp Ā gồm tất cả các kết quả của không gian mẫu không thuộc A: Ā = Ω \\ A. Vì A và Ā xung khắc và A ∪ Ā = Ω, tổng xác suất luôn bằng 1: P(A) + P(Ā) = 1. Suy ra: P(A) = 1 − P(Ā).",
        "formula": "P(Ā) = 1 − P(A)  ⇔  P(A) = 1 − P(Ā)",
        "example": "Xác suất bắn trúng mục tiêu của một vận động viên là 0.85. Tính xác suất bắn trượt.\n• Biến cố trượt là biến cố đối của biến cố trúng: P(trượt) = 1 − P(trúng) = 1 − 0.85 = 0.15 (15%).",
        "advanced": "Gieo một đồng xu 3 lần. Tính xác suất để có ít nhất một lần xuất hiện mặt ngửa.\n• Không gian mẫu: n(Ω) = 2³ = 8.\n• Biến cố đối Ā: 'Không có lần nào xuất hiện mặt ngửa' (tức cả 3 lần đều sấp: {SSS}) ⇒ n(Ā) = 1.\n• P(Ā) = 1/8.\n• Xác suất cần tìm: P(A) = 1 − P(Ā) = 1 − 1/8 = 7/8.",
        "tip": "Khẩu quyết vàng: Cứ thấy cụm từ 'CÓ ÍT NHẤT MỘT' thì 90% trường hợp tính qua biến cố đối P(A) = 1 − P(Ā) sẽ nhanh và tránh sót trường hợp!",
        "visual": "probability"
      },
      {
        "eyebrow": "KỸ THUẬT DÙNG TỔ HỢP TÍNH XÁC SUẤT",
        "title": "Bài toán bốc bi, chọn người kết hợp đại số tổ hợp",
        "body": "Trong hầu hết các bài toán xác suất lớp 10, ta dùng tổ hợp C_n^k để tính số phần tử: n(Ω) là số cách chọn k đối tượng từ tổng thể n đối tượng tùy ý. n(A) là số cách chọn k đối tượng thỏa mãn điều kiện bài toán (phối hợp quy tắc nhân và quy tắc cộng).",
        "formula": "P(A) = [ C_n1^k1 · C_n2^k2 ] / C_n^k",
        "example": "Một hộp có 4 bi đỏ và 6 bi xanh. Lấy ngẫu nhiên 3 viên bi. Tính xác suất để lấy được 1 bi đỏ và 2 bi xanh.\n• Số cách lấy 3 viên bi từ 10 viên: n(Ω) = C_10^3 = 120.\n• Số cách lấy 1 bi đỏ và 2 bi xanh: n(A) = C_4^1 · C_6^2 = 4 · 15 = 60.\n• Xác suất: P(A) = 60 / 120 = 1/2 = 0.5.",
        "advanced": "Cũng với hộp trên, tính xác suất lấy được 3 viên bi cùng màu.\n→ Lời giải: Biến cố 'cùng màu' gồm 2 trường hợp: 3 bi đỏ hoặc 3 bi xanh. n(B) = C_4^3 + C_6^3 = 4 + 20 = 24. P(B) = 24 / 120 = 1/5 = 0.2.",
        "tip": "Cùng màu nghĩa là hoặc toàn đỏ HOẶC toàn xanh nên ta dùng quy tắc CỘNG giữa hai trường hợp.",
        "visual": "probability"
      },
      {
        "eyebrow": "ỨNG DỤNG THỰC TẾ",
        "title": "Xác suất trong đời sống: Kiểm tra chất lượng và bảo hiểm",
        "body": "Xác suất là công cụ toán học tối quan trọng trong việc đánh giá rủi ro, kiểm định chất lượng sản phẩm (KCS) trong nhà máy, tính toán phí bảo hiểm và dự báo thị trường. Biết xác suất lỗi của linh kiện giúp công ty tối ưu hóa chi phí bảo hành và nâng cao uy tín.",
        "formula": "Tỉ lệ lỗi thực tế = Số sản phẩm lỗi / Tổng số sản phẩm kiểm tra",
        "example": "Một lô hàng có 100 sản phẩm, trong đó có 5 sản phẩm lỗi. Kiểm tra ngẫu nhiên 1 sản phẩm. Xác suất sản phẩm đạt chuẩn là bao nhiêu?\n• Số sản phẩm đạt chuẩn: 100 − 5 = 95.\n• Xác suất đạt chuẩn: P = 95 / 100 = 0.95 (95%).",
        "advanced": "Nếu kiểm tra ngẫu nhiên 2 sản phẩm trong lô hàng trên, tính xác suất để cả 2 sản phẩm đều đạt chuẩn.\n→ Lời giải: n(Ω) = C_100^2 = 4950. n(A) = C_95^2 = 4465. P(A) = 4465 / 4950 ≈ 0.902 (90.2%).",
        "tip": "Mối liên hệ: Xác suất lý thuyết giúp dự đoán tần suất xuất hiện của sự kiện khi số lần lặp lại phép thử đủ lớn.",
        "visual": "probability"
      },
      {
        "eyebrow": "QUY TRÌNH 4 BƯỚC",
        "title": "Quy trình 4 bước giải quyết mọi bài toán xác suất trong phòng thi",
        "body": "Quy trình chuẩn 4 bước giải bài toán xác suất: Bước 1: Mô tả phép thử và tính n(Ω) (dùng C_n^k hoặc quy tắc nhân). Bước 2: Gọi tên biến cố A và xác định rõ điều kiện. Bước 3: Đếm số kết quả thuận lợi n(A) (trực tiếp hoặc qua biến cố đối Ā). Bước 4: Lập tỉ số P(A) = n(A) / n(Ω), rút gọn phân số và đối chiếu 0 ≤ P ≤ 1.",
        "formula": "Bước 1: n(Ω)  →  Bước 2: Gọi A  →  Bước 3: n(A) hoặc n(Ā)  →  Bước 4: P(A) = n(A)/n(Ω)",
        "example": "Rút ngẫu nhiên một quân bài từ bộ bài tú lơ khơ 52 quân. Tính xác suất rút được quân Át (A).\n• Bước 1: n(Ω) = 52.\n• Bước 2: Biến cố A: 'Rút được quân Át'.\n• Bước 3: Trong bộ bài có 4 quân Át (cơ, rô, tép, bích) ⇒ n(A) = 4.\n• Bước 4: P(A) = 4 / 52 = 1/13 ≈ 0.077.",
        "advanced": "Một tổ gồm 7 nam và 5 nữ. Chọn ngẫu nhiên 4 người. Tính xác suất sao cho có ít nhất 2 nữ.\n→ Lời giải: n(Ω) = C_12^4 = 495. TH1 (2 nữ, 2 nam): C_5^2 · C_7^2 = 10 · 21 = 210. TH2 (3 nữ, 1 nam): C_5^3 · C_7^1 = 10 · 7 = 70. TH3 (4 nữ, 0 nam): C_5^4 · C_7^0 = 5 · 1 = 5. n(A) = 210 + 70 + 5 = 285. P(A) = 285 / 495 = 19/33 ≈ 0.576.",
        "tip": "Chiến thuật phòng thi: Luôn viết phân số tối giản trước khi so khớp với các đáp án trắc nghiệm.",
        "visual": "probability"
      }
    ]
  }
];
