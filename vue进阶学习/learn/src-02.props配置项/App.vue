<template>
  <div class="dvapp">
    <!--
        props配置项
        1. 让组件接收外部传过来的数据 <Student stuName="odinsam" :age="10"></Student>
        2. 接收数据
            简单接收 props: ['stuName', 'age']

            接收的同时限制数据类型
            props: {
                stuName: String,
                age: Number,
            }

            接收的同时 限制数据类型、限制必要性、指定默认值
            props: {
                stuName: {
                    type: String,
                    required:true,
                },
                age: {
                    type: Number,
                    required:true,
                },
                className: {
                    type: String,
                    default:"1班",
                }
            }
        3. props是制度的，Vue底层会检测对props的修改。如果进行了修改，会发出警告。如果业务需要修改，name复制props内容到data中，修改data中的数据
    -->
    <h2>app组件</h2>
    <Student stuName="odinsam" :age="10"></Student>
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
