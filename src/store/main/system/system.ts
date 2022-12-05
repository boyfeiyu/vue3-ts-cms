import {
  deletePageById,
  deleteUserById,
  editPageById,
  editUserById,
  postNewPage,
  postNewUser,
  postPageList,
  postUserList
} from '@/service/main/system/system'
import type { ISystemState } from '@/types/system'
import { defineStore } from 'pinia'

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    userList: [],
    totalCount: 0,
    pageList: [],
    pageTotalCount: 0
  }),
  actions: {
    // user的增删改查
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
    },
    postNewUserAction(userData: any) {
      postNewUser(userData).then(() => {
        // 重新请求新的数据
        this.postUserListAction({ offset: 0, size: 10 })
      })
    },
    editUserByIdAction(id: any, userData: any) {
      editUserById(id, userData).then(() => {
        // 重新请求新的数据
        this.postUserListAction({ offset: 0, size: 10 })
      })
    },

    // page的增删改查
    async postPageListAction(pageName: string, queryInfo: any = {}) {
      const pageListRes = await postPageList(pageName, queryInfo)
      this.pageList = pageListRes.data.list
      this.totalCount = pageListRes.data.totalCount
    },
    deletePageByIdAction(pageName: string, id: number) {
      deletePageById(pageName, id).then(() => {
        // 重新请求新的数据
        this.postPageListAction(pageName, { offset: 0, size: 10 })
      })
    },
    postNewPageAction(pageName: string, pageData: any) {
      postNewPage(pageName, pageData).then(() => {
        // 重新请求新的数据
        this.postPageListAction(pageName, { offset: 0, size: 10 })
      })
    },
    editPageByIdAction(pageName: string, id: any, pageData: any) {
      editPageById(pageName, id, pageData).then(() => {
        // 重新请求新的数据
        this.postPageListAction(pageName, { offset: 0, size: 10 })
      })
    }
  }
})

export default useSystemStore
