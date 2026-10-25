// Hình minh họa lượng giác và điều khiển góc, không giữ trạng thái ứng dụng.
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
export function visual(type) {
  return type === "triangle"
    ? triangleVisual()
    : type === "signs"
      ? signsVisual()
      : circleVisual();
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
  if (index === 4)
    return `<svg class="illustration" viewBox="0 0 340 250" role="img" aria-label="Tam giác có góc tù A, cạnh đối diện A dài 4"><path d="M120 172 50 104 280 172Z" fill="#f3edda" stroke="#998357" stroke-width="2"/><path d="M105 157a22 22 0 0 1 37 15" fill="none" stroke="#146b50"/><text x="111" y="198">A</text><text x="35" y="96">B</text><text x="284" y="193">C</text><text x="169" y="121" fill="#146b50">a = 4</text><text x="187" y="194" fill="#146b50">b = 3</text><text x="59" y="153" fill="#146b50">c = 2</text><text x="88" y="230" fill="#648171" font-size="12">Sơ đồ minh họa góc tù, không theo tỉ lệ</text></svg>`;
  return visual(s.visual);
}
