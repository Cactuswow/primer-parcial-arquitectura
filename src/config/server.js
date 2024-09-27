import express from 'express'
import { environment } from './environment.js'
import { indexRoutes } from '../routes/index.routes.js'

export class Server {
  constructor () {
    this.app = express()
    this.port = environment.port
  }

  // async connectionDB(){
  //   new PgConnection();
  // }

  // middlewares(){
  //   // configuro para que acepte objeto tipo JSON
  //   this.app.use(express.json())
  //   // activo el uso de middleware personalizado
  //   this.app.use(middleware)
  // }

  routes () {
    this.app.use(indexRoutes)
  }

  runServer () {
    this.routes()
    this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`)
    })
  }
}
