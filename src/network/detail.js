import { request } from './request'

export function getDetailDatas(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}