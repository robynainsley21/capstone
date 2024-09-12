import { createStore } from "vuex";
import axios from "axios";
import router from "@/router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { useCookies } from "vue3-cookies";
// import { applyToken } from "@/service/AuthenticateUser.js"

const { cookies } = useCookies();
const apiURL = "https://capstone-qbpc.onrender.com/";
// const apiURL = "http://localhost:3001/"

export default createStore({
  state: {
    users: null,
    user: null,
    userRole: null,
    trainers: null,
    trainer: null,
    cartItems: (() => {
      try {
        return JSON.parse(cookies.get("userCart")) || [];
      } catch (e) {
        return [];
      }
    })(),
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
    setUserRole(state, value) {
      state.userRole = value ? value.userRole : null;
    },
    setCart(state, value) {
      state.cartItems = value;
    },
    addToCart(state, value) {
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
            autoClose: 3500,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        toast.error(`${error.message}`, {
          autoClose: 3500,
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
            autoClose: 3500,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        toast.error(`${error.message}`, {
          autoClose: 3500,
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
          context.commit("setUserRole", data.userRole);
          cookies.set("token", data.token);
          cookies.set("userRole", data.userRole);

          toast.success("Login successful!", {
            autoClose: 3500,
            position: toast.POSITION.BOTTOM_CENTER,
          });
          // cookies.set("LegitUser", { token, message, result });
          // applyToken(token)
          router.push({ name: data.userRole === "admin" ? "admin" : "home" });
        } else {
          toast.error(data.message || "Login failed.", {
            autoClose: 3500,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        toast.error(error.message, {
          autoClose: 3500,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    logoutUser({ commit }) {
      try {
        commit("setUser", null);
        commit("setUserRole", null);
        cookies.remove("token");
        cookies.remove("userRole");
        router.push({ name: "login" });
        toast.success("Logout successful!", {
          autoClose: 3500,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      } catch (error) {
        toast.error(error.message, {
          autoClose: 3500,
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
            autoClose: 3500,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        toast.error(`${error.message}`, {
          autoClose: 3500,
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
            autoClose: 3500,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        toast.error(`${error.message}`, {
          autoClose: 3500,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async fetchCart() {
      try {
        console.log(this.state.cartItems);
        /**returns the cart correctly but disappears when page refreshes */
          return this.state.cartItems       
         
      } catch (error) {
        toast.error(`${error.message}`, {
          autoClose: 3500,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async addToCart(context, payload) {
      try {
        const currentCart = this.state.cartItems;

        const updateCart = [...currentCart, payload];
        context.commit("setCart", updateCart);
        cookies.set("userCart", updateCart, { expires: "7d" });

        toast.success("Item added to cart!", {
          autoClose: 3500,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      } catch (error) {
        toast.error("Failed to add booking to cart.", {
          autoClose: 3500,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async deleteCartItem(context, payload) {
      try {
        let currentCart = context.state.cartItems;
        currentCart = currentCart.filter((item) => item.trainerID !== payload);
        context.commit("setCart", currentCart);
        cookies.set("userCart", currentCart, { expires: "7d" });

        toast.success("Item removed from cart!", {
          autoClose: 3500,
          position: toast.POSITION.BOTTOM_CENTER,
        })
      } catch (error) {
        toast.error("Failed to remove item from cart.", {
          autoClose: 3500,
          position: toast.POSITION.BOTTOM_CENTER,
        })
      }
    },
    async updateUser(context, payload) {
      try {
        const { message, error } = await (
          await axios.patch(`${apiURL}users/update/${payload}`, payload)
        ).data;

        if (message) context.dispatch("fetchUsers");
        else {
          toast.error(`${error}`, {
            autoClose: 3500,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        toast.error(`${error.message}`, {
          autoClose: 3500,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async registerUser(context, payload) {
      try {
        const { data } = await axios.post(`${apiURL}users/register`, payload);

        if (data.token) {
          toast.success("Registration successful! Please login.", {
            autoClose: 3500,
            position: toast.POSITION.BOTTOM_CENTER,
          });
          router.push({ name: "login" });
        } else {
          toast.error(data.message || "Registration failed.", {
            autoClose: 3500,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        toast.error(error.message, {
          autoClose: 3500,
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
            autoClose: 3500,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        toast.error(`${error.message}`, {
          autoClose: 3500,
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
            autoClose: 3500,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        toast.error(`${error.message}`, {
          autoClose: 3500,
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
            autoClose: 3500,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        toast.error(`${error.message}`, {
          autoClose: 3500,
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
            autoClose: 3500,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (error) {
        toast.error(`${error.message}`, {
          autoClose: 3500,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
  },
  modules: {},
});
