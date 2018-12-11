/* 封装一个ajax */
// 返回值： promise对象 (异步返回的数据就是：response.data)
// 简化外部的调用
import axios from 'axios'
export default function aja(url, data = {}, type = "GET") {
    return new Promise(function (resolve, reject) {
        let promise
        if (type === 'GET') {
            // 准备url query 参数数据
            // 把 query 里的数据拼接到url上
            let dataStr = ''//数据拼接连接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            // 发送 get 请求
            promise = axios.get(url)
        } else {
            promise = axios.post(url, data)
        }
        // response 是因为axios返回的promise就是response
        promise.then(function (response) {
            resolve(response.data) //最后返回的数据就是response的data
        }).catch(function (error) {
            reject(error)
        })
    })       
}