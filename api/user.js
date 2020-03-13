import request from '@/plugins/axios'

// 获取验证码
export const getVerifyCode = () => {
  return request({
    url: '/user/getVerifyCode',
    method: 'get'
  })
}
