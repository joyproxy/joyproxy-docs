/**
 * Collapsible sidebar rows with a link: click title to expand + open first child,
 * click again while expanded to collapse (caret keeps default toggle).
 */
const BOUND = "data-jp-sidebar-bound";

function firstChildLink(section) {
  return section.querySelector(":scope > .items .VPSidebarItem.is-link a.link");
}

/** VP may show children for the active route while the group still has .collapsed. */
function isSectionExpanded(section) {
  if (!section.classList.contains("collapsed")) return true;
  if (section.querySelector(":scope > .items a.link.is-active")) return true;
  const items = section.querySelector(":scope > .items");
  if (!items) return false;
  const { display, visibility, height } = window.getComputedStyle(items);
  if (display === "none" || visibility === "hidden") return false;
  return items.getBoundingClientRect().height > 0 || parseFloat(height) > 0;
}

function bindCollapsibleLink(section, router) {
  const link = section.querySelector(":scope > .item > a.link");
  if (!link || link.hasAttribute(BOUND)) return;
  const child = firstChildLink(section);
  if (!child) return;
  link.setAttribute(BOUND, "1");
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const expanded = isSectionExpanded(section);
    const caret = section.querySelector(":scope > .item .caret");
    if (expanded) {
      caret?.click();
      return;
    }
    caret?.click();
    const href = child.getAttribute("href");
    if (href && typeof router?.go === "function") {
      router.go(href);
    } else if (href) {
      window.location.assign(href);
    }
  });
}

export function setupSidebarInteraction(router) {
  if (typeof document === "undefined") return;
  document
    .querySelectorAll(".VPSidebar .VPSidebarItem.collapsible.is-link")
    .forEach((section) => bindCollapsibleLink(section, router));
}
