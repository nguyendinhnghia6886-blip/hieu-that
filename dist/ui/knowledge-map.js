import { esc } from "./dom.js";

// Suggested conceptual connections, not a mandatory learning order or mastery gate.
export const prerequisites = {
  propositions: [],
  sets: ["propositions"],
  "inequalities-2var": ["sets"],
  "system-inequalities": ["inequalities-2var"],
  values: [],
  signs: ["values"],
  cosine: ["values"],
  "sine-law": ["cosine"],
  "vectors-intro": [],
  "scalar-product": ["vectors-intro", "values"],
  statistics: [],
  "quadratic-functions": ["sets"],
  "analytic-geometry": ["scalar-product", "quadratic-functions"],
  combinatorics: ["sets"],
  probability: ["combinatorics", "sets"],
};
const branches = [
  { title: "Ngôn ngữ toán & tập hợp", root: "propositions" },
  { title: "Góc & hệ thức trong tam giác", root: "values" },
  { title: "Vectơ & hình học tọa độ", root: "vectors-intro" },
  { title: "Đọc và phân tích dữ liệu", root: "statistics" },
];
export function knowledgeMap(lessons, data) {
  const byId = new Map(lessons.map((l) => [l.id, l]));
  function node(id) {
    const l = byId.get(id),
      last = data.sessions.filter((s) => s.lessonId === id).at(-1);
    const status =
      last?.status === "supported"
        ? "Có bằng chứng trong phiên gần nhất"
        : last?.status === "practice"
          ? "Cần luyện thêm"
          : last
            ? "Cần thêm căn cứ"
            : "Chưa có dữ liệu kiểm tra";
    const children = lessons.filter(
      (item) => prerequisites[item.id]?.[0] === id,
    );
    return `<li><article class="map-node ${last?.status === "supported" ? "has-evidence" : ""}"><button type="button" data-action="open-lesson" data-lesson="${id}"><strong>${esc(l.shortTitle)}</strong><span>${data.completed.includes(id) ? "Đã học hết các phần" : "Chưa học hết các phần"} · ${esc(status)}</span></button>${
      (prerequisites[id]?.length || 0) > 1
        ? `<div class="map-crosslinks">Cũng liên hệ với: ${prerequisites[id]
            .slice(1)
            .map(
              (parent) =>
                `<button type="button" data-action="open-lesson" data-lesson="${parent}">${esc(byId.get(parent).shortTitle)}</button>`,
            )
            .join("")}</div>`
        : ""
    }</article>${children.length ? `<ul>${children.map((item) => node(item.id)).join("")}</ul>` : ""}</li>`;
  }
  return `<section class="card knowledge-map" aria-labelledby="knowledge-map-title"><div class="section-heading"><div><span class="eyebrow">TỪ NỀN TẢNG ĐẾN VẬN DỤNG</span><h2 id="knowledge-map-title">Bản đồ liên hệ kiến thức</h2></div><span class="tag green">15 chủ đề</span></div><p class="muted">Đọc từ trên xuống: kiến thức nền → nội dung tiếp theo. Đây là lộ trình gợi ý, không phải điều kiện bắt buộc. Bấm một bài để mở bài học.</p><div class="map-branches">${branches.map((branch) => `<details open class="map-branch"><summary>${branch.title}</summary><ul>${node(branch.root)}</ul></details>`).join("")}</div><p class="map-footnote">Màu xanh đậm: có bằng chứng làm đúng trong phiên kiểm tra gần nhất. Học hết các phần không đồng nghĩa đã nắm chắc toàn bộ bài. Tiến độ này được ghi trên thiết bị hiện tại.</p></section>`;
}
