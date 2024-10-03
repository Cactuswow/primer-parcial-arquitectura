import { PgConnection } from '../services/pgConnection.services.js'
export async function getUserModel (name, email, password) {
  try {
    const pg = new PgConnection()
    return await pg.connection.query('SELECT * FROM ADMINISTRATOR WHERE NAME_ADMIN = $1 AND EMAIL_ADMIN = $2 AND PASSWORD_ADMIN = $3', [name, email, password])
  } catch (error) {
    return []
  }
}
