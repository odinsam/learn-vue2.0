<template>
    <div class="schooldv">
        <h2>School组件</h2>
        <span class="namecls">姓名：{{schoolName}}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            schoolName:'vue学校'
        }
    },
}
</script>

<style scoped lang="css">
.schooldv{
    background-color:cadetblue;
    width:200px;
    padding:50px;
    margin-left:50px;
}
.namecls
{
    color:red;
}
</style>