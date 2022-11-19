import fyRequest from '@/service/index'
import type { IUserSearchForm } from '@/types/system'

export function postUserList(userSearch: IUserSearchForm) {
  return fyRequest.post({
    url: '/users/list',
    data: {
      name: userSearch.name,
      realname: userSearch.realname,
      cellphone: userSearch.cellphone
    }
  })
}
