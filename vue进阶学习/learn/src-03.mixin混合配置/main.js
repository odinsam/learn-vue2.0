import Vue from 'vue';
import App from './App.vue';
import { mixin, mixinData } from './mixin';
Vue.config.productionTip = false;
//全局混入
Vue.mixin({ mixin, mixinData });
new Vue({
    render: (h) => h(App)
}).$mount('#app');
