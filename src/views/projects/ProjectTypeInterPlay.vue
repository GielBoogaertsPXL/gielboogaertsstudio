<script setup>

</script>

<template>
  <main>
    <h1>TYPE-INTER- <br>
      PLAY</h1>
    <section>
      <p>Publication for navigating between content table, body and image & keyword index</p>
      <img class="first" src="@/assets/work/typeinterplay/TIP_spread01.webp" alt="">
      <img class="second" src="@/assets/work/typeinterplay/TIP_cover.webp" alt="">
      <p>Based on cursus <span>"Letterzetten, Chapter 17"</span></p>
      <img class="third" src="@/assets/work/typeinterplay/TIP_content.webp" alt="">
      <p>Poster, magazine / booklet & addendum</p>
      <img class="fourth" src="@/assets/work/typeinterplay/TIP_titlepage.webp" alt="">
      <img class="fifth" src="@/assets/work/typeinterplay/TIP_keywords.webp" alt="">
      <img class="second" src="@/assets/work/typeinterplay/TIP_spread03.webp" alt="">
      <img class="fourth" src="@/assets/work/typeinterplay/TIP_images.webp" alt="">
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
