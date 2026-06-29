<script setup>
import { onMounted, onUnmounted, useTemplateRef } from 'vue'
import { useHeroStore } from '@/stores/useHeroStore'

const heroStore = useHeroStore()

const slides = [
  '/images/typeinterplay/TIP_hero.webp',
  '/images/phoneticalphabet/PAA_hero.webp',
  '/images/microtype/MT_hero.webp',
  '/images/jumbledscript/JS_hero.webp',
]

const imagesEl = useTemplateRef('images')

let observer
let timeoutId

const initObserver = () => {
  observer = new IntersectionObserver(
      ([entry]) => {
        heroStore.isOnHero = entry.isIntersecting
      },
      { threshold: 0 }
  )

  observer.observe(imagesEl.value)
}

onMounted(() => {
  if (!heroStore.introPlayed) {
    heroStore.introPlayed = true

    timeoutId = setTimeout(() => {
      initObserver()
    }, 3000)
  } else {
    initObserver()
  }
})

onUnmounted(() => {
  clearTimeout(timeoutId)
  observer?.disconnect()
  heroStore.isOnHero = false
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

<!--    <div class="text">
      <div class="left">
        <h2>EOPA</h2>
        <h2>TYPE-INTER-PLAY</h2>
        <h2>JUMBLED SCRIPT</h2>
      </div>
      <div class="right">
        <h2>MICROTYPE</h2>
        <h2>VIRGA JESSE</h2>
        <h2>ENZO MARI</h2>
        <h2>IMMOHABITS</h2>
        <h2>HYBRID PUBLISHING</h2>
        <h2>PHONETIC ALPHABET ARCHIVE</h2>
      </div>
    </div>-->

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

.text {
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  z-index: 10;
  pointer-events: none;
}

h2 {
  font: var(--headline);
  color: white;
}

.right {
  text-align: right;
}

.right, .left {
  width: 100%;
}

@media screen and (max-width: 450px) {
  .left {
    width: 20rem;
  }
}
</style>