import FYRequest from './request/index'
import { BASE_URL, TIME_OUT } from './config'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN } from '@/global/constants'

export const fyRequest = new FYRequest({
  timeout: TIME_OUT,
  baseURL: BASE_URL,
  interceptors: {
    requsetSuccessFn: (config) => {
      const token = localCache.getCache(LOGIN_TOKEN)
      if (config.headers && token) {
        config.headers!.Authorization = 'Bearer ' + token
      }
      return config
    }
  }
})
export default fyRequest
