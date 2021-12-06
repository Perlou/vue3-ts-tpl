import { VueSvgIconPlugin } from '@yzfe/vue3-svgicon'
import { createApp } from 'vue'
import App from './App.vue'
import elPlus from '@/utils/element-plus'
import router from '@/router/index'
import '@/style/app.scss'
import '@yzfe/svgicon/lib/svgicon.css'

const app = createApp(App)
elPlus(app)
    .use(router)
    .use(VueSvgIconPlugin, {
        tagName: 'icon'
    })
    .mount('#app')
