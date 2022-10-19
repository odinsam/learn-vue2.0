<template>
    <div class="studv">
        <h2>Student组件</h2>
        <span>姓名：{{stuName}}</span><br/>
        <span>插件混入+插件过滤器:{{pluginMixinValue | odinFilter}}</span><br/>
        <span>插件v-big指令:</span><span v-big="value"></span><br/>
        <button @click="invokeMyMethod">调用插件中的myMethod方法</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            stuName: 'odinsam',
            value:'组件value'
        }
    },
    methods: {
        invokeMyMethod() {
            this.pluginMethod(this.pluginPrototype);
        }
    },
}
</script>

<style lang="css">
.studv{
    background-color:bisque;
    width:500px;
    padding:50px;
    margin-left:50px;
}
</style>