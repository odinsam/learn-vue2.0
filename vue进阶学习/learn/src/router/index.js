import VueRouter from 'vue-router';

import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import News from '../pages/News.vue';
import Message from '../pages/Message.vue';
import Detail from '../pages/detail.vue';

export default new VueRouter({
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
                            path: 'detail/:id',
                            component: Detail
                        }
                    ]
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
