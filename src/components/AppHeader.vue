<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<template>
  <header>
    <button class="hamburger" @click="menuOpen = !menuOpen" :class="{ open: menuOpen }">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav :class="{ open: menuOpen }">
      <RouterLink to="/" @click="menuOpen = false">Home</RouterLink>
      <RouterLink to="/work" @click="menuOpen = false">Work</RouterLink>
      <RouterLink to="/about" @click="menuOpen = false">About</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  padding: 0.5rem 1rem 0 0;
  z-index: 100;
}

nav {
  display: flex;
  flex-direction: column;
  align-items: end;
  align-self: end;
}

a {
  text-decoration: none;
  font: var(--header-2);
  color: var(--dark-color);
  mix-blend-mode: screen;
}

a::after {
  height: 4px;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding-top: 0.5rem;
  align-self: end;
}

.hamburger span {
  display: block;
  width: 2rem;
  height: 4px;
  background: var(--dark-color);
  transition: all 0.3s ease;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
  margin-bottom: 0.2rem;
}

@media screen and (max-width: 900px) {
  .hamburger {
    display: flex;
  }

  nav {
    display: none;
  }

  nav.open {
    display: flex;
  }
}
</style>
