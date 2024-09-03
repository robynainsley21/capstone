import { createStore } from "vuex";
import axios from "axios";
import router from "@/router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const apiURL = "https://capstone-qbpc.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    userRole: null,
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
      (state.user = value), (state.userRole = value.userRole);
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
    async loginUser(context, payload) {
      try {
        const { data } = await axios.post(`${apiURL}users/login`, {
          emailAdd: payload.emailAdd, 
          userPass: payload.userPass, 
          userRole: payload.userRole,
        });
        console.log(data);

        if (data.token) {
          context.commit("setUser", data.user);
          localStorage.setItem("token", data.token);
          localStorage.setItem("userRole", data.user.userRole);

          toast.success("Login successful!", {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });

          router.push({ name: data.user.userRole === "admin" ? "admin" : "home" });
        } else {
          toast.error(data.message || "Login failed.", {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        toast.error(error.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async fetchTrainers(context) {
      try {
        const { results, message } = await (
          await axios.get(`${apiURL}trainers`)
        ).data;

        if (results) context.commit("setTrainers", results);
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
    async fetchTrainer(context, id) {
      try {
        const { result, message } = await (
          await axios.get(`${apiURL}trainers/${id}`)
        ).data;

        if (result) {
          context.commit("setTrainer", result);
        } else {
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
        const { data } = await axios.post(`${apiURL}users/register`, payload);

        if (data.token) {
          toast.success("Registration successful! Please login.", {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
          router.push({ name: "login" });
        } else {
          toast.error(data.message || "Registration failed.", {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        toast.error(error.message, {
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
