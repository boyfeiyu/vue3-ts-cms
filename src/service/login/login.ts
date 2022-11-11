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
