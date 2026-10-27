export const part3Lessons = [
  {
    id: "statistics",
    chapterId: "chuong-5",
    chapterTitle: "Chương V: Các số đặc trưng của mẫu số liệu không ghép nhóm",
    lessonNumber: "Bài 10",
    title: "Các số đặc trưng đo xu thế trung tâm",
    shortTitle: "Thống kê mô tả",
    description: "Số trung bình, trung vị, tứ phân vị, mốt và phát hiện giá trị bất thường.",
    duration: "14 phút",
    visual: "statistics",
    slides: [
      {
        eyebrow: "SỐ TRUNG BÌNH CỘNG",
        title: "Số trung bình (x̄) và ý nghĩa đại diện",
        body: "Số trung bình của mẫu số liệu x1, x2, ..., xn là tổng của tất cả các giá trị chia cho số phần tử n. Số trung bình là số đặc trưng phản ánh mức độ trung bình của mẫu số liệu. Tuy nhiên, số trung bình rất nhạy cảm và dễ bị bóp méo bởi các giá trị quá lớn hoặc quá nhỏ bất thường.",
        formula: "x̄ = (x1 + x2 + ... + xn) / n = (1/n) ∑ xi",
        example: "Điểm kiểm tra của một nhóm 5 học sinh là: 7, 8, 9, 6, 10. Tính điểm trung bình.\n• Tổng điểm: 7 + 8 + 9 + 6 + 10 = 40.\n• Số học sinh: n = 5.\n• Điểm trung bình: x̄ = 40 / 5 = 8.0.",
        advanced: "Một công ty có 9 nhân viên lương 10 triệu/tháng và 1 giám đốc lương 110 triệu/tháng. Tính lương trung bình và nhận xét.\n• Tổng lương = 9·10 + 110 = 200 triệu. Lương trung bình: x̄ = 200 / 10 = 20 triệu.\n• Nhận xét: Lương trung bình là 20 triệu nhưng 90% nhân viên chỉ nhận 10 triệu. Số trung bình bị kéo lệch mạnh bởi mức lương bất thường của giám đốc.",
        tip: "Nhớ kỹ: Số trung bình chỉ đáng tin cậy khi các số liệu trong mẫu không chênh lệch quá đột biến!",
        visual: "statistics"
      },
      {
        eyebrow: "TRUNG VỊ (Me)",
        title: "Trung vị: Giá trị chia đôi mẫu số liệu đã sắp xếp",
        body: "Để tìm trung vị Me: BẮT BUỘC bước đầu tiên là sắp xếp mẫu số liệu theo thứ tự không giảm (từ bé đến lớn). Nếu n lẻ (n = 2k + 1), trung vị là số ở chính giữa x_(k+1). Nếu n chẵn (n = 2k), trung vị là trung bình cộng của hai số đứng ở giữa: (x_k + x_(k+1)) / 2. Trung vị không bị ảnh hưởng bởi giá trị bất thường.",
        formula: "n lẻ: Me = x_((n+1)/2)  ·  n chẵn: Me = (x_(n/2) + x_(n/2 + 1)) / 2",
        example: "Tìm trung vị của mẫu số liệu điểm: 9, 4, 7, 8, 5.\n• Bước 1: Sắp xếp theo thứ tự tăng dần: 4, 5, 7, 8, 9.\n• Bước 2: Vì n = 5 là số lẻ, số đứng ở vị trí chính giữa (vị trí thứ 3) là 7.\n• Kết luận: Trung vị Me = 7.",
        advanced: "Tìm trung vị của mẫu số liệu gồm 6 số: 2, 8, 4, 10, 6, 12.\n• Sắp xếp: 2, 4, 6, 8, 10, 12.\n• Vì n = 6 là số chẵn, lấy trung bình cộng của 2 số ở giữa (vị trí 3 và 4): Me = (6 + 8) / 2 = 7.",
        tip: "Bẫy điểm thi lớn nhất: Quên sắp xếp dãy số liệu tăng dần mà lấy ngay số đứng giữa của đề bài cho là SAI 100%!",
        visual: "statistics"
      },
      {
        eyebrow: "TỨ PHÂN VỊ (Q1, Q2, Q3)",
        title: "Tứ phân vị: Chia mẫu số liệu thành bốn phần bằng nhau",
        body: "Tứ phân vị gồm ba giá trị Q1, Q2, Q3 chia mẫu số liệu đã sắp xếp thành 4 phần bằng nhau. Q2 chính là trung vị Me của cả mẫu. Q1 là trung vị của nửa số liệu phía dưới Q2 (tứ phân vị thứ nhất). Q3 là trung vị của nửa số liệu phía trên Q2 (tứ phân vị thứ ba). Khoảng tứ phân vị: ΔQ = Q3 − Q1.",
        formula: "Q2 = Me  ·  Q1 = Trung vị nửa dưới  ·  Q3 = Trung vị nửa trên  ·  ΔQ = Q3 − Q1",
        example: "Tìm tứ phân vị của mẫu số liệu: 1, 3, 5, 7, 9, 11, 13.\n• Q2 là trung vị của cả mẫu: Q2 = 7.\n• Nửa dưới gồm: 1, 3, 5 ⇒ Q1 = 3.\n• Nửa trên gồm: 9, 11, 13 ⇒ Q3 = 11.\n• Khoảng tứ phân vị: ΔQ = 11 − 3 = 8.",
        advanced: "Khi nào không tính Q2 vào nửa dưới và nửa trên?\n→ Lời giải: Khi n lẻ, giá trị Q2 ở vị trí chính giữa KHÔNG ĐƯỢC tính vào nửa dưới hay nửa trên. Khi n chẵn, mẫu được chia đôi thành 2 nửa hoàn toàn bằng nhau và lấy trung vị của từng nửa.",
        tip: "Khoảng tứ phân vị ΔQ = Q3 − Q1 là số đặc trưng đo độ phân tán của 50% số liệu ở trung tâm.",
        visual: "statistics"
      },
      {
        eyebrow: "GIÁ TRỊ BẤT THƯỜNG",
        title: "Quy tắc hàng rào phát hiện giá trị bất thường (outlier)",
        body: "Giá trị bất thường (outlier) là giá trị quá lớn hoặc quá nhỏ so với phần lớn các số liệu trong mẫu. Quy tắc hàng rào tứ phân vị xác định giá trị x là bất thường nếu: x < Q1 − 1.5 · ΔQ (hàng rào dưới) hoặc x > Q3 + 1.5 · ΔQ (hàng rào trên).",
        formula: "Bất thường nếu: x < Q1 − 1.5 · ΔQ  hoặc  x > Q3 + 1.5 · ΔQ",
        example: "Mẫu số liệu có Q1 = 15, Q3 = 25. Kiểm tra xem giá trị x = 45 có phải là bất thường không.\n• Khoảng tứ phân vị: ΔQ = 25 − 15 = 10.\n• Hàng rào trên: Q3 + 1.5 · ΔQ = 25 + 1.5 · 10 = 25 + 15 = 40.\n• Vì x = 45 > 40 nên 45 là một giá trị bất thường.",
        advanced: "Giá trị x = 0 có phải là giá trị bất thường trong mẫu số liệu trên không?\n→ Lời giải: Hàng rào dưới: Q1 − 1.5 · ΔQ = 15 − 1.5 · 10 = 0. Vì x = 0 không nhỏ hơn 0 (x = 0 thuộc biên) nên 0 không phải là giá trị bất thường.",
        tip: "Ứng dụng thực tế: Phát hiện giá trị bất thường giúp các nhà khoa học và bác sĩ loại bỏ lỗi nhập liệu hoặc sự cố máy đo.",
        visual: "statistics"
      },
      {
        eyebrow: "MỐT (Mo)",
        title: "Mốt (Mo): Giá trị có tần số xuất hiện nhiều nhất",
        body: "Mốt của mẫu số liệu là giá trị có tần số xuất hiện lớn nhất trong mẫu số liệu, kí hiệu là Mo. Một mẫu số liệu có thể có một mốt, có thể có nhiều hơn một mốt (đa mốt), hoặc không có mốt nếu tất cả các giá trị có tần số xuất hiện bằng nhau.",
        formula: "Mo = Giá trị có tần số lớn nhất",
        example: "Tìm mốt của mẫu số đo cỡ áo bán được: 38, 39, 40, 40, 40, 41, 42.\n• Cỡ 40 xuất hiện 3 lần, nhiều nhất trong mẫu.\n• Vậy mốt Mo = 40 (cỡ áo bán chạy nhất).",
        advanced: "Mẫu số liệu: 1, 2, 2, 3, 4, 4, 5 có mốt là bao nhiêu?\n→ Lời giải: Cả hai số 2 và 4 đều xuất hiện 2 lần (nhiều nhất). Mẫu số liệu này có hai mốt là Mo1 = 2 và Mo2 = 4.",
        tip: "Ứng dụng trong thương mại: Mốt được các chủ cửa hàng dùng để quyết định nhập mặt hàng nào có kích cỡ hay màu sắc được ưa chuộng nhất.",
        visual: "statistics"
      },
      {
        eyebrow: "KHOẢNG BIẾN THIÊN (R)",
        title: "Khoảng biến thiên R: Đo độ phân tán tổng thể",
        body: "Khoảng biến thiên R là hiệu giữa giá trị lớn nhất (x_max) và giá trị nhỏ nhất (x_min) trong mẫu số liệu: R = x_max − x_min. Khoảng biến thiên là đại lượng đơn giản nhất để đo mức độ phân tán của số liệu, nhưng rất dễ bị ảnh hưởng bởi giá trị bất thường.",
        formula: "R = x_max − x_min  (Khoảng biến thiên)",
        example: "Nhiệt độ cao nhất trong tuần là 35°C, thấp nhất là 21°C. Tính khoảng biến thiên nhiệt độ.\n• R = 35 − 21 = 14°C.\n• Độ chênh lệch nhiệt độ trong tuần là 14°C.",
        advanced: "So sánh mức độ phân tán của hai lớp: Lớp A có điểm từ 4 đến 9; Lớp B có điểm từ 6 đến 8.\n→ Lời giải: RA = 9 − 4 = 5; RB = 8 − 6 = 2. Lớp A có khoảng biến thiên lớn hơn, chứng tỏ điểm số lớp A phân tán rộng hơn và học sinh có học lực chênh lệch hơn lớp B.",
        tip: "Khoảng biến thiên càng nhỏ thì mẫu số liệu càng đồng đều và tập trung xung quanh giá trị trung tâm.",
        visual: "statistics"
      },
      {
        eyebrow: "SO SÁNH CÁC ĐẠI LƯỢNG",
        title: "Khi nào dùng số trung bình, khi nào dùng trung vị?",
        body: "Khi mẫu số liệu không có giá trị bất thường và phân bố tương đối đối xứng: Dùng số trung bình x̄ là tốt nhất vì nó tận dụng thông tin của tất cả các phần tử. Khi mẫu số liệu có chứa giá trị quá lớn hoặc quá nhỏ bất thường: Bắt buộc dùng trung vị Me làm đại diện vì trung vị không bị méo mó bởi ngoại lai.",
        formula: "Không có ngoại lai → Dùng x̄  |  Có giá trị bất thường → Dùng Me",
        example: "Thu nhập hàng tháng (triệu đồng) của 5 hộ gia đình: 8, 9, 10, 11, 200.\n• Số trung bình: x̄ = (8 + 9 + 10 + 11 + 200) / 5 = 238 / 5 = 47.6 triệu.\n• Trung vị: Me = 10 triệu.\n• Đại lượng nào đại diện đúng thực tế đời sống hơn? Rõ ràng trung vị Me = 10 triệu phản ánh đúng mức sống của đa số các hộ dân.",
        advanced: "Nếu cộng tất cả các giá trị của mẫu số liệu với một số thực c thì số trung bình và trung vị thay đổi thế nào?\n→ Lời giải: Cả số trung bình mới và trung vị mới đều tăng đúng bằng c: x̄_mới = x̄ + c; Me_mới = Me + c.",
        tip: "Câu hỏi nhận định sư phạm: Trong các cuộc điều tra về giá nhà hay thu nhập bình quân, các cơ quan thống kê uy tín luôn công bố giá TRUNG VỊ chứ không chỉ công bố số trung bình.",
        visual: "statistics"
      },
      {
        eyebrow: "TỔNG KẾT VÀ BẤY ĐỀ THI",
        title: "Chiến thuật xử lý câu trắc nghiệm Thống kê mô tả",
        body: "Các bẫy đề thi thống kê thường gặp: 1) Quên sắp xếp dãy số liệu trước khi tìm trung vị hoặc tứ phân vị; 2) Tính sai Q1, Q3 do gộp nhầm giá trị Q2 vào các nửa; 3) Quên nhân hệ số 1.5 trong công thức tìm giá trị bất thường (Q1 − 1.5ΔQ hoặc Q3 + 1.5ΔQ).",
        formula: "Bấm máy Casio: Mode 6 (Statistics) → 1-Variable để đọc x̄, Q1, Med, Q3 tức thì!",
        example: "Quy trình bấm máy Casio fx-580VN X: Bấm Mode 6 → chọn 1 (1-Variable) → Nhập toàn bộ dãy số liệu → Bấm OPTN → chọn 3 (1-Variable Calc) → Màn hình hiện đầy đủ x̄, Min, Q1, Med, Q3, Max.",
        advanced: "Mẫu số liệu 10 học sinh có x̄ = 7.5. Một học sinh thứ 11 được thêm vào có điểm 9.7. Điểm trung bình mới của cả 11 học sinh là bao nhiêu?\n→ Lời giải: Tổng điểm 10 bạn đầu = 10 · 7.5 = 75. Tổng điểm 11 bạn = 75 + 9.7 = 84.7. Điểm trung bình mới = 84.7 / 11 = 7.7.",
        tip: "Tận dụng máy tính cầm tay trong phòng thi: Nhập số liệu vào bảng thống kê của máy sẽ triệt tiêu 100% lỗi tính toán nhầm bằng tay.",
        visual: "statistics"
      }
    ]
  },
  {
    id: "quadratic-functions",
    chapterId: "chuong-6",
    chapterTitle: "Chương VI: Hàm số, đồ thị và tam thức bậc hai",
    lessonNumber: "Bài 11",
    title: "Hàm số bậc hai và tam thức bậc hai",
    shortTitle: "Hàm số bậc hai",
    description: "Đỉnh parabol, trục đối xứng, bảng biến thiên, định lý dấu tam thức bậc hai và bất phương trình.",
    duration: "15 phút",
    visual: "parabola",
    slides: [
      {
        eyebrow: "KHÁI NIỆM HÀM SỐ BẬC HAI",
        title: "Định nghĩa hàm số bậc hai y = ax² + bx + c (a ≠ 0)",
        body: "Hàm số bậc hai là hàm số được cho bởi công thức y = ax² + bx + c, trong đó a, b, c là các số thực và a ≠ 0. Tập xác định của hàm số bậc hai luôn là ℝ. Đồ thị của hàm số bậc hai là một đường cong parabol có bề lõm quay lên trên nếu a > 0 và quay xuống dưới nếu a < 0.",
        formula: "y = ax² + bx + c  (a ≠ 0)  ·  Tập xác định D = ℝ",
        example: "Xác định các hệ số a, b, c và bề lõm của parabol y = −2x² + 4x − 1.\n• Hệ số a = −2, b = 4, c = −1.\n• Vì a = −2 < 0 nên parabol có bề lõm quay xuống dưới (hình chữ ∩).",
        advanced: "Xác định parabol y = ax² + bx + 2 biết đồ thị đi qua hai điểm A(1; 5) và B(−1; 1).\n→ Lời giải: Thay A(1; 5): a(1)² + b(1) + 2 = 5 ⇔ a + b = 3. Thay B(−1; 1): a(−1)² + b(−1) + 2 = 1 ⇔ a − b = −1. Giải hệ: a = 1, b = 2. Vậy parabol là y = x² + 2x + 2.",
        tip: "Nhận biết nhanh: a > 0 thì parabol hình cái bát ngửa (đáy là điểm thấp nhất); a < 0 thì parabol hình cái bát úp (đỉnh là điểm cao nhất).",
        visual: "parabola"
      },
      {
        eyebrow: "TỌA ĐỘ ĐỈNH VÀ TRỤC ĐỐI XỨNG",
        title: "Tọa độ đỉnh I và phương trình trục đối xứng",
        body: "Đỉnh của parabol là điểm I(−b/(2a); −Δ/(4a)). Trục đối xứng của parabol là đường thẳng đứng có phương trình x = −b/(2a). Điểm đỉnh I luôn nằm trên trục đối xứng. Để tìm tung độ đỉnh yI, cách nhanh nhất là thay hoành độ xI = −b/(2a) vào phương trình hàm số: yI = f(−b/(2a)).",
        formula: "Đỉnh I(−b / (2a); yI)  ·  Trục đối xứng: x = −b / (2a)",
        example: "Tìm tọa độ đỉnh và trục đối xứng của parabol y = x² − 4x + 3.\n• Hoành độ đỉnh: xI = −b / (2a) = −(−4) / (2 · 1) = 4 / 2 = 2.\n• Tung độ đỉnh: yI = 2² − 4(2) + 3 = 4 − 8 + 3 = −1.\n• Tọa độ đỉnh là I(2; −1). Trục đối xứng là đường thẳng x = 2.",
        advanced: "Tìm parabol y = ax² + bx + c có đỉnh I(1; −4) và cắt trục tung tại điểm có tung độ bằng −3.\n→ Lời giải: Cắt trục tung tại (0; −3) ⇒ c = −3. Trục đối xứng x = −b/(2a) = 1 ⇔ b = −2a. Đi qua I(1; −4): a(1)² + b(1) − 3 = −4 ⇔ a + b = −1. Thay b = −2a ⇒ a − 2a = −1 ⇔ a = 1 ⇒ b = −2. Parabol là y = x² − 2x − 3.",
        tip: "Mẹo nhớ hoành độ đỉnh: Bằng nghiệm kép của phương trình bậc hai x = −b/(2a).",
        visual: "parabola"
      },
      {
        eyebrow: "BẢNG BIẾN THIÊN",
        title: "Bảng biến thiên và khoảng đồng biến, nghịch biến",
        body: "Trường hợp a > 0: Hàm số nghịch biến trên khoảng (−∞; −b/(2a)) và đồng biến trên khoảng (−b/(2a); +∞). Giá trị nhỏ nhất là y = −Δ/(4a) tại x = −b/(2a). Trường hợp a < 0: Hàm số đồng biến trên (−∞; −b/(2a)) và nghịch biến trên (−b/(2a); +∞). Giá trị lớn nhất là y = −Δ/(4a) tại x = −b/(2a).",
        formula: "a > 0: Giảm rồi Tăng (Min tại đỉnh)  ·  a < 0: Tăng rồi Giảm (Max tại đỉnh)",
        example: "Lập bảng biến thiên của hàm số y = −x² + 2x + 1.\n• Hệ số a = −1 < 0. Đỉnh I: xI = −2 / (2 · (−1)) = 1; yI = −1² + 2(1) + 1 = 2.\n• Hàm số đồng biến trên (−∞; 1) và nghịch biến trên (1; +∞).\n• Giá trị lớn nhất của hàm số bằng 2 đạt tại x = 1.",
        advanced: "Tìm m để hàm số y = (m − 2)x² − 2x + 3 đồng biến trên khoảng (1; +∞).\n→ Lời giải: Để hàm số đồng biến trên (1; +∞), trước hết parabol phải có bề lõm quay lên: a = m − 2 > 0 ⇔ m > 2. Hoành độ đỉnh xI = −(−2) / (2(m − 2)) = 1 / (m − 2) phải nằm bên trái hoặc bằng 1: 1 / (m − 2) ≤ 1 ⇔ m − 2 ≥ 1 ⇔ m ≥ 3. Kết hợp điều kiện: m ≥ 3.",
        tip: "Quy tắc đọc bảng biến thiên: Mũi tên đi xuống là nghịch biến (giảm), mũi tên đi lên là đồng biến (tăng).",
        visual: "parabola"
      },
      {
        eyebrow: "GIÁ TRỊ LỚN NHẤT VÀ NHỎ NHẤT TRÊN ĐOẠN",
        title: "Tìm GTLN và GTNN của hàm số bậc hai trên đoạn [α; β]",
        body: "Để tìm GTLN và GTNN của hàm số bậc hai trên đoạn [α; β]: 1) Tính hoành độ đỉnh x0 = −b/(2a); 2) Kiểm tra xem x0 có thuộc đoạn [α; β] hay không; 3) Tính giá trị của hàm số tại hai đầu mút f(α), f(β) và tại đỉnh f(x0) (nếu x0 ∈ [α; β]); 4) So sánh các giá trị đã tính để chọn số lớn nhất (Max) và số nhỏ nhất (Min).",
        formula: "Max / Min trên [α; β] nằm trong tập các giá trị { f(α); f(β); f(x0) }",
        example: "Tìm GTLN và GTNN của y = x² − 4x + 5 trên đoạn [0; 3].\n• Hoành độ đỉnh: x0 = −(−4)/(2·1) = 2. Nhận thấy 2 ∈ [0; 3].\n• Tính các giá trị: f(0) = 5; f(2) = 2² − 4(2) + 5 = 1; f(3) = 3² − 4(3) + 5 = 2.\n• So sánh: Giá trị nhỏ nhất là Min y = 1 (tại x = 2). Giá trị lớn nhất là Max y = 5 (tại x = 0).",
        advanced: "Tìm GTLN và GTNN của y = x² − 4x + 5 trên đoạn [3; 5].\n→ Lời giải: Đỉnh x0 = 2 không thuộc đoạn [3; 5]! Hàm số đồng biến trên [3; 5] vì a = 1 > 0 và x ≥ 2. Vậy Min y = f(3) = 2; Max y = f(5) = 5² − 4(5) + 5 = 10.",
        tip: "Bẫy điểm thi: Nếu hoành độ đỉnh KHÔNG THUỘC đoạn [α; β], tuyệt đối không được đưa giá trị đỉnh vào so sánh!",
        visual: "parabola"
      },
      {
        eyebrow: "ĐỊNH LÝ DẤU TAM THỨC BẬC HAI",
        title: "Định lý về dấu của tam thức bậc hai f(x) = ax² + bx + c",
        body: "Cho tam thức f(x) = ax² + bx + c (a ≠ 0). 1) Nếu Δ < 0: f(x) luôn CÙNG DẤU với hệ số a với mọi x ∈ ℝ. 2) Nếu Δ = 0: f(x) cùng dấu với a với mọi x ≠ −b/(2a). 3) Nếu Δ > 0: f(x) có hai nghiệm x1 < x2; f(x) TRÁI DẤU với a ở khoảng trong hai nghiệm (x1; x2) và CÙNG DẤU với a ở ngoài hai nghiệm.",
        formula: "Δ < 0: Luôn cùng dấu a  ·  Δ > 0: 'Trong trái - Ngoài cùng'",
        example: "Xét dấu tam thức f(x) = x² − 5x + 6.\n• Cho x² − 5x + 6 = 0 có hai nghiệm phân biệt: x1 = 2, x2 = 3.\n• Hệ số a = 1 > 0.\n• Theo quy tắc 'Trong trái - Ngoài cùng':\n  f(x) < 0 (trái dấu a) khi x ∈ (2; 3).\n  f(x) > 0 (cùng dấu a) khi x ∈ (−∞; 2) ∪ (3; +∞).",
        advanced: "Xét dấu tam thức g(x) = −x² + 2x − 3.\n→ Lời giải: Tính Δ' = 1² − (−1)(−3) = 1 − 3 = −2 < 0. Vì Δ' < 0 và a = −1 < 0, theo định lý thì g(x) < 0 với MỌI x ∈ ℝ.",
        tip: "Khẩu quyết bốn từ bất hủ của đại số 10: 'TRONG TRÁI - NGOÀI CÙNG' (trong khoảng hai nghiệm trái dấu với a, ngoài khoảng cùng dấu với a).",
        visual: "parabola"
      },
      {
        eyebrow: "BẤT PHƯƠNG TRÌNH BẬC HAI",
        title: "Phương pháp giải bất phương trình bậc hai một ẩn",
        body: "Giải bất phương trình ax² + bx + c > 0 (hoặc ≥ 0, < 0, ≤ 0): Bước 1: Tìm nghiệm của tam thức ax² + bx + c = 0. Bước 2: Dùng định lý 'Trong trái - Ngoài cùng' để vẽ bảng xét dấu trục số. Bước 3: Đọc tập nghiệm phù hợp với dấu của bất phương trình.",
        formula: "ax² + bx + c > 0 ⇔ Lấy khoảng ngoài nghiệm (nếu a > 0 và Δ > 0)",
        example: "Giải bất phương trình x² − 3x − 4 ≤ 0.\n• Bước 1: Cho x² − 3x − 4 = 0 có hai nghiệm: x1 = −1 và x2 = 4.\n• Bước 2: Hệ số a = 1 > 0. Dấu BPT là '≤ 0' (cần trái dấu với a hoặc bằng 0).\n• Bước 3: Lấy khoảng trong hai nghiệm kể cả hai đầu mút: Tập nghiệm S = [−1; 4].",
        advanced: "Giải bất phương trình: −2x² + 3x − 1 > 0.\n→ Lời giải: Đổi dấu nhân cả hai vế với −1: 2x² − 3x + 1 < 0. Nghiệm phương trình là x = 1/2 và x = 1. Hệ số a = 2 > 0, cần lấy khoảng trái dấu nên tập nghiệm là S = (1/2; 1).",
        tip: "Mẹo chuẩn hóa: Luôn biến đổi để hệ số a > 0 (bằng cách nhân hai vế với −1 và đổi chiều bất đẳng thức nếu a âm) trước khi đọc nghiệm để không bị nhầm dấu.",
        visual: "parabola"
      },
      {
        eyebrow: "BÀI TOÁN THAM SỐ m",
        title: "Tìm tham số m để tam thức luôn dương hoặc luôn âm trên ℝ",
        body: "Để tam thức f(x) = ax² + bx + c luôn mang một dấu trên toàn bộ tập số thực ℝ: (1) f(x) > 0 với mọi x ∈ ℝ ⇔ a > 0 và Δ < 0; (2) f(x) ≥ 0 với mọi x ∈ ℝ ⇔ a > 0 và Δ ≤ 0; (3) f(x) < 0 với mọi x ∈ ℝ ⇔ a < 0 và Δ < 0; (4) f(x) ≤ 0 với mọi x ∈ ℝ ⇔ a < 0 và Δ ≤ 0. Nếu hệ số a chứa tham số, bắt buộc phải xét riêng trường hợp a = 0.",
        formula: "f(x) > 0, ∀x ∈ ℝ ⇔ { a > 0; Δ < 0 }  ·  f(x) < 0, ∀x ∈ ℝ ⇔ { a < 0; Δ < 0 }",
        example: "Tìm m để tam thức f(x) = x² − 2mx + 4 luôn dương với mọi x ∈ ℝ.\n• f(x) > 0 với mọi x ∈ ℝ ⇔ a = 1 > 0 (luôn đúng) và Δ' < 0.\n• Δ' = (−m)² − 1 · 4 = m² − 4 < 0.\n• Giải BPT m² − 4 < 0: Ta được −2 < m < 2. Vậy m ∈ (−2; 2).",
        advanced: "Tìm m để bất phương trình (m − 1)x² + 2(m − 1)x + 2 > 0 nghiệm đúng với mọi x ∈ ℝ.\n→ Lời giải: TH1: a = m − 1 = 0 ⇔ m = 1. Khi đó BPT trở thành 0x² + 0x + 2 = 2 > 0 (luôn đúng với mọi x ∈ ℝ) ⇒ m = 1 thỏa mãn. TH2: m ≠ 1. Cần a = m − 1 > 0 ⇔ m > 1 và Δ' = (m − 1)² − 2(m − 1) < 0 ⇔ (m − 1)(m − 3) < 0 ⇔ 1 < m < 3. Kết hợp hai trường hợp: 1 ≤ m < 3.",
        tip: "Bẫy điểm 9–10: Nếu hệ số a chứa tham số m, quên xét trường hợp a = 0 sẽ bị mất ngay nửa số điểm của bài toán!",
        visual: "parabola"
      },
      {
        eyebrow: "TỔNG KẾT VÀ BẪY ĐỀ THI",
        title: "Chiến thuật xử lý câu trắc nghiệm Hàm số và Tam thức bậc hai",
        body: "Các bẫy đề thi kinh điển: 1) Nhầm công thức đỉnh x = −b/(2a) thành b/(2a); 2) Bấm máy giải BPT bậc hai lấy khoảng nghiệm mà quên đổi dấu ngoặc tròn sang ngoặc vuông khi có dấu bằng; 3) Quên xét trường hợp a = 0 khi giải bài toán tham số.",
        formula: "Bấm máy Casio: Mode A (Inequality) → chọn bậc 2 để giải bất phương trình trong 2 giây!",
        example: "Tìm tập nghiệm của BPT x² − 4x + 4 > 0.\n• Tam thức là (x − 2)². Vì (x − 2)² ≥ 0 với mọi x nên (x − 2)² > 0 khi và chỉ khi x − 2 ≠ 0 ⇔ x ≠ 2.\n• Tập nghiệm là S = ℝ \\ {2}.",
        advanced: "Một quả bóng được sút lên có quỹ đạo h(t) = −5t² + 20t (tính bằng mét, t tính bằng giây). Quả bóng đạt độ cao lớn nhất là bao nhiêu mét và sau bao lâu?\n→ Lời giải: Đây là hàm số bậc hai với a = −5 < 0. Đỉnh t = −20 / (2 · (−5)) = 2 giây. Độ cao lớn nhất h_max = h(2) = −5(4) + 20(2) = 20 mét.",
        tip: "Phương pháp CASIO: Bấm Mode A → 2 (bậc 2) để giải bất phương trình bậc hai, hoặc Mode 9-2-2 để tìm tọa độ đỉnh Max/Min của parabol cực nhanh.",
        visual: "parabola"
      }
    ]
  },
  {
    id: "analytic-geometry",
    chapterId: "chuong-7",
    chapterTitle: "Chương VII: Phương pháp tọa độ trong mặt phẳng",
    lessonNumber: "Bài 12",
    title: "Phương pháp tọa độ trong mặt phẳng",
    shortTitle: "Tọa độ Oxy",
    description: "Phương trình đường thẳng, khoảng cách, góc và phương trình đường tròn.",
    duration: "15 phút",
    visual: "coordinate",
    slides: [
      {
        eyebrow: "VECTƠ PHÁP TUYẾN VÀ CHỈ PHƯƠNG",
        title: "Vectơ pháp tuyến n và vectơ chỉ phương u của đường thẳng",
        body: "Vectơ chỉ phương u→ (khác 0→) có giá song song hoặc trùng với đường thẳng d. Vectơ pháp tuyến n→ (khác 0→) vuông góc với vectơ chỉ phương của đường thẳng d (tức n→ ⊥ u→ ⇔ n→ · u→ = 0). Nếu đường thẳng d có một vectơ chỉ phương u→ = (a; b) thì một vectơ pháp tuyến của d là n→ = (−b; a) hoặc n→ = (b; −a).",
        formula: "u→ = (a; b)  ⇔  n→ = (−b; a)  (vì a(−b) + ba = 0)",
        example: "Đường thẳng d có vectơ chỉ phương u→ = (2; 3). Tìm một vectơ pháp tuyến của d.\n• Đổi chỗ hai tọa độ và đổi dấu một tọa độ: n→ = (−3; 2) hoặc n→ = (3; −2).\n• Kiểm tra: u→ · n→ = 2(−3) + 3(2) = −6 + 6 = 0 (Đúng vuông góc).",
        advanced: "Đường thẳng d đi qua hai điểm A(1; 2) và B(4; 6). Tìm vectơ pháp tuyến của d.\n→ Lời giải: Vectơ chỉ phương AB→ = (4 − 1; 6 − 2) = (3; 4). Suy ra vectơ pháp tuyến của d là n→ = (−4; 3).",
        tip: "Quy tắc đảo tọa độ: Muốn đổi từ chỉ phương sang pháp tuyến: 'ĐỔI CHỖ VÀ ĐỔI DẤU MỘT VỊ TRÍ' (a; b) → (−b; a).",
        visual: "coordinate"
      },
      {
        eyebrow: "PHƯƠNG TRÌNH TỔNG QUÁT",
        title: "Phương trình tổng quát của đường thẳng: ax + by + c = 0",
        body: "Đường thẳng d đi qua điểm M0(x0; y0) và nhận n→ = (a; b) làm vectơ pháp tuyến có phương trình: a(x − x0) + b(y − y0) = 0. Khai triển rút gọn ta được phương trình tổng quát: ax + by + c = 0 (với c = −ax0 − by0 và a² + b² > 0).",
        formula: "a(x − x0) + b(y − y0) = 0  ⇔  ax + by + c = 0",
        example: "Viết phương trình tổng quát của đường thẳng d đi qua M(2; −1) và có VTPT n→ = (3; 4).\n• Phương trình: 3(x − 2) + 4(y − (−1)) = 0.\n• Khai triển: 3x − 6 + 4y + 4 = 0 ⇔ 3x + 4y − 2 = 0.",
        advanced: "Viết phương trình đường trung trực của đoạn thẳng AB với A(1; 3) và B(5; 1).\n→ Lời giải: Trung điểm I của AB là I((1+5)/2; (3+1)/2) = I(3; 2). Đường trung trực nhận AB→ = (4; −2) = 2(2; −1) làm VTPT. Phương trình: 2(x − 3) − 1(y − 2) = 0 ⇔ 2x − y − 4 = 0.",
        tip: "Nhìn nhanh VTPT: Cho phương trình 2x − 5y + 7 = 0 thì VTPT đọc ngay là các hệ số đứng trước x và y: n→ = (2; −5).",
        visual: "coordinate"
      },
      {
        eyebrow: "PHƯƠNG TRÌNH THAM SỐ",
        title: "Phương trình tham số của đường thẳng",
        body: "Đường thẳng d đi qua điểm M0(x0; y0) và nhận u→ = (u1; u2) làm vectơ chỉ phương có phương trình tham số: x = x0 + u1 · t và y = y0 + u2 · t (với tham số t ∈ ℝ). Mỗi giá trị cụ thể của t cho ta tọa độ của một điểm M(x; y) nằm trên đường thẳng d.",
        formula: "{ x = x0 + u1 · t ; y = y0 + u2 · t } (với t ∈ ℝ)",
        example: "Viết phương trình tham số của đường thẳng d đi qua A(1; 3) và có VTCP u→ = (2; −5).\n• Phương trình tham số: { x = 1 + 2t ; y = 3 − 5t } (t ∈ ℝ).\n• Với t = 1, ta được điểm M(3; −2) thuộc đường thẳng d.",
        advanced: "Chuyển phương trình tổng quát 2x − 3y + 6 = 0 sang phương trình tham số.\n→ Lời giải: VTPT n→ = (2; −3) ⇒ VTCP u→ = (3; 2). Chọn điểm thuộc đường thẳng: cho y = 0 ⇒ 2x + 6 = 0 ⇒ x = −3 ⇒ M(−3; 0). Phương trình tham số: { x = −3 + 3t ; y = 2t }.",
        tip: "Chuyển đổi tham số ↔ tổng quát: Muốn khử tham số t, nhân hai dòng rồi cộng trừ để triệt tiêu biến t là ra phương trình tổng quát.",
        visual: "coordinate"
      },
      {
        eyebrow: "VỊ TRÍ TƯƠNG ĐỐI HAI ĐƯỜNG THẲNG",
        title: "Xét vị trí tương đối: Cắt nhau, song song hay trùng nhau",
        body: "Cho hai đường thẳng d1: a1 x + b1 y + c1 = 0 và d2: a2 x + b2 y + c2 = 0. Tọa độ giao điểm là nghiệm của hệ hai phương trình. 1) Hệ có nghiệm duy nhất ⇔ d1 cắt d2 (a1/a2 ≠ b1/b2). 2) Hệ vô nghiệm ⇔ d1 // d2 (a1/a2 = b1/b2 ≠ c1/c2). 3) Hệ vô số nghiệm ⇔ d1 trùng d2 (a1/a2 = b1/b2 = c1/c2).",
        formula: "d1 // d2: a1/a2 = b1/b2 ≠ c1/c2  ·  d1 ⊥ d2: a1 a2 + b1 b2 = 0",
        example: "Xét vị trí tương đối của d1: 2x − y + 3 = 0 và d2: 4x − 2y + 6 = 0.\n• Tỉ số các hệ số: 2/4 = (−1)/(−2) = 3/6 = 1/2.\n• Cả ba tỉ số đều bằng nhau. Vậy hai đường thẳng d1 và d2 trùng nhau.",
        advanced: "Tìm m để hai đường thẳng d1: mx + y − 2 = 0 và d2: 4x + my + 4 = 0 song song với nhau.\n→ Lời giải: d1 // d2 ⇔ m/4 = 1/m ≠ −2/4. Từ m/4 = 1/m ⇔ m² = 4 ⇔ m = 2 hoặc m = −2. Thử lại: Với m = 2, tỉ số 2/4 = 1/2 ≠ −1/2 (Thỏa mãn song song). Với m = −2, tỉ số −2/4 = 1/(−2) = −2/4 (Trùng nhau, loại). Vậy m = 2.",
        tip: "Nhớ điều kiện vuông góc: Hai đường thẳng vuông góc khi và chỉ khi tích vô hướng hai VTPT bằng 0: a1 a2 + b1 b2 = 0.",
        visual: "coordinate"
      },
      {
        eyebrow: "KHOẢNG CÁCH TỪ ĐIỂM ĐẾN ĐƯỜNG THẲNG",
        title: "Công thức tính khoảng cách từ một điểm đến đường thẳng",
        body: "Khoảng cách từ điểm M0(x0; y0) đến đường thẳng d: ax + by + c = 0 được tính bằng công thức: Lấy trị tuyệt đối khi thay tọa độ điểm M0 vào vế trái của phương trình đường thẳng, rồi chia cho căn bậc hai của tổng bình phương hai hệ số a² + b².",
        formula: "d(M0, d) = |ax0 + by0 + c| / √(a² + b²)",
        example: "Tính khoảng cách từ điểm M(1; 2) đến đường thẳng d: 3x + 4y − 1 = 0.\n• Tử số: |3(1) + 4(2) − 1| = |3 + 8 − 1| = |10| = 10.\n• Mẫu số: √(3² + 4²) = √(9 + 16) = √25 = 5.\n• Khoảng cách: d(M, d) = 10 / 5 = 2.",
        advanced: "Tính khoảng cách giữa hai đường thẳng song song d1: 3x − 4y + 5 = 0 và d2: 3x − 4y − 10 = 0.\n→ Lời giải: Chọn điểm A(1; 2) thuộc d1 (3(1) − 4(2) + 5 = 0). Khoảng cách giữa 2 đường thẳng là d(A, d2) = |3(1) − 4(2) − 10| / √(3² + (−4)²) = |−15| / 5 = 3.",
        tip: "Lưu ý sống còn: Phải đưa phương trình đường thẳng về DẠNG TỔNG QUÁT ax + by + c = 0 trước khi áp dụng công thức khoảng cách!",
        visual: "coordinate"
      },
      {
        eyebrow: "GÓC GIỮA HAI ĐƯỜNG THẲNG",
        title: "Công thức tính cosin của góc giữa hai đường thẳng",
        body: "Góc giữa hai đường thẳng d1 và d2 luôn là một góc không tù: 0° ≤ φ ≤ 90°. Cosin của góc giữa hai đường thẳng bằng trị tuyệt đối cosin của góc giữa hai vectơ pháp tuyến (để đảm bảo kết quả luôn không âm).",
        formula: "cos φ = |a1 a2 + b1 b2| / (√(a1² + b1²) · √(a2² + b2²))  (0° ≤ φ ≤ 90°)",
        example: "Tính góc giữa d1: x + 2y − 3 = 0 và d2: 2x − y + 5 = 0.\n• n1→ = (1; 2) và n2→ = (2; −1).\n• Tử số: |1(2) + 2(−1)| = |2 − 2| = 0.\n• cos φ = 0 ⇒ Góc giữa hai đường thẳng bằng 90° (hai đường thẳng vuông góc).",
        advanced: "Tìm góc giữa hai đường thẳng d1: x − y + 1 = 0 và d2: x + (2 − √3)y − 4 = 0.\n→ Lời giải: Áp dụng công thức tính ra cos φ = √3/2 ⇒ φ = 30°.",
        tip: "Dấu trị tuyệt đối ở tử số: Bắt buộc phải có dấu trị tuyệt đối |a1 a2 + b1 b2| vì góc giữa hai đường thẳng không bao giờ vượt quá 90°.",
        visual: "coordinate"
      },
      {
        eyebrow: "PHƯƠNG TRÌNH ĐƯỜNG TRÒN",
        title: "Phương trình đường tròn tâm I(a; b) bán kính R",
        body: "Đường tròn tâm I(a; b) bán kính R có phương trình chính tắc: (x − a)² + (y − b)² = R². Dạng khai triển tổng quát: x² + y² − 2ax − 2by + c = 0 với điều kiện a² + b² − c > 0. Khi đó tâm là I(a; b) và bán kính R = √(a² + b² − c).",
        formula: "(x − a)² + (y − b)² = R²  ·  Dạng khai triển: R = √(a² + b² − c)",
        example: "Tìm tâm và bán kính của đường tròn (C): (x − 2)² + (y + 3)² = 16.\n• Tâm I(2; −3).\n• Bán kính: R = √16 = 4.",
        advanced: "Phương trình x² + y² − 4x + 6y − 12 = 0 có là đường tròn không? Tìm tâm và bán kính.\n→ Lời giải: a = −4 / (−2) = 2; b = 6 / (−2) = −3; c = −12. Tính a² + b² − c = 2² + (−3)² − (−12) = 4 + 9 + 12 = 25 > 0. Đây là đường tròn tâm I(2; −3) và bán kính R = √25 = 5.",
        tip: "Cách tìm tâm từ dạng khai triển: Lấy hệ số đứng trước x chia cho −2 được hoành độ a, lấy hệ số đứng trước y chia cho −2 được tung độ b.",
        visual: "coordinate"
      },
      {
        eyebrow: "TIẾP TUYẾN CỦA ĐƯỜNG TRÒN",
        title: "Phương trình tiếp tuyến của đường tròn tại một điểm",
        body: "Tiếp tuyến của đường tròn (C) tâm I(a; b) tại điểm M0(x0; y0) thuộc đường tròn là đường thẳng đi qua M0 và vuông góc với bán kính IM0, do đó nhận IM0→ = (x0 − a; y0 − b) làm vectơ pháp tuyến. Phương trình tiếp tuyến: (x0 − a)(x − x0) + (y0 − b)(y − y0) = 0.",
        formula: "Tiếp tuyến tại M0: IM0→ là vectơ pháp tuyến",
        example: "Viết phương trình tiếp tuyến của đường tròn (C): (x − 1)² + (y − 2)² = 25 tại điểm M(4; 6).\n• Tâm I(1; 2). Vectơ pháp tuyến IM→ = (4 − 1; 6 − 2) = (3; 4).\n• Phương trình tiếp tuyến: 3(x − 4) + 4(y − 6) = 0 ⇔ 3x + 4y − 36 = 0.",
        advanced: "Đường thẳng d: ax + by + c = 0 tiếp xúc với đường tròn tâm I bán kính R khi và chỉ khi nào?\n→ Lời giải: Đường thẳng tiếp xúc với đường tròn khi và chỉ khi khoảng cách từ tâm I đến đường thẳng d bằng đúng bán kính R: d(I, d) = R.",
        tip: "Điều kiện tiếp xúc d(I, d) = R là chìa khóa để giải quyết mọi bài toán viết phương trình tiếp tuyến song song hoặc vuông góc với đường thẳng cho trước.",
        visual: "coordinate"
      }
    ]
  },
  {
    id: "combinatorics",
    chapterId: "chuong-8",
    chapterTitle: "Chương VIII: Đại số tổ hợp",
    lessonNumber: "Bài 13",
    title: "Quy tắc đếm, hoán vị, chỉnh hợp và tổ hợp",
    shortTitle: "Đại số tổ hợp",
    description: "Quy tắc cộng, quy tắc nhân, phân biệt hoán vị, chỉnh hợp và tổ hợp.",
    duration: "15 phút",
    visual: "combinatorics",
    slides: [
      {
        eyebrow: "QUY TẮC CỘNG",
        title: "Quy tắc cộng: Phân chia các phương án độc lập",
        body: "Một công việc có thể được hoàn thành bởi một trong hai phương án A hoặc B. Phương án A có m cách thực hiện, phương án B có n cách thực hiện (hai phương án không trùng lặp cách nào). Khi đó, công việc có thể được hoàn thành bằng: m + n cách. Từ khóa logic: 'HOẶC' (làm theo cách này thì không làm cách kia).",
        formula: "Công việc = Phương án 1 HOẶC Phương án 2  ⇒  Số cách = m + n",
        example: "Trên bàn có 5 quyển sách Toán khác nhau và 6 quyển sách Văn khác nhau. Có bao nhiêu cách chọn một quyển sách để đọc?\n• Chọn sách Toán: 5 cách.\n• Chọn sách Văn: 6 cách.\n• Đây là hai phương án độc lập: Tổng số cách chọn 1 quyển sách là: 5 + 6 = 11 cách.",
        advanced: "Một trường có 20 giáo viên dạy Toán, 15 giáo viên dạy Lý và 5 giáo viên dạy được cả hai môn. Cần chọn 1 giáo viên phụ trách đội tuyển STEM. Có bao nhiêu cách?\n→ Lời giải: Áp dụng quy tắc cộng có phần giao: n(T ∪ L) = n(T) + n(L) − n(T ∩ L) = 20 + 15 − 5 = 30 cách.",
        tip: "Phân biệt then chốt: Dùng quy tắc cộng khi mỗi phương án độc lập đều ĐÃ HOÀN THÀNH trọn vẹn yêu cầu bài toán.",
        visual: "combinatorics"
      },
      {
        eyebrow: "QUY TẮC NHÂN",
        title: "Quy tắc nhân: Thực hiện công việc qua nhiều công đoạn liên tiếp",
        body: "Một công việc phải trải qua hai công đoạn liên tiếp 1 và 2. Công đoạn 1 có m cách thực hiện; ứng với mỗi cách của công đoạn 1, có n cách thực hiện công đoạn 2. Khi đó toàn bộ công việc có: m · n cách hoàn thành. Từ khóa logic: 'VÀ' (bắt buộc phải làm lần lượt từng bước liên tiếp).",
        formula: "Công việc = Công đoạn 1 VÀ Công đoạn 2  ⇒  Số cách = m · n",
        example: "Bạn Lan có 4 chiếc áo sơ mi khác nhau và 3 chiếc chân váy khác nhau. Hỏi Lan có bao nhiêu cách chọn một bộ trang phục (gồm 1 áo và 1 váy)?\n• Công đoạn 1: Chọn áo có 4 cách.\n• Công đoạn 2: Chọn váy có 3 cách.\n• Số cách phối một bộ trang phục hoàn chỉnh: 4 · 3 = 12 cách.",
        advanced: "Từ các chữ số {1, 2, 3, 4, 5}, có thể lập được bao nhiêu số tự nhiên có 3 chữ số đôi một khác nhau?\n→ Lời giải: Gọi số cần lập là abc̄. Chọn a: 5 cách. Chọn b (khác a): 4 cách. Chọn c (khác a, b): 3 cách. Theo quy tắc nhân, có 5 · 4 · 3 = 60 số.",
        tip: "Phân biệt Quy tắc cộng vs Quy tắc nhân: Làm xong 1 bước mà công việc ĐÃ XONG thì CỘNG (+); nếu mới XONG MỘT NỬA và phải làm tiếp bước sau thì NHÂN (·)!",
        visual: "combinatorics"
      },
      {
        eyebrow: "SƠ ĐỒ CÂY",
        title: "Sơ đồ cây: Trực quan hóa các khả năng lựa chọn",
        body: "Sơ đồ cây là hình vẽ phân nhánh hình cây mô tả trực quan tất cả các khả năng xảy ra của một chuỗi hành động. Gốc cây biểu thị điểm xuất phát, mỗi nhánh biểu thị một lựa chọn, và các ngọn cây ở cuối cùng biểu thị từng kết quả hoàn chỉnh.",
        formula: "Số ngọn cây ở hàng cuối = Tổng số cách lựa chọn",
        example: "Gieo một đồng xu cân đối 2 lần liên tiếp. Vẽ sơ đồ cây xác định các kết quả có thể xảy ra.\n• Lần 1: Có 2 nhánh S (Sấp) và N (Ngửa).\n• Lần 2: Từ mỗi nhánh của lần 1, lại tách thành 2 nhánh S và N.\n• Kết quả cuối cùng: 4 ngọn cây: {SS, SN, NS, NN}.",
        advanced: "Có bao nhiêu đường đi từ đỉnh A đến đỉnh C qua đỉnh B nếu có 3 con đường từ A đến B và 4 con đường từ B đến C?\n→ Lời giải: Theo sơ đồ cây và quy tắc nhân: 3 · 4 = 12 đường đi.",
        tip: "Sơ đồ cây rất hữu ích khi số lượng trường hợp nhỏ và bài toán có các điều kiện ràng buộc phức tạp.",
        visual: "combinatorics"
      },
      {
        eyebrow: "HOÁN VỊ (Pn)",
        title: "Hoán vị của n phần tử: Sắp xếp thứ tự tất cả n đối tượng",
        body: "Một hoán vị của n phần tử là một cách sắp xếp có thứ tự n phần tử đó vào n vị trí khác nhau. Số các hoán vị của n phần tử được kí hiệu là P_n và tính bằng giai thừa của n: P_n = n! = n · (n − 1) · (n − 2) · ... · 2 · 1. Quy ước: 0! = 1.",
        formula: "P_n = n! = n(n − 1)(n − 2)...1  ·  0! = 1",
        example: "Có bao nhiêu cách xếp 5 học sinh thành một hàng dọc?\n• Mỗi cách xếp là một hoán vị của 5 học sinh vào 5 vị trí hàng dọc.\n• Số cách xếp: P5 = 5! = 5 · 4 · 3 · 2 · 1 = 120 cách.",
        advanced: "Xếp 5 học sinh gồm 3 nam và 2 nữ thành một hàng dọc sao cho 2 bạn nữ luôn đứng cạnh nhau. Có bao nhiêu cách?\n→ Lời giải: Phương pháp 'buộc phần tử': Gom 2 bạn nữ thành 1 khối X. Khối X có 2! = 2 cách xếp hai bạn nữ với nhau. Bây giờ xếp khối X cùng với 3 bạn nam (tổng cộng 4 đối tượng): có 4! = 24 cách. Theo quy tắc nhân: 2! · 4! = 2 · 24 = 48 cách.",
        tip: "Phương pháp 'Buộc phần tử': Cứ bài toán yêu cầu 'luôn đứng cạnh nhau' thì buộc các đối tượng đó lại thành 1 phần tử duy nhất!",
        visual: "combinatorics"
      },
      {
        eyebrow: "CHỈNH HỢP (A_n^k)",
        title: "Chỉnh hợp chập k của n phần tử: Chọn k và xếp thứ tự",
        body: "Cho tập hợp có n phần tử (1 ≤ k ≤ n). Một chỉnh hợp chập k của n phần tử là một cách chọn ra k phần tử và sắp xếp k phần tử đó vào k vị trí có thứ tự. Số chỉnh hợp chập k của n phần tử là: A_n^k = n! / (n − k)! = n · (n − 1) · ... · (n − k + 1).",
        formula: "A_n^k = n! / (n − k)!  (Chọn k phần tử CÓ XẾP THỨ TỰ)",
        example: "Một lớp có 40 học sinh. Cần bầu ra một ban cán sự gồm: 1 Lớp trưởng, 1 Lớp phó và 1 Bí thư. Có bao nhiêu cách chọn?\n• Chọn 3 bạn từ 40 bạn và gán vào 3 chức vụ khác nhau (có thứ tự phân biệt chức vụ).\n• Số cách chọn: A_40^3 = 40 · 39 · 38 = 59.280 cách.",
        advanced: "Từ các chữ số 1, 2, 3, 4, 5, 6, 7, có thể lập được bao nhiêu số tự nhiên có 4 chữ số khác nhau?\n→ Lời giải: Chọn 4 chữ số từ 7 chữ số và xếp thứ tự vào 4 vị trí: A_7^4 = 7 · 6 · 5 · 4 = 840 số.",
        tip: "Dấu hiệu nhận biết Chỉnh hợp: Có chọn ra k phần tử VÀ CÓ PHÂN BIỆT THỨ TỰ (như chức vụ lớp trưởng/phó, chữ số hàng chục/đơn vị, giải nhất/nhì/ba).",
        visual: "combinatorics"
      },
      {
        eyebrow: "TỔ HỢP (C_n^k)",
        title: "Tổ hợp chập k của n phần tử: Chỉ chọn nhóm, không phân biệt thứ tự",
        body: "Cho tập hợp có n phần tử (0 ≤ k ≤ n). Một tổ hợp chập k của n phần tử là một tập hợp con gồm k phần tử lấy từ n phần tử đó (không phân biệt thứ tự sắp xếp). Số tổ hợp chập k của n phần tử là: C_n^k = n! / [k! · (n − k)!]. Tính chất đối xứng: C_n^k = C_n^(n−k).",
        formula: "C_n^k = n! / (k!(n − k)!) = A_n^k / k!  ·  C_n^k = C_n^(n−k)",
        example: "Một đội thanh niên tình nguyện có 10 người. Cần chọn một nhóm 3 người đi hỗ trợ điểm thi. Có bao nhiêu cách chọn?\n• Chọn 3 người không phân biệt chức vụ hay thứ tự.\n• Số cách chọn: C_10^3 = (10 · 9 · 8) / (3 · 2 · 1) = 720 / 6 = 120 cách.",
        advanced: "Một hộp có 6 bi đỏ và 4 bi xanh. Có bao nhiêu cách chọn 4 viên bi sao cho có đúng 2 bi đỏ và 2 bi xanh?\n→ Lời giải: Công đoạn 1: Chọn 2 bi đỏ từ 6 bi đỏ: C_6^2 = 15 cách. Công đoạn 2: Chọn 2 bi xanh từ 4 bi xanh: C_4^2 = 6 cách. Theo quy tắc nhân: 15 · 6 = 90 cách.",
        tip: "Tính chất đối xứng kỳ diệu: Chọn k người để đi làm thì cũng tương đương với việc chọn (n − k) người ở lại: C_n^k = C_n^(n−k). Ví dụ C_10^8 = C_10^2 = 45.",
        visual: "combinatorics"
      },
      {
        eyebrow: "PHÂN BIỆT BẢN CHẤT",
        title: "Bảng so sánh cốt lõi: Khi nào dùng Chỉnh hợp, khi nào dùng Tổ hợp?",
        body: "Sự khác biệt duy nhất giữa Chỉnh hợp và Tổ hợp nằm ở yếu tố: CÓ THỨ TỰ HAY KHÔNG. Chỉnh hợp: Chọn k phần tử và hoán đổi vị trí thì sinh ra phương án MỚI (chức vụ, số tự nhiên, xếp ghế). Tổ hợp: Chọn k phần tử nhưng hoán đổi vị trí thì phương án VẪN NHƯ CŨ (nhóm người, tập con, bàn tay bài, tam giác từ các đỉnh).",
        formula: "Có phân biệt thứ tự → Dùng CHỈNH HỢP  |  Không phân biệt thứ tự → Dùng TỔ HỢP",
        example: "Chọn 2 học sinh từ 30 học sinh:\n• Nếu chọn làm Lớp trưởng và Lớp phó ⇒ CHỈNH HỢP: A_30^2 = 870 cách.\n• Nếu chọn 2 bạn cùng đi quét sân ⇒ TỔ HỢP: C_30^2 = 435 cách (bằng đúng một nửa vì không phân biệt ai trước ai sau).",
        advanced: "Cho 10 điểm phân biệt trên mặt phẳng không có 3 điểm nào thẳng hàng. Có thể tạo được bao nhiêu vectơ khác 0 và bao nhiêu đoạn thẳng từ 10 điểm đó?\n→ Lời giải: Vectơ có phân biệt điểm đầu và cuối ⇒ A_10^2 = 90 vectơ. Đoạn thẳng không phân biệt thứ tự hai đầu mút ⇒ C_10^2 = 45 đoạn thẳng.",
        tip: "Câu thần chú phòng thi: Đổi chỗ 2 phần tử mà có tạo ra kết quả mới không? Có thì Chỉnh hợp (A), Không thì Tổ hợp (C)!",
        visual: "combinatorics"
      },
      {
        eyebrow: "TỔNG KẾT VÀ BẪY ĐỀ THI",
        title: "Chiến thuật giải bài toán đếm: Phương pháp phần bù",
        body: "Khi bài toán yêu cầu đếm số phương án thỏa mãn điều kiện phức tạp chứa các từ khóa 'có ít nhất một', 'không đồng thời': Phương pháp phần bù giúp giải quyết nhanh gấp 3 lần: Số cách thỏa mãn = Tổng số cách tùy ý − Số cách vi phạm điều kiện.",
        formula: "Số cách cần tìm = Tổng số cách chọn tùy ý − Số cách phần bù",
        example: "Một tổ có 6 nam và 4 nữ. Chọn ngẫu nhiên 3 người. Có bao nhiêu cách chọn sao cho có ít nhất một bạn nữ?\n• Tổng số cách chọn 3 người tùy ý từ 10 người: C_10^3 = 120 cách.\n• Phần bù (không có bạn nữ nào, tức chọn cả 3 bạn nam): C_6^3 = 20 cách.\n• Số cách có ít nhất một nữ: 120 − 20 = 100 cách.",
        advanced: "Bấm máy Casio tính chỉnh hợp và tổ hợp: Phím nPr (Shift nhân) để tính Chỉnh hợp A_n^k; Phím nCr (Shift chia) để tính Tổ hợp C_n^k. Ví dụ bấm 10 Shift ÷ 3 = 120.",
        tip: "Chiến thuật nhận diện: Cứ thấy cụm từ 'CÓ ÍT NHẤT MỘT' thì 90% nên nghĩ ngay đến phương pháp phần bù!",
        visual: "combinatorics"
      }
    ]
  },
  {
    id: "probability",
    chapterId: "chuong-9",
    chapterTitle: "Chương IX: Biến cố và định nghĩa cổ điển của xác suất",
    lessonNumber: "Bài 14",
    title: "Biến cố và định nghĩa cổ điển của xác suất",
    shortTitle: "Xác suất cổ điển",
    description: "Phép thử, không gian mẫu, biến cố, công thức xác suất cổ điển và quy tắc biến cố đối.",
    duration: "15 phút",
    visual: "probability",
    slides: [
      {
        eyebrow: "PHÉP THỬ VÀ KHÔNG GIAN MẪU",
        title: "Phép thử ngẫu nhiên và không gian mẫu (Ω)",
        body: "Phép thử ngẫu nhiên là một thí nghiệm, hành động mà kết quả của nó không thể đoán trước được nhưng ta biết trước tập hợp tất cả các kết quả có thể xảy ra. Không gian mẫu (kí hiệu là Ω) là tập hợp tất cả các kết quả có thể xảy ra của phép thử. Số phần tử của không gian mẫu kí hiệu là n(Ω) hoặc |Ω|.",
        formula: "Ω = Tập tất cả các kết quả có thể  ·  n(Ω) = Số phần tử của Ω",
        example: "Phép thử gieo một con xúc xắc 6 mặt cân đối và đồng chất.\n• Các kết quả có thể xảy ra: xuất hiện mặt 1, 2, 3, 4, 5, 6 chấm.\n• Không gian mẫu: Ω = {1; 2; 3; 4; 5; 6}.\n• Số phần tử của không gian mẫu: n(Ω) = 6.",
        advanced: "Gieo đồng thời hai con xúc xắc 6 mặt. Tính số phần tử của không gian mẫu n(Ω).\n→ Lời giải: Con xúc xắc thứ nhất có 6 khả năng, con xúc xắc thứ hai có 6 khả năng. Theo quy tắc nhân: n(Ω) = 6 · 6 = 36.",
        tip: "Mỗi phần tử của không gian mẫu tương ứng với một kết quả sơ cấp duy nhất và không thể chia nhỏ hơn nữa.",
        visual: "probability"
      },
      {
        eyebrow: "KHÁI NIỆM BIẾN CỐ",
        title: "Biến cố là tập con của không gian mẫu",
        body: "Biến cố A liên quan đến phép thử là một tập hợp con của không gian mẫu (A ⊂ Ω). Biến cố xảy ra khi kết quả của phép thử là một phần tử thuộc A. Biến cố chắc chắn là chính không gian mẫu Ω (luôn xảy ra). Biến cố không thể là tập rỗng ∅ (không bao giờ xảy ra).",
        formula: "A ⊂ Ω  ·  Biến cố chắc chắn: Ω  ·  Biến cố không thể: ∅",
        example: "Gieo xúc xắc 6 mặt, xét biến cố A: “Xuất hiện mặt có số chấm là số chẵn”.\n• Các kết quả thuận lợi cho A: {2; 4; 6}.\n• Tập hợp A = {2; 4; 6} là một tập con của Ω = {1; 2; 3; 4; 5; 6}.\n• Số kết quả thuận lợi: n(A) = 3.",
        advanced: "Gieo hai con xúc xắc, biến cố B: “Tổng số chấm xuất hiện bằng 7”. Liệt kê các kết quả thuận lợi.\n→ Lời giải: B = {(1; 6), (2; 5), (3; 4), (4; 3), (5; 2), (6; 1)}. Số kết quả thuận lợi là n(B) = 6.",
        tip: "Kết quả thuận lợi cho A là những kết quả của phép thử làm cho biến cố A xảy ra.",
        visual: "probability"
      },
      {
        eyebrow: "ĐỊNH NGHĨA CỔ ĐIỂN CỦA XÁC SUẤT",
        title: "Công thức xác suất cổ điển: Tỉ số kết quả thuận lợi trên tổng số kết quả",
        body: "Giả sử các kết quả của phép thử có khả năng xảy ra như nhau (đồng khả năng). Xác suất của biến cố A, kí hiệu là P(A), bằng số kết quả thuận lợi cho A chia cho tổng số phần tử của không gian mẫu: P(A) = n(A) / n(Ω).",
        formula: "P(A) = n(A) / n(Ω)  (với n(Ω) > 0)",
        example: "Gieo một con xúc xắc cân đối. Tính xác suất xuất hiện mặt số lẻ.\n• Không gian mẫu: n(Ω) = 6.\n• Biến cố A: {1; 3; 5} ⇒ n(A) = 3.\n• Xác suất: P(A) = n(A) / n(Ω) = 3 / 6 = 1/2 = 0.5 (50%).",
        advanced: "Một hộp chứa 5 viên bi đỏ và 3 viên bi xanh. Lấy ngẫu nhiên 2 viên bi. Tính xác suất để lấy được 2 viên bi đỏ.\n→ Lời giải: Số cách chọn 2 viên bi từ 8 viên: n(Ω) = C_8^2 = 28. Số cách chọn 2 viên bi đỏ từ 5 viên đỏ: n(A) = C_5^2 = 10. Xác suất: P(A) = 10 / 28 = 5/14 ≈ 0.357.",
        tip: "Công thức cổ điển chỉ áp dụng được khi các kết quả sơ cấp có tính chất 'đồng khả năng' (như xúc xắc cân đối, bốc thăm ngẫu nhiên).",
        visual: "probability"
      },
      {
        eyebrow: "TÍNH CHẤT CỦA XÁC SUẤT",
        title: "Các tính chất nền tảng của xác suất",
        body: "Các tính chất chuẩn mực của xác suất: 1) Xác suất của một biến cố bất kỳ luôn nằm trong đoạn từ 0 đến 1: 0 ≤ P(A) ≤ 1. 2) Xác suất của biến cố chắc chắn luôn bằng 1: P(Ω) = 1. 3) Xác suất của biến cố không thể luôn bằng 0: P(∅) = 0.",
        formula: "0 ≤ P(A) ≤ 1  ·  P(Ω) = 1  ·  P(∅) = 0",
        example: "Gieo xúc xắc 6 mặt, tính xác suất biến cố 'Xuất hiện mặt 8 chấm'.\n• Không thể xuất hiện mặt 8 chấm vì xúc xắc chỉ có từ 1 đến 6 chấm.\n• Đây là biến cố không thể: P = 0.",
        advanced: "Học sinh tính ra xác suất P(A) = 1.25 hoặc P(A) = −0.2. Kết quả này đúng hay sai?\n→ Lời giải: Chắc chắn SAI 100% vì xác suất của mọi biến cố bắt buộc phải thuộc đoạn [0; 1].",
        tip: "Quy tắc tự kiểm tra: Tính xong xác suất nếu thấy kết quả nhỏ hơn 0 hoặc lớn hơn 1 thì lập tức rà soát lại phép tính!",
        visual: "probability"
      },
      {
        eyebrow: "BIẾN CỐ ĐỐI",
        title: "Biến cố đối (Ā) và định lý tổng xác suất bằng 1",
        body: "Biến cố đối của A, kí hiệu là Ā (hoặc ¬A), là biến cố 'A không xảy ra'. Tập hợp Ā gồm tất cả các kết quả của không gian mẫu không thuộc A: Ā = Ω \\ A. Vì A và Ā xung khắc và A ∪ Ā = Ω, tổng xác suất luôn bằng 1: P(A) + P(Ā) = 1. Suy ra: P(A) = 1 − P(Ā).",
        formula: "P(Ā) = 1 − P(A)  ⇔  P(A) = 1 − P(Ā)",
        example: "Xác suất bắn trúng mục tiêu của một vận động viên là 0.85. Tính xác suất bắn trượt.\n• Biến cố trượt là biến cố đối của biến cố trúng: P(trượt) = 1 − P(trúng) = 1 − 0.85 = 0.15 (15%).",
        advanced: "Gieo một đồng xu 3 lần. Tính xác suất để có ít nhất một lần xuất hiện mặt ngửa.\n• Không gian mẫu: n(Ω) = 2³ = 8.\n• Biến cố đối Ā: 'Không có lần nào xuất hiện mặt ngửa' (tức cả 3 lần đều sấp: {SSS}) ⇒ n(Ā) = 1.\n• P(Ā) = 1/8.\n• Xác suất cần tìm: P(A) = 1 − P(Ā) = 1 − 1/8 = 7/8.",
        tip: "Khẩu quyết vàng: Cứ thấy cụm từ 'CÓ ÍT NHẤT MỘT' thì 90% trường hợp tính qua biến cố đối P(A) = 1 − P(Ā) sẽ nhanh và tránh sót trường hợp!",
        visual: "probability"
      },
      {
        eyebrow: "KỸ THUẬT DÙNG TỔ HỢP TÍNH XÁC SUẤT",
        title: "Bài toán bốc bi, chọn người kết hợp đại số tổ hợp",
        body: "Trong hầu hết các bài toán xác suất lớp 10, ta dùng tổ hợp C_n^k để tính số phần tử: n(Ω) là số cách chọn k đối tượng từ tổng thể n đối tượng tùy ý. n(A) là số cách chọn k đối tượng thỏa mãn điều kiện bài toán (phối hợp quy tắc nhân và quy tắc cộng).",
        formula: "P(A) = [ C_n1^k1 · C_n2^k2 ] / C_n^k",
        example: "Một hộp có 4 bi đỏ và 6 bi xanh. Lấy ngẫu nhiên 3 viên bi. Tính xác suất để lấy được 1 bi đỏ và 2 bi xanh.\n• Số cách lấy 3 viên bi từ 10 viên: n(Ω) = C_10^3 = 120.\n• Số cách lấy 1 bi đỏ và 2 bi xanh: n(A) = C_4^1 · C_6^2 = 4 · 15 = 60.\n• Xác suất: P(A) = 60 / 120 = 1/2 = 0.5.",
        advanced: "Cũng với hộp trên, tính xác suất lấy được 3 viên bi cùng màu.\n→ Lời giải: Biến cố 'cùng màu' gồm 2 trường hợp: 3 bi đỏ hoặc 3 bi xanh. n(B) = C_4^3 + C_6^3 = 4 + 20 = 24. P(B) = 24 / 120 = 1/5 = 0.2.",
        tip: "Cùng màu nghĩa là hoặc toàn đỏ HOẶC toàn xanh nên ta dùng quy tắc CỘNG giữa hai trường hợp.",
        visual: "probability"
      },
      {
        eyebrow: "ỨNG DỤNG THỰC TẾ",
        title: "Xác suất trong đời sống: Kiểm tra chất lượng và bảo hiểm",
        body: "Xác suất là công cụ toán học tối quan trọng trong việc đánh giá rủi ro, kiểm định chất lượng sản phẩm (KCS) trong nhà máy, tính toán phí bảo hiểm và dự báo thị trường. Biết xác suất lỗi của linh kiện giúp công ty tối ưu hóa chi phí bảo hành và nâng cao uy tín.",
        formula: "Tỉ lệ lỗi thực tế = Số sản phẩm lỗi / Tổng số sản phẩm kiểm tra",
        example: "Một lô hàng có 100 sản phẩm, trong đó có 5 sản phẩm lỗi. Kiểm tra ngẫu nhiên 1 sản phẩm. Xác suất sản phẩm đạt chuẩn là bao nhiêu?\n• Số sản phẩm đạt chuẩn: 100 − 5 = 95.\n• Xác suất đạt chuẩn: P = 95 / 100 = 0.95 (95%).",
        advanced: "Nếu kiểm tra ngẫu nhiên 2 sản phẩm trong lô hàng trên, tính xác suất để cả 2 sản phẩm đều đạt chuẩn.\n→ Lời giải: n(Ω) = C_100^2 = 4950. n(A) = C_95^2 = 4465. P(A) = 4465 / 4950 ≈ 0.902 (90.2%).",
        tip: "Mối liên hệ: Xác suất lý thuyết giúp dự đoán tần suất xuất hiện của sự kiện khi số lần lặp lại phép thử đủ lớn.",
        visual: "probability"
      },
      {
        eyebrow: "QUY TRÌNH 4 BƯỚC",
        title: "Quy trình 4 bước giải quyết mọi bài toán xác suất trong phòng thi",
        body: "Quy trình chuẩn 4 bước giải bài toán xác suất: Bước 1: Mô tả phép thử và tính n(Ω) (dùng C_n^k hoặc quy tắc nhân). Bước 2: Gọi tên biến cố A và xác định rõ điều kiện. Bước 3: Đếm số kết quả thuận lợi n(A) (trực tiếp hoặc qua biến cố đối Ā). Bước 4: Lập tỉ số P(A) = n(A) / n(Ω), rút gọn phân số và đối chiếu 0 ≤ P ≤ 1.",
        formula: "Bước 1: n(Ω)  →  Bước 2: Gọi A  →  Bước 3: n(A) hoặc n(Ā)  →  Bước 4: P(A) = n(A)/n(Ω)",
        example: "Rút ngẫu nhiên một quân bài từ bộ bài tú lơ khơ 52 quân. Tính xác suất rút được quân Át (A).\n• Bước 1: n(Ω) = 52.\n• Bước 2: Biến cố A: 'Rút được quân Át'.\n• Bước 3: Trong bộ bài có 4 quân Át (cơ, rô, tép, bích) ⇒ n(A) = 4.\n• Bước 4: P(A) = 4 / 52 = 1/13 ≈ 0.077.",
        advanced: "Một tổ gồm 7 nam và 5 nữ. Chọn ngẫu nhiên 4 người. Tính xác suất sao cho có ít nhất 2 nữ.\n→ Lời giải: n(Ω) = C_12^4 = 495. TH1 (2 nữ, 2 nam): C_5^2 · C_7^2 = 10 · 21 = 210. TH2 (3 nữ, 1 nam): C_5^3 · C_7^1 = 10 · 7 = 70. TH3 (4 nữ, 0 nam): C_5^4 · C_7^0 = 5 · 1 = 5. n(A) = 210 + 70 + 5 = 285. P(A) = 285 / 495 = 19/33 ≈ 0.576.",
        tip: "Chiến thuật phòng thi: Luôn viết phân số tối giản trước khi so khớp với các đáp án trắc nghiệm.",
        visual: "probability"
      }
    ]
  }
];
