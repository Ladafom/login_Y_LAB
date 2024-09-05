import { errorMessages } from "./errorMessages"

export const emailRegex = /[A-Za-z0-9\-_]+@[a-z0-9.\-]+\.[a-z]{2,}/

export const handleValidError = (e) => {
  if (e.target.validity.patternMismatch) {
    return errorMessages.patternMismatch
  } else if (e.target.validity.valueMissing) {
    if (e.target.id === 'email'){
      return errorMessages.valueMissing
    } else {
      return errorMessages.valueMissing
    }
  } else if (e.target.validity.tooShort) {
    return errorMessages.tooShort
  }
  return null
}