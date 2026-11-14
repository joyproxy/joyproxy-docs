import DefaultTheme from "vitepress/theme";
import taxonomy from "../../scripts/blog-topics.json";
import "./blog.css";

const LOCALE_PREFIXES = new Set(["zh-CN", "zh-TW"]);
const CATEGORY_SET = new Set(taxonomy.categories.map((c) => c.id));
const ARTICLE_MAP = Object.create(null);

for (const cat of taxonomy.categories) {
  for (const topic of cat.topics) {
    for (const slug of topic.articles) {
      ARTICLE_MAP[slug] = { category: cat.id, topic: topic.id };
    }
  }
}

function parseBlogRoute(pathname) {
  let p = String(pathname || "/").replace(/\/+/g, "/");
  if (p === "/blog" || p.startsWith("/blog/")) {
    p = p.slice("/blog".length) || "/";
  }
  p = p.replace(/^\/+/, "").replace(/\/?(index)?(\.html)?$/, "");
  const parts = p ? p.split("/") : [];
  let localePrefix = "";
  if (parts.length && LOCALE_PREFIXES.has(parts[0])) {
    localePrefix = parts.shift();
  }
  return { localePrefix, rel: parts.join("/") };
}

function syncBlogTopicUI() {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  document.documentElement.classList.add("jp-sidebar-enhanced");

  const { localePrefix, rel } = parseBlogRoute(window.location.pathname);
  const searchTopic = new URLSearchParams(window.location.search).get("topic") || "";

  let isHome = false;
  let isCategory = false;
  let activeCategory = "";
  let activeTopic = "";

  if (!rel) {
    isHome = true;
  } else if (CATEGORY_SET.has(rel)) {
    isCategory = true;
    activeCategory = rel;
    activeTopic = searchTopic;
  } else if (ARTICLE_MAP[rel]) {
    activeCategory = ARTICLE_MAP[rel].category;
    activeTopic = ARTICLE_MAP[rel].topic;
  }

  const bar = document.querySelector("[data-blog-topic-bar]");
  const feed = document.querySelector("[data-blog-feed]");
  if (bar && feed) {
    const chips = Array.from(bar.querySelectorAll(".blog-topic-chip[data-topic]"));
    const validTopics = new Set(chips.map((c) => c.dataset.topic).filter((t) => t && t !== "all"));
    const filterTopic = activeTopic && validTopics.has(activeTopic) ? activeTopic : "all";
    activeTopic = filterTopic === "all" ? "" : filterTopic;

    for (const chip of chips) {
      chip.classList.toggle("is-active", chip.dataset.topic === filterTopic);
    }
    for (const item of feed.querySelectorAll(".blog-feed-item[data-topic]")) {
      const show = filterTopic === "all" || item.dataset.topic === filterTopic;
      item.hidden = !show;
      item.classList.toggle("is-filtered-out", !show);
    }
  }

  const sidebar = document.querySelector(".VPSidebar");
  if (!sidebar) return;

  for (const el of sidebar.querySelectorAll(".jp-nav-active")) {
    el.classList.remove("jp-nav-active");
  }
  for (const el of sidebar.querySelectorAll(".jp-group-active")) {
    el.classList.remove("jp-group-active");
  }

  for (const anchor of sidebar.querySelectorAll("a.VPLink")) {
    let url;
    try {
      url = new URL(anchor.href, window.location.origin);
    } catch {
      continue;
    }
    const parsed = parseBlogRoute(url.pathname);
    if (parsed.localePrefix !== localePrefix) continue;
    const linkTopic = url.searchParams.get("topic") || "";

    if (!parsed.rel && !linkTopic) {
      if (isHome) anchor.classList.add("jp-nav-active");
      continue;
    }

    if (CATEGORY_SET.has(parsed.rel) && !linkTopic) {
      if (activeCategory === parsed.rel) {
        const groupEl = anchor.closest(".VPSidebarItem.level-0");
        if (groupEl) groupEl.classList.add("jp-group-active");
        if (isCategory && !activeTopic) {
          anchor.classList.add("jp-nav-active");
        }
      }
      continue;
    }

    if (CATEGORY_SET.has(parsed.rel) && linkTopic) {
      if (activeCategory === parsed.rel && activeTopic === linkTopic) {
        anchor.classList.add("jp-nav-active");
      }
    }
  }
}

let listenersInstalled = false;

function installClientListeners() {
  if (listenersInstalled || typeof window === "undefined") return;
  listenersInstalled = true;

  window.addEventListener("popstate", () => {
    window.requestAnimationFrame(syncBlogTopicUI);
  });

  document.addEventListener("click", (event) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const target = event.target instanceof Element ? event.target.closest("a") : null;
    if (!target || !target.href) return;

    const inTopicBar = Boolean(target.closest("[data-blog-topic-bar], .blog-feed-meta"));
    const inSidebar = Boolean(target.closest(".VPSidebar"));
    if (!inTopicBar && !inSidebar) return;

    let dest;
    try {
      dest = new URL(target.href, window.location.origin);
    } catch {
      return;
    }
    if (dest.origin !== window.location.origin) return;

    const samePath =
      parseBlogRoute(dest.pathname).localePrefix === parseBlogRoute(window.location.pathname).localePrefix &&
      parseBlogRoute(dest.pathname).rel === parseBlogRoute(window.location.pathname).rel;

    if (samePath) {
      event.preventDefault();
      window.history.pushState(null, "", dest.pathname + dest.search + dest.hash);
      syncBlogTopicUI();
      if (inSidebar) {
        document.querySelector(".VPBackdrop")?.click();
      }
    }
  });
}

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window === "undefined") return;
    installClientListeners();

    const prevAfter = router.onAfterRouteChange;
    router.onAfterRouteChange = async (to) => {
      if (typeof prevAfter === "function") await prevAfter(to);
      window.requestAnimationFrame(syncBlogTopicUI);
      window.setTimeout(syncBlogTopicUI, 40);
    };

    window.requestAnimationFrame(syncBlogTopicUI);
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => syncBlogTopicUI(), { once: true });
    }
  },
};
