import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../components/ProductList.vue';
import ShoppingCart from '../components/ShoppingCart.vue';

const routes = [
  { path: '/', component: ProductList },
  { path: '/cart', component: ShoppingCart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
