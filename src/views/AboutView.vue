<template>
  <div class="about">
    <div id="about-hero">
      <div class="about-hero-text">
        <p>
          At FitMatch, we understand that reaching your fitness goals can be
          challenging. Our platform is designed to simplify the process by
          connecting you with experienced personal trainers who can provide
          personalized guidance and support, whether you prefer online sessions
          or in-person training.
        </p>
      </div>
    </div>
    <div class="about-section1">
      <div class="section1-item">
        <img
          src="https://robynainsley21.github.io/images/capstone/sule-makaroglu-PnUYkTFkOD0-unsplash.jpg"
          alt="section1-img"
          loading="lazy"
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
      <SliderComp />
    </div>
    <div class="about-section3">
      <div>
        <img
          src="https://robynainsley21.github.io/images/capstone/founders-img.jpg"
          alt="section3-img"
          loading="lazy"
        />
      </div>
      <div>
        <p class="founders-text">
          FitMatch was born out of a shared passion for fitness and a deep
          understanding of the challenges that many people face on their journey
          to better health. As founders who have personally struggled with
          reaching our own fitness goals, we recognized the need for a solution
          that makes fitness more accessible, personalized, and convenient for
          everyone—regardless of their level of experience or how busy their
          lives may be.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import SliderComp from "@/components/Slider.vue";

export default {
  components: {
    SliderComp,
  },
};
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
  padding-top: 10%;
  height: 100%;
}

.about-hero-text > p {
  width: 70%;
  margin: auto;
  text-align: center;
  backdrop-filter: blur(15px);
  padding: 3rem;
  color: #0c0c0c;
}

.about-section1 {
  display: flex;
  align-items: center;
  width: 100vw;
  padding: 3rem;
}

.section1-item {
  width: 50%;
  display: flex;
  justify-content: center;

  & p {
    width: 90%;
  }
}

img[alt="section1-img"] {
  width: 50%;
}

.about-section2 {
  background-color: #f2613f;
}

.about-section3 {
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
}

img[alt="section3-img"] {
  width: 17rem;
  border-radius: 100%;
}

.founders-text {
  width: 65%;
  text-align: center;
  margin: auto;
}

/**mobile */
@media screen and (max-width: 768px) {
  .about-hero-text > p {
    width: 90%;
    padding: 10%;
  }

  .about-section1 {
    display: flex;
    flex-direction: column;
    padding: 4%;

    & img {
      width: 15rem;
    }

    & p {
      width: 80%;
      text-align: center;
      margin-top: 2rem;
    }
  }

  .section1-item {
    width: 100%;
  }

  .about-section3 {
    height: auto;
  }

  .founders-text {
    width: 80%;
    margin: 2rem auto;
  }

  img[alt="section3-img"] {
    width: 15rem;
    margin-top: 2rem;
  }

  img[alt="section1-img"] {
    margin-top: 2rem;
  }
}
</style>
