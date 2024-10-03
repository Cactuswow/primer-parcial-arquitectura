import { Router } from 'express'
import { deleteProduct, getAllProducts, getProductOne, postProduct, putProduct } from '../controllers/product.controllers.js'

export const productRoutes = Router()

productRoutes.get('/', getAllProducts)
productRoutes.get('/:idProduct', getProductOne)
productRoutes.post('/', postProduct)
productRoutes.put('/:idProduct', putProduct)
productRoutes.delete('/:idProduct', deleteProduct)
