<template>
  <ul class="catalog__list">
    <ProductItem @gotoPage="(pageName, pageParams) => $emit('gotoPage', pageName, pageParams)"
                 :product="product" :index="index" :f-color="filteredColor"
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
