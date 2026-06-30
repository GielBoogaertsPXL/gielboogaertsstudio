<script setup>
import HeroSection from "@/components/HeroSection.vue";
import WelcomeSection from "@/components/WelcomeSection.vue";
import { useScrollReveal } from "/scripts/useScrollReveal";

const { el: welcomeEl, visible: welcomeVisible } = useScrollReveal()
</script>

<template>
  <main>
    <HeroSection />
    <div ref="welcomeEl" class="scroll-section" :class="{ visible: welcomeVisible }">
      <WelcomeSection />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 10rem;
}

.scroll-section {
  opacity: 0;
  transition: opacity 0.8s ease;
}

.scroll-section.visible {
  opacity: 1;
}

@media screen and (max-width: 650px) {
  main {
    gap: 5rem;
  }
}
</style>