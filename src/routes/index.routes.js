import { Router } from 'express'
import { productRoutes } from './product.routes.js'
import { authRoutes } from './auth.routes.js'

export const indexRoutes = Router()

indexRoutes.use('/api/product', productRoutes)
indexRoutes.use('', authRoutes)
