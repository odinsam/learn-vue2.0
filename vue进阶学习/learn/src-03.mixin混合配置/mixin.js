export const mixin = {
    methods: {
        showName() {
            alert(this.name);
        }
    },
    mounted() {
        console.log(this.name + '组件挂载了');
    }
};

export const mixinData = {
    data() {
        return {
            value: 'mixin数据'
        };
    }
};
