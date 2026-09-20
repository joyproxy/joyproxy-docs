<script setup>
import { onMounted, watch } from "vue";
import { useRoute, useRouter } from "vitepress";
import { setupSidebarInteraction } from "./sidebar-interaction.js";

const route = useRoute();
const router = useRouter();

function run() {
  requestAnimationFrame(() => setupSidebarInteraction(router));
}

onMounted(() => {
  run();
  watch(() => route.path, run);
});
</script>

<template />
