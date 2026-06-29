import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHeroStore = defineStore('hero', () => {
  const isOnHero = ref(false)
  const introPlayed = ref(false)

  return {
    isOnHero,
    introPlayed,
  }
})