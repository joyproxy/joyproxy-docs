/**
 * Mirror help-center/en and help-center/zh into .content/ for VitePress i18n layout.
 * English at .content/ root; Chinese under .content/zh/.
 * README.md in any folder becomes index.md (cleanUrls index routes).
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

function copyMarkdownTree(srcRoot, destRoot) {
  function walk(relDir) {
    const srcDir = path.join(srcRoot, relDir);
    const destDir = path.join(destRoot, relDir);
    fs.mkdirSync(destDir, { recursive: true });
    for (const ent of fs.readdirSync(srcDir, { withFileTypes: true })) {
      if (SKIP.has(ent.name)) continue;
      const relPath = relDir ? path.join(relDir, ent.name) : ent.name;
      if (ent.isDirectory()) {
        walk(relPath);
        continue;
      }
      if (!ent.name.endsWith(".md")) continue;
      const outName = ent.name === "README.md" ? "index.md" : ent.name;
      fs.copyFileSync(path.join(srcDir, ent.name), path.join(destDir, outName));
    }
  }
  walk("");
}

function copyLocale(srcLocale, destDir) {
  if (!fs.existsSync(srcLocale)) {
    throw new Error(`Missing ${srcLocale}`);
  }
  rmrf(destDir);
  copyMarkdownTree(srcLocale, destDir);
}

rmrf(OUT);
fs.mkdirSync(OUT, { recursive: true });
copyLocale(path.join(HC, "en"), OUT);
copyLocale(path.join(HC, "zh"), path.join(OUT, "zh"));
console.log("Synced help-center -> vitepress-site/.content/");
