import Vue from 'vue';
import ShWysiwyg from './ShWysiwyg';
import App from './App';

Vue.config.productionTip = false;

Vue.use(ShWysiwyg);

new Vue({
  render: h => h(App),
}).$mount('#app');
