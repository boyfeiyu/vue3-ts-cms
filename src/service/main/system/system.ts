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
