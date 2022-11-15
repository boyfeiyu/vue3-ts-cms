import { createApp } from 'vue'
import 'normalize.css'
import '@/assets/css/index.less'
import App from './App.vue'
import store from '@/store/index'
import router from '@/router/index'
import icons from './global/register-icons'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(icons)
app.mount('#app')
