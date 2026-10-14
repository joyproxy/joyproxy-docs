import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, ".vitepress", "dist");
const PUBLIC = path.join(ROOT, "public");

if (!fs.existsSync(DIST)) {
  console.error("Missing dist — run vitepress build first");
  process.exit(1);
}

for (const name of fs.readdirSync(PUBLIC)) {
  const src = path.join(PUBLIC, name);
  if (!fs.statSync(src).isFile()) continue;
  fs.copyFileSync(src, path.join(DIST, name));
  console.log("copied public/", name);
}
