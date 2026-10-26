// Hình minh họa lượng giác và các chuyên đề Toán 10 KNTT.
export function circleVisual(angle = 130, large = false) {
  const rad = (angle * Math.PI) / 180,
    x = 160 + 112 * Math.cos(rad),
    y = 154 - 112 * Math.sin(rad);
  const ax = 160 + 34 * Math.cos(rad),
    ay = 154 - 34 * Math.sin(rad);
  return `<svg class="illustration circle-visual" viewBox="0 0 340 238" role="img" aria-label="Đường tròn lượng giác: góc ${angle} độ, sin dương, cos ${angle > 90 ? "âm" : angle === 90 ? "bằng 0" : "dương"}"><defs><pattern id="grid${large ? "hero" : "small"}" width="22" height="22" patternUnits="userSpaceOnUse"><path d="M22 0H0V22" fill="none" stroke="#b5cfc0" stroke-width=".6" opacity=".5"/></pattern></defs><rect x="16" y="12" width="304" height="210" fill="url(#grid${large ? "hero" : "small"})" rx="12"/><path d="M48 154a112 112 0 0 1 224 0" fill="#d3e7d7" fill-opacity=".45" stroke="#8bac98" stroke-width="1.7"/><path d="M160 154h34a34 34 0 0 0 ${ax - 194} ${ay - 154}Z" fill="#b1d9a8"/><path d="M29 154H303M160 210V21" stroke="#6d8b7a" stroke-width="1.3"/><path d="m297 150 6 4-6 4m-141-131 4-6 4 6" fill="none" stroke="#6d8b7a"/><path d="M${x} 154V${y}H160" fill="none" stroke="#aabf70" stroke-width="1.8" stroke-dasharray="5 5"/><path d="M160 154 ${x} ${y}" stroke="#176b50" stroke-width="2.7"/><circle cx="${x}" cy="${y}" r="6" fill="#146b50" stroke="#fff" stroke-width="2.5"/><circle cx="160" cy="154" r="3" fill="#146b50"/><text x="${x - 17}" y="${y - 13}" fill="#146b50" font-size="16" font-family="Georgia" font-style="italic">M</text><text x="147" y="175" fill="#648171" font-size="12">O</text><text x="304" y="170" fill="#648171" font-size="12">cos α</text><text x="169" y="27" fill="#648171" font-size="12">sin α</text><text x="173" y="138" fill="#146b50" font-size="14" font-family="Georgia">α</text><text x="${x - 12}" y="175" fill="#146b50" font-size="12">${Math.cos(rad).toFixed(2)}</text><text x="169" y="${y + 4}" fill="#6b803b" font-size="12">${Math.sin(rad).toFixed(2)}</text><text x="58" y="210" fill="#65806f" font-size="11" letter-spacing="2">HIỂU TỪ ĐIỀU CƠ BẢN</text></svg>`;
}

export function triangleVisual() {
  return `<svg class="illustration" viewBox="0 0 340 250" role="img" aria-label="Tam giác ABC với cạnh a đối diện góc A"><path d="m55 203 99-155 142 155Z" fill="#f3edda" stroke="#998357" stroke-width="2"/><path d="M80 203a25 25 0 0 0-12-21" fill="none" stroke="#146b50" stroke-width="2"/><text x="31" y="222">A</text><text x="150" y="32">B</text><text x="303" y="222">C</text><text x="232" y="112" fill="#146b50">a</text><text x="168" y="228" fill="#146b50">b</text><text x="85" y="115" fill="#146b50">c</text><text x="85" y="175" fill="#146b50" font-family="Georgia" font-size="15">a² = b² + c² − 2bc cos A</text></svg>`;
}

export function signsVisual() {
  return `<div class="signs-visual"><div class="signs-heading">Một góc, hai tọa độ</div>${circleVisual(130)}<div class="sign-pills"><span>sin α <b>+</b></span><span>cos α <b>−</b></span></div><p>90° &lt; α &lt; 180°</p></div>`;
}

export function vennVisual() {
  return `<svg class="illustration" viewBox="0 0 340 238" role="img" aria-label="Biểu đồ Venn mô tả tập hợp A và B"><rect x="16" y="12" width="304" height="210" fill="#f8faf8" stroke="#b5cfc0" stroke-width="1.2" rx="12"/><ellipse cx="125" cy="115" rx="65" ry="50" fill="#d3e7d7" fill-opacity=".6" stroke="#146b50" stroke-width="1.8"/><ellipse cx="205" cy="115" rx="65" ry="50" fill="#fae8b6" fill-opacity=".55" stroke="#b45309" stroke-width="1.8"/><text x="90" y="118" fill="#146b50" font-size="15" font-weight="bold">A</text><text x="235" y="118" fill="#b45309" font-size="15" font-weight="bold">B</text><text x="150" y="120" fill="#173e2d" font-size="13" font-weight="bold">A ∩ B</text><text x="32" y="38" fill="#648171" font-size="12">VŨ TRỤ SỐ U</text><text x="75" y="198" fill="#146b50" font-size="12" font-weight="bold">A ∪ B: Hợp của hai tập hợp</text></svg>`;
}

export function halfplaneVisual() {
  return `<svg class="illustration" viewBox="0 0 340 238" role="img" aria-label="Nửa mặt phẳng nghiệm của bất phương trình bậc nhất hai ẩn"><rect x="16" y="12" width="304" height="210" fill="#faf9f5" stroke="#b5cfc0" stroke-width="1.2" rx="12"/><path d="M40 180 L290 60" stroke="#146b50" stroke-width="2.2"/><polygon points="40,180 290,60 320,60 320,222 16,222 16,192" fill="#146b50" fill-opacity=".15"/><line x1="160" y1="210" x2="160" y2="25" stroke="#6d8b7a" stroke-width="1.3"/><line x1="25" y1="130" x2="310" y2="130" stroke="#6d8b7a" stroke-width="1.3"/><circle cx="160" cy="130" r="3" fill="#146b50"/><text x="148" y="146" fill="#648171" font-size="12">O</text><text x="302" y="126" fill="#648171" font-size="12">x</text><text x="165" y="36" fill="#648171" font-size="12">y</text><text x="175" y="75" fill="#146b50" font-size="13" font-weight="bold">d: ax + by + c = 0</text><text x="60" y="210" fill="#146b50" font-size="12">Miền nghiệm không bị gạch</text></svg>`;
}

export function vectorVisual() {
  return `<svg class="illustration" viewBox="0 0 340 238" role="img" aria-label="Hình bình hành và quy tắc cộng vectơ"><rect x="16" y="12" width="304" height="210" fill="#fdfbf7" stroke="#b5cfc0" stroke-width="1.2" rx="12"/><polygon points="60,170 190,170 260,70 130,70" fill="#d3e7d7" fill-opacity=".3" stroke="#998357" stroke-width="1.5" stroke-dasharray="4 4"/><line x1="60" y1="170" x2="190" y2="170" stroke="#146b50" stroke-width="2.5"/><line x1="60" y1="170" x2="130" y2="70" stroke="#146b50" stroke-width="2.5"/><line x1="60" y1="170" x2="260" y2="70" stroke="#b45309" stroke-width="2.5"/><polygon points="190,170 180,165 180,175" fill="#146b50"/><polygon points="130,70 125,82 135,78" fill="#146b50"/><polygon points="260,70 248,73 254,82" fill="#b45309"/><text x="44" y="182" fill="#146b50" font-size="15" font-weight="bold">A</text><text x="198" y="182" fill="#146b50" font-size="15" font-weight="bold">B</text><text x="122" y="60" fill="#146b50" font-size="15" font-weight="bold">D</text><text x="268" y="68" fill="#b45309" font-size="15" font-weight="bold">C</text><text x="90" y="210" fill="#b45309" font-size="13" font-weight="bold">Quy tắc hình bình hành: AB + AD = AC</text></svg>`;
}

export function statisticsVisual() {
  return `<svg class="illustration" viewBox="0 0 340 238" role="img" aria-label="Biểu đồ hộp phân bố mẫu số liệu"><rect x="16" y="12" width="304" height="210" fill="#faf9f5" stroke="#b5cfc0" stroke-width="1.2" rx="12"/><line x1="45" y1="120" x2="295" y2="120" stroke="#6d8b7a" stroke-width="2"/><line x1="45" y1="105" x2="45" y2="135" stroke="#146b50" stroke-width="2"/><line x1="295" y1="105" x2="295" y2="135" stroke="#146b50" stroke-width="2"/><rect x="100" y="90" width="130" height="60" fill="#d3e7d7" stroke="#146b50" stroke-width="2" rx="4"/><line x1="160" y1="90" x2="160" y2="150" stroke="#b45309" stroke-width="2.5"/><text x="40" y="155" fill="#648171" font-size="12">Min</text><text x="95" y="165" fill="#146b50" font-size="13" font-weight="bold">Q1</text><text x="150" y="80" fill="#b45309" font-size="13" font-weight="bold">Me (Q2)</text><text x="225" y="165" fill="#146b50" font-size="13" font-weight="bold">Q3</text><text x="285" y="155" fill="#648171" font-size="12">Max</text><text x="90" y="205" fill="#146b50" font-size="13">Khoảng tứ phân vị: ΔQ = Q3 − Q1</text></svg>`;
}

export function parabolaVisual() {
  return `<svg class="illustration" viewBox="0 0 340 238" role="img" aria-label="Đồ thị hàm số bậc hai parabol"><rect x="16" y="12" width="304" height="210" fill="#f8faf8" stroke="#b5cfc0" stroke-width="1.2" rx="12"/><line x1="160" y1="210" x2="160" y2="25" stroke="#6d8b7a" stroke-width="1.2"/><line x1="25" y1="150" x2="310" y2="150" stroke="#6d8b7a" stroke-width="1.2"/><path d="M70 45 Q 160 215 250 45" fill="none" stroke="#146b50" stroke-width="2.5"/><circle cx="160" cy="173" r="4" fill="#b45309"/><text x="168" y="185" fill="#b45309" font-size="12" font-weight="bold">Đỉnh I(-b/2a; -Δ/4a)</text><text x="195" y="42" fill="#146b50" font-size="13" font-weight="bold">y = ax² + bx + c (a &gt; 0)</text><text x="60" y="205" fill="#648171" font-size="12">Trục đối xứng: x = -b/(2a)</text></svg>`;
}

export function coordinateVisual() {
  return `<svg class="illustration" viewBox="0 0 340 238" role="img" aria-label="Mặt phẳng tọa độ Oxy và vectơ chỉ phương, pháp tuyến"><rect x="16" y="12" width="304" height="210" fill="#faf9f5" stroke="#b5cfc0" stroke-width="1.2" rx="12"/><line x1="140" y1="210" x2="140" y2="25" stroke="#6d8b7a" stroke-width="1.2"/><line x1="25" y1="150" x2="310" y2="150" stroke="#6d8b7a" stroke-width="1.2"/><line x1="50" y1="190" x2="280" y2="50" stroke="#146b50" stroke-width="2"/><line x1="190" y1="105" x2="230" y2="171" stroke="#b45309" stroke-width="2.2"/><polygon points="230,171 223,160 234,163" fill="#b45309"/><text x="128" y="165" fill="#648171" font-size="12">O</text><text x="270" y="45" fill="#146b50" font-size="13" font-weight="bold">d: ax + by + c = 0</text><text x="238" y="175" fill="#b45309" font-size="13" font-weight="bold">n(a; b)</text><text x="75" y="210" fill="#648171" font-size="12">Vectơ pháp tuyến vuông góc với đường thẳng d</text></svg>`;
}

export function combinatoricsVisual() {
  return `<svg class="illustration" viewBox="0 0 340 238" role="img" aria-label="Sơ đồ cây tổ hợp và quy tắc đếm"><rect x="16" y="12" width="304" height="210" fill="#fdfbf7" stroke="#b5cfc0" stroke-width="1.2" rx="12"/><circle cx="50" cy="115" r="5" fill="#146b50"/><line x1="50" y1="115" x2="140" y2="65" stroke="#146b50" stroke-width="1.8"/><line x1="50" y1="115" x2="140" y2="165" stroke="#146b50" stroke-width="1.8"/><circle cx="140" cy="65" r="5" fill="#146b50"/><circle cx="140" cy="165" r="5" fill="#146b50"/><line x1="140" y1="65" x2="240" y2="40" stroke="#6d8b7a" stroke-width="1.5"/><line x1="140" y1="65" x2="240" y2="90" stroke="#6d8b7a" stroke-width="1.5"/><line x1="140" y1="165" x2="240" y2="140" stroke="#6d8b7a" stroke-width="1.5"/><line x1="140" y1="165" x2="240" y2="190" stroke="#6d8b7a" stroke-width="1.5"/><text x="120" y="45" fill="#146b50" font-size="12">Công đoạn 1</text><text x="220" y="25" fill="#146b50" font-size="12">Công đoạn 2</text><text x="75" y="210" fill="#146b50" font-size="13" font-weight="bold">Quy tắc nhân: N = m × n cách</text></svg>`;
}

export function probabilityVisual() {
  return `<svg class="illustration" viewBox="0 0 340 238" role="img" aria-label="Không gian mẫu và biến cố xác suất"><rect x="16" y="12" width="304" height="210" fill="#faf9f5" stroke="#146b50" stroke-width="2" rx="12"/><ellipse cx="140" cy="115" rx="75" ry="55" fill="#d3e7d7" stroke="#146b50" stroke-width="2"/><text x="32" y="38" fill="#146b50" font-size="14" font-weight="bold">KHÔNG GIAN MẪU Ω</text><text x="125" y="115" fill="#146b50" font-size="16" font-weight="bold">Biến cố A</text><text x="245" y="115" fill="#648171" font-size="14" font-weight="bold">Biến cố đối Ā</text><text x="80" y="200" fill="#146b50" font-size="13" font-weight="bold">Xác suất: P(A) = n(A) / n(Ω)</text></svg>`;
}

export function visual(type) {
  switch (type) {
    case "triangle":
      return triangleVisual();
    case "signs":
      return signsVisual();
    case "venn":
      return vennVisual();
    case "halfplane":
      return halfplaneVisual();
    case "vector":
      return vectorVisual();
    case "statistics":
      return statisticsVisual();
    case "parabola":
      return parabolaVisual();
    case "coordinate":
      return coordinateVisual();
    case "combinatorics":
      return combinatoricsVisual();
    case "probability":
      return probabilityVisual();
    default:
      return circleVisual();
  }
}

export function defaultSlideAngle(lessonId, index) {
  return lessonId === "values"
    ? index === 2
      ? Math.round((Math.acos(-4 / 5) * 180) / Math.PI)
      : index === 3
        ? 30
        : 130
    : lessonId === "signs"
      ? index === 1
        ? 45
        : index === 4
          ? 90
          : 130
      : 130;
}

export function angleReadoutHTML(angle) {
  const rad = (angle * Math.PI) / 180;
  return `<span class="tag ${Math.sin(rad) > 1e-9 ? "green" : "gray"}">sin ${angle}° = ${Math.sin(rad).toFixed(2)}</span><span class="tag ${Math.cos(rad) > 1e-9 ? "green" : Math.cos(rad) < -1e-9 ? "amber" : "gray"}">cos ${angle}° = ${Math.cos(rad).toFixed(2)}</span>`;
}

export function angleControl(angle = 130) {
  return `<div class="angle-interactive-control"><label for="angle-slider">Kéo để thử góc α: <strong>${angle}°</strong></label><input id="angle-slider" type="range" min="0" max="180" step="1" value="${angle}"><div class="angle-readout">${angleReadoutHTML(angle)}</div></div>`;
}

export function interactiveCircle(angle = 130, signsMode = false) {
  const caption =
    angle > 0 && angle < 90
      ? "Góc nhọn: sin và cos dương"
      : angle === 90
        ? "Góc vuông: sin = 1, cos = 0"
        : angle > 90 && angle < 180
          ? "Góc tù: sin dương, cos âm"
          : "Góc biên trên trục hoành: sin = 0";
  return `<div class="${signsMode ? "signs-visual" : "interactive-circle-wrap"}" id="interactive-circle-root"><div class="circle-svg-slot">${circleVisual(angle)}</div>${signsMode ? `<p id="signs-caption">${caption}</p>` : ""}${angleControl(angle)}</div>`;
}

export function slideVisual(l, index, s, angle) {
  if (l.id === "values") return interactiveCircle(angle, false);
  if (l.id === "signs") return interactiveCircle(angle, true);
  if (l.id === "cosine" && index === 4)
    return `<svg class="illustration" viewBox="0 0 340 250" role="img" aria-label="Tam giác có góc tù A, cạnh đối diện A dài 4"><path d="M120 172 50 104 280 172Z" fill="#f3edda" stroke="#998357" stroke-width="2"/><path d="M105 157a22 22 0 0 1 37 15" fill="none" stroke="#146b50"/><text x="111" y="198">A</text><text x="35" y="96">B</text><text x="284" y="193">C</text><text x="169" y="121" fill="#146b50">a = 4</text><text x="187" y="194" fill="#146b50">b = 3</text><text x="59" y="153" fill="#146b50">c = 2</text><text x="88" y="230" fill="#648171" font-size="12">Sơ đồ minh họa góc tù, không theo tỉ lệ</text></svg>`;
  return visual(s.visual);
}
