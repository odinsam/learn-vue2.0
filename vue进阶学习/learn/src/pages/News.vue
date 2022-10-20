<template>
  <div>
    <div>news page</div>
    <ul>
        <li v-for="n in news" :key="n.id" >
            <router-link :to="`/home/news/detail?id=${n.id}`">{{n.title}}</router-link> &nbsp;&nbsp;&nbsp;
            <router-link :to="{
                name:'detail',
                query:{
                    id:n.id
                }
            }">
                {{n.title}} - query对象形式
            </router-link>
        </li>
    </ul>
    <div>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            news: [
                { id: 1, title: 'news-001' },
                { id: 2, title: 'news-002' },
                {id:3,title:'news-003'},
            ]
        }
    },
}
</script>

<style>

</style>