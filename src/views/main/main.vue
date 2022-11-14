<script setup lang="ts">
import MainMenu from '@/components/main-menu/main-menu.vue'
import MainHeader from '@/components/main-header/main-header.vue'
import { ref } from 'vue'

// 处理菜单折叠
const isFold = ref(false)
function handelFoldChange(value: boolean) {
  isFold.value = value
}
</script>

<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside :width="isFold ? '64px' : '210px'">
        <main-menu :is-fold="isFold" />
      </el-aside>
      <el-container>
        <el-header>
          <main-header @fold-change="handelFoldChange"></main-header>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
.main {
  height: 100%;
  .main-container {
    height: 100%;
    .el-header {
      height: 48px;
    }
    .el-aside {
      transition: width 0.1s ease;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .el-main {
      background-color: #f0f2f5;
    }
  }
}
</style>
