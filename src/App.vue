<script setup>
import { RouterView } from "vue-router";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppTag from "@/components/AppTag.vue";
import AppLoader from "@/components/AppLoader.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useHead } from '@unhead/vue'

const { locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: computed(() => locale.value),
  },
})
</script>

<template>
  <div id="app">
    <AppLoader />
    <AppHeader />
    <RouterView />
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
  #app {
    gap: 1rem;
  }
}
</style>