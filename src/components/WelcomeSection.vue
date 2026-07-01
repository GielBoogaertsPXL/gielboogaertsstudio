<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted, onUnmounted, useTemplateRef, ref } from 'vue'

const { t } = useI18n()

const logoEl = useTemplateRef('logo')
const rotation = ref(0)

function onScroll() {
  const el = logoEl.value
  if (!el) return

  const rect = el.getBoundingClientRect()
  // how far the logo's center is from the viewport center, normalized
  const elCenter = rect.top + rect.height / 2
  const viewportCenter = window.innerHeight / 2
  const distance = viewportCenter - elCenter

  rotation.value = distance * 0.15 // tweak multiplier for rotation speed
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <section>
    <div>
      <span class="left">{{ t('welcome.skill1') }}</span>
      <span class="right">{{ t('welcome.skill2') }}</span>
      <span class="left">{{ t('welcome.skill3') }}</span>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  padding: 0 1rem 3rem;
  display: flex;
  flex-direction: column;
}

span {
  font: var(--headline);
  color: var(--dark-color);
}

.left {
  align-self: flex-start;
}

.right {
  align-self: flex-end;
}

div {
  display: flex;
  flex-direction: column;
  gap: 2vw;
}
</style>