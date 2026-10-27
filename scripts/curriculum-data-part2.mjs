export const part2Lessons = [
  {
    id: "signs",
    chapterId: "chuong-3",
    chapterTitle: "Chương III: Hệ thức lượng trong tam giác",
    lessonNumber: "Bài 5",
    title: "Dấu của các giá trị lượng giác",
    shortTitle: "Dấu lượng giác",
    description: "Hiểu dấu từ vị trí của góc, thay vì chỉ học thuộc lòng bảng dấu.",
    duration: "10 phút",
    visual: "signs",
    slides: [
      {
        eyebrow: "BẢN CHẤT HÌNH HỌC",
        title: "Dấu của giá trị lượng giác đến từ vị trí của điểm M",
        body: "Khi góc α biến thiên từ 0° đến 180°, điểm M(cos α; sin α) chạy trên nửa đường tròn đơn vị phía trên trục hoành. Vì M luôn có tung độ y ≥ 0, nên sin α luôn KHÔNG ÂM (sin α > 0 với 0° < α < 180°). Hoành độ x đổi dấu khi điểm M đi từ bên phải sang bên trái trục tung Oy.",
        formula: "0° < α < 180° ⇒ sin α > 0  ·  Cos đổi dấu qua trục tung",
        example: "Xét dấu của sin 135° và cos 135°.\n• 135° nằm giữa 90° và 180° (góc tù).\n• Điểm M nằm phía trên trục Ox nên sin 135° > 0.\n• Điểm M nằm bên trái trục Oy nên cos 135° < 0.\n• Cụ thể: sin 135° = √2/2 > 0 và cos 135° = −√2/2 < 0.",
        advanced: "Cho tam giác ABC có góc A tù. Xét dấu của P = sin A · cos B · cos C.\n→ Lời giải: Tam giác có góc A tù nên sin A > 0. Vì tam giác chỉ có tối đa một góc tù, nên B và C bắt buộc là góc nhọn ⇒ cos B > 0 và cos C > 0. Vậy tích P mang dấu DƯƠNG.",
        tip: "Điểm chốt: Trên phạm vi từ 0° đến 180°, hàm Sin KHÔNG BAO GIỜ mang dấu âm!",
        visual: "signs"
      },
      {
        eyebrow: "GÓC NHỌN (0° < α < 90°)",
        title: "Góc nhọn: Cả bốn giá trị lượng giác đều DƯƠNG",
        body: "Khi 0° < α < 90°, điểm M nằm trong góc phần tư thứ nhất (phía trên Ox, bên phải Oy). Do đó cả hoành độ và tung độ của M đều dương. Kéo theo tang và côtang cũng là thương của hai số dương nên đều dương.",
        formula: "Góc nhọn α ∈ (0°; 90°) ⇒ sin α > 0, cos α > 0, tan α > 0, cot α > 0",
        example: "Cho góc nhọn α có cos α = 3/5. Tính tan α và xét dấu.\n• sin α = √(1 − cos² α) = √(1 − 9/25) = 4/5 (vì α nhọn nên sin dương).\n• tan α = sin α / cos α = (4/5) / (3/5) = 4/3 > 0.\n• Tất cả các giá trị đều mang dấu dương.",
        advanced: "Cho 0° < α < 90°. So sánh sin α và tan α.\n• Ta có tan α = sin α / cos α. Vì 0 < cos α < 1 với mọi góc nhọn, chia sin α cho một số nhỏ hơn 1 sẽ được kết quả lớn hơn sin α.\n• Kết luận: Với mọi góc nhọn α, luôn có tan α > sin α.",
        tip: "Quy tắc kiểm tra nhanh: Cứ thấy góc nhọn thì toàn bộ sin, cos, tan, cot đều là số dương.",
        visual: "signs"
      },
      {
        eyebrow: "GÓC TÙ (90° < α < 180°)",
        title: "Góc tù: Chỉ Sin dương, còn Cos, Tan, Cot đều ÂM",
        body: "Khi 90° < α < 180°, điểm M nằm trong góc phần tư thứ hai (phía trên Ox, bên trái Oy). Tung độ y > 0 (sin dương) nhưng hoành độ x < 0 (cos âm). Vì tang và côtang là thương giữa sin và cos nên chúng mang dấu ÂM.",
        formula: "Góc tù α ∈ (90°; 180°) ⇒ sin α > 0  ·  cos α < 0  ·  tan α < 0  ·  cot α < 0",
        example: "Tính dấu của các biểu thức khi α = 120°.\n• sin 120° = √3/2 > 0.\n• cos 120° = −1/2 < 0.\n• tan 120° = −√3 < 0.\n• cot 120° = −1/√3 < 0.",
        advanced: "Cho tam giác ABC. Hỏi biểu thức Q = cos A + cos B + cos C có thể mang dấu âm không?\n→ Lời giải: Có thể. Nếu tam giác có một góc rất tù, ví dụ A = 150°, B = 15°, C = 15° thì cos 150° = −0.866, trong khi cos 15° + cos 15° ≈ 1.932 vẫn dương; nhưng trong tam giác suy biến hoặc góc tù lớn hơn thì cos A chi phối mạnh.",
        tip: "Khẩu quyết sống còn: 'Góc tù thì Cos âm, Tan và Cot cùng âm, chỉ duy nhất Sin là dương'.",
        visual: "signs"
      },
      {
        eyebrow: "CÁC GÓC BIÊN",
        title: "Giá trị tại các vị trí đặc biệt: 0°, 90°, 180°",
        body: "Tại 0°: M(1; 0) ⇒ cos 0° = 1, sin 0° = 0, tan 0° = 0, cot 0° không xác định. Tại 90°: M(0; 1) ⇒ cos 90° = 0, sin 90° = 1, tan 90° không xác định, cot 90° = 0. Tại 180°: M(−1; 0) ⇒ cos 180° = −1, sin 180° = 0, tan 180° = 0, cot 180° không xác định.",
        formula: "cos 90° = 0  ·  sin 90° = 1  ·  tan 90° không xác định  ·  cot 90° = 0",
        example: "Tính giá trị biểu thức H = sin 90° + cos 180° + cos 90°.\n• sin 90° = 1.\n• cos 180° = −1.\n• cos 90° = 0.\n• H = 1 + (−1) + 0 = 0.",
        advanced: "Phương trình cos x = 0 có nghiệm nào trong đoạn [0°; 180°]?\n→ Lời giải: Trên nửa đường tròn đơn vị, chỉ có duy nhất điểm đỉnh cao nhất tại góc 90° có hoành độ bằng 0. Vậy nghiệm duy nhất là x = 90°.",
        tip: "Lưu ý bài thi: Số 0 là số không âm cũng không dương. Khi cos 90° = 0 thì nó không mang dấu dương hay âm.",
        visual: "signs"
      },
      {
        eyebrow: "GÓC BÙ NHAU",
        title: "Quan hệ dấu của hai góc bù nhau",
        body: "Hai góc bù nhau có tổng bằng 180°: α và 180° − α. Hai điểm biểu diễn đối xứng qua trục Oy nên tung độ bằng nhau và hoành độ đối nhau. Do đó sin giữ nguyên giá trị, còn cos, tan, cot đổi dấu.",
        formula: "sin(180° − α) = sin α  ·  cos(180° − α) = −cos α  ·  tan(180° − α) = −tan α",
        example: "Rút gọn S = cos 20° + cos 40° + cos 140° + cos 160°.\n• cos 160° = cos(180° − 20°) = −cos 20°.\n• cos 140° = cos(180° − 40°) = −cos 40°.\n• S = cos 20° + cos 40° − cos 40° − cos 20° = 0.",
        advanced: "Tính giá trị của tích P = tan 10° · tan 20° · ... · tan 170°.\n• tan 170° = −tan 10°; tan 160° = −tan 20°, ...\n• Cặp tan 90° không xác định nên tích này chỉ xét các giá trị xác định; tuy nhiên tại 90° hàm tan không xác định nên biểu thức tổng quát trên không xác định.",
        tip: "Khi thấy các cặp góc có tổng bằng 180° (như 20° và 160°), chúng triệt tiêu nhau khi cộng cos!",
        visual: "signs"
      },
      {
        eyebrow: "GÓC PHỤ NHAU",
        title: "Đổi hàm khi hai góc phụ nhau (tổng bằng 90°)",
        body: "Hai góc phụ nhau có tổng bằng 90°: α và 90° − α. Tung độ của góc này là hoành độ của góc kia: sin(90° − α) = cos α; cos(90° − α) = sin α; tan(90° − α) = cot α; cot(90° − α) = tan α.",
        formula: "sin(90° − α) = cos α  ·  cos(90° − α) = sin α  ·  tan(90° − α) = cot α",
        example: "Rút gọn A = sin² 25° + sin² 65°.\n• Vì 25° + 65° = 90°, ta có sin 65° = cos 25°.\n• Do đó A = sin² 25° + cos² 25° = 1.",
        advanced: "Tính giá trị biểu thức Q = (sin 35° / cos 55°) + (tan 20° / cot 70°).\n→ Lời giải: Vì 35° + 55° = 90° nên sin 35° = cos 55° ⇒ tỉ số bằng 1. Vì 20° + 70° = 90° nên tan 20° = cot 70° ⇒ tỉ số bằng 1. Vậy Q = 1 + 1 = 2.",
        tip: "Mẹo nhớ: 'Phụ chéo' - tức là phụ nhau thì đổi chéo sin thành cos, tan thành cot.",
        visual: "signs"
      },
      {
        eyebrow: "KỸ THUẬT XÉT DẤU BIỂU THỨC",
        title: "Phương pháp xét dấu tích, thương lượng giác trong tam giác",
        body: "Để xét dấu biểu thức tích hoặc thương của nhiều góc lượng giác trong tam giác ABC: 1) Nhớ rằng trong mọi tam giác, 0° < A, B, C < 180° nên sin A, sin B, sin C luôn DƯƠNG; 2) Dấu của biểu thức hoàn toàn phụ thuộc vào dấu của các hàm Cosin tương ứng; 3) Tam giác chỉ có tối đa một góc tù.",
        formula: "Trong tam giác ABC: sin A, sin B, sin C luôn > 0",
        example: "Xét dấu biểu thức T = sin A · sin B · sin C trong tam giác ABC.\n• Vì A, B, C là các góc trong tam giác nên 0° < A, B, C < 180°.\n• Suy ra sin A > 0, sin B > 0, sin C > 0.\n• Tích của ba số dương là số dương. Vậy T > 0 trong mọi tam giác.",
        advanced: "Cho tam giác nhọn ABC. Xét dấu biểu thức M = cos A · cos B · cos C.\n→ Lời giải: Vì tam giác nhọn nên 0° < A, B, C < 90°, do đó cos A > 0, cos B > 0, cos C > 0. Tích ba số dương là số dương: M > 0.",
        tip: "Nếu tam giác có một góc tù, tích ba cosin sẽ mang dấu âm; nếu tam giác nhọn, tích ba cosin mang dấu dương; nếu tam giác vuông, tích ba cosin bằng 0.",
        visual: "signs"
      },
      {
        eyebrow: "TỔNG KẾT VÀ BẪY ĐỀ THI",
        title: "Bảng tổng hợp dấu và chiến lược giải bài thi lượng giác",
        body: "Bảng vàng dấu lượng giác: Góc nhọn (0° đến 90°): Tất cả (+). Góc tù (90° đến 180°): Sin (+), Cos (−), Tan (−), Cot (−). Góc vuông 90°: Cos = 0, Sin = 1, Tan không xác định, Cot = 0. Hai góc bù nhau: Sin bằng nhau, ba hàm kia đối dấu nhau.",
        formula: "Khẩu quyết: 'Góc tù Cos âm, Sin luôn dương'",
        example: "Đề bài cho biết sin α = 3/5. Bạn An kết luận ngay cos α = 4/5. Bạn An đúng hay sai?\n• Bạn An SAI vì nếu α là góc tù thì cos α = −4/5. Đề bài chưa cho điều kiện góc nhọn hay tù nên không thể khẳng định dấu của cos α.",
        advanced: "Tìm x ∈ (90°; 180°) thỏa mãn sin x = 1/2.\n→ Lời giải: sin x = 1/2 thì x = 30° hoặc x = 180° − 30° = 150°. Vì x thuộc khoảng góc tù (90°; 180°) nên nghiệm duy nhất là x = 150°.",
        tip: "Chiến thuật phòng thi: Đọc kỹ đề xem đề cho 'góc nhọn', 'góc tù' hay không cho gì để tránh mất điểm đáng tiếc.",
        visual: "signs"
      }
    ]
  },
  {
    id: "cosine",
    chapterId: "chuong-3",
    chapterTitle: "Chương III: Hệ thức lượng trong tam giác",
    lessonNumber: "Bài 6",
    title: "Định lý cosin trong tam giác",
    shortTitle: "Định lý cosin",
    description: "Tính cạnh, tính góc, độ dài đường trung tuyến và nhận dạng tam giác.",
    duration: "14 phút",
    visual: "triangle",
    slides: [
      {
        eyebrow: "QUY ƯỚC KÝ HIỆU",
        title: "Quy ước cạnh và góc chuẩn trong tam giác ABC",
        body: "Trong tam giác ABC: Góc A đối diện cạnh a = BC; Góc B đối diện cạnh b = CA; Góc C đối diện cạnh c = AB. Góc A kẹp giữa hai cạnh b và c; Góc B kẹp giữa hai cạnh a và c; Góc C kẹp giữa hai cạnh a và b.",
        formula: "a = BC  ·  b = CA  ·  c = AB  ·  Góc A kẹp giữa b và c",
        example: "Cho tam giác ABC có AB = 5, AC = 7, BC = 8. Xác định a, b, c và góc đối diện.\n• Cạnh a = BC = 8, đối diện góc A.\n• Cạnh b = AC = 7, đối diện góc B.\n• Cạnh c = AB = 5, đối diện góc C.",
        advanced: "Trong tam giác ABC, góc lớn nhất luôn đối diện với cạnh nào?\n→ Lời giải: Theo quan hệ giữa cạnh và góc trong tam giác, góc lớn nhất luôn đối diện với cạnh có độ dài lớn nhất. Ở ví dụ trên, cạnh a = 8 lớn nhất nên góc A là góc lớn nhất.",
        tip: "Luôn vẽ hình phác thảo và điền đúng vị trí cạnh đối diện để không lắp nhầm số vào công thức.",
        visual: "triangle"
      },
      {
        eyebrow: "ĐỊNH LÝ TỔNG QUÁT",
        title: "Định lý cosin: Mở rộng của định lý Pythagore",
        body: "Trong tam giác ABC bất kỳ, bình phương một cạnh bằng tổng bình phương hai cạnh kia trừ đi hai lần tích của hai cạnh đó nhân với cosin của góc xen giữa. Khi góc A = 90° (tam giác vuông), cos A = 0, công thức trở về định lý Pythagore quen thuộc.",
        formula: "a² = b² + c² − 2bc cos A  ·  b² = a² + c² − 2ac cos B  ·  c² = a² + b² − 2ab cos C",
        example: "Tam giác ABC có b = 6, c = 8 và góc A = 60°. Tính độ dài cạnh a.\n• Áp dụng định lý: a² = b² + c² − 2bc cos A = 6² + 8² − 2·6·8·cos 60°.\n• Thay cos 60° = 1/2: a² = 36 + 64 − 96·(1/2) = 100 − 48 = 52.\n• Lấy căn bậc hai: a = √52 = 2√13 ≈ 7.21.",
        advanced: "Tam giác ABC có b = 4, c = 5 và góc A = 120°. Tính cạnh a.\n• cos 120° = −1/2 (dấu âm).\n• a² = 4² + 5² − 2·4·5·(−1/2) = 16 + 25 + 20 = 61.\n• Suy ra a = √61 ≈ 7.81.",
        tip: "Cẩn thận bẫy dấu: Khi góc xen giữa là góc tù, cos của nó âm nên dấu trừ biến thành dấu cộng!",
        visual: "triangle"
      },
      {
        eyebrow: "HỆ QUẢ TÍNH GÓC",
        title: "Công thức tính cosin của góc khi biết độ dài 3 cạnh",
        body: "Chuyển vế định lý cosin, ta có công thức tính trực tiếp góc trong tam giác khi biết độ dài cả ba cạnh. Để tìm số đo góc theo độ, bấm máy tính cầm tay phím Shift Cos (arccos) và đặt đơn vị đo góc ở chế độ Degree.",
        formula: "cos A = (b² + c² − a²) / (2bc)  ·  cos B = (a² + c² − b²) / (2ac)",
        example: "Tam giác ABC có a = 7, b = 5, c = 3. Tính góc A.\n• Áp dụng công thức: cos A = (b² + c² − a²) / (2bc) = (5² + 3² − 7²) / (2·5·3).\n• Tử số: 25 + 9 − 49 = −15. Mẫu số: 30.\n• cos A = −15 / 30 = −1/2.\n• Bấm Shift Cos(−1/2): Ta được góc A = 120°.",
        advanced: "Tam giác ABC có a = 3, b = 4, c = 5. Tính góc C.\n→ Lời giải: cos C = (3² + 4² − 5²) / (2·3·4) = (9 + 16 − 25) / 24 = 0 / 24 = 0 ⇒ C = 90° (tam giác vuông tại C).",
        tip: "Dấu của tử số quyết định loại góc: Tử số > 0 thì góc nhọn, tử số = 0 thì góc vuông, tử số < 0 thì góc tù.",
        visual: "triangle"
      },
      {
        eyebrow: "NHẬN DẠNG TAM GIÁC",
        title: "Nhận dạng tam giác nhọn, vuông, tù qua định lý cosin",
        body: "Để biết tam giác là tam giác nhọn, vuông hay tù, ta chỉ cần so sánh bình phương cạnh lớn nhất với tổng bình phương hai cạnh còn lại. Gọi a là cạnh lớn nhất: Nếu a² < b² + c² thì tam giác nhọn; Nếu a² = b² + c² thì tam giác vuông; Nếu a² > b² + c² thì tam giác tù tại A.",
        formula: "a² < b² + c² (nhọn)  ·  a² = b² + c² (vuông)  ·  a² > b² + c² (tù)",
        example: "Tam giác có 3 cạnh là 4, 5, 7 là loại tam giác gì?\n• Cạnh lớn nhất là a = 7. Tính a² = 7² = 49.\n• Tổng bình phương hai cạnh kia: b² + c² = 4² + 5² = 16 + 25 = 41.\n• So sánh: 49 > 41 (a² > b² + c²).\n• Kết luận: Tam giác là tam giác tù, góc tù đối diện cạnh 7.",
        advanced: "Tìm điều kiện để tam giác có ba cạnh 5, 12, x là một tam giác vuông.\n→ Lời giải: Trường hợp 1: x là cạnh huyền ⇒ x² = 5² + 12² = 169 ⇒ x = 13. Trường hợp 2: 12 là cạnh huyền ⇒ x² = 12² − 5² = 144 − 25 = 119 ⇒ x = √119.",
        tip: "Luôn kiểm tra cạnh lớn nhất trước tiên! Không cần xét hai cạnh nhỏ hơn vì góc đối diện cạnh nhỏ luôn là góc nhọn.",
        visual: "triangle"
      },
      {
        eyebrow: "ĐỘ DÀI ĐƯỜNG TRUNG TUYẾN",
        title: "Công thức độ dài đường trung tuyến trong tam giác",
        body: "Độ dài đường trung tuyến ma xuất phát từ đỉnh A đến trung điểm cạnh đối diện a được tính qua độ dài 3 cạnh của tam giác bằng công thức trung tuyến. Công thức này được suy ra trực tiếp từ định lý cosin áp dụng cho tam giác con.",
        formula: "ma² = (2b² + 2c² − a²) / 4  ·  mb² = (2a² + 2c² − b²) / 4  ·  mc² = (2a² + 2b² − c²) / 4",
        example: "Tam giác ABC có a = 6, b = 8, c = 10. Tính độ dài đường trung tuyến ma.\n• ma² = (2b² + 2c² − a²) / 4 = [2(8²) + 2(10²) − 6²] / 4.\n• ma² = [2(64) + 2(100) − 36] / 4 = [128 + 200 − 36] / 4 = 292 / 4 = 73.\n• Độ dài trung tuyến ma = √73 ≈ 8.54.",
        advanced: "Tam giác vuông tại A có cạnh huyền a = 10. Tính ma bằng công thức trung tuyến.\n→ Lời giải: ma² = (2b² + 2c² − a²) / 4. Vì tam giác vuông tại A nên b² + c² = a² = 100. Suy ra ma² = (2·100 − 100) / 4 = 100 / 4 = 25 ⇒ ma = 5 = a/2. Hoàn toàn khớp tính chất hình học!",
        tip: "Mẹo nhớ công thức trung tuyến: Hai cạnh kề nhân 2 trừ đi cạnh đối diện rồi chia cho 4.",
        visual: "triangle"
      },
      {
        eyebrow: "ỨNG DỤNG THỰC TẾ 1",
        title: "Đo khoảng cách giữa hai điểm không đến được",
        body: "Trong trắc địa, để đo khoảng cách giữa hai điểm A và B bị ngăn cách bởi hồ nước hay chướng ngại vật: Ta chọn một vị trí quan sát C sao cho có thể đo được khoảng cách CA = b, CB = a và ngắm đo được góc xen giữa C = ACB. Khoảng cách AB được tính bằng định lý cosin.",
        formula: "AB² = CA² + CB² − 2 · CA · CB · cos C",
        example: "Đo khoảng cách hai bờ hồ AB. Từ điểm C ngắm được CA = 150m, CB = 200m và góc C = 60°.\n• AB² = 150² + 200² − 2·150·200·cos 60° = 22500 + 40000 − 60000·(1/2).\n• AB² = 62500 − 30000 = 32500.\n• Khoảng cách AB = √32500 ≈ 180.28 mét.",
        advanced: "Hai tàu thủy rời cảng cùng một lúc, tàu thứ nhất chạy theo hướng Đông với tốc độ 30 km/h, tàu thứ hai chạy theo hướng Đông Bắc góc 45° với tốc độ 40 km/h. Sau 2 giờ, hai tàu cách nhau bao nhiêu km?\n→ Lời giải: Sau 2h: b = 60 km, c = 80 km, góc xen giữa A = 45°. a² = 60² + 80² − 2·60·80·cos 45° = 3600 + 6400 − 9600·(√2/2) = 10000 − 4800√2 ≈ 3211.77 ⇒ a ≈ 56.67 km.",
        tip: "Luôn vẽ hình tam giác thể hiện sơ đồ chuyển động để xác định chính xác góc kẹp giữa hai hướng đi.",
        visual: "triangle"
      },
      {
        eyebrow: "ỨNG DỤNG HÌNH HỌC PHẲNG",
        title: "Tính đường chéo hình bình hành và hình thoi",
        body: "Trong hình bình hành ABCD có hai cạnh kề a, b và góc nhọn α: Đường chéo ngắn d1 đối diện góc α tính theo định lý cosin với góc α; Đường chéo dài d2 đối diện góc bù (180° − α) tính theo định lý cosin với góc tù.",
        formula: "d1² = a² + b² − 2ab cos α  ·  d2² = a² + b² + 2ab cos α  ·  d1² + d2² = 2(a² + b²)",
        example: "Hình bình hành ABCD có AB = 4, AD = 6 và góc A = 60°. Tính độ dài đường chéo BD.\n• Trong tam giác ABD, cạnh BD đối diện góc A = 60°.\n• BD² = AB² + AD² − 2·AB·AD·cos 60° = 4² + 6² − 2·4·6·(1/2) = 16 + 36 − 24 = 28.\n• BD = √28 = 2√7 ≈ 5.29.",
        advanced: "Tính đường chéo AC của hình bình hành trên.\n→ Lời giải: Góc B bù với góc A nên B = 120°. Áp dụng tam giác ABC: AC² = AB² + BC² − 2·AB·BC·cos 120° = 16 + 36 − 48(−1/2) = 52 + 24 = 76 ⇒ AC = √76 = 2√19 ≈ 8.72.",
        tip: "Đẳng thức hình bình hành: Tổng bình phương hai đường chéo bằng tổng bình phương 4 cạnh: d1² + d2² = 2(a² + b²).",
        visual: "triangle"
      },
      {
        eyebrow: "TỔNG KẾT VÀ BẪY ĐỀ THI",
        title: "Chiến thuật giải nhanh bài toán định lý cosin",
        body: "Các bẫy đề thi cần nhớ: 1) Nhầm cạnh đối diện góc trong công thức (cạnh đứng riêng ở vế trái phải luôn là cạnh đối diện góc ở vế phải); 2) Quên đổi dấu âm khi góc tù; 3) Quên lấy căn bậc hai khi đề bài hỏi độ dài cạnh a (mới chỉ tính ra a²).",
        formula: "Bấm máy: Shift Cos((b² + c² − a²) / (2bc)) để ra số đo góc tức thì",
        example: "Tam giác có ba cạnh tỉ lệ 2 : 3 : 4. Tính cosin của góc nhỏ nhất.\n• Góc nhỏ nhất đối diện cạnh nhỏ nhất (cạnh 2x).\n• cos = (3² + 4² − 2²) / (2·3·4) = (9 + 16 − 4) / 24 = 21 / 24 = 7/8.",
        advanced: "Cho tam giác ABC có b + c = 2a. Chứng minh rằng 2 sin A = sin B + sin C.\n→ Lời giải: Theo định lý sin: a = 2R sin A, b = 2R sin B, c = 2R sin C. Thay vào giả thiết: 2R sin B + 2R sin C = 2(2R sin A) ⇔ sin B + sin C = 2 sin A.",
        tip: "Khi đề cho cạnh tỉ lệ: Đặt cạnh là 2x, 3x, 4x; biến x sẽ tự động triệt tiêu ở cả tử và mẫu khi lập tỉ số cos!",
        visual: "triangle"
      }
    ]
  },
  {
    id: "sine-law",
    chapterId: "chuong-3",
    chapterTitle: "Chương III: Hệ thức lượng trong tam giác",
    lessonNumber: "Bài 7",
    title: "Định lý sin và diện tích tam giác",
    shortTitle: "Định lý sin",
    description: "Định lý sin, bán kính đường tròn ngoại tiếp, nội tiếp và 5 công thức diện tích tam giác.",
    duration: "14 phút",
    visual: "triangle",
    slides: [
      {
        eyebrow: "ĐỊNH LÝ SIN",
        title: "Tỉ số giữa độ dài cạnh và sin của góc đối diện",
        body: "Trong tam giác ABC có bán kính đường tròn ngoại tiếp R, tỉ số giữa mỗi cạnh và sin của góc đối diện luôn bằng nhau và bằng đường kính 2R của đường tròn ngoại tiếp đó. Định lý này đặc biệt hiệu quả khi biết một cạnh và hai góc, hoặc biết hai cạnh và một góc đối diện.",
        formula: "a / sin A = b / sin B = c / sin C = 2R",
        example: "Tam giác ABC có a = 10 và góc A = 30°. Tính bán kính đường tròn ngoại tiếp R.\n• Áp dụng định lý sin: 2R = a / sin A = 10 / sin 30° = 10 / (1/2) = 20.\n• Suy ra bán kính R = 20 / 2 = 10.",
        advanced: "Tam giác ABC có góc B = 60°, góc C = 45° và cạnh b = 6. Tính độ dài cạnh c.\n→ Lời giải: Theo định lý sin: c / sin C = b / sin B ⇒ c = b · sin C / sin B = 6 · sin 45° / sin 60° = 6 · (√2/2) / (√3/2) = 6√2 / √3 = 2√6.",
        tip: "Lỗi phổ biến nhất: Nhầm tỉ số a / sin A bằng bán kính R thay vì đường kính 2R!",
        visual: "triangle"
      },
      {
        eyebrow: "CÔNG THỨC DIỆN TÍCH 1",
        title: "Diện tích theo hai cạnh và góc xen giữa",
        body: "Diện tích tam giác bằng một nửa tích hai cạnh nhân với sin của góc xen giữa hai cạnh đó. Đây là công thức diện tích lượng giác được sử dụng nhiều nhất trong chương trình toán phổ thông.",
        formula: "S = 1/2 ab sin C = 1/2 bc sin A = 1/2 ca sin B",
        example: "Tam giác ABC có a = 8, b = 10 và góc C = 30°. Tính diện tích tam giác S.\n• Áp dụng công thức: S = 1/2 · a · b · sin C = 1/2 · 8 · 10 · sin 30°.\n• Thay sin 30° = 1/2: S = 40 · (1/2) = 20.",
        advanced: "Tam giác ABC có diện tích S = 15, cạnh a = 6, b = 10. Tìm số đo góc C.\n→ Lời giải: S = 1/2 ab sin C ⇔ 15 = 1/2 · 6 · 10 · sin C ⇔ 30 sin C = 15 ⇔ sin C = 1/2. Vì C là góc tam giác nên C = 30° hoặc C = 150° (hai trường hợp góc nhọn hoặc tù).",
        tip: "Cảnh báo đề thi: Khi biết sin C = 1/2, góc C có thể bằng 30° HOẶC 150° nếu đề không cho điều kiện tam giác nhọn!",
        visual: "triangle"
      },
      {
        eyebrow: "CÔNG THỨC DIỆN TÍCH 2",
        title: "Công thức diện tích liên hệ bán kính ngoại tiếp R",
        body: "Từ định lý sin sin C = c / (2R), thay vào công thức diện tích S = 1/2 ab sin C ta được công thức tính diện tích qua tích 3 cạnh chia cho 4R. Từ đó suy ra R = abc / (4S).",
        formula: "S = abc / (4R)  ⇒  R = abc / (4S)",
        example: "Tam giác ABC có a = 5, b = 6, c = 7 và diện tích S = 6√6. Tính bán kính R.\n• Tích 3 cạnh: abc = 5 · 6 · 7 = 210.\n• R = abc / (4S) = 210 / (4 · 6√6) = 210 / (24√6) = 35 / (4√6) = 35√6 / 24.",
        advanced: "Tam giác vuông tại A có hai cạnh góc vuông b = 6, c = 8. Tính bán kính R bằng hai cách.\n→ Lời giải: Cách 1: Tam giác vuông nên R = a/2. a = √(6² + 8²) = 10 ⇒ R = 5. Cách 2: S = 1/2 · 6 · 8 = 24. R = (10·6·8) / (4·24) = 480 / 96 = 5. Hai cách cho cùng kết quả!",
        tip: "Công thức R = abc / (4S) là công cụ nhanh nhất để tìm bán kính đường tròn ngoại tiếp khi biết độ dài cả 3 cạnh.",
        visual: "triangle"
      },
      {
        eyebrow: "BÁN KÍNH NỘI TIẾP r",
        title: "Diện tích theo nửa chu vi và bán kính nội tiếp r",
        body: "Gọi p = (a + b + c)/2 là nửa chu vi tam giác và r là bán kính đường tròn nội tiếp (tiếp xúc trong với cả 3 cạnh). Diện tích tam giác bằng nửa chu vi nhân bán kính nội tiếp: S = p · r. Suy ra r = S / p.",
        formula: "S = p · r  ⇒  r = S / p  (với p = (a + b + c) / 2)",
        example: "Tam giác ABC có a = 5, b = 7, c = 8 và diện tích S = 10√3. Tính bán kính nội tiếp r.\n• Nửa chu vi: p = (5 + 7 + 8) / 2 = 20 / 2 = 10.\n• Bán kính nội tiếp: r = S / p = (10√3) / 10 = √3.",
        advanced: "Tính bán kính đường tròn nội tiếp của tam giác vuông có hai cạnh góc vuông là 6 và 8.\n→ Lời giải: Cạnh huyền a = 10. Nửa chu vi p = (6 + 8 + 10) / 2 = 12. Diện tích S = 1/2 · 6 · 8 = 24. Bán kính r = S / p = 24 / 12 = 2.",
        tip: "Công thức tính nhanh r cho tam giác vuông tại A: r = (b + c − a) / 2 = (6 + 8 − 10) / 2 = 2.",
        visual: "triangle"
      },
      {
        eyebrow: "CÔNG THỨC HÊ-RÔNG",
        title: "Công thức Hê-rông: Tính diện tích chỉ từ 3 cạnh",
        body: "Khi biết độ dài ba cạnh a, b, c của một tam giác mà không biết bất kỳ góc nào, công thức Hê-rông là công cụ mạnh mẽ nhất để tính trực tiếp diện tích tam giác thông qua nửa chu vi p.",
        formula: "S = √(p(p − a)(p − b)(p − c))  với p = (a + b + c) / 2",
        example: "Tính diện tích tam giác có các cạnh a = 13, b = 14, c = 15.\n• Nửa chu vi: p = (13 + 14 + 15) / 2 = 42 / 2 = 21.\n• Các hiệu: p − a = 8; p − b = 7; p − c = 6.\n• S = √(21 · 8 · 7 · 6) = √(7 · 3 · 8 · 7 · 6) = √(7² · 144) = 7 · 12 = 84.",
        advanced: "Tính chiều cao ha tương ứng với cạnh a = 13 của tam giác trên.\n→ Lời giải: Ta có S = 1/2 · a · ha ⇒ ha = 2S / a = (2 · 84) / 13 = 168 / 13 ≈ 12.92.",
        tip: "Kỹ thuật tách thừa số: Khi tính biểu thức trong căn của Hê-rông, hãy phân tích ra thừa số nguyên tố thay vì nhân dồn thành số lớn rồi mới bấm căn!",
        visual: "triangle"
      },
      {
        eyebrow: "ỨNG DỤNG THỰC TẾ",
        title: "Đo chiều cao của tháp hoặc núi từ xa",
        body: "Để đo chiều cao h của một ngọn tháp CD trên đỉnh núi mà chân tháp D không thể tiếp cận: Ta cắm hai giác kế tại hai điểm A và B trên mặt đất thẳng hàng với chân tháp, cách nhau khoảng d = AB. Đo các góc nâng CAD = α và CBD = β. Áp dụng định lý sin trong tam giác ABC rồi tính h.",
        formula: "Tính cạnh AC qua định lý sin trong tam giác ABC → Chiều cao h = AC · sin α",
        example: "Đo chiều cao tháp CD. Đo được AB = 40m, góc CAD = 60°, góc CBD = 45°. Tính CD.\n• Trong tam giác ABC: góc ACB = 60° − 45° = 15°.\n• Theo định lý sin: AC / sin 45° = AB / sin 15° ⇒ AC = 40 · sin 45° / sin 15° ≈ 109.28m.\n• Chiều cao tháp: h = CD = AC · sin 60° ≈ 109.28 · (√3/2) ≈ 94.64 mét.",
        advanced: "Một người đứng tại ngọn hải đăng cao 50m nhìn thấy hai chiếc tàu dưới các góc hạ 30° và 45°. Khoảng cách giữa hai tàu là bao nhiêu nếu hai tàu và chân hải đăng thẳng hàng?\n→ Lời giải: Khoảng cách từ tàu 1 đến chân tháp: d1 = 50 / tan 30° = 50√3 ≈ 86.6m. Tàu 2: d2 = 50 / tan 45° = 50m. Khoảng cách hai tàu = 50√3 − 50 ≈ 36.6m (hoặc 136.6m nếu ở hai phía).",
        tip: "Luôn xác định rõ hai trường hợp: Hai đối tượng nằm cùng một phía hay nằm ở hai phía so với điểm quan sát.",
        visual: "triangle"
      },
      {
        eyebrow: "HỆ THỐNG 5 CÔNG THỨC DIỆN TÍCH",
        title: "Bảng tổng hợp 5 công thức tính diện tích tam giác",
        body: "Bộ 5 công thức diện tích tam giác kinh điển cần thuộc lòng: 1) S = 1/2 a ha (đáy nhân chiều cao); 2) S = 1/2 ab sin C (hai cạnh và góc xen giữa); 3) S = abc / (4R) (ba cạnh và bán kính ngoại tiếp); 4) S = p · r (nửa chu vi và bán kính nội tiếp); 5) S = √(p(p−a)(p−b)(p−c)) (công thức Hê-rông).",
        formula: "1/2 a ha = 1/2 ab sin C = abc / (4R) = p · r = √(p(p−a)(p−b)(p−c))",
        example: "Chọn công thức nào khi biết độ dài 3 cạnh a = 5, b = 6, c = 7 và cần tìm bán kính r?\n• Bước 1: Dùng công thức Hê-rông (5) để tính diện tích S.\n• Bước 2: Dùng công thức S = p · r (4) để tìm r = S / p.",
        advanced: "Chứng minh rằng trong tam giác đều cạnh a: S = a²√3 / 4; R = a√3 / 3; r = a√3 / 6.\n→ Lời giải: Tam giác đều có góc 60°: S = 1/2 · a · a · sin 60° = a²√3/4. p = 3a/2. r = S/p = (a²√3/4) / (3a/2) = a√3/6. R = abc/(4S) = a³ / (a²√3) = a√3/3 = 2r.",
        tip: "Bí quyết chọn công thức: Nhìn dữ kiện đề bài cho để ghép nối hai công thức diện tích lại với nhau để giải ẩn cần tìm!",
        visual: "triangle"
      },
      {
        eyebrow: "TỔNG KẾT VÀ BẪY ĐỀ THI",
        title: "Chiến thuật giải trắc nghiệm Hệ thức lượng tam giác",
        body: "Các bẫy đề thi kinh điển: 1) Nhầm giữa bán kính ngoại tiếp R và nội tiếp r; 2) Bỏ sót trường hợp góc tù khi biết sin góc bằng 1/2 hoặc √2/2; 3) Quên nhân hệ số 1/2 trong công thức diện tích S = 1/2 ab sin C.",
        formula: "Tóm tắt: Định lý sin dùng khi có cặp CẠNH - GÓC ĐỐI DIỆN",
        example: "Dấu hiệu nhận biết dùng định lý Sin hay định lý Cosin:\n• Nếu đề bài cho hoặc hỏi về BÁN KÍNH NGOẠI TIẾP R ⇒ 99% dùng định lý Sin (a / sin A = 2R).\n• Nếu đề bài cho 3 CẠNH hoặc 2 CẠNH VÀ GÓC XEN GIỮA ⇒ Dùng định lý Cosin.",
        advanced: "Cho tam giác ABC có a = 2b cos C. Tam giác ABC là tam giác gì?\n→ Lời giải: Theo định lý cosin: cos C = (a² + b² − c²) / (2ab). Thay vào: a = 2b · (a² + b² − c²) / (2ab) ⇔ a = (a² + b² − c²) / a ⇔ a² = a² + b² − c² ⇔ b² = c² ⇔ b = c. Vậy tam giác ABC cân tại A.",
        tip: "Dạng bài nhận dạng tam giác: Luôn quy đổi góc về cạnh (qua định lý Cosin hoặc Sin) rồi rút gọn đẳng thức đại số.",
        visual: "triangle"
      }
    ]
  },
  {
    id: "vectors-intro",
    chapterId: "chuong-4",
    chapterTitle: "Chương IV: Vectơ",
    lessonNumber: "Bài 8",
    title: "Khái niệm vectơ và phép toán cộng trừ",
    shortTitle: "Vectơ",
    description: "Đoạn thẳng có hướng, hai vectơ bằng nhau, đối nhau và các quy tắc cộng trừ.",
    duration: "14 phút",
    visual: "vector",
    slides: [
      {
        eyebrow: "KHÁI NIỆM ĐOẠN THẲNG CÓ HƯỚNG",
        title: "Vectơ là gì? Điểm đầu, điểm cuối và độ dài",
        body: "Vectơ là một đoạn thẳng có hướng, nghĩa là trong hai điểm mút của đoạn thẳng đã chỉ rõ điểm nào là điểm đầu (gốc), điểm nào là điểm cuối (ngọn). Kí hiệu vectơ có điểm đầu A và điểm cuối B là AB→. Độ dài của vectơ AB→ là khoảng cách giữa A và B, kí hiệu là |AB→| = AB.",
        formula: "Vectơ AB→ có điểm đầu A, điểm cuối B  ·  Độ dài |AB→| = AB",
        example: "Cho hình vuông ABCD cạnh a = 4. Tính độ dài của các vectơ AB→, BC→ và AC→.\n• |AB→| = AB = 4.\n• |BC→| = BC = 4.\n• Độ dài đường chéo hình vuông: AC = √(4² + 4²) = 4√2. Vậy |AC→| = 4√2.",
        advanced: "Với 4 điểm phân biệt A, B, C, D không thẳng hàng, có thể tạo được bao nhiêu vectơ khác vectơ-không có điểm đầu và điểm cuối là các điểm đã cho?\n→ Lời giải: Chọn 2 điểm có phân biệt thứ tự điểm đầu và điểm cuối trong 4 điểm: A_4^2 = 4 · 3 = 12 vectơ.",
        tip: "Phân biệt đoạn thẳng và vectơ: Đoạn thẳng AB = BA, nhưng vectơ AB→ khác hoàn toàn vectơ BA→ về hướng!",
        visual: "vector"
      },
      {
        eyebrow: "PHƯƠNG VÀ HƯỚNG",
        title: "Hai vectơ cùng phương, cùng hướng và vectơ-không",
        body: "Đường thẳng đi qua điểm đầu và điểm cuối của vectơ gọi là giá của vectơ đó. Hai vectơ được gọi là cùng phương nếu giá của chúng song song hoặc trùng nhau. Hai vectơ cùng phương thì có thể cùng hướng hoặc ngược hướng. Vectơ-không (kí hiệu 0→) có điểm đầu và điểm cuối trùng nhau, độ dài bằng 0 và được quy ước là cùng phương, cùng hướng với mọi vectơ.",
        formula: "Cùng phương ⇔ Giá song song hoặc trùng nhau  ·  Vectơ-không: 0→ = AA→ (|0→| = 0)",
        example: "Cho hình bình hành ABCD tâm O. Chỉ ra các vectơ cùng hướng và ngược hướng với AB→.\n• Các vectơ có giá song song hoặc trùng với AB là: AB→, BA→, CD→, DC→.\n• Vectơ cùng hướng với AB→: DC→.\n• Vectơ ngược hướng với AB→: BA→ và CD→.",
        advanced: "Ba điểm phân biệt A, B, C thẳng hàng khi và chỉ khi hai vectơ nào cùng phương?\n→ Lời giải: Ba điểm A, B, C thẳng hàng khi và chỉ khi hai vectơ AB→ và AC→ cùng phương (tức tồn tại số thực k ≠ 0 sao cho AB→ = k · AC→).",
        tip: "Nhớ kỹ: Hai vectơ cùng hướng thì bắt buộc phải cùng phương; nhưng hai vectơ cùng phương thì có thể ngược hướng nhau.",
        visual: "vector"
      },
      {
        eyebrow: "BẰNG NHAU VÀ ĐỐI NHAU",
        title: "Hai vectơ bằng nhau và hai vectơ đối nhau",
        body: "Hai vectơ được gọi là bằng nhau nếu chúng có cùng hướng và cùng độ dài: a→ = b→ ⇔ (|a→| = |b→| và a→ cùng hướng b→). Hai vectơ được gọi là đối nhau nếu chúng có cùng độ dài nhưng ngược hướng nhau. Vectơ đối của AB→ là −AB→ = BA→.",
        formula: "a→ = b→ (cùng hướng và cùng độ dài)  ·  Vectơ đối: −AB→ = BA→  ·  AB→ + BA→ = 0→",
        example: "Cho hình bình hành ABCD. Cặp vectơ nào bằng nhau?\n• AB→ = DC→ (cùng hướng từ trái sang phải, cùng độ dài AB = DC).\n• AD→ = BC→ (cùng hướng từ dưới lên trên, cùng độ dài AD = BC).\n• Cặp vectơ đối nhau: AB→ và CD→ (ngược hướng nhau).",
        advanced: "Cho tam giác ABC. Gọi M, N lần lượt là trung điểm của AB và AC. Tìm các vectơ bằng vectơ MN→.\n→ Lời giải: MN là đường trung bình của tam giác ABC nên MN song song và bằng 1/2 BC. Gọi P là trung điểm BC thì MN→ = BP→ = PC→.",
        tip: "Lỗi kinh điển: Ghi AB→ = CD→ trong hình bình hành ABCD là SAI vì AB→ đi từ A đến B (sang phải), còn CD→ đi từ C đến D (sang trái) nên chúng ngược hướng nhau! Phải viết AB→ = DC→.",
        visual: "vector"
      },
      {
        eyebrow: "QUY TẮC BA ĐIỂM (CỘNG)",
        title: "Quy tắc 3 điểm: Nối đuôi liên tiếp trong phép cộng",
        body: "Với ba điểm bất kỳ A, B, C, ta luôn có: AB→ + BC→ = AC→. Quy tắc này gọi là quy tắc 3 điểm (hay quy tắc tam giác). Điểm cuối của vectơ thứ nhất trùng với điểm đầu của vectơ thứ hai, kết quả là vectơ nối từ điểm đầu của vectơ thứ nhất đến điểm cuối của vectơ thứ hai.",
        formula: "AB→ + BC→ = AC→  ·  Mở rộng: A1 A2→ + A2 A3→ + ... + An-1 An→ = A1 An→",
        example: "Tính tổng vectơ S = AB→ + BC→ + CD→ + DA→.\n• Áp dụng quy tắc 3 điểm nối đuôi liên tiếp:\n  AB→ + BC→ = AC→.\n  AC→ + CD→ = AD→.\n  AD→ + DA→ = AA→ = 0→.\n• Kết luận: S = 0→.",
        advanced: "Cho 4 điểm A, B, C, D. Rút gọn biểu thức u→ = AB→ + CD→ + BC→ + DA→.\n→ Lời giải: Đổi chỗ giao hoán: u→ = (AB→ + BC→) + (CD→ + DA→) = AC→ + CA→ = AA→ = 0→.",
        tip: "Phương pháp giải nhanh: Tìm các vectơ có điểm cuối của vectơ này trùng điểm đầu vectơ kia để ghép cặp triệt tiêu.",
        visual: "vector"
      },
      {
        eyebrow: "QUY TẮC HÌNH BÌNH HÀNH",
        title: "Cộng hai vectơ chung gốc qua đường chéo hình bình hành",
        body: "Nếu ABCD là hình bình hành, thì tổng của hai vectơ chung gốc xuất phát từ một đỉnh bằng vectơ đường chéo xuất phát từ đỉnh đó: AB→ + AD→ = AC→. Quy tắc này có ý nghĩa vật lý trực quan trong việc tổng hợp hai lực tác dụng lên một vật.",
        formula: "AB→ + AD→ = AC→ (với ABCD là hình bình hành)",
        example: "Cho hình vuông ABCD cạnh 3. Tính độ dài của vectơ tổng u→ = AB→ + AD→.\n• Theo quy tắc hình bình hành: u→ = AB→ + AD→ = AC→.\n• Độ dài |u→| = |AC→| = AC.\n• Đường chéo hình vuông: AC = 3√2. Vậy |u→| = 3√2.",
        advanced: "Hai lực F1→ và F2→ cùng tác dụng vào một chất điểm tại O, có độ lớn |F1→| = 30N, |F2→| = 40N và vuông góc với nhau. Tính độ lớn của hợp lực F→ = F1→ + F2→.\n→ Lời giải: Theo quy tắc hình bình hành, vì hai lực vuông góc nên tứ giác là hình chữ nhật. Độ lớn hợp lực |F→| = √(30² + 40²) = 50N.",
        tip: "Phân biệt: Quy tắc 3 điểm dùng cho hai vectơ 'nối đuôi' (cuối trùng đầu); quy tắc hình bình hành dùng cho hai vectơ 'chung gốc'.",
        visual: "vector"
      },
      {
        eyebrow: "PHÉP TRỪ VECTƠ",
        title: "Quy tắc trừ hai vectơ chung gốc",
        body: "Hiệu của hai vectơ: a→ − b→ = a→ + (−b→). Với ba điểm A, B, O bất kỳ, quy tắc trừ hai vectơ chung gốc khẳng định: OB→ − OA→ = AB→ (ngọn trừ gốc, lấy điểm ngọn của số trừ làm gốc, điểm ngọn của số bị trừ làm ngọn).",
        formula: "OB→ − OA→ = AB→  ·  AB→ = B − A (ngọn trừ gốc)",
        example: "Rút gọn biểu thức v→ = AC→ − AB→.\n• Hai vectơ chung gốc A: AC→ − AB→ = BC→.\n• Kiểm tra lại: AB→ + BC→ = AC→ (Đúng).",
        advanced: "Cho tam giác đều ABC cạnh a. Tính độ dài của vectơ hiệu w→ = AB→ − AC→.\n→ Lời giải: w→ = AB→ − AC→ = CB→. Độ dài |w→| = |CB→| = CB = a.",
        tip: "Mẹo nhớ thần tốc quy tắc trừ chung gốc: 'Sau trừ Trước': OB→ − OA→ thì lấy chữ B ở đuôi ghép với chữ A ở đuôi thành AB→.",
        visual: "vector"
      },
      {
        eyebrow: "TRUNG ĐIỂM VÀ TRỌNG TÂM",
        title: "Tính chất vectơ của trung điểm và trọng tâm tam giác",
        body: "Điểm I là trung điểm của đoạn thẳng AB khi và chỉ khi: IA→ + IB→ = 0→; với điểm M bất kỳ: MA→ + MB→ = 2 MI→. Điểm G là trọng tâm của tam giác ABC khi và chỉ khi: GA→ + GB→ + GC→ = 0→; với điểm M bất kỳ: MA→ + MB→ + MC→ = 3 MG→.",
        formula: "I là trung điểm: MA→ + MB→ = 2 MI→  |  G là trọng tâm: MA→ + MB→ + MC→ = 3 MG→",
        example: "Cho đoạn thẳng AB có độ dài 6, I là trung điểm AB. Tính độ dài vectơ MA→ + MB→ khi M trùng A.\n• Khi M trùng A: MA→ + MB→ = AA→ + AB→ = 0→ + AB→ = AB→.\n• Độ dài |AB→| = 6. Hoặc dùng 2|MI→| = 2·AI = 2·3 = 6.",
        advanced: "Cho tam giác ABC và G là trọng tâm. Chứng minh rằng với điểm O bất kỳ: OG→ = 1/3 (OA→ + OB→ + OC→).\n→ Lời giải: Theo tính chất trọng tâm: OA→ + OB→ + OC→ = 3 OG→. Chia hai vế cho 3 ta được biểu thức tọa độ trọng tâm quen thuộc.",
        tip: "Hệ thức trung điểm và trọng tâm là công cụ mạnh nhất để thu gọn một tổng nhiều vectơ về một vectơ duy nhất!",
        visual: "vector"
      },
      {
        eyebrow: "TỔNG KẾT VÀ BẪY ĐỀ THI",
        title: "Chiến thuật xử lý câu trắc nghiệm đẳng thức vectơ",
        body: "Các bẫy đề thi về vectơ: 1) Nhầm lẫn giữa độ dài của tổng vectơ và tổng độ dài: |a→ + b→| nói chung KHÔNG BẰNG |a→| + |b→| (chỉ bằng khi hai vectơ cùng hướng); 2) Quên đổi chiều khi lấy hiệu hai vectơ chung gốc; 3) Quên mũi tên vectơ trên đầu dẫn tới viết sai bản chất toán học.",
        formula: "Bất đẳng thức tam giác: ||a→| − |b→|| ≤ |a→ + b→| ≤ |a→| + |b→|",
        example: "Cho hai vectơ a→ và b→ vuông góc nhau có độ dài lần lượt là 3 và 4. So sánh |a→ + b→| và |a→| + |b→|.\n• |a→| + |b→| = 3 + 4 = 7.\n• |a→ + b→| = √(3² + 4²) = 5.\n• Rõ ràng 5 < 7. Tuyệt đối không được cộng độ dài trước khi cộng vectơ!",
        advanced: "Cho hình bình hành ABCD. Biểu diễn vectơ AC→ và BD→ theo hai vectơ u→ = AB→ và v→ = AD→.\n→ Lời giải: Theo quy tắc hình bình hành: AC→ = u→ + v→. Theo quy tắc trừ: BD→ = AD→ − AB→ = v→ − u→.",
        tip: "Phương pháp làm nhanh: Luôn vẽ hình và dùng các quy tắc tam giác, hình bình hành để đưa về một vectơ duy nhất rồi mới tính độ dài đoạn thẳng.",
        visual: "vector"
      }
    ]
  },
  {
    id: "scalar-product",
    chapterId: "chuong-4",
    chapterTitle: "Chương IV: Vectơ",
    lessonNumber: "Bài 9",
    title: "Tích vô hướng của hai vectơ",
    shortTitle: "Tích vô hướng",
    description: "Góc giữa hai vectơ, tích vô hướng, điều kiện vuông góc và ứng dụng tọa độ.",
    duration: "14 phút",
    visual: "vector",
    slides: [
      {
        eyebrow: "GÓC GIỮA HAI VECTƠ",
        title: "Định nghĩa góc giữa hai vectơ từ 0° đến 180°",
        body: "Cho hai vectơ khác không a→ và b→. Từ một điểm O bất kỳ, vẽ OA→ = a→ và OB→ = b→. Khi đó góc AOB với số đo từ 0° đến 180° được gọi là góc giữa hai vectơ a→ và b→, kí hiệu là (a→, b→). Nếu a→ và b→ cùng hướng thì góc bằng 0°; nếu ngược hướng thì góc bằng 180°; nếu vuông góc thì góc bằng 90°.",
        formula: "0° ≤ (a→, b→) ≤ 180°  ·  Cùng hướng: 0°  ·  Ngược hướng: 180°  ·  Vuông góc: 90°",
        example: "Cho tam giác đều ABC. Tính góc giữa hai vectơ AB→ và BC→.\n• Dựng vectơ BD→ = AB→ để đưa về chung gốc B.\n• Góc giữa AB→ và BC→ là góc giữa BD→ và BC→, chính là góc bù với góc B của tam giác đều.\n• (AB→, BC→) = 180° − 60° = 120°.",
        advanced: "Cho tam giác vuông cân ABC tại A. Tính góc giữa AB→ và AC→, và góc giữa BA→ và BC→.\n→ Lời giải: AB và AC vuông góc tại A nên (AB→, AC→) = 90°. Trong tam giác vuông cân, góc B = 45°, hai vectơ BA→ và BC→ cùng chung gốc B nên (BA→, BC→) = 45°.",
        tip: "Lưu ý quan trọng: Hai vectơ phải được đưa về CÙNG CHUNG GỐC thì góc giữa hai tia mới chính là góc giữa hai vectơ!",
        visual: "vector"
      },
      {
        eyebrow: "ĐỊNH NGHĨA TÍCH VÔ HƯỚNG",
        title: "Công thức tích vô hướng: Tích hai độ dài nhân cosin góc xen giữa",
        body: "Tích vô hướng của hai vectơ a→ và b→ là một SỐ THỰC (không phải là vectơ), kí hiệu là a→ · b→, được xác định bởi công thức: a→ · b→ = |a→| · |b→| · cos(a→, b→). Khi ít nhất một trong hai vectơ là 0→, tích vô hướng quy ước bằng 0.",
        formula: "a→ · b→ = |a→| · |b→| · cos(a→, b→)  (Kết quả là một số thực)",
        example: "Cho hai vectơ a→ và b→ có độ dài lần lượt là 4 và 6, góc giữa chúng bằng 60°. Tính a→ · b→.\n• a→ · b→ = |a→| · |b→| · cos 60° = 4 · 6 · (1/2) = 12.",
        advanced: "Cho hai vectơ có độ dài 3 và 5, góc giữa chúng bằng 120°. Tính tích vô hướng.\n→ Lời giải: a→ · b→ = 3 · 5 · cos 120° = 15 · (−1/2) = −7.5. Tích vô hướng mang dấu ÂM khi góc giữa hai vectơ là góc tù!",
        tip: "Dấu của tích vô hướng: a→ · b→ > 0 khi góc nhọn; a→ · b→ = 0 khi vuông góc; a→ · b→ < 0 khi góc tù.",
        visual: "vector"
      },
      {
        eyebrow: "ĐIỀU KIỆN VUÔNG GÓC",
        title: "Hai vectơ vuông góc khi và chỉ khi tích vô hướng bằng 0",
        body: "Hệ quả quan trọng nhất của tích vô hướng: Với hai vectơ khác không a→ và b→, chúng vuông góc với nhau (a→ ⊥ b→) khi và chỉ khi tích vô hướng của chúng bằng 0. Đây là công cụ hàng đầu để chứng minh quan hệ vuông góc trong hình học.",
        formula: "a→ ⊥ b→ ⇔ a→ · b→ = 0  (với a→, b→ ≠ 0→)",
        example: "Cho hình chữ nhật ABCD. Tính tích vô hướng AB→ · AD→.\n• Vì AB vuông góc với AD tại A, góc giữa chúng bằng 90°.\n• cos 90° = 0 ⇒ AB→ · AD→ = |AB→| · |AD→| · 0 = 0.",
        advanced: "Cho tam giác ABC có AB = c, AC = b. Tính AB→ · AC→ theo công thức định lý cosin.\n→ Lời giải: AB→ · AC→ = b · c · cos A. Theo định lý cosin, cos A = (b² + c² − a²) / (2bc). Thay vào ta được: AB→ · AC→ = (b² + c² − a²) / 2. Đẳng thức này rất hay dùng trong các bài toán chứng minh hình học!",
        tip: "Khẩu quyết: Muốn chứng minh hai đường thẳng vuông góc, hãy tính tích vô hướng của hai vectơ chỉ phương và chứng minh nó bằng 0!",
        visual: "vector"
      },
      {
        eyebrow: "BÌNH PHƯƠNG VÔ HƯỚNG",
        title: "Bình phương vô hướng bằng bình phương độ dài",
        body: "Khi b→ = a→, góc giữa a→ và chính nó bằng 0°, cos 0° = 1. Do đó: a→ · a→ = |a→| · |a→| · cos 0° = |a→|². Tích vô hướng của một vectơ với chính nó được gọi là bình phương vô hướng và luôn bằng bình phương độ dài của vectơ đó.",
        formula: "a→² = |a→|²  ·  AB→² = AB²",
        example: "Cho đoạn thẳng AB = 5. Tính giá trị của AB→².\n• Bình phương vô hướng bằng bình phương độ dài: AB→² = AB² = 5² = 25.",
        advanced: "Khai triển biểu thức (u→ + v→)² theo tích vô hướng.\n→ Lời giải: (u→ + v→)² = u→² + 2 u→ · v→ + v→² = |u→|² + 2 u→ · v→ + |v→|². Từ đây suy ra độ dài vectơ tổng: |u→ + v→| = √( |u→|² + |v→|² + 2 u→ · v→ ).",
        tip: "Nhờ tính chất a→² = |a→|², ta có thể chuyển đổi linh hoạt giữa các bài toán độ dài đoạn thẳng và đại số vectơ.",
        visual: "vector"
      },
      {
        eyebrow: "BIỂU THỨC TỌA ĐỘ",
        title: "Tích vô hướng trong hệ tọa độ Oxy: Hoành nhân hoành cộng tung nhân tung",
        body: "Trong mặt phẳng tọa độ Oxy, cho hai vectơ u→ = (x1; y1) và v→ = (x2; y2). Tích vô hướng của chúng được tính bằng công thức tọa độ cực kỳ đơn giản: u→ · v→ = x1 · x2 + y1 · y2. Điều kiện vuông góc: x1 x2 + y1 y2 = 0.",
        formula: "u→ · v→ = x1 x2 + y1 y2  ·  u→ ⊥ v→ ⇔ x1 x2 + y1 y2 = 0",
        example: "Cho u→ = (2; 3) và v→ = (4; −1). Tính u→ · v→.\n• u→ · v→ = x1 x2 + y1 y2 = 2 · 4 + 3 · (−1) = 8 − 3 = 5.",
        advanced: "Cho a→ = (1; 2) và b→ = (m; 4). Tìm m để hai vectơ a→ và b→ vuông góc với nhau.\n→ Lời giải: a→ ⊥ b→ ⇔ a→ · b→ = 0 ⇔ 1 · m + 2 · 4 = 0 ⇔ m + 8 = 0 ⇔ m = −8.",
        tip: "Công thức tọa độ giúp tính tích vô hướng ngay lập tức mà không cần phải biết góc giữa hai vectơ!",
        visual: "vector"
      },
      {
        eyebrow: "ĐỘ DÀI VÀ GÓC THEO TỌA ĐỘ",
        title: "Công thức tính độ dài và góc giữa hai vectơ theo tọa độ",
        body: "Độ dài vectơ u→ = (x; y) là: |u→| = √(x² + y²). Khoảng cách giữa hai điểm A(xA; yA) và B(xB; yB) là: AB = √((xB − xA)² + (yB − yA)²). Cosin của góc giữa hai vectơ: cos(u→, v→) = (u→ · v→) / (|u→| · |v→|) = (x1 x2 + y1 y2) / (√(x1² + y1²) · √(x2² + y2²)).",
        formula: "cos(u→, v→) = (x1 x2 + y1 y2) / (√(x1² + y1²) · √(x2² + y2²))",
        example: "Tính cosin của góc giữa a→ = (1; 2) và b→ = (2; −1).\n• Tử số: 1·2 + 2·(−1) = 2 − 2 = 0.\n• Mẫu số: √(1² + 2²) · √(2² + (−1)²) = √5 · √5 = 5.\n• cos(a→, b→) = 0 / 5 = 0 ⇒ Góc giữa hai vectơ bằng 90° (hai vectơ vuông góc).",
        advanced: "Cho hai điểm A(1; 3) và B(4; 7). Tính độ dài đoạn thẳng AB.\n→ Lời giải: AB→ = (4 − 1; 7 − 3) = (3; 4). Độ dài AB = √(3² + 4²) = √25 = 5.",
        tip: "Công thức cos góc giữa hai vectơ cho phép tính góc của bất kỳ tam giác nào khi biết tọa độ ba đỉnh.",
        visual: "vector"
      },
      {
        eyebrow: "ỨNG DỤNG VẬT LÝ",
        title: "Công của lực trong vật lý là một tích vô hướng",
        body: "Trong cơ học, khi một lực F→ không đổi tác dụng lên một vật làm vật di chuyển một quãng đường biểu diễn bởi vectơ độ dời s→, thì công cơ học A sinh ra bởi lực F→ được định nghĩa chính là tích vô hướng của hai vectơ: A = F→ · s→ = |F→| · |s→| · cos α, trong đó α là góc giữa hướng của lực và hướng chuyển dời.",
        formula: "Công cơ học: A = F→ · s→ = F · s · cos α (Đơn vị: Jun - J)",
        example: "Một lực kéo F có độ lớn 50 N tác dụng lên một toa xe làm xe dịch chuyển quãng đường 10 m trên mặt phẳng ngang. Góc giữa dây kéo và phương chuyển động là 60°. Tính công của lực F.\n• A = F · s · cos 60° = 50 · 10 · (1/2) = 250 Jun (J).",
        advanced: "Khi nào công của lực bằng 0 và khi nào sinh công cản (công âm)?\n→ Lời giải: Khi lực tác dụng vuông góc với phương chuyển động (α = 90° ⇒ cos 90° = 0) thì lực không sinh công (A = 0, ví dụ trọng lực khi vật lăn trên mặt phẳng ngang). Khi góc α là góc tù (90° < α ≤ 180° ⇒ cos α < 0), lực sinh công cản (A < 0, ví dụ lực ma sát cản trở chuyển động).",
        tip: "Liên môn Vật lý: Hiểu bản chất tích vô hướng giúp em giải xuất sắc các bài toán công cơ học trong môn Vật lý 10!",
        visual: "vector"
      },
      {
        eyebrow: "TỔNG KẾT VÀ BẪY ĐỀ THI",
        title: "Chiến thuật xử lý câu trắc nghiệm Tích vô hướng",
        body: "Các bẫy đề thi cần đặc biệt lưu ý: 1) Nhầm lẫn: Tích vô hướng của hai vectơ là một SỐ THỰC, không được viết mũi tên vectơ trên kết quả; 2) Nhầm góc: Chưa đưa về chung gốc trước khi xác định góc α; 3) Quên điều kiện vuông góc là x1 x2 + y1 y2 = 0.",
        formula: "Nhớ nhanh: a→ ⊥ b→ ⇔ x1 x2 + y1 y2 = 0  ·  |a→| = √(x² + y²)",
        example: "Cho hai vectơ u→ = (m − 2; 3) và v→ = (2; −1). Tìm m để u→ vuông góc với v→.\n• u→ ⊥ v→ ⇔ (m − 2) · 2 + 3 · (−1) = 0 ⇔ 2m − 4 − 3 = 0 ⇔ 2m = 7 ⇔ m = 7/2.",
        advanced: "Cho tam giác ABC đều cạnh a, trọng tâm G. Tính tích vô hướng GA→ · GB→.\n→ Lời giải: Trong tam giác đều, góc giữa GA và GB bằng 120°. Độ dài GA = GB = a√3/3. Vậy GA→ · GB→ = (a√3/3)² · cos 120° = (a²/3) · (−1/2) = −a²/6.",
        tip: "Phương pháp CASIO: Sử dụng chế độ VECTOR trên máy tính cầm tay (Mode 5 trên fx-580VN X) để tính tích vô hướng và góc giữa hai vectơ chỉ trong 5 giây!",
        visual: "vector"
      }
    ]
  }
];
