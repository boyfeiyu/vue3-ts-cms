<script setup lang="ts">
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'
import UserSearch from './c-cpns/user-search.vue'
import { Edit, Delete } from '@element-plus/icons-vue'
import { ref } from 'vue'

const systemStore = useSystemStore()
const { userList, totalCount } = storeToRefs(systemStore)

// 分页相关
const currentPage = ref(1)
const pageSize = ref(10)
function handleSizeChange() {
  console.log('handleSizeChange', pageSize.value)
}
function handleCurrentChange() {
  console.log('handleCurrentChange', currentPage.value)
}
</script>

<template>
  <div class="user">
    <user-search />
    <div class="content">
      <div class="header">
        <h3>用户列表</h3>
        <el-button type="primary">新增数据</el-button>
      </div>
      <div class="table">
        <el-table :data="userList" border style="width: 100%">
          <el-table-column type="selection" width="60" align="center" />
          <el-table-column
            align="center"
            type="index"
            label="序号"
            width="60"
          />
          <el-table-column align="center" prop="name" label="用户名" />
          <el-table-column align="center" prop="realname" label="真实名" />
          <el-table-column
            align="center"
            prop="cellphone"
            label="手机号码"
            width="160"
          />
          <el-table-column
            align="center"
            width="100"
            prop="enable"
            label="状态"
          />
          <el-table-column
            align="center"
            prop="createAt"
            label="创建时间"
            width="240"
          />
          <el-table-column
            align="center"
            prop="updateAt"
            label="更新时间"
            width="240"
          />
          <el-table-column align="center" width="180" label="操作">
            <el-button text type="primary" :icon="Edit">编辑</el-button>
            <el-button text type="danger" :icon="Delete">删除</el-button>
          </el-table-column>
        </el-table>
      </div>
      <div class="pagination">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 30]"
          small="small"
          background="#fff"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.user {
  border-radius: 8px;
  overflow: hidden;
}
.content {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  .header {
    display: flex;
    justify-content: space-between;
  }
  .table {
    margin-top: 20px;
    .el-button {
      padding: 5px;
    }
  }
}
</style>
