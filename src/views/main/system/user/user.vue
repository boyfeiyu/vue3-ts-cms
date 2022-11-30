<script setup lang="ts">
import UserSearch from './c-cpns/user-search.vue'
import UserContent from './c-cpns/user-content.vue'
import UserModal from './c-cpns/user-modal.vue'
import { ref } from 'vue'

// 对content组件的操作
const contentRef = ref<InstanceType<typeof UserContent>>()

function handleQueryClick(formData: any) {
  console.log('@@', formData)
  contentRef.value?.fetchUserListData(formData)
}
function handleResetClick() {
  contentRef.value?.fetchUserListData()
}

// 弹出对话框
const modalRef = ref<InstanceType<typeof UserModal>>()

function handleNewUserClick() {
  modalRef.value?.setModalVisable()
}
</script>

<template>
  <div class="user">
    <user-search
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />
    <user-content ref="contentRef" @new-user-click="handleNewUserClick" />
    <user-modal ref="modalRef" />
  </div>
</template>

<style lang="less" scoped>
.user {
  border-radius: 8px;
  overflow: hidden;
}
</style>
