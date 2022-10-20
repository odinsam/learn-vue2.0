<!--
    vue-router路由
    1. vue-router是vue的一个插件库，专门用来实现spa应用(单页面应用)
    2. 一个路由就是一组映射关系 key-value,key是路径，value是组件(前端)或函数(后端)
    3. router/index.js 创建路由表
    4. main.js 加载VueRouter插件并加载路由表
    5. 使用route-link实现路由切换 route-view指定展示位置.被切换掉组件会被销毁
    6. 路由组件一般放在components文件夹，路由组件放在page文件夹
    7. 每一个组件都有自己的$route属性，存储自己的路由信息
    8. 整个应用只有一个router，可以通过$router获取
-->
<template>
  <div class="dvapp">
    <Banner></Banner>
    <div class="dvnav">
        <router-link class="navitem" active-class="navitem-active" to="/home">Home Page</router-link>
        <router-link class="navitem" active-class="navitem-active" to="/about">About Page</router-link>
    </div>
    <div class="dvcontent">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue';
export default {
    name: 'App',
    components: {
        Banner
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
    margin: 0px auto;
    width:1000px;
}
.dvbanner
{
    height:100px;
    background-color: burlywood;

}
.dvnav
{
    width:200px;
    height: 500px;
    background-color: bisque;
    float: left;
}
.navitem{
    display: block;
    height: 80px;
    width:100%;
    text-align: center;
    line-height: 80px;
    
}
.navitem-active{
    background-color: cadetblue;
}
.dvcontent{
    float:right;
    background-color:cornflowerblue;
    width:790px;
    height:500px;
    padding-left: 10px;
}
</style>
