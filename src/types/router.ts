import 'vue-router'

/** 扩展路由 meta 类型 */
declare module 'vue-router' {
    interface RouteMeta {
        /** 页面标题 */
        title?: string
        /** 是否需要登录 */
        requiresAuth?: boolean
        /** 是否在导航中隐藏 */
        hidden?: boolean
    }
}

export {}
