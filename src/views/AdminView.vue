<template>
  <h1 class="display-1 text-center my-3">Admin</h1>
  <div id="trainers">
    <h2 class="display-5 text-center my-3">Trainers</h2>
    <div class="text-center mb-2">
      <button class="addbtn">Add Trainer</button>
    </div>
    <table class="table-container">
      <thead>
        <tr>
          <th>Trainer Image</th>
          <th>Name</th>
          <th>Specialties</th>
          <th>Rate</th>
          <th>Remove / Edit</th>
        </tr>
      </thead>
      <tbody v-if="trainers?.length">
        <tr v-for="trainer in trainers" :key="trainer.trainerID">
          <td>
            <img :src="trainer.profileIMG" alt="trainer-img" loading="lazy" />
          </td>
          <td>{{ trainer.trainerName }} {{ trainer.trainerSurname }}</td>
          <td>{{ trainer.specialties }}</td>
          <td>{{ trainer.rate }}</td>
          <td>
            <button @click="openModal(trainer)">Edit</button>
            <button @click="deleteTrainer(trainer.trainerID)">Delete</button>
          </td>
        </tr>
      </tbody>
      <SpinnerComp v-else />
    </table>
  </div>

  <TrainerModal
    v-if="isModalVisible"
    :trainer="selectedTrainer"
    :isVisible="isModalVisible"
    @update-trainer="updateTrainer"
    @close="closeModal"
  />

  <div id="users">
    <h2 class="display-5 text-center my-3">Users</h2>
    <table class="table-container">
      <thead>
        <th>User ID</th>
        <th>User Name</th>
        <th>User Email</th>
        <th>User Password</th>
        <th>Role</th>
        <th>Delete</th>
      </thead>
      <tbody v-if="users?.length">
        <tr v-for="user in users" :key="user.userID">
          <td><span>User ID: </span>{{ user.userID }}</td>
          <td>
            <span>User Name: </span>{{ user.userName }} {{ user.userSurname }}
          </td>
          <td><span>User Email: </span>{{ user.emailAdd }}</td>
          <td class="password text-center">
            <p><span>User Password: </span>{{ user.userPass }}</p>
          </td>
          <td><span>User Role: </span>{{ user.userRole }}</td>
          <td><button @click="deleteUser(user.userID)">Delete</button></td>
        </tr>
      </tbody>
      <SpinnerComp v-else />
    </table>
  </div>
</template>

<script>
import SpinnerComp from "@/components/Spinner.vue";
import TrainerModal from "@/components/trainerModal.vue";

export default {
  name: "AdminView",
  components: {
    SpinnerComp,
    TrainerModal,
  },
  data() {
    return {
      isModalVisible: false,
      selectedTrainer: null,
    };
  },
  computed: {
    trainers() {
      return this.$store.state.trainers;
    },
    users() {
      return this.$store.state.users.results;
    },
  },
  methods: {
    getTrainers() {
      this.$store.dispatch("fetchTrainers");
    },
    openModal(trainer) {
      this.selectedTrainer = trainer;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.selectedTrainer = null;
    },
    updateTrainer(updatedTrainer) {
      this.$store.dispatch("updateTrainer", updatedTrainer).then(() => {
        this.getTrainers();
      });
    },
    deleteTrainer(id) {
      if (confirm("Are you sure you want to delete this trainer?")) {
        this.$store
          .dispatch("deleteTrainer", id)
          .then(() => this.getTrainers());
      }
    },
    getUsers() {
      this.$store.dispatch("fetchUsers");
    },
    deleteUser(id){
        this.$store.dispatch("deleteUser", id).then(() => this.getUsers());
    }
  },
  mounted() {
    this.getTrainers();
    this.getUsers();
  },
};
</script>

<style scoped>
img[alt="trainer-img"] {
  width: 7rem;
}

.addbtn {
  width: 9rem;
}

:is(#trainers, #users)::before {
  content: "";
  display: block;
  width: 70%;
  height: 1px;
  background-color: #b0b5b3;
  margin: 2rem auto;
}

.table-container {
  width: 90%;
  margin: 0 auto;
  font-family: "Moderustic", sans-serif;
  margin: auto;
}

.table-container tbody td {
  padding-left: 0.5rem;
}

.table-container tbody td:last-child {
  text-align: center;
}

th {
  padding: 0.5rem;
}

/* From Uiverse.io by cssbuttons-io */
button {
  --color: #f2613f;
  display: inline-block;
  background-color: #fffbfe;
  width: 5rem;
  line-height: 2rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid var(--color);
  transition: color 0.5s;
  z-index: 1;
  border-radius: 6px;
  color: var(--color);
  margin: auto 0.2rem;
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

/**desktop */
@media screen and (min-width: 923px) {
  .addbtn {
    margin: 1.5rem auto;
  }

  span {
    display: none;
  }

  .table-container thead th {
    --color: #d4d4d4;
    border-top: 1px solid var(--color);
    border-left: 1px solid var(--color);
    border-bottom: 1px solid var(--color);

    &:last-child {
      border-right: 1px solid var(--color);
    }
  }

  .table-container tbody td {
    --color: #d4d4d4;
    border-left: 1px solid var(--color);
    border-right: 1px solid var(--color);
    border-bottom: 1px solid var(--color);
    padding: .5rem;
  }
}

/**mobile */
@media screen and (max-width: 923px) {
  thead {
    display: none;
  }

  tbody td {
    /* display: block; */
    text-align: center;
    margin-bottom: 0.5rem;
   
  }

  span {
    font-weight: 700;
    display: block;
  }

  .password > p {
      width: 100%;
      word-wrap: break-word; 
      overflow-wrap: break-word;
    }

  tr {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #d4d4d4;
    width: 80%;
    margin: auto;
    border-radius: 10px;
    margin-bottom: 1rem;
    padding: 1rem;
    box-sizing: border-box;
  }
}
</style>
