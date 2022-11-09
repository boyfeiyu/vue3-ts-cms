import FYRequest from './request/index'
import { BASE_URL, TIME_OUT } from './config'

export const fyRequest = new FYRequest({
  timeout: TIME_OUT,
  baseURL: BASE_URL
})
export default fyRequest
