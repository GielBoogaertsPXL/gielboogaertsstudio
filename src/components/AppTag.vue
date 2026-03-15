<script setup>
import { onMounted, onUnmounted, useTemplateRef, ref } from 'vue'

const tagEl = useTemplateRef('tag')
const visible = ref(true)

let observer

onMounted(() => {
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
  <p :class="['tag', { hidden: !visible }]" ref="tag">GIEL BOOGAERTS STUDIO</p>
</template>

<style scoped>
.tag {
  width: 100%;
  position: fixed;
  top: 50%;
  padding: 0 1rem;
  text-align-last: justify;
  font: var(--header-3);
  color: var(--dark-color);
  mix-blend-mode: screen;
  z-index: 100;
  transition: opacity 0.4s ease;
}

.tag.hidden {
  opacity: 0;
}
</style>
