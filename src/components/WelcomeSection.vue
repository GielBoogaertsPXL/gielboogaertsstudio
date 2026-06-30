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
      <span>{{ t('welcome.skill1') }}</span>
      <span>{{ t('welcome.skill2') }}</span>
      <span>{{ t('welcome.skill3') }}</span>
    </div>
    <div ref="logo" class="logo" :style="{ transform: `rotate(${rotation}deg)` }">
      <svg viewBox="0 0 116.79 116.79">
        <g>
          <path class="cls-1" d="M113.73,0H0v116.79h116.79V0h-3.06ZM55.34,110.58c-27.41-1.59-49.22-24.38-49.22-52.18S27.93,7.8,55.34,6.21v104.37ZM61.45,61.45h49.13c-1.53,26.4-22.74,47.6-49.13,49.13v-49.13ZM6.11,6.11h26.29c-11.36,5.67-20.62,14.93-26.29,26.29V6.11ZM6.11,110.67v-26.29c5.67,11.36,14.93,20.62,26.29,26.29H6.11ZM110.67,110.67h-26.29c11.36-5.67,20.62-14.93,26.29-26.29v26.29ZM61.45,55.34V6.11h49.22v49.22h-49.22Z"/>
        </g>
      </svg>
    </div>
    <div class="keywords">
      <span>{{ t('welcome.keyword1') }}</span>
      <span>{{ t('welcome.keyword2') }}</span>
      <span>{{ t('welcome.keyword3') }}</span>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 5rem;
  margin-top: 3rem;
}

span {
  font: var(--headline);
  color: var(--primary-color);
}

div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 3rem;
}

.keywords span {
  font-weight: 300;
}

.logo {
  width: 10vw;
  fill: var(--primary-color);
  will-change: transform;
}

@media screen and (max-width: 900px) {
  .logo {
    width: 20vw;
  }
}
</style>