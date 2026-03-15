<script setup>

</script>

<template>
  <main>
    <h1>MICROTYPE</h1>
    <section>
      <p>Publication for navigating between poster and booklet</p>
      <img class="first" src="@/assets/work/microtype/MT_booklet&poster1.webp" alt="">
      <img class="second" src="@/assets/work/microtype/MT_cover.webp" alt="">
      <p>Based on artikel <span>"Heeft de koning schoenmaat 49?"</span> by Martin Majoor</p>
      <img class="third" src="@/assets/work/microtype/MT_spread1.webp" alt="">
      <img class="fourth" src="@/assets/work/microtype/MT_booklet&poster2.webp" alt="">
      <img class="fifth" src="@/assets/work/microtype/MT_poster.webp" alt="">
      <img class="second" src="@/assets/work/microtype/MT_spread2.webp" alt="">
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

span {
  font-style: italic;
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
