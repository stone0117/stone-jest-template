import axios from 'axios'
// 创建 axios 实例 create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // 跨域请求时发送cookies send cookies when cross-domain requests
  // timeout: 5000, // request timeout
  // timeout: 60000, // request timeout
  // timeout: 30000, // request timeout
  timeout: 60000, // request timeout
})

class CzError extends Error {

  get message() {
    return this._message
  }

  set message(value) {
    this._message = value
  }

  get res() {
    return this._res
  }

  set res(value) {
    this._res = value
  }

  constructor(message, res) {
    super(message)
    this._message = message
    this._res     = res
  }
}

// request interceptor
service.interceptors.request.use(
  config => {
    console.log('axios 【个性化】拦截器', config.url)
    // 在发送请求之前做一些事情 do something before request is sent
    // console.log('store.getters.token = ',store.getters.token);
    return config
  },
  error => {
    // 做一些请求错误的事情 do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  },
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * 如果你想获取 HTTP 信息，例如 headers 或 status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * 通过自定义代码确定请求状态
   * Here is just an example
   * 这里只是一个例子
   * You can also judge the status by HTTP Status Code
   * 也可以通过HTTP Status Code判断状态
   */
  response => {
    const requestURL = response.config.url
    // console.dir(response)
    const res        = response.data
    if (response.headers['content-type'] == 'application/octet-stream') {return response}
    // [object ArrayBuffer] // 文件流
    if (Object.prototype.toString.call(res) == '[object ArrayBuffer]') {return response}

    // if the custom code is not 20000, it is judged as an error.
    // 如果自定义代码不是20000，则判断为错误。
    // if the custom code is not 20000, it is judged as an error.
    // 如果自定义代码不是20000，则判断为错误。
    return res
  },
  error => {
    // console.log('%c【request:119】-:', "color:orange", "call ");
    // console.dir(error);
    let url = ''
    if (error && error.config && error.config.url) {
      url = error.config.url
      // console.group('%c【request.js:120】-:', 'color:orange', url)
      console.trace()
      console.error(`(￣▽￣＃) %c ${url}`, 'font-size:18px', '接口发生异常，请联系后端解决', error.message)
      // console.groupEnd()
    }
    else {
      console.error(error)
    }
    return Promise.reject(error)
  },
)

export default service
