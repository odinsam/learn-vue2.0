<template>
  <div class="dvapp">
    <!--
        vue的style
        1. 多个组件的style可能会出现class重名的情况，当class重名，后引入的组件样式会覆盖之前的同名样式
        2. 可以在组件的 style 标签中添加 scoped属性，让当前style仅作用于当前组件(app的style不加scoped)
        3. style 标签还有lang属性，默认是css。若要修改less，需注意:需要添加 less-loader.
        4. npm view webpack version 可以查看对应版本
        5. vue2 webpack使用的4.46 less-load 8以后得版本是为了迎合webpack5 所以需要安装less-loader 7版本
        6. 安装 npm i less-loader@7
    -->
    <h2>app组件</h2>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import Student from './components/Student.vue';
import School from './components/School.vue';
export default {
    name: 'App',
    components: {
        Student,
        School
    },
    methods: {
        
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
