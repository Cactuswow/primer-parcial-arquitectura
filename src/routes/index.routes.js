import { Router } from 'express'
import { productRoutes } from './product.routes.js'
import { authRoutes } from './auth.routes.js'

export const indexRoutes = Router()

indexRoutes.use('/api/product', productRoutes)
indexRoutes.use('/auth', authRoutes)
indexRoutes.use('*', (_req, res) => {
  res.json({ message: 'Endpoint no definido' })
})
