<script setup>
import HeroSection from "@/components/HeroSection.vue";
import WelcomeSection from "@/components/WelcomeSection.vue";
import LogoSection from "@/components/LogoSection.vue";
import { useScrollReveal } from "/scripts/useScrollReveal";

const { el: welcomeEl, visible: welcomeVisible } = useScrollReveal()
const { el: logoEl, visible: logoVisible } = useScrollReveal()
</script>

<template>
  <main>
    <HeroSection />
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