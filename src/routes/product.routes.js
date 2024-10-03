import { Router } from 'express'
import { deleteProduct, getAllProducts, getProductOne, postProduct, putProduct } from '../controllers/product.controllers.js'
import { validate } from '../middlewares/validator.middlewares.js'
import { deleteProductValidator, getProductValidator, postProductValidator, putProductValidator } from '../validators/product.validators.js'

export const productRoutes = Router()

productRoutes.get('/', getAllProducts)
productRoutes.get('/:idProduct', validate(getProductValidator), getProductOne)
productRoutes.post('/', validate(postProductValidator), postProduct)
productRoutes.put('/:idProduct', validate(putProductValidator), putProduct)
productRoutes.delete('/:idProduct', validate(deleteProductValidator), deleteProduct)
