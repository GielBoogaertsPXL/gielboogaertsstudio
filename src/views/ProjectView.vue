<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import projects from '@/projects/projects.json'
import ProjectPage from '@/views/ProjectPage.vue'

const route = useRoute()

const currentIndex = computed(() =>
    projects.findIndex(p => p.id === route.params.id)
)

const project = computed(() =>
    currentIndex.value !== -1 ? projects[currentIndex.value] : null
)

const prevProject = computed(() =>
    currentIndex.value !== -1
        ? projects[(currentIndex.value - 1 + projects.length) % projects.length]
        : null
)

const nextProject = computed(() =>
    currentIndex.value !== -1
        ? projects[(currentIndex.value + 1) % projects.length]
        : null
)
</script>

<template>
  <ProjectPage
      v-if="project"
      :project="project"
      :prev="prevProject"
      :next="nextProject"
  />
</template>