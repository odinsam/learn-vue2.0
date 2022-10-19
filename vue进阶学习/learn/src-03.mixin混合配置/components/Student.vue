<template>
    <div class="studv">
        <h2>{{name}}</h2>
        <span>姓名：{{stuName}}</span><br/>
        <button @click="showName">showName</button>
    </div>
</template>

<script>
import {mixin} from '../mixin.js';
export default {
    data() {
        return {
            name:'Student组件',
            stuName:'odinsam'
        }
    },
    mixins: [mixin],
    mounted() {
        console.log('student自身的mounted');
        
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