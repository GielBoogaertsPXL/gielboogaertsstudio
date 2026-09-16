<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted, onUnmounted, useTemplateRef, ref } from 'vue'
import {useScrollReveal} from "../../scripts/useScrollReveal.js";

const { t } = useI18n()

const { el: workEl, visible: workVisible } = useScrollReveal()
const { el: introEl, visible: introVisible } = useScrollReveal()


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
    <div class="tags">
      <span class="left">{{ t('welcome.skill1') }}</span>
      <span class="right">{{ t('welcome.skill2') }}</span>
      <span class="left">{{ t('welcome.skill3') }}</span>
    </div>
    <div>
      <div ref="workEl" class="works" :class="{ visible: workVisible }">
        <img src="/images/microtype/MT_poster.webp" alt="">
        <img class="second-extra-image" src="/images/eopa/COC_content.webp" alt="">
        <img class="third-extra-image" src="/images/immohabits/IH_dashboard.webp" alt="">
        <RouterLink :to="{ name: 'work' }" class="work-link">{{ t('welcome.work') }}</RouterLink>
      </div>
    </div>
    <div ref="introEl" class="introduction" :class="{ visible: introVisible }">
     <p class="center">
       <span>{{ t('welcome.introduction1') }}</span>
       <span class="italic">{{ t('welcome.introduction2') }}</span>
       <span class="italic">{{ t('welcome.introduction3') }}</span>
       <span>{{ t('welcome.introduction4') }}</span>
       <span class="italic">{{ t('welcome.introduction5') }}</span>
     </p>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
}

span, p {
  font: var(--headline);
  color: var(--dark-color);
}

.center {
  padding: 0 5vw;
  text-align: center;
}

.italic {
  font-style: italic;
}

.left {
  align-self: flex-start;
}

.right {
  align-self: flex-end;
}

.tags, .introduction {
  padding: 5vw 0;
  display: flex;
  flex-direction: column;
  gap: 2vw;
}

.introduction {
  opacity: 0;
  transition: opacity 0.8s ease;
}

.introduction.visible {
  opacity: 1;
}

.works {
  padding: 15vw 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.8s ease;
}

.works.visible {
  opacity: 1;
}

img {
  width: calc(33.333% - 2rem/3);
}

.work-link {
  font: var(--header-3);
  margin: 0.5rem auto 0;
}

@media screen and (max-width: 1000px) {
  img {
    width: calc(50% - 0.5rem);
  }

  .third-extra-image {
    display: none;
  };
}

@media screen and (max-width: 700px) {
  section {
    gap: 4rem;
  }

  img {
    width: 100%;
  }

  .second-extra-image {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  section {
    padding: 8rem 0;
    gap: 8rem;
  }

  .works {
    padding: 7rem 0;
    gap: 0.5rem;
  }

  .introduction {
    padding-bottom: 0;
    margin-bottom: -3rem;
  }
}
</style>