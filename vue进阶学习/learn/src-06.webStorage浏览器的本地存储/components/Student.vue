<template>
    <div class="studv">
        <h2>Student组件</h2>
        <input type="text" v-model.lazy="addStuName" @keyup.enter="addStu"><br/>
        <ul>
            <li v-for="stu in stus" :key="stu.id">{{stu.stuName}}</li>
        </ul>
        <button @click="changeStuName">修改第一个学生的姓名</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            addStuName: '',
            //从localStorage中获取数据 如果为null则返回空数组。确保用户打开浏览器时显示的是上次保存在localStorage中的数据
            stus: JSON.parse(localStorage.getItem('stu')) || []
        }
    },
    methods: {
        addStu() {
            const newStu = { id: this.stus.length, stuName: this.addStuName };
            this.stus.push(newStu);
            this.addStuName=''
        },
        //修改第一个学生的姓名，此时需要开启深度监视，否则无法watch无法监视到stu内部的元素属性的修改，就无法触发监视事件（修改localStorage中的数据）
        changeStuName() {
            this.stus[0].stuName = this.stus[0].stuName+'change'
        }
    },
    watch: {
        stus: {
            //放弃watch的简写方式开启深度监视，确保当修改了stu数组内部元素的属性后依旧可以监视到数据改变并存储到localStorage中
            deep: true,
            handler(value) {
                localStorage.setItem('stu',JSON.stringify(value))
            }
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