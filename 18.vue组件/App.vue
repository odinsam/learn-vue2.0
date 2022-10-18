<template>
    <div class="app">
        <h2>App组件</h2>  
        <Student></Student>
    </div>
</template>

<script>
import Student from './Student.vue';
export default {
    name: 'App',
    components:{ Student }
}
</script>

<style scoped>
.studv{
    background-color:aquamarine;
    padding: 20px;   
}
</style>