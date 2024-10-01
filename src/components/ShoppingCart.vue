<template>
  <div class="shopping-cart">
    <h2>Shopping Cart</h2>
    <div v-if="cart.length === 0">Your cart is empty</div>
    <div v-else>
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <img :src="item.image" alt="item.title" />
        <div class="item-details">
          <h3>{{ item.title }}</h3>
          <p>${{ item.price }} x {{ item.quantity }}</p>
          <input type="number" v-model.number="item.quantity" @change="updateQuantity(item.id, item.quantity)" min="1" />
          <button @click="removeFromCart(item.id)">Remove</button>
        </div>
      </div>
      <div class="cart-total">
        <h3>Total: ${{ cartTotal }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: Array,
  },
  computed: {
    cartTotal() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    },
  },
  methods: {
    
    removeFromCart(productId) {
      this.$emit('remove-from-cart', productId);
    },
  
    updateQuantity(productId, quantity) {
      this.$emit('update-quantity', productId, quantity);
    },
  },
};
</script>


<style scoped>
.shopping-cart {
  margin-top: 20px;
  width: 100%;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}

.cart-item img {
  width: 50px;
  margin-right: 10px;
}

.item-details {
  flex: 1;
  
}

button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px 15px; 
  font-size: 1.2rem; 
  cursor: pointer;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #c82333;
}

input {
  width: 70px; 
  padding: 10px; 
  font-size: 1.2rem; 
  margin-right: 10px;
}

.cart-total {
  margin-top: 20px;
  text-align: right;
}

@media (max-width: 768px) {
  .cart-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .cart-item img {
    margin-bottom: 10px;
  }

  .cart-total {
    text-align: center;
  }
}
</style>