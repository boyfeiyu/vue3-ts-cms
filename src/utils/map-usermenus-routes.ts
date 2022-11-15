import type { RouteRecordRaw } from 'vue-router'
function getLocalRoutes() {
  const localRoutes: RouteRecordRaw[] = []
  const files: Record<string, any> = import.meta.glob('@/router/main/**/*.ts', {
    eager: true
  })
  for (const key in files) {
    localRoutes.push(files[key].default)
  }
  return localRoutes
}
export let firstMenu: any = null
export function getRoutes(userMenus: any): RouteRecordRaw[] {
  const resRoutes: RouteRecordRaw[] = []
  const localRoutes = getLocalRoutes()
  for (const item of userMenus) {
    for (const cItem of item.children) {
      const route = localRoutes.find((item) => item.path === cItem.url)
      if (route) {
        resRoutes.push(route)
        // 记录第一个菜单
        if (!firstMenu) {
          firstMenu = cItem
        }
      }
    }
  }
  return localRoutes
}
export function mapPathToMenu(path: string, userMenus: any) {
  for (const item of userMenus) {
    for (const cItem of item.children) {
      if (cItem.url === path) {
        return cItem
      }
    }
  }
}
