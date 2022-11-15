import type { RouteRecordRaw } from 'vue-router'

const routeObj: RouteRecordRaw = {
  path: '/main/story/chat',
  component: () => import('@/views/main/story/chat/chat.vue')
}

export default routeObj
