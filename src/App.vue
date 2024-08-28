<template>
  <div class="app">
    <NavbarComp />
    <main>
      <router-view />
    </main>
    <FooterComp />
  </div>
</template>

<script>
import NavbarComp from './components/Navbar.vue';
import FooterComp from './components/Footer.vue';
export default{
  components: {
    NavbarComp,
    FooterComp
  }
}

</script>

<style>

</style>
