<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

defineProps({
  project: Object,
  prev: Object,
  next: Object
})
</script>

<template>
  <main v-if="project">

    <!-- TITLE -->
    <h1>
      <template v-for="(line, index) in project.titleLines" :key="index">
        <span>{{ line }}</span><br v-if="index < project.titleLines.length - 1" />
      </template>
    </h1>

    <!-- BACK -->
    <RouterLink class="back" to="/work">
      <span>{{ t('project.back') }}</span>
    </RouterLink>

    <!-- CONTENT -->
    <section>

      <!-- DESCRIPTION -->
      <p>{{ project.description[locale] }}</p>

      <!-- DYNAMIC CONTENT -->
      <template v-for="(block, index) in project.content" :key="index">

        <!-- IMAGE -->
        <img
            v-if="block.type === 'image'"
            :src="block.src"
            :class="block.position"
            :alt="block.alt[locale]"
        />

        <!-- CAPTION -->
        <p v-else-if="block.type === 'text'">
          {{ block[locale] }}
        </p>

      </template>

      <!-- YEAR LAST -->
      <p>{{ project.year }}</p>

      <!-- OPTIONAL DOWNLOAD -->
      <a
          v-if="project.downloadPdf"
          :href="project.downloadPdf.href"
          target="_blank"
          class="link"
      >
        {{ project.downloadPdf.label[locale] }}
      </a>

      <!-- OPTIONAL LINK -->
      <a
          v-if="project.link"
          :href="project.link.href"
          target="_blank"
          class="link"
      >
        {{ project.link.label[locale] }}
      </a>

      <a
          v-if="project.git"
          :href="project.git.href"
          target="_blank"
          class="link"
          id="github"
      >
        {{ project.git.label[locale] }}
      </a>

    </section>

    <div class="rotation">
      <RouterLink
          v-if="prev"
          :to="`/work/${prev.id}`"
      >
        {{ t('project.prev') }}
      </RouterLink>

      <RouterLink
          v-if="next"
          :to="`/work/${next.id}`"
      >
        {{ t('project.next') }}
      </RouterLink>
    </div>

  </main>

  <div v-else>
    {{ t('project.not_found') }}
  </div>
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
  width: 100%;
  padding: 0 5vw;
  display: flex;
  flex-direction: column;
  gap: 5vw;
}

.back {
  width: fit-content;
  position: relative;
  bottom: 6rem;
  align-items: center;
  gap: 0.4rem;
  margin-left: 1rem;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font: var(--header-3);
  color: var(--dark-color);
}

.rotation {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font: var(--header-3);
  padding: 2rem 1rem;
  margin-top: 4rem;
}

p {
  font: var(--header-3);
  padding: 0 1rem;
  text-align: center;
  color: var(--dark-color);
}

img {
  width: 45%;
}

.link {
  align-self: center;
  background: var(--primary-color);
  color: white;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
}

#github {
  margin-top: -3rem;
}

.first {
  margin-left: 0;
}

.second {
  margin-left: 40%;
}

.third {
  margin-left: 20%;
}

.fourth {
  margin-left: 55%;
}

.fifth {
  margin-left: 10%;
}

@media screen and (max-width: 900px) {
  img {
    width: 60%;
  }

  .second {
    margin-left: 35%;
  }

  .fourth {
    margin-left: 10%;
  }
}

@media screen and (max-width: 600px) {
  img {
    width: 100%;
  }

  .first, .second, .third, .fourth, .fifth {
    margin-left: 0;
  }
}
</style>
