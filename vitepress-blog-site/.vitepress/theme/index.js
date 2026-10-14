import DefaultTheme from "vitepress/theme";
import BlogFeed from "./BlogFeed.vue";
import "./blog.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("BlogFeed", BlogFeed);
  },
};
