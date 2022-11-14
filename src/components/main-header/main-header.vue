<script setup lang="ts">
import { ref } from 'vue'

const isFold = ref(false)
const emit = defineEmits(['foldChange'])
function handelMenuIconClick() {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>

<template>
  <div class="main-header">
    <div class="menu-icon" @click="handelMenuIconClick">
      <el-icon>
        <template v-if="isFold">
          <Expand />
        </template>
        <template v-else>
          <Fold />
        </template>
      </el-icon>
    </div>
    <div class="content">
      <div class="left">面包屑</div>
      <div class="user-info">个人信息</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.main-header {
  height: 100%;
  display: flex;
  align-items: center;
}
.menu-icon {
  font-size: 28px;
  line-height: 28px;
}
.content {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
