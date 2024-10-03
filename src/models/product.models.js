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
  try {
    const pg = new PgConnection()
    return [false, await pg.connection.query('INSERT INTO PRODUCT (NAME_PRODUCT, DESCRIPTION_PRODUCT, PRICE_PRODUCT) VALUES ($1, $2, $3) returning *', [name, description, price])]
  } catch (error) {
    return [true]
  }
}

export const putProductModel = async (name, description, price, idProduct) => {
  const pg = new PgConnection()
  // eslint-disable-next-line no-template-curly-in-string
  return await pg.connection.query('UPDATE PRODUCT SET NAME_PRODUCT = ${nom}, DESCRIPTION_PRODUCT = ${des}, PRICE_PRODUCT = ${pr} WHERE ID_PRODUCT = ${id} returning *'
    , {
      nom: name,
      des: description,
      pr: price,
      id: idProduct
    })
}

export const deleteProductModel = async (idProduct) => {
  const pg = new PgConnection()
  return await pg.connection.query('DELETE FROM PRODUCT WHERE ID_PRODUCT = $1 returning *', [idProduct])
}
