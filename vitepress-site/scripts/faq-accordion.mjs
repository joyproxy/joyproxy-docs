/**
 * On faq/*.md articles (not the overview README), wrap each ### question
 * as a collapsed <details> so users scan questions first.
 */
function relativePath(env) {
  return String(env?.relativePath || env?.path || "").replace(/\\/g, "/");
}

function isFaqArticle(env) {
  const rel = relativePath(env);
  const m = rel.match(/(?:^|\/)faq\/([^/]+)\.md$/);
  if (!m) return false;
  const name = m[1].toLowerCase();
  return name !== "index" && name !== "readme";
}

function escapeHtml(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function slugify(text) {
  return String(text || "")
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 96);
}

export function faqAccordionPlugin(md) {
  md.core.ruler.after("block", "faq_accordion", (state) => {
    if (!isFaqArticle(state.env || {})) return;
    const tokens = state.tokens;
    const out = [];
    let i = 0;
    while (i < tokens.length) {
      const tok = tokens[i];
      if (tok.type === "heading_open" && tok.tag === "h3") {
        let title = "";
        let j = i + 1;
        while (j < tokens.length && tokens[j].type !== "heading_close") {
          if (tokens[j].type === "inline") title = tokens[j].content;
          j += 1;
        }
        if (j < tokens.length) j += 1;
        const bodyStart = j;
        while (j < tokens.length) {
          const n = tokens[j];
          if (n.type === "heading_open" && (n.tag === "h2" || n.tag === "h3")) break;
          if (n.type === "hr") break;
          j += 1;
        }
        const id = slugify(title);
        const open = new state.Token("html_block", "", 0);
        open.content = `<details class="faq-item"${id ? ` id="${id}"` : ""}><summary>${escapeHtml(title)}</summary>\n<div class="faq-a">\n`;
        out.push(open);
        for (let k = bodyStart; k < j; k += 1) out.push(tokens[k]);
        const close = new state.Token("html_block", "", 0);
        close.content = "</div></details>\n";
        out.push(close);
        i = j;
        continue;
      }
      out.push(tok);
      i += 1;
    }
    state.tokens = out;
  });
}
