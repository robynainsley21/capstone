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
// import { useCookies } from 'vue3-cookies';
// import { mapActions } from 'vuex';
export default{
  components: {
    NavbarComp,
    FooterComp
  },

  // computed: {
  //   isAuthenticated(){
  //     const { cookies } = useCookies();
  //     return !!cookies.get('token')
  //   }
  // }
}

</script>

<style>

</style>
