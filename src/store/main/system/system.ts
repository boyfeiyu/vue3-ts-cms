import type { ISystemState } from '@/types/system'
import { defineStore } from 'pinia'

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    userSearch: {
      name: '',
      realname: '',
      cellphone: '',
      enable: undefined,
      createdAt: []
    }
  })
})

export default useSystemStore
