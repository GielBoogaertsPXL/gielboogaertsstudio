<script setup>
import { onMounted, onUnmounted, ref, useTemplateRef } from 'vue'
import { useHeroStore } from '@/stores/useHeroStore'
import { useRoute } from 'vue-router'

const route = useRoute()
const wrapperEl = useTemplateRef('wrapper')
const visible = ref(true)
const stretched = ref(false)
const heroStore = useHeroStore()

let observer

onMounted(() => {
  const wrapper = wrapperEl.value

  wrapper.style.width = 'fit-content'
  const textWidth = wrapper.offsetWidth
  wrapper.style.width = textWidth + 'px'

  setTimeout(() => {
    stretched.value = true
  }, 2000)

  const footer = document.querySelector('#footer')
  observer = new IntersectionObserver(([entry]) => {
    visible.value = !entry.isIntersecting
  })
  observer.observe(footer)
})

onUnmounted(() => {
  observer.disconnect()
})
</script>

<template>
  <div ref="wrapper" :class="['tag-wrapper', { stretched, hidden: !visible }]">
    <p class="tag" :class="{ white: heroStore.isOnHero && route.name === 'home' }">GIEL BOOGAERTS STUDIO</p>
  </div>
</template>

<style scoped>
.tag-wrapper {
  position: fixed;
  top: 0;
  left: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  transform: translateX(-50%);
  padding: 0 1rem;
  z-index: 100;
  pointer-events: none;
  transition: opacity 0.4s ease, width 1s ease;
  mix-blend-mode: screen;
}

.tag-wrapper.white {
  mix-blend-mode: normal;
}

.tag-wrapper.stretched {
  width: 100% !important;
}

.tag-wrapper.hidden {
  opacity: 0;
}

.tag {
  width: 100%;
  font: var(--header-3);
  font-size: 6rem;
  color: var(--dark-color);
  white-space: nowrap;
  text-align: justify;
  text-align-last: justify;
  transition: font-size 1s ease, color 0.4s ease;

}

.tag-wrapper.stretched .tag {
  font-size: 2rem;
}

.tag.white {
  color: white;
}
</style>