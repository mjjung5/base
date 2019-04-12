import Vue from 'vue'
import App from '@/pages/sub/App.vue'
import axios from 'axios'
import ES6Promise from "es6-promise"
import '@/css/common.css'

ES6Promise.polyfill();
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  render: h => h(App),
}).$mount('#wrap')
