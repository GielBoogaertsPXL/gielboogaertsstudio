<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <main>
    <h1>{{ t('project.not_found') }}</h1>
    <section>
      <p>{{ t('project.not_found_message') }}</p>
      <RouterLink class="no-underline" :to="{ name: 'home' }" >{{ t('project.not_found_button') }}</RouterLink>
    </section>
  </main>
</template>

<style scoped>
main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  flex: 1;
  padding: 1rem 0;
  margin-bottom: -10rem;
}

h1 {
  font: var(--headline);
  color: var(--primary-color);
  padding-left: 1rem;
  margin-top: 0.5rem;
  width: 80%;
}

p {
  font: var(--header-2);
  color: var(--dark-color);
  width: 65%;
}

a {
  margin-top: 1.5rem;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  border-radius: 2rem;
  padding: 0.5rem 1rem;
}

a:hover {
  background-color: var(--primary-color);
  color: white;
}
</style>