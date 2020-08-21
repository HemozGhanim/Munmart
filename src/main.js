import Vue from 'vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.min.js';
import VueRouter from 'vue-router';
import { routes } from './router';
Vue.use(VueRouter);
import {store} from './store/Store';
const router = new VueRouter({
  mode: 'history',
  routes
});
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app');
