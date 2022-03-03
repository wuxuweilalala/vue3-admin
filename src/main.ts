import { createApp } from 'vue'
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './routes'
import store from './store'
import 'normalize.css/normalize.css'
import '@/styles/index.scss'
import 'virtual:svg-icons-register'
import initSvgIcon from '@/icons/index'

const app = createApp(App)
app.use(ElementPlus)
app.use(store)
app.use(router)
app.use(initSvgIcon)
app.mount('#app')
