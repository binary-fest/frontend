import axios, { AxiosRequestConfig } from 'axios'

const httpConfig: AxiosRequestConfig = {
  baseURL: 'https://api-binaryfest.herokuapp.com/api'
}

const http = axios.create(httpConfig)

export default http
export { http }