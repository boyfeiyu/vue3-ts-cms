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
