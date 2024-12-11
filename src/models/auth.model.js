import { PgConnection } from '../services/pgConnection.services.js'
export async function getUserModel (name, password) {
  try {
    const pg = new PgConnection()
    return await pg.connection.query(
      `SELECT name_admin as username,
      image_admin as image
       FROM ADMINISTRATOR
       WHERE NAME_ADMIN = $1
       AND PASSWORD_ADMIN = $2
      `, [name, password])
  } catch (error) {
    return []
  }
}
