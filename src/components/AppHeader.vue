<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<template>
  <header>
    <button class="menu-btn" @click="menuOpen = !menuOpen" :class="{ open: menuOpen }">
      <span>{{ menuOpen ? 'CLOSE' : 'MENU' }}</span>
    </button>

    <Transition name="overlay">
      <div class="overlay" v-if="menuOpen">
        <nav>
          <RouterLink :to="{ name: 'home' }" @click="menuOpen = false">HOME</RouterLink>
          <RouterLink :to="{ name: 'work' }" @click="menuOpen = false">WORK</RouterLink>
          <RouterLink :to="{ name: 'about' }" @click="menuOpen = false">ABOUT</RouterLink>
        </nav>
        <img src="@/assets/img/logo.svg" alt="gielboogaertsstudio logo">
      </div>
    </Transition>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  padding: 0.5rem 1rem 0 0;
  z-index: 100;
  display: flex;
  justify-content: flex-end;
}

nav a {
  font: var(--headline);
}

.menu-btn {
  background: none;
  border: none;
  cursor: pointer;
  z-index: 200;
  position: relative;
  padding-top: 0.25rem;
}

.menu-btn span {
  font: var(--header-2);
  color: var(--dark-color);
  mix-blend-mode: screen;
}

.overlay {
  position: fixed;
  inset: 0;
  background: white;
  z-index: 150;
  display: flex;
  justify-content: space-between;
}

.overlay img {
  width: 20vw;
  margin-right: 1rem;
  margin-bottom: 1rem;
  align-self: flex-end;
}

nav {
  margin-bottom: 2rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Overlay transition */
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.overlay-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}

.overlay-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media screen and (max-width: 450px) {
  nav a {
    font-size: 4rem;
  }
}
</style>