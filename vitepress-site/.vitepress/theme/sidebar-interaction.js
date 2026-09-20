/**
 * Collapsible sidebar rows with a link: click title to expand + open first child,
 * click again while expanded to collapse (caret keeps default toggle).
 */
const BOUND = "data-jp-sidebar-bound";

function firstChildLink(section) {
  return section.querySelector(":scope > .items .VPSidebarItem.is-link a.link");
}

function toRoutePath(href) {
  const pathname = new URL(href, window.location.origin).pathname;
  const stripped = pathname.replace(/^\/help(\/|$)/, "/");
  return stripped === "" ? "/" : stripped;
}

function bindCollapsibleLink(section, router) {
  const link = section.querySelector(":scope > .item > a.link");
  if (!link || link.hasAttribute(BOUND)) return;
  const child = firstChildLink(section);
  if (!child) return;
  link.setAttribute(BOUND, "1");
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const collapsed = section.classList.contains("collapsed");
    const caret = section.querySelector(":scope > .item .caret");
    if (collapsed) {
      caret?.click();
      const target = toRoutePath(child.getAttribute("href"));
      const href = child.getAttribute("href");
      if (router?.push) {
        if (router.currentRoute.value.path !== target) router.push(target);
      } else if (href) {
        window.location.assign(href);
      }
    } else {
      caret?.click();
    }
  });
}

export function setupSidebarInteraction(router) {
  if (typeof document === "undefined") return;
  document
    .querySelectorAll(".VPSidebar .VPSidebarItem.collapsible.is-link")
    .forEach((section) => bindCollapsibleLink(section, router));
}
