import { Router } from 'express'
import { productRoutes } from './product.routes.js'

export const indexRoutes = Router()

indexRoutes.use('/api/product', productRoutes)
