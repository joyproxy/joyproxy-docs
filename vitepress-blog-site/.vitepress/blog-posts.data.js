import { createContentLoader } from "vitepress";

const CATEGORY_LABEL = {
  en: {
    "getting-started": "Getting Started",
    technical: "Technical",
    "use-cases": "Use Cases",
    guides: "Guides",
  },
  "zh-CN": {
    "getting-started": "入门",
    technical: "技术",
    "use-cases": "使用场景",
    guides: "指南",
  },
  "zh-TW": {
    "getting-started": "入門",
    technical: "技術",
    "use-cases": "使用場景",
    guides: "指南",
  },
};

const ARTICLE_GLOBS = [
  "{getting-started,technical,use-cases,guides}/*.md",
  "zh-CN/{getting-started,technical,use-cases,guides}/*.md",
  "zh-TW/{getting-started,technical,use-cases,guides}/*.md",
];

function localeFromUrl(url) {
  const p = String(url || "").replace(/^\//, "").replace(/\/$/, "");
  if (p.startsWith("zh-CN/")) return { locale: "zh-CN", rel: p.slice(6) };
  if (p.startsWith("zh-TW/")) return { locale: "zh-TW", rel: p.slice(6) };
  return { locale: "en", rel: p };
}

function normalizeDate(value) {
  if (!value) return "1970-01-01";
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }
  const s = String(value);
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10);
  const parsed = new Date(s);
  if (!Number.isNaN(parsed.getTime())) return parsed.toISOString().slice(0, 10);
  return "1970-01-01";
}

function isArticleUrl(url) {
  const p = String(url || "").replace(/^\//, "").replace(/\/$/, "");
  const parts = p.split("/").filter(Boolean);
  if (parts.length === 2) return true;
  if (parts.length === 3 && (parts[0] === "zh-CN" || parts[0] === "zh-TW")) {
    return true;
  }
  return false;
}

export default createContentLoader(ARTICLE_GLOBS, {
  transform(raw) {
    return raw
      .filter((page) => isArticleUrl(page.url))
      .map((page) => {
        const { locale, rel } = localeFromUrl(page.url);
        const segments = rel.split("/").filter(Boolean);
        const category =
          page.frontmatter.category || segments[0] || "guides";
        const labels = CATEGORY_LABEL[locale] || CATEGORY_LABEL.en;
        const date = normalizeDate(page.frontmatter.date);
        return {
          locale,
          url: page.url,
          title: page.frontmatter.title || "",
          description: page.frontmatter.description || "",
          date,
          category,
          categoryLabel: labels[category] || category,
        };
      })
      .sort((a, b) => b.date.localeCompare(a.date));
  },
});
