import express from 'express'
import { environment } from './environment.js'

export class Server {
  constructor () {
    this.app = express()
    this.port = environment.port
  }

  runServer () {
    this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`)
    })
  }
}
