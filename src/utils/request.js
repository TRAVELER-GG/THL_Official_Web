import axios from 'axios'

const request = axios.create({
  baseURL: 'https://localhost:44307/',
  timeout: 15000 // 请求超时时间
})

// 请求拦截器
request.interceptors.request.use(config => {
  // 对请求进行处理
  return config
}, error => {
  // 对请求错误进行处理
  console.log(error)
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(response => {
  // 对响应数据进行处理
  return response.data
}, error => {
  // 对响应数据的错误进行处理
  console.log(error)
  return Promise.reject(error)
})

export default request
