import request from '@/utils/request'

export function login() {
  return request({
    url: '/admin/login',
    method: 'post'
  })
}

export function getInfo(token) {
  return request({
    url: '/admin/info',
    method: 'get',
    params: { token }
  })
}

export function logout(commit) {
  return request({
    url: '/admin/logout',
    method: 'post'
  })
}
