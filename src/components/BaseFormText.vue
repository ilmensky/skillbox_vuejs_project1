<template>
  <base-form-field :title="title" :error="error">
    <input class="form__input" :type="type" v-model="dataValue" :placeholder="placeholder">
  </base-form-field>
</template>

<script>
import formFieldMixin from '@/mixins/formFieldMixin';

export default {
  props: {
    type: {
      default: 'text',
    },
  },
  mixins: [formFieldMixin],
};
</script>

<style scoped>

</style>
