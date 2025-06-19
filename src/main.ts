import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
//在main.css之前引入，后面需要去覆盖vant
import 'vant/lib/index.css'
import './styles/main.scss'

import persist from 'pinia-plugin-persistedstate'

const app = createApp(App)

app.use(createPinia().use(persist))
app.use(router)

app.mount('#app')
