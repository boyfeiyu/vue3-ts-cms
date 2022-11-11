<script setup lang="ts">
import type { IAccount } from '@/types'
import { reactive, ref } from 'vue'
import useLoginStore from '@/store/login/login'
import { ElForm, ElMessage } from 'element-plus'
import { localCache } from '@/utils/cache'

// 定义账户信息
const account = reactive<IAccount>({
  name: localCache.getCache('login/name') ?? '',
  password: localCache.getCache('login/password') ?? ''
})
// 制定校验规则
const formRules = {
  name: [
    { message: '帐号是必填的哦~', required: true, trigger: 'blur' },
    {
      message: '必须是6-20位的数字和字母',
      pattern: /^[0-9a-zA-Z]{6,20}$/,
      trigger: 'change'
    }
  ],
  password: [
    { message: '密码是必填的哦~', required: true, trigger: 'blur' },
    {
      message: '必须是6-20位的数字和字母',
      pattern: /^[0-9a-zA-Z]{6,20}$/,
      trigger: 'change'
    }
  ]
}
// 执行登录逻辑
const loginStore = useLoginStore()
const formRef = ref<InstanceType<typeof ElForm>>()
async function loginAction(isKeepPwd: boolean) {
  formRef.value
    ?.validate()
    .then(() => {
      loginStore
        .loginAccountAction({
          name: account.name,
          password: account.password
        })
        // 登陆成功后判断是否记住密码
        .then(() => {
          if (isKeepPwd) {
            localCache.setCache('login/name', account.name)
            localCache.setCache('login/password', account.password)
          }
        })
    })
    .catch(() => {
      ElMessage.error('信息输入有误，请检查后再试')
    })
}
defineExpose({ loginAction })
</script>

<template>
  <div class="pane-account">
    <el-form
      ref="formRef"
      :model="account"
      :rules="formRules"
      label-width="60px"
    >
      <el-form-item prop="name" label="帐号">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input show-password v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="less" scoped>
.pane-account {
}
</style>
