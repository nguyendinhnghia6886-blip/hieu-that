import { readdir } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import path from "node:path";

async function check(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (
      ["node_modules", ".git", ".sites-runtime", "qa-output"].includes(
        entry.name,
      )
    )
      continue;
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await check(file);
    else if (/\.(mjs|js)$/.test(entry.name)) {
      const result = spawnSync(process.execPath, ["--check", file], {
        stdio: "inherit",
      });
      if (result.status !== 0) process.exit(result.status || 1);
    }
  }
}
await check(".");
console.log("JavaScript syntax: OK");
