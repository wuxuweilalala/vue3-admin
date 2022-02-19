import { createApp } from 'vue'
import ElementPlus from 'element-plus'

import App from './App.vue'
import './routes'

const app =  createApp(App)
app.use(ElementPlus)
app.mount('#app')
