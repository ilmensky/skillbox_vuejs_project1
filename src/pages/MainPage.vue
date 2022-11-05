<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">
        Каталог
      </h1>
      <span class="content__info">
        152 товара
      </span>
    </div>
    <div class="content__catalog">
      <ProductFilter
        :category-id.sync="filterCategoryId"
        :price-from.sync="filterPriceFrom"
        :price-to.sync="filterPriceTo"
        :color-id.sync="filterColorId"
      />
      <section class="catalog">
        <ProductList :products="products" :filtered-color="filterColorId"/>
        <BasePagination v-model="page" :count="countProducts" :per-page="productsPerPage"/>
      </section>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import { API_BASE_URL } from '@/config';
import ProductFilter from '@/components/ProductFilter.vue';
import ProductList from '@/components/ProductList.vue';
import BasePagination from '@/components/BasePagination.vue';

export default {
  name: 'MainPage',
  components: {
    ProductFilter,
    ProductList,
    BasePagination,
  },
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      filterColorId: 0,
      page: 1,
      productsPerPage: 3,
      productsData: null,
    };
  },
  computed: {
    products() {
      return this.productsData
        ? this.productsData.items.map((product) => ({
          ...product,
          image: product.image.file.url,
        }))
        : [];
    },
    countProducts() {
      return this.productsData ? this.productsData.pagination.total : 0;
    },
  },
  methods: {
    loadProducts() {
      clearTimeout(this.loadProductsTimer);
      this.loadProductsTimer = setTimeout(() => {
        axios
          .get(
            `${API_BASE_URL}/api/products`,
            {
              params: {
                page: this.page,
                limit: this.productsPerPage,
                categoryId: this.filterCategoryId,
                minPrice: this.filterPriceFrom,
                maxPrice: this.filterPriceTo,
              },
            },
          )
          .then((response) => { this.productsData = response.data; });
      }, 0);
    },
  },
  watch: {
    page() {
      this.loadProducts();
    },
    filterCategoryId() {
      this.loadProducts();
    },
    filterPriceFrom() {
      this.loadProducts();
    },
    filterPriceTo() {
      this.loadProducts();
    },
  },
  created() {
    this.loadProducts();
  },
};
</script>

<style scoped>

</style>
