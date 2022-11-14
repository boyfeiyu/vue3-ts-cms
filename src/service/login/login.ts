import type { IAccount } from '@/types'
import fyRequest from '..'

export function accountLoginRequest(account: IAccount) {
  return fyRequest.post({
    url: '/login',
    data: {
      ...account
    }
  })
}
export function getUserInfoById(id: number) {
  return fyRequest.get({
    url: `/users/${id}`
  })
}
export function getUserMenusByRoleId(id: number) {
  return fyRequest.get({
    url: `/role/${id}/menu`
  })
}
