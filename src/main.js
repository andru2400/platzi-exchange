import Vue from "vue";
import App from "./App.vue";
import '@/assets/css/tailwind.css';
import '@/router';
import router from "@/router";
import { dollarFilter, percentFilter } from '@/filter'
import Chart from 'chart.js'
import Chartkick from 'vue-chartkick'
import { VueSpinners } from '@saeris/vue-spinners'

Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)
Vue.config.productionTip = false;
Vue.use(VueSpinners);
Vue.use(Chartkick.use(Chart))

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
