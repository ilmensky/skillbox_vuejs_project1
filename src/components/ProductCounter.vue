<template>
  <div class="form__counter">
    <button type="button" aria-label="Убрать один товар" @click="countMinus">
      <svg width="12" height="12" fill="currentColor">
        <use xlink:href="#icon-minus"></use>
      </svg>
    </button>
    <label for="id_count">
      <input type="text" v-model="count" name="count" id="id_count">
    </label>
    <button type="button" aria-label="Добавить один товар" @click="countPlus">
      <svg width="12" height="12" fill="currentColor">
        <use xlink:href="#icon-plus"></use>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ProductCounter',
  data() {
    return {
      count: 1,
    };
  },
  props: ['amount'],
  model: {
    prop: 'amount',
    event: 'setAmount',
  },
  methods: {
    countPlus() {
      this.count += 1;
    },
    countMinus() {
      if (this.count > 1) {
        this.count -= 1;
      }
    },
  },
  watch: {
    count() {
      this.$emit('setAmount', this.count);
    },

  },
  created() {
    this.count = this.amount;
  },
};
</script>

<style scoped>

</style>
