import type { RouteRecordRaw } from 'vue-router'

const routeObj: RouteRecordRaw = {
  path: '/main/system/department',
  component: () => import('@/views/main/system/department/department.vue')
}

export default routeObj
