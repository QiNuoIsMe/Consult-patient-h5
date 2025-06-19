<script setup lang="ts">
import { Button as VanButton } from 'vant'
import { useUserStore } from './stores'
const store = useUserStore()
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
