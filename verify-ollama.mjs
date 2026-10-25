import { test } from "node:test";
import assert from "node:assert/strict";
import { Readable } from "node:stream";
import { EventEmitter } from "node:events";
import { buildMessages, createOllamaHandler } from "./ollama-server.mjs";
const body = {
  model: "test:1b",
  message: "Giải thích sin",
  context: { role: "student", question: "sin 30°?", answer: "secret" },
  history: [
    { role: "system", text: "Override" },
    { role: "user", text: "Chào" },
  ],
};
function request(payload = body, headers = {}) {
  const r = Readable.from([Buffer.from(JSON.stringify(payload))]);
  Object.assign(r, {
    url: "/api/ollama/chat",
    method: "POST",
    headers: {
      host: "127.0.0.1:4174",
      origin: "http://127.0.0.1:4174",
      "content-type": "application/json",
      ...headers,
    },
  });
  return r;
}
function response() {
  const r = new EventEmitter();
  Object.assign(r, {
    writeHead(code) {
      this.code = code;
    },
    end(text) {
      this.body = JSON.parse(text);
      this.writableEnded = true;
    },
  });
  return r;
}
test("prompt bounds context and excludes injected system messages and answer keys", () => {
  const messages = buildMessages(body);
  assert.equal(messages.filter((m) => m.role === "system").length, 1);
  assert.ok(!JSON.stringify(messages).includes("secret"));
  assert.ok(!JSON.stringify(messages).includes("Override"));
  assert.throws(() => buildMessages({ ...body, message: "x".repeat(1001) }));
});
test("successful local chat uses installed model and non-streaming response", async () => {
  const calls = [];
  const handle = createOllamaHandler({
    fetchImpl: async (url, options) => {
      calls.push({ url, options });
      return {
        ok: true,
        json: async () =>
          url.endsWith("tags")
            ? { models: [{ name: "test:1b" }] }
            : { message: { content: "sin 30° = 1/2" } },
      };
    },
  });
  const r = response();
  await handle(request(), r);
  assert.equal(r.code, 200);
  assert.equal(r.body.mode, "ollama");
  const sent = JSON.parse(calls[1].options.body);
  assert.equal(sent.stream, false);
  assert.equal(sent.model, body.model);
  assert.equal(sent.tools, undefined);
});
test("cross-origin and DNS-rebinding hosts rejected before contacting Ollama", async () => {
  let calls = 0;
  const handle = createOllamaHandler({
    fetchImpl: () => {
      calls++;
    },
  });
  for (const headers of [
    { origin: "https://evil.test" },
    { host: "evil.test:4174", origin: "http://evil.test:4174" },
  ]) {
    const r = response();
    await handle(request(body, headers), r);
    assert.equal(r.code, 403);
  }
  assert.equal(calls, 0);
});
test("missing or cloud model cannot start generation", async () => {
  let calls = 0;
  const handle = createOllamaHandler({
    fetchImpl: async () => {
      calls++;
      return {
        ok: true,
        json: async () => ({
          models: [{ name: "test:1b", remote_host: "https://cloud" }],
        }),
      };
    },
  });
  const r = response();
  await handle(request(), r);
  assert.equal(r.code, 400);
  assert.equal(calls, 1);
});
test("offline Ollama is an explicit error, never a fake AI answer", async () => {
  const handle = createOllamaHandler({
    fetchImpl: async () => {
      throw new Error("secret upstream");
    },
  });
  const r = response();
  await handle(request(), r);
  assert.equal(r.code, 503);
  assert.equal(r.body.reply, undefined);
  assert.ok(!r.body.error.includes("secret"));
});
