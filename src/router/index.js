import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import ProductPage from '@/pages/ProductPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';
import CartPage from '@/pages/CartPage.vue';
import CartPageOrder from '@/pages/CartPageOrder.vue';
import OrderInfoPage from '@/pages/OrderInfoPage.vue';

Vue.use(VueRouter);

const routes = [
  { name: 'main', component: MainPage, path: '/' },
  { name: 'product', component: ProductPage, path: '/product/:id' },
  { name: 'cart', component: CartPage, path: '/cart' },
  { name: 'cartOrder', component: CartPageOrder, path: '/cart/order' },
  { name: 'cartOrderInfo', component: OrderInfoPage, path: '/cart/order/:id' },
  { name: 'notFound', component: NotFoundPage, path: '*' },
];

const router = new VueRouter({
  routes,
});

export default router;
