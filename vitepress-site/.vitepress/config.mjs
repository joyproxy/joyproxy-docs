import { defineConfig } from "vitepress";
import { buildSidebars } from "../scripts/parse-summary.mjs";
import { faqAccordionPlugin } from "../scripts/faq-accordion.mjs";

const { en: sidebarEn, zh: sidebarZh } = buildSidebars();

function canonicalForPage(relativePath) {
  let rel = String(relativePath || "").replaceAll("\\", "/");
  rel = rel.replace(/^\.content\//, "").replace(/^\/+/, "");
  const isZh = rel === "zh" || rel.startsWith("zh/");
  if (isZh) rel = rel.replace(/^zh\/?/, "");
  rel = rel.replace(/(^|\/)index\.md$/, "$1");
  rel = rel.replace(/\.md$/, "");
  const suffix = rel ? `${rel}/` : "";
  return `https://www.joyproxy.com/help/${isZh ? "zh/" : ""}${suffix}`;
}

export default defineConfig({
  srcDir: ".content",
  outDir: ".vitepress/dist",
  base: "/help/",
  title: "JoyProxy Help Center",
  description: "JoyProxy product documentation — proxy IP, Web Scraping API, and console guides.",
  cleanUrls: true,
  lastUpdated: false,
  appearance: false,
  transformHead({ pageData }) {
    return [
      ["link", { rel: "canonical", href: canonicalForPage(pageData.relativePath) }],
    ];
  },
  markdown: {
    html: true,
    linkify: true,
    config(md) {
      faqAccordionPlugin(md);
    },
  },
  head: [["link", { rel: "icon", href: "https://www.joyproxy.com/favicon.svg" }]],
  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig: {
        siteTitle: "JoyProxy Help",
        logoLink: "/help/",
        nav: [
          { text: "JoyProxy", link: "https://www.joyproxy.com/" },
          { text: "Console", link: "https://www.joyproxy.com/admin-overview.html" },
        ],
        sidebar: sidebarEn,
      },
    },
    zh: {
      label: "简体中文",
      lang: "zh-CN",
      link: "/zh/",
      themeConfig: {
        siteTitle: "JoyProxy 帮助中心",
        logoLink: "/help/zh/",
        nav: [
          { text: "JoyProxy", link: "https://www.joyproxy.com/" },
          { text: "控制台", link: "https://www.joyproxy.com/admin-overview.html" },
        ],
        sidebar: sidebarZh,
      },
    },
  },
  themeConfig: {
    logo: "https://www.joyproxy.com/favicon.svg",
    aside: false,
    outline: false,
    socialLinks: [],
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "Search",
                buttonAriaLabel: "Search",
              },
              modal: {
                displayDetails: "Display detailed list",
                resetButtonTitle: "Reset search",
                backButtonTitle: "Close search",
                noResultsText: "No results for",
                footer: {
                  selectText: "to select",
                  selectKeyAriaLabel: "Enter",
                  navigateText: "to navigate",
                  navigateUpKeyAriaLabel: "Up arrow",
                  navigateDownKeyAriaLabel: "Down arrow",
                  closeText: "to close",
                  closeKeyAriaLabel: "Escape",
                },
              },
            },
          },
          zh: {
            translations: {
              button: {
                buttonText: "搜索",
                buttonAriaLabel: "搜索",
              },
              modal: {
                displayDetails: "显示详细列表",
                resetButtonTitle: "重置搜索",
                backButtonTitle: "关闭搜索",
                noResultsText: "未找到与以下关键词相关的结果",
                footer: {
                  selectText: "选择",
                  selectKeyAriaLabel: "Enter 键",
                  navigateText: "切换",
                  navigateUpKeyAriaLabel: "上方向键",
                  navigateDownKeyAriaLabel: "下方向键",
                  closeText: "关闭",
                  closeKeyAriaLabel: "Esc 键",
                },
              },
            },
          },
        },
      },
    },
  },
});
