<template>
  <div id="home">
    <div class="home-content">
      <h1>FitMatch</h1>
      <button>Find your match</button>
    </div>
    <div class="video-background">
      <video autoplay muted loop playsinline>
        <!-- Video for desktop -->
        <source
          src="https://robynainsley21.github.io/images/capstone/homeHeroDesktop(1).mp4"
          type="video/mp4"
          media="(min-width: 426px)"
        />

        <!-- Video for mobile -->
        <source
          src="https://robynainsley21.github.io/images/capstone/homeHeroMobile.mp4"
          type="video/mp4"
          media="(max-width: 425px)"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.video-background video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
}

@media (max-width: 425px) {
}
</style>
