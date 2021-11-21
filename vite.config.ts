import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import importElementPlus from 'vite-plugin-element-plus'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), importElementPlus({})],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    base: './',
    server: {
        port: 4001,
        open: true,
        cors: true

        // 设置代理，根据项目实际情况配置
        // proxy: {
        //   '/api': {
        //     target: 'http://xxx.xxx.xxx.xxx:x000',
        //     changeOrigin: true,
        //     secure: false,
        //     rewrite: (path) => path.replace('/api/', '/')
        //   }
        // },
    }
})
