import { checkSchema } from 'express-validator'

export const getProductValidator = checkSchema(
  {
    idProduct: {
      isInt: { errorMessage: 'Debe ser un numero' }
    }
  }, ['params']
)

export const postProductValidator = checkSchema(
  {
    name: {
      isString: { errorMessage: 'El nombre debe ser una cadena de texto' }
    },
    description: {
      isString: { errorMessage: 'La descripción debe ser una cadena de texto' }
    },
    price: {
      isFLoat: { errorMessage: 'El precio debe ser numero decimal' }

    }
  }, ['body']
)

export const putProductValidator = checkSchema(
  {
    idProduct: {
      isInt: { errorMessage: 'Debe ser un numero' }
    }
  }, ['params'],
  {
    name: {
      isString: { errorMessage: 'El nombre debe ser una cadena de texto' }
    },
    description: {
      isString: { errorMessage: 'La descripción debe ser una cadena de texto' }
    },
    price: {
      isFLoat: { errorMessage: 'El precio debe ser numero decimal' }

    }
  }, ['body']
)

export const deleteProductValidator = checkSchema(
  {
    idProduct: {
      isInt: { errorMessage: 'Debe ser un numero' }
    }
  }, ['params']
)
