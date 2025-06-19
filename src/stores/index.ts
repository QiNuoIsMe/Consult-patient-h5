import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

//1.创建pinia实例
//2.使用pinia插件
const pinia = createPinia()
pinia.use(persist)

export default pinia

// import { useUserStore } from './modules/user'
// export {useUserStore}
export * from './modules/user'
