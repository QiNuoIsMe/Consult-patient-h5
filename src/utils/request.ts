import router from '@/router'
import { useUserStore } from '@/stores'
import axios, { AxiosError, type Method } from 'axios'
import { showToast } from 'vant'

const instance = axios.create({
  //1，基础地址，超时时间
  baseURL: 'https://consult-api.itheima.net/',
  timeout: 10000
})
instance.interceptors.request.use(
  (config) => {
    //2.携带token
    const store = useUserStore()
    //ts项目这里要加类型守卫&& config.headers，防止headers为undefined
    if (store.user?.token && config.headers) {
      //如果用户有token,则设置请求头
      config.headers.Authorization = `Bearer ${store.user.token}`
    }
    return config
  },
  (err) => Promise.reject(err)
)

instance.interceptors.response.use(
  (res) => {
    //3.处理业务失败
    if (res.data.code !== 10000) {
      //错误提示
      showToast(res.data.message || '业务失败')
      //返回错误的提示
      return Promise.reject(res.data)
      //传入 code 将来catch的时候可以使用
    }
    //  4.摘取核心响应数据——修改了响应结构
    return res.data
  },
  (err: AxiosError) => {
    //设置err类型，不然其类型会是any
    //TOD0 5. 处理401错误
    if (err.response?.status === 401) {
      //清除用户信息
      const store = useUserStore()
      store.delUser()
      //跳转登陆页面，携带当前访问页面的地址(包含参数的)
      router.push({
        path: '/login',
        query: { returnUrl: router.currentRoute.value.fullPath }
      })
    }
    return Promise.reject(err)
  }
)

export default instance
//类型别名
type Data<T> = {
  code: number
  message: string
  data: T
}

//封装请求函数
export const request = <T>(
  url: string,
  method: Method = 'GET',
  submitData?: object //?表示可选，可以传这个参数，也可以不传
) => {
  //参数：地址，请求方式，提交的数据
  //返回: promise
  return instance.request<any, Data<T>>({
    url,
    method,
    //[]表示动态参数，当请求方式为GET时是params，其他请求方式为data，参数值为submitData
    [method.toUpperCase() === 'GET' ? 'params' : 'data']: submitData
  })
}
