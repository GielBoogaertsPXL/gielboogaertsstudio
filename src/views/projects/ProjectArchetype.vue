<script setup>

</script>

<template>
  <main>
    <h1>ARCHETYPE</h1>
    <section>
      <p>Booklet for cataloging textual information</p>
      <img class="first" src="@/assets/work/archetype/ARCH_spread2.webp" alt="">
      <img class="second" src="@/assets/work/archetype/ARCH_cover.webp" alt="">
      <img class="third" src="@/assets/work/archetype/ARCH_spread1.webp" alt="">
      <p>2022</p>
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
}

.first {
  margin-left: 5vw;
}

.second {
  margin-left: 30vw;
}

.third {
  margin-left: 15vw;
}

.fourth {
  margin-left: 50vw;
}

@media screen and (max-width: 450px) {
  img {
    width: 60%;
  }

  .fourth {
    margin-left: 30vw;
  }
}


</style>
