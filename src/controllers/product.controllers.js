import { deleteProductModel, getProductOneModel, getProductsModel, postProductModel, putProductModel } from '../models/product.models.js'

export async function getAllProducts (req, res) {
  const dataProducts = await getProductsModel()
  res.status(200).json(
    dataProducts
  )
}

export async function getProductOne (req, res) {
  const { idProduct } = req.params
  const [error, dataProduct] = await getProductOneModel(idProduct)
  if (error) {
    return res.status(422).json({
      success: false
    })
  }

  res.status(200).json(
    dataProduct
  )
}

export const postProduct = async (req, res) => {
  const { title: name, description, price, stock, rating, thumbnail: image } = req.body
  const [error, data] = await postProductModel(name, description, price, image, rating, stock)

  if (error) {
    return res.status(422).json({
      success: false,
      msg: 'Error al crear el producto'
    })
  }

  res.status(200).json(
    data
  )
}

export const putProduct = async (req, res) => {
  const { idProduct } = req.params
  const { title: name, description, price, stock, rating, thumbnail: image } = req.body
  const [error, data] = await putProductModel(name, description, price, image, rating, stock, idProduct)

  if (error) {
    return res.status(422).json({
      success: false,
      msg: 'Error al actualizar el producto'
    })
  }

  res.status(200).json(
    data
  )
}
export const deleteProduct = async (req, res) => {
  const { idProduct } = req.params
  const data = await deleteProductModel(idProduct)
  res.status(200).json(
    data
  )
}
