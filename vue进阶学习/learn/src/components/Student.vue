<template>
    <div class="studv">
        <h2>Student组件</h2>
        <span class="namecls">姓名：{{stuName}}</span><br/>
        <span class="lessname">less 样式</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            stuName:'odinsam'
        }
    },
}
</script>

<style scoped lang="less">
.studv{
    background-color:bisque;
    width:400px;
    padding:50px;
    margin-left:50px;
    .lessname
    {
        font-size:30px;
    }
}
.namecls
    {
        color:blue;
    }
</style>