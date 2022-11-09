import { createApp } from 'vue'
import 'normalize.css'
import '@/assets/css/index.less'
import App from './App.vue'
import router from '@/router/index'
import pinia from '@/store/index'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
