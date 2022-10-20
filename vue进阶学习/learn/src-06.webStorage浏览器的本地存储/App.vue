<template>
  <div class="dvapp">
    <!--
        webStorage浏览器的本地存储
        1. 浏览器通过 window.sessionStorage 和 window.localStorage 属性实现本地存储
        2. 相关api
        xxxStorage.setItem('key','value') 存储数据
        xxxStorage.getItem('key') 读取数据
        xxxStorage.removeItem('key') 删除某个数据
        xxxStorage.clear()  清空所有数据
        3. sessionStorage 存储的内容会随着浏览器的关闭而消失. 
        4. localStorage 存储的内容需要手动调用api清除
        5. xxxStorage.getItem('key') 如果key不存在，则返回null
        6. JSON.parse(null) 返回的依然是null
    -->
    <h2>app组件</h2>
    <Student></Student>
  </div>
</template>

<script>
import Student from './components/Student.vue';
export default {
    name: 'App',
    components: {
        Student
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
