import {
  accountLoginRequest,
  getUserInfoById,
  getUserMenusByRoleId
} from '@/service/login/login'
import type { IAccount } from '@/types'
import { defineStore } from 'pinia'
import type { ILoginAccountRes, ILoginState } from '@/types/login'
import { localCache } from '@/utils/cache'
import router from '@/router/index'
import { LOGIN_TOKEN } from '@/global/constants'

const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    userInfo: localCache.getCache('userInfo') ?? undefined,
    userMenus: localCache.getCache('userMenus') ?? []
  }),
  actions: {
    loginAccountAction: async function (account: IAccount) {
      const loginRes: ILoginAccountRes = await accountLoginRequest(account)
      const id = loginRes.data.id
      this.token = loginRes.data.token
      // token存储到本地
      localCache.setCache(LOGIN_TOKEN, loginRes.data.token)
      // 获取用户详细信息
      const userInfoRes = await getUserInfoById(id)
      this.userInfo = userInfoRes.data
      // 获取菜单
      const userMenusRes = await getUserMenusByRoleId(this.userInfo!.role.id)
      this.userMenus = userMenusRes.data
      // 设置本地存储
      localCache.setCache('userInfo', this.userInfo)
      localCache.setCache('userMenus', this.userMenus)
      // 页面跳转
      router.push('/main')
    }
  }
})

export default useLoginStore
