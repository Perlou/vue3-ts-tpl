import '@/types/router'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

// NProgress 配置
NProgress.configure({ showSpinner: false })

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('@/views/Home.vue'),
                meta: { title: 'Home' }
            },
            {
                path: 'axios',
                name: 'Axios',
                component: () => import('@/views/Axios.vue'),
                meta: { title: 'Axios' }
            },
            {
                path: 'test',
                name: 'Test',
                component: () => import('@/views/Test.vue'),
                meta: { title: 'Test' }
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue'),
        meta: { title: '404', hidden: true }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 全局前置守卫
router.beforeEach((to, _from, next) => {
    NProgress.start()

    // 设置页面标题
    const title = to.meta.title
    if (title) {
        document.title = `${title} - ${import.meta.env.VITE_APP_TITLE}`
    }

    // 权限校验示例（根据项目实际需求修改）
    // if (to.meta.requiresAuth && !isLoggedIn()) {
    //     next({ name: 'Login' })
    //     return
    // }

    next()
})

// 全局后置守卫
router.afterEach(() => {
    NProgress.done()
})

export default router
