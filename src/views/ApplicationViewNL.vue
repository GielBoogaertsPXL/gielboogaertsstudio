<script setup>
</script>

<template>
  <main>
    <header>
      <h1>AANVRAAG</h1>
      <h4>Stage</h4>
    </header>
    <section>
      <p>Hey, ik ben Giel Boogaerts — <span>Grafisch Vormgever</span> & <span>student Digitale Vormgeving</span>, met een focus op
        front-end development aan PXL in België</p>
      <img src="/photo.webp" alt="">
      <p>Ik ben op zoek naar een <span>stageplek</span> dit schooljaar voor de periode van <span>nov - jan</span>
      </p>
      <p class="explanation-title">Een paar dingen over mezelf</p>
      <p class="explanation">
        Met mijn <span>masterdiploma Grafische Vormgeving</span>, gespecialiseerd in <span>Typografie</span>,
        heb ik een sterk oog ontwikkeld voor visuele communicatie, typografie en detail.
        Nu combineer ik die ontwerpachtergrond met webdevelopment om een meer complete ontwerper te worden.
      </p>

      <p class="explanation">
        Mijn ervaring bij <span>Undercast Studio</span> als stagiair en naast mijn studies heeft me geleerd
        om zelfstandig te werken, verantwoordelijkheid te nemen en samen te werken met klanten
        en teams.
      </p>

      <div class="box">
        <div class="works">
          <p>Neem gerust een kijkje in mijn portfolio</p>
          <img src="/images/phoneticalphabet/PAA_hero.webp" alt="">
          <img src="/images/hybridpublishing/HP_hero.webp" alt="">
          <img src="/images/typeinterplay/TIP_hero.webp" alt="">
        </div>
        <div class="links">
          <a class="link no-underline" href="https://gielboogaerts.com">Website</a>
          <a class="link no-underline" href="https://github.com/GielBoogaertsPXL">Github</a>
          <a class="link no-underline" href="https://www.linkedin.com/in/giel-boogaerts-581b96224/">LinkedIn</a>
          <a class="link no-underline" href="https://www.instagram.com/gielboogaerts.studio/">Instagram</a>
          <a class="link no-underline" href="https://gielboogaerts.com/GielBoogaerts_CV.pdf" target="_blank">Curriculum Vitae</a>
        </div>
      </div>

      <p>Ik geloof dat dit bedrijf mij een inspirerende stage zou bieden waarin ik mijn vaardigheden verder kan ontwikkelen. Tegelijkertijd wil ik graag bijdragen met mijn creativiteit, designachtergrond, enthousiasme en bereidheid om bij te leren.</p>
      <p>Hartelijk bedankt voor uw tijd en aandacht. <br> Ik kijk ernaar uit om van u te horen.</p>
      <p>Met vriendelijke groeten</p>

      <p class="questions">Als u nog vragen heeft, aanvullende informatie over mijn projecten wenst of een online gesprek zou willen inplannen, hoor ik dat graag. Indien er behoefte is aan meer praktische informatie, kan ik u in contact brengen met de stagecoördinator van PXL voor meer informatie over de stagevereisten en praktische organisatie.</p>

      <p class="questions">P.S. Indien mogelijk, zou ik het fijn vinden om een korte bevestiging te ontvangen dat mijn e-mail goed is aangekomen. Alvast bedankt.</p>
    </section>
  </main>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10.5rem;

}

h1 {
  font: var(--headline);
  color: var(--primary-color);
  padding-left: 1rem;
  margin-top: 0.5rem;
}

h4 {
  color: var(--primary-color);
  padding-right: 1rem;
  margin-top: 0.5rem;
  font-weight: normal;
  font-size: 1.5rem;
}

section {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 3rem 0;
}

img {
  width: 20%;
}

p {
  font: var(--header-2);
  font-weight: normal;
  color: var(--dark-color);
}


p:nth-child(1), p:nth-child(4), p:nth-child(10) {
  font: var(--header-2);
  color: var(--dark-color);
}

p {
  width: 65%;
}

span {
  font-style: italic;
  font-weight: bold;
}

.explanation-title {
  margin-top: 5rem;
}

.explanation {
  margin-top: -2rem;
  font-size: 2rem;
  line-height: 2.3rem;
}

.link {
  align-self: center;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  border-radius: 2rem;
  padding: 0.5rem 1rem;
}

.link:hover {
  background-color: var(--primary-color);
  color: white;
}

.links {
  display: flex;
  gap: 1rem;
  padding: 1rem;
}

.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin: 5rem 0;
}

.questions {
  font-size: 1.5rem;
  line-height: 1.6rem;
  font-style: italic;
  margin-top: 3rem;
}

.works {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 0 3rem;
}

.works img {
  width: calc(33% - 2rem/3);
}

.works p {
  width: 100%;
  margin-bottom: 1rem;
}
</style>