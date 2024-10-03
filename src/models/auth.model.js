import { PgConnection } from '../services/pgConnection.services.js'
export async function getUserModel (name, email, password) {
  try {
    const pg = new PgConnection()
    return await pg.connection.query('SELECT * FROM ADMINISTRATOR WHERE ADMINISTRATOR_NAME = $1 AND ADMINISTRATOR_EMAIL = $2 AND ADMINISTRATOR_PASSWORD = $3', [name, email, password])
  } catch (error) {
    return []
  }
}
