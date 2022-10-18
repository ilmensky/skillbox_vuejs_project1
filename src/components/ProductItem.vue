<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#">
      <img :alt="product.title" :src="product.image">
    </a>

    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>

    <span class="catalog__price">
              {{ product.price }} ₽
            </span>

    <ul class="colors colors--black">
      <li class="colors__item">
        <label :for="index+'p1'" class="colors__label">
          <input :id="index+'p1'" checked="" class="colors__radio sr-only" v-model="color"
                 type="radio"
                 value="#73B6EA">
          <span class="colors__value" style="background-color: #73B6EA;">
                  </span>
        </label>
      </li>
      <li class="colors__item">
        <label :for="index+'p2'" class="colors__label">
          <input :id="index+'p2'" class="colors__radio sr-only" type="radio" v-model="color"
                 value="#8BE000">
          <span class="colors__value" style="background-color: #8BE000;">
                  </span>
        </label>
      </li>
      <li class="colors__item">
        <label :for="index + 'p3'" class="colors__label">
          <input :id="index + 'p3'" class="colors__radio sr-only" type="radio" v-model="color"
                 value="#222">
          <span class="colors__value" style="background-color: #222;">
                  </span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['product', 'index'],
  data() {
    return {
      color: '#73B6EA',
    };
  },
};
</script>

<style scoped>

</style>
