import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  const el = ref(null)
  const visible = ref(false)
  let observer

  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.value = true
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    if (el.value) observer.observe(el.value)
  })

  onUnmounted(() => observer?.disconnect())

  return { el, visible }
}
