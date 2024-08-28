<template>
  <div class="card-slider">
    <Swiper
      :slides-per-view="3"
      space-between="30"
      :loop="true"
      pagination
      navigation
    >
      <SwiperSlide v-for="(card, index) in cards" :key="index">
        <div class="card">
          <img :src="card.image" alt="Card image" />
          <h3>{{ card.title }}</h3>
          <p>{{ card.description }}</p>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

export default {
  name: "SliderComp",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      cards: [
        {
          image: "path/to/image1.jpg",
          title: "Card 1",
          description: "Description for card 1",
        },
        {
          image: "path/to/image2.jpg",
          title: "Card 2",
          description: "Description for card 2",
        },
        {
          image: "path/to/image3.jpg",
          title: "Card 3",
          description: "Description for card 3",
        },
        {
          image: "path/to/image4.jpg",
          title: "Card 4",
          description: "Description for card 4",
        },
        // Add more cards as needed
      ],
    };
  },
};
</script>

<style>
.card-slider {
  width: 100%;
  margin: auto;
}

.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
}

.card img {
  max-width: 100%;
  border-radius: 8px;
}

.card h3 {
  margin-top: 10px;
  font-size: 1.5rem;
}

.card p {
  margin-top: 10px;
  color: #666;
}
</style>
