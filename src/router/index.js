// 路由器模块
import Vue from 'vue'
import VueRouter from 'vue-router'
// 声明使用插件
Vue.use(VueRouter)

// 导入路由
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'

import Login from '../pages/Login/Login.vue'

// 向外暴露一个路由器对象
export default new VueRouter({
    // 配置所有路由
    routes: [
        {
            path: '/msite',
            component: Msite,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/order',
            component: Order,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/',
            redirect: '/msite',
            meta: {
                showFooter: true
            }
        },
        {
            path: '/login',
            component: Login
        }
    ]
})