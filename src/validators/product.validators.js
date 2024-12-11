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
    title: { isString },
    description: { isString },
    price: { isFloat },
    thumbnail: { isString },
    stock: { isInt }
  }, ['body']
)

export const putProductValidator = checkSchema(
  {
    idProduct: { isInt }
  }, ['params'],
  {
    title: { isString },
    description: { isString },
    price: { isFloat },
    thumbnail: { isString },
    stock: { isInt },
    rating: { isFloat }
  }, ['body']
)

export const deleteProductValidator = checkSchema(
  {
    idProduct: { isInt }
  }, ['params']
)
