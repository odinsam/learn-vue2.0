<template>
    <div class="studv">
        <h2>{{name}}</h2>
        <h2>mixindata与组件data冲突时:{{value}}</h2>
        <span>学校名：{{schoolName}}</span><br/>
        <button @click="showName">showName</button>
    </div>
</template>

<script>
import {mixin,mixinData} from '../mixin';
export default {
    data() {
        return {
            value:'组件data',
            name:'School组件',
            schoolName:'vue学院'
        }
    },
    mixins:[mixin,mixinData]
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