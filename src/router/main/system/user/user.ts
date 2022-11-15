import type { RouteRecordRaw } from 'vue-router'

const routeObj: RouteRecordRaw = {
  path: '/main/system/user',
  component: () => import('@/views/main/system/user/user.vue')
}

export default routeObj
