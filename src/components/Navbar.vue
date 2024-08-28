<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid p-3">
      <router-link class="navbar-brand" to="/">
        <img src="" alt="logo" loading="lazy" />
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
            <img src="" alt="logo" loading="lazy" />
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
                href="#landing"
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
              <router-link class="nav-link" aria-current="page" to="/userProfile"
                ><i class="bi bi-person-circle"></i></router-link
              >
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

<style scoped>
img[alt="logo"] {
  width: 5rem;
}

i{
    color: black;
    background-color: ;
}
</style>
