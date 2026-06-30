<script setup>
import { RouterView } from "vue-router";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppTag from "@/components/AppTag.vue";
import { ref, onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useHead } from '@unhead/vue'

const { locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: computed(() => locale.value),
  },
})

const ready = ref(false)
onMounted(() => {
  document.body.style.overflow = 'hidden'

  const reveal = () => {
    setTimeout(() => {
      ready.value = true
      document.body.style.overflow = ''
    }, 2500)
  }

  if (document.readyState === 'complete') {
    reveal()
  } else {
    window.addEventListener('load', reveal, { once: true })
  }
})
</script>

<template>
  <div id="app">
    <AppTag />
    <div id="content" :class="{ visible: ready }">
      <AppHeader />
      <RouterView />
      <AppFooter />
    </div>
  </div>
</template>

<style scoped>
#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10rem;
  isolation: auto;
}

#content {
  display: flex;
  flex-direction: column;
  gap: 10rem;
  opacity: 0;
  transition: opacity 1s ease;
}

#content.visible {
  opacity: 1;
}
</style>