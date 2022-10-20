<template>
  <div class="dvapp">
    <!--
        slot插槽
        1. 让父组件可以向子组件指定的位置插入html结构，也是一种组件间通信的方式，适用于 父组件给子组件传递数据
        2. 插槽分为 默认插槽、具名插槽、作用域插槽
        3. 默认插槽: 数据定义在父组件中
            父组件  
            <Category title="美食">
                html结构
            </Category> 
            子组件 
            <template>
                <slot></slot>
            </template>
        4. 具名插槽: 数据定义在父组件中
            父组件  
            <Category title="美食">
                <template slot='插槽名称'>
                    html结构
                </template>
                <template v-slot:插槽名称2>
                    html结构
                </template>
            </Category> 
            子组件 
            <template>
                <slot name='插槽名称1'></slot>
                <slot name='插槽名称2'></slot>
            </template>
        5. 作用域插槽:数据定义在子组件中
            父组件  
            <Category title="美食">
                <template slot-scope="{stus,msg}">
                    html结构
                </template>
                <template v-slot:插槽名称2>
                    html结构
                </template>
            </Category> 
            子组件
            <template>
                <slot :stus="子组件数据" msg="作用域"></slot>
            </template>
    -->
    <h2>app组件</h2>
    <div class="dvslot">
        <Category title="美食">
            <img slot="center" src="https://s2.ax1x.com/2021/01/16/srJ1q0.jpg" style="width:100%;" alt="美食" />
            <div class="footer" slot="footer">
                <a href="http://odinsam.com">热门美食</a><a href="http://odinsam.com">更多美食</a>
            </div>
        </Category>
        <Category title="游戏">
            <ul slot="center">
                <li v-for="(g,index) in games" :key="index">{{g}}</li>
            </ul>
            <a class="footer" slot="footer" href="http://odinsam.com">热门游戏</a>
        </Category>
        <Category title="影视">
            <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
            <template  v-slot:footer>
                <div class="footer">
                    <a href="http://odinsam.com">热门</a>
                    <a href="http://odinsam.com">经典</a>
                    <a href="http://odinsam.com">推荐</a>
                </div>
                <h4>欢迎观看</h4>
            </template>
        </Category>
        <Student title="作用于插槽">
            <template slot-scope="{stus,msg}">
                <ul slot="center">
                    <h4 v-for="stu in stus" :key="stu.id">{{stu.name}}</h4>
                </ul>
                <h4>{{msg}}</h4>
            </template>
        </Student>
    </div>
  </div>
</template>

<script>
import Category from './components/Category.vue';
import Student from './components/Student.vue';
export default {
    name: 'App',
    data() {
        return {
            'foods': ['火锅', '小龙虾', '牛排', '烧烤'],
            'games': ['魔兽', '炉石', '暗黑', '星际'],
            'films':['西游','三国','红楼梦','水浒']
        }
    },
    components: {
        Category,Student
    },
    methods: {
        
    },
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
.dvslot
{
    display: flex;
    justify-content: space-evenly;
}
video{
    width:100%;
}
.footer
{
    text-align: center;
}
</style>
