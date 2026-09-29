<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from "vue-i18n";
import { useHeroStore } from '@/stores/useHeroStore'
import { useRoute } from 'vue-router'

const route = useRoute()
const heroStore = useHeroStore()

const menuOpen = ref(false)
const langOpen = ref(false)
const themeOpen = ref(false)
const isDark = ref(false)
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
  closeMenu()
}

function setTheme(theme) {
  isDark.value = theme === 'dark'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
  themeOpen.value = false
  closeMenu()
}

function toggleLangPopup() {
  langOpen.value = !langOpen.value
  if (langOpen.value) themeOpen.value = false
}

function toggleThemePopup() {
  themeOpen.value = !themeOpen.value
  if (themeOpen.value) langOpen.value = false
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    isDark.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    isDark.value = false
    document.documentElement.setAttribute('data-theme', 'light')
  }
})
</script>

<template>
  <header>
    <button
        class="menu-btn"
        :class="{
        white: heroStore.isOnHeroTop && route.name === 'home',
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

        <div class="overlay-actions">
          <div class="theme-wrapper">
            <button class="theme-btn" @click="toggleThemePopup">
              {{ isDark ? 'DARK' : 'LIGHT' }}
            </button>
            <Transition name="popup">
              <div class="theme-popup" v-if="themeOpen">
                <button v-if="!isDark" @click="setTheme('dark')">DARK</button>
                <button v-if="isDark" @click="setTheme('light')">LIGHT</button>
              </div>
            </Transition>
          </div>

          <div class="lang-wrapper">
            <button class="lang-btn" @click="toggleLangPopup">
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
}

.menu-btn span {
  font: var(--header-2);
  mix-blend-mode: difference;
}

.menu-btn.white {
  color: white;
}

.menu-btn.active {
  color: var(--dark-color);
}

.overlay {
  position: fixed;
  inset: 0;
  background: var(--light-color);
  z-index: 150;
  display: flex;
  justify-content: space-between;
  transition: background-color 0.3s ease;
}

nav {
  margin-bottom: 2rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.overlay-actions {
  position: absolute;
  width: 100%;
  padding: 1rem 1rem;
  align-self: flex-end;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
}

.theme-wrapper,
.lang-wrapper {
  position: relative;
}

.theme-btn,
.lang-btn {
  background: none;
  border: none;
  font: var(--headline);
  cursor: pointer;
  color: var(--dark-color);
  font-weight: lighter;
}

.theme-popup,
.lang-popup {
  position: absolute;
  bottom: 100%;
  left: 0; /* Align left edge with parent button */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Left-align the options */
  margin-bottom: 0.5rem;
}

.theme-popup button,
.lang-popup button {
  background: none;
  border: none;
  font: var(--headline);
  cursor: pointer;
  opacity: 0.3;
  color: var(--dark-color);
  text-align: left;
  font-weight: lighter;
}

.theme-popup button.active,
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