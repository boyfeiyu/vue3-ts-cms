import type { RouteRecordRaw } from 'vue-router'

const routeObj: RouteRecordRaw = {
  path: '/main/analysis/dashboard',
  component: () => import('@/views/main/analysis/dashboard/dashboard.vue')
}

export default routeObj
