1. 全局安装 npm install -g @vue/cli
2. <font color='red'>切换到需要创建项目的目录</font>，然后创建项目 vue create 项目名称
3. 进入项目目录，启动项目 npm serve
4. vue.js 与 vue.runtime.mini.js 的区别
    1. vue.js 是完整版的 vue，包含核心功能+模板解析器
    2. vue.runtime.mini.js 是运行时版本，只包含核心功能，没有模板解析器
5. vue.runtime.mini.js 因为没有模板解析器，所以不能使用 template 配置项，需要 render 函数接收到的 createElement 函数去指定具体内容

```js
new Vue({
    render: (h) => h(App)
}).$mount('#app');
```
