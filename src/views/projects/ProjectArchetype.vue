<script setup>

</script>

<template>
  <main>
    <h1>ARCHETYPE</h1>
    <RouterLink class="back" to="/work">
      <span>← Back to work</span>
    </RouterLink>
    <section>
      <p>Booklet for cataloging textual information</p>
      <img class="first" src="@/assets/work/archetype/ARCH_spread2.webp" alt="">
      <img class="second" src="@/assets/work/archetype/ARCH_cover.webp" alt="">
      <img class="third" src="@/assets/work/archetype/ARCH_spread1.webp" alt="">
      <p>2022</p>
    </section>
    <div class="rotation">
      <RouterLink to="/enzomari">← Previous work</RouterLink>
      <RouterLink to="/dashboard">Next work →</RouterLink>
    </div>
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
  padding: 3rem 1rem;
  margin-top: 5rem;
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

.first {
  margin-left: 5vw;
}

.second {
  margin-left: 10vw;
}

.third {
  margin-left: 15vw;
}

@media screen and (max-width: 450px) {
  img {
    width: 80%;
  }
}


</style>
