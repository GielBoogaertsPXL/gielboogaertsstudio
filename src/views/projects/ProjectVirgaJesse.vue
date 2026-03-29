<script setup>

</script>

<template>
  <main>
<h1>VIRGA JESSE</h1>
    <RouterLink class="back" to="/work">
      <span>← Back to work</span>
    </RouterLink>
    <section>
      <p>Publication for the 7-yearly Virgin Jessa Festivities in Hasselt</p>
      <img class="first" src="@/assets/work/virgajesse/VG_hommages_spread1.webp" alt="">
      <img class="second" src="@/assets/work/virgajesse/VG_hommages.webp" alt="">
      <p>Group project</p>
      <img class="third" src="@/assets/work/virgajesse/VG_poster.webp" alt="">
      <p>Poster, magazine / booklet & addendum</p>
      <img class="fourth" src="@/assets/work/virgajesse/VG_publicatie.webp" alt="">
      <img class="fifth" src="@/assets/work/virgajesse/VG_hommages_spread2.webp" alt="">
      <p>2024</p>
    </section>
    <div class="rotation">
      <RouterLink to="/typeinterplay">← Previous work</RouterLink>
      <RouterLink to="/enzomari">Next work →</RouterLink>
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
