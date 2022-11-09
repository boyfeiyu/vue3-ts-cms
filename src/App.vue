<script setup lang="ts">
import { getHomeData } from './service/modules/home'
getHomeData().then((res) => {
  console.log(res)
})
</script>
<template>
  <router-link to="/login">login</router-link>
  <router-link to="/main">main</router-link>
  <router-view />
</template>

<style lang="less" scoped></style>
