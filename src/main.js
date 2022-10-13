import Vue from 'vue';
import App from './App.vue';
// import data from './data';
// import { msg, msg2 } from './data3';
// import func from './data2';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

// alert(data.message);
// func(msg);
// func(msg2);
