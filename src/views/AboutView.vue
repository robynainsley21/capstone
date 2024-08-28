<template>
  <div class="about">
    <div id="about-hero">
      <div class="about-hero-text">
        <p>
          At FitMatch, we understand that reaching your fitness goals can be
          challenging, especially when you’re not sure where to start. Our
          platform is designed to simplify the process by connecting you with
          experienced personal trainers who can provide personalized guidance
          and support, whether you prefer online sessions or in-person training.
        </p>
      </div>
    </div>
    <div class="about-section1">
      <div class="section1-item">
        <img
          src="https://robynainsley21.github.io/images/capstone/sule-makaroglu-PnUYkTFkOD0-unsplash.jpg"
          loading="lazy"
          alt="section1-img"
        />
      </div>
      <div class="section1-item">
        <p>
          Our intelligent matching algorithm pairs you with trainers who align
          with your specific fitness goals and preferences. Choose from a
          variety of training options, including online workouts, in-person
          sessions, and programs that require minimal or no equipment. Our goal
          is to make fitness accessible and convenient, no matter how busy your
          schedule.
        </p>
      </div>
    </div>
    <div class="about-section2">
      <h2 class="display-2 text-center pt-5">Meet Some of Our Trainers</h2>
<Slider />
    </div>
    <div class="about-section3">
      <div>
        <img src="" alt="section3-img" loading="lazy" />
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
        consectetur deleniti at magni dolorem nobis est tempore minus iste
        voluptate eaque adipisci ullam corporis eligendi ut aliquam, odit,
        dolorum amet qui! Sint odio voluptatem, commodi modi eos iste enim
        animi?
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue';

export default{
  components: {
    Slider
  }
}
</script>

<style scoped>
#about-hero {
  background: url("https://robynainsley21.github.io/images/capstone/jonathan-borba-lrQPTQs7nQQ-unsplash.jpg");
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
}
.about-hero-text {
  padding-top: 20%;
  height: 100%;
}

.about-hero-text > p {
  width: 70%;
  margin: auto;
  text-align: center;
  backdrop-filter: blur(10px);
  padding: 3rem;
}

.about-section1 {
  display: flex;
  align-items: center;
  height: 100vh;
}

.section1-item {
  width: 50%;
  display: flex;
  justify-content: center;
}

img[alt="section1-img"] {
  width: 80%;
}

.about-section2 {
  height: 100vh;
  background-color: #f2613f;
}
.about-section3 {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

img[alt="section3-img"]{
  border-radius: 100%;
  
}
</style>
