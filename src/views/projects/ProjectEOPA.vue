<script setup>

</script>

<template>
  <main>
    <h1>ENCYCLOPEDIA OF <br>
    PHONETIC <br>
      ALPHABETS</h1>
    <RouterLink class="back" to="/work">
      <span>← Back to work</span>
    </RouterLink>
    <section>
      <p>Master project on documenting phonetic alphabets</p>
      <img class="first" src="@/assets/work/eopa/EOPA_cover.webp" alt="">
      <img class="second" src="@/assets/work/eopa/EOPA_content.webp" alt="">
      <img class="third" src="@/assets/work/eopa/EOPA_spread1.webp" alt="">
      <img class="fourth" src="@/assets/work/eopa/EOPA_spread2.webp" alt="">
      <img class="fifth" src="@/assets/work/eopa/EOPA_spread3.webp" alt="">
      <p>Triple book series</p>
      <img class="second" src="@/assets/work/eopa/COC_cover.webp" alt="">
      <img class="first" src="@/assets/work/eopa/COC_content.webp" alt="">
      <img class="fourth" src="@/assets/work/eopa/COC_spread.webp" alt="">
      <p>Encyclopedia and catalogues</p>
      <img class="third" src="@/assets/work/eopa/COV_cover.webp" alt="">
      <img class="fifth" src="@/assets/work/eopa/COV_content.webp" alt="">
      <img class="fourth" src="@/assets/work/eopa/COV_spread.webp" alt="">
      <p>2025</p>
      <a href="/EOPA_thesis_GielBoogaerts.pdf" download>Download thesis</a>
    </section>
    <div class="rotation">
      <RouterLink to="/jumbledscript">← Previous work</RouterLink>
      <RouterLink to="/typeinterplay">Next work →</RouterLink>
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

p, a {
  font: var(--header-3);
  padding: 0 1rem;
  text-align: center;
  color: var(--dark-color);
}

a {
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
    width: 80%;
  }

  .second {
    margin-left: 10vw;
  }

  .fourth {
    margin-left: 10vw;
  }
}


</style>
