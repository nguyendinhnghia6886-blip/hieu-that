import { lessonTemplates } from "./build-expanded-lessons.mjs";

export const part1Lessons = [
  lessonTemplates[0], // propositions (8 slides)
  lessonTemplates[1], // sets (8 slides)
  {
    id: "inequalities-2var",
    chapterId: "chuong-2",
    chapterTitle: "Chương II: Bất phương trình và hệ BPT bậc nhất hai ẩn",
    lessonNumber: "Bài 3",
    title: "Bất phương trình bậc nhất hai ẩn",
    shortTitle: "BPT bậc nhất hai ẩn",
    description: "Nhận dạng bất phương trình và cách biểu diễn miền nghiệm trên mặt phẳng tọa độ.",
    duration: "12 phút",
    visual: "halfplane",
    slides: [
      {
        eyebrow: "DẠNG CHUẨN VÀ ĐIỀU KIỆN",
        title: "Khái niệm bất phương trình bậc nhất hai ẩn",
        body: "Bất phương trình bậc nhất hai ẩn x, y có dạng tổng quát là ax + by + c < 0 (hoặc ≤ 0, > 0, ≥ 0), trong đó a, b, c là các số thực đã cho và a, b không đồng thời bằng 0 (a² + b² > 0). Mỗi cặp số (x0; y0) thỏa mãn bất đẳng thức được gọi là một nghiệm.",
        formula: "ax + by + c ≤ 0 (hoặc < 0, ≥ 0, > 0) với a² + b² ≠ 0",
        example: "Kiểm tra xem cặp số (1; 2) và (−1; 3) có là nghiệm của 2x − 3y + 5 ≥ 0 không.\n• Với (1; 2): Thay x = 1, y = 2 vào vế trái: 2(1) − 3(2) + 5 = 1 ≥ 0 (Đúng) ⇒ (1; 2) là một nghiệm.\n• Với (−1; 3): Thay x = −1, y = 3 vào vế trái: 2(−1) − 3(3) + 5 = −6 < 0 (Sai) ⇒ (−1; 3) không phải là nghiệm.",
        advanced: "Tìm m để cặp số (m; 1) là nghiệm của bất phương trình 3x − 2y + 4 > 0.\n→ Lời giải: Thay x = m, y = 1 được 3m − 2(1) + 4 > 0 ⇔ 3m + 2 > 0 ⇔ m > −2/3.",
        tip: "Mẹo nhận dạng: Bậc của x và y đều phải là bậc 1 và không chứa tích x·y hoặc phân thức chứa ẩn ở mẫu.",
        visual: "halfplane"
      },
      {
        eyebrow: "ĐƯỜNG THẲNG BỜ",
        title: "Đường thẳng bờ d chia mặt phẳng thành hai nửa",
        body: "Đường thẳng d: ax + by + c = 0 chia mặt phẳng tọa độ Oxy thành hai nửa mặt phẳng đối xứng nhau. Một nửa mặt phẳng gồm các điểm làm cho ax + by + c > 0, và nửa mặt phẳng còn lại gồm các điểm làm cho ax + by + c < 0.",
        formula: "Đường thẳng d: ax + by + c = 0 là bờ của hai nửa mặt phẳng",
        example: "Vẽ đường thẳng bờ d: x + 2y − 4 = 0.\n• Tìm giao với trục tung Oy (cho x = 0): 0 + 2y − 4 = 0 ⇔ y = 2 ⇒ A(0; 2).\n• Tìm giao với trục hoành Ox (cho y = 0): x + 2(0) − 4 = 0 ⇔ x = 4 ⇒ B(4; 0).\n• Nối A và B ta được đường thẳng bờ d.",
        advanced: "Cho đường thẳng d: (m − 1)x + 2y − 6 = 0. Tìm m để d đi qua điểm M(2; 1).\n→ Lời giải: Thay x = 2, y = 1 vào PT: 2(m − 1) + 2(1) − 6 = 0 ⇔ 2m − 2 + 2 − 6 = 0 ⇔ 2m = 6 ⇔ m = 3.",
        tip: "Để vẽ đường thẳng bờ chính xác, luôn chọn 2 điểm cắt trục tọa độ (cho x=0 tìm y và cho y=0 tìm x).",
        visual: "halfplane"
      },
      {
        eyebrow: "PHƯƠNG PHÁP CHỌN ĐIỂM THỬ",
        title: "Kỹ thuật thử điểm O(0; 0) xác định miền nghiệm",
        body: "Để biết nửa mặt phẳng nào là miền nghiệm, ta lấy một điểm M0(x0; y0) không nằm trên bờ d (thông thường chọn ngay gốc tọa độ O(0; 0) nếu c ≠ 0). Thay tọa độ M0 vào biểu thức ax + by + c. Nếu thỏa mãn BPT thì nửa mặt phẳng chứa M0 là miền nghiệm; nếu không thỏa mãn thì nửa mặt phẳng còn lại là miền nghiệm.",
        formula: "Tính giá trị tại O(0; 0): a(0) + b(0) + c = c, so sánh với 0",
        example: "Xác định miền nghiệm của BPT 3x − y + 6 > 0.\n• Bước 1: Đường thẳng bờ d: 3x − y + 6 = 0 đi qua (−2; 0) và (0; 6).\n• Bước 2: Thử O(0; 0): 3(0) − 0 + 6 = 6 > 0 (Thỏa mãn BPT).\n• Bước 3: Miền nghiệm là nửa mặt phẳng bờ d có chứa gốc tọa độ O(0; 0).",
        advanced: "Nếu đường thẳng d đi qua gốc tọa độ O (tức c = 0, ví dụ 2x − y ≤ 0), ta chọn điểm thử như thế nào?\n→ Lời giải: Vì O nằm trên bờ d, ta chọn điểm khác không thuộc d, ví dụ chọn điểm A(1; 0) trên trục Ox. Thay vào: 2(1) − 0 = 2 ≤ 0 (Sai) ⇒ Miền nghiệm là nửa mặt phẳng không chứa điểm A(1; 0).",
        tip: "Cực kỳ lưu ý: Chỉ được thử gốc O(0; 0) khi c ≠ 0! Nếu c = 0, hãy thử ngay điểm (1; 0) hoặc (0; 1).",
        visual: "halfplane"
      },
      {
        eyebrow: "PHÂN BIỆT BỜ NGẶT VÀ KHÔNG NGẶT",
        title: "Kể cả bờ (nét liền) và không kể bờ (nét đứt)",
        body: "Nếu bất phương trình có dấu ≤ hoặc ≥ (chứa dấu bằng), các điểm nằm trên đường thẳng bờ d cũng là nghiệm. Ta vẽ bờ d bằng NÉT LIỀN. Nếu bất phương trình có dấu < hoặc > (ngặt), các điểm trên bờ d không phải là nghiệm, ta vẽ bờ d bằng NÉT ĐỨT.",
        formula: "≤ hoặc ≥ : Nét liền (kể cả bờ)  |  < hoặc > : Nét đứt (không kể bờ)",
        example: "Xác định bờ của BPT 2x + 5y ≥ 10.\n• Vì có dấu '≥' (chứa dấu bằng), các nghiệm bao gồm cả các điểm thỏa mãn 2x + 5y = 10.\n• Khi vẽ đồ thị, đường thẳng 2x + 5y = 10 bắt buộc phải vẽ bằng NÉT LIỀN.",
        advanced: "Một bài thi trắc nghiệm hỏi: 'Cặp số nào sau đây thuộc miền nghiệm của x − 2y > 4?'. Các phương án có điểm A(6; 1).\n→ Lời giải: Thay A(6; 1): 6 − 2(1) = 4 > 4 (Sai vì 4 không lớn hơn 4). Điểm A nằm trên bờ nét đứt nên KHÔNG thuộc miền nghiệm!",
        tip: "Bẫy điểm thi cực hay gặp: Điểm nằm trên đường bờ chỉ là nghiệm khi BPT có dấu '≤' hoặc '≥'!",
        visual: "halfplane"
      },
      {
        eyebrow: "QUY TRÌNH BIỂU DIỄN",
        title: "Ba bước vẽ miền nghiệm chuẩn trong phòng thi",
        body: "Quy trình vẽ miền nghiệm chuẩn 3 bước: (1) Vẽ đường thẳng d: ax + by + c = 0 (nét liền nếu ≤, ≥; nét đứt nếu <, >); (2) Lấy một điểm thử M0(x0; y0) không thuộc d và kiểm tra tính đúng sai; (3) Kết luận miền nghiệm và gạch bỏ phần mặt phẳng không lấy.",
        formula: "Bước 1: Vẽ d  →  Bước 2: Thử điểm  →  Bước 3: Gạch bỏ và kết luận",
        example: "Biểu diễn miền nghiệm của x − y − 2 ≤ 0.\n• Bước 1: Vẽ bờ d: x − y − 2 = 0 qua (2; 0) và (0; −2) bằng nét liền.\n• Bước 2: Thử O(0; 0): 0 − 0 − 2 = −2 ≤ 0 (Đúng).\n• Bước 3: Miền nghiệm là nửa mặt phẳng bờ d chứa điểm O(0; 0) (kể cả bờ d).",
        advanced: "Biểu diễn miền nghiệm của BPT đặc biệt: x ≥ 3.\n→ Lời giải: Bờ là đường thẳng x = 3 song song với trục Oy. Thử O(0; 0): 0 ≥ 3 (Sai). Miền nghiệm là nửa mặt phẳng bên phải đường thẳng x = 3 (kể cả bờ x = 3).",
        tip: "Quy ước tự luận: Nhớ ghi rõ câu 'kể cả bờ d' hoặc 'không kể bờ d' ở dòng kết luận cuối cùng.",
        visual: "halfplane"
      },
      {
        eyebrow: "ỨNG DỤNG THỰC TẾ 1",
        title: "Mô hình hóa bài toán ngân sách và tiêu dùng",
        body: "Trong thực tế, các ràng buộc về tài chính, mua sắm thường dẫn đến bất phương trình bậc nhất hai ẩn. Ta gọi x, y lần lượt là số lượng các mặt hàng cần mua, xác định đơn giá và thiết lập bất đẳng thức biểu thị tổng số tiền không vượt quá ngân sách.",
        formula: "Giá_A · x + Giá_B · y ≤ Tổng ngân sách (x, y ∈ ℕ)",
        example: "Gia đình bạn Nam dự định chi tối đa 1.200.000 đồng mua thịt bò (giá 300.000 đ/kg) và thịt lợn (giá 150.000 đ/kg). Gọi x, y là số kg mỗi loại.\n• Lập BPT: 300.000x + 150.000y ≤ 1.200.000.\n• Rút gọn chia cả 2 vế cho 150.000: 2x + y ≤ 8 (với x ≥ 0, y ≥ 0).",
        advanced: "Nếu gia đình Nam mua 2.5 kg thịt bò thì có thể mua tối đa bao nhiêu kg thịt lợn?\n→ Lời giải: Thay x = 2.5 vào BPT: 2(2.5) + y ≤ 8 ⇔ 5 + y ≤ 8 ⇔ y ≤ 3. Vậy có thể mua tối đa 3 kg thịt lợn.",
        tip: "Luôn chú ý đổi tất cả các đại lượng tiền tệ hoặc khối lượng về cùng một đơn vị đo trước khi lập BPT.",
        visual: "halfplane"
      },
      {
        eyebrow: "ỨNG DỤNG THỰC TẾ 2",
        title: "Ràng buộc thời gian và công suất máy móc",
        body: "Các phân xưởng sản xuất hai loại sản phẩm A và B chịu ràng buộc về thời gian vận hành của máy móc. Đặt x, y là số lượng sản phẩm mỗi loại, tổng thời gian sử dụng máy không được vượt quá quỹ thời gian tối đa cho phép.",
        formula: "Thời_gian_A · x + Thời_gian_B · y ≤ Tổng thời gian máy",
        example: "Để sản xuất 1 chiếc bàn cần 3 giờ tiện và 1 chiếc ghế cần 1 giờ tiện. Máy tiện hoạt động tối đa 12 giờ mỗi ngày.\n• Bất phương trình ràng buộc: 3x + y ≤ 12 (x, y ∈ ℕ).\n• Cặp (3; 2) nghĩa là sản xuất 3 bàn, 2 ghế: 3(3) + 2 = 11 ≤ 12 (Khả thi). Cặp (4; 1) tốn 3(4) + 1 = 13 > 12 (Không khả thi).",
        advanced: "Nếu xưởng muốn sản xuất ít nhất 2 chiếc bàn (x ≥ 2) thì số ghế y tối đa có thể làm là bao nhiêu?\n→ Lời giải: Với x ≥ 2, ta có y ≤ 12 − 3x ≤ 12 − 3(2) = 6. Vậy làm được tối đa 6 chiếc ghế.",
        tip: "Đừng quên điều kiện thực tế: Số sản phẩm x, y luôn phải là số tự nhiên không âm (x, y ∈ ℕ).",
        visual: "halfplane"
      },
      {
        eyebrow: "TỔNG KẾT VÀ BẪY ĐỀ THI",
        title: "Chiến thuật xử lý nhanh câu trắc nghiệm BPT hai ẩn",
        body: "Để giải nhanh câu trắc nghiệm BPT bậc nhất hai ẩn trong đề thi: 1) Kiểm tra điểm (0; 0) xem thuộc miền nghiệm đề bài vẽ hay không; 2) Quan sát đường bờ xem vẽ nét liền hay nét đứt để loại trừ dấu bất đẳng thức; 3) Kiểm tra hệ số góc hoặc giao điểm của bờ với các trục Ox, Oy.",
        formula: "Mẹo 3 giây: Nhìn nét bờ (liền/đứt) → Thử điểm (0; 0) → Đối chiếu giao trục",
        example: "Đồ thị cho đường bờ x − y = 1 nét đứt và miền nghiệm không chứa O(0; 0). Hỏi BPT nào đúng?\n• Bước 1: Nét đứt nên loại các phương án có dấu '≤' hoặc '≥'.\n• Bước 2: Thay O(0; 0): 0 − 0 = 0. Để không chứa O, giá trị 0 phải làm BPT sai.\n• Bước 3: BPT x − y > 1 (0 > 1 là sai) thỏa mãn! Kết luận ngay x − y > 1.",
        advanced: "Cho BPT 2x + (m − 1)y < 4. Tìm m để miền nghiệm chứa điểm A(1; 2).\n→ Lời giải: Điểm A thuộc miền nghiệm ⇔ 2(1) + (m − 1)2 < 4 ⇔ 2 + 2m − 2 < 4 ⇔ 2m < 4 ⇔ m < 2.",
        tip: "Khi làm bài thi: Phương pháp thử nhanh tọa độ điểm O hoặc các điểm đặc biệt giúp giải quyết 90% câu hỏi trắc nghiệm dưới 15 giây.",
        visual: "halfplane"
      }
    ]
  },
  {
    id: "system-inequalities",
    chapterId: "chuong-2",
    chapterTitle: "Chương II: Bất phương trình và hệ BPT bậc nhất hai ẩn",
    lessonNumber: "Bài 4",
    title: "Hệ bất phương trình bậc nhất hai ẩn",
    shortTitle: "Hệ BPT bậc nhất hai ẩn",
    description: "Miền nghiệm đa giác và bài toán tối ưu quy hoạch tuyến tính trong thực tế.",
    duration: "14 phút",
    visual: "halfplane",
    slides: [
      {
        eyebrow: "KHÁI NIỆM HỆ BPT",
        title: "Nghiệm chung thỏa mãn đồng thời nhiều điều kiện",
        body: "Hệ bất phương trình bậc nhất hai ẩn gồm hai hay nhiều bất phương trình bậc nhất hai ẩn. Cặp số (x0; y0) là một nghiệm của hệ khi và chỉ khi nó là nghiệm chung của tất cả các bất phương trình có trong hệ. Miền nghiệm của hệ là phần giao nhau của các miền nghiệm của từng bất phương trình.",
        formula: "(x0; y0) là nghiệm của hệ ⇔ thỏa mãn đồng thời tất cả các BPT của hệ",
        example: "Kiểm tra xem điểm M(1; 1) có là nghiệm của hệ { x + y − 3 ≤ 0; 2x − y ≥ 0; y ≥ 0 } không.\n• Thay vào BPT 1: 1 + 1 − 3 = −1 ≤ 0 (Thỏa mãn).\n• Thay vào BPT 2: 2(1) − 1 = 1 ≥ 0 (Thỏa mãn).\n• Thay vào BPT 3: 1 ≥ 0 (Thỏa mãn).\n• Kết luận: Điểm M(1; 1) thỏa mãn tất cả các BPT nên là một nghiệm của hệ.",
        advanced: "Cho hệ { x − y ≤ 1; x + 2y ≥ 4 }. Cặp số (2; 1) có là nghiệm không?\n→ Lời giải: Thay (2; 1) vào BPT 1: 2 − 1 = 1 ≤ 1 (Đúng). Thay vào BPT 2: 2 + 2(1) = 4 ≥ 4 (Đúng). Cặp (2; 1) là một nghiệm của hệ (nằm đúng trên giao điểm của 2 đường bờ).",
        tip: "Chỉ cần vi phạm một BPT duy nhất trong hệ thì cặp số đó bị loại ngay lập tức!",
        visual: "halfplane"
      },
      {
        eyebrow: "BIỂU DIỄN MIỀN NGHIỆM",
        title: "Miền nghiệm đa giác lồi trên mặt phẳng Oxy",
        body: "Để biểu diễn miền nghiệm của hệ: Ta lần lượt vẽ tất cả các đường thẳng bờ trên cùng một mặt phẳng tọa độ Oxy. Với mỗi đường thẳng, xác định nửa mặt phẳng không lấy và gạch sọc bỏ đi. Phần mặt phẳng trắng không bị gạch chính là miền nghiệm chung của hệ (thường là miền tam giác hoặc tứ giác lồi).",
        formula: "Miền nghiệm của hệ = Giao của các nửa mặt phẳng nghiệm",
        example: "Xác định hình dạng miền nghiệm của hệ { x ≥ 0; y ≥ 0; x + y ≤ 4 }.\n• x ≥ 0: Nửa mặt phẳng bên phải trục tung Oy.\n• y ≥ 0: Nửa mặt phẳng phía trên trục hoành Ox.\n• x + y ≤ 4: Nửa mặt phẳng chứa O(0; 0) có bờ là đường x + y = 4.\n• Giao của 3 miền là tam giác vuông OAB với O(0; 0), A(4; 0), B(0; 4).",
        advanced: "Khi nào miền nghiệm của một hệ BPT là tập rỗng (∅)?\n→ Lời giải: Khi các nửa mặt phẳng nghiệm không có điểm chung nào, ví dụ hệ { x + y ≤ 1; x + y ≥ 3 } có hai bờ song song và miền nghiệm quay lưng vào nhau nên hệ vô nghiệm.",
        tip: "Quy ước gạch bỏ: Luôn gạch bỏ phần KHÔNG lấy để phần nghiệm chung là phần giấy trắng sạch sẽ, dễ nhìn tọa độ các đỉnh.",
        visual: "halfplane"
      },
      {
        eyebrow: "TỌA ĐỘ ĐỈNH",
        title: "Phương pháp tìm tọa độ chính xác các đỉnh đa giác",
        body: "Các đỉnh của đa giác nghiệm là giao điểm của từng cặp đường thẳng bờ tương ứng. Để tìm tọa độ đỉnh, ta lập hệ gồm hai phương trình đường thẳng bờ và giải bằng phương pháp cộng đại số hoặc bấm máy tính cầm tay (Casio Mode 9-1-2 / 5-1).",
        formula: "Tọa độ đỉnh (x; y) là nghiệm của hệ 2 PT đường thẳng bờ giao nhau",
        example: "Tìm giao điểm của hai đường thẳng d1: x + y = 5 và d2: 2x − y = 1.\n• Cộng hai vế của hai phương trình: (x + y) + (2x − y) = 5 + 1 ⇔ 3x = 6 ⇔ x = 2.\n• Thay x = 2 vào d1: 2 + y = 5 ⇔ y = 3.\n• Kết luận: Giao điểm có tọa độ A(2; 3).",
        advanced: "Cho miền nghiệm tứ giác giới hạn bởi { x ≥ 0; y ≥ 0; x + y ≤ 6; 2x + y ≤ 8 }. Tìm tọa độ tất cả 4 đỉnh.\n→ Lời giải: Đỉnh 1: Gốc O(0; 0). Đỉnh 2: Giao 2x + y = 8 với Ox ⇒ A(4; 0). Đỉnh 3: Giao x + y = 6 với Oy ⇒ C(0; 6). Đỉnh 4: Giao x + y = 6 và 2x + y = 8 ⇒ B(2; 4). Tứ giác là OABC.",
        tip: "Luôn thay lại tọa độ đỉnh tìm được vào các BPT còn lại để kiểm tra xem đỉnh đó có nằm trong miền nghiệm hay bị gạch bỏ rồi.",
        visual: "halfplane"
      },
      {
        eyebrow: "ĐỊNH LÝ TỐI ƯU HÓA",
        title: "Định lý giá trị lớn nhất và nhỏ nhất của biểu thức F(x; y)",
        body: "Định lý cốt lõi của quy hoạch tuyến tính: Nếu miền nghiệm của hệ là một đa giác lồi kín, bị chặn (có diện tích hữu hạn), thì biểu thức bậc nhất F(x; y) = ax + by luôn đạt giá trị lớn nhất (GTLN) và giá trị nhỏ nhất (GTNN) tại ít nhất một trong các ĐỈNH của đa giác đó.",
        formula: "Max / Min F(x; y) trên đa giác kín luôn đạt tại ít nhất một ĐỈNH",
        example: "Tìm GTLN của F(x; y) = 3x + 2y trên miền tam giác đỉnh O(0; 0), A(4; 0), B(0; 3).\n• Tính F tại từng đỉnh:\n  F(O) = 3(0) + 2(0) = 0.\n  F(A) = 3(4) + 2(0) = 12.\n  F(B) = 3(0) + 2(3) = 6.\n• So sánh: GTLN của F bằng 12, đạt được tại đỉnh A(4; 0).",
        advanced: "Tìm GTNN và GTLN của F(x; y) = 2x − y trên tứ giác đỉnh O(0; 0), A(3; 0), B(2; 4), C(0; 3).\n→ Lời giải: F(O) = 0; F(A) = 2(3) − 0 = 6; F(B) = 2(2) − 4 = 0; F(C) = 2(0) − 3 = −3. GTNN là −3 (tại C), GTLN là 6 (tại A).",
        tip: "Nguyên tắc vàng: Tuyệt đối không cần thử các điểm nằm sâu bên trong miền nghiệm, chỉ cần tính F tại các đỉnh rồi so sánh!",
        visual: "halfplane"
      },
      {
        eyebrow: "BÀI TOÁN TỐI ƯU LỢI NHUẬN",
        title: "Bài toán thực tế: Lập kế hoạch sản xuất để lợi nhuận tối đa",
        body: "Quy trình giải bài toán tối ưu sản xuất: 1) Đặt ẩn x, y là số lượng sản phẩm mỗi loại; 2) Lập hệ BPT ràng buộc về nguyên liệu, nhân công, vốn; 3) Xác định tọa độ các đỉnh của miền đa giác nghiệm; 4) Thiết lập hàm lợi nhuận F(x; y) và tính giá trị tại các đỉnh để chọn phương án tối ưu.",
        formula: "Lợi nhuận F(x; y) = Lợi_nhuận_A · x + Lợi_nhuận_B · y → Tối đa hóa (Max)",
        example: "Một xưởng đóng 2 loại bàn ghế A và B. Lãi 400 nghìn/chiếc A và 300 nghìn/chiếc B. Miền ràng buộc nguyên liệu là tứ giác đỉnh O(0; 0), M(20; 0), N(15; 10), P(0; 20). Hỏi cần đóng bao nhiêu chiếc mỗi loại để lãi cao nhất?\n• Lập hàm lãi: F(x; y) = 400x + 300y (nghìn đồng).\n• F(O) = 0.\n• F(M) = 400(20) + 0 = 8.000 nghìn.\n• F(N) = 400(15) + 300(10) = 9.000 nghìn.\n• F(P) = 0 + 300(20) = 6.000 nghìn.\n• Kết luận: Lãi lớn nhất là 9 triệu đồng khi đóng 15 chiếc A và 10 chiếc B.",
        advanced: "Nếu mỗi chiếc bàn A cần 2m² gỗ và bàn B cần 3m² gỗ, kho có 60m² gỗ. Lập BPT biểu diễn.\n→ Lời giải: Bất phương trình là 2x + 3y ≤ 60 với x, y ∈ ℕ.",
        tip: "Bước kiểm tra cuối: Đảm bảo số lượng sản phẩm x, y tại đỉnh tối ưu phải là số tự nhiên phù hợp với đề bài.",
        visual: "halfplane"
      },
      {
        eyebrow: "BÀI TOÁN GIẢM CHI PHÍ",
        title: "Bài toán dinh dưỡng và tối thiểu hóa chi phí (Min)",
        body: "Trong chăn nuôi hoặc khẩu phần ăn, cần đảm bảo lượng chất dinh dưỡng tối thiểu với chi phí thấp nhất. Ta lập hệ bất phương trình có dấu '≥' (đảm bảo mức tối thiểu) và hàm mục tiêu F(x; y) cần tìm giá trị nhỏ nhất (Min).",
        formula: "Chi phí F(x; y) = Giá_A · x + Giá_B · y → Tối thiểu hóa (Min)",
        example: "Cần phối hợp x kg thức ăn loại 1 (giá 40k/kg) và y kg thức ăn loại 2 (giá 30k/kg). Miền nghiệm có 3 đỉnh A(10; 0), B(4; 6), C(0; 12). Tìm chi phí nhỏ nhất.\n• Hàm chi phí: F(x; y) = 40x + 30y (nghìn đồng).\n• F(A) = 40(10) + 0 = 400k.\n• F(B) = 40(4) + 30(6) = 160 + 180 = 340k.\n• F(C) = 0 + 30(12) = 360k.\n• Kết luận: Chi phí nhỏ nhất là 340 nghìn đồng khi dùng 4 kg loại 1 và 6 kg loại 2.",
        advanced: "Một người cần tối thiểu 90 đơn vị vitamin A và 120 đơn vị vitamin B mỗi tuần từ hai loại viên bổ sung. Lập hệ BPT nếu mỗi viên loại 1 có 3 đơn vị A, 2 đơn vị B; viên loại 2 có 1 đơn vị A, 3 đơn vị B.\n→ Lời giải: { 3x + y ≥ 90; 2x + 3y ≥ 120; x ≥ 0; y ≥ 0 }.",
        tip: "Phân biệt từ khóa: 'Tối đa', 'không quá' tương ứng với dấu ≤. 'Tối thiểu', 'ít nhất' tương ứng với dấu ≥.",
        visual: "halfplane"
      },
      {
        eyebrow: "MIỀN KHÔNG BỊ CHẶN",
        title: "Cẩn thận với miền nghiệm mở (không bị chặn)",
        body: "Nếu miền nghiệm mở rộng ra vô cực (miền không bị chặn), biểu thức F(x; y) có thể không đạt giá trị lớn nhất hoặc không đạt giá trị nhỏ nhất. Lúc đó cần vẽ một đường mức F(x; y) = k và tịnh tiến để kiểm tra chiều tăng giảm của hàm số.",
        formula: "Miền mở ra vô cực: Có thể không tồn tại Max hoặc Min",
        example: "Xét hệ { x ≥ 1; y ≥ 2 } và hàm F(x; y) = x + y.\n• Miền nghiệm mở rộng vô tận về phía trên và bên phải.\n• Giá trị nhỏ nhất: Đạt tại đỉnh duy nhất A(1; 2) với Min F = 1 + 2 = 3.\n• Giá trị lớn nhất: Vì x, y có thể tăng tùy ý tới vô cực nên KHÔNG TỒN TẠI giá trị lớn nhất.",
        advanced: "Với hệ { x ≥ 0; y ≥ 0; x − y ≥ 2 }, biểu thức F(x; y) = x − 2y có đạt GTLN không?\n→ Lời giải: Miền nghiệm mở, cho y = 0 thì x ≥ 2. Khi x tiến ra +∞ thì F = x tiến ra +∞, do đó không có GTLN.",
        tip: "Cảnh báo bài thi: Chỉ được áp dụng ngay định lý so sánh đỉnh khi khẳng định chắc chắn miền nghiệm là đa giác kín!",
        visual: "halfplane"
      },
      {
        eyebrow: "TỔNG KẾT VÀ BẢN ĐỒ TƯ DUY",
        title: "Toàn bộ quy trình giải bài toán quy hoạch tuyến tính",
        body: "Bản đồ tư duy 4 bước bài toán tối ưu: 1. Đặt biến và điều kiện thực tế (x, y ≥ 0) → 2. Lập hệ BPT và hàm mục tiêu F(x; y) → 3. Vẽ miền nghiệm, giải hệ tìm tọa độ các đỉnh → 4. Tính F tại tất cả các đỉnh và kết luận phương án tối ưu.",
        formula: "Đặt biến → Hệ BPT & F(x; y) → Tọa độ đỉnh → So sánh giá trị F",
        example: "Quy tắc bấm máy Casio tìm đỉnh: Bấm Mode 9 → 1 → 2 để giải hệ hai phương trình bậc nhất hai ẩn ax + by = c chỉ trong 3 giây.",
        advanced: "Nếu hàm F(x; y) đạt giá trị lớn nhất tại hai đỉnh kề nhau A và B của đa giác thì sao?\n→ Lời giải: Khi đó F(x; y) đạt giá trị lớn nhất tại TẤT CẢ các điểm nằm trên đoạn thẳng nối hai đỉnh A và B!",
        tip: "Chiến thuật phòng thi: Đọc kỹ câu hỏi hỏi 'giá trị lớn nhất bằng bao nhiêu' hay hỏi 'đạt được khi x, y bằng bao nhiêu' để chọn đáp án đúng.",
        visual: "halfplane"
      }
    ]
  },
  {
    id: "values",
    chapterId: "chuong-3",
    chapterTitle: "Chương III: Hệ thức lượng trong tam giác",
    lessonNumber: "Bài 5",
    title: "Giá trị lượng giác của một góc",
    shortTitle: "Giá trị lượng giác",
    description: "Từ nửa đường tròn đơn vị đến các hệ thức lượng giác cơ bản từ 0° đến 180°.",
    duration: "12 phút",
    visual: "circle",
    slides: [
      {
        eyebrow: "ĐỊNH NGHĨA HÌNH HỌC",
        title: "Nửa đường tròn đơn vị và tọa độ điểm M(cos α; sin α)",
        body: "Trên mặt phẳng Oxy, nửa đường tròn tâm O bán kính R = 1 nằm phía trên trục hoành được gọi là nửa đường tròn đơn vị. Với mỗi góc α (0° ≤ α ≤ 180°), có duy nhất điểm M trên nửa đường tròn sao cho xOM = α. Hoành độ x của M là cos α, tung độ y của M là sin α.",
        formula: "M(cos α; sin α) trên nửa đường tròn x² + y² = 1 (y ≥ 0)",
        example: "Xác định tọa độ điểm M trên nửa đường tròn đơn vị ứng với góc α = 150°.\n• Hoành độ: x = cos 150° = −cos 30° = −√3/2.\n• Tung độ: y = sin 150° = sin 30° = 1/2.\n• Tọa độ điểm M là M(−√3/2; 1/2).",
        advanced: "Điểm M trên nửa đường tròn đơn vị có hoành độ x = −3/5. Tính sin α và tan α.\n• Ta có sin²α = 1 − x² = 1 − 9/25 = 16/25. Vì y ≥ 0 nên sin α = 4/5.\n• tan α = sin α / cos α = (4/5) / (−3/5) = −4/3.",
        tip: "Quy tắc chiếu trục: Trục hoành Ox là trục Cosin, trục tung Oy là trục Sin.",
        visual: "circle"
      },
      {
        eyebrow: "HỆ THỨC CỐT LÕI",
        title: "Hằng đẳng thức lượng giác căn bản: sin² α + cos² α = 1",
        body: "Do điểm M(cos α; sin α) thuộc đường tròn đơn vị x² + y² = 1, ta luôn có sin² α + cos² α = 1 với mọi góc α từ 0° đến 180°. Hệ thức này là chìa khóa để chuyển đổi qua lại giữa giá trị của sin và cos.",
        formula: "sin² α + cos² α = 1  ⇒  cos² α = 1 − sin² α  ;  sin² α = 1 − cos² α",
        example: "Cho biết sin α = 5/13 và α là góc tù. Tính cos α.\n• cos² α = 1 − sin² α = 1 − (5/13)² = 1 − 25/169 = 144/169.\n• Vì α là góc tù (90° < α < 180°), điểm M nằm bên trái trục Oy nên cos α < 0.\n• Kết luận: cos α = −√(144/169) = −12/13.",
        advanced: "Cho sin α + cos α = 1/5. Tính tích P = sin α · cos α.\n→ Lời giải: Bình phương hai vế: (sin α + cos α)² = 1/25 ⇔ sin² α + cos² α + 2 sin α cos α = 1/25 ⇔ 1 + 2P = 1/25 ⇔ 2P = −24/25 ⇔ P = −12/25.",
        tip: "Lưu ý sống còn: Khi lấy căn bậc hai của cos² α, bắt buộc phải nhìn điều kiện góc để chọn dấu cộng hay dấu trừ!",
        visual: "circle"
      },
      {
        eyebrow: "TANG VÀ CÔTANG",
        title: "Định nghĩa tan α, cot α và mối quan hệ nghịch đảo",
        body: "Với α ≠ 90°: tan α = sin α / cos α. Với α ≠ 0° và α ≠ 180°: cot α = cos α / sin α. Mối quan hệ liên hệ cốt lõi: tan α · cot α = 1; 1 + tan² α = 1 / cos² α (α ≠ 90°); 1 + cot² α = 1 / sin² α (α ≠ 0°, 180°).",
        formula: "tan α · cot α = 1  ·  1 + tan² α = 1 / cos² α  ·  1 + cot² α = 1 / sin² α",
        example: "Cho tan α = 3. Tính cot α và cos² α.\n• cot α = 1 / tan α = 1/3.\n• 1 / cos² α = 1 + tan² α = 1 + 3² = 10 ⇒ cos² α = 1/10.",
        advanced: "Cho tan α = 2. Tính giá trị biểu thức A = (2 sin α − 3 cos α) / (sin α + 2 cos α).\n→ Lời giải: Chia cả tử và mẫu cho cos α ≠ 0: A = (2 tan α − 3) / (tan α + 2) = (2·2 − 3) / (2 + 2) = 1/4.",
        tip: "Mẹo làm nhanh dạng phân thức thuần nhất bậc 1 theo sin và cos: Chia cả tử và mẫu cho cos α để đưa toàn bộ về tan α!",
        visual: "circle"
      },
      {
        eyebrow: "CÁC GÓC ĐẶC BIỆT",
        title: "Bảng giá trị lượng giác các góc đặc biệt từ 0° đến 180°",
        body: "Các góc chuẩn cần thuộc nằm lòng: 0°, 30°, 45°, 60°, 90°, 120°, 135°, 150°, 180°. Sin tăng từ 0 lên 1 tại 90° rồi giảm về 0 tại 180°. Cos giảm từ 1 xuống 0 tại 90° rồi giảm tiếp xuống −1 tại 180°.",
        formula: "sin(30°)=1/2; sin(45°)=√2/2; sin(60°)=√3/2; cos(30°)=√3/2; cos(60°)=1/2",
        example: "Tính giá trị biểu thức M = 2 sin 30° + 4 cos 60° − tan 45°.\n• Thay các giá trị: sin 30° = 1/2; cos 60° = 1/2; tan 45° = 1.\n• M = 2(1/2) + 4(1/2) − 1 = 1 + 2 − 1 = 2.",
        advanced: "Tính giá trị biểu thức P = sin² 10° + sin² 20° + ... + sin² 80°.\n→ Lời giải: Vì sin(90° − x) = cos x, ghép cặp: sin² 10° + sin² 80° = sin² 10° + cos² 10° = 1. Có 4 cặp như vậy ⇒ P = 4.",
        tip: "Mẹo nhớ dãy sin góc nhọn 0°, 30°, 45°, 60°, 90°: Lấy căn bậc hai chia 2 của các số 0, 1, 2, 3, 4 (tức √0/2, √1/2, √2/2, √3/2, √4/2).",
        visual: "circle"
      },
      {
        eyebrow: "HAI GÓC BÙ NHAU",
        title: "Tính chất lượng giác của hai góc bù nhau (tổng bằng 180°)",
        body: "Nếu hai góc α và β bù nhau (α + β = 180°), hai điểm biểu diễn trên nửa đường tròn đơn vị đối xứng qua trục Oy. Do đó: sin(180° − α) = sin α; cos(180° − α) = −cos α; tan(180° − α) = −tan α; cot(180° − α) = −cot α.",
        formula: "Góc bù: Sin giữ nguyên  ·  Cos, Tan, Cot đổi dấu âm",
        example: "Tính sin 120° và cos 120°.\n• 120° bù với 60° (120° = 180° − 60°).\n• sin 120° = sin 60° = √3/2.\n• cos 120° = −cos 60° = −1/2.",
        advanced: "Trong tam giác ABC, chứng minh sin(A + B) = sin C và cos(A + B) = −cos C.\n→ Lời giải: Trong tam giác, A + B + C = 180° ⇒ A + B = 180° − C. Áp dụng tính chất góc bù: sin(A + B) = sin(180° − C) = sin C; cos(A + B) = cos(180° − C) = −cos C.",
        tip: "Khẩu quyết tam giác: 'Sin thì bằng nhau, Cos thì đối dấu' khi lấy tổng hai góc đối với góc thứ ba.",
        visual: "circle"
      },
      {
        eyebrow: "HAI GÓC PHỤ NHAU",
        title: "Tính chất lượng giác của hai góc phụ nhau (tổng bằng 90°)",
        body: "Nếu hai góc phụ nhau (α + β = 90°), giá trị hàm này bằng 'co-' hàm kia: sin(90° − α) = cos α; cos(90° − α) = sin α; tan(90° − α) = cot α; cot(90° − α) = tan α.",
        formula: "Góc phụ: sin ↔ cos  ·  tan ↔ cot",
        example: "Tính tan 20° · tan 70°.\n• Vì 20° + 70° = 90°, ta có tan 70° = cot 20°.\n• Khi đó tan 20° · tan 70° = tan 20° · cot 20° = 1.",
        advanced: "Rút gọn biểu thức B = cos 15° · cos 75° + sin 15° · sin 75°.\n→ Lời giải: Đổi cos 75° = sin 15° và sin 75° = cos 15°. B = cos 15° · sin 15° + sin 15° · cos 15° = 2 sin 15° cos 15° = sin 30° = 1/2.",
        tip: "Nhận diện góc phụ: Bất cứ khi nào thấy hai góc có tổng bằng 90° (như 15° và 75°, 20° và 70°), lập tức đưa về cùng một góc nhọn.",
        visual: "circle"
      },
      {
        eyebrow: "KỸ THUẬT RÚT GỌN",
        title: "Phương pháp biến đổi và rút gọn biểu thức lượng giác",
        body: "Các bước chuẩn khi rút gọn biểu thức lượng giác: 1) Quy đổi các góc lớn về góc nhọn bằng tính chất góc bù hoặc góc phụ; 2) Đổi tan, cot về sin và cos nếu cần quy đồng phân thức; 3) Khai triển hằng đẳng thức và gom các cụm sin² + cos² = 1.",
        formula: "Đổi về góc nhọn → Đổi tan, cot về sin, cos → Áp dụng sin² + cos² = 1",
        example: "Rút gọn A = (1 − sin² x) · (1 + tan² x) với x ≠ 90°.\n• Bước 1: 1 − sin² x = cos² x.\n• Bước 2: 1 + tan² x = 1 / cos² x.\n• Bước 3: Nhân lại: A = cos² x · (1 / cos² x) = 1.",
        advanced: "Chứng minh biểu thức độc lập với x: P = (sin⁴ x − cos⁴ x + cos² x) / (2 − cos² x).\n→ Lời giải: Tử số = (sin² x − cos² x)(sin² x + cos² x) + cos² x = sin² x − cos² x + cos² x = sin² x. Biểu thức rút gọn bằng sin² x / (1 + sin² x).",
        tip: "Biểu thức 'không phụ thuộc vào x' nghĩa là sau khi rút gọn toàn bộ biến x bị triệt tiêu và kết quả là một hằng số thực.",
        visual: "circle"
      },
      {
        eyebrow: "TỔNG KẾT VÀ BẤY ĐỀ THI",
        title: "Chiến thuật xử lý câu hỏi lượng giác trong bài thi trắc nghiệm",
        body: "Các bẫy đề thi kinh điển chương Lượng giác: 1) Quên dấu âm của cos, tan, cot khi góc tù; 2) Quên điều kiện xác định của tan (khác 90°) và cot (khác 0°, 180°); 3) Nhập máy tính cầm tay quên chuyển đơn vị góc Deg (D) / Rad (R).",
        formula: "Kiểm tra đơn vị Deg (chữ D nhỏ trên màn hình) trước khi bấm máy tính!",
        example: "Bấm máy tính kiểm tra nhanh biểu thức: Gán một góc bất kỳ thỏa mãn đề bài (ví dụ α = 135° gán vào phím STO A) rồi bấm biểu thức cần tính để đối chiếu 4 phương án.",
        advanced: "Cho tam giác ABC. Xét tính đúng sai của khẳng định: cos(A + B) = cos C.\n→ Lời giải: Khẳng định SAI, vì A + B = 180° − C nên cos(A + B) = −cos C. Đây là bẫy sai dấu kinh điển nhất trong hình học 10!",
        tip: "Phòng thi: Luôn kiểm tra xem màn hình máy tính đang hiển thị chữ D (Degree) hay R (Radian) để tránh tính sai số đo góc!",
        visual: "circle"
      }
    ]
  }
];
