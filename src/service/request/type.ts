import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 针对AxiosRequestConfig进行拓展
interface FYInterceptors<T = AxiosResponse> {
  requsetSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requsetFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}
export interface FYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: FYInterceptors<T>
}
