<script setup lang="ts">
import { postUserList } from '@/service/main/system/system'
import useSystemStore from '@/store/main/system/system'
import { Search, Refresh } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'

const systemStore = useSystemStore()

const { userSearch } = storeToRefs(systemStore)

// 重置表单
const handelResetClick = () => {
  userSearch.value.name = ''
  userSearch.value.realname = ''
  userSearch.value.cellphone = ''
  userSearch.value.enable = undefined
  userSearch.value.createdAt = []
}

// 查询
const handelSearchClick = async () => {
  const userListRes = await postUserList(userSearch.value)
  const userList = userListRes.data.list
  console.log(userList)
}
</script>

<template>
  <div class="search">
    <el-form :model="userSearch" label-width="80px">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="用户名">
            <el-input v-model="userSearch.name" size="large" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="真实姓名">
            <el-input v-model="userSearch.realname" size="large" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="手机号码">
            <el-input v-model="userSearch.cellphone" size="large" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="状态">
            <el-select
              size="large"
              placeholder="请选择状态"
              style="width: 100%"
              v-model="userSearch.enable"
            >
              <el-option label="启用" :value="1" />
              <el-option label="禁用" :value="0" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间">
            <el-date-picker
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              size="large"
              v-model="userSearch.createdAt"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="control">
      <el-button size="large" :icon="Refresh" @click="handelResetClick">
        重置
      </el-button>
      <el-button
        type="primary"
        size="large"
        :icon="Search"
        @click="handelSearchClick"
      >
        查询
      </el-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.search {
  background-color: #fff;

  .el-form {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    .el-form-item {
      padding: 20px;
      margin-bottom: 0;
    }
    .el-row {
      width: 100%;
    }
  }
  .control {
    padding-right: 60px;
    padding-bottom: 40px;
    text-align: right;
  }
}
</style>
