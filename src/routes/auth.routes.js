import { Router } from 'express'
import { login } from '../controllers/auth.controller.js'
import { loginValidator } from '../validators/auth.validators.js'
import { validate } from '../middlewares/validator.middlewares.js'

export const authRoutes = Router()
authRoutes.post('', validate(loginValidator), login)
