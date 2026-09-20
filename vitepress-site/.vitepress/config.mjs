import { defineConfig } from "vitepress";
import { buildSidebars } from "../scripts/parse-summary.mjs";

const { en: sidebarEn, zh: sidebarZh } = buildSidebars();

export default defineConfig({
  srcDir: ".content",
  outDir: ".vitepress/dist",
  base: "/help/",
  title: "JoyProxy Help Center",
  description: "JoyProxy product documentation — proxy IP, Web Scraping API, and console guides.",
  cleanUrls: true,
  lastUpdated: false,
  appearance: false,
  markdown: {
    html: true,
    linkify: true,
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
  },
});
