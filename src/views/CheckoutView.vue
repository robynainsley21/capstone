<template id="checkout-template">
  <h1 class="display-1 text-center">Checkout</h1>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Trainer Image</th>
          <th>Name</th>
          <th>Specialty</th>
          <th>Price</th>
          <th>Sessions</th>
          <th>Total Amount</th>
          <th>Remove Item</th>
        </tr>
      </thead>
      <tbody v-if="cartItems">
        <tr>

        </tr>
      </tbody>
      <SpinnerComp v-else />
    </table>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import SpinnerComp from "@/components/Spinner.vue";

const store = useStore();
const cartItems = computed(() => store.state.cartItems);

onMounted(() => {
  store.dispatch("fetchCart");
  console.log(cartItems.value);
  
});

</script>

<style scoped>
#checkout-template {
  font-family: "Moderustic", sans-serif;
}

.table-container {
  width: 90%;
  margin: 0 auto;

  /* & table > thead > tr > th {
    margin: auto;
  } */
}
</style>
