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
