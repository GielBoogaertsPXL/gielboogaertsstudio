<script setup>
import { onMounted, onUnmounted, useTemplateRef } from 'vue'
import { useHeroStore } from '@/stores/useHeroStore'

const heroStore = useHeroStore()

const slides = [
  '/images/typeinterplay/TIP_hero.webp',
  '/images/phoneticalphabet/PAA_hero.webp',
  '/images/hybridpublishing/HP_hero.webp',
  '/images/jumbledscript/JS_hero.webp',
]

const imagesEl = useTemplateRef('images')

let centerObserver
let topObserver
let timeoutId

const initObservers = () => {
  // tag sits vertically centered on screen
  centerObserver = new IntersectionObserver(
      ([entry]) => {
        heroStore.isOnHeroCenter = entry.isIntersecting
      },
      {
        threshold: 0,
        rootMargin: '-50% 0px -50% 0px',
      }
  )
  centerObserver.observe(imagesEl.value)

  // menu button sits near the top of the screen
  topObserver = new IntersectionObserver(
      ([entry]) => {
        heroStore.isOnHeroTop = entry.isIntersecting
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -95% 0px',
      }
  )
  topObserver.observe(imagesEl.value)
}

onMounted(() => {
  if (!heroStore.introPlayed) {
    heroStore.introPlayed = true

    timeoutId = setTimeout(() => {
      initObservers()
    }, 3000)
  } else {
    initObservers()
  }
})

onUnmounted(() => {
  clearTimeout(timeoutId)
  centerObserver?.disconnect()
  topObserver?.disconnect()
  heroStore.isOnHeroCenter = false
  heroStore.isOnHeroTop = false
})
</script>

<template>
  <section>

    <!-- SCROLLING IMAGES -->
    <div ref="images" class="images">
      <div v-for="src in slides" :key="src" class="slide">
        <img :src="src" alt="" />
      </div>
    </div>

  </section>
</template>

<style scoped>
section {
  position: relative;
  height: calc(v-bind('slides.length') * 100vh);
}

.images {
  position: absolute;
  inset: 0;
}

.slide {
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h2 {
  font: var(--headline);
  color: white;
}
</style>