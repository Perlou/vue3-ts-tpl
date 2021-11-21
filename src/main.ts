import { createApp } from 'vue'
import App from './App.vue'
import elPlus from '@/utils/element-plus'
import router from '@/router/index'
import '@/style/app.scss'

const app = createApp(App)
elPlus(app).use(router).mount('#app')
