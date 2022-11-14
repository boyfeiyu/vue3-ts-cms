<script setup lang="ts">
import { localCache } from '@/utils/cache'
import { ref, watch } from 'vue'
import PaneAccount from './pane-account.vue'
import PanePhone from './pane-phone.vue'

// 记住密码
const isKeepPwd = ref<boolean>(localCache.getCache('login/isKeepPwd') ?? false)
watch(isKeepPwd, (isKeepPwdNew) => {
  localCache.setCache('login/isKeepPwd', isKeepPwdNew)
  if (!isKeepPwdNew) {
    localCache.removeCache('login/name')
    localCache.removeCache('login/password')
  }
})
// 账号登录/手机登录
const activeName = ref('account')
// 登录按钮点击事件
const paneAccountRef = ref<InstanceType<typeof PaneAccount>>()
const panePhoneRef = ref()
function handleLoginBtnClick() {
  if (activeName.value === 'account') {
    console.log('用户使用账号登录')
    paneAccountRef.value?.loginAction(isKeepPwd.value)
  } else {
    console.log('用户使用手机登录')
  }
}
</script>

<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <div class="tabs">
      <el-tabs type="border-card" v-model="activeName" stretch>
        <el-tab-pane name="account">
          <!-- tab标题插槽 -->
          <template #label>
            <el-icon class="icon">
              <Avatar />
            </el-icon>
            <span class="text">帐号登录</span>
          </template>
          <!-- account-pane -->
          <pane-account ref="paneAccountRef" />
        </el-tab-pane>
        <el-tab-pane name="phone">
          <!-- tab标题插槽 -->
          <template #label>
            <el-icon class="icon"><Iphone /></el-icon>
            <span class="text">手机登录</span>
          </template>
          <!-- pane-phone-->
          <pane-phone ref="panePhoneRef" />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="controls" v-show="activeName === 'account'">
      <el-checkbox v-model="isKeepPwd" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button
      class="login-btn"
      type="primary"
      size="large"
      @click="handleLoginBtnClick"
    >
      立即登录
    </el-button>
  </div>
</template>

<style lang="less" scoped>
.login-panel {
  width: 330px;
  display: flex;
  flex-direction: column;
  .title {
    text-align: center;
  }
  .controls {
    display: flex;
    justify-content: space-between;
  }
  .tabs {
    .icon {
      position: relative;
      top: 1px;
    }
    .text {
      margin-left: 5px;
    }
  }
  .login-btn {
  }
}
</style>
