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
import type { RouteRecordRaw } from 'vue-router'
import { getRoutes } from '@/utils/map-usermenus-routes'
import useMainStore from '../main/main'

const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    token: '',
    userInfo: undefined,
    userMenus: []
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
      // 注册路由
      const routes: RouteRecordRaw[] = getRoutes(this.userMenus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
      // 页面跳转
      router.push('/main')
    },
    setStateFromLocalCache() {
      // 从本地中读取数据
      const token = localCache.getCache(LOGIN_TOKEN)
      const userInfo = localCache.getCache('userInfo')
      const userMenus = localCache.getCache('userMenus')
      if (token && userInfo && userMenus) {
        this.token = token
        this.userInfo = userInfo
        this.userMenus = userMenus

        // 请求角色、部门数据
        const mainStore = useMainStore()
        mainStore.fetchEntireDataAction()
        // 注册路由
        const routes: RouteRecordRaw[] = getRoutes(this.userMenus)
        routes.forEach((route) => {
          router.addRoute('main', route)
        })
      }
    }
  }
})

export default useLoginStore
