<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img
          src="https://robynainsley21.github.io/images/capstone/FitMatch-logo-removebg-preview.png"
          alt="logo"
          loading="lazy"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <router-link class="navbar-brand" to="/">
            <img
              src="https://robynainsley21.github.io/images/capstone/FitMatch-logo-removebg-preview.png"
              alt="logo"
              loading="lazy"
            />
          </router-link>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav fw-bolder ms-auto">
            <li class="nav-item">
              <router-link
                class="nav-link font-weight-bold"
                aria-current="page"
                to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/about"
                >About</router-link
              >
            </li>

            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/trainers"
                >Trainers</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/checkout"
                >Checkout</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/contact"
                >Contact</router-link
              >
            </li>
            <li v-if="isAdmin" class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/admin"
                >Admin</router-link
              >
            </li>
            <div v-if="isLoggedIn">
              <button class="login-btn" @click="handleSignOut">Sign Out</button>
            </div>
            <!-- <li class="nav-item">
              <router-link
                class="nav-link"
                aria-current="page"
                to="/userProfile"
                ><i class="bi bi-person-circle"></i
              ></router-link>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComp",
  computed: {
    isAdmin() {
      return localStorage.getItem("userRole") === "admin";
    },
    isLoggedIn() {
      console.log('user is logged in: ', this.$store.state.user !== null);
      return this.$store.state.user !== null;
    }
  },
  methods: {
    handleSignOut() {
      this.$store.dispatch('logoutUser');
    }
  }
};
</script>

<style scoped>
img[alt="logo"] {
  width: 5rem;
}

i {
  color: #481e14;
  font-size: 2.5rem;
}

nav {
  z-index: 9;
  background-color: #f2613f;
}

.offcanvas-body .navbar-nav .nav-item .nav-link {
  color: #481e14;

  &:hover {
    color: var();
    box-shadow: unset;
  }
}

.navbar-nav {
  align-items: center;
  float: left;
}

.login-btn {
  width: 7rem;
  padding: 10px;
  background: #9b3922;
  color: #fffbfe;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login-btn:hover {
  background: #f2613f;
}
</style>
