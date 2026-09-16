<script setup>
import { useI18n } from 'vue-i18n'
import { ref, computed, triggerRef, onUnmounted, onMounted } from 'vue'

const { t, locale } = useI18n()

const props = defineProps({
  project: Object,
  prev: Object,
  next: Object
})

const visibleItems = ref(new Set())
const observers = []
const observed = new Set()

function revealRef(el, index) {
  if (!el || observed.has(index)) return
  observed.add(index)

  const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visibleItems.value.add(index)
          triggerRef(visibleItems)
          observer.disconnect()
        }
      },
      { threshold: 0 }
  )
  observer.observe(el)
  observers.push(observer)
}

onUnmounted(() => observers.forEach(o => o.disconnect()))

const videoRef = ref(null)

// Compute WebM and MP4 source paths dynamically from project.video
// Inside ProjectPage.vue
const videoSources = computed(() => {
  const video = props.project?.video;
  if (!video) return null;

  // If video is already an object { mp4: "...", webm: "..." }
  if (typeof video === 'object') {
    return {
      mp4: video.mp4 || null,
      webm: video.webm || null
    };
  }

  // Fallback: If video is a plain string path "/videos/my-video.mp4"
  if (typeof video === 'string') {
    const basePath = video.replace(/\.(mp4|webm)$/i, '');
    return {
      mp4: `${basePath}.mp4`,
      webm: `${basePath}.webm`
    };
  }

  return null;
});

// Ensure autoplay triggers reliably on component mount
onMounted(() => {
  if (videoRef.value) {
    videoRef.value.play().catch((error) => {
      console.warn('Autoplay was prevented or delayed by browser policies:', error)
    })
  }
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

    <!-- Dynamic Video Container -->
    <div class="video-container" v-if="videoSources">
      <video
          ref="videoRef"
          autoplay
          loop
          muted
          playsinline
          disablepictureinpicture
          aria-hidden="true"
          class="looping-video"
      >
        <source :src="videoSources.webm" type="video/webm" />
        <source :src="videoSources.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>

    <div class="description">
      <template v-if="Array.isArray(project.description[locale])">
        <p v-for="(para, i) in project.description[locale]" :key="i">{{ para }}</p>
      </template>
      <p v-else>{{ project.description[locale] }}</p>
    </div>

    <section>
      <template v-for="(block, index) in project.content" :key="index">
        <img
            v-if="block.type === 'image'"
            :ref="el => revealRef(el, index)"
            :src="block.src"
            :class="[block.position, 'scroll-item', { visible: visibleItems.has(index) }]"
            :alt="block.alt[locale]"
        />
        <p
            v-else-if="block.type === 'text'"
            :ref="el => revealRef(el, index)"
            :class="['scroll-item', { visible: visibleItems.has(index) }]"
        >
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

.video-container {
  width: 100%;
  padding: 4rem 1rem 0;
  margin: 0 auto;
  overflow: hidden;
}

.looping-video {
  width: 100%;
  height: auto;
  display: block;
  pointer-events: none;
  user-select: none;
}

.description {
  padding: 12rem 5vw;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.description p {
  text-align: left;
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

.scroll-item {
  opacity: 0;
  transition: opacity 0.8s ease;
}

.scroll-item.visible {
  opacity: 1;
}

.first { margin-left: 0; width: 100%; }
.second { margin-left: 38%; }
.third { margin-left: 20%; }
.fourth { margin-left: 50%; }
.fifth { margin-left: 10%; }

@media screen and (max-width: 900px) {
  img { width: 60%; }
  .second { margin-left: 35%; }
  .fourth { margin-left: 30%; }
}

@media screen and (max-width: 600px) {
  img { width: 100%; }
  .first, .second, .third, .fourth, .fifth { margin-left: 0; }
}
</style>