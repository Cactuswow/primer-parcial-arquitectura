import { checkSchema } from 'express-validator'

const isInt = {
  errorMessage: 'Debe ser un número entero'
}

const isString = {
  errorMessage: 'Debe ser una cadena de texto'
}

const isFloat = {
  errorMessage: 'Debe ser un número decimal'
}

export const getProductValidator = checkSchema(
  {
    idProduct: { isInt }
  }, ['params']
)

export const postProductValidator = checkSchema(
  {
    name: { isString },
    description: { isString },
    price: { isFloat }
  }, ['body']
)

export const putProductValidator = checkSchema(
  {
    idProduct: { isInt }
  }, ['params'],
  {
    name: { isString },
    description: { isString },
    price: { isFloat }
  }, ['body']
)

export const deleteProductValidator = checkSchema(
  {
    idProduct: { isInt }
  }, ['params']
)
