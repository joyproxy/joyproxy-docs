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

function localeFromPath(filePath) {
  const p = filePath.replace(/\\/g, "/");
  if (p.startsWith("zh-CN/")) return { locale: "zh-CN", rel: p.slice(6) };
  if (p.startsWith("zh-TW/")) return { locale: "zh-TW", rel: p.slice(6) };
  return { locale: "en", rel: p };
}

export default createContentLoader(ARTICLE_GLOBS, async (raw) => {
  return raw
    .map((page) => {
      const src = (page.srcPath || page.filePath || "").replace(/\\/g, "/");
      const { locale, rel } = localeFromPath(src);
      const category =
        page.frontmatter.category || rel.split("/")[0] || "guides";
      const labels = CATEGORY_LABEL[locale] || CATEGORY_LABEL.en;
      const date = String(page.frontmatter.date || "1970-01-01");
      return {
        locale,
        url: page.url,
        title: page.frontmatter.title || page.title,
        description: page.frontmatter.description || "",
        date,
        category,
        categoryLabel: labels[category] || category,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
});
