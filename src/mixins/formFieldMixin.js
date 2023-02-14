import BaseFormField from '@/components/BaseFormField.vue';

export default {
  name: 'BaseFormTextarea',
  components: { BaseFormField },
  props: ['title', 'error', 'placeholder', 'value'],
  computed: {
    dataValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
