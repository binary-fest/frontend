import http from '../utils/http'

const verifyTokenSubmission = (token: string) => {
  return http.get('/submission/token', { data: { token } })
}

const sendTokenSubmission = (token: string, file_url: string) => {
  return http.post('/submission/', { token, file_url })
}

export {
  verifyTokenSubmission,
  sendTokenSubmission
}