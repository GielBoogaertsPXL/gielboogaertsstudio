<script setup>
import { RouterView } from "vue-router";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppTag from "@/components/AppTag.vue";
import AppLoader from "@/components/AppLoader.vue";
</script>

<template>
  <div id="app">
    <AppLoader />
    <AppHeader/>
    <RouterView/>
    <AppFooter />
    <AppTag />
  </div>
</template>

<style scoped>
#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10rem;
}

@media screen and (max-width: 650px) {
  gap: 1rem;
}
</style>
