<template>
  <li class="cart__item product">
    <div class="product__pic">
      <img :src="item.product.image" width="120" height="120"
           :alt="item.product.title">
    </div>
    <h3 class="product__title">
      {{item.product.title}}
    </h3>
    <span class="product__code">
                Артикул: {{item.product.id}}
              </span>

    <product-counter v-model.number="amount"/>
    <b class="product__price">
      {{item.product.price * item.amount | numberFormat}} ₽
    </b>

    <button class="product__del button-del" type="button"
            @click.prevent="deleteProduct(item.productId)"
            aria-label="Удалить товар из корзины">
      <svg width="20" height="20" fill="currentColor">
        <use xlink:href="#icon-close"></use>
      </svg>
    </button>
  </li>
</template>

<script>
import productCounter from '@/components/ProductCounter.vue';
import numberFormat from '@/helpers/numberFormat';
import { mapMutations } from 'vuex';

export default {
  name: 'CartItem',
  components: { productCounter },
  props: ['item'],
  filters: { numberFormat },
  methods: {
    ...mapMutations({
      deleteProduct: 'deleteCartProduct',
    }),
  },
  computed: {
    amount: {
      get() {
        return this.item.amount;
      },
      set(value) {
        this.$store.commit('updateCartProductAmount', {
          productId: this.item.productId,
          amount: value,
        });
      },
    },
  },
};
</script>

<style scoped>

</style>
