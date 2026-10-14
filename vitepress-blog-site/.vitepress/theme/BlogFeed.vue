<script setup>
import { computed } from "vue";
import { useData, useRoute } from "vitepress";
import { data as allPosts } from "../blog-posts.data";

const route = useRoute();
const { lang } = useData();

const localeKey = computed(() => {
  const p = route.path.replace(/^\/blog\/?/, "");
  if (p.startsWith("zh-CN")) return "zh-CN";
  if (p.startsWith("zh-TW")) return "zh-TW";
  return "en";
});

const posts = computed(() =>
  allPosts
    .filter((p) => p.locale === localeKey.value)
    .sort((a, b) => b.date.localeCompare(a.date)),
);

function formatDate(iso) {
  try {
    return new Intl.DateTimeFormat(lang.value || "en", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(iso + "T00:00:00"));
  } catch {
    return iso;
  }
}
</script>

<template>
  <div class="blog-feed" role="list">
    <article
      v-for="post in posts"
      :key="post.url"
      class="blog-feed-item"
      role="listitem"
    >
      <p class="blog-feed-meta">
        <span class="blog-feed-tag">{{ post.categoryLabel }}</span>
        <time :datetime="post.date">{{ formatDate(post.date) }}</time>
      </p>
      <h3 class="blog-feed-title">
        <a :href="post.url">{{ post.title }}</a>
      </h3>
      <p v-if="post.description" class="blog-feed-desc">{{ post.description }}</p>
    </article>
  </div>
</template>
