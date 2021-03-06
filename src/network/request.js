import axios from 'axios'

export function request(config) {

    const axiosRequest = axios.create({// 初始化axios实例
        baseURL: 'http://123.207.32.32:8000/',
        timeout: 5000
    })

    // 发送网络请求
    // 因为该函数调用后，返回的就是一个Promise
    // 所以直接返回，外部就可以用then/catch
    return axiosRequest(config)
}

