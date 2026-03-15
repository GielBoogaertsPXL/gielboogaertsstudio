<script setup>

</script>

<template>
  <section>
    <h2>WELCOME</h2>
    <div>
      <p>I AM A GRAPHIC & DIGITAL DESIGN STUDENT PASSIONATE ABOUT TYPOGRAPHY, BOOK DESIGN &
      WEBSITES.
      </p>
    </div>

    <h2 class="right">TO MY PORTFOLIO</h2>
  </section>
</template>

<style scoped>
  section {
    width: 100%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }

  h2 {
    font: var(--headline);
    color: var(--primary-color);
  }

  .right {
    text-align: right;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  p {
    font: var(--header-3);
    width: 15rem;
    margin-right: 40vw;
  }

  @media screen and (max-width: 450px) {
    p {
      margin-right: 10vw;
      width: 10rem
    }
  }
</style>
