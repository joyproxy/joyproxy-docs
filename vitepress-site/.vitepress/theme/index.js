import DefaultTheme from "vitepress/theme";
import "./custom.css";

function openFaqFromHash() {
  if (typeof document === "undefined") return;
  const hash = decodeURIComponent((window.location.hash || "").replace(/^#/, ""));
  if (!hash) return;
  const el = document.getElementById(hash);
  if (el && el.tagName === "DETAILS") {
    el.open = true;
    try {
      el.scrollIntoView({ block: "start", behavior: "smooth" });
    } catch (e) {
      el.scrollIntoView(true);
    }
  }
}

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window === "undefined") return;
    const run = () => {
      requestAnimationFrame(openFaqFromHash);
    };
    const prev = router.onAfterRouteChange;
    router.onAfterRouteChange = async (to) => {
      if (typeof prev === "function") await prev(to);
      run();
    };
    run();
  },
};
