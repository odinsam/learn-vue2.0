<template>
  <div class="dvapp">
    <!--
        vue配置代理
        1. yarn add axios 安装axios库
        2. 在vue.config.js中添加代理配置 devServer:{ 配置内容 }
        3. 简单配置 proxy: 'http://localhost:8899'
        4. 复杂配置,可配置多个代理
            proxy: {
                '/odinapi': {
                    target: 'http://localhost:8899', //目标请求服务器
                    pathRewrite: { '^/odinapi': '' }, //路径重写匹配服务器路径
                    ws: true, //是否支持websocket
                    changeOrigin: true //用户控制请求头中的host  true服务器获取到的请求头是服务器的请求ip localhost:8899，false是前端请求ip localhost:8080
                }
            }
        5. 在需要请求的地方发起axios请求获取数据
    -->
    <h2>app组件</h2><br/>
    <button @click="getStus">获取学生信息</button><br/>
    <ul>
        <li v-for="stu in stus" :key="stu.id">
            <Student stuName="stu.stuName"></Student>
        </li>
    </ul>
    
  </div>
</template>

<script>
import Student from './components/Student.vue';
import axios from 'axios';
export default {
    name: 'App',
    data() {
        return {
            stus:[]
        }
    },
    components: {
        Student
    },
    methods: {
        getStus() {
            axios.get('http://localhost:8080/odinapi/student').then(
                response => {
                    console.log('success', response.data);
                    this.stus = response.data;
                },
                error => {
                    console.log('error',error.message);
                    
                }
            )
        }
    },
    mounted() {
        
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
