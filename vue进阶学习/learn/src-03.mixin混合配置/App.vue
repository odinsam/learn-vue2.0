<template>
  <div class="dvapp">
    <!--
        mixins配置项:
        1. 可以吧多个组件公用的配置提取成一个混入对象
        2. 定义见 mixin.js
        3. 使用分为局部混合和全局混合。
        4. 局部混合：引入混合对象 import {mixin,mixinData} from '../mixin';在vueComponent配置项中 mixins:[mixin,mixinData]
        5. 全局混合：在main.js中 引入 import {mixin,mixinData} from '../mixin'; 使用 Vue.mixin({ mixin, mixinData });混合
        6. 当混入配置与组件配置冲突时，如果是data、methods等，以组件自身数据、方法为主。但如果是有冲突的生命周期钩子，则都会运行。且现执行混合中的钩子函数后执行组件自身的钩子函数

    -->
    <h2>app组件</h2>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import School from './components/School.vue';
import Student from './components/Student.vue';
export default {
    name: 'App',
    components: {
        School,
        Student
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.dvapp
{
    background-color: aquamarine;
}
</style>
