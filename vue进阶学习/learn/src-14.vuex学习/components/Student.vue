<template>
    <div class="studv">
        <h2>Student组件</h2>
        <div>放大十倍后的学生人数:{{$store.getters['stuOptions/bigSum']}}</div>
        <ul>
            <li v-for="s in $store.state.stuOptions.stus" :key="s.id">{{s.stuName}}</li>
        </ul>
    </div>
</template>

<script>

export default {
    data() {
        return {
            
        }
    },
    mounted() {
        console.log(this.$store);
        
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