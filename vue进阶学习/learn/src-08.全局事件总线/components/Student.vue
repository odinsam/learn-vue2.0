<template>
    <div class="studv">
        <h2>Student组件</h2>
        <span>姓名：{{stuName}}</span>
        <button @click="busEventClick">通过全局事件总线触发事件传递数据</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            stuName:'odinsam-eventBus'
        }
    },
    methods: {
        busEventClick() {
            console.log('function busEventClick');
            this.$bus.$emit('customEvent',{name:this.stuName});
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