import { defineConfig } from "vitepress";
import { buildSidebars } from "../scripts/parse-summary.mjs";

const sidebars = buildSidebars();

function blogCanonical(relativePath) {
  const rel = String(relativePath || "").replace(/^\.content\//, "").replace(/\\/g, "/");
  const base = "https://www.joyproxy.com/blog/";
  if (!rel || rel === "index.md") return base;
  const route = rel.replace(/index\.md$/, "").replace(/\.md$/, "");
  return base + route + (route.endsWith("/") ? "" : "/");
}

export default defineConfig({
  srcDir: ".content",
  outDir: ".vitepress/dist",
  base: "/blog/",
  title: "JoyProxy Blog",
  description: "Residential proxy guides, use cases, and technical articles.",
  cleanUrls: true,
  lastUpdated: false,
  appearance: false,
  transformHead({ pageData }) {
    return [
      ["link", { rel: "canonical", href: blogCanonical(pageData.relativePath) }],
      ["script", { src: "/blog/blog-locale-boot.js", defer: "" }],
    ];
  },
  head: [["link", { rel: "icon", href: "https://www.joyproxy.com/favicon.svg" }]],
  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig: {
        siteTitle: "JoyProxy Blog",
        logoLink: "/blog/",
        nav: [
          { text: "JoyProxy", link: "https://www.joyproxy.com/" },
          { text: "Help", link: "https://www.joyproxy.com/help/" },
        ],
        sidebar: sidebars.en,
      },
    },
    "zh-CN": {
      label: "简体中文",
      lang: "zh-CN",
      link: "/zh-CN/",
      themeConfig: {
        siteTitle: "JoyProxy 博客",
        logoLink: "/blog/zh-CN/",
        nav: [
          { text: "JoyProxy", link: "https://www.joyproxy.com/zh-CN/" },
          { text: "帮助中心", link: "https://www.joyproxy.com/help/" },
        ],
        sidebar: sidebars["zh-CN"],
      },
    },
    "zh-TW": {
      label: "繁體中文",
      lang: "zh-TW",
      link: "/zh-TW/",
      themeConfig: {
        siteTitle: "JoyProxy 部落格",
        logoLink: "/blog/zh-TW/",
        nav: [
          { text: "JoyProxy", link: "https://www.joyproxy.com/" },
          { text: "幫助中心", link: "https://www.joyproxy.com/help/" },
        ],
        sidebar: sidebars["zh-TW"],
      },
    },
  },
  themeConfig: {
    logo: "https://www.joyproxy.com/favicon.svg",
    aside: true,
    outline: [2, 3],
    socialLinks: [],
    search: { provider: "local" },
  },
});
