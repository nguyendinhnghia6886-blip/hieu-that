import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createOllamaHandler } from "./ollama-server.mjs";
const handleOllama = createOllamaHandler();
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "dist");
const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".json": "application/json",
};
const server = http.createServer((req, res) => {
  if (req.url?.startsWith("/api/")) {
    handleOllama(req, res).catch(() => {
      if (!res.headersSent) res.writeHead(500);
      res.end();
    });
    return;
  }
  let name;
  try {
    name = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  } catch {
    res.writeHead(400).end();
    return;
  }
  const target = path.resolve(
    root,
    "." + (name === "/" ? "/index.html" : name),
  );
  if (!target.startsWith(root + path.sep)) {
    res.writeHead(403).end();
    return;
  }
  fs.readFile(target, (err, data) => {
    if (err) {
      res.writeHead(404).end("Không tìm thấy trang.");
      return;
    }
    res.writeHead(200, {
      "Content-Type": mime[path.extname(target)] || "application/octet-stream",
      "Cache-Control": "no-cache",
    });
    res.end(data);
  });
});
server.listen(4174, "127.0.0.1", () =>
  console.log("Local: http://127.0.0.1:4174"),
);
