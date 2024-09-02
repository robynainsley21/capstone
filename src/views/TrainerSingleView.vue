<template>
  <div id="single-view" v-if="singleTrainer">
    <h2 class="display-2 text-center m-4">
      {{ singleTrainer.trainerName }} {{ singleTrainer.trainerSurname }}
    </h2>
    <div class="details-view">
      <div class="m-auto p-3">
        <img :src="singleTrainer.profileIMG" alt="singleImage" />
      </div>
      <div class="details-box">
        <p><span>Specialty: </span> {{ singleTrainer.specialties }}</p>
        <p><span>Age: </span>{{ singleTrainer.age }}</p>
        <p><span>Contact: </span>{{ singleTrainer.emailAdd }}</p>
      </div>
    </div>
  </div>
  <SpinnerComp v-else />
</template>

<script>
import SpinnerComp from "@/components/Spinner.vue";

export default {
  name: "trainerSingleView",
  components: {
    SpinnerComp,
  },
  methods: {
    fetchTrainer() {
      this.$store.dispatch("fetchTrainer", this.$route.params.id);
    },
  },
  computed: {
    singleTrainer() {
      return this.$store.state.trainer;
    },
  },
  mounted() {
    this.fetchTrainer();
  },
};
</script>

<style scoped>
img[alt="singleImage"] {
  height: 20rem;
}

/* .card {
  width: 50rem;
  margin: auto;
  background: rgb(236, 236, 236);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
} */

.details-view{
    display: flex;
    justify-content: space-around;
}

.details-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: auto;
  font-family: "Moderustic", sans-serif;
}

span {
  font-weight: bold;
}
</style>
