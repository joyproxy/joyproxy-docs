import DefaultTheme from "vitepress/theme";
import { setupSidebarInteraction } from "./sidebar-interaction.js";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window === "undefined") return;
    router.afterEach(() => {
      requestAnimationFrame(() => setupSidebarInteraction(router));
    });
    requestAnimationFrame(() => setupSidebarInteraction(router));
  },
};
