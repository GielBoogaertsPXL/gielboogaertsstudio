<script setup>
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '/scripts/useScrollReveal'

const { t } = useI18n()

const { el: p1El, visible: p1Visible } = useScrollReveal()
const { el: p2El, visible: p2Visible } = useScrollReveal()
const { el: p3El, visible: p3Visible } = useScrollReveal()
const { el: keywordsEl, visible: keywordsVisible } = useScrollReveal()
const { el: quoteEl, visible: quoteVisible } = useScrollReveal()
</script>

<template>
  <main>
    <h1>{{ t('about.title') }}</h1>
    <section>
      <p ref="p1El" class="scroll-item" :class="{ visible: p1Visible }">
        {{ t('about.p1') }}
      </p>
      <p ref="p2El" class="scroll-item" :class="{ visible: p2Visible }">
        {{ t('about.p2') }}
      </p>
      <p ref="p3El" class="scroll-item" :class="{ visible: p3Visible }">
        {{ t('about.p3_pre') }}<span>{{ t('about.p3_master') }}</span>{{ t('about.p3_mid') }}<span>{{ t('about.p3_digital') }}</span>{{ t('about.p3_mid2') }}<span>{{ t('about.p3_book') }}</span>{{ t('about.p3_end') }}
      </p>
      <p ref="keywordsEl" class="scroll-item" :class="{ visible: keywordsVisible }">
        {{ t('about.keywords_label') }}<br>
        <span>{{ t('about.keywords') }}</span>
      </p>
      <p ref="quoteEl" class="scroll-item quote" :class="{ visible: quoteVisible }">
        {{ t('about.quote') }}
        <span class="quotePerson">{{ t('about.quote_person') }}</span>
      </p>
    </section>
  </main>
</template>

<style scoped>
h1 {
  font: var(--headline);
  color: var(--primary-color);
  padding-left: 1rem;
  margin-bottom: 10.5rem;
  margin-top: 0.5rem;
}

section {
  display: flex;
  flex-direction: column;
  gap: 20vw;
  align-items: center;
  text-align: center;
  width: 60%;
  margin: 0 auto;
}

p {
  font: var(--header-2);
  color: var(--dark-color);
}

span {
  font-style: italic;
}

.quote {
  color: var(--primary-color);
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.quotePerson {
  color: var(--primary-color);
  font: var(--header-3);
  font-weight: 400;
}

.scroll-item {
  opacity: 0;
  transition: opacity 0.8s ease;
}

.scroll-item.visible {
  opacity: 1;
}
</style>