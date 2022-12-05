import fyRequest from '@/service/index'

export function postUserList(queryInfo: any = {}) {
  return fyRequest.post({
    url: '/users/list',
    data: {
      ...queryInfo
    }
  })
}
export function deleteUserById(id: number) {
  return fyRequest.delete({
    url: `/users/${id}`
  })
}
export function postNewUser(userData: any) {
  return fyRequest.post({
    url: `/users`,
    data: userData
  })
}
export function editUserById(id: any, userData: any) {
  return fyRequest.patch({
    url: `/users/${id}`,
    data: userData
  })
}

export function postPageList(pageName: string, queryInfo: any = {}) {
  return fyRequest.post({
    url: `/${pageName}/list`,
    data: {
      ...queryInfo
    }
  })
}
export function deletePageById(pageName: string, id: number) {
  return fyRequest.delete({
    url: `/${pageName}/${id}`
  })
}
export function postNewPage(pageName: string, pageData: any) {
  return fyRequest.post({
    url: `/${pageName}`,
    data: pageData
  })
}
export function editPageById(pageName: string, id: any, pageData: any) {
  return fyRequest.patch({
    url: `/${pageName}/${id}`,
    data: pageData
  })
}
