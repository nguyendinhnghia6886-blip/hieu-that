import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { part1Lessons } from "./curriculum-data-part1.mjs";
import { part2Lessons } from "./curriculum-data-part2.mjs";
import { part3Lessons } from "./curriculum-data-part3.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const lessonsPath = path.resolve(__dirname, "../dist/content/lessons.js");
const guidesPath = path.resolve(__dirname, "../dist/content/slide-guides.js");

const lessonMeta = {
  "propositions": { title: "Mệnh đề toán học", shortTitle: "Mệnh đề toán học" },
  "sets": { title: "Tập hợp và các phép toán trên tập hợp", shortTitle: "Tập hợp & Phép toán" },
  "inequalities-2var": { title: "Bất phương trình bậc nhất hai ẩn", shortTitle: "BPT bậc nhất hai ẩn" },
  "system-inequalities": { title: "Hệ bất phương trình bậc nhất hai ẩn", shortTitle: "Hệ BPT bậc nhất hai ẩn" },
  "values": { title: "Giá trị lượng giác của một góc", shortTitle: "Giá trị lượng giác" },
  "signs": { title: "Dấu của các giá trị lượng giác", shortTitle: "Dấu lượng giác" },
  "cosine": { title: "Định lý cosin trong tam giác", shortTitle: "Định lý cosin" },
  "sine-law": { title: "Định lý sin và diện tích tam giác", shortTitle: "Định lý sin & Diện tích" },
  "vectors-intro": { title: "Khái niệm vectơ & Phép toán cộng trừ", shortTitle: "Vectơ & Phép cộng trừ" },
  "scalar-product": { title: "Tích vô hướng của hai vectơ", shortTitle: "Tích vô hướng" },
  "statistics": { title: "Các số đặc trưng của mẫu số liệu", shortTitle: "Thống kê mô tả" },
  "quadratic-functions": { title: "Hàm số bậc hai và dấu của tam thức", shortTitle: "Hàm số bậc hai & Tam thức" },
  "analytic-geometry": { title: "Phương trình đường thẳng và đường tròn", shortTitle: "Đường thẳng & Đường tròn" },
  "combinatorics": { title: "Quy tắc đếm, hoán vị, chỉnh hợp và tổ hợp", shortTitle: "Đại số tổ hợp" },
  "probability": { title: "Biến cố và tính xác suất cổ điển", shortTitle: "Xác suất cổ điển" }
};

const rawLessons = [...part1Lessons, ...part2Lessons, ...part3Lessons];
const allLessons = rawLessons.map((lesson) => {
  const meta = lessonMeta[lesson.id];
  return {
    ...lesson,
    title: meta?.title || lesson.title,
    shortTitle: meta?.shortTitle || lesson.shortTitle
  };
});

console.log(`Writing ${allLessons.length} lessons with ${allLessons.reduce((acc, l) => acc + l.slides.length, 0)} total slides...`);

// 1. Write dist/content/lessons.js
const lessonsContent = `// Auto-generated comprehensive curriculum for Grade 10 Math (15 lessons, 120 slides)
export const lessons = ${JSON.stringify(allLessons, null, 2)};
`;

fs.writeFileSync(lessonsPath, lessonsContent, "utf-8");
console.log(`Successfully written: ${lessonsPath}`);

// 2. Write dist/content/slide-guides.js
const slideGuides = {};
for (const lesson of allLessons) {
  slideGuides[lesson.id] = lesson.slides.map((slide) => [
    `Bước 1 (Khái niệm): ${slide.title}`,
    `Bước 2 (Công thức): ${slide.formula}`,
    `Bước 3 (Thực hành): ${slide.tip}`
  ]);
}

const guidesContent = `// One explanatory path per slide; these are teaching aids, not assessment results.
export const slideGuides = ${JSON.stringify(slideGuides, null, 2)};
`;

fs.writeFileSync(guidesPath, guidesContent, "utf-8");
console.log(`Successfully written: ${guidesPath}`);

