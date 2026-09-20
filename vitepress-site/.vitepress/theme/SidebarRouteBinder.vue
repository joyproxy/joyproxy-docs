<script setup>
import { onMounted, watch } from "vue";
import { useRoute, useRouter } from "vitepress";
import { setupSidebarInteraction } from "./sidebar-interaction.js";

const route = useRoute();
const router = useRouter();

function bind() {
  requestAnimationFrame(() => setupSidebarInteraction(router));
}

onMounted(bind);
watch(() => route.path, bind);
</script>

<template />
