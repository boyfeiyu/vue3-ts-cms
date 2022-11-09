<script setup lang="ts">
import useCounterStore from '@/store/counter'
const counterStore = useCounterStore()
</script>

<template>
  <div class="login">
    <h2>{{ counterStore.counter }}</h2>
    <el-button type="primary">Primary</el-button>
  </div>
</template>

<style lang="less" scoped></style>
