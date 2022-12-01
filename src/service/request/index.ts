import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { FYRequestConfig } from './type'

export default class FYRequest {
  instance: AxiosInstance
  constructor(config: FYRequestConfig) {
    this.instance = axios.create(config)

    // 每个实例都添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('全局请求成功的拦截')
        return config
      },
      (err) => {
        // console.log('全局请求失败的拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('全局响应成功的拦截')
        return res.data
      },
      (err) => {
        // console.log('全局响应失败的拦截')
        return err
      }
    )

    // 从配置里拿出拦截器
    if (config.interceptors) {
      this.instance.interceptors.request.use(
        config.interceptors.requsetSuccessFn,
        config.interceptors.requsetFailureFn
      )
      this.instance.interceptors.response.use(
        config.interceptors.responseSuccessFn,
        config.interceptors.responseFailureFn
      )
    }
  }
  request<T = any>(config: FYRequestConfig<T>) {
    // 单次请求拦截器
    if (config.interceptors?.requsetSuccessFn) {
      config = config.interceptors?.requsetSuccessFn(config)
    }
    return new Promise<T>((reslove, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors?.responseSuccessFn(res)
          }
          reslove(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: FYRequestConfig<T>) {
    return this.request({
      method: 'GET',
      ...config
    })
  }
  post<T = any>(config: FYRequestConfig<T>) {
    return this.request({
      method: 'POST',
      ...config
    })
  }
  delete<T = any>(config: FYRequestConfig<T>) {
    return this.request({
      method: 'DELETE',
      ...config
    })
  }
  patch<T = any>(config: FYRequestConfig<T>) {
    return this.request({
      method: 'PATCH',
      ...config
    })
  }
}
