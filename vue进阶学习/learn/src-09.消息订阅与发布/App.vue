<template>
  <div class="dvapp">
    <!--
        消息订阅与发布
        1. yarn add pubsub-js 安装消息订阅与发布框架
        2. 订阅消息 mounted时 this.pubId = pubsub.subscribe('消息名称', (消息名称, 消息传递数据) => {}); 消息传递数据可以是字符串、数据、数据或对象
        3. 取消订阅消息  beforeDestroy时 pubsub.unsubscribe(this.pubId)
        4. 组件发布消息 pubsub.publish('消息名称',消息传递数据})
    -->
    <h2>app组件</h2><br/>
    <span>学生的姓名是:{{stuName}}</span> <br/>
    <Student ref="stu"></Student>
  </div>
</template>

<script>
import pubsub from 'pubsub-js';
import Student from './components/Student.vue';
export default {
    name: 'App',
    data() {
        return {
            stuName:''
        }
    },
    components: {
        Student
    },
    methods: {
        
    },
    mounted() {
        this.pubId = pubsub.subscribe('subMessage', (messasgeName, param) => {
            console.log('messasgeName',messasgeName);
            this.stuName = param.stuName
        });
    },
    beforeDestroy() {
        pubsub.unsubscribe(this.pubId)
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
