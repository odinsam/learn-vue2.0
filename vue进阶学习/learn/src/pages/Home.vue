<template>
    <div class="dvHome">
        <h2>Home组件</h2>
        <div class="dvsubnav">
            <ul class="subnav">
                <li>
                    <router-link to="/home/news">News</router-link>
                    <router-link to="/home/messages">Message</router-link>
                </li>
            </ul>
        </div>
        <div class="dvsubcontent">
            <router-view></router-view>
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
}
.subnav
{
    display: block;
    
    height: 40px;
}
.subnav li
{
    list-style: none;
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
    background-color: darkgray;
}
</style>