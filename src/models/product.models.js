import { PgConnection } from '../services/pgConnection.services.js'

export const getProductsModel = async () => {
  const pg = new PgConnection()
  return await pg.connection.query('SELECT * FROM PRODUCT')
}

export const getProductOneModel = async (idProduct) => {
  try {
    const pg = new PgConnection()
    return await pg.connection.query('SELECT * FROM PRODUCT WHERE ID_PRODUCT = $1', [idProduct])
  } catch (error) {
    return []
  }
}

export const postProductModel = async (name, description, price) => {
  const pg = new PgConnection()
  return await pg.connection.query('INSERT INTO PRODUCT (NAME_PRODUCT, DESCRIPTION_PRODUCT, PRICE_PRODUCT) VALUES ($1, $2, $3) returning *', [name, description, price])
}
