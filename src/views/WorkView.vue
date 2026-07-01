<script setup>
import { useI18n } from 'vue-i18n'
import projects from '@/projects/projects.json'

const { t } = useI18n()

const projectMap = Object.fromEntries(
    projects.map(p => [p.id, p])
)
</script>

<template>
  <main>
    <h1>{{ t('work.title') }}</h1>

    <section>
      <div class="first">
        <RouterLink :to="`/work/${projectMap.microtype.id}`">
          <img :src="projectMap.microtype.cover" />
          <div class="text">
            <span>{{ projectMap.microtype.title }}</span>
            <span>{{ projectMap.microtype.year }}</span>
          </div>
        </RouterLink>

        <RouterLink :to="`/work/${projectMap.jumbledscript.id}`">
          <img :src="projectMap.jumbledscript.cover" />
          <div class="text">
            <span>{{ projectMap.jumbledscript.title }}</span>
            <span>{{ projectMap.jumbledscript.year }}</span>
          </div>
        </RouterLink>
      </div>

      <div class="second">
        <RouterLink :to="`/work/${projectMap.eopa.id}`">
          <img id="eopa" :src="projectMap.eopa.cover" />
          <div class="text">
            <span>{{ projectMap.eopa.title }}</span>
            <span>{{ projectMap.eopa.year }}</span>
          </div>
        </RouterLink>
      </div>

      <div class="third">
        <RouterLink :to="`/work/${projectMap.typeinterplay.id}`">
          <img :src="projectMap.typeinterplay.cover" />
          <div class="text">
            <span>{{ projectMap.typeinterplay.title }}</span>
            <span>{{ projectMap.typeinterplay.year }}</span>
          </div>
        </RouterLink>

        <RouterLink :to="`/work/${projectMap.virgajesse.id}`">
          <img :src="projectMap.virgajesse.cover" />
          <div class="text">
            <span>{{ projectMap.virgajesse.title }}</span>
            <span>{{ projectMap.virgajesse.year }}</span>
          </div>
        </RouterLink>
      </div>

      <div class="fourth">
        <RouterLink :to="`/work/${projectMap.enzomari.id}`">
          <img :src="projectMap.enzomari.cover" />
          <div class="text">
            <span>{{ projectMap.enzomari.title }}</span>
            <span>{{ projectMap.enzomari.year }}</span>
          </div>
        </RouterLink>

        <RouterLink :to="`/work/${projectMap.archetype.id}`">
          <img :src="projectMap.archetype.cover" />
          <div class="text">
            <span>{{ projectMap.archetype.title }}</span>
            <span>{{ projectMap.archetype.year }}</span>
          </div>
        </RouterLink>
      </div>

      <div class="fifth">
        <RouterLink :to="`/work/${projectMap.phoneticalphabet.id}`">
          <img :src="projectMap.phoneticalphabet.cover" />
          <div class="text">
            <span>{{ projectMap.phoneticalphabet.title }}</span>
            <span>{{ projectMap.phoneticalphabet.year }}</span>
          </div>
        </RouterLink>
      </div>

      <div class="third">
        <RouterLink :to="`/work/${projectMap.immohabits.id}`">
          <img :src="projectMap.immohabits.cover" />
          <div class="text">
            <span>{{ projectMap.immohabits.title }}</span>
            <span>{{ projectMap.immohabits.year }}</span>
          </div>
        </RouterLink>


        <RouterLink :to="`/work/${projectMap.hybridpublishing.id}`">
          <img :src="projectMap.hybridpublishing.cover" />
          <div class="text">
            <span>{{ projectMap.hybridpublishing.title }}</span>
            <span>{{ projectMap.hybridpublishing.year }}</span>
          </div>
        </RouterLink>
      </div>

      <div class="first">
        <RouterLink :to="`/work/${projectMap.pasters.id}`">
          <img :src="projectMap.pasters.cover" />
          <div class="text">
            <span>{{ projectMap.pasters.title }}</span>
            <span>{{ projectMap.pasters.year }}</span>
          </div>
        </RouterLink>
      </div>
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

span {
  font: var(--body-bold);
  text-align-last: left;
}

section {
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 15vw;
}

.text {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.first {
  display: flex;
  gap: 1rem;
  width: 75%;
}

.first a {
  width: calc(50% - 0.5rem);
}

.first img {
  width: 100%;
}

.second {
  width: 100%;
}

.second img {
  width: 100%;
}

.third {
  width: 100%;
  display: flex;
  gap: 1rem;
}

.third a:nth-child(1) {
  width: calc(66.666% - 0.5rem);
}

.third a:nth-child(2) {
  width: calc(33.333% - 0.5rem);
  height: fit-content;
}

.third img {
  width: 100%;
}

.fourth {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.fourth a {
  width: 33.333%;
}

.fourth img {
  width: 100%;
}

.fifth {
  width: 100%;
}

.fifth a {
  width: 33.333%;
  left: 25vw;
}

.fifth img {
  width: 100%;
}

@media screen and (max-width: 550px) {
  .first {
    flex-direction: column;
    width: 100%;
    gap: 15vw;
  }

  .first a {
    width: 100%;
  }

  #eopa {
    content:url("/images/eopa/covers_vertical.webp");
  }

  .third {
    flex-direction: column;
    gap: 15vw;
  }

  .third a:nth-child(1) {
    width: 100%;
  }

  .third a:nth-child(2) {
    width: 100%;
  }

  .fourth {
    flex-direction: column;
    gap: 15vw;
  }

  .fourth a {
    width: 100%;
  }

  .fifth a {
    width: 100%;
    left: 0;
  }
}
</style>