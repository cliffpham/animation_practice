import Vue from 'vue';
import VModal from 'vue-js-modal';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue';

Vue.use(BootstrapVue);
Vue.use(VModal, { dynamic: true, injectModalsContainer: true });

export const bus = new Vue();

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
