import type { RouteRecordRaw } from 'vue-router'

const routeObj: RouteRecordRaw = {
  path: '/main/system/menu',
  component: () => import('@/views/main/system/menu/menu.vue')
}

export default routeObj
