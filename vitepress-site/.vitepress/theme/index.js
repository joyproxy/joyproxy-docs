import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import SidebarRouteBinder from "./SidebarRouteBinder.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "layout-top": () => h(SidebarRouteBinder),
    });
  },
};
