import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
/**
    全局事件总线:
    1. 一种组件间通信的方式，适用于任意组件通信
    2. 在main.js中通过 beforeCreate(){ Vue.prototype.$bus = this; } 安装全局事件总线
    3. 主要利用的原理是 VueComponent.prototype.__proto__ === Vue.prototype vc可以使用在vm的原型上添加的属性、方法来实现.
    4. 通信方式主要依靠自定义事件，在需要通信的双方(app.vue/student.vue)添加自定义事件和处理自定义事件.
 */
new Vue({
    render: (h) => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
    }
}).$mount('#app');
