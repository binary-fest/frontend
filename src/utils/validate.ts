interface Validate {
  isValid: boolean
  message: string
}

const isValidEmail = (email: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)

const validateEmail = (email: string): Validate => {
  const validating = isValidEmail(email)
  return {
    isValid: validating,
    message: !validating ? "Email tidak valid" : ""
  }
}


export {
  isValidEmail,
  validateEmail
}