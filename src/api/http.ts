// api 模块只是作为 demo，按项目实际需要替换掉就行

import axios from 'axios'
import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'

const ax: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 30000
})

// 前置拦截器（发起请求之前的拦截）
ax.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // 示例：从 localStorage 取 token 注入 header
        // const token = localStorage.getItem('token')
        // if (token) {
        //     config.headers.Authorization = `Bearer ${token}`
        // }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 后置拦截器（获取到响应时的拦截）
ax.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response && error.response.data) {
            const code = error.response.status
            const msg = error.response.data.message
            ElMessage.error(`Code: ${code}, Message: ${msg}`)
        } else {
            ElMessage.error(`${error}`)
        }
        return Promise.reject(error)
    }
)

export default ax
