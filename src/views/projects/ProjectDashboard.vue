<script setup>

</script>

<template>
  <main>
    <h1>DASHBOARD</h1>
    <section>
      <p>Curriculum Vitae dashboard</p>
      <img src="@/assets/work/dashboard/Dashboard_information.webp" alt="">
      <p>2025</p>
    </section>
  </main>
</template>

<style scoped>
h1 {
  font: var(--headline);
  color: var(--primary-color);
  padding-left: 1rem;
  margin-bottom: 11rem;
}

section {
  width: 100%;
  padding: 0 5vw;
  display: flex;
  flex-direction: column;
  gap: 5vw;
}

p {
  font: var(--header-3);
  padding: 0 1rem;
  text-align: center;
  color: var(--dark-color);
}

img {
  width: 45%;
  align-self: center;
}

@media screen and (max-width: 600px) {
  img {
    width: 60%;
  }
}

</style>
