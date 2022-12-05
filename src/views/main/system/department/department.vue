<script setup lang="ts">
import PageSearch from './c-cpns/page-search.vue'
import PageContent from './c-cpns/page-content.vue'
import PageModal from './c-cpns/page-modal.vue'
import { ref } from 'vue'

const contentRef = ref<InstanceType<typeof PageContent>>()
const handleQueryClick = (formData: any) => {
  contentRef.value?.fetchPageListData('department', formData)
}
const handleResetClick = () => {
  contentRef.value?.fetchPageListData()
}
</script>

<template>
  <div class="department">
    <page-search
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />
    <page-content ref="contentRef" />
    <page-modal />
  </div>
</template>

<style lang="less" scoped>
.department {
}
</style>
