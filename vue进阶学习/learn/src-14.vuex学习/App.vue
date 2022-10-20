<template>
  <div class="dvapp">
    <h2>app组件</h2>
    <span>共计学生{{stusSum}},</span><button @click="addStu">添加学生</button><br/>
    <Student></Student><br/>
  </div>
</template>

<script>
import Student from './components/Student.vue';
import {mapState,mapGetters,mapMutations} from 'vuex';

export default {
    name: 'App',
    components: {
        Student
    },
    methods: {
        addStu() {
            this.$store.dispatch('stuOptions/add', { stuName: 'odin' });
            //跳过dispatch字节commit到mutations
            // this.$store.commit('ADD',{ stuName: 'odin' })
        },
        //使用映射的形式 映射mutations
        // ...mapMutations(['ADD'])
        // ...mapMutations('stuOptions',['ADD'])
    },
    computed: {
        stusSum() {
            console.log(this.$store);
            return this.$store.state.stuOptions.stus.length
        },
        //使用映射的形式 映射state为计算属性
        // ...mapState(['stus'])
        ...mapState('stuOptions',['stus'])
        //...mapGetters(['stus'])
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.dvapp
{
    background-color: aquamarine;
}
</style>
