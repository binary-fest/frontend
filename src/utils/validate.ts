import { getSubmissionClose } from '../http/config'

interface Validate {
  isValid: boolean
  message: string
}

const isValidEmail = (email: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
const isExternalUrl = (url: string) => {
  const isHttp = url.substr(0, 7).toLocaleLowerCase() === "http://" 
  const isHttps = url.substr(0, 8).toLocaleLowerCase() === "https://" 
  return isHttp || isHttps
}

const validateEmail = (email: string): Validate => {
  const validating = isValidEmail(email)
  return {
    isValid: validating,
    message: !validating ? "Email tidak valid" : ""
  }
}

const validateSubmissionOpen = () => {
  return getSubmissionClose()
      .then((res) => {
        if (!res) return
        const date = new Date().getTime()
        const closeMillisecond = res.time.seconds * 1000
        const isClose = closeMillisecond < date

        return isClose
      })
}


export {
  isValidEmail,
  validateEmail,
  isExternalUrl,
  validateSubmissionOpen
}