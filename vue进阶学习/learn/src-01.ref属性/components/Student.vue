<template>
    <div class="studv">
        <h2>Student组件</h2>
        <span>姓名：{{stuName}}</span>
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

<style lang="css">
.studv{
    background-color:bisque;
    width:200px;
    padding:50px;
}
</style>