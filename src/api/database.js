import request from '@/utils/request'

export function getList(query) {
  return request({
    url: '/database/details',
    method: 'get',
    params: query
  })
}
