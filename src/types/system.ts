export interface IUserSearchForm {
  name: string
  realname: string
  cellphone: string
  enable: 0 | 1 | undefined
  createAt: any
}

export interface IUser {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  departmentId: number
  roleId: number
  createAt: string
  updateAt: string
}
export interface ISystemState {
  userList: IUser[]
  totalCount: number
  pageList: any[]
  pageTotalCount: number
}
