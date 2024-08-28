<template>
  <div class="app">
    <NavbarComp />
    <main class="container-fluid">
      <router-view />
    </main>
  </div>
</template>

<script>
import NavbarComp from './components/Navbar.vue';
export default{
  components: {
    NavbarComp
  }
}

</script>

<style>

</style>
