import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
//在main.css之前引入，后面需要去覆盖vant
import 'vant/lib/index.css'
import './styles/main.scss'

import pinia from './stores'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
