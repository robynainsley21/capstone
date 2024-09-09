<template>
  <div>
    <h1 class="display-1 text-center m-5">Our Trainers</h1>
    <div class="bg">
      <h1>FitMatch</h1>
    </div>
    <div
      id="trainer-container"
      class="row gap-4 justify-content-center"
      v-if="trainers?.length"
    >
      <CardComp
        class="col-md-4"
        v-for="trainer in trainers"
        :key="trainer.trainerID"
      >
        <template #header>
          <img
            v-if="trainer.profileIMG"
            :src="trainer.profileIMG"
            alt="profileIMG"
            loading="lazy"
          />
          <ImageSpinner v-else />
        </template>
        <template #body>
          <p class="card-title">
            <span>{{ trainer.trainerName }} {{ trainer.trainerSurname }}</span>
          </p>
          <p>Specialty: {{ trainer.specialties }}</p>
        </template>
        <template #footer>
          <router-link
            :to="{
              name: 'trainersSingleView',
              params: { id: trainer.trainerID },
            }"
            ><button class="button">Details</button></router-link
          >

          <button @click="addToCart(trainer)" class="button">Book</button>
        </template>
      </CardComp>
    </div>
    <SpinnerComp v-else />
  </div>
</template>

<script setup>
import CardComp from "@/components/Card.vue";
import SpinnerComp from "@/components/Spinner.vue";
import ImageSpinner from "@/components/ImageSpinner.vue";

import { useStore } from "vuex";
import { computed, onMounted } from "vue";

const store = useStore();
const trainers = computed(() => store.state.trainers);

onMounted(() => {
  store.dispatch("fetchTrainers");
  console.log(trainers.value);
});

const addToCart = (trainer) => {
  store.dispatch("addToCart", trainer);
  console.log(trainer);
};
</script>

<style scoped>
.row {
  width: 100%;
  margin: 0;
  padding: 0;
}
.bg {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.bg h1 {
  font-size: 19rem;
  filter: opacity(0.5);
}

.trainer-container {
  color: #9b3922;
}

img[alt="profileIMG"] {
  width: 12rem;
  margin: auto;
}

.card-title {
  font-size: 2rem;
}

.card-body {
  display: flex;
  flex-direction: column;
}

/* From Uiverse.io by cssbuttons-io */
button {
  --color: #f2613f;
  display: inline-block;
  width: 5rem;
  line-height: 2rem;
  /* background: ; */
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid var(--color);
  transition: color 0.5s;
  z-index: 1;
  font-size: 17px;
  border-radius: 6px;
  /* font-weight: bold; */
  color: var(--color);
}

button:before {
  content: "";
  position: absolute;
  z-index: -1;
  background: #f2613f;
  height: 150px;
  width: 200px;
  border-radius: 50%;
}

button:hover {
  color: #fff;
}

button:before {
  top: 100%;
  left: 100%;
  transition: all 0.5s;
}

button:hover:before {
  top: -30px;
  left: -30px;
}

button:active:before {
  background: var(--color);
  transition: background 0s;
}

/**second choice */
/* .button {
  background: linear-gradient(140.14deg, #ec540e 15.05%, #d6361f 114.99%)
      padding-box,
    linear-gradient(142.51deg, #ff9465 8.65%, #af1905 88.82%) border-box;
  border-radius: 7px;
  border: 2px solid transparent;

  text-shadow: 1px 1px 1px #00000040;
  box-shadow: 8px 8px 20px 0px #45090059;

  padding: 10px 40px;
  line-height: 20px;
  cursor: pointer;
  transition: all 0.3s;
  color: white;
  font-size: 18px;
  font-weight: 500;
}

.button:hover {
  box-shadow: none;
  opacity: 80%;
} */

/**original */
/* .button{
  background-color: #9b3922;
  color: white;
  border-radius: 10%;
  padding: 0.5rem;
  border: none;
  width: 5rem;
  cursor: pointer;
  border: 1px solid #fffbfe;

  &:hover{
    border: 1px solid #9b3922;
    background-color: #fffbfe;
    color: #9b3922;
    font-weight: bold;
  }
} */

@media screen and (max-width: 768px) {
  img[alt="profileIMG"] {
    width: 11rem;
    margin: auto;
  }
}
</style>
