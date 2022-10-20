<template>
  <div>
    message page
    <div>
        <input type="text" v-model="message">
        <h2 ref="h2" :style="{opacity:opacity}">定时器效果</h2>
    </div>
  </div>
</template>

<script>
export default {
    name:'Message',
    data() {
        return {
            message: '',
            opacity:1,
        }
    },
    //激活
    activated() {
        this.timer=setInterval(() => {
            this.opacity -= 0.01
            if (this.opacity <= 0) this.opacity = 1
            
        }, 16);
    },
    //失活
    deactivated() {
        clearInterval(this.timer)
    },
    //当路由进入之前   通过路由规则，进入该组件时被调用
    beforeRouteEnter (to, from, next) {
        // ...
    },
    //当路由离开之前    通过路由规则，离开改组件时被调用
    beforeRouteLeave (to, from, next) {
        // ...
    } 
}
</script>

<style>

</style>