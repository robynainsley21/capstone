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
  },
  computed: {
    isAuthenticated(){
      return !!localStorage.getItem('token')
    }
  }
}

</script>

<style>

</style>
