import type { RouteRecordRaw } from 'vue-router'

const routeObj: RouteRecordRaw = {
  path: '/main/system/role',
  component: () => import('@/views/main/system/role/role.vue')
}

export default routeObj
