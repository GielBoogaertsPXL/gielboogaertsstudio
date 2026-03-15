<script setup>

</script>

<template>
  <main>
    <h1>ABOUT</h1>
    <section>
      <p>I AM GIEL BOOGAERTS,
        A 23-YEAR OLD GRAPHIC DESIGNER CURRENTLY STUDYING DIGITAL DESIGN.</p>
      <p>MY AIM IS TO STAND OUT THROUGH ORIGINALITY & CONCEPT AND I BELIEVE AESTHETICS SHOULD BE FUNCTIONALITY-DRIVEN, GIVING EACH PROJECT A DEEPER SENSE OF MEANING.</p>
      <p>I GRADUATED WITH HONORS IN THE <span>INTERNATIONAL MASTER OF READING TYPE & TYPOGRAPHY</span> AT PXL-MAD HASSELT UNDER GUIDANCE OF PROF. DR. ANN BESSEMANS AND AM CURRENTLY FOLLOWING <span>DIGITAL DESIGN</span> AT PXL DIGITAL HASSELT AND <span>BOOK & TYPE</span> AT THE PLANTIN-MORETUS MUSEUM ANTWERP.</p>
      <p>KEY WORDS: <br>
        <span>
        DUTCH DESIGN, MODERN,
        CONCEPT-DRIVEN, SYSTEM, SWISS STYLE, TOTAL DESIGN
        </span>
      </p>
      <p class="quote">
        “CONTENT PRECEDES DESIGN. DESIGN IN THE ABSENCE OF CONTENT IS NOT DESIGN, IT’S DECORATION.”
        <span class="quotePerson">
        Jefrrey Zeldman
      </span>
      </p>

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
  display: flex;
  flex-direction: column;
  gap: 20vw;
  align-items: center;
  text-align: center;
  width: 60%;
  margin: 0 auto;
}

p {
  font: var(--header-2);
  color: var(--dark-color);
}

span {
  font-style: italic;
}

.quote {
  color: var(--primary-color);
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.quotePerson {
  color: var(--primary-color);
  font: var(--header-3);
  font-weight: 400;
}

</style>
