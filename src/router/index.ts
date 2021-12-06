import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'

import Home from '@/views/Home.vue'
import Test from '@/views/Test.vue'
import Svgicon from '@/views/Svgicon.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/axios',
        name: 'Axios',
        component: () => import('@/views/Axios.vue') // 懒加载 Axios 组件
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    },
    {
        path: '/icon',
        name: 'Svgicon',
        component: Svgicon
    }
]

const router: Router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
