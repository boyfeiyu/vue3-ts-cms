import { postDepartmentList, postRoleList } from '@/service/main/main'
import { defineStore } from 'pinia'

interface IMainStoreState {
  entireRoles: any[]
  entireDepartments: any[]
}
const useMainStore = defineStore('main', {
  state: (): IMainStoreState => ({
    entireRoles: [],
    entireDepartments: []
  }),
  actions: {
    async fetchEntireDataAction() {
      const departRes = await postDepartmentList()
      const roleRes = await postRoleList()
      this.entireDepartments = departRes.data.list
      this.entireRoles = roleRes.data.list
    }
  }
})

export default useMainStore
