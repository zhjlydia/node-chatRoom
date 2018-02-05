/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';

Vue.use(VueRouter);

// 路由配置
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: require('./pages/room.vue')
        },{
            path: '/room',
            component: require('./pages/room.vue')
        }
    ]
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});