import jwt from 'jsonwebtoken'
import { environment } from '../config/environment.js'

export function authMiddleware (req, res, next) {
  const rawToken = req.headers.authorization

  if (!rawToken) {
    return res.json({
      message: 'No token provided'
    })
  }

  const [bearer, token] = rawToken.split(' ')
  if (bearer !== 'Bearer') {
    return res.json({
      message: 'No token provided'
    })
  }

  jwt.verify(token, environment.jwtSalt, (error) => {
    if (error) {
      return res.json({
        message: 'No token provided'
      })
    }

    next()
  })
}
