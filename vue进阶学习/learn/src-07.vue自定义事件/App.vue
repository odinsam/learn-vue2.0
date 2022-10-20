<template>
  <div class="dvapp">
    <!--
        vue自定义事件
        1. 可以给组件使用 v-on:自定义事件="事件处理方法" 或者 @自定义事件="事件处理方法" 来绑定并处理自定义事件.适用于子组件给父组件传递数据
        2. 在组件中 使用 this.$emit('自定义事件',参数) 的形式触发自定义事件.参数可以是 字符串、数值、数组或者对象。
        2. 也可以通过 ref='refName' 在mounted中 使用 $on 的方式绑定并处理自定义事件
        3. mounted中使用 this.$refs.refName.$on('自定义事件',function(参数){ })的方式绑定并处理
        4. ref结合mounted与$on的写法更灵活，比如延迟触发、axios后再处理事件
        5. 在绑定的组件可以使用 this.$off() 解绑自定义事件. 
            this.$off('eventName')  解绑一个自定义事件
            this.$off(['eventName1','eventName2'])  解绑多个自定义事件
            this.$off()  解绑所有的自定义事件
        6. 如果组件被销毁，那么绑定的自定义事件不再有效果。
        7. 注意: mounted 中 $on的回调函数中,this是当前绑定自定事件的组件对象vc，而不是vue对象vm。 如果需要vm则需要将回调函数写为箭头函数
    -->
    <h2>app组件</h2>
    <span>学生组件的姓名是:{{stuName}}</span>
    <!--组件student 绑定自定义事件customEvent 事件处理方法getStuName -->
    <Student v-on:customEvent="getStuName" title="v-on方式绑定自定义事件"></Student>
    <Student @customEvent="getStuName" title="@ 方式绑定自定义事件"></Student>
    <Student ref="stu"  title="ref emit方式绑定自定义事件"></Student>
  </div>
</template>

<script>
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
        // 直接处理自定义事件
        getStuName(param) {
            console.log('param', param);
            this.stuName = param.name;
        }
    },
    mounted() {
        // 通过 mounted+$refs+$on 的方式处理自定时间。方式更灵活。 例如延迟处理、axios后处理等等.
        // 回调函数的this是绑定自定事件的组件即stu组件，无法获取到当前app组件的stuName，需要改为箭头函数或者使用注释行的代码
        this.$refs.stu.$on('customEvent',(param)=> {
            console.log('this.stu.$on', param);
            this.stuName = param.name;
        })
        // this.$refs.stu.$on('customEvent',getStuName)
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
    display: flex;
    justify-content: space-evenly;
}
</style>
