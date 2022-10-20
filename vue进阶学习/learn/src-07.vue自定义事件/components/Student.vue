<template>
    <div class="studv">
        <h2>{{title}}</h2>
        <span>姓名：{{stuName}}</span><br/>
        <button @click="sendStuName">自定义事件-回传学生的名字</button><br/>
        <button @click="unbind">解绑自定义事件</button><br/>
        <button @click="destoryStu">销毁组件</button><br/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            stuName:'odinsam'
        }
    },
    props:['title'],
    methods: {
        sendStuName() {
            console.log('function sendStuName');
            //触发自定义事件 customEvent,传参对象
            this.$emit('customEvent',{name:this.stuName})
        },
        unbind() {
            //解绑一个自定义事件
            this.$off('customEvent')
            //解绑多个自定义事件
            this.$off(['customEvent'])
            // 解绑所有的自定义事件
            this.$off()
        },
        destoryStu() {
            // 销毁当前组件对象
            this.$destroy();
        }
    },
    unbind: {
        
    }
}
</script>

<style lang="css">
.studv{
    background-color:bisque;
    width:300px;
    padding:50px;
    margin-left:50px;
}
</style>