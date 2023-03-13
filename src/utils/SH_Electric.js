import axios from 'axios'
import { MessageBox, Message } from 'element-ui'

// create an axios instance
const service = axios.create({
  baseURL: 'http://139.196.154.85:10002/', // url = base url + request url
  timeout: 10000, // request timeout
  // withCredentials: true
})

export default service
