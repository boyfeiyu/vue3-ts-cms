import type { RouteRecordRaw } from 'vue-router'

const routeObj: RouteRecordRaw = {
  path: '/main/product/category',
  component: () => import('@/views/main/product/category/category.vue')
}

export default routeObj
