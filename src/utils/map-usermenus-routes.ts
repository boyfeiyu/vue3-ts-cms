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
      const route = localRoutes.find(
        (localRoute) => localRoute.path === cItem.url
      )
      // 如果在菜单里找到了这个路由的地址，就把它添加到应该注册的路由中
      if (route) {
        resRoutes.push(route)
        // 记录第一个菜单
        if (!firstMenu) {
          firstMenu = cItem
        }
        // 如果在应注册路由中找不到一级菜单的路径，将一级菜单对应的路径重定向到当前路由
        if (!resRoutes.find((route) => route?.path === item.url)) {
          resRoutes.push({
            path: item.url,
            redirect: route.path
          })
        }
      }
    }
  }
  return resRoutes
}
// 根据路径得到对应菜单对象
export function mapPathToMenu(path: string, userMenus: any) {
  for (const item of userMenus) {
    for (const cItem of item.children) {
      if (cItem.url === path) {
        return cItem
      }
    }
  }
}

// 根据路径和userMenus返回面包屑
interface breadcrumb {
  name: string
  path: string
}
export function mapPathToBreadcrumbs(
  path: string,
  userMenus: any
): breadcrumb[] {
  const breadcrumbs: breadcrumb[] = []
  for (const item of userMenus) {
    for (const cItem of item.children) {
      if (cItem.url === path) {
        // 一级菜单
        breadcrumbs.push({
          name: item.name,
          path: item.url
        })
        // 二级菜单
        breadcrumbs.push({
          name: cItem.name,
          path: cItem.url
        })
      }
    }
  }

  return breadcrumbs
}
