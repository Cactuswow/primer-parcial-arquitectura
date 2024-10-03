import { Router } from 'express'
import { deleteProduct, getAllProducts, getProductOne, postProduct, putProduct } from '../controllers/product.controllers.js'
import { validate } from '../middlewares/validator.middlewares.js'
import { getProductValidator } from '../validators/product.validators.js'

export const productRoutes = Router()

productRoutes.get('/', getAllProducts)
productRoutes.get('/:idProduct', validate(getProductValidator), getProductOne)
productRoutes.post('/', postProduct)
productRoutes.put('/:idProduct', putProduct)
productRoutes.delete('/:idProduct', deleteProduct)
