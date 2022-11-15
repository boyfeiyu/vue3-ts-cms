import type { RouteRecordRaw } from 'vue-router'

const routeObj: RouteRecordRaw = {
  path: '/main/analysis/overview',
  component: () => import('@/views/main/analysis/overview/overview.vue')
}

export default routeObj
