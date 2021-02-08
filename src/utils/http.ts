import axios, { AxiosRequestConfig } from 'axios'

const httpConfig: AxiosRequestConfig = {
  baseURL: 'http://localhost:9000/api'
}

const http = axios.create(httpConfig)

export default http
export { http }