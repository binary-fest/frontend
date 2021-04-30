import http from '../utils/http'

const verifyTokenSubmission = (token: string) => {
  return http.get('/submission/token', { data: { token } })
}

export {
  verifyTokenSubmission
}