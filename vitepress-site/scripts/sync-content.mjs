/**
 * Mirror help-center/en and help-center/zh into .content/ for VitePress i18n layout.
 * English at .content/ root; Chinese under .content/zh/.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const HC = path.resolve(ROOT, "..", "help-center");
const OUT = path.join(ROOT, ".content");

const SKIP = new Set(["SUMMARY.md"]);

function rmrf(dir) {
  if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
}

function copyLocale(srcLocale, destDir) {
  if (!fs.existsSync(srcLocale)) {
    throw new Error(`Missing ${srcLocale}`);
  }
  fs.mkdirSync(destDir, { recursive: true });
  for (const ent of fs.readdirSync(srcLocale, { withFileTypes: true })) {
    if (SKIP.has(ent.name)) continue;
    const src = path.join(srcLocale, ent.name);
    const dst = path.join(destDir, ent.name);
    if (ent.isDirectory()) {
      fs.cpSync(src, dst, { recursive: true });
    } else if (ent.isFile() && ent.name.endsWith(".md")) {
      fs.copyFileSync(src, dst);
    }
  }
  const readme = path.join(srcLocale, "README.md");
  const index = path.join(destDir, "index.md");
  if (fs.existsSync(readme)) {
    fs.copyFileSync(readme, index);
  }
}

rmrf(OUT);
fs.mkdirSync(OUT, { recursive: true });
copyLocale(path.join(HC, "en"), OUT);
copyLocale(path.join(HC, "zh"), path.join(OUT, "zh"));
console.log("Synced help-center -> vitepress-site/.content/");
