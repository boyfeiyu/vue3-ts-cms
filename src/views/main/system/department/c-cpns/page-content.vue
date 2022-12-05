<script setup lang="ts">
import useSystemStore from '@/store/main/system/system'
import { Edit, Delete } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { formatUTC } from '@/utils/format'
const systemStore = useSystemStore()
const { pageList, pageTotalCount } = storeToRefs(systemStore)

onMounted(() => {
  fetchPageListData()
})
// 分页相关
const currentPage = ref(1)
const pageSize = ref(10)
function handleSizeChange() {
  fetchPageListData()
}
function handleCurrentChange() {
  fetchPageListData()
}

// 删除页面数据
const handleDeleteBtnClick = (id: any) => {
  systemStore.deletePageByIdAction('department', id)
}

// 获取页面数据列表
function fetchPageListData(
  pageName: string = 'department',
  formData: any = {}
) {
  // 获取offset/size
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const pageInfo = { size, offset }
  // 发起网络请求
  const queryInfo = {
    ...pageInfo,
    ...formData
  }
  systemStore.postPageListAction(pageName, queryInfo)
}

const emit = defineEmits(['newPageClick', 'editPageClick'])
// 新增页面数据
function handelNewPageClick() {
  emit('newPageClick')
}
defineExpose({ fetchPageListData })

// 编辑用户
function handelEditPageClick(itemData: any) {
  emit('editPageClick', itemData)
}
</script>

<template>
  <div class="page-content">
    <div class="header">
      <h3>用户列表</h3>
      <el-button type="primary" @click="handelNewPageClick">新增数据</el-button>
    </div>
    <div class="table">
      <el-table :data="pageList" border style="width: 100%">
        <el-table-column type="selection" width="60" align="center" />
        <el-table-column align="center" type="index" label="序号" width="60" />
        <el-table-column align="center" prop="name" label="部门名称" />
        <el-table-column align="center" prop="leader" label="部门领导" />
        <el-table-column align="center" prop="parentId" label="上级部门" />
        <el-table-column
          align="center"
          prop="createAt"
          label="创建时间"
          width="240"
        >
          <template #default="scope">
            {{ formatUTC(scope.row.createAt) }}
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          prop="updateAt"
          label="更新时间"
          width="240"
        >
          <template #default="scope">
            {{ formatUTC(scope.row.updateAt) }}
          </template>
        </el-table-column>

        <el-table-column align="center" width="180" label="操作">
          <template #default="scope">
            <el-button
              text
              type="primary"
              :icon="Edit"
              @click="handelEditPageClick(scope.row)"
            >
              编辑
            </el-button>
            <el-button
              text
              type="danger"
              :icon="Delete"
              @click="handleDeleteBtnClick(scope.row.id)"
            >
              删除
            </el-button>
          </template>
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
        :total="pageTotalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
.page-content {
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
