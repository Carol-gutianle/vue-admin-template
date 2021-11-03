import request from '@/utils/request'

export function getList(query) {
  return request({
    url: '/opRes/getData',
    method: 'get',
    params: query
  })
}
export function deleteRes(result) {
  return request({
    url: '/opRes/deleteRes',
    method: 'post',
    params: result
  })
}
