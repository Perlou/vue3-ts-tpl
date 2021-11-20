import { createApp } from 'vue'
import App from './App.vue'
import elPlus from '@/utils/element-plus'
import '@/style/app.scss'

const app = createApp(App)
elPlus(app).mount('#app')
