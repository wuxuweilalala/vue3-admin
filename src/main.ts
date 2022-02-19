import { createApp } from 'vue'
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './routes'
import store from './store'
import '@/styles/index.scss'

const app = createApp(App)
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')
