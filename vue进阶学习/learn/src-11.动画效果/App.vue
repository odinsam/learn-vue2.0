<template>
  <div class="dvapp">
    <!--
        动画效果
        1. 普通实现方式: 使用 @keyframes amName{ from{transform: translateX(-100%);}to{transform: translateX(0);}} 创建关键帧并定义动画
        2. 定义vue的进入动画  .name-enter-active{animation: odinAnimate 1s linear;}
        3. 定义vue的离开动画  .name-leave-active{animation: odinAnimate 1s linear reverse;}
        4. 使用transition包裹需要动画的组件,appear属性可以在组件第一次加载的时候执行enter动画

        过度动画
        1. 定义过度动画 .name-enter,.name-leave-to{transform: translateX(-100%);} 和 .name-leave .name-enter-to{transform: translateX(0);}
        2. 定义过滤效果 .name-enter-active,.name-leave-active{transition: 3s linear;}
        3. 多个元素需要相同的动画效果需要使用 transition-group

        第三方动画库 详见 https://animate.style/
        1. yarn add animate.css
        2. 引入 animate.css   import 'animate.css'
        3. 给需要动画的组件 添加 name='animate__animated animate__bounce'
        4. 添加 enter-active-class='动画名称'  leave-active-class='动画名称'
    -->
    <h2>app组件</h2>
    <button @click="showComponent">显示、隐藏组件</button>
    <!--动画效果-->
    <div>
        <transition name="odinam1" appear>
            <Student v-show="isShow"></Student>
        </transition>
    </div>
    <!--过度动画-->
    <div>
        <transition name="odinam2" appear>
            <Student v-show="isShow"></Student>
        </transition>
    </div>
    <!--组过度动画--> 
    <div>
        <transition-group name="odinam2" appear >
            <Student v-show="isShow" key="1"></Student>
            <Student v-show="!isShow" key="2"></Student>
        </transition-group>
    </div>
    <!--第三方动画库--> 
    <div>
        <transition-group name='animate__animated animate__bounce' appear enter-active-class='animate__shakeY'  leave-active-class='animate__bounceOutRight'>
            <Student v-show="isShow" key="1"></Student>
            <Student v-show="!isShow" key="2"></Student>
        </transition-group>
    </div>
  </div>
</template>

<script>
import Student from './components/Student.vue';
import 'animate.css'
export default {
    name: 'App',
    data() {
        return {
            isShow:true
        }
    },
    components: {
        Student
    },
    methods: {
        showComponent() {
            this.isShow = !this.isShow;
        }
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

.odinam2-enter-active,.odinam2-leave-active
{
    transition: 1s linear;
}
.odinam2-enter,.odinam2-leave-to
{
    transform: translateX(-100%);
}
.odinam2-enter-to,.odinam2-leave
{
    transform: translateX(0);
}

.odinam1-enter-active{
    animation: odinAnimate 1s linear;
}
.odinam1-leave-active{
    animation: odinAnimate 1s linear reverse;
}
@keyframes odinAnimate {
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0);
    }
}
</style>
