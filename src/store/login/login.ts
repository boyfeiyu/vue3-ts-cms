import { accountLoginRequest } from '@/service/login/login'
import type { IAccount } from '@/types'
import { defineStore } from 'pinia'
import type { ILoginAccountRes } from '@/types/login'
import { localCache } from '@/utils/cache'
const LOGIN_TOKEN = 'login/token'

const useLoginStore = defineStore('login', {
  state: () => ({
    id: -1,
    name: '',
    token: localCache.getCache(LOGIN_TOKEN) ?? ''
  }),
  actions: {
    loginAccountAction: async function (account: IAccount) {
      const loginRes: ILoginAccountRes = await accountLoginRequest(account)
      this.id = loginRes.data.id
      this.name = loginRes.data.name
      this.token = loginRes.data.token
      // token存储到本地
      localCache.setCache(LOGIN_TOKEN, loginRes.data.token)
    }
  }
})

export default useLoginStore
