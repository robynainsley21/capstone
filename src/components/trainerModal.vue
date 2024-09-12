<template>
  <div v-if="isVisible" class="modal-backdrop">
    <div class="modal-container" data-aos="fade-up">
      <h2>Edit Trainer</h2>
      <form class="modal-form" @submit.prevent="submitForm">
        <label for="name">Name:</label>
        <input v-model="trainerData.trainerName" id="name" type="text" />

        <label for="surname">Surname:</label>
        <input v-model="trainerData.trainerSurname" id="surname" type="text" />

        <label for="specialties">Specialties:</label>
        <input v-model="trainerData.specialties" id="specialties" type="text" />

        <label for="rate">Rate:</label>
        <input v-model="trainerData.rate" id="rate" type="number" />

        <div class="button-box m-auto">
          <button type="submit">Save Changes</button>
          <button type="button" @click="closeModal">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "TrainerModal",
  props: {
    trainer: Object,
    isVisible: Boolean,
  },

  data() {
    return {
      trainerData: { ...this.trainer },
    };
  },
  methods: {
    initializeAOS() {
      AOS.init({
        duration: 700, 
      });
    },
    closeModal() {
      this.$emit("close");
    },
    submitForm() {
      this.$emit("update-trainer", this.trainerData);
      this.closeModal();
    },
  },
  watch: {
    isVisible(newValue) {
      if (newValue) {
        this.initializeAOS();
      }
    },
  },
  mounted() {
    this.initializeAOS();
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  margin-bottom: 0.5rem;
  border: #d4d4d4 1px solid;
  border-radius: 5px;
  padding: 0.3rem;
}

/* From Uiverse.io by cssbuttons-io */
button {
  --color: #f2613f;
  display: inline-block;
  background-color: #fffbfe;
  width: 9rem;
  line-height: 2rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid var(--color);
  transition: color 0.5s;
  z-index: 1;
  border-radius: 6px;
  color: var(--color);
  margin: .2rem auto;
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
  background: #fffbfe;
  transition: background 0s;
}

.modal-container {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
  max-width: 100%;
  font-family: "Moderustic", sans-serif;
}

.modal-form {
  display: flex;
  flex-direction: column;
}

button {
  margin-right: 1rem;
}
</style>
