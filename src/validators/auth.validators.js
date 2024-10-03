import { checkSchema } from 'express-validator'
const isString = {
  errorMessage: 'Debe ser una cadena de texto'
}

export const loginValidator = checkSchema({
  email: {
    isEmail: {
      errorMessage: 'Formato de email inválido'
    }
  },
  password: { isString },
  name: { isString }
}, ['body'])
