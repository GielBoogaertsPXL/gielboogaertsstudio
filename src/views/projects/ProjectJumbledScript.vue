<script setup>

</script>

<template>
  <main>
    <h1>JUMBLED SCRIPT</h1>
    <section>
      <p>Bachelor project on visualizing dyslexia</p>
      <img class="first" src="@/assets/work/jumbledscript/JS_spread1.webp" alt="">
      <img class="second" src="@/assets/work/jumbledscript/JS_cover.webp" alt="">
      <img class="third" src="@/assets/work/jumbledscript/JS_poster1.webp" alt="">
      <p>Book & posters</p>
      <img class="fourth" src="@/assets/work/jumbledscript/JS_explanation.webp" alt="">
      <img class="fifth" src="@/assets/work/jumbledscript/JS_spread3.webp" alt="">
      <img class="second" src="@/assets/work/jumbledscript/JS_poster2.webp" alt="">
      <img class="fourth" src="@/assets/work/jumbledscript/JS_index.webp" alt="">
      <img class="fifth" src="@/assets/work/jumbledscript/JS_poster3.webp" alt="">
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
