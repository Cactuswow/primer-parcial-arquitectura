import express from 'express'
import { environment } from './environment.js'
import { PgConnection } from '../services/pgConnection.services.js'

export class Server {
  constructor () {
    this.app = express()
    this.port = environment.port
  }

  async connectionDb () {
    new PgConnection()
  }

  runServer () {
    this.connectionDb()
    this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`)
    })
  }
}
