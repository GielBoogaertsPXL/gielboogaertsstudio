<script setup>
</script>

<template>
  <main>
    <header>
      <h1>APPLICATION</h1>
      <h4>International internship</h4>
    </header>
    <section>
      <p>Hi, I'm Giel Boogaerts — <span>Graphic Designer</span> & <span>student Digital Design</span>, with focus on
        front-end development at PXL in Belgium</p>
      <img src="/photo.webp" alt="">
      <p>I am looking for an <span>international internship</span> in <span>2027</span> for the period of <span>Feb - June</span>
      </p>
      <p class="explanation-title">A few things about myself</p>
      <p class="explanation">
        With my Master's degree in <span>Graphic Design</span>, specializing in <span>Typography</span>,
        I developed a strong eye for visual communication, typography and detail.
        I'm now combining that foundation with web development to bridge the gap
        between design and implementation.
      </p>

      <p class="explanation">
        My experience at <span>Undercast Studio</span> as an intern and alongside my studies has taught me
        to work independently, take responsibility and collaborate with clients
        and teams.
      </p>

      <div class="box">
        <div class="works">
          <p>Please feel free check out my portfolio</p>
          <img src="/images/phoneticalphabet/PAA_hero.webp" alt="">
          <img src="/images/hybridpublishing/HP_hero.webp" alt="">
          <img src="/images/typeinterplay/TIP_hero.webp" alt="">
        </div>
        <div class="links">
          <a class="link no-underline" href="https://gielboogaerts.com">Website</a>
          <a class="link no-underline" href="https://github.com/GielBoogaertsPXL">Github</a>
          <a class="link no-underline" href="https://www.linkedin.com/in/giel-boogaerts-581b96224/">LinkedIn</a>
          <a class="link no-underline" href="https://www.instagram.com/gielboogaerts.studio/">Instagram</a>
          <a class="link no-underline" href="https://gielboogaerts.com/GielBoogaerts_CV_English.pdf" target="_blank">Curriculum Vitae</a>
        </div>
      </div>

      <p>I believe this company would give me an inspiring internship in which I can further develop my skills. At the same time, I am eager to contribute with my creativity, design background, enthusiasm, and willingness to learn.</p>
      <p>Thank you very much for your time and consideration. <br> I look forward to hearing from you.</p>
      <p>Kind regards</p>

      <p class="questions">If you have any questions, would like additional information about my projects, or would like to arrange an online interview, I would be delighted to hear from you. If there is any need for more practical information, I can put you in contact with the internship coordinator at PXL regarding the internship requirements and organization.</p>

      <p class="questions">P.S. If possible, I would appreciate a brief confirmation that my email has been received. Thank you in advance.</p>
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