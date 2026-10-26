import test from "node:test";
import assert from "node:assert/strict";
import handler, { allowedOrigin } from "./api/learning.js";

test("online API rejects cross-origin requests before accessing auth or data", async () => {
  assert.equal(
    allowedOrigin({
      headers: {
        host: "hieu-that.vercel.app",
        origin: "https://attacker.test",
      },
    }),
    false,
  );
  assert.equal(
    allowedOrigin({
      headers: {
        host: "hieu-that.vercel.app",
        origin: "http://hieu-that.vercel.app",
      },
    }),
    false,
  );
  assert.equal(
    allowedOrigin({
      headers: {
        host: "hieu-that.vercel.app",
        origin: "https://hieu-that.vercel.app",
      },
    }),
    true,
  );
  assert.equal(
    allowedOrigin({
      headers: { host: "localhost:4174", origin: "http://localhost:4174" },
    }),
    true,
  );
  const response = {
    headers: {},
    setHeader(k, v) {
      this.headers[k] = v;
    },
    end(body) {
      this.body = JSON.parse(body);
    },
  };
  await handler(
    {
      method: "POST",
      headers: {
        host: "hieu-that.vercel.app",
        origin: "https://attacker.test",
      },
    },
    response,
  );
  assert.equal(response.statusCode, 403);
  assert.equal(response.headers["Cache-Control"], "no-store");
});
