<template>
  <ul class="catalog__list">
    <ProductItem :product="product" :index="index" :f-color="filteredColor"
                 v-for="(product, index) in products" :key="product.id + '_product'"/>
  </ul>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  name: 'ProductList',
  components: {
    ProductItem,
  },
  props: ['products', 'filteredColor'],
};
</script>

<style scoped>

</style>
