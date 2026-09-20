<script setup>
import { onBeforeUnmount, onMounted, nextTick } from "vue";
import { useRouter } from "vitepress";
import {
  collapseInactiveSidebarSections,
  setupSidebarInteraction,
} from "./sidebar-interaction.js";

const router = useRouter();
let removeAfterEach;

onMounted(async () => {
  await nextTick();
  const run = () => {
    requestAnimationFrame(() => {
      collapseInactiveSidebarSections();
      setupSidebarInteraction(router);
    });
  };
  run();
  removeAfterEach = router.afterEach(() => run());
});

onBeforeUnmount(() => {
  if (typeof removeAfterEach === "function") removeAfterEach();
});
</script>

<template />
