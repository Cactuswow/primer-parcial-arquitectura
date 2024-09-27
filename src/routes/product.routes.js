import { Router } from 'express'
import { getAllProducts } from '../controllers/product.controllers.js'

export const productRoutes = Router()

productRoutes.get('/', getAllProducts)
productRoutes.post('/')
productRoutes.put('/')
productRoutes.delete('/')
