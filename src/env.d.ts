/// <reference types="vite/client" />

/** 环境变量类型声明 */
interface ImportMetaEnv {
    /** 应用标题 */
    readonly VITE_APP_TITLE: string
    /** API 基础地址 */
    readonly VITE_API_BASE_URL: string
    /** 开发服务器端口 */
    readonly VITE_PORT: string
    /** 是否开启 Mock */
    readonly VITE_USE_MOCK: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
