<script setup lang="ts">
import { ref } from 'vue'

const dialogVisible = ref(false)
function setModalVisable() {
  dialogVisible.value = true
}
defineExpose({ setModalVisable })
</script>

<template>
  <div class="user-modal">
    <el-dialog v-model="dialogVisible" title="Tips" width="30%">
      <span>This is a message</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="less" scoped>
.user-modal {
}
</style>
