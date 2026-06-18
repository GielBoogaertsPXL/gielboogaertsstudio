<script setup>
import { onMounted, onUnmounted, useTemplateRef } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const textEl = useTemplateRef('text')

function fitText() {
  const headingEl = textEl.value
  if (!headingEl) return

  headingEl.style.fontSize = ''
  headingEl.style.whiteSpace = 'nowrap'
  headingEl.style.display = 'inline-block'

  const parent = headingEl.parentElement
  const parentStyle = getComputedStyle(parent)
  const parentWidth = parent.offsetWidth - parseFloat(parentStyle.paddingLeft) - parseFloat(parentStyle.paddingRight)
  const textWidth = headingEl.scrollWidth
  const scale = parentWidth / textWidth

  headingEl.style.fontSize = parseFloat(getComputedStyle(headingEl).fontSize) * scale + 'px'
  headingEl.style.display = ''
}

onMounted(() => {
  fitText()
  window.addEventListener('resize', fitText)
})

onUnmounted(() => {
  window.removeEventListener('resize', fitText)
})
</script>

<template>
  <footer id="footer">
    <div class="links">
      <div class="filler"></div>
      <div>
        <p class="name">{{ t('footer.contact') }}</p>
        <a href="mailto:info@gielboogaerts.com">info@gielboogaerts.com</a>
      </div>
      <div>
        <a href="https://www.instagram.com/gielboogaerts.studio/" target="_blank">Instagram</a>
        <a href="https://www.linkedin.com/in/giel-boogaerts-581b96224/" target="_blank">LinkedIn</a>
        <a href="https://github.com/GielBoogaertsPXL" target="_blank">Github</a>
      </div>
      <div class="privacyPolicy">
        <a href="/privacyPolicy.pdf" download>{{ t('footer.privacy') }}</a>
      </div>
      <div class="filler"></div>
    </div>
    <h1 ref="text">GIEL BOOGAERTS STUDIO</h1>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  padding: 0.5rem 1rem;
}

.links {
  width: 100%;
  display: flex;
  gap: 1rem;
  font: var(--body-bold);
}

.links div {
  width: calc(25% - 0.8rem);
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  justify-content: flex-end;
  font: var(--body-bold);
}

.privacyPolicy {
  text-align: right;
}

.name {
  font: var(--body-regular);
}

@media screen and (max-width: 1100px) {
  .links div {
    width: calc(33.333% - 0.666rem);
  }

  .links .filler {
    display: none;
  }
}

@media screen and (max-width: 650px) {
  .links div:nth-child(3) {
    text-align: right;
  }

  h1 {
    margin-top: 0.5rem;
  }
}
</style>
