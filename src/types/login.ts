export interface IAccount {
  name: string
  password: string
}
interface ILoginAccountResData {
  id: number
  name: string
  token: string
}
export interface ILoginAccountRes {
  code: number
  data: ILoginAccountResData
}
export interface IUserInfo {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  createAt: string
  updateAt: string
  role: {
    id: number
    name: string
    intro: string
    createAt: string
    updateAt: string
  }
  department: {
    id: number
    name: string
    parentId: any
    createAt: string
    updateAt: string
    leader: string
  }
}
export interface ILoginState {
  token: string
  userInfo: IUserInfo | undefined
  userMenus: any
}
