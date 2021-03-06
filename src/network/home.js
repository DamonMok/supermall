import {request} from 'network/request';

export function getHomeDatas() {
    // 请求首页数据
    return request({
        url: '/home/multidata'
    })
}