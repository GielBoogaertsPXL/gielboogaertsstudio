<script setup>
import { ref } from 'vue'
import { useI18n } from "vue-i18n";
import { useHeroStore } from '@/stores/useHeroStore'
import { useRoute } from 'vue-router'

const route = useRoute()
const heroStore = useHeroStore()

const menuOpen = ref(false)
const langOpen = ref(false)
const { locale, t } = useI18n()

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}

function closeMenu() {
  menuOpen.value = false
  document.body.style.overflow = ''
}

function setLang(lang) {
  locale.value = lang
  localStorage.setItem('locale', lang)
  langOpen.value = false
}
</script>

<template>
  <header>
    <button
        class="menu-btn"
        :class="{
        white: heroStore.isOnHero && route.name === 'home',
        active: menuOpen,
      }"
        @click="toggleMenu"
    >
      <span>{{ menuOpen ? t('nav.close') : t('nav.menu') }}</span>
    </button>

    <Transition name="overlay">
      <div class="overlay" v-if="menuOpen">
        <nav>
          <RouterLink :to="{ name: 'home' }" @click="closeMenu">{{ t('nav.home') }}</RouterLink>
          <RouterLink :to="{ name: 'work' }" @click="closeMenu">{{ t('nav.work') }}</RouterLink>
          <RouterLink :to="{ name: 'about' }" @click="closeMenu">{{ t('nav.about') }}</RouterLink>
        </nav>

        <div class="lang-wrapper">
          <button class="lang-btn" @click="langOpen = !langOpen">
            {{ locale.toUpperCase() }}
          </button>
          <Transition name="popup">
            <div class="lang-popup" v-if="langOpen">
              <button v-if="locale !== 'en'" @click="setLang('en')">EN</button>
              <button v-if="locale !== 'nl'" @click="setLang('nl')">NL</button>
            </div>
          </Transition>
        </div>
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
  mix-blend-mode: screen;
}

.menu-btn.white {
  color: white;
}

.menu-btn.active {
  color: black;
}

.overlay {
  position: fixed;
  inset: 0;
  background: white;
  z-index: 150;
  display: flex;
  justify-content: space-between;
}

nav {
  margin-bottom: 2rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.lang-wrapper {
  margin-right: 1rem;
  margin-bottom: 1rem;
  align-self: flex-end;
  position: relative;
}

.lang-btn {
  background: none;
  border: none;
  font: var(--headline);
  cursor: pointer;
}

.lang-popup {
  position: absolute;
  bottom: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 0.5rem;
}

.lang-popup button {
  background: none;
  border: none;
  font: var(--headline);
  cursor: pointer;
  opacity: 0.3;
}

.lang-popup button.active {
  opacity: 1;
}

.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;
  transform: translateY(6px);
}

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