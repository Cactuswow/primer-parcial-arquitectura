import { checkSchema } from 'express-validator'
const isString = {
  errorMessage: 'Debe ser una cadena de texto'
}

export const loginValidator = checkSchema({
  password: { isString },
  name: { isString }
}, ['body'])

export const meValidator = checkSchema({
  token: { isString }
}, ['params'])
