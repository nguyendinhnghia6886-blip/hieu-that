import { esc } from "./dom.js";
import { icon } from "./icons.js";
import { slideGuides } from "../content/slide-guides.js";

const fmt = (x) => Number(x.toFixed(2)).toLocaleString("vi-VN");
const rad = (x) => (x * Math.PI) / 180;
const point = ([x, y]) => `${180 + x * 24},${160 - y * 24}`;
const rect = [
  [-6, -5],
  [6, -5],
  [6, 5],
  [-6, 5],
];
export function satisfies(a, b, c, x, y, sign) {
  const v = a * x + b * y + c;
  return sign === "lt"
    ? v < -1e-9
    : sign === "gt"
      ? v > 1e-9
      : sign === "ge"
        ? v >= -1e-9
        : v <= 1e-9;
}
// Clip a convex polygon by a closed half-plane. Strictness is drawn on the border.
export function clipHalfplane(polygon, a, b, c) {
  const result = [];
  for (let i = 0; i < polygon.length; i++) {
    const p = polygon[i],
      q = polygon[(i + 1) % polygon.length];
    const vp = a * p[0] + b * p[1] + c,
      vq = a * q[0] + b * q[1] + c;
    if (vp <= 0) result.push(p);
    if (vp <= 0 !== vq <= 0) {
      const t = vp / (vp - vq);
      result.push([p[0] + t * (q[0] - p[0]), p[1] + t * (q[1] - p[1])]);
    }
  }
  return result;
}
export function boundaryPoints(a, b, c) {
  const points = [];
  if (b !== 0)
    for (const x of [-6, 6]) {
      const y = (-c - a * x) / b;
      if (y >= -5 && y <= 5) points.push([x, y]);
    }
  if (a !== 0)
    for (const y of [-5, 5]) {
      const x = (-c - b * y) / a;
      if (x >= -6 && x <= 6) points.push([x, y]);
    }
  return points
    .filter(
      (p, i) =>
        points.findIndex(
          (q) => Math.abs(p[0] - q[0]) < 1e-9 && Math.abs(p[1] - q[1]) < 1e-9,
        ) === i,
    )
    .slice(0, 2);
}
function svg(content, label, draggable = false) {
  return `<svg class="lab-plot" viewBox="0 0 360 310" role="img" aria-label="${esc(label)}" ${draggable ? 'data-lab-plane="true"' : ""}><rect x="36" y="40" width="288" height="240" rx="4" fill="#fff"/>${content}</svg>`;
}
function axes() {
  return `<g stroke="#dce5df" stroke-width="1">${Array.from({ length: 13 }, (_, i) => `<path d="M${36 + i * 24} 40V280"/>`).join("")}${Array.from({ length: 11 }, (_, i) => `<path d="M36 ${40 + i * 24}H324"/>`).join("")}</g><path d="M36 160H330M180 284V34" stroke="#829b8a" fill="none"/><g fill="#375849" font-size="13"><text x="331" y="155">x</text><text x="187" y="34">y</text><text x="166" y="177">0</text><text x="296" y="177">5</text><text x="185" y="62">4</text></g>`;
}
function poly(p, fill = "#b8d9c6") {
  return p.length
    ? `<polygon points="${p.map(point).join(" ")}" fill="${fill}" fill-opacity=".7"/>`
    : "";
}
function segment(p, q, color = "#146b50", dash = "") {
  return `<line x1="${180 + p[0] * 24}" y1="${160 - p[1] * 24}" x2="${180 + q[0] * 24}" y2="${160 - q[1] * 24}" stroke="${color}" stroke-width="2.5" ${dash ? 'stroke-dasharray="6 4"' : ""}/>`;
}
function dot(x, y, label = "M") {
  return `<circle cx="${180 + x * 24}" cy="${160 - y * 24}" r="7" fill="#ac581a" stroke="white" stroke-width="2"/><text x="${180 + x * 24 + 10}" y="${160 - y * 24 - 9}" font-size="14" fill="#814011">${label}</text>`;
}
function range(name, label, value, min, max, step = 1) {
  return `<label class="lab-field"><span>${label} <output>${fmt(value)}</output></span><input data-lab-field="${name}" aria-label="${label}" type="range" min="${min}" max="${max}" step="${step}" value="${value}"></label>`;
}
function select(name, label, value, options) {
  return `<label class="lab-field"><span>${label}</span><select data-lab-field="${name}">${options.map(([v, t]) => `<option value="${v}" ${String(v) === String(value) ? "selected" : ""}>${esc(t)}</option>`).join("")}</select></label>`;
}
const signs = [
  ["le", "≤"],
  ["lt", "<"],
  ["ge", "≥"],
  ["gt", ">"],
];
function defaults(id, index) {
  if (id === "propositions") return { p: "true", q: "false" };
  if (id === "sets")
    return index >= 3
      ? { lo: 1, hi: 3, closed: "left" }
      : { op: index === 2 ? "diff" : "intersect" };
  if (id === "inequalities-2var")
    return { a: 2, b: 1, c: -4, sign: "le", x: 0, y: 0 };
  if (id === "system-inequalities") return { t: 4, x: 1, y: 1 };
  if (id === "cosine" || id === "sine-law") return { b: 3, c: 2, angle: 60 };
  if (id === "vectors-intro")
    return { x: 2, y: 2, op: index === 4 ? "minus" : "plus" };
  if (id === "scalar-product") return { angle: 90 };
  if (id === "statistics") return { last: 10 };
  if (id === "quadratic-functions") return { a: 1, b: 0, c: -2 };
  if (id === "analytic-geometry")
    return index < 3
      ? { a: 1, b: 1, c: -2, sign: "le", x: 1, y: 2 }
      : { h: 0, k: 0, r: 2, x: 2, y: 0 };
  if (id === "combinatorics") return { n: 5, k: 2 };
  return { chosen: [2, 4, 6] };
}
export function labKind(id, index) {
  if (id === "propositions")
    return index === 4 || index === 5 ? "quantifiers" : "propositions";
  return id === "sets" && index >= 3
    ? "interval"
    : id === "analytic-geometry"
      ? index < 3
        ? "line"
        : "circle"
      : id;
}
export function lessonLab(lesson, index) {
  const steps = slideGuides[lesson.id]?.[index];
  if (!steps) return "";
  const kind = labKind(lesson.id, index),
    values = defaults(lesson.id, index);
  const interactive = !["values", "signs"].includes(kind);
  return `<div class="lesson-explorer" ${interactive ? `data-lesson-lab="${kind}" data-lab-initial="${esc(JSON.stringify(values))}"` : ""}><div class="explanation-path" aria-label="Sơ đồ giải thích slide"><span class="eyebrow">MẠCH SUY NGHĨ · ${String(index + 1).padStart(2, "0")}</span><ol>${steps.map((step, i) => `<li><span>${i + 1}</span><p>${esc(step)}</p></li>`).join("")}</ol></div>${interactive ? `<details class="lab-details" open><summary>Khám phá bằng thao tác</summary><p class="lab-note">Ví dụ tương tác để quan sát, không tính điểm kiểm tra.</p><div class="lab-controls">${controls(kind, values)}</div><div class="lab-output">${renderLab(kind, values)}</div><button type="button" class="button secondary small lab-reset" data-lab-reset>Đặt lại ví dụ</button></details>` : ""}</div>`;
}
function controls(kind, v) {
  if (kind === "quantifiers")
    return select("p", "Điều kiện P(x), x ∈ {−2; −1; 0; 1; 2}", v.p, [
      ["true", "x² > 0"],
      ["false", "x² ≥ 0"],
    ]);
  if (kind === "propositions")
    return (
      select("p", "Giá trị P", v.p, [
        ["true", "Đúng"],
        ["false", "Sai"],
      ]) +
      select("q", "Giá trị Q", v.q, [
        ["true", "Đúng"],
        ["false", "Sai"],
      ])
    );
  if (kind === "sets")
    return select("op", "Phép toán", v.op, [
      ["intersect", "Giao A ∩ B"],
      ["union", "Hợp A ∪ B"],
      ["diff", "Hiệu A ∖ B"],
      ["complement", "Phần bù U ∖ A"],
    ]);
  if (kind === "interval")
    return (
      range("lo", "Mút trái", v.lo, -4, 4) +
      range("hi", "Mút phải", v.hi, -3, 5) +
      select("closed", "Lấy đầu mút", v.closed, [
        ["left", "Lấy trái, bỏ phải"],
        ["both", "Lấy cả hai"],
        ["none", "Bỏ cả hai"],
      ])
    );
  if (kind === "inequalities-2var")
    return (
      `<div class="lab-construct-bar">
        <button type="button" class="btn-construct" data-lab-construct="play">${icon("play")} Xem cách dựng</button>
        <button type="button" class="btn-construct btn-pause" data-lab-construct="pause" hidden>${icon("close")} Dừng</button>
        <button type="button" class="btn-construct btn-reset" data-lab-construct="reset">↺ Làm lại</button>
        <span class="construct-step-indicator" data-lab-construct-status>${v._constructStep ? `Bước ${v._constructStep}/5` : "5 bước chuẩn SGK"}</span>
      </div>` +
      range("a", "Hệ số a", v.a, -3, 3) +
      range("b", "Hệ số b", v.b, -3, 3) +
      range("c", "Hệ số c", v.c, -6, 6) +
      select("sign", "Dấu", v.sign, signs) +
      range("x", "Điểm thử: x", v.x, -5, 5, 0.25) +
      range("y", "Điểm thử: y", v.y, -4, 4, 0.25)
    );
  if (kind === "line")
    return (
      range("a", "Hệ số a", v.a, -3, 3) +
      range("b", "Hệ số b", v.b, -3, 3) +
      range("c", "Hệ số c", v.c, -6, 6) +
      range("x", "Điểm thử: x", v.x, -5, 5, 0.25) +
      range("y", "Điểm thử: y", v.y, -4, 4, 0.25)
    );
  if (kind === "system-inequalities")
    return (
      range("t", "Giới hạn t: x + y ≤ t", v.t, 1, 5) +
      range("x", "Điểm thử: x", v.x, -1, 5, 0.25) +
      range("y", "Điểm thử: y", v.y, -1, 4, 0.25)
    );
  if (["cosine", "sine-law"].includes(kind))
    return (
      range("b", "Cạnh b", v.b, 1, 4, 0.25) +
      range("c", "Cạnh c", v.c, 1, 4, 0.25) +
      range("angle", "Góc A (độ)", v.angle, 15, 150)
    );
  if (kind === "vectors-intro")
    return (
      range("x", "Hoành độ v", v.x, -2, 3) +
      range("y", "Tung độ v", v.y, -3, 3) +
      select("op", "Phép toán", v.op, [
        ["plus", "u + v"],
        ["minus", "u − v"],
      ])
    );
  if (kind === "scalar-product")
    return range("angle", "Góc giữa u và v (độ)", v.angle, 0, 180);
  if (kind === "statistics")
    return range("last", "Thay số cuối mẫu [2; 4; 6; 8; t]", v.last, 8, 40);
  if (kind === "quadratic-functions")
    return (
      range("a", "Hệ số a", v.a, -2, 2, 0.25) +
      range("b", "Hệ số b", v.b, -4, 4, 0.5) +
      range("c", "Hệ số c", v.c, -3, 3, 0.5)
    );
  if (kind === "circle")
    return (
      range("h", "Tâm I: hoành độ h", v.h, -2, 2) +
      range("k", "Tâm I: tung độ k", v.k, -1, 1) +
      range("r", "Bán kính R", v.r, 0.5, 3, 0.5) +
      range("x", "Điểm M: x", v.x, -5, 5, 0.25) +
      range("y", "Điểm M: y", v.y, -4, 4, 0.25)
    );
  if (kind === "combinatorics")
    return (
      range("n", "Số phần tử n", v.n, 1, 8) +
      range("k", "Số phần tử chọn k", v.k, 0, 8)
    );
  return '<p class="lab-note">Xúc xắc cân đối: bấm các mặt để tạo biến cố A.</p>';
}
export function sampleStats(last) {
  const values = [2, 4, 6, 8, last],
    mean = values.reduce((s, x) => s + x, 0) / 5;
  return {
    mean,
    median: 6,
    q1: 3,
    q3: (8 + last) / 2,
    variance: values.reduce((s, x) => s + (x - mean) ** 2, 0) / 5,
  };
}
export function counts(n, k) {
  const factorial = (x) => (x <= 1 ? 1 : x * factorial(x - 1));
  return k <= n
    ? {
        p: factorial(n),
        a: factorial(n) / factorial(n - k),
        c: factorial(n) / (factorial(k) * factorial(n - k)),
      }
    : null;
}
export function renderLab(kind, v) {
  let graph = "",
    info = "";
  if (kind === "quantifiers") {
    const strict = v.p === "true";
    graph = `<div class="quantifier-values">${[-2, -1, 0, 1, 2].map((x) => `<span class="${x !== 0 || !strict ? "holds" : "fails"}">x = ${x}<b>${x !== 0 || !strict ? "Đúng" : "Sai"}</b></span>`).join("")}</div>`;
    info = `Trên tập X = {−2; −1; 0; 1; 2}, với P(x): x² ${strict ? ">" : "≥"} 0, mệnh đề ∀x ∈ X, P(x) ${strict ? "sai (phản ví dụ x = 0)" : "đúng"}. Mệnh đề ∃x ∈ X, P(x) đúng. Phủ định của ∀x ∈ X, P(x) là ∃x ∈ X, ¬P(x): ${strict ? "đúng" : "sai"}. Đây là ví dụ trên tập hữu hạn X, không phải chứng minh trên ℝ.`;
  } else if (kind === "propositions") {
    const p = v.p === "true",
      q = v.q === "true";
    graph = `<div class="truth-flow"><span>P: ${p ? "Đúng" : "Sai"}</span><span>⇒</span><span>Q: ${q ? "Đúng" : "Sai"}</span></div>`;
    info = `¬P: ${p ? "Sai" : "Đúng"} · P ⇒ Q: ${!p || q ? "Đúng" : "Sai"} · Q ⇒ P: ${!q || p ? "Đúng" : "Sai"} · P ⇔ Q: ${p === q ? "Đúng" : "Sai"}. P ⇒ Q chỉ sai khi P đúng, Q sai.`;
  } else if (kind === "sets") {
    const A = [1, 2, 3, 4],
      B = [3, 4, 5],
      U = [1, 2, 3, 4, 5, 6];
    const result = U.filter((x) =>
      v.op === "intersect"
        ? A.includes(x) && B.includes(x)
        : v.op === "union"
          ? A.includes(x) || B.includes(x)
          : v.op === "diff"
            ? A.includes(x) && !B.includes(x)
            : !A.includes(x),
    );
    graph = `<div class="set-regions"><div><strong>A ∖ B</strong><span class="${result.includes(1) ? "selected" : ""}">1, 2</span></div><div><strong>A ∩ B</strong><span class="${result.includes(3) ? "selected" : ""}">3, 4</span></div><div><strong>B ∖ A</strong><span class="${result.includes(5) ? "selected" : ""}">5</span></div><div><strong>Ngoài A ∪ B</strong><span class="${result.includes(6) ? "selected" : ""}">6</span></div></div>`;
    info = `U = {1; 2; 3; 4; 5; 6}; A = {1; 2; 3; 4}; B = {3; 4; 5}. Kết quả: {${result.join("; ")}}.`;
  } else if (kind === "interval") {
    const valid = v.lo < v.hi;
    graph = svg(
      `<path d="M36 160H324" stroke="#829b8a"/>${valid ? segment([v.lo, 0], [v.hi, 0]) : ""}${[v.lo, v.hi].map((x, i) => `<circle cx="${180 + x * 24}" cy="160" r="6" fill="${(i === 0 && v.closed === "left") || v.closed === "both" ? "#146b50" : "white"}" stroke="#146b50" stroke-width="2"/><text x="${180 + x * 24}" y="190" text-anchor="middle">${x}</text>`).join("")}`,
      "Khoảng trên trục số",
    );
    info = valid
      ? `Tập đang chọn: ${v.closed === "none" ? "(" : "["}${v.lo}; ${v.hi}${v.closed === "both" ? "]" : ")"}. Ví dụ giao: (-2; 3) ∩ [1; 5] = [1; 3).`
      : "Hãy chọn mút trái nhỏ hơn mút phải để tạo khoảng không rỗng.";
  } else if (
    ["inequalities-2var", "line", "system-inequalities"].includes(kind)
  ) {
    const system = kind === "system-inequalities";
    const a = system ? 1 : v.a,
      b = system ? 1 : v.b,
      c = system ? -v.t : v.c,
      sign = v.sign || "le";
    if (a === 0 && b === 0)
      return '<p class="lab-result warning" role="status">Không hợp lệ: a và b không được đồng thời bằng 0. Hãy đổi một hệ số.</p>';
    const direction = ["ge", "gt"].includes(sign) ? -1 : 1;
    let region = clipHalfplane(
      rect,
      a * direction,
      b * direction,
      c * direction,
    );
    if (system)
      region = clipHalfplane(clipHalfplane(region, -1, 0, 0), 0, -1, 0);
    const border = boundaryPoints(a, b, c),
      value = a * v.x + b * v.y + c;
    const good = system
      ? v.x >= 0 && v.y >= 0 && value <= 1e-9
      : satisfies(a, b, c, v.x, v.y, sign);

    if (kind === "inequalities-2var" && v._constructStep) {
      if (v._constructStep === 1) {
        graph = svg(axes(), "Bước 1: Hệ trục Oxy", true);
        info = "Bước 1/5: Dựng hệ trục toạ độ Oxy và chia lưới đơn vị.";
      } else if (v._constructStep === 2) {
        graph = svg(
          `${axes()}${border.length === 2 ? segment(border[0], border[1], "#146b50") : ""}`,
          "Bước 2: Vẽ bờ d",
          true,
        );
        info = `Bước 2/5: Tìm 2 điểm đặc biệt thuộc bờ d và vẽ đường thẳng d: ${a}x + ${b}y + (${c}) = 0.`;
      } else if (v._constructStep === 3) {
        graph = svg(
          `${axes()}${border.length === 2 ? segment(border[0], border[1], "#146b50") : ""}${dot(v.x, v.y, "M")}`,
          "Bước 3: Điểm thử M",
          true,
        );
        info = `Bước 3/5: Lấy điểm thử M(${fmt(v.x)}; ${fmt(v.y)}) không thuộc bờ d. Thay vào biểu thức được: ${fmt(value)}.`;
      } else if (v._constructStep === 4) {
        graph = svg(
          `${poly(region)}${axes()}${border.length === 2 ? segment(border[0], border[1], "#146b50") : ""}${dot(v.x, v.y, "M")}`,
          "Bước 4: Miền nghiệm",
          true,
        );
        info = `Bước 4/5: So sánh ${fmt(value)} với 0. Điểm M ${good ? "thuộc" : "không thuộc"} miền nghiệm. Tô màu nửa mặt phẳng ${good ? "chứa" : "không chứa"} M.`;
      } else {
        graph = svg(
          `${poly(region)}${axes()}${border.length === 2 ? segment(border[0], border[1], "#146b50", ["lt", "gt"].includes(sign)) : ""}${dot(v.x, v.y, "M")}`,
          "Bước 5: Kiểm tra tính bờ",
          true,
        );
        info = `Bước 5/5: BPT có dấu "${signs.find(([s]) => s === sign)[1]}": ${["le", "ge"].includes(sign) ? "có dấu '=' nên bờ là NÉT LIỀN (lấy cả bờ)" : "không có dấu '=' nên bờ là NÉT ĐỨT (không lấy bờ)"}. Đã hoàn tất!`;
      }
    } else {
      graph = svg(
        `${kind === "line" ? "" : poly(region)}${axes()}${border.length === 2 ? segment(border[0], border[1], "#146b50", ["lt", "gt"].includes(sign)) : ""}${dot(v.x, v.y)}${system ? '<text x="206" y="149" font-size="13">Miền chung</text>' : ""}`,
        system ? "Miền nghiệm x ≥ 0, y ≥ 0, x + y ≤ t" : "Đường bờ và điểm thử M",
        true,
      );
      info =
        kind === "line"
          ? `d: ${a}x + ${b}y + (${c}) = 0. M(${fmt(v.x)}; ${fmt(v.y)}): d(M; d) = ${fmt(Math.abs(value) / Math.hypot(a, b))}. Pháp tuyến n = (${a}; ${b}), chỉ phương u = (${b}; ${-a}).`
          : `${system ? `x ≥ 0; y ≥ 0; x + y ≤ ${v.t}` : `${a}x + ${b}y + (${c}) ${signs.find(([s]) => s === sign)[1]} 0`}. M(${fmt(v.x)}; ${fmt(v.y)}) ${good ? "thuộc" : "không thuộc"} miền nghiệm. Giá trị biểu thức: ${fmt(value)}.${system ? ` Các đỉnh: (0; 0), (${v.t}; 0), (0; ${v.t}); với F = 2x + y, min = 0, max = ${2 * v.t}.` : ""}`;
    }
    return (
      graph +
      `<p class="lab-result" role="status">${esc(info)}</p><p class="lab-note">Kéo điểm M hoặc dùng hai thanh tọa độ. Hình chỉ hiển thị vùng x ∈ [−6; 6], y ∈ [−5; 5].</p>${kind === "inequalities-2var" ? '<div class="lab-check"><p>Tự kiểm tra: nửa mặt phẳng nghiệm nằm về phía nào của đường bờ?</p><button type="button" class="chip" data-lab-answer="negative">Phía ax + by + c &lt; 0</button><button type="button" class="chip" data-lab-answer="positive">Phía ax + by + c &gt; 0</button><p data-lab-feedback role="status"></p></div>' : ""}`
    );
  } else if (["cosine", "sine-law"].includes(kind)) {
    const theta = rad(v.angle),
      B = [v.c, 0],
      C = [v.b * Math.cos(theta), v.b * Math.sin(theta)],
      a = Math.hypot(B[0] - C[0], B[1] - C[1]),
      area = (v.b * v.c * Math.sin(theta)) / 2;
    graph = svg(
      `${poly([[0, 0], B, C], "#f1dfb8")}${segment([0, 0], B)}${segment([0, 0], C)}${segment(B, C)}<text x="163" y="179">A</text><text x="${180 + B[0] * 24}" y="182">B</text><text x="${180 + C[0] * 24}" y="${150 - C[1] * 24}">C</text>`,
      "Tam giác ABC thay đổi theo b, c và góc A",
    );
    info = `A = ${v.angle}°; b = ${v.b}; c = ${v.c}; a = ${fmt(a)}. Diện tích S = ${fmt(area)}; R = a/(2 sin A) = ${fmt(a / (2 * Math.sin(theta)))}. Bán kính và diện tích tính từ cùng tam giác.`;
  } else if (kind === "vectors-intro" || kind === "scalar-product") {
    const u = [2, 0],
      w =
        kind === "scalar-product"
          ? [3 * Math.cos(rad(v.angle)), 3 * Math.sin(rad(v.angle))]
          : [v.x, v.y],
      sgn = v.op === "minus" ? -1 : 1,
      end = [2 + sgn * w[0], sgn * w[1]];
    graph = svg(
      `${axes()}${segment([0, 0], u)}${segment([0, 0], w, "#ac581a")}${kind === "vectors-intro" ? `${segment(u, end, "#ac581a", true)}${segment([0, 0], end, "#306a8b")}` : ""}${dot(...u, "u")}${dot(...w, "v")}${kind === "vectors-intro" ? dot(...end, "kết quả") : ""}`,
      "Hai vectơ chung gốc và kết quả tính",
    );
    info =
      kind === "scalar-product"
        ? `|u| = 2, |v| = 3; θ = ${v.angle}°. u · v = 6 cos θ = ${fmt(6 * Math.cos(rad(v.angle)))}. ${v.angle === 90 ? "Hai vectơ vuông góc." : ""}`
        : `u = (2; 0), v = (${v.x}; ${v.y}). ${v.op === "minus" ? "u − v" : "u + v"} = (${end[0]}; ${end[1]}). Các đầu mút được đánh dấu bằng chấm có nhãn.`;
  } else if (kind === "statistics") {
    const s = sampleStats(v.last),
      values = [2, 4, 6, 8, v.last];
    graph = `<div class="sample-bars" aria-label="Mẫu số liệu">${values.map((x) => `<div><span style="height:${x * 3}px"></span><b>${x}</b></div>`).join("")}</div>`;
    info = `x̄ = ${fmt(s.mean)}; Me = 6; Q₁ = 3; Q₃ = ${fmt(s.q3)}; khoảng biến thiên = ${v.last - 2}; ΔQ = ${fmt(s.q3 - 3)}; s² = ${fmt(s.variance)}; s = ${fmt(Math.sqrt(s.variance))}. Tứ phân vị tính từ hai nửa mẫu, không lấy Me.`;
  } else if (kind === "quadratic-functions") {
    if (v.a === 0)
      return '<p class="lab-result warning" role="status">a = 0: hàm số không còn bậc hai. Hãy chọn a khác 0.</p>';
    const delta = v.b * v.b - 4 * v.a * v.c,
      xi = -v.b / (2 * v.a),
      yi = v.a * xi * xi + v.b * xi + v.c;
    let d = "";
    for (let x = -6; x <= 6.001; x += 0.05) {
      const y = v.a * x * x + v.b * x + v.c;
      d += `${d ? "L" : "M"}${180 + x * 24} ${160 - y * 24} `;
    }
    graph = svg(
      `${axes()}<svg x="36" y="40" width="288" height="240" viewBox="36 40 288 240"><path d="${d}" fill="none" stroke="#146b50" stroke-width="2.5"/>${xi >= -6 && xi <= 6 && yi >= -5 && yi <= 5 ? dot(xi, yi, "I") : ""}</svg>`,
      "Đồ thị parabol và đỉnh I",
    );
    info = `y = ${v.a}x² + (${v.b})x + (${v.c}); I(${fmt(xi)}; ${fmt(yi)}), Δ = ${fmt(delta)}. ${delta > 0 ? `Hai nghiệm ${fmt((-v.b - Math.sqrt(delta)) / (2 * v.a))} và ${fmt((-v.b + Math.sqrt(delta)) / (2 * v.a))}; ngoài hai nghiệm cùng dấu a, giữa hai nghiệm trái dấu a.` : delta === 0 ? "Một nghiệm kép; cùng dấu a ở ngoài nghiệm và bằng 0 tại nghiệm." : "Không có nghiệm thực; luôn cùng dấu a."} Hình cắt theo cửa sổ tọa độ, đỉnh có thể nằm ngoài khung.`;
  } else if (kind === "circle") {
    const distance = Math.hypot(v.x - v.h, v.y - v.k);
    graph = svg(
      `${axes()}<circle cx="${180 + v.h * 24}" cy="${160 - v.k * 24}" r="${v.r * 24}" fill="#cce2d4" fill-opacity=".5" stroke="#146b50" stroke-width="2"/>${segment([v.h, v.k], [v.x, v.y], "#ac581a")}${dot(v.h, v.k, "I")}${dot(v.x, v.y)}`,
      "Đường tròn tâm I bán kính R và điểm M",
      true,
    );
    info = `(x − (${v.h}))² + (y − (${v.k}))² = ${fmt(v.r * v.r)}. IM = ${fmt(distance)}, R = ${v.r}. M ${Math.abs(distance - v.r) < 1e-9 ? "nằm trên" : distance < v.r ? "nằm trong" : "nằm ngoài"} đường tròn.`;
  } else if (kind === "combinatorics") {
    const result = counts(v.n, v.k);
    graph = `<div class="count-branches"><span>n = ${v.n}</span><span>↓ Chọn k = ${v.k}</span><div><span>Có thứ tự<br><b>${result?.a ?? "—"}</b></span><span>Không thứ tự<br><b>${result?.c ?? "—"}</b></span></div></div>`;
    info = result
      ? `Pₙ = ${result.p}; Aₙᵏ = ${result.a}; Cₙᵏ = ${result.c}. Ví dụ hai phương án rời nhau có n và k cách: tổng ${v.n + v.k}; hai bước độc lập lần lượt có n và k lựa chọn: tích ${v.n * v.k}.`
      : "Cần 0 ≤ k ≤ n. Hãy giảm k hoặc tăng n.";
  } else {
    graph = `<div class="dice-outcomes" role="group" aria-label="Chọn các kết quả thuộc biến cố A">${[1, 2, 3, 4, 5, 6].map((x) => `<button type="button" data-lab-outcome="${x}" aria-pressed="${v.chosen.includes(x)}" class="${v.chosen.includes(x) ? "selected" : ""}">${x}</button>`).join("")}</div>`;
    info = `Ω = {1; 2; 3; 4; 5; 6}; A = {${[...v.chosen].sort().join("; ")}}. P(A) = ${v.chosen.length}/6 = ${fmt(v.chosen.length / 6)}; P(Ā) = ${6 - v.chosen.length}/6. Đây là xác suất lý thuyết của xúc xắc cân đối, không phải kết quả mô phỏng.`;
  }
  return graph + `<p class="lab-result" role="status">${esc(info)}</p>`;
}

// Delegated listeners survive application rerenders; state is private to each slide DOM.
export function installLessonLabs(doc = document) {
  const states = new WeakMap();
  const timers = new WeakMap();
  const stateFor = (root) => {
    if (!states.has(root))
      states.set(root, JSON.parse(root.dataset.labInitial));
    return states.get(root);
  };
  const stopConstruction = (root) => {
    if (timers.has(root)) {
      clearInterval(timers.get(root));
      timers.delete(root);
    }
    const playBtn = root.querySelector('[data-lab-construct="play"]');
    const pauseBtn = root.querySelector('[data-lab-construct="pause"]');
    if (playBtn) playBtn.hidden = false;
    if (pauseBtn) pauseBtn.hidden = true;
  };
  const update = (root) => {
    const v = stateFor(root);
    root.querySelector(".lab-output").innerHTML = renderLab(
      root.dataset.lessonLab,
      v,
    );
    const statusEl = root.querySelector("[data-lab-construct-status]");
    if (statusEl) {
      statusEl.textContent = v._constructStep
        ? `Bước ${v._constructStep}/5`
        : "5 bước chuẩn SGK";
    }
    for (const input of root.querySelectorAll("[data-lab-field]")) {
      input.value = v[input.dataset.labField];
      const output = input.closest("label")?.querySelector("output");
      if (output) output.textContent = fmt(Number(input.value));
    }
  };
  doc.addEventListener("input", (event) => {
    const input = event.target.closest("[data-lab-field]"),
      root = input?.closest("[data-lesson-lab]");
    if (!root) return;
    stopConstruction(root);
    const v = stateFor(root);
    v._constructStep = 0;
    v[input.dataset.labField] =
      input.type === "range" ? Number(input.value) : input.value;
    update(root);
  });
  doc.addEventListener("click", (event) => {
    const root = event.target.closest("[data-lesson-lab]");
    if (!root) return;
    const v = stateFor(root);
    const construct = event.target.closest("[data-lab-construct]");
    if (construct) {
      const act = construct.dataset.labConstruct;
      if (act === "play") {
        stopConstruction(root);
        if (!v._constructStep || v._constructStep >= 5) v._constructStep = 1;
        update(root);
        const playBtn = root.querySelector('[data-lab-construct="play"]');
        const pauseBtn = root.querySelector('[data-lab-construct="pause"]');
        if (playBtn) playBtn.hidden = true;
        if (pauseBtn) pauseBtn.hidden = false;
        const timer = setInterval(() => {
          if (!root.isConnected) {
            stopConstruction(root);
            return;
          }
          if (v._constructStep < 5) {
            v._constructStep++;
            update(root);
          } else {
            stopConstruction(root);
          }
        }, 2200);
        timers.set(root, timer);
      } else if (act === "pause") {
        stopConstruction(root);
      } else if (act === "reset") {
        stopConstruction(root);
        v._constructStep = 1;
        update(root);
      }
      return;
    }
    const outcome = event.target.closest("[data-lab-outcome]");
    if (outcome) {
      const x = Number(outcome.dataset.labOutcome);
      v.chosen = v.chosen.includes(x)
        ? v.chosen.filter((n) => n !== x)
        : [...v.chosen, x];
      update(root);
      root.querySelector(`[data-lab-outcome="${x}"]`)?.focus();
    }
    if (event.target.closest("[data-lab-reset]")) {
      states.set(root, JSON.parse(root.dataset.labInitial));
      update(root);
    }
    const answer = event.target.closest("[data-lab-answer]");
    if (answer) {
      const correct =
        answer.dataset.labAnswer ===
        (["ge", "gt"].includes(v.sign) ? "positive" : "negative");
      root.querySelector("[data-lab-feedback]").textContent = correct
        ? "Đúng. Nhớ xét thêm đường bờ: ≤, ≥ lấy bờ; <, > bỏ bờ."
        : "Chưa đúng. Hãy thử một điểm ở mỗi phía và so sánh biểu thức với 0.";
    }
  });
  let dragging = null;
  const move = (event) => {
    if (!dragging) return;
    const root = dragging,
      plane = root.querySelector("[data-lab-plane]");
    if (!plane || !root.isConnected) {
      dragging = null;
      return;
    }
    const matrix = plane.getScreenCTM();
    if (!matrix) return;
    const p = new DOMPoint(event.clientX, event.clientY).matrixTransform(
      matrix.inverse(),
    );
    const v = stateFor(root);
    v.x = Math.max(-5, Math.min(5, Math.round(((p.x - 180) / 24) * 4) / 4));
    v.y = Math.max(-4, Math.min(4, Math.round(((160 - p.y) / 24) * 4) / 4));
    update(root);
  };
  doc.addEventListener("pointerdown", (event) => {
    const plane = event.target.closest("[data-lab-plane]");
    if (plane) {
      event.preventDefault();
      dragging = plane.closest("[data-lesson-lab]");
      if (dragging) {
        stopConstruction(dragging);
        const v = stateFor(dragging);
        v._constructStep = 0;
      }
      move(event);
    }
  });
  doc.addEventListener("pointermove", move);
  doc.addEventListener("pointerup", () => {
    dragging = null;
  });
  doc.addEventListener("pointercancel", () => {
    dragging = null;
  });
}
