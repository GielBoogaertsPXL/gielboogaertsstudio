<script setup>

</script>

<template>
  <section>
    <h3>FRONT END DEVELOPER</h3>
    <h3>GRAPHIC DESIGNER</h3>
    <img src="@/assets/img/logo.svg" alt="gielboogaertsstudio logo"/>
    <h3 class="right">BOOK DESIGNER</h3>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
}

h3 {
  font: var(--header-1);
  color: var(--primary-color);
  align-self: start;
  position: relative;
  top: 4rem;
}

.right {
  align-self: end;
  top: -4rem;
}

img {
  width: 35%;
}

@media screen and (max-width: 450px) {
  .right {
    top: -1rem;
  }

  h3 {
    top: 1rem;
  }
}
</style>
