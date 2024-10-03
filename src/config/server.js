import express from 'express'
import { environment } from './environment.js'
import { PgConnection } from '../services/pgConnection.services.js'
import { indexRoutes } from '../routes/index.routes.js'
import { authMiddleware } from '../middlewares/auth.middlewares.js'
import { dbMiddleware } from '../middlewares/db.middlewares.js'

export class Server {
  constructor () {
    this.app = express()
    this.port = environment.port
  }

  async connectionDb () {
    new PgConnection()
  }

  middlewares () {
    this.app.use(express.json())
    this.app.use('/api/product', authMiddleware)
    this.app.use('/api/product', dbMiddleware)
    this.app.use('/auth', dbMiddleware)
  }

  routes () {
    this.app.use(indexRoutes)
  }

  runServer () {
    this.connectionDb()
    this.middlewares()
    this.routes()
    this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`)
    })
  }
}
