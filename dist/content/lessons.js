export const lessons = [
  {
    "id": "propositions",
    "chapterId": "chuong-1",
    "chapterTitle": "Chương I: Mệnh đề và tập hợp",
    "lessonNumber": "Bài 1",
    "title": "Mệnh đề toán học",
    "shortTitle": "Mệnh đề toán học",
    "description": "Khái niệm mệnh đề, mệnh đề phủ định, mệnh đề kéo theo và các kí hiệu với mọi, tồn tại.",
    "duration": "9 phút",
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
        "advanced": "Cho định lý: “Nếu số tự nhiên n có chữ số tận cùng là 0 thì n chia hết cho 5”. Mệnh đề đảo có đúng không?\n→ Lời giải: Mệnh đề đảo là: “Nếu số tự nhiên n chia hết cho 5 thì n có chữ số tận cùng là 0”. Mệnh đề đảo SAI vì phản ví dụ n = 15 chia hết cho 5 nhưng tận cùng là 5.",
        "tip": "Không suy diễn đảo tự động: Định lý thuận đúng KHÔNG ĐỒNG NGHĨA mệnh đề đảo đúng. Luôn phải kiểm tra tính đúng của mệnh đề đảo bằng một bài toán độc lập.",
        "visual": "logic"
      },
      {
        "eyebrow": "ĐIỀU KIỆN CẦN VÀ ĐỦ",
        "title": "Phân biệt điều kiện cần, điều kiện đủ và tương đương",
        "body": "Trong định lý P ⇒ Q: P là điều kiện đủ để có Q (có P là chắc chắn bảo đảm có Q); Q là điều kiện cần để có P (muốn có P thì bắt buộc phải có Q). Khi cả P ⇒ Q và Q ⇒ P đều đúng, ta có P ⇔ Q (P là điều kiện cần và đủ để có Q, hoặc P khi và chỉ khi Q).",
        "formula": "P ⇒ Q: P là ĐIỀU KIỆN ĐỦ, Q là ĐIỀU KIỆN CẦN  ·  P ⇔ Q: ĐIỀU KIỆN CẦN VÀ ĐỦ",
        "example": "Xét hai mệnh đề: P: “x > 3” và Q: “x > 1” với x ∈ ℝ.\n• Bước 1: Chiều P ⇒ Q: Nếu x > 3 thì chắc chắn x > 1 (ĐÚNG) ⇒ “x > 3” là điều kiện ĐỦ để “x > 1”.\n• Bước 2: Chiều Q ⇒ P: Nếu x > 1 thì x > 3 (SAI, phản ví dụ x = 2).\n• Bước 3: Kết luận: “x > 1” là điều kiện CẦN để “x > 3”, nhưng không phải điều kiện đủ.",
        "advanced": "Cho tứ giác ABCD. Xét P: “ABCD có hai đường chéo bằng nhau và cắt nhau tại trung điểm mỗi đường”, Q: “ABCD là hình chữ nhật”. Chứng minh P ⇔ Q.\n→ Lời giải: Cắt nhau tại trung điểm ⇔ hình bình hành; hình bình hành có hai đường chéo bằng nhau ⇔ hình chữ nhật. Do đó cả hai chiều P ⇒ Q và Q ⇒ P đều đúng, P là điều kiện cần và đủ của Q.",
        "tip": "Mẹo ghi nhớ: “Đủ đứng trước (giả thiết P), Cần đứng sau (kết luận Q)”. Giả thiết đủ để suy ra kết luận; kết luận là điều kiện cần của giả thiết.",
        "visual": "logic"
      },
      {
        "eyebrow": "LƯỢNG TỪ TOÁN HỌC",
        "title": "Kí hiệu lượng từ ∀ và ∃ cùng quy tắc phủ định",
        "body": "Kí hiệu ∀ đọc là “với mọi” (đúng cho mọi phần tử trong tập hợp). Kí hiệu ∃ đọc là “tồn tại” (có ít nhất một phần tử thỏa mãn). Khi phủ định mệnh đề chứa lượng từ, ta đổi lượng từ: ∀ ↔ ∃ và phủ định vị từ khẳng định P(x).",
        "formula": "¬(∀x ∈ X, P(x)) ⇔ ∃x ∈ X, ¬P(x)  ·  ¬(∃x ∈ X, P(x)) ⇔ ∀x ∈ X, ¬P(x)",
        "example": "Lập phủ định và xét tính đúng sai của P: “∀x ∈ ℝ, x² − 2x + 2 > 0”.\n• Bước 1: Đổi lượng từ “∀x ∈ ℝ” thành “∃x ∈ ℝ”.\n• Bước 2: Phủ định vị từ “> 0” thành “≤ 0”. Ta được ¬P: “∃x ∈ ℝ, x² − 2x + 2 ≤ 0”.\n• Bước 3: Xét tính đúng sai: x² − 2x + 2 = (x − 1)² + 1 ≥ 1 > 0 ∀x ∈ ℝ. Vậy P ĐÚNG, còn ¬P SAI.",
        "advanced": "Xét mệnh đề P: “∀x ∈ ℝ, ∃y ∈ ℝ: x + y = 0” và Q: “∃y ∈ ℝ, ∀x ∈ ℝ: x + y = 0”.\n→ Lời giải: P đúng vì với mỗi x bất kỳ luôn chọn được số đối y = −x. Q sai vì không có số y cố định duy nhất nào cộng với mọi x đều bằng 0. Thứ tự lượng từ quyết định bản chất bài toán!",
        "tip": "Bẫy phủ định: Đừng quên phủ định dấu so sánh: Phủ định của “>” là “≤” (phải có dấu bằng); phủ định của “=” là “≠”.",
        "visual": "logic"
      },
      {
        "eyebrow": "PHƯƠNG PHÁP CHỨNG MINH",
        "title": "Phương pháp phản ví dụ và chứng minh phản chứng",
        "body": "Để bác bỏ mệnh đề “∀x ∈ X, P(x)” (chứng minh nó SAI), ta chỉ cần chỉ ra MỘT phản ví dụ x0 sao cho P(x0) sai. Để chứng minh định lý P ⇒ Q bằng phản chứng: Giả sử kết luận Q sai (tức ¬Q đúng), từ đó kết hợp giả thiết suy ra điều mâu thuẫn. Do đó kết luận Q buộc phải đúng.",
        "formula": "Bác bỏ ∀: Chỉ cần 1 phản ví dụ  ·  Phản chứng: Giả sử ¬Q → suy ra mâu thuẫn → Q đúng",
        "example": "Bác bỏ mệnh đề: “∀n ∈ ℕ*, n² + n + 1 là số nguyên tố”.\n• Bước 1: Thử n = 1: 1 + 1 + 1 = 3 (nguyên tố). Thử n = 2: 7 (nguyên tố). Thử n = 3: 13 (nguyên tố).\n• Bước 2: Thử n = 4: 4² + 4 + 1 = 21.\n• Bước 3: Nhận xét 21 = 3 × 7 (hợp số), vậy n = 4 là PHẢN VÍ DỤ. Mệnh đề trên là SAI.",
        "advanced": "Chứng minh định lý: “Nếu n² là số chẵn (với n ∈ ℤ) thì n là số chẵn” bằng phản chứng.\n→ Lời giải: Giả sử ngược lại n là số lẻ ⇒ n = 2k + 1 (k ∈ ℤ) ⇒ n² = (2k + 1)² = 4k² + 4k + 1 = 2(2k² + 2k) + 1 là số lẻ. Điều này mâu thuẫn với giả thiết n² chẵn. Vậy n bắt buộc phải là số chẵn.",
        "tip": "Mẹo phản chứng: Khi gặp bài toán có dạng 'ít nhất một', 'vô số', 'không tồn tại' hoặc bài toán số học chia hết, phương pháp phản chứng thường là công cụ hiệu quả nhất.",
        "visual": "logic"
      },
      {
        "eyebrow": "BẪY TƯ DUY & NÂNG CAO",
        "title": "Các lỗi thường gặp và phương pháp xử lý bài khó",
        "body": "Các bẫy tư duy phân loại học sinh: 1) Nhầm giữa mệnh đề chứa biến và mệnh đề toán học. 2) Quên đổi lượng từ hoặc quên lấy dấu '=' khi phủ định bất đẳng thức. 3) Ngộ nhận mệnh đề đảo luôn đúng. 4) Nhầm lẫn chiều suy luận giữa điều kiện cần và điều kiện đủ.",
        "formula": "Tự kiểm tra: 1. Đã đổi ∀ ↔ ∃ chưa?  2. Đã phủ định dấu (> thành ≤)?  3. Chiều suy luận đúng chưa?",
        "example": "Phát hiện và sửa lỗi bài thi:\nĐề bài: “Lập phủ định của mệnh đề: Mọi tam giác đều có 3 góc bằng nhau”.\nHọc sinh giải: “Mọi tam giác đều không có 3 góc bằng nhau”.\n• Lỗi sai: Giữ nguyên lượng từ 'Mọi' và thêm từ 'không'.\n• Lời giải chuẩn: Đổi 'Mọi' thành 'Có ít nhất một' và phủ định vị từ: “Có ít nhất một tam giác không có 3 góc bằng nhau”.",
        "advanced": "Cho hàm số y = f(x). Xét mệnh đề: “Nếu f(x) đồng biến trên (a; b) thì ∀x1, x2 ∈ (a; b), x1 < x2 ⇒ f(x1) < f(x2)”. Mệnh đề đảo có đúng không?\n→ Lời giải: Mệnh đề đảo là: “Nếu ∀x1, x2 ∈ (a; b), x1 < x2 ⇒ f(x1) < f(x2) thì f(x) đồng biến trên (a; b)”. Mệnh đề đảo ĐÚNG vì đây chính là định nghĩa tương đương hai chiều của hàm số đồng biến.",
        "tip": "Quy tắc an toàn: Trước khi chọn đáp án bài mệnh đề, hãy viết nháp tách bạch 2 vế P và Q, vẽ chiều mũi tên suy luận để không bị bẫy đề thi lừa.",
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
    "duration": "10 phút",
    "slides": [
      {
        "eyebrow": "KHÁI NIỆM NỀN TẢNG",
        "title": "Tập con và quan hệ bao hàm",
        "body": "Tập hợp A là tập con của B (A ⊂ B) nếu mọi phần tử của A đều thuộc B. Hai tập hợp bằng nhau khi A ⊂ B và B ⊂ A. Tập rỗng ∅ là tập con của mọi tập hợp.",
        "formula": "A ⊂ B ⇔ (∀x, x ∈ A ⇒ x ∈ B)",
        "tip": "Tập số tự nhiên ℕ là tập con của ℤ, ℤ ⊂ ℚ, và ℚ ⊂ ℝ.",
        "visual": "venn",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: A ⊂ B ⇔ (∀x, x ∈ A ⇒ x ∈ B).\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "GIAO VÀ HỢP",
        "title": "Lấy phần chung hay gộp tất cả",
        "body": "Giao của A và B (A ∩ B) gồm các phần tử vừa thuộc A vừa thuộc B. Hợp của A và B (A ∪ B) gồm các phần tử thuộc A hoặc thuộc B.",
        "formula": "x ∈ A ∩ B ⇔ (x ∈ A và x ∈ B)  ·  x ∈ A ∪ B ⇔ (x ∈ A hoặc x ∈ B)",
        "tip": "Giao là “và” (phần chung), Hợp là “hoặc” (lấy tất cả không lặp lại).",
        "visual": "venn",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: x ∈ A ∩ B ⇔ (x ∈ A và x ∈ B)  ·  x ∈ A ∪ B ⇔ (x ∈ A hoặc x ∈ B).\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "HIỆU VÀ PHẦN BÙ",
        "title": "Bỏ đi những gì thuộc về phần tử khác",
        "body": "Hiệu A \\ B gồm các phần tử thuộc A nhưng không thuộc B. Khi A là tập con của tập vũ trụ E, hiệu E \\ A được gọi là phần bù của A trong E (C_E A).",
        "formula": "A \\ B = { x | x ∈ A và x ∉ B }",
        "tip": "Nếu A = {1; 2; 3; 4} và B = {3; 4; 5}, thì A \\ B = {1; 2}.",
        "visual": "venn",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: A \\ B = { x | x ∈ A và x ∉ B }.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "TẬP CON CỦA SỐ THỰC",
        "title": "Khoảng, đoạn và nửa khoảng",
        "body": "Đoạn [a; b] lấy cả hai đầu mút a và b. Khoảng (a; b) không lấy hai đầu mút. Nửa khoảng [a; b) lấy a nhưng không lấy b. Nửa khoảng (-∞; a] gồm các số thực ≤ a.",
        "formula": "[a; b] = { x ∈ ℝ | a ≤ x ≤ b }  ·  (a; b) = { x ∈ ℝ | a < x < b }",
        "tip": "Ngoặc vuông [ ] là lấy dấu “=”, ngoặc tròn ( ) là dấu ngặt “<” hoặc “>”.",
        "visual": "venn",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: [a; b] = { x ∈ ℝ | a ≤ x ≤ b }  ·  (a; b) = { x ∈ ℝ | a < x < b }.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "BIỂU DIỄN TRÊN TRỤC SỐ",
        "title": "Kỹ năng xác định giao và hợp",
        "body": "Vẽ trục số, đánh dấu các điểm mút theo thứ tự tăng dần từ trái sang phải. Dùng thao tác gạch bỏ vùng không thuộc tập hợp để tìm kết quả của phép giao, hợp hoặc hiệu.",
        "formula": "Vẽ trục → Đánh dấu mút → Xác định ngoặc [ ] hay ( ) → Đọc kết quả",
        "tip": "Ví dụ: (-2; 3) ∩ [1; 5] = [1; 3). Chú ý mút 1 có dấu ngoặc vuông và mút 3 có dấu ngoặc tròn.",
        "visual": "venn",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: Vẽ trục → Đánh dấu mút → Xác định ngoặc [ ] hay ( ) → Đọc kết quả.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "BÀI TOÁN THAM SỐ",
        "title": "Tìm điều kiện tham số m để các tập hợp giao nhau",
        "body": "Bài toán tìm tham số m để A giao B bằng rỗng hoặc A là tập con của B là dạng toán phân loại học sinh lớp 10. Phương pháp: Xác định các đầu mút theo m, vẽ sơ đồ trục số, thiết lập hệ bất đẳng thức tương ứng và kiểm tra kỹ điều kiện dấu bằng tại các đầu mút ngoặc vuông hay ngoặc tròn.",
        "formula": "A ∩ B = ∅ ⇔ mút phải của A ≤ mút trái của B (hoặc ngược lại) · A ⊂ B ⇔ b1 ≤ a1 và a2 ≤ b2",
        "example": "Cho A = [m; m + 2] và B = [1; 3]. Tìm m để A ∩ B = ∅.\n• Bước 1: Để A và B không có điểm chung, A nằm hẳn bên trái hoặc bên phải B.\n• Bước 2: TH1: m + 2 < 1 ⇔ m < −1.\n• Bước 3: TH2: m > 3.\n• Kết luận: m < −1 hoặc m > 3.",
        "advanced": "Cho A = (1; m] và B = [0; 5]. Tìm m để A là tập con của B.\n→ Lời giải: Để A khác rỗng thì m > 1. Để A nằm gọn trong B thì m ≤ 5. Vậy 1 < m ≤ 5.",
        "tip": "Lưu ý dấu bằng: Nếu một tập có mút là ngoặc tròn (a) và tập kia là ngoặc vuông [a] thì tại điểm a chúng không có phần tử chung.",
        "visual": "venn"
      },
      {
        "eyebrow": "BẪY TƯ DUY VÀ LỖI SAI",
        "title": "Các lỗi thường gặp khi thực hiện phép toán tập hợp",
        "body": "Các lỗi hay gặp trong bài kiểm tra: 1) Nhầm giữa ngoặc vuông (lấy mút) và ngoặc tròn (bỏ mút). 2) Lấy hiệu A trừ B lại ghi nhầm phần tử của B. 3) Quên tập con rỗng khi đếm số tập con. 4) Sắp xếp sai thứ tự các số âm trên trục số.",
        "formula": "Tự kiểm tra: 1. Đã xếp mút tăng dần chưa? · 2. Ngoặc vuông lấy dấu bằng, ngoặc tròn dấu ngặt?",
        "example": "Tìm A hiệu B với A = [−2; 4] và B = (0; 5).\n• Bước 1: Vẽ trục số, biểu diễn A và B.\n• Bước 2: Bỏ phần thuộc B khỏi A, vùng còn lại từ −2 đến 0.\n• Bước 3: Điểm 0 không thuộc B nên điểm 0 vẫn thuộc A hiệu B.\n• Kết quả: A \\ B = [−2; 0] (đầu mút 0 là ngoặc vuông!).",
        "advanced": "Cho tập E có 10 phần tử, tập A có 6 phần tử, tập B có 5 phần tử. Số phần tử nhỏ nhất và lớn nhất của A giao B là bao nhiêu?\n→ Lời giải: Số phần tử lớn nhất là min(6, 5) = 5. Số phần tử nhỏ nhất là 6 + 5 − 10 = 1 phần tử. Vậy số phần tử thuộc đoạn [1; 5].",
        "tip": "Quy tắc khi lấy hiệu: Bỏ tập nào thì đầu mút của tập đó bị đảo dạng ngoặc (tròn thành vuông, vuông thành tròn).",
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
    "duration": "8 phút",
    "slides": [
      {
        "eyebrow": "DẠNG CHUẨN",
        "title": "Bất phương trình chứa hai ẩn bậc một",
        "body": "Bất phương trình bậc nhất hai ẩn x và y có dạng tổng quát ax + by + c < 0 (hoặc ≤, >, ≥), trong đó a và b không đồng thời bằng 0. Mỗi cặp số (x0; y0) thỏa mãn là một nghiệm.",
        "formula": "ax + by + c ≤ 0  (a² + b² ≠ 0)",
        "tip": "Khác với phương trình có nghiệm là một điểm, bpt bậc nhất hai ẩn có vô số nghiệm tạo thành một miền.",
        "visual": "halfplane",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: ax + by + c ≤ 0  (a² + b² ≠ 0).\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "HÌNH HỌC TRỰC QUAN",
        "title": "Đường thẳng chia đôi mặt phẳng",
        "body": "Đường thẳng d: ax + by + c = 0 chia mặt phẳng Oxy thành hai nửa mặt phẳng đối nhau. Một nửa gồm các điểm thỏa mãn ax + by + c > 0, nửa kia thỏa mãn ax + by + c < 0.",
        "formula": "Bờ d: ax + by + c = 0",
        "tip": "Đường thẳng d chính là ranh giới (bờ) của miền nghiệm.",
        "visual": "halfplane",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: Bờ d: ax + by + c = 0.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "CHỌN ĐIỂM THỬ",
        "title": "Gốc tọa độ O(0; 0) là chìa khóa",
        "body": "Nếu đường thẳng d không đi qua gốc tọa độ O(0; 0) (tức c ≠ 0), ta thay tọa độ (0; 0) vào biểu thức ax + by + c. Nếu được mệnh đề đúng thì miền nghiệm chứa điểm O.",
        "formula": "Thử O(0; 0): tính giá trị a(0) + b(0) + c = c",
        "tip": "Nếu đường thẳng đi qua gốc tọa độ O (c = 0), hãy chọn một điểm khác trên trục tọa độ như (1; 0) hoặc (0; 1) để thử.",
        "visual": "halfplane",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: Thử O(0; 0): tính giá trị a(0) + b(0) + c = c.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "CÓ LẤY ĐƯỜNG BỜ HAY KHÔNG?",
        "title": "Phân biệt dấu ngặt và không ngặt",
        "body": "Với bất phương trình có dấu ≤ hoặc ≥, miền nghiệm chứa cả các điểm nằm trên đường thẳng bờ d (vẽ nét liền). Với dấu < hoặc >, miền nghiệm không chứa bờ d (vẽ nét đứt).",
        "formula": "≤ hoặc ≥ : nét liền (kể cả bờ)  ·  < hoặc > : nét đứt (không kể bờ)",
        "tip": "Quên ghi chú bờ là lỗi học sinh thường mắc nhất khi trình bày bài thi tự luận.",
        "visual": "halfplane",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: ≤ hoặc ≥ : nét liền (kể cả bờ)  ·  < hoặc > : nét đứt (không kể bờ).\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "BA BƯỚC BIỂU DIỄN",
        "title": "Quy trình vẽ miền nghiệm chuẩn",
        "body": "Bước 1: Vẽ đường thẳng d: ax + by + c = 0 qua hai điểm cắt trục. Bước 2: Thử điểm O(0; 0). Bước 3: Gạch bỏ nửa mặt phẳng không chứa nghiệm và kết luận.",
        "formula": "Vẽ đường bờ → Thử điểm O → Gạch bỏ nửa không lấy → Kết luận",
        "tip": "Ví dụ: với 2x + y - 4 ≤ 0, thay (0; 0) ta có -4 ≤ 0 (đúng), nên miền nghiệm chứa điểm O(0; 0).",
        "visual": "halfplane",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: Vẽ đường bờ → Thử điểm O → Gạch bỏ nửa không lấy → Kết luận.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "ỨNG DỤNG THỰC TẾ",
        "title": "Mô hình hóa bài toán đời sống bằng bất phương trình",
        "body": "Nhiều bài toán kinh tế, sản xuất, tiêu dùng được chuyển hóa về bất phương trình bậc nhất hai ẩn. Quy trình gồm: Gọi ẩn x, y kèm điều kiện và đơn vị, lập biểu thức biểu diễn các ràng buộc về tài chính hay vật liệu, và xác định miền nghiệm trên mặt phẳng tọa độ.",
        "formula": "Chi phí A · x + Chi phí B · y ≤ Ngân sách tối đa",
        "example": "Bác An dùng tối đa 10 triệu đồng mua hai loại phân bón giá 200 nghìn và 250 nghìn một bao. Gọi x, y là số bao mỗi loại.\n• Thiết lập BPT: 200x + 250y ≤ 10000 ⇔ 4x + 5y ≤ 200 (với x, y là số tự nhiên).\n• Miền nghiệm biểu diễn các phương án mua hàng khả thi.",
        "advanced": "Một xưởng sản xuất hai loại sản phẩm A và B. Mỗi sản phẩm A cần 2 giờ máy, sản phẩm B cần 3 giờ máy. Tổng thời gian máy không quá 30 giờ một tuần.\n→ Lời giải: Bất phương trình là 2x + 3y ≤ 30 với x ≥ 0, y ≥ 0.",
        "tip": "Đừng quên điều kiện tự nhiên của bài toán thực tế: số lượng sản phẩm x, y phải luôn không âm và thường là số nguyên.",
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
    "duration": "10 phút",
    "slides": [
      {
        "eyebrow": "KHÁI NIỆM HỆ",
        "title": "Nghiệm chung của nhiều điều kiện",
        "body": "Hệ bất phương trình bậc nhất hai ẩn gồm hai hay nhiều bất phương trình bậc nhất hai ẩn. Miền nghiệm của hệ là phần giao nhau của các miền nghiệm của từng bất phương trình.",
        "formula": "(x0; y0) là nghiệm của hệ ⇔ thỏa mãn đồng thời tất cả các BPT",
        "tip": "Thường gặp hệ có điều kiện thực tế x ≥ 0 và y ≥ 0, giới hạn nghiệm trong góc phần tư thứ nhất.",
        "visual": "halfplane",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: (x0; y0) là nghiệm của hệ ⇔ thỏa mãn đồng thời tất cả các BPT.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "MIỀN NGHIỆM ĐA GIÁC",
        "title": "Hình dáng miền nghiệm lồi",
        "body": "Trên mặt phẳng tọa độ, miền nghiệm của một hệ thường là một miền đa giác (tam giác, tứ giác) lồi hoặc một miền không bị chặn, bao gồm cả các cạnh hoặc đỉnh của nó.",
        "formula": "Miền nghiệm = Giao các nửa mặt phẳng",
        "tip": "Lần lượt vẽ từng đường thẳng biên và gạch bỏ các phần không thỏa mãn.",
        "visual": "halfplane",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: Miền nghiệm = Giao các nửa mặt phẳng.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "TỌA ĐỘ ĐỈNH",
        "title": "Tìm các giao điểm quan trọng",
        "body": "Các đỉnh của miền đa giác nghiệm là giao điểm của từng cặp đường thẳng bờ tương ứng. Giải hệ hai phương trình bậc nhất để tìm tọa độ chính xác của các đỉnh này.",
        "formula": "Giải hệ 2 PT đường biên ⇒ Tọa độ đỉnh (x; y)",
        "tip": "Kiểm tra lại xem tọa độ đỉnh tìm được có thỏa mãn các bất phương trình còn lại trong hệ hay không.",
        "visual": "halfplane",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: Giải hệ 2 PT đường biên ⇒ Tọa độ đỉnh (x; y).\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "BÀI TOÁN TỐI ƯU",
        "title": "Định lý giá trị lớn nhất và nhỏ nhất",
        "body": "Nếu miền nghiệm là một đa giác lồi kín, bị chặn và khác rỗng, biểu thức F(x; y) = ax + by đạt giá trị lớn nhất và nhỏ nhất tại các đỉnh của miền đó. Với miền không bị chặn hoặc không chứa biên, cần kiểm tra sự tồn tại của cực trị trước.",
        "formula": "Miền đa giác lồi kín, bị chặn, khác rỗng → Tính F tại các đỉnh để tìm max/min",
        "tip": "Chỉ cần tính giá trị của F(x; y) tại từng đỉnh, sau đó so sánh các kết quả để chọn giá trị lớn nhất và nhỏ nhất.",
        "visual": "halfplane",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: Miền đa giác lồi kín, bị chặn, khác rỗng → Tính F tại các đỉnh để tìm max/min.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "ỨNG DỤNG THỰC TẾ",
        "title": "Quy hoạch sản xuất và chi phí",
        "body": "Đặt ẩn x, y theo yêu cầu bài toán. Lập hệ bất phương trình ràng buộc về nguyên liệu, thời gian, vốn. Biểu diễn miền nghiệm, tìm đỉnh và tính hàm mục tiêu F(x; y).",
        "formula": "Đặt ẩn → Lập hệ ràng buộc → Xác định đỉnh miền nghiệm → So sánh F(x; y)",
        "tip": "Đừng quên các điều kiện tự nhiên x ≥ 0, y ≥ 0 và điều kiện nguyên nếu x, y là số sản phẩm.",
        "visual": "halfplane",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: Đặt ẩn → Lập hệ ràng buộc → Xác định đỉnh miền nghiệm → So sánh F(x; y).\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "BÀI TOÁN TỐI ƯU HÓA",
        "title": "Tìm giá trị lớn nhất và nhỏ nhất của biểu thức F",
        "body": "Định lý then chốt của quy hoạch tuyến tính: Biểu thức F(x, y) = ax + by trên một miền đa giác lồi luôn đạt giá trị lớn nhất và giá trị nhỏ nhất tại ít nhất một trong các ĐỈNH của đa giác đó. Do đó chỉ cần tính giá trị tại các đỉnh rồi so sánh.",
        "formula": "Max hoặc Min F(x, y) trên đa giác đạt tại ít nhất một ĐỈNH",
        "example": "Tìm giá trị lớn nhất của F(x, y) = 3x + 2y trên miền tam giác có các đỉnh O(0; 0), A(4; 0), B(0; 3).\n• Tính F(O) = 0.\n• Tính F(A) = 3(4) + 2(0) = 12.\n• Tính F(B) = 3(0) + 2(3) = 6.\n• Kết luận: GTLN của F là 12 đạt tại đỉnh A(4; 0).",
        "advanced": "Biểu thức F(x, y) = 2x + 5y trên tứ giác đỉnh O(0; 0), A(3; 0), B(2; 2), C(0; 3) đạt GTNN và GTLN bằng bao nhiêu?\n→ Lời giải: F(O)=0; F(A)=6; F(B)=14; F(C)=15. GTNN là 0 tại O, GTLN là 15 tại C.",
        "tip": "Không cần thử các điểm bên trong miền nghiệm, chỉ cần giải hệ phương trình tìm tọa độ các đỉnh rồi so sánh giá trị F.",
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
    "description": "Từ đường tròn đơn vị đến mối liên hệ giữa sin và cos.",
    "duration": "8 phút",
    "slides": [
      {
        "eyebrow": "BẮT ĐẦU TỪ HÌNH VẼ",
        "title": "Một điểm, hai giá trị",
        "body": "Trên nửa đường tròn đơn vị, lấy điểm M ứng với góc α từ 0° đến 180°. Hoành độ của M là cos α, tung độ của M là sin α.",
        "formula": "M(cos α; sin α)",
        "tip": "Nhìn theo chiều ngang để tìm cos, theo chiều dọc để tìm sin.",
        "visual": "circle",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: M(cos α; sin α).\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "CÔNG THỨC NỀN TẢNG",
        "title": "Sin và cos luôn liên hệ với nhau",
        "body": "Vì M nằm trên đường tròn bán kính 1, tổng bình phương hai tọa độ bằng 1. Biết một giá trị, em có thể tìm bình phương của giá trị còn lại.",
        "formula": "sin²α + cos²α = 1",
        "tip": "Công thức cho bình phương. Đừng bỏ qua bước chọn dấu ở cuối.",
        "visual": "circle",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: sin²α + cos²α = 1.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "ĐỌC KỸ ĐIỀU KIỆN",
        "title": "Góc tù giúp em chọn đúng dấu",
        "body": "Cho α là góc tù và sin α = 3/5. Ta tìm được cos²α = 16/25. Vì điểm M nằm bên trái trục tung, cos α âm.",
        "formula": "cos α = −√(1 − 9/25) = −4/5",
        "tip": "Góc tù nghĩa là 90° < α < 180°. Đây là dữ kiện quyết định dấu.",
        "visual": "circle",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: cos α = −√(1 − 9/25) = −4/5.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "MỘT MỐC DỄ NHỚ",
        "title": "Làm quen với góc 30°",
        "body": "Với góc 30°, tung độ là 1/2 và hoành độ là √3/2. Cả hai đều dương vì 30° là góc nhọn.",
        "formula": "sin 30° = 1/2  ·  cos 30° = √3/2",
        "tip": "Thử kiểm tra lại: (1/2)² + (√3/2)² = 1.",
        "visual": "circle",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: sin 30° = 1/2  ·  cos 30° = √3/2.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "MANG THEO KHI LÀM BÀI",
        "title": "Ba bước để tránh nhầm",
        "body": "Đọc điều kiện của góc. Dùng hệ thức để tính độ lớn. Sau cùng, chọn dấu phù hợp rồi thay lại để kiểm tra.",
        "formula": "Điều kiện → Độ lớn → Dấu",
        "tip": "Sẵn sàng rồi? Một câu làm thử sẽ giúp em biết phần nào cần xem lại.",
        "visual": "circle",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: Điều kiện → Độ lớn → Dấu.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "RÚT GỌN NÂNG CAO",
        "title": "Phương pháp biến đổi và rút gọn biểu thức lượng giác",
        "body": "Để rút gọn biểu thức lượng giác: 1) Đưa các góc lớn về góc nhọn nhờ tính chất hai góc bù nhau. 2) Đổi tan, cot về sin và cos khi cần quy đồng. 3) Vận dụng triệt để hằng đẳng thức sin² α + cos² α = 1 để triệt tiêu các bậc cao.",
        "formula": "Đưa về góc nhọn → Áp dụng sin² + cos² = 1 → Rút gọn triệt để",
        "example": "Rút gọn P = sin(180° − x) · cos x + cos(180° − x) · sin x.\n• sin(180° − x) = sin x và cos(180° − x) = −cos x.\n• Thay vào: P = sin x · cos x − cos x · sin x = 0.",
        "advanced": "Cho tam giác ABC. Rút gọn biểu thức P = cos(A + B) + cos C.\n→ Lời giải: Trong tam giác, A + B = 180° − C. Suy ra cos(A + B) = cos(180° − C) = −cos C. Thay vào: P = −cos C + cos C = 0.",
        "tip": "Trong mọi tam giác: Sin của tổng hai góc bằng Sin góc thứ ba, nhưng Cos của tổng hai góc bằng Trừ Cos góc thứ ba.",
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
    "description": "Hiểu dấu từ vị trí của góc, thay vì chỉ học thuộc.",
    "duration": "6 phút",
    "slides": [
      {
        "eyebrow": "NHÌN VÀO TỌA ĐỘ",
        "title": "Dấu đến từ vị trí của điểm",
        "body": "Trong khoảng 0° < α < 180°, điểm M luôn nằm phía trên trục hoành nên sin α dương. Hoành độ đổi dấu khi M đi qua trục tung.",
        "formula": "0° < α < 180° ⇒ sin α > 0",
        "tip": "Ở hai đầu 0° và 180°, sin bằng 0. Vì thế cần đọc đúng dấu bất đẳng thức.",
        "visual": "signs",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: 0° < α < 180° ⇒ sin α > 0.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "GÓC NHỌN",
        "title": "Bên phải trục tung: cos dương",
        "body": "Nếu 0° < α < 90°, điểm M có cả hoành độ và tung độ dương. Do đó sin, cos, tan và cot đều dương.",
        "formula": "Góc nhọn: sin +  ·  cos +  ·  tan +  ·  cot +",
        "tip": "Đừng dùng quy tắc này cho góc 90°: đó là một trường hợp riêng.",
        "visual": "signs",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: Góc nhọn: sin +  ·  cos +  ·  tan +  ·  cot +.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "GÓC TÙ",
        "title": "Bên trái trục tung: cos âm",
        "body": "Nếu 90° < α < 180°, tung độ dương nhưng hoành độ âm. Vì tan α = sin α/cos α và cot α = cos α/sin α, cả tan và cot đều âm.",
        "formula": "Góc tù: sin +  ·  cos −  ·  tan −  ·  cot −",
        "tip": "Ví dụ: cos 120° = −1/2 và tan 135° = −1.",
        "visual": "signs",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: Góc tù: sin +  ·  cos −  ·  tan −  ·  cot −.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "HAI GÓC BÙ NHAU",
        "title": "Sin giữ nguyên, cos đổi dấu",
        "body": "Hai điểm ứng với α và 180° − α đối xứng qua trục tung. Chúng có cùng tung độ và hoành độ đối nhau.",
        "formula": "sin(180° − α) = sin α  ·  cos(180° − α) = −cos α",
        "tip": "Ví dụ: sin 150° = sin 30° = 1/2; cos 150° = −√3/2.",
        "visual": "signs",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: sin(180° − α) = sin α  ·  cos(180° − α) = −cos α.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "CHÚ Ý ĐIỂM BIÊN",
        "title": "Góc 90° có điều gì đặc biệt?",
        "body": "Ở góc 90°, điểm M có tọa độ (0; 1). Vậy cos 90° = 0, sin 90° = 1 và tan 90° không xác định vì mẫu số bằng 0.",
        "formula": "cos 90° = 0  ·  sin 90° = 1",
        "tip": "Một giá trị bằng 0 thì không dương và cũng không âm.",
        "visual": "signs",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: cos 90° = 0  ·  sin 90° = 1.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "TỔNG HỢP VÀ BẪY DẤU",
        "title": "Kỹ năng xác định dấu nhanh và tránh bẫy đề thi",
        "body": "Bảng tổng hợp dấu nhanh: Góc nhọn (0° đến 90°): Tất cả các hàm sin, cos, tan, cot đều mang dấu DƯƠNG. Góc tù (90° đến 180°): Chỉ duy nhất hàm SIN mang dấu DƯƠNG, còn Cos, Tan, Cot đều mang dấu ÂM.",
        "formula": "Góc nhọn: (+, +, +, +)  ·  Góc tù: (+ sin, − cos, − tan, − cot)",
        "example": "Đề bài cho sin α = 4/5. Học sinh vội vàng suy ra cos α = 3/5. Vì sao sai?\n• Sai vì đề chưa cho biết α là góc nhọn hay tù.\n• Nếu α là góc tù thì cos α = −3/5. Cần đọc kỹ điều kiện của góc trước khi chọn dấu.",
        "advanced": "Cho tam giác ABC có góc A tù. Xét dấu của biểu thức T = cos A · cos B · cos C.\n→ Lời giải: Vì A tù nên cos A < 0. Tam giác chỉ có tối đa một góc tù nên B và C là góc nhọn, suy ra cos B > 0, cos C > 0. Vậy tích T mang dấu ÂM.",
        "tip": "Khẩu quyết vàng: Góc tù thì Cos âm, Sin dương, Tan và Cot cùng dấu âm.",
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
    "description": "Tìm cạnh, tìm góc và nhận biết một tam giác có góc tù.",
    "duration": "10 phút",
    "slides": [
      {
        "eyebrow": "ĐẶT TÊN CHO ĐÚNG",
        "title": "Mỗi cạnh có một góc đối diện",
        "body": "Trong tam giác ABC, gọi a = BC, b = CA và c = AB. Cạnh a đối diện góc A; hai cạnh b và c kẹp góc A.",
        "formula": "a = BC  ·  b = CA  ·  c = AB",
        "tip": "Trước khi thay số, chỉ ra cạnh đối diện và hai cạnh kẹp góc đã biết.",
        "visual": "triangle",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: a = BC  ·  b = CA  ·  c = AB.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "CÔNG THỨC CHÍNH",
        "title": "Từ hai cạnh và góc xen giữa",
        "body": "Biết hai cạnh b, c và góc A xen giữa, ta tìm được cạnh còn lại bằng định lý cosin. Cạnh có độ dài dương nên lấy căn bậc hai không âm.",
        "formula": "a² = b² + c² − 2bc cos A",
        "tip": "Nếu A = 90°, cos A = 0 và công thức trở thành định lý Pythagore.",
        "visual": "triangle",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: a² = b² + c² − 2bc cos A.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "CÙNG THỬ MỘT VÍ DỤ",
        "title": "Tìm cạnh đối diện góc 60°",
        "body": "Cho b = 2, c = 3 và A = 60°. Vì cos 60° = 1/2, ta có a² = 4 + 9 − 2 × 2 × 3 × 1/2 = 7.",
        "formula": "a = √7",
        "tip": "Kết quả √7 nằm giữa |3 − 2| và 3 + 2, phù hợp bất đẳng thức tam giác.",
        "visual": "triangle",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: a = √7.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "ĐẢO CHIỀU SUY NGHĨ",
        "title": "Biết ba cạnh, tìm cos của góc",
        "body": "Chuyển vế công thức định lý cosin để tìm cos A. Khi cần tìm số đo góc, dùng chức năng arccos và đặt máy tính ở chế độ độ.",
        "formula": "cos A = (b² + c² − a²)/(2bc)",
        "tip": "Dấu của cos cũng đủ cho biết A là góc nhọn, vuông hay tù.",
        "visual": "triangle",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: cos A = (b² + c² − a²)/(2bc).\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "TỰ KIỂM TRA KẾT QUẢ",
        "title": "Cạnh lớn nhất cho biết nhiều điều",
        "body": "Với tam giác có các cạnh 2, 3, 4, gọi A là góc đối diện cạnh 4. Ta có cos A = (4 + 9 − 16)/12 = −1/4 nên A là góc tù.",
        "formula": "cos A < 0 ⇒ A là góc tù",
        "tip": "Chỉ áp dụng khi ba độ dài tạo thành tam giác: tổng hai cạnh nhỏ phải lớn hơn cạnh lớn nhất.",
        "visual": "triangle",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: cos A < 0 ⇒ A là góc tù.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "ỨNG DỤNG THỰC TẾ",
        "title": "Bài toán đo đạc khoảng cách không tới được",
        "body": "Định lý côsin là công cụ kinh điển trong đo đạc địa lý và hàng hải. Khi cần đo khoảng cách giữa hai vị trí A và B mà không thể kéo dây trực tiếp (như hai bờ sông hay hai ngọn núi), người ta chọn vị trí C thuận lợi, đo khoảng cách CA, CB và góc ACB rồi áp dụng định lý côsin.",
        "formula": "AB = √(CA² + CB² − 2 · CA · CB · cos C)",
        "example": "Từ vị trí C đo được CA = 300m, CB = 500m và góc C = 60°. Khoảng cách AB bằng bao nhiêu?\n• AB² = 300² + 500² − 2(300)(500) cos 60° = 90000 + 250000 − 150000 = 190000.\n• AB = √190000 ≈ 435.9 mét.",
        "advanced": "Hai tàu thủy rời cảng O cùng lúc theo hai hướng tạo với nhau góc 45°. Tàu 1 chạy 20 km/h, tàu 2 chạy 30 km/h. Sau 2 giờ hai tàu cách nhau bao xa?\n→ Lời giải: Sau 2 giờ, d1 = 40 km, d2 = 60 km. Áp dụng định lý côsin tính được khoảng cách giữa hai tàu xấp xỉ 42.5 km.",
        "tip": "Vẽ phác họa hình tam giác và điền đúng số đo các cạnh, góc trước khi bấm máy tính.",
        "visual": "triangle"
      }
    ]
  },
  {
    "id": "sine-law",
    "chapterId": "chuong-3",
    "chapterTitle": "Chương III: Hệ thức lượng trong tam giác",
    "lessonNumber": "Bài 6",
    "title": "Định lý sin và diện tích tam giác",
    "shortTitle": "Định lý sin & Diện tích",
    "description": "Tỉ số cạnh trên sin góc đối diện, bán kính ngoại tiếp R và các công thức tính diện tích.",
    "duration": "10 phút",
    "slides": [
      {
        "eyebrow": "TỈ SỐ KHÔNG ĐỔI",
        "title": "Định lý sin trong tam giác",
        "body": "Trong tam giác ABC, tỉ số giữa một cạnh và sin của góc đối diện luôn bằng nhau và bằng đường kính 2R của đường tròn ngoại tiếp.",
        "formula": "a / sin A = b / sin B = c / sin C = 2R",
        "tip": "Biết một cạnh và góc đối diện là em tìm được ngay bán kính ngoại tiếp R.",
        "visual": "triangle",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: a / sin A = b / sin B = c / sin C = 2R.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "TÌM BÁN KÍNH NGOẠI TIẾP",
        "title": "R xuất hiện từ một cặp cạnh - góc",
        "body": "Cho tam giác có a = 6 và góc A = 30°. Vì sin 30° = 1/2, ta có 2R = 6 / (1/2) = 12 nên bán kính ngoại tiếp R = 6.",
        "formula": "R = a / (2 sin A)",
        "tip": "Tam giác vuông có góc huyền đối diện góc 90°, khi đó R bằng một nửa cạnh huyền.",
        "visual": "triangle",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: R = a / (2 sin A).\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "DIỆN TÍCH TỪ HAI CẠNH",
        "title": "Diện tích qua góc xen giữa",
        "body": "Diện tích tam giác bằng một nửa tích hai cạnh nhân sin của góc xen giữa. Công thức này cực kỳ tiện lợi khi không biết chiều cao.",
        "formula": "S = 1/2 a b sin C = 1/2 b c sin A = 1/2 c a sin B",
        "tip": "Góc xen giữa có thể là góc nhọn hoặc góc tù, vì sin của cả hai đều dương.",
        "visual": "triangle",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: S = 1/2 a b sin C = 1/2 b c sin A = 1/2 c a sin B.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "CÔNG THỨC HERON",
        "title": "Khi chỉ biết độ dài ba cạnh",
        "body": "Gọi p = (a + b + c)/2 là nửa chu vi tam giác. Diện tích S được tính bởi công thức Heron và liên hệ với bán kính nội tiếp r bởi S = p.r.",
        "formula": "S = √(p(p − a)(p − b)(p − c)) = p r = abc / (4R)",
        "tip": "Với tam giác có ba cạnh 5, 6, 7: p = 9, S = √(9 × 4 × 3 × 2) = 6√6.",
        "visual": "triangle",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: S = √(p(p − a)(p − b)(p − c)) = p r = abc / (4R).\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "CHIẾN LƯỢC GIẢI TAM GIÁC",
        "title": "Chọn công thức đúng lúc",
        "body": "Biết 2 cạnh + góc xen giữa: dùng Cosin để tìm cạnh 3. Biết 1 cạnh + 2 góc: dùng Sin. Biết 3 cạnh: dùng Cosin để tìm góc hoặc Heron để tính diện tích.",
        "formula": "2 cạnh + góc kẹp: Cosin  ·  1 cạnh + 2 góc: Sin  ·  3 cạnh: Cosin / Heron",
        "tip": "Luôn kiểm tra tổng ba góc bằng 180° và bất đẳng thức tam giác trước khi kết luận.",
        "visual": "triangle",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: 2 cạnh + góc kẹp: Cosin  ·  1 cạnh + 2 góc: Sin  ·  3 cạnh: Cosin / Heron.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "ỨNG DỤNG THỰC TẾ",
        "title": "Đo chiều cao công trình bằng phương pháp góc nâng",
        "body": "Muốn đo chiều cao một tháp cao mà chân tháp không thể tiếp cận, người ta chọn hai điểm quan sát C và D thẳng hàng với chân tháp, đo khoảng cách CD và hai góc nâng nhìn lên đỉnh tháp. Dùng định lý sin trong tam giác ACD sẽ tính được khoảng cách đến đỉnh, từ đó suy ra chiều cao tháp.",
        "formula": "Áp dụng định lý sin trong tam giác ACD → Tính AC → Chiều cao h = AC · sin C",
        "example": "Đo chiều cao tòa tháp: Đo khoảng cách CD = 50m, góc nâng tại C là 30°, góc nâng tại D là 45°.\n• Góc CAD = 45° − 30° = 15°.\n• Theo định lý sin: AC = CD · sin 135° / sin 15°.\n• Chiều cao tháp h = AC · sin 30° ≈ 68.3 mét.",
        "advanced": "Cho tam giác ABC có a = 10, góc A = 45°, góc B = 60°. Tính độ dài cạnh b và bán kính R.\n→ Lời giải: b = a · sin B / sin A = 10 · sin 60° / sin 45° = 10(√3/2)/(√2/2) = 5√6. Bán kính R = a / (2 sin A) = 10 / (2 sin 45°) = 5√2.",
        "tip": "Biết 1 cạnh và 2 góc thì luôn ưu tiên dùng định lý sin; biết 2 cạnh và góc xen giữa thì ưu tiên định lý côsin.",
        "visual": "triangle"
      }
    ]
  },
  {
    "id": "vectors-intro",
    "chapterId": "chuong-4",
    "chapterTitle": "Chương IV: Vectơ",
    "lessonNumber": "Bài 7 & 8",
    "title": "Khái niệm vectơ & Phép toán cộng trừ",
    "shortTitle": "Vectơ & Phép cộng trừ",
    "description": "Đoạn thẳng có hướng, hai vectơ bằng nhau, quy tắc ba điểm và hình bình hành.",
    "duration": "10 phút",
    "slides": [
      {
        "eyebrow": "ĐOẠN THẲNG CÓ HƯỚNG",
        "title": "Vectơ có phương, hướng và độ dài",
        "body": "Vectơ là một đoạn thẳng có hướng. Với vectơ AB, điểm A là điểm đầu (gốc), B là điểm cuối (ngọn). Độ dài của vectơ AB là khoảng cách giữa A và B, kí hiệu |AB|.",
        "formula": "Vectơ AB có gốc A, ngọn B  ·  Độ dài |AB| = AB",
        "tip": "Vectơ có điểm đầu và điểm cuối trùng nhau gọi là vectơ-không, kí hiệu 0.",
        "visual": "vector",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: Vectơ AB có gốc A, ngọn B  ·  Độ dài |AB| = AB.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "HAI VECTƠ BẰNG NHAU",
        "title": "Cùng hướng và cùng độ lớn",
        "body": "Hai vectơ được gọi là cùng phương nếu giá của chúng song song hoặc trùng nhau. Hai vectơ bằng nhau khi và chỉ khi chúng cùng hướng và có cùng độ dài.",
        "formula": "a = b ⇔ a, b cùng hướng và |a| = |b|",
        "tip": "Trong hình bình hành ABCD, vectơ AB bằng vectơ DC, nhưng không bằng vectơ CD vì ngược hướng.",
        "visual": "vector",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: a = b ⇔ a, b cùng hướng và |a| = |b|.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "QUY TẮC BA ĐIỂM",
        "title": "Cộng vectơ như nối tiếp đường đi",
        "body": "Với ba điểm bất kì A, B, C, ta luôn có AB + BC = AC. Điểm ngọn của vectơ thứ nhất trùng với điểm gốc của vectơ thứ hai.",
        "formula": "AB + BC = AC  (Quy tắc ba điểm)",
        "tip": "Gốc A đi đến B, rồi từ B đi đến C, kết quả là từ gốc A đến ngọn C.",
        "visual": "vector",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: AB + BC = AC  (Quy tắc ba điểm).\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "QUY TẮC HÌNH BÌNH HÀNH",
        "title": "Hai vectơ xuất phát từ một gốc",
        "body": "Nếu ABCD là hình bình hành thì tổng hai vectơ chung gốc AB và AD chính là vectơ đường chéo AC.",
        "formula": "AB + AD = AC  (ABCD là hình bình hành)",
        "tip": "Quy tắc này dùng rất phổ biến trong vật lý khi tổng hợp hai lực tác dụng vào cùng một vật.",
        "visual": "vector",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: AB + AD = AC  (ABCD là hình bình hành).\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "PHÉP TRỪ VECTƠ",
        "title": "Hiệu của hai vectơ chung gốc",
        "body": "Vectơ đối của AB là BA, nghĩa là AB + BA = 0. Phép trừ hai vectơ cùng gốc cho kết quả từ ngọn vectơ trừ đến ngọn vectơ bị trừ: AB − AC = CB.",
        "formula": "AB − AC = CB  (Chung gốc A: từ C sang B)",
        "tip": "Dễ nhớ: AB − AC thì ra CB (ngọn sau làm gốc, ngọn trước làm ngọn).",
        "visual": "vector",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: AB − AC = CB  (Chung gốc A: từ C sang B).\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "PHƯƠNG PHÁP CHỨNG MINH",
        "title": "Điều kiện để ba điểm thẳng hàng bằng vectơ",
        "body": "Ba điểm phân biệt A, B, C thẳng hàng khi và chỉ khi hai vectơ AB và AC cùng phương, tức là tồn tại số thực k khác 0 sao cho vectơ AB = k · vectơ AC. Đây là phương pháp đại số hóa hình học cực kỳ mạnh mẽ để chứng minh tính thẳng hàng và song song.",
        "formula": "A, B, C thẳng hàng ⇔ vectơ AB = k · vectơ AC (k ≠ 0)",
        "example": "Cho vectơ AB = 2 vectơ u và vectơ AC = 6 vectơ u. Ba điểm A, B, C có thẳng hàng không?\n• Ta có vectơ AC = 3 · vectơ AB.\n• Vì vectơ AC cùng phương với vectơ AB và cùng xuất phát từ điểm A nên A, B, C thẳng hàng.",
        "advanced": "Cho tam giác ABC, gọi M là trung điểm AB, N trên AC sao cho AN = 2 NC. Điểm I là trung điểm MN. Biểu diễn vectơ AI theo vectơ AB và AC.\n→ Lời giải: Ta có vectơ AM = 1/2 vectơ AB, vectơ AN = 2/3 vectơ AC. Vì I là trung điểm MN nên vectơ AI = 1/2(vectơ AM + vectơ AN) = 1/4 vectơ AB + 1/3 vectơ AC.",
        "tip": "Để biểu diễn một vectơ theo hai vectơ không cùng phương, hãy dùng quy tắc chèn điểm hoặc quy tắc trung điểm.",
        "visual": "vector"
      }
    ]
  },
  {
    "id": "scalar-product",
    "chapterId": "chuong-4",
    "chapterTitle": "Chương IV: Vectơ",
    "lessonNumber": "Bài 11",
    "title": "Tích vô hướng của hai vectơ",
    "shortTitle": "Tích vô hướng",
    "description": "Góc giữa hai vectơ, công thức tích vô hướng và điều kiện vuông góc.",
    "duration": "9 phút",
    "slides": [
      {
        "eyebrow": "GÓC GIỮA HAI VECTƠ",
        "title": "Đưa về cùng điểm xuất phát",
        "body": "Góc giữa hai vectơ khác 0 là góc tạo bởi hai tia cùng xuất phát từ một điểm và lần lượt cùng hướng với hai vectơ đó. Góc có số đo từ 0° đến 180°.",
        "formula": "0° ≤ (a, b) ≤ 180°",
        "tip": "Nếu hai vectơ cùng hướng thì góc bằng 0°; nếu ngược hướng thì góc bằng 180°.",
        "visual": "vector",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: 0° ≤ (a, b) ≤ 180°.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "ĐỊNH NGHĨA CHÍNH",
        "title": "Tích của độ dài và cosin góc giữa",
        "body": "Tích vô hướng của hai vectơ a và b là một số thực, được tính bằng tích độ dài của chúng nhân với cosin của góc xen giữa.",
        "formula": "a . b = |a| × |b| × cos(a, b)",
        "tip": "Tích vô hướng là một SỐ (vô hướng), không phải là một vectơ.",
        "visual": "vector",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: a . b = |a| × |b| × cos(a, b).\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "ĐIỀU KIỆN VUÔNG GÓC",
        "title": "Tích vô hướng bằng 0 khi góc 90°",
        "body": "Vì cos 90° = 0, hai vectơ khác 0 vuông góc với nhau khi và chỉ khi tích vô hướng của chúng bằng 0.",
        "formula": "a ⊥ b ⇔ a . b = 0",
        "tip": "Đây là công cụ mạnh mẽ nhất trong hình học tọa độ để chứng minh hai đường thẳng vuông góc.",
        "visual": "vector",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: a ⊥ b ⇔ a . b = 0.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "TỌA ĐỘ VÀ TÍCH VÔ HƯỚNG",
        "title": "Tính tích vô hướng bằng tọa độ Oxy",
        "body": "Trong mặt phẳng tọa độ Oxy, cho a(a1; a2) và b(b1; b2). Tích vô hướng bằng tổng tích các hoành độ và tích các tung độ.",
        "formula": "a . b = a1 b1 + a2 b2",
        "tip": "Ví dụ: a(2; 3) và b(4; −1) có a . b = 2×4 + 3×(−1) = 8 − 3 = 5.",
        "visual": "vector",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: a . b = a1 b1 + a2 b2.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "ĐỘ DÀI VÀ GÓC TỪ TỌA ĐỘ",
        "title": "Tìm góc giữa hai vectơ bằng tọa độ",
        "body": "Độ dài |a| = √(a1² + a2²). Từ đó, cosin của góc giữa hai vectơ bằng tích vô hướng chia cho tích hai độ dài.",
        "formula": "cos(a, b) = (a1 b1 + a2 b2) / [√(a1² + a2²) × √(b1² + b2²)]",
        "tip": "Nếu tử số > 0 thì góc nhọn, tử số < 0 thì góc tù, tử số = 0 thì góc vuông.",
        "visual": "vector",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: cos(a, b) = (a1 b1 + a2 b2) / [√(a1² + a2²) × √(b1² + b2²)].\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "ỨNG DỤNG HÌNH HỌC",
        "title": "Điều kiện vuông góc và bài toán cực trị độ dài",
        "body": "Hai vectơ khác không vuông góc với nhau khi và chỉ khi tích vô hướng của chúng bằng 0. Trong hệ tọa độ, a vuông góc b tương đương a1b1 + a2b2 = 0. Đây là công cụ hàng đầu để chứng minh các yếu tố vuông góc trong hình học phẳng.",
        "formula": "a ⊥ b ⇔ a · b = 0 ⇔ a1 · b1 + a2 · b2 = 0",
        "example": "Cho hai vectơ u = (2; 3) và v = (−6; 4). Hai vectơ này có vuông góc với nhau không?\n• Tính tích vô hướng: u · v = 2(−6) + 3(4) = −12 + 12 = 0.\n• Vì tích vô hướng bằng 0 nên u vuông góc với v.",
        "advanced": "Tìm m để hai vectơ a = (m − 1; 2) và b = (3; 4) vuông góc với nhau.\n→ Lời giải: a · b = 0 ⇔ 3(m − 1) + 2(4) = 0 ⇔ 3m − 3 + 8 = 0 ⇔ 3m = −5 ⇔ m = −5/3.",
        "tip": "Tích vô hướng của hai vectơ là một SỐ THỰC, không phải là một vectơ.",
        "visual": "vector"
      }
    ]
  },
  {
    "id": "statistics",
    "chapterId": "chuong-5",
    "chapterTitle": "Chương V: Các số đặc trưng của mẫu số liệu không ghép lớp",
    "lessonNumber": "Bài 13 & 14",
    "title": "Các số đặc trưng của mẫu số liệu",
    "shortTitle": "Thống kê mô tả",
    "description": "Số trung bình, trung vị, tứ phân vị, khoảng biến thiên và độ lệch chuẩn.",
    "duration": "10 phút",
    "slides": [
      {
        "eyebrow": "XU THẾ TRUNG TÂM",
        "title": "Số trung bình cộng x̄",
        "body": "Số trung bình cộng của mẫu số liệu bằng tổng tất cả các giá trị chia cho số lượng quan sát n. Nó đại diện cho mức độ trung bình của toàn bộ dữ liệu.",
        "formula": "x̄ = (x1 + x2 + ... + xn) / n",
        "tip": "Số trung bình dễ bị ảnh hưởng bởi các giá trị bất thường (quá lớn hoặc quá nhỏ).",
        "visual": "statistics",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: x̄ = (x1 + x2 + ... + xn) / n.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "CHIA ĐÔI DỮ LIỆU",
        "title": "Trung vị Me không ngại dị biệt",
        "body": "Sắp xếp mẫu số liệu theo thứ tự không giảm. Trung vị Me là giá trị đứng chính giữa (nếu n lẻ) hoặc trung bình cộng của hai giá trị đứng giữa (nếu n chẵn).",
        "formula": "Me: giá trị chính giữa sau khi sắp xếp thứ tự",
        "tip": "Với dãy 3, 5, 7, 8, 9 (n = 5), Me = 7. Với 2, 4, 6, 8 (n = 4), Me = (4+6)/2 = 5.",
        "visual": "statistics",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: Me: giá trị chính giữa sau khi sắp xếp thứ tự.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "TỨ PHÂN VỊ",
        "title": "Chia mẫu số liệu thành bốn phần",
        "body": "Tứ phân vị gồm ba giá trị Q1, Q2, Q3 chia mẫu đã sắp xếp thành 4 phần đều nhau. Q2 chính là trung vị Me. Q1 là trung vị của nửa dưới, Q3 là trung vị của nửa trên.",
        "formula": "Q1: tứ phân vị thứ nhất  ·  Q2: trung vị  ·  Q3: tứ phân vị thứ ba",
        "tip": "Khi tính Q1 và Q3, không tính giá trị Q2 (nếu n lẻ) vào hai nửa mẫu số liệu.",
        "visual": "statistics",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: Q1: tứ phân vị thứ nhất  ·  Q2: trung vị  ·  Q3: tứ phân vị thứ ba.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "ĐỘ PHÂN TÁN",
        "title": "Khoảng biến thiên và khoảng tứ phân vị",
        "body": "Khoảng biến thiên R = xmax − xmin đo độ chênh lệch giữa giá trị lớn nhất và nhỏ nhất. Khoảng tứ phân vị ΔQ = Q3 − Q1 phản ánh 50% số liệu ở trung tâm.",
        "formula": "R = xmax − xmin  ·  ΔQ = Q3 − Q1",
        "tip": "Khoảng tứ phân vị ΔQ không bị ảnh hưởng bởi các giá trị bất thường (ngoại lai).",
        "visual": "statistics",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: R = xmax − xmin  ·  ΔQ = Q3 − Q1.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "ĐO ĐỘ BIẾN THIÊN XUNG QUANH TRUNG BÌNH",
        "title": "Phương sai s² và độ lệch chuẩn s",
        "body": "Phương sai s² là trung bình cộng bình phương độ lệch của các số liệu so với số trung bình. Độ lệch chuẩn s = √(s²) có cùng đơn vị đo với dữ liệu ban đầu.",
        "formula": "s² = 1/n ∑ (xi − x̄)²  ·  s = √(s²)",
        "tip": "Độ lệch chuẩn càng nhỏ thì các số liệu càng tập trung đều đặn quanh số trung bình.",
        "visual": "statistics",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: s² = 1/n ∑ (xi − x̄)²  ·  s = √(s²).\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "PHÂN TÍCH CHUYÊN SÂU",
        "title": "Tứ phân vị và nhận diện giá trị ngoại lệ",
        "body": "Tứ phân vị chia mẫu số liệu đã sắp xếp thành 4 phần bằng nhau: Q1 (tứ phân vị dưới), Q2 (trung vị), Q3 (tứ phân vị trên). Khoảng tứ phân vị ΔQ = Q3 − Q1 đo độ phân tán của nửa giữa mẫu số liệu. Một giá trị được xem là ngoại lệ nếu nhỏ hơn Q1 − 1.5 ΔQ hoặc lớn hơn Q3 + 1.5 ΔQ.",
        "formula": "ΔQ = Q3 − Q1  ·  Giá trị ngoại lệ: x < Q1 − 1.5 ΔQ hoặc x > Q3 + 1.5 ΔQ",
        "example": "Cho mẫu số liệu đã xếp: 2, 4, 5, 6, 8, 9, 10, 25.\n• Q1 = 4.5, Q2 = 7, Q3 = 9.5. Khoảng tứ phân vị ΔQ = 9.5 − 4.5 = 5.\n• Ngưỡng trên: Q3 + 1.5(5) = 9.5 + 7.5 = 17.\n• Vì 25 > 17 nên 25 là giá trị ngoại lệ (outlier).",
        "advanced": "Khi mẫu số liệu có chứa giá trị ngoại lệ, ta nên dùng số đặc trưng nào để đo xu thế trung tâm?\n→ Lời giải: Nên dùng TRUNG VỊ (Q2) thay vì số trung bình, vì trung vị không bị kéo lệch bởi các giá trị quá lớn hoặc quá nhỏ ngoại lệ.",
        "tip": "Khoảng tứ phân vị không bị ảnh hưởng bởi các giá trị ngoại lệ, do đó phản ánh độ phân tán chuẩn xác hơn khoảng biến thiên R.",
        "visual": "statistics"
      }
    ]
  },
  {
    "id": "quadratic-functions",
    "chapterId": "chuong-6",
    "chapterTitle": "Chương VI: Hàm số, đồ thị và ứng dụng",
    "lessonNumber": "Bài 16 & 17",
    "title": "Hàm số bậc hai và dấu của tam thức",
    "shortTitle": "Hàm số bậc hai & Tam thức",
    "description": "Đỉnh parabol, trục đối xứng, bảng biến thiên và quy tắc xét dấu tam thức bậc hai.",
    "duration": "11 phút",
    "slides": [
      {
        "eyebrow": "DẠNG CHUẨN PARABOL",
        "title": "Hàm số bậc hai y = ax² + bx + c",
        "body": "Đồ thị của hàm số bậc hai y = ax² + bx + c (a ≠ 0) là một đường cong parabol có bề lõm quay lên trên nếu a > 0 và quay xuống dưới nếu a < 0.",
        "formula": "y = ax² + bx + c  (a ≠ 0)",
        "tip": "Nếu a > 0: parabol có điểm thấp nhất (cực tiểu); nếu a < 0: có điểm cao nhất (cực đại).",
        "visual": "parabola",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: y = ax² + bx + c  (a ≠ 0).\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "ĐỈNH VÀ TRỤC ĐỐI XỨNG",
        "title": "Tọa độ đỉnh I(-b/2a; -Δ/4a)",
        "body": "Đỉnh I của parabol có hoành độ x0 = −b/(2a). Trục đối xứng của parabol là đường thẳng đứng x = −b/(2a).",
        "formula": "Đỉnh I(−b/(2a); −Δ/(4a))  ·  Trục đối xứng: x = −b/(2a)",
        "tip": "Tìm hoành độ x0 = −b/(2a) trước, rồi thay lại vào hàm số để tìm tung độ y0 nhanh hơn dùng công thức Δ.",
        "visual": "parabola",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: Đỉnh I(−b/(2a); −Δ/(4a))  ·  Trục đối xứng: x = −b/(2a).\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "TAM THỨC BẬC HAI",
        "title": "Quy tắc dấu “Trong trái - Ngoài cùng”",
        "body": "Cho tam thức f(x) = ax² + bx + c (a ≠ 0). Khi biệt thức Δ > 0, tam thức có hai nghiệm phân biệt x1 < x2. Khi đó f(x) trái dấu với hệ số a ở trong khoảng hai nghiệm và cùng dấu với a ở ngoài khoảng hai nghiệm.",
        "formula": "x1 < x < x2 : trái dấu với a  ·  x < x1 hoặc x > x2 : cùng dấu với a",
        "tip": "Câu thần chú bất hủ: “Trong trái, ngoài cùng”!",
        "visual": "parabola",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: x1 < x < x2 : trái dấu với a  ·  x < x1 hoặc x > x2 : cùng dấu với a.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "KHI BIỆT THỨC Δ ≤ 0",
        "title": "Tam thức giữ nguyên một dấu duy nhất",
        "body": "Nếu Δ < 0, f(x) luôn cùng dấu với hệ số a với mọi x ∈ ℝ. Nếu Δ = 0, f(x) cùng dấu với a với mọi x ≠ −b/(2a), và bằng 0 tại x = −b/(2a).",
        "formula": "Δ < 0 ⇒ a . f(x) > 0 với mọi x ∈ ℝ",
        "tip": "Để ax² + bx + c > 0 với mọi x ∈ ℝ, điều kiện cần và đủ là: a > 0 và Δ < 0.",
        "visual": "parabola",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: Δ < 0 ⇒ a . f(x) > 0 với mọi x ∈ ℝ.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "BẤT PHƯƠNG TRÌNH BẬC HAI",
        "title": "Tìm tập nghiệm từ bảng xét dấu",
        "body": "Để giải bất phương trình bậc hai, ta tính Δ, tìm nghiệm của tam thức, lập bảng xét dấu theo quy tắc rồi đọc tập nghiệm thỏa mãn dấu bất phương trình.",
        "formula": "Tính Δ → Tìm nghiệm x1, x2 → Lập bảng xét dấu → Kết luận tập nghiệm",
        "tip": "Ví dụ: x² − 5x + 6 < 0 có a = 1 > 0 và hai nghiệm 2, 3. Cần tìm f(x) < 0 (trái dấu a) nên nghiệm nằm TRONG: (2; 3).",
        "visual": "parabola",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: Tính Δ → Tìm nghiệm x1, x2 → Lập bảng xét dấu → Kết luận tập nghiệm.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "BẤT PHƯƠNG TRÌNH BẬC HAI",
        "title": "Quy tắc xét dấu tam thức bậc hai và giải bất phương trình",
        "body": "Quy tắc xét dấu tam thức bậc hai f(x) = ax² + bx + c: Khi tam thức có hai nghiệm phân biệt x1 < x2, trong khoảng hai nghiệm f(x) trái dấu với hệ số a, ngoài khoảng hai nghiệm f(x) cùng dấu với a ('Trong trái, ngoài cùng'). Khi biệt thức Δ < 0, f(x) luôn cùng dấu với hệ số a với mọi x.",
        "formula": "Δ > 0: Trong trái, ngoài cùng  ·  Δ < 0: f(x) luôn cùng dấu với hệ số a",
        "example": "Giải bất phương trình x² − 5x + 6 > 0.\n• Phương trình x² − 5x + 6 = 0 có hai nghiệm x1 = 2, x2 = 3.\n• Hệ số a = 1 > 0. Ta cần f(x) > 0 (cùng dấu với a), nên lấy ngoài khoảng nghiệm.\n• Tập nghiệm là (-∞; 2) ∪ (3; +∞).",
        "advanced": "Tìm m để tam thức f(x) = x² − 2mx + 4 luôn dương với mọi x thuộc ℝ.\n→ Lời giải: Để f(x) > 0 ∀x ∈ ℝ thì a = 1 > 0 (luôn đúng) và Δ' < 0 ⇔ m² − 4 < 0 ⇔ −2 < m < 2.",
        "tip": "Khẩu quyết xét dấu tam thức bậc hai: 'Trong trái, ngoài cùng' khi có hai nghiệm; luôn cùng dấu với hệ số a khi vô nghiệm.",
        "visual": "parabola"
      }
    ]
  },
  {
    "id": "analytic-geometry",
    "chapterId": "chuong-7",
    "chapterTitle": "Chương VII: Phương pháp tọa độ trong mặt phẳng",
    "lessonNumber": "Bài 19 & 21",
    "title": "Phương trình đường thẳng và đường tròn",
    "shortTitle": "Đường thẳng & Đường tròn",
    "description": "Vectơ chỉ phương, pháp tuyến, phương trình tổng quát, khoảng cách và phương trình đường tròn.",
    "duration": "11 phút",
    "slides": [
      {
        "eyebrow": "VECTƠ ĐẶC TRƯNG",
        "title": "Chỉ phương (u) và Pháp tuyến (n)",
        "body": "Vectơ chỉ phương u có giá song song hoặc trùng với đường thẳng d. Vectơ pháp tuyến n vuông góc với d. Nếu u = (u1; u2) thì một vectơ pháp tuyến là n = (−u2; u1).",
        "formula": "u ⊥ n ⇔ u1 a + u2 b = 0",
        "tip": "Đổi chỗ hai tọa độ và đổi dấu MỘT trong hai thành phần để chuyển từ chỉ phương sang pháp tuyến.",
        "visual": "coordinate",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: u ⊥ n ⇔ u1 a + u2 b = 0.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "PHƯƠNG TRÌNH TỔNG QUÁT",
        "title": "Đường thẳng ax + by + c = 0",
        "body": "Đường thẳng đi qua điểm M0(x0; y0) và nhận n(a; b) làm vectơ pháp tuyến có phương trình: a(x − x0) + b(y − y0) = 0 hay ax + by + c = 0.",
        "formula": "ax + by + c = 0  (VTPT là n(a; b))",
        "tip": "Hệ số của x và y trong phương trình tổng quát chính là tọa độ của vectơ pháp tuyến n(a; b).",
        "visual": "coordinate",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: ax + by + c = 0  (VTPT là n(a; b)).\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "ĐO KHOẢNG CÁCH",
        "title": "Khoảng cách từ một điểm đến đường thẳng",
        "body": "Khoảng cách từ điểm M0(x0; y0) đến đường thẳng d: ax + by + c = 0 được tính bằng trị tuyệt đối của việc thay tọa độ M0 chia cho độ dài vectơ pháp tuyến.",
        "formula": "d(M0, d) = |a x0 + b y0 + c| / √(a² + b²)",
        "tip": "Tử số luôn có giá trị tuyệt đối vì khoảng cách là một đại lượng không âm.",
        "visual": "coordinate",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: d(M0, d) = |a x0 + b y0 + c| / √(a² + b²).\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "ĐƯỜNG TRÒN CHÍNH TẮC",
        "title": "Tâm I(a; b) và bán kính R",
        "body": "Phương trình đường tròn có tâm I(a; b) và bán kính R có dạng chính tắc: (x − a)² + (y − b)² = R². Khai triển ra ta được dạng tổng quát: x² + y² − 2ax − 2by + c = 0.",
        "formula": "(x − a)² + (y − b)² = R²  với R = √(a² + b² − c) > 0",
        "tip": "Chú ý dấu âm: đường tròn (x − 2)² + (y + 3)² = 16 có tâm I(2; −3) và bán kính R = 4 (căn của 16).",
        "visual": "coordinate",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: (x − a)² + (y − b)² = R²  với R = √(a² + b² − c) > 0.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "TIẾP TUYẾN ĐƯỜNG TRÒN",
        "title": "Khoảng cách từ tâm bằng đúng bán kính",
        "body": "Đường thẳng Δ là tiếp tuyến của đường tròn (C) tâm I bán kính R khi và chỉ khi khoảng cách từ tâm I đến đường thẳng Δ bằng đúng bán kính R.",
        "formula": "Δ tiếp xúc (C) ⇔ d(I, Δ) = R",
        "tip": "Tiếp tuyến vuông góc với bán kính đi qua tiếp điểm.",
        "visual": "coordinate",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: Δ tiếp xúc (C) ⇔ d(I, Δ) = R.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "KHOẢNG CÁCH VÀ VỊ TRÍ",
        "title": "Khoảng cách từ điểm đến đường thẳng và tiếp tuyến đường tròn",
        "body": "Khoảng cách từ điểm M(x0; y0) đến đường thẳng Δ: ax + by + c = 0 được tính bởi công thức d(M, Δ) = |ax0 + by0 + c| / √(a² + b²). Đường thẳng Δ tiếp xúc với đường tròn tâm I bán kính R khi và chỉ khi khoảng cách d(I, Δ) = R.",
        "formula": "d(M, Δ) = |ax0 + by0 + c| / √(a² + b²)  ·  Δ tiếp xúc (C) ⇔ d(I, Δ) = R",
        "example": "Tính khoảng cách từ điểm A(1; 2) đến đường thẳng Δ: 3x + 4y − 1 = 0.\n• Thay tọa độ vào công thức: d(A, Δ) = |3(1) + 4(2) − 1| / √(3² + 4²) = |3 + 8 − 1| / 5 = 10 / 5 = 2.",
        "advanced": "Viết phương trình tiếp tuyến của đường tròn (x − 1)² + (y − 2)² = 25 tại điểm M(4; 6).\n→ Lời giải: Tâm I(1; 2). Vectơ pháp tuyến của tiếp tuyến là vectơ IM = (3; 4). Phương trình tiếp tuyến là 3(x − 4) + 4(y − 6) = 0 ⇔ 3x + 4y − 36 = 0.",
        "tip": "Nhớ lấy giá trị tuyệt đối ở tử số trong công thức khoảng cách vì khoảng cách hình học luôn không âm.",
        "visual": "coordinate"
      }
    ]
  },
  {
    "id": "combinatorics",
    "chapterId": "chuong-8",
    "chapterTitle": "Chương VIII: Đại số tổ hợp",
    "lessonNumber": "Bài 23 & 24",
    "title": "Quy tắc đếm, hoán vị, chỉnh hợp và tổ hợp",
    "shortTitle": "Đại số tổ hợp",
    "description": "Quy tắc cộng, quy tắc nhân, hoán vị Pn, chỉnh hợp Ank và tổ hợp Cnk.",
    "duration": "10 phút",
    "slides": [
      {
        "eyebrow": "PHƯƠNG ÁN ĐỘC LẬP",
        "title": "Quy tắc cộng (HOẶC)",
        "body": "Một công việc có thể hoàn thành theo một trong hai phương án độc lập: phương án 1 có m cách, phương án 2 có n cách (không trùng lặp). Tổng số cách là m + n.",
        "formula": "Tổng số cách = m + n",
        "tip": "Dấu hiệu nhận biết: Thực hiện xong một phương án là công việc ĐÃ HOÀN THÀNH.",
        "visual": "combinatorics",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: Tổng số cách = m + n.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "CÔNG ĐOẠN LIÊN TIẾP",
        "title": "Quy tắc nhân (VÀ)",
        "body": "Một công việc gồm hai công đoạn liên tiếp: công đoạn 1 có m cách, sau đó công đoạn 2 có n cách. Tổng số cách hoàn thành công việc là m × n.",
        "formula": "Tổng số cách = m × n",
        "tip": "Dấu hiệu nhận biết: Phải làm xong TẤT CẢ các công đoạn thì công việc mới hoàn thành.",
        "visual": "combinatorics",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: Tổng số cách = m × n.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "SẮP XẾP TẤT CẢ",
        "title": "Hoán vị của n phần tử: Pn = n!",
        "body": "Một hoán vị của n phần tử là một cách sắp thứ tự n phần tử đó. Số các hoán vị của n phần tử là n giai thừa: Pn = n! = n × (n − 1) × ... × 1.",
        "formula": "Pn = n!  (với 0! = 1)",
        "tip": "Số cách xếp 5 bạn học sinh vào 5 chiếc ghế theo hàng ngang là P5 = 5! = 120 cách.",
        "visual": "combinatorics",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: Pn = n!  (với 0! = 1).\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "CHỌN CÓ THỨ TỰ",
        "title": "Chỉnh hợp chập k của n phần tử",
        "body": "Chọn k phần tử từ n phần tử (1 ≤ k ≤ n) và sắp xếp chúng theo một thứ tự gọi là một chỉnh hợp chập k của n phần tử.",
        "formula": "An^k = n! / (n − k)!",
        "tip": "Chọn 3 bạn trong 30 bạn để làm Lớp trưởng, Lớp phó, Bí thư: có phân biệt chức vụ nên là CHỈNH HỢP A30³.",
        "visual": "combinatorics",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: An^k = n! / (n − k)!.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "CHỌN KHÔNG CẦN THỨ TỰ",
        "title": "Tổ hợp chập k của n phần tử",
        "body": "Chọn k phần tử từ n phần tử mà không quan tâm đến thứ tự sắp xếp được gọi là một tổ hợp chập k của n phần tử.",
        "formula": "Cn^k = n! / [k! (n − k)!]",
        "tip": "Chọn 3 bạn đi lao động quét sân: không phân biệt thứ tự nên là TỔ HỢP C30³.",
        "visual": "combinatorics",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: Cn^k = n! / [k! (n − k)!].\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "NHỊ THỨC NEWTON",
        "title": "Khai triển nhị thức Newton và bài toán đếm chọn lọc",
        "body": "Khai triển nhị thức Newton cho lũy thừa bậc 4 và 5: (a + b)⁴ = a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴. Các hệ số trong khai triển chính là các tổ hợp C_n^k, tạo thành tam giác Pascal đối xứng.",
        "formula": "(a + b)⁴ = a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴  ·  Hệ số là C_n^k",
        "example": "Khai triển (x + 2)⁴ theo công thức nhị thức Newton.\n• Thay a = x, b = 2: (x + 2)⁴ = x⁴ + 4x³(2) + 6x²(2²) + 4x(2³) + 2⁴ = x⁴ + 8x³ + 24x² + 32x + 16.",
        "advanced": "Tìm hệ số của x² trong khai triển của (2x − 1)⁴.\n→ Lời giải: Số hạng chứa x² là 6 · (2x)² · (−1)² = 6 · 4x² · 1 = 24x². Vậy hệ số là 24.",
        "tip": "Chú ý dấu âm: Khi khai triển (a − b)ⁿ thì các dấu cộng trừ xen kẽ nhau bắt đầu từ dấu dương.",
        "visual": "combinatorics"
      }
    ]
  },
  {
    "id": "probability",
    "chapterId": "chuong-9",
    "chapterTitle": "Chương IX: Tính xác suất theo định nghĩa cổ điển",
    "lessonNumber": "Bài 26 & 27",
    "title": "Biến cố và tính xác suất cổ điển",
    "shortTitle": "Xác suất cổ điển",
    "description": "Không gian mẫu, biến cố, công thức tính xác suất cổ điển và sử dụng biến cố đối.",
    "duration": "9 phút",
    "slides": [
      {
        "eyebrow": "TẤT CẢ KHẢ NĂNG",
        "title": "Phép thử ngẫu nhiên và Không gian mẫu Ω",
        "body": "Phép thử ngẫu nhiên là thí nghiệm không đoán trước được kết quả. Tập hợp tất cả các kết quả có thể xảy ra của phép thử gọi là không gian mẫu, kí hiệu là Ω.",
        "formula": "n(Ω): Số phần tử của không gian mẫu",
        "tip": "Gieo một con xúc xắc 6 mặt cân đối thì không gian mẫu Ω = {1; 2; 3; 4; 5; 6}, n(Ω) = 6.",
        "visual": "probability",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: n(Ω): Số phần tử của không gian mẫu.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "KẾT QUẢ THUẬN LỢI",
        "title": "Biến cố là một tập con của Ω",
        "body": "Biến cố A là một tập con của không gian mẫu Ω. Một kết quả thuộc A được gọi là một kết quả thuận lợi cho biến cố A, số phần tử là n(A).",
        "formula": "A ⊂ Ω  ·  n(A) là số kết quả thuận lợi",
        "tip": "Biến cố chắc chắn là Ω, có xác suất bằng 1. Biến cố không thể là ∅, có xác suất bằng 0.",
        "visual": "probability",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: A ⊂ Ω  ·  n(A) là số kết quả thuận lợi.\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "CÔNG THỨC CỔ ĐIỂN",
        "title": "Tỉ số giữa thuận lợi và tổng số",
        "body": "Khi các kết quả của phép thử đồng khả năng xuất hiện, xác suất của biến cố A bằng số kết quả thuận lợi cho A chia cho số phần tử của không gian mẫu.",
        "formula": "P(A) = n(A) / n(Ω)  (0 ≤ P(A) ≤ 1)",
        "tip": "Gieo xúc xắc 6 mặt, xác suất xuất hiện mặt chẵn {2, 4, 6} là 3/6 = 1/2.",
        "visual": "probability",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: P(A) = n(A) / n(Ω)  (0 ≤ P(A) ≤ 1).\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "BIẾN CỐ ĐỐI",
        "title": "Giải nhanh khi đề bài nói “Ít nhất một”",
        "body": "Biến cố đối của A, kí hiệu Ā (hoặc Ā), là biến cố “A không xảy ra”. Tổng xác suất của hai biến cố đối nhau luôn bằng 1.",
        "formula": "P(Ā) = 1 − P(A)  hay  P(A) = 1 − P(Ā)",
        "tip": "Mỗi khi gặp cụm từ “có ít nhất một”, hãy nghĩ ngay đến biến cố đối “không có cái nào”.",
        "visual": "probability",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: P(Ā) = 1 − P(A)  hay  P(A) = 1 − P(Ā).\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "BỐN BƯỚC TÍNH XÁC SUẤT",
        "title": "Quy trình giải bài toán xác suất chuẩn",
        "body": "Bước 1: Xác định phép thử và tính n(Ω). Bước 2: Mô tả biến cố A và tính n(A) (dùng quy tắc đếm hoặc tổ hợp). Bước 3: Lập tỉ số P(A) = n(A)/n(Ω).",
        "formula": "Xác định Ω → Tính n(Ω) → Tính n(A) → P(A) = n(A) / n(Ω)",
        "tip": "Luôn kiểm tra: kết quả xác suất tính ra bắt buộc phải nằm trong đoạn [0; 1].",
        "visual": "probability",
        "example": "Ví dụ từng bước:\n• Bước 1: Xác định giả thiết đề bài và công thức áp dụng: Xác định Ω → Tính n(Ω) → Tính n(A) → P(A) = n(A) / n(Ω).\n• Bước 2: Thay số và giải từng bước cẩn thận.\n• Bước 3: Đối chiếu điều kiện và đưa ra kết luận chuẩn xác.",
        "advanced": "Bài toán nâng cao:\n• Dạng toán phân loại: Vận dụng kết hợp kiến thức và biến đổi linh hoạt.\n→ Lời giải: Phân tích kỹ các yếu tố đề bài, lập phương trình liên hệ và đánh giá nghiệm."
      },
      {
        "eyebrow": "BIẾN CỐ ĐỐI VÀ QUY TẮC",
        "title": "Phương pháp dùng biến cố đối trong bài toán ít nhất một",
        "body": "Khi bài toán yêu cầu tính xác suất của biến cố có từ 'có ít nhất một', việc tính trực tiếp thường phải chia nhiều trường hợp phức tạp. Sử dụng biến cố đối Ā (trường hợp 'không có cái nào') giúp bài toán được giải quyết chỉ trong một bước tính: P(A) = 1 − P(Ā).",
        "formula": "P(A) = 1 − P(Ā)  (Đặc biệt hiệu quả cho dạng bài 'ít nhất một')",
        "example": "Gieo một con xúc xắc cân đối hai lần. Tính xác suất để có ít nhất một lần xuất hiện mặt 6 chấm.\n• Biến cố đối Ā: 'Cả hai lần đều không xuất hiện mặt 6'.\n• Số cách không xuất hiện mặt 6 ở mỗi lần là 5. Do đó n(Ā) = 5 × 5 = 25. n(Ω) = 36.\n• Xác suất P(Ā) = 25/36 ⇒ P(A) = 1 − 25/36 = 11/36.",
        "advanced": "Bắn 3 viên đạn độc lập vào mục tiêu với xác suất trúng của mỗi viên là 0.7. Tính xác suất mục tiêu bị trúng đạn.\n→ Lời giải: Biến cố đối là cả 3 viên đều trượt: P(Ā) = (1 − 0.7)³ = 0.3³ = 0.027. Vậy xác suất mục tiêu trúng đạn là P(A) = 1 − 0.027 = 0.973 (97.3%).",
        "tip": "Từ khóa nhận diện: Cứ thấy cụm từ 'có ít nhất một' thì 90% nên nghĩ ngay đến phương pháp biến cố đối.",
        "visual": "probability"
      }
    ]
  }
];
