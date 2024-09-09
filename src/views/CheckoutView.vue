<template id="checkout-template">
  <h1 class="display-1 text-center m-4">Checkout</h1>
  <table class="table-container">
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
      <tr class="mobile-row" v-for="item in cartItems" :key="item">
        <td><img :src="item.profileIMG" alt="cart-img" /></td>
        <td>{{ item.trainerName }} {{ item.trainerSurname }}</td>
        <td>{{ item.specialties }}</td>
        <td>rate</td>
        <td>sessions</td>
        <td>calculated</td>
        <td><button @click="removeItem(item.trainerID)">Remove</button></td>
      </tr>
    </tbody>
    <SpinnerComp v-else />
  </table>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import SpinnerComp from "@/components/Spinner.vue";

const store = useStore();
const cartItems = computed(() => store.state.cartItems);

onMounted(() => {
  store.dispatch("fetchCart");
});

const removeItem = (trainerID) => {
    store.dispatch("deleteCartItem", trainerID)
}

console.log(cartItems.value);
</script>

<style scoped>
.table-container {
  width: 90%;
  margin: 0 auto;
  font-family: "Moderustic", sans-serif;
  margin: auto;
}

img[alt="cart-img"] {
  width: 5rem;
  margin: 0.8rem;
}

.table-container tbody td{
    padding-left: 0.5rem;
}

.table-container tbody td:last-child {
  text-align: center;
}

th {
  padding: 0.5rem;
}

/* From Uiverse.io by cssbuttons-io */
button {
  --color: #f2613f;
  display: inline-block;
  background-color: #fffbfe;
  width: 5rem;
  line-height: 2rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid var(--color);
  transition: color 0.5s;
  z-index: 1;
  border-radius: 6px;
  color: var(--color);
  margin: auto;
}

button:before {
  content: "";
  position: absolute;
  z-index: -1;
  background: #f2613f;
  height: 150px;
  width: 200px;
  border-radius: 50%;
}

button:hover {
  color: #fff;
}

button:before {
  top: 100%;
  left: 100%;
  transition: all 0.5s;
}

button:hover:before {
  top: -30px;
  left: -30px;
}

button:active:before {
  background: #fffbfe;
  transition: background 0s;
}

/**mobile */
@media screen and (min-width: 768px) {
  .table-container thead th {
    --color: #d4d4d4;
    border-top: 1px solid var(--color);
    border-left: 1px solid var(--color);
    border-bottom: 1px solid var(--color);

    &:last-child {
      border-right: 1px solid var(--color);
    }
  }

  .table-container tbody td {
    --color: #d4d4d4;
    border-left: 1px solid var(--color);
    border-right: 1px solid var(--color);
    border-bottom: 1px solid var(--color);
  }
}
</style>
