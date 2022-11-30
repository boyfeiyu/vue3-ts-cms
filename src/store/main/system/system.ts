import { deleteUserById, postUserList } from '@/service/main/system/system'
import type { ISystemState } from '@/types/system'
import { defineStore } from 'pinia'

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    userList: [],
    totalCount: 0
  }),
  actions: {
    async postUserListAction(queryInfo: any = {}) {
      const userListRes = await postUserList(queryInfo)
      this.userList = userListRes.data.list
      this.totalCount = userListRes.data.totalCount
    },
    deleteUserByIdAction(id: number) {
      deleteUserById(id).then(() => {
        // 重新请求新的数据
        this.postUserListAction({ offset: 0, size: 10 })
      })
    }
  }
})

export default useSystemStore
