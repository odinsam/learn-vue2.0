import VueRouter from 'vue-router';

import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import News from '../pages/News.vue';
import Message from '../pages/Message.vue';
import Detail from '../pages/detail.vue';

const router = new VueRouter({
    //路由工作的两种模式 默认是hash模式 mode改变模式为history模式
    mode: 'history',
    routes: [
        {
            path: '/home',
            component: Home,
            children: [
                //不需要写父路径 以及 /
                {
                    path: 'news',
                    component: News,
                    children: [
                        {
                            name: 'detail',
                            path: 'detail',
                            component: Detail
                        },
                        {
                            name: 'detailid',
                            path: 'detail/:id',
                            component: Detail
                        },
                        {
                            name: 'detailprops',
                            path: 'detail',
                            component: Detail,
                            //给details组件传递对象，所有数据在details中可以以props的方式接收
                            // props:{a:1,b:2}
                            //如果props是true，则路由收到的params参数会以props的形式传递 即 id 会以props方式传递
                            // props:true
                            // 如果props是函数，则路由同样以props的形式传递参数给组件，但是这可以通过route结构获取到query并传参（此处使用解构赋值的连续写法 先从route中结构获取query，再从query中结构出id，title
                            props({ query: { id } }) {
                                return { id };
                            }
                        }
                    ],
                    //路由原信息
                    meta: { isAuth: true, title: '消息' },
                    beforeRouteEnter(to, from, next) {
                        // ...
                        next();
                    }
                },
                { path: 'messages', component: Message }
            ]
        },
        {
            path: '/about',
            component: About
        }
    ]
});
//路由守卫分为 全局前置路由守卫、全局后置路由守卫、独享守卫、组件内守卫
//全局前置路由守卫 - 初始化、每次路由切换时被调用
router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        //判断权限
        if (localStorage.getItem('token') === 'odinsam') next();
        else alert('undefind token');
    } else next();
});

//全局后置路由守卫 - 初始化、每次路由切换时被调用
router.afterEach((to, from) => {
    document.title = to.meta.title || 'index';
});

export default router;
