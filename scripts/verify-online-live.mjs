import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const base = process.argv[2];
if (!base?.startsWith("https://hieu-that-"))
  throw new Error("Use the isolated Hiểu Thật preview deployment.");
process.loadEnvFile(".env.local");
const users = JSON.parse(readFileSync(".vercel/qa-users.json", "utf8"));
const sessions = users.map(() => "");
async function request(index, action, payload = {}, expected = 200) {
  const r = await fetch(`${base}/api/learning`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: base,
      Cookie: sessions[index],
      "x-vercel-trusted-oidc-idp-token": process.env.VERCEL_OIDC_TOKEN,
    },
    body: JSON.stringify({ action, payload }),
    signal: AbortSignal.timeout(30000),
  });
  const cookies = r.headers.getSetCookie();
  if (cookies.length) {
    assert.ok(
      cookies.every(
        (c) =>
          c.includes("HttpOnly") &&
          c.includes("Secure") &&
          c.includes("SameSite=Lax"),
      ),
    );
    sessions[index] = cookies.map((c) => c.split(";")[0]).join("; ");
  }
  const data = await r.json();
  assert.equal(r.status, expected, `${action}: ${JSON.stringify(data)}`);
  assert.ok(r.headers.get("cache-control").includes("no-store"));
  return data.data ?? data;
}
await request(0, "load", {}, 401);
for (let i = 0; i < users.length; i++) {
  await request(i, "login", {
    email: users[i].email,
    password: users[i].password,
  });
  await request(i, "profile", {
    name: `QA ${users[i].role}`,
    role: users[i].role.startsWith("teacher") ? "teacher" : "student",
  });
}
const teacher = await request(0, "load");
await request(1, "join", { code: teacher.profile.code });
const content = {
  prompt: "1 + 1 = ?",
  topic: "QA",
  type: "choice",
  options: ["1", "2", "3", "4"],
  answer: 1,
  explanation: "Một cộng một bằng hai.",
  status: "approved",
};
const q = await request(0, "question", { content });
// Several tabs importing the same source must receive the same row.
const imported = await Promise.all(
  Array.from({ length: 8 }, () =>
    request(0, "question", {
      content: { ...content, id: "qa-source" },
      import_key: "samples:qa-source",
    }),
  ),
);
assert.equal(new Set(imported.map((x) => x.id)).size, 1);
await request(0, "question", {
  id: imported[0].id,
  content: { ...content, prompt: "Đã sửa riêng" },
});
const retried = await request(0, "question", {
  content,
  import_key: "samples:qa-source",
});
assert.equal(retried.id, imported[0].id);
assert.equal(retried.created, false);
assert.equal(
  (await request(0, "load")).questions.find((x) => x.id === retried.id).content
    .prompt,
  "Đã sửa riêng",
);
await request(1, "question", { content, import_key: "samples:qa-source" }, 403);
if (users[3]) {
  const other = await request(3, "question", {
    content,
    import_key: "samples:qa-source",
  });
  assert.notEqual(other.id, retried.id);
  await request(3, "question", { id: retried.id, content }, 403);
}
const w = await request(0, "question", {
  content: {
    prompt: "Giải thích cách cộng.",
    topic: "QA",
    type: "written",
    options: [],
    explanation: "Đếm thêm một đơn vị.",
    status: "approved",
  },
});
const a = await request(0, "publish", {
  title: "QA · Bài hỗn hợp",
  ids: [q.id, w.id],
});
await request(0, "question", { id: q.id, content: { ...content, answer: 2 } });
const student = await request(1, "load");
assert.equal(student.assignments.length, 1);
assert.ok(
  student.assignments[0].questions.every(
    (q) => !("answer" in q) && !("explanation" in q),
  ),
);
assert.equal(student.questions.length, 0);
const outsider = await request(2, "load");
assert.equal(outsider.assignments.length, 0);
await request(
  2,
  "submit",
  { id: a.id, responses: { [q.id]: 1, [w.id]: "Đếm thêm." } },
  403,
);
await request(1, "question", { content }, 403);
const s = await request(1, "submit", {
  id: a.id,
  responses: { [q.id]: 1, [w.id]: "Em đếm thêm một đơn vị." },
});
assert.equal(s.score, null);
assert.equal(s.pending, 1);
assert.equal(
  s.answers[0].correct,
  true,
  "Published snapshot changed when question was edited",
);
const again = await request(1, "submit", {
  id: a.id,
  responses: { [q.id]: 0, [w.id]: "Khác" },
});
assert.deepEqual(again, s);
await request(1, "mark", { id: s.id, marks: { [w.id]: 1 } }, 403);
await request(0, "mark", { id: s.id, marks: { [w.id]: 2 } }, 400);
const marked = await request(0, "mark", {
  id: s.id,
  marks: { [w.id]: 0.5 },
  feedback: "Đã hiểu ý, cần giải thích rõ hơn.",
});
assert.equal(Number(marked.score), 7.5);
assert.equal(marked.pending, 0);
assert.equal(Number((await request(1, "load")).submissions[0].score), 7.5);
await request(2, "join", { code: teacher.profile.code });
await request(2, "submit", {
  id: a.id,
  responses: { [q.id]: 1, [w.id]: "Em có cách làm khác." },
});
assert.equal(
  (await request(1, "load")).submissions.length,
  1,
  "Another student submission leaked",
);
await request(2, "logout");
await request(2, "load", {}, 401);
console.log(
  "PASS: 8 concurrent imports share one ID; retries preserve edits; teacher ownership; real auth, secure cookies, profiles, joining, assignment snapshots, hidden answers, isolation, submission, pending written marks, 7.5/10 grading, duplicate protection, logout.",
);
