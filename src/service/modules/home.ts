import fyRequest from '..'
interface IHomeData {
  data: object
  returnCode: string
  success: boolean
}
export function getHomeData() {
  return fyRequest.request<IHomeData>({
    url: '/home/multidata'
  })
}
