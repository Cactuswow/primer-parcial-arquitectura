import { PgConnection } from '../services/pgConnection.services.js'

export const getProductsModel = async () => {
  const pg = new PgConnection()
  return await pg.connection.query(
    `SELECT id_product as id,
     name_product as title,
     description_product as description,
     price_product as price,
     image_product as thumbnail,
     rating_product as rating,
     stock_product as stock
     FROM PRODUCT
    `
  )
}

export const getProductOneModel = async (idProduct) => {
  try {
    const pg = new PgConnection()
    return [false, await pg.connection.query(
      `SELECT id_product as id,
       name_product as title,
       description_product,
       price_product as price,
       image_product as thumbnail,
       rating_product as rating,
       stock_product as stock
       FROM PRODUCT
       WHERE ID_PRODUCT = $1
      `, [idProduct])]
  } catch (error) {
    return [true]
  }
}

export const postProductModel = async (name, description, price, image, rating = 0, stock) => {
  try {
    const pg = new PgConnection()
    return [false, await pg.connection.query(
      `INSERT INTO PRODUCT
      (
       NAME_PRODUCT, DESCRIPTION_PRODUCT,
       PRICE_PRODUCT, IMAGE_PRODUCT,
       RATING_PRODUCT, STOCK_PRODUCT
      ) VALUES ($1, $2, $3, $4, $5, $6)
      returning
       id_product as id,
       name_product as title,
       description_product as description,
       price_product as price,
       image_product as thumbnail,
       rating_product as rating,
       stock_product as stock
      `,
      [name, description, price, image, rating, stock])]
  } catch (error) {
    return [true]
  }
}

export const putProductModel = async (name, description, price, image, rating, stock, idProduct) => {
  const pg = new PgConnection()
  const body = {
    nom: name,
    des: description,
    pr: price,
    id: idProduct,
    img: image,
    rat: rating,
    st: stock
  }

  try {
    // eslint-disable-next-line no-template-curly-in-string
    return [false, await pg.connection.query(
      `UPDATE PRODUCT
       SET NAME_PRODUCT = \${nom},
       DESCRIPTION_PRODUCT = \${des},
       PRICE_PRODUCT = \${pr},
       IMAGE_PRODUCT = \${img},
       RATING_PRODUCT = \${rat},
       STOCK_PRODUCT = \${st}
       WHERE ID_PRODUCT = \${id} returning *
      `, body)]
  } catch (error) {
    console.log(error)
    return [true]
  }
}

export const deleteProductModel = async (idProduct) => {
  const pg = new PgConnection()
  return await pg.connection.query('DELETE FROM PRODUCT WHERE ID_PRODUCT = $1 returning *', [idProduct])
}
