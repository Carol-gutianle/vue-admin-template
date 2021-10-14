import request from '@/utils/request'

export function getList() {
  return request({
    url: '/opRes/getData',
    method: 'get'
  })
}
