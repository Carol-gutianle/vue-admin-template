import request from '@/utils/request'

export function submit(form) {
  return request({
    url: '/form/newuser',
    method: 'post',
    params: form
  })
}

export function deluser(form) {
  return request({
    url: '/form/deleteuser',
    method: 'post',
    params: form
  })
}
