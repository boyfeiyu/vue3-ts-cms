<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
import useLoginStore from '@/store/login/login'
import { mapPathToBreadcrumbs } from '@/utils/map-usermenus-routes'
import { computed } from 'vue'
// 处理折叠按钮点击
const isFold = ref(false)
const emit = defineEmits(['foldChange'])
function handelMenuIconClick() {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
// 面包屑
const loginStore = useLoginStore()
const route = useRoute()
const breadcrumbs = computed(() =>
  mapPathToBreadcrumbs(route.path, loginStore.userMenus)
)
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
      <div class="breadcrumb">
        <el-breadcrumb :separator-icon="ArrowRight">
          <template v-for="item in breadcrumbs" :key="item.path">
            <el-breadcrumb-item :to="item.path">
              {{ item.name }}
            </el-breadcrumb-item>
          </template>
        </el-breadcrumb>
      </div>
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
