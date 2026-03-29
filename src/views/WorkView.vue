<script setup>

</script>

<template>
  <main>
    <h1>WORK</h1>
    <section>
      <div class="first">
        <RouterLink to="/microtype">
          <img src="@/assets/work/microtype/MT_booklet&poster1.webp" alt="">
          <div class="text"><span>MICROTYPE</span><span>2022</span></div>
        </RouterLink>
        <RouterLink to="/jumbledscript">
          <img src="@/assets/work/jumbledscript/JS_spread1.webp" alt="">
          <div class="text"><span>JUMBLED SCRIPT</span><span>2024</span></div>
        </RouterLink>
      </div>
      <div class="second">
        <RouterLink to="/eopa">
          <img id="eopa" src="@/assets/work/eopa/covers.webp" alt="">
          <div class="text"><span>ENCYCLOPEDIA OF PHONETIC ALPHABETS</span><span>2025</span></div>
        </RouterLink>
      </div>
      <div class="third">
        <RouterLink to="/typeinterplay">
          <img src="@/assets/work/typeinterplay/TIP_spread02.webp" alt="">
          <div class="text"><span>TYPE-INTER-PLAY</span><span>2024</span></div>
        </RouterLink>
        <RouterLink to="/virgajesse">
          <img src="@/assets/work/virgajesse/VG_hommages.webp" alt="">
          <div class="text"><span>VIRGA JESSE</span><span>2024</span></div>
        </RouterLink>
      </div>
      <div class="fourth">
        <RouterLink to="/enzomari">
          <img src="@/assets/work/enzomari/EM_poster2.webp" alt="">
          <div class="text"><span>ENZO MARI</span><span>2022</span></div>
        </RouterLink>
        <RouterLink to="/archetype">
          <img src="@/assets/work/archetype/ARCH_spread1.webp" alt="">
          <div class="text"><span>ARCHETYPE</span><span>2022</span></div>
        </RouterLink>
      </div>
      <div class="fifth">
        <RouterLink to="/dashboard">
          <img src="@/assets/work/dashboard/Dashboard_information.webp" alt="">
          <div class="text"><span>DASHBOARD</span><span>2025</span></div>
        </RouterLink>
      </div>
    </section>
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

span {
  font: var(--body-bold);
  text-align-last: left;
}

section {
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 15vw;
}

.text {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.first {
  display: flex;
  gap: 1rem;
  width: 75%;
}

.first a {
  width: calc(50% - 0.5rem);
}

.first img {
  width: 100%;
}

.second {
  width: 100%;
}

.second img {
  width: 100%;
}

.third {
  width: 100%;
  display: flex;
  gap: 1rem;
}

.third a:nth-child(1) {
  width: calc(66.666% - 0.5rem);
}

.third a:nth-child(2) {
  width: calc(33.333% - 0.5rem);
  height: fit-content;
}

.third img {
  width: 100%;
}

.fourth {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.fourth a {
  width: 33.333%;
}

.fourth img {
  width: 100%;
}

.fifth {
  width: 100%;
}

.fifth a {
  width: 33.333%;
  left: 25vw;
}

.fifth img {
  width: 100%;
}

@media screen and (max-width: 550px) {
  .first {
    flex-direction: column;
    width: 100%;
    gap: 15vw;
  }

  .first a {
    width: 100%;
  }

  #eopa {
    content:url("@/assets/work/eopa/covers_vertical.webp");
  }

  .third {
    flex-direction: column;
    gap: 15vw;
  }

  .third a:nth-child(1) {
    width: 100%;
  }

  .third a:nth-child(2) {
    width: 100%;
  }

  .fourth {
    flex-direction: column;
    gap: 15vw;
  }

  .fourth a {
    width: 100%;
  }

  .fifth a {
    width: 100%;
    left: 0;
  }
}

</style>
