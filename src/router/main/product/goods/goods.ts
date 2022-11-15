import type { RouteRecordRaw } from 'vue-router'

const routeObj: RouteRecordRaw = {
  path: '/main/product/goods',
  component: () => import('@/views/main/product/goods/goods.vue')
}

export default routeObj
