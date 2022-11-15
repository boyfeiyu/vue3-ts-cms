import type { RouteRecordRaw } from 'vue-router'

const routeObj: RouteRecordRaw = {
  path: '/main/story/list',
  component: () => import('@/views/main/story/list/list.vue')
}

export default routeObj
