import { postUserList } from '@/service/main/system/system'
import type { ISystemState, IUserSearchForm } from '@/types/system'
import { defineStore } from 'pinia'

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    userList: [],
    totalCount: 0
  }),
  actions: {
    async postUserListAction(userSearch: IUserSearchForm) {
      const userListRes = await postUserList(userSearch)
      this.userList = userListRes.data.list
      this.totalCount = userListRes.data.totalCount
    }
  }
})

export default useSystemStore
