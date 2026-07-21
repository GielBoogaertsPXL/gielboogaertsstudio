<script setup>
import {useI18n} from 'vue-i18n'

const {t, locale} = useI18n()

defineProps({
  project: Object,
  prev: Object,
  next: Object
})
</script>

<template>
  <main v-if="project">

    <h1>
      <template v-for="(line, index) in project.titleLines" :key="index">
        <span>{{ line }}</span><br v-if="index < project.titleLines.length - 1"/>
      </template>
    </h1>

    <p class="year">{{ project.year }}</p>

    <div class="links">
      <a v-if="project.downloadPdf" :href="project.downloadPdf.href" target="_blank" class="link no-underline">
        {{ project.downloadPdf.label[locale] }}
      </a>
      <a v-if="project.link" :href="project.link.href" target="_blank" class="link no-underline">
        {{ project.link.label[locale] }}
      </a>
      <a v-if="project.git" :href="project.git.href" target="_blank" class="link no-underline" id="github">
        {{ project.git.label[locale] }}
      </a>
    </div>

    <div class="tags" v-if="project.tags">
      <div class="tag-col">
        <p class="tag-title">{{ project.tags.medium.title[locale] }}</p>
        <ul>
          <li v-for="(item, i) in project.tags.medium.items" :key="i">{{ item[locale] }}</li>
        </ul>
      </div>

      <div class="tag-col">
        <p class="tag-title">{{ project.tags.design.title[locale] }}</p>
        <ul>
          <li v-for="(item, i) in project.tags.design.items" :key="i">{{ item[locale] }}</li>
        </ul>
      </div>
    </div>

    <div class="description">
      <p
          v-for="(paragraph, index) in project.description[locale]"
          :key="index"
      >
        {{ paragraph }}
      </p>
    </div>

    <section>
      <template v-for="(block, index) in project.content" :key="index">
        <img
            v-if="block.type === 'image'"
            :src="block.src"
            :class="block.position"
            :alt="block.alt[locale]"
        />
        <p v-else-if="block.type === 'text'">
          {{ block[locale] }}
        </p>
      </template>
    </section>

    <div class="rotation">
      <RouterLink v-if="prev" :to="`/work/${prev.id}`">
        {{ t('project.prev') }}
      </RouterLink>
      <RouterLink v-if="next" :to="`/work/${next.id}`">
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
  margin-top: 0.5rem;
}

section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5vw;
}

.year {
  text-align: right;
  font: var(--headline);
  font-weight: normal;
  color: var(--primary-color);
}

.description {
  padding: 7rem 5vw;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.description p {
  text-align: left;
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
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  border-radius: 2rem;
  padding: 0.5rem 1rem;
}

.link:hover {
  background-color: var(--primary-color);
  color: white;
}

.links {
  display: flex;
  gap: 1rem;
  padding: 1rem;
}

.tags {
  display: flex;
  gap: 4rem;
  padding: 1rem;
}

.tag-col {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tag-title {
  font: var(--body-bold);
  color: var(--dark-color);
  text-align: left;
  padding: 0;
}

.tag-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.tag-col li {
  font: var(--body-regular);
  color: var(--dark-color);
}

.first {
  margin-left: 0;
  width: 100%;
}
.second { margin-left: 38%; }
.third { margin-left: 20%; }
.fourth { margin-left: 50%; }
.fifth { margin-left: 10%; }

@media screen and (max-width: 900px) {
  img { width: 60%; }
  .second { margin-left: 35%; }
  .fourth { margin-left: 10%; }
}

@media screen and (max-width: 600px) {
  img { width: 100%; }
  .first, .second, .third, .fourth, .fifth { margin-left: 0; }
}
</style>