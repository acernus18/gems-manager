import Vue from 'vue'
Vue.config.productionTip = false;

import 'handsontable/dist/handsontable.full.css';

// <iView>
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
// </iView>

// <Vant>
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);
// </Vant>

import App from './App.vue'
import router from './router/Router'

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
