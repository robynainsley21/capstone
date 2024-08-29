<template>
  <div class="container swiper">
    <div class="slider-wrapper">
      <div class="card-list swiper-wrapper">
        <div
          class="card-item swiper-slide"
          v-for="(user, index) in users"
          :key="index"
        >
          <img :src="user.image" alt="User Image" class="user-image" />
          <h2 class="user-name">{{ user.name }}</h2>
          <p class="user-profession">{{ user.profession }}</p>
          <button class="message-button">Message</button>
        </div>
      </div>

      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export default {
  name: "SliderComp",
  data() {
    return {
      users: [
        {
          image: "images/img-1.jpg",
          name: "James Wilson",
          profession: "Software Developer",
        },
        {
          image: "images/img-2.jpg",
          name: "Sarah Johnson",
          profession: "Graphic Designer",
        },
        {
          image: "images/img-3.jpg",
          name: "Michael Brown",
          profession: "Project Manager",
        },
        {
          image: "images/img-4.jpg",
          name: "Emily Davis",
          profession: "Marketing Specialist",
        },
        {
          image: "images/img-5.jpg",
          name: "Christopher Garcia",
          profession: "Data Scientist",
        },
        {
          image: "images/img-6.jpg",
          name: "Richard Wilson",
          profession: "Product Designer",
        },
      ],
    };
  },
  mounted() {
    new Swiper(".slider-wrapper", {
      loop: true,
      grabCursor: true,
      spaceBetween: 30,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

.slider-wrapper {
  overflow: hidden;
  max-width: 1200px;
  margin: 70px 55px;
}

.card-list .card-item {
  height: 25rem;
  width: 10rem;
  color: #fffbfe;
  user-select: none;
  padding: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  backdrop-filter: blur(30px);
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.card-list .card-item .user-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 40px;
  border: 3px solid #fffbfe;
  padding: 4px;
}

.card-list .card-item .user-profession {
  font-size: 1.15rem;
  color: #fffbfe;
  font-weight: 500;
  margin: 14px 0 40px;
}

.card-list .card-item .message-button {
  font-size: 1.25rem;
  padding: 10px 35px;
  color: #030728;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  background: #fffbfe;
  border: 1px solid transparent;
  transition: 0.2s ease;
}

.card-list .card-item .message-button:hover {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #fffbfe;
  color: #fffbfe;
}

.slider-wrapper .swiper-pagination-bullet {
  background: #481e14;
  color: #481e14;
  height: 13px;
  width: 13px;
  opacity: 0.5;
}

.swiper-pagination{
    margin-bottom: 2rem;
  }

.slider-wrapper .swiper-pagination-bullet-active {
  opacity: 1;
  background: #481e14;
  color: #481e14;
}

.slider-wrapper .swiper-slide-button {
  color: #fffbfe;
  margin-top: -55px;
  transition: 0.2s ease;
}

.slider-wrapper .swiper-slide-button:hover {
  color: #481e14;
}

@media (max-width: 768px) {
  .slider-wrapper {
    margin: 0 10px 40px;
  }

  .slider-wrapper .swiper-slide-button {
    display: none;
  }

  .card-list{
    margin: 3rem auto;
  }

  .swiper-pagination{
    margin-bottom: 1rem;
  }
}
</style>
