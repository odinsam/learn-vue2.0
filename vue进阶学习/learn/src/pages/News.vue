<template>
  <div>
    <div>news page</div>
    <ul>
        <li v-for="n in news" :key="n.id" >
            <!-- router-link url querystring传参 -->
            <router-link :to="`/home/news/detail?id=${n.id}`">{{n.title}}</router-link> &nbsp;&nbsp;&nbsp;
            <!-- router-link url params传参 -->
            <router-link :to="`/home/news/detail/${n.id}`">{{n.title}}-byid</router-link> &nbsp;&nbsp;&nbsp;
            <!-- router-link to对象 query传参 只能用name 不能用path-->
            <router-link :to="{
                name:'detail',
                query:{
                    id:n.id
                }
            }">
                {{n.title}} - query对象形式
            </router-link>&nbsp;&nbsp;&nbsp;
            <!-- router-link to对象 param传参 只能用name 不能用path-->
            <router-link :to="{
                name:'detailid',
                params:{
                    id:n.id
                }
            }">
                {{n.title}} - params对象形式
            </router-link> &nbsp;&nbsp;&nbsp;
            <button @click="pushShow(n)">push查看</button>&nbsp;&nbsp;&nbsp;
            <button @click="replaceShow(n)">replace查看</button>
        </li>
    </ul>
    <div>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    name:'News',
    data() {
        return {
            news: [
                { id: 1, title: 'news-001' },
                { id: 2, title: 'news-002' },
                {id:3,title:'news-003'},
            ]
        }
    },
    methods: {
        //编程式导航 push模式 query传参
        pushShow(n) {
            this.$router.push({
                name:'detail',
                query:{
                    id:n.id
                }
            });
        },
        //编程式导航 replace模式 params传参
        replaceShow(n) {
            this.$router.replace({
                name:'detailid',
                params:{
                    id:n.id
                }
            });
        },
    },
}
</script>

<style>

</style>