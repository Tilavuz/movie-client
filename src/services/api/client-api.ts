import { getToken } from "@/helpers/cookie-token";
import { apiUrl } from "@/helpers/shared";
import axios, { AxiosInstance, AxiosRequestHeaders, InternalAxiosRequestConfig } from "axios";

const token = getToken()
console.log(token);


// Response instance
const responseInstance = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (res) => {
      return res
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

const privateInstance: AxiosInstance = axios.create({
  baseURL: apiUrl,
})

requestInstance({ instance: privateInstance, headers: { "Content-Type": 'application/json', 'Authorization': token } as AxiosRequestHeaders })
responseInstance(privateInstance)

const publicVideoInstance: AxiosInstance = axios.create({
  baseURL: apiUrl,
  responseType: 'blob',
  headers: {
    'Range': 'bytes=0-'
  }
})


export { publicInstance, publicVideoInstance, privateInstance }