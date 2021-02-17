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


export {
  isValidEmail,
  validateEmail,
  isExternalUrl
}