import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHeroStore = defineStore('hero', () => {
  const isOnHeroCenter = ref(false) // for AppTag, vertically centered
  const isOnHeroTop = ref(false)    // for AppHeader menu button, near the top
  const introPlayed = ref(false)

  return {
    isOnHeroCenter,
    isOnHeroTop,
    introPlayed,
  }
})