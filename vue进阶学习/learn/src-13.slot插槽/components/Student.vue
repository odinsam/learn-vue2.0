<template>
    <div class="studv">
        <h2>{{title}}</h2>
        <slot :stus="stus" msg="作用域"></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            stus: [
                { id: 1, name: "odinsam1" },
                { id: 2, name: "odinsam2" },
                { id: 3, name: "odinsam3" }
            ]
        }
    },
    props: ['title']
}
</script>

<style lang="css">
.studv{
    background-color:bisque;
    width:400px;
}
</style>