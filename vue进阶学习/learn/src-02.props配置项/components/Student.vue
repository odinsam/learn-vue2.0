<template>
    <div class="studv">
        <h2>Student组件</h2>
        <span>姓名：{{stuName}}</span><br />
        <span>年龄：{{myAge}}</span><br />
        <span>班级：{{className}}</span><br />
        <button @click="changeAge">修改姓名</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            myAge:this.age
        }
    },
    methods: {
        changeAge() {
            this.myAge++
        }
    },
    // 简单接收
    // props: ['stuName', 'age']

    // 接收的同时限制数据类型
    /*
    props: {
        stuName: String,
        age: Number,
    }
     */

    props: {
        stuName: {
            type: String,
            required:true,
        },
        age: {
            type: Number,
            required:true,
        },
        className: {
            type: String,
            default:"1班",
        }
    }
}
</script>

<style lang="css">
.studv{
    background-color:bisque;
    width:200px;
    padding:50px;
    margin-left:50px;
}
</style>