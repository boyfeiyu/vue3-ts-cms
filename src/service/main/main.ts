import fyRequest from '@/service/index'

export function postDepartmentList(queryInfo: any = {}) {
  return fyRequest.post({
    url: '/department/list',
    data: {
      ...queryInfo
    }
  })
}
export function postRoleList(queryInfo: any = {}) {
  return fyRequest.post({
    url: '/role/list',
    data: {
      ...queryInfo
    }
  })
}
