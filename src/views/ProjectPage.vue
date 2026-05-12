<script setup>
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
      <span>← Back to work</span>
    </RouterLink>

    <!-- CONTENT -->
    <section>

      <!-- DESCRIPTION FIRST -->
      <p>{{ project.description }}</p>

      <!-- DYNAMIC CONTENT -->
      <template v-for="(block, index) in project.content" :key="index">

        <!-- IMAGE -->
        <img
            v-if="block.type === 'image'"
            :src="block.src"
            :class="block.position"
            alt=""
        />

        <!-- TEXT -->
        <p v-else-if="block.type === 'text'">
          {{ block.value }}
        </p>

      </template>

      <!-- YEAR LAST -->
      <p>{{ project.year }}</p>

      <!-- OPTIONAL DOWNLOAD (placed logically at end) -->
      <a
          v-if="project.downloadPdf"
          :href="project.downloadPdf.href"
          target="_blank"
          class="download"
      >
        {{ project.downloadPdf.label }}
      </a>

    </section>

    <div class="rotation">
      <RouterLink
          v-if="prev"
          :to="`/projects/${prev.id}`"
      >
        ← Previous work
      </RouterLink>

      <RouterLink
          v-if="next"
          :to="`/projects/${next.id}`"
      >
        Next work →
      </RouterLink>
    </div>

  </main>

  <div v-else>
    Project not found
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
  margin-bottom: 9rem;
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

.download {
  width: fit-content;
  align-self: center;
}

.first {
  margin-left: 15vw;
}

.second {
  margin-left: 10vw;
}

.third {
  margin-left: 30vw;
}

.fourth {
  margin-left: 50vw;
}

@media screen and (max-width: 450px) {
  img {
    width: 80%;
  }

  .fourth {
    margin-left: 18vw;
  }

  .back {
    margin-bottom: 0;
  }
}


</style>