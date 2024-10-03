import { PgConnection } from '../services/pgConnection.services.js'

export function dbMiddleware (_req, res, next) {
  if (!PgConnection.status) {
    return res.status(500).json({
      message: 'Database not connected'
    })
  }

  next()
}
