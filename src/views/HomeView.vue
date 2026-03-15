<script setup>
import HeroSection from "@/components/HeroSection.vue";
import WelcomeSection from "@/components/WelcomeSection.vue";
import LogoSection from "@/components/LogoSection.vue";
</script>

<template>
  <main>
  <HeroSection/>
  <WelcomeSection/>
  <LogoSection />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 10rem;
}

@media screen and (max-width: 650px) {
  gap: 5rem;
}
</style>
