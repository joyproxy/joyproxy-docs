<script setup>
import { ClientOnly } from "vitepress/client";
import SidebarBinderInner from "./SidebarBinderInner.vue";
</script>

<template>
  <ClientOnly>
    <SidebarBinderInner />
  </ClientOnly>
</template>
