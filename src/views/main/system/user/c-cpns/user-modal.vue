<script setup lang="ts">
import useMainStore from '@/store/main/main'
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'
import { reactive, ref } from 'vue'

// useSystemStore
const systemStore = useSystemStore()

const dialogVisible = ref(false)
function setModalVisable(isNew = true, itemData?: any) {
  isNewRef.value = isNew
  if (!isNew && itemData) {
    for (const key in formData) {
      formData[key] = itemData[key]
    }
    editData.value = itemData
  } else {
    for (const key in formData) {
      formData[key] = ''
    }
  }
  dialogVisible.value = true
}
defineExpose({ setModalVisable })

// form部分
const formData: any = reactive({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  roleId: '',
  departmentId: ''
})

const mainStore = useMainStore()

const { entireRoles, entireDepartments } = storeToRefs(mainStore)

// 编辑数据
const isNewRef = ref(false)
const editData = ref()

///
function handleConfirmClick() {
  if (isNewRef.value) {
    systemStore.postNewUserAction(formData)
  } else {
    systemStore.editUserByIdAction(editData.value.id, formData)
  }
  dialogVisible.value = false
}
</script>

<template>
  <div class="user-modal">
    <el-dialog
      v-model="dialogVisible"
      :title="isNewRef ? '新建用户' : '编辑用户'"
      width="30%"
    >
      <div class="form">
        <el-form :model="formData" label-width="80px" size="large">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="formData.name" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item label="真实姓名" prop="realname">
            <el-input
              v-model="formData.realname"
              placeholder="请输入真实姓名"
            />
          </el-form-item>
          <el-form-item label="密码" prop="password" v-if="isNewRef">
            <el-input
              v-model="formData.password"
              placeholder="请输入密码"
              show-password
            />
          </el-form-item>
          <el-form-item label="手机号码" prop="cellphone">
            <el-input
              v-model="formData.cellphone"
              placeholder="请输入手机号码"
            />
          </el-form-item>
          <el-form-item label="选择角色" prop="roleId">
            <el-select
              v-model="formData.roleId"
              placeholder="请选择角色"
              style="width: 100%"
            >
              <template v-for="item in entireRoles" v-bind:key="item.id">
                <el-option :label="item.name" :value="item.id">
                  {{ item.name }}
                </el-option>
              </template>
            </el-select>
          </el-form-item>
          <el-form-item label="选择部门" prop="departmentId">
            <el-select
              v-model="formData.departmentId"
              placeholder="请选择部门"
              style="width: 100%"
            >
              <template v-for="item in entireDepartments" v-bind:key="item.id">
                <el-option :label="item.name" :value="item.id">
                  {{ item.name }}
                </el-option>
              </template>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="less" scoped>
.user-modal {
}
</style>
