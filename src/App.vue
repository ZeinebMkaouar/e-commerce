<template>
  <div id="app">
    <header>
      <h1>Mini E-commerce Product Gallery</h1>
    </header>
    <main>
      <ProductList @add-to-cart="addToCart" />
      <ShoppingCart
        :cart="cart"
        @remove-from-cart="removeFromCart"
        @update-quantity="updateQuantity"
      />
    </main>
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";
import ShoppingCart from "./components/ShoppingCart.vue";

export default {
  components: {
    ProductList,
    ShoppingCart,
  },
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    addToCart(product) {
      const cartItem = this.cart.find((item) => item.id === product.id);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId);
    },
    updateQuantity(productId, quantity) {
      const cartItem = this.cart.find((item) => item.id === productId);
      if (cartItem && quantity > 0) {
        cartItem.quantity = quantity;
      }
    },
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

header {
  text-align: center;
  padding: 20px;
  background-color: #282c34;
  color: white;
  width: 100%;
}

main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}

h1 {
  margin: 0;
  font-size: 2rem;
}

@media (max-width: 768px) {
  main {
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 1.5rem;
  }
}
</style>
