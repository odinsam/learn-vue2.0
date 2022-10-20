<template>
    <div class="studv">
        <h2>Student组件</h2>
        <span>姓名：{{stuName}}</span><br/>
        <button @click="publishMessageClick">发布消息传递数据</button>
    </div>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
    data() {
        return {
            stuName:'odinsam'
        }
    },
    methods: {
        publishMessageClick() {
            pubsub.publish('subMessage',{stuName:this.stuName})
        }
    },
}
</script>

<style lang="css">
.studv{
    background-color:bisque;
    width:200px;
    padding:50px;
    margin-left:50px;
}
</style>