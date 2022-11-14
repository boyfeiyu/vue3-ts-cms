<script setup lang="ts"></script>

<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside width="210px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
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
      background-color: pink;
    }
    .el-aside {
      background-color: aqua;
    }
    .el-main {
      background-color: azure;
    }
  }
}
</style>
