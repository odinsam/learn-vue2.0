<template>
    <!--
        nextTick与props传递函数
        1. this.$nextTick(回调函数) 下一次dom更新结束后执行回调函数
        2. 使用时机： 当改变数据后，要基于更新后的新dom进行某些操作时，使用nextTick利用回调函数执行操作
        3. 父组件可以通过props给子组件传递函数，当子组件执行函数回调时，回传数据达到子组件向父组件传递数据的目的
    -->
    <div class="studv">
        <h2>Student组件</h2>

        <span v-if="!isEdit">姓名：{{stuName}}</span>
        <span v-else><input ref="txtStuName" type="text" v-model="stuName"></span>
        <br/>
        <button @click="editOrOkClick">{{btnText[isEdit]}}</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isEdit:false,
            stuName: 'odinsam',
            btnText:{true:'确定',false:'编辑'}
        }
    },
    //app组件传递的回调函数
    props:['getStuName'],
    methods: {
        editOrOkClick() {
            if (this.isEdit)
            {
                //子组件调用父组件通过props传递的回调函数向父组件传递数据
                this.getStuName({stuName:this.stuName});
            }
            this.isEdit = !this.isEdit;
            // 在本次操作执行完成dom修改后，执行回调函数，使新出现的文本框获得焦点
            this.$nextTick(function () {
                if (this.isEdit) {
                    this.$refs.txtStuName.focus();
                }
            })
            
        }
    },
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