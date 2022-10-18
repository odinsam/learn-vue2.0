<template>
    <div class="studv">
        <h2>Studen组件</h2>    
        <span>{{stuName}}</span>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            stuName:'odinsam'
        }
    }, 
}
</script>

<style scoped>
.studv{
    margin-left:50px;
    background-color: bisque;
    padding: 20px;   
}
</style>