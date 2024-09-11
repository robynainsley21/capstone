import { createRouter, createWebHistory } from "vue-router";
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/trainers",
    name: "trainers",
    component: () =>
      import(/* webpackChunkName: "allTrainers" */ "../views/TrainersView.vue"),
    meta: { requiresAuth: true },
  },

  {
    path: "/trainersSingleView/:id",
    name: "trainersSingleView",
    component: () =>
      import(
        /* webpackChunkName: "trainersSingleView" */ "../views/TrainerSingleView.vue"
      ),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () =>
      import(/* webpackChunkName: "checkout" */ "../views/CheckoutView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/ContactView.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/AdminView.vue"),
    meta: { requiresAuth: true, requiresAdmin: true },
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/SignupView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin);

  const userToken = cookies.get("token");
  const userRole = cookies.get("role");

  if (requiresAuth && !userToken) {
    next({ name: "login" });
  } else if (requiresAdmin && userRole !== "admin") {
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
