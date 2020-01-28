import Vue from 'vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;
Vue.use(ViewUI);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
