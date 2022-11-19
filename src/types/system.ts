export interface IUserSearchForm {
  name: string
  realname: string
  cellphone: string
  enable: 0 | 1 | undefined
  createdAt: any
}
export interface ISystemState {
  userSearch: IUserSearchForm
}
