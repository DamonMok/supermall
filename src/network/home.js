import {request} from 'network/request';

export function getHomeDatas() {
    // 请求首页数据
    return request({
        url: '/home/multidata'
    })
}

export function getHomeGoods(type, page) {
    // 请求首页商品数据
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}