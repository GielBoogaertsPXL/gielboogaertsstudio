<script setup>

</script>

<template>
  <section>
    <div class="left">
      <h2>EOPA</h2>
      <h2>TYPE-INTER-PLAY</h2>
    </div>
    <div class="right">
      <h2>MICROTYPE</h2>
      <h2>JUMBLED SCRIPT</h2>
      <h2>VIRGA JESSE</h2>
      <h2>ENZO MARI</h2>
      <h2>DASHBOARD</h2>
      <h2>ARCHETYPE</h2>
    </div>
  </section>
</template>

<style scoped>
section {
  height: fit-content;
  padding: 0.5rem 1rem;
}

h2 {
  font: var(--headline);
  color: var(--primary-color);
}

.right {
  text-align: right;
  padding-top: 20rem;
}

@media screen and (max-width: 450px) {
  .left {
    width: 20rem;
  }
}

@media screen and (max-width: 450px) {
  .left {
    width: 20rem;
  }
}
</style>
