<script setup lang="ts">
import useLoginStore from '@/store/login/login'

const loginStore = useLoginStore()
const userMenus = loginStore.userMenus
defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="main-menu">
    <div class="logo">
      <img class="logo-img" src="@/assets/img/logo.svg" />
      <template v-if="!isFold">
        <h2 class="title">Vue3-TS-CMS</h2>
      </template>
    </div>
    <div class="menu">
      <el-menu
        default-active="39"
        background-color="#001529"
        text-color="#b7bdc3"
        active-text-color="#ffffff"
        mode="vertical"
        :collapse="isFold"
        :collapse-transition="false"
      >
        <template v-for="item in userMenus" :key="item.id">
          <el-sub-menu :index="String(item.id)">
            <template #title>
              <el-icon>
                <component :is="item.icon.split('-icon-')[1]" />
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="cItem in item.children" :key="cItem.id">
              <el-menu-item :index="String(cItem.id)">
                {{ cItem.name }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<style lang="less" scoped>
.main-menu {
  height: 100%;
  background-color: #0c2135;
}
.logo {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  background-color: #001529;

  .logo-img {
    width: 32px;
    flex-shrink: 0;
  }
  .title {
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    /* 文字一行显示 */
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
}
.el-menu {
  border-right: none !important;
}
.el-menu-item {
  background-color: #0c2135;
}
.el-menu-item.is-active {
  background-color: #0a60bd;
}
.el-menu-item:hover {
  color: #fff;
}
</style>
