<template>
    <div class="dvHome">
        <h2>Home组件</h2>
        <div class="dvsubnav">
            <button @click="backClick">回退</button>
            <button @click="forwardClick">前进</button>
            <button @click="goClick">Go</button>
            <button @click="setTokenClick">localStorage set token</button>
            <ul class="subnav">
                <li>
                    <!--一级路由  replace模式：控制路由器跳转时操作浏览器历史记录的模式，默认是push追加记录，replace是替换当前记录。-->
                    <router-link replace to="/home/news">News</router-link>
                    <router-link to="/home/messages">Message</router-link>
                </li>
            </ul>
        </div>
        <div class="dvsubcontent">
            <!--可以使用keep-alive标签包含<router-view></router-view>用来缓存路由组件默认缓存所有组件。:include="['组件名']" 指定需要缓存的路由组件。exclude功能刚好相反-->
            <keep-alive :include="['Message']">
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
export default {
    name:'Home',
    data() {
        return {
            stuName:'odinsam'
        }
    },
    methods: {
        backClick() { this.$router.back(); },
        forwardClick() { this.$router.forward(); },
        goClick() { this.$router.go(2); },
        setTokenClick(){ localStorage.setItem('token','odinsam') }
    },
}
</script>

<style lang="css">
.dvHome{
    width:100%;
    height: 100%;
    float: left;
}
.dvsubnav
{
    height: 40px;
    display: flex;
    margin:0px 0px;
    padding: 0px 0px;
}
.subnav
{
    display: block;
    height: 40px;
    width:100%;
    margin:0px 0px;
    padding: 0px 0px;

}
.subnav li
{
    list-style: none;width:100%;
}
.subnav li a
{
    float:left;
    
    line-height: 40px;
    width:200px;
    text-align: center;
    margin-left:20px;
    color:black;
}
.dvsubcontent
{
    height: 200px;
    width:100%;
    display: flex;
    background-color: darkgray;
}
</style>