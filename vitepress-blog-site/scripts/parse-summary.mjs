/**
 * Build 2-level Category -> Topic sidebars from blog-topics.json,
 * keeping article URLs & SUMMARY.md completely decoupled and intact.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..");
const HC = path.resolve(ROOT, "..", "blog-center");
const TAXONOMY_PATH = path.join(HERE, "blog-topics.json");

const LINK_RE = /^\s*\*\s+\[([^\]]+)\]\(([^)]+\.md)\)/;
const SECTION_RE = /^##\s+(.+)$/;

export function mdHrefToRoute(href, localePrefix) {
  const clean = href.trim().replace(/^\.\//, "");
  let route;
  if (clean === "README.md") {
    route = "/";
  } else if (clean.endsWith("/README.md")) {
    route = `/${clean.slice(0, -"/README.md".length)}/`;
  } else if (clean.endsWith("README.md")) {
    route = `/${clean.replace(/README\.md$/, "")}`;
  } else {
    route = `/${clean.replace(/\.md$/, "")}`;
  }
  route = route.replace(/\/+/g, "/");
  if (localePrefix) {
    if (route === "/") return `${localePrefix}/`;
    return `${localePrefix}${route}`;
  }
  return route;
}

function parseLine(line) {
  const m = line.match(LINK_RE);
  if (!m) return null;
  const indent = line.search(/\S/);
  const level = Math.floor(indent / 4);
  return { text: m[1], href: m[2], level };
}

function toLink(node, localePrefix) {
  return { text: node.text, link: mdHrefToRoute(node.href, localePrefix) };
}

function findParent(items, targetLevel) {
  if (!items.length || targetLevel < 1) return null;
  const last = items[items.length - 1];
  if (targetLevel === 1) return last;
  if (!last.items?.length) return null;
  return findParent(last.items, targetLevel - 1);
}

function insertIntoGroup(group, node, localePrefix) {
  const link = toLink(node, localePrefix);
  if (node.level === 0) {
    group.items.push(link);
    return;
  }
  const parent = findParent(group.items, node.level);
  if (!parent) {
    group.items.push(link);
    return;
  }
  if (!parent.items) parent.items = [];
  parent.items.push(link);
}

function normalizeSidebarItem(item) {
  if (!item.items?.length) return item;
  item.collapsed = true;
  delete item.link;
  item.items = item.items.map(normalizeSidebarItem);
  return item;
}

function normalizeSidebarGroups(sidebar) {
  return sidebar.map((group) => {
    if (!group.items?.length) return group;
    if (group.text) {
      group.collapsed = true;
    }
    group.items = group.items.map(normalizeSidebarItem);
    return group;
  });
}

export function parseSummaryFile(summaryPath, localePrefix = "") {
  const text = fs.readFileSync(summaryPath, "utf8");
  const sidebar = [];
  let group = { text: "", items: [] };

  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trimEnd();
    if (!line || line.startsWith("# ")) continue;
    const sec = line.match(SECTION_RE);
    if (sec) {
      if (group.items.length) sidebar.push(group);
      group = { text: sec[1].trim(), items: [] };
      continue;
    }
    const node = parseLine(line);
    if (!node) continue;
    if (node.level === 0 && node.href === "README.md") continue;
    insertIntoGroup(group, node, localePrefix);
  }
  if (group.items.length) sidebar.push(group);
  return normalizeSidebarGroups(sidebar);
}

export function buildTopicSidebar(locale, localePrefix = "") {
  const taxonomy = JSON.parse(fs.readFileSync(TAXONOMY_PATH, "utf8"));
  const items = [
    {
      text: taxonomy.allLabel[locale] || "All Posts",
      link: localePrefix ? `${localePrefix}/` : "/",
    },
  ];
  for (const cat of taxonomy.categories) {
    const catBase = localePrefix ? `${localePrefix}/${cat.id}` : `/${cat.id}`;
    items.push({
      text: cat.label[locale] || cat.id,
      link: catBase,
      collapsed: false,
      items: cat.topics.map((topic) => ({
        text: topic.label[locale] || topic.id,
        link: `${catBase}?topic=${topic.id}`,
      })),
    });
  }
  return items;
}

export function buildSidebars() {
  return {
    en: buildTopicSidebar("en", ""),
    "zh-CN": buildTopicSidebar("zh-CN", "/zh-CN"),
    "zh-TW": buildTopicSidebar("zh-TW", "/zh-TW"),
  };
}
