/*
    vue插件
    1. 包含install方法的对象，install的第一个参数是vue，第二个以后得参数是插件使用者传递的数据
    2. 插件可以给vue添加实例方法、实例属性
    3. 使用插件： 在创建Vue实例前 Vue.use(plugins, { value1: 'value1', value2: 'value2' });
    4. 插件也可以 添加全局过滤器、添加全局指令、添加全局混入
*/
export default {
    install(Vue, options) {
        console.log('install 插件');
        console.log('options', options);
        //添加实例方法、实例属性
        Vue.prototype.pluginMethod = function (value) {
            console.log('invoke plugins myMethod');
            console.log('myMethod param value', value);
        };
        Vue.prototype.pluginPrototype = 'odinsam plugins';
        //添加全局过滤器
        Vue.filter('odinFilter', function (value) {
            console.log('odinFilter 被调用');
            return value + '-odinFilter 被调用';
        });
        //添加全局指令
        Vue.directive('big', {
            bind(ele, binding) {
                console.log(
                    '1次调用 - 当指令与元素绑定成功时调用，在内存，页面并没有元素'
                );
                console.log('binding', binding);
                ele.innerText = 'v-big指令显示' + binding.value;
            },
            inserted(ele, binding) {
                console.log('1或n次调用 - 指令所在的元素被插入页面时调用');
            },
            update(ele, binding) {
                console.log('1或n次调用: 当指令所在模板被重新解析时');
            }
        });
        //添加全局混入
        Vue.mixin({
            data() {
                return {
                    pluginMixinValue: 'plugins mixin data'
                };
            }
        });
    }
};
