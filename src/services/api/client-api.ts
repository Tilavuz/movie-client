import { apiUrl } from "@/helpers/shared";
import axios, { AxiosInstance, AxiosRequestHeaders, InternalAxiosRequestConfig } from "axios";

// Response instance
const responseInstance = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (res) => {
      if(res && res.data) return res.data
    },
    (error) => {
      console.error(error);
      return Promise.reject(error)
    }
  )
}

// Request instance
const requestInstance = ({ instance, headers }: { instance: AxiosInstance, headers: AxiosRequestHeaders }) => {
  instance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
      return {
        ...config,
        headers,
      }
    }
  )
}

const publicInstance: AxiosInstance = axios.create({
  baseURL: apiUrl
})

requestInstance({ instance: publicInstance, headers: { "Content-Type": 'application/json' } as AxiosRequestHeaders })
responseInstance(publicInstance)


const publicVideoInstance: AxiosInstance = axios.create({
  baseURL: apiUrl,
  responseType: 'blob',
  headers: {
    'Range': 'bytes=0-'
  }
})


export { publicInstance, publicVideoInstance }