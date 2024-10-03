import pgPromise from 'pg-promise'
import { environment } from '../config/environment.js'

export class PgConnection {
  static instance
  static status = false

  constructor () {
    if (PgConnection.instance) {
      return PgConnection.instance
    }

    PgConnection.instance = this
    this.createConnection()
  }

  async createConnection () {
    try {
      const pgp = pgPromise({})
      this.connection = pgp(environment.bdUrl)
      const response = await this.connection.connect()
      response.done()
      PgConnection.status = true
      console.log('Database connected')
    } catch (error) {
      console.log('Error connecting to the database:', error.message)
    }
  }
}
