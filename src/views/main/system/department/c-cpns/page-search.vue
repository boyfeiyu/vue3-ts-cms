<script setup lang="ts">
import { Search, Refresh } from '@element-plus/icons-vue'
import { reactive } from 'vue'

// 定义自定义事件
const emit = defineEmits(['queryClick', 'resetClick'])

const pageSearchForm = reactive<any>({
  name: '',
  leader: '',
  createAt: ''
})
// 重置表单
const handelResetClick = () => {
  // 重制表单
  pageSearchForm.name = ''
  pageSearchForm.leader = ''
  pageSearchForm.createAt = ''
  // 触发自定义事件
  emit('resetClick')
}

// 查询
const handelQueryClick = () => {
  emit('queryClick', pageSearchForm)
}
</script>

<template>
  <div class="search">
    <el-form :model="pageSearchForm" label-width="80px">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="部门名称">
            <el-input v-model="pageSearchForm.name" size="large" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="部门领导">
            <el-input v-model="pageSearchForm.leader" size="large" />
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
              v-model="pageSearchForm.createAt"
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
        @click="handelQueryClick"
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
