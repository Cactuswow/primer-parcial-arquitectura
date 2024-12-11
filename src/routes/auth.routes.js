import { Router } from 'express'
import { login, me } from '../controllers/auth.controller.js'
import { loginValidator, meValidator } from '../validators/auth.validators.js'
import { validate } from '../middlewares/validator.middlewares.js'

export const authRoutes = Router()
authRoutes.post('', validate(loginValidator), login)
authRoutes.get('/me/:token', validate(meValidator), me)
