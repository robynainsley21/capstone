import { createStore } from "vuex";
import axios from "axios";
import router from "@/router";
import { toast } from "vue3-toastify";
import 'vue3-toastify/dist/index.css';

const apiURL = "https://capstone-yv7i.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    trainers: null,
    trainer: null,
    cartItems: [],
  },
  getters: {},
  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setTrainers(state, value) {
      state.trainers = value;
    },
    setTrainer(state, value) {
      state.trainer = value;
    },
    setCart(state, value) {
      state.cartItems.push(value);
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        let { users, message } = await axios.get(`${apiURL}users`).data;

        if (users) commit("setUsers", users);
        else {
          toast.error(`${message}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        toast.error(`${error.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async fetchUser({ commit }, id) {
      try {
        let { user, message } = await axios.get(`${apiURL}users/${id}`).data;

        if (user) commit("setUser", user);
        else {
          toast.error(`${message}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        toast.error(`${error.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async fetchTrainers({ commit }) {
      try {
        let { trainers, message } = await axios.get(`${apiURL}trainers`).data;

        if (trainers) commit("setTrainers", trainers);
        else {
          toast.error(`${message}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        toast.error(`${error.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async fetchTrainer({ commit }, id) {
      try {
        let { trainer, message } = await axios.get(`${apiURL}trainers/${id}`)
          .data;

        if (trainer) commit("setTrainer", trainer);
        else {
          toast.error(`${message}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        toast.error(`${error.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async fetchCart({ commit }) {
      try {
        let { cart, message } = await axios.get(`${apiURL}cart`);

        if (cart) commit("setCart", cart);
        else {
          toast.error(`${message}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        toast.error(`${error.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async updateUser(context, payload) {
      try {
        const { message, error } = await (
          await axios.patch(`${apiURL}users/update/${payload.userID}`, payload)
        ).data;

        if (message) context.dispatch("fetchUsers");
        else {
          toast.error(`${error}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        toast.error(`${error.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async registerUser(context, payload) {
      try {
        const { message, error, token } = await await axios.post(
          `${apiURL}users/register`,
          payload
        ).data;

        if (token) {
          context.dispatch("fetchUsers");
          toast.success(`${message}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
          router.push({ name: "login" });
        } else {
          toast.error(`${error}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        toast.error(`${error.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async deleteUser(context, id) {
      try {
        const { message, error } = await (
          await axios.delete(`${apiURL}users/delete/${id}`)
        ).data;

        if (message) context.dispatch("fetchUsers");
        else {
          toast.error(`${error}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        toast.error(`${error.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async addTrainer(context, payload) {
      try {
        const { message } = await (
          await axios.post(`${apiURL}trainers/addTrainer`, payload)
        ).data;

        if (message) {
          context.dispatch("fetchTrainers");
          toast.success(`${message}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        toast.error(`${error.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async updateTrainer(context, payload) {
      try {
        const { message } = await (
          await axios.patch(
            `${apiURL}trainers/update/${payload.trainerID}`,
            payload
          )
        ).data;

        if (message) {
          context.dispatch("fetchTrainers");
          toast.success(`${message}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        toast.error(`${error.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async deleteTrainer(context, id) {
      try {
        const { message } = await (
          await axios.delete(`${apiURL}trainers/delete/${id}`)
        ).data;

        if (message) {
          context.dispatch("fetchTrainers");
          toast.success(`${message}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        toast.error(`${error.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
  },
  modules: {},
});
