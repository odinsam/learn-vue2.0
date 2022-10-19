import Vue from 'vue';
import App from './App.vue';
import plugins from './plugins';
Vue.config.productionTip = false;
//使用插件
Vue.use(plugins, { value1: 'value1', value2: 'value2' });
new Vue({
    render: (h) => h(App)
}).$mount('#app');
