<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid p-3">
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
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/admin"
                >Admin</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                aria-current="page"
                to="/userProfile"
                ><i class="bi bi-person-circle"></i
              ></router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComp",
};
</script>

<style>
img[alt="logo"] {
  width: 5rem;
}

i {
  /* color: black; */
  font-size: 2.5rem;
}

/* #offcanvasNavbar{
  backdrop-filter: blur(10px);
} */

nav {
  /* backdrop-filter: blur(10px); */

  & ul {
    & router-link.nav-link {
      color: var(--background);
      transition: all 1s;
      &:hover {
        color: var(--primary);
        box-shadow: unset;
      }
    }
  }
}


</style>
