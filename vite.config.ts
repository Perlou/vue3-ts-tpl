/// <reference types="vitest/config" />
import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')

    return {
        plugins: [
            vue(),
            AutoImport({
                resolvers: [ElementPlusResolver()]
            }),
            Components({
                resolvers: [ElementPlusResolver()]
            })
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        base: './',
        server: {
            port: Number(env.VITE_PORT) || 4001,
            open: true,
            cors: true

            // 设置代理，根据项目实际情况配置
            // proxy: {
            //   '/api': {
            //     target: env.VITE_API_BASE_URL,
            //     changeOrigin: true,
            //     secure: false,
            //     rewrite: (path) => path.replace('/api/', '/')
            //   }
            // },
        },
        build: {
            sourcemap: mode !== 'production',
            // 生产环境移除 console 和 debugger
            minify: 'esbuild',
            esbuild:
                mode === 'production' ? { drop: ['console', 'debugger'] } : undefined
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "@/style/base" as *;\n`,
                    api: 'modern-compiler'
                }
            }
        },
        // Vitest 配置
        test: {
            environment: 'jsdom',
            exclude: ['node_modules', 'dist', 'e2e/**'],
            root: fileURLToPath(new URL('./', import.meta.url))
        }
    }
})
