<script setup>

</script>

<template>
  <main>
<h1>VIRGA JESSE</h1>
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
