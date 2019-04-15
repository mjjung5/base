import Vue from 'vue'
import App from '@/pages/main/App.vue'
import axios from 'axios'
import ES6Promise from "es6-promise"

ES6Promise.polyfill();
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  render: h => h(App),
}).$mount('#wrap')
