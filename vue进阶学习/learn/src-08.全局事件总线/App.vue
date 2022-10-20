<template>
  <div class="dvapp">
    <!--
        
    -->
    <h2>app组件</h2><br/>
    <span>学生的姓名是:{{stuName}}</span><br/>
    <Student ref="stu"></Student>
  </div>
</template>

<script>
import Student from './components/Student.vue';
export default {
    name: 'App',
    data() {
        return {
            stuName:'',
        }
    },
    components: {
        Student
    },
    mounted() {
        //给student添加自定义事件
        this.$bus.$on('customEvent', (param) => {
            this.stuName = param.name;
        });
    },
    beforeDestroy() {
        this.$bus.off('customEvent');
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
