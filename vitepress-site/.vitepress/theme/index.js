import DefaultTheme from "vitepress/theme";
import { setupSidebarInteraction } from "./sidebar-interaction.js";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window === "undefined") return;
    const run = () => {
      requestAnimationFrame(() => setupSidebarInteraction(router));
    };
    const prev = router.onAfterRouteChange;
    router.onAfterRouteChange = async (to) => {
      if (typeof prev === "function") await prev(to);
      run();
    };
    run();
  },
};
