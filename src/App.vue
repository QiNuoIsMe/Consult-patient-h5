<script setup lang="ts">
import { Button as VanButton } from 'vant'
import { useUserStore } from './stores'
// import axios from './utils/request'
import type { User } from './types/user'
import { request } from './utils/request'
const store = useUserStore()

const getUser = () => {
  // axios.request({
  //   url: 'patient/myUser',
  //   method: 'get'
  // })
  request('patient/myUser', 'GET', { test: 1 })
}

const login = () => {
  // axios
  //   .request({
  //     url: 'login/password',
  //     method: 'post',
  //     data: {
  //       mobile: '13211112222',
  //       password: 'abc12345'
  //     }
  //   })
  request<User>('login/password', 'POST', {
    mobile: '13211112222',
    password: 'abc12345'
  })
    .then((res) => {
      console.log('成功', res)
    })
    .catch((err) => {
      console.log('失败', err)
    })
}
</script>

<template>
  <div>
    App{{ store.user }}
    <van-button
      @click="
        store.setUser({
          id: '1',
          avatar: '1',
          token: '1',
          mobile: '1',
          account: '1'
        })
      "
      type="primary"
      >登录</van-button
    >
    <van-button @click="store.delUser()" type="primary">退出</van-button>
    <van-button @click="getUser()">获取用户信息</van-button>
    <van-button @click="login">接口登录</van-button>
  </div>
  <!-- <div class="main">main</div>
  <div class="footer">footer</div> -->
</template>

<!-- <style>
.main {
  color: var(--cp-primary);
  background-color: var(--footer-color);
}

.footer {
  color: var(--main-color);
  background-color: var(--footer-color);
}
</style> -->

<!-- .main{
  color: var(--main-color);
  background-color: var(--footer-color);
}

.footer{
  color: var(--main-color);
  background-color:var(--footer-color);
} -->
