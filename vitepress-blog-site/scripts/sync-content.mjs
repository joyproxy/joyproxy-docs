/**
 * Mirror blog-center locales into .content/ for VitePress.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BC = path.resolve(ROOT, "..", "blog-center");
const OUT = path.join(ROOT, ".content");
const SKIP = new Set(["SUMMARY.md"]);
const LOCALES = [
  { src: "en", dest: "" },
  { src: "zh-CN", dest: "zh-CN" },
  { src: "zh-TW", dest: "zh-TW" },
];

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

rmrf(OUT);
fs.mkdirSync(OUT, { recursive: true });
for (const { src, dest } of LOCALES) {
  const srcPath = path.join(BC, src);
  if (!fs.existsSync(srcPath)) throw new Error(`Missing ${srcPath}`);
  const destPath = dest ? path.join(OUT, dest) : OUT;
  rmrf(destPath);
  copyMarkdownTree(srcPath, destPath);
}
console.log("Synced blog-center -> vitepress-blog-site/.content/");
