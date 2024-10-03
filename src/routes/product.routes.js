import { Router } from 'express'
import { getAllProducts, getProductOne } from '../controllers/product.controllers.js'

export const productRoutes = Router()

productRoutes.get('/', getAllProducts)
productRoutes.get('/:idProduct', getProductOne)
productRoutes.post('/', getProductOne)
productRoutes.put('/')
productRoutes.delete('/')
