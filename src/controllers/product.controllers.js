import { deleteProductModel, getProductOneModel, getProductsModel, postProductModel, putProductModel } from '../models/product.models.js'

export async function getAllProducts (req, res) {
  const dataProducts = await getProductsModel()
  res.status(200).json({
    success: true,
    msg: 'Llegamos al getProducts',
    data: dataProducts
  })
}

export async function getProductOne (req, res) {
  const { idProduct } = req.params
  const [error, dataProduct] = await getProductOneModel(idProduct)
  if (error) {
    return res.status(422).json({
      success: false
    })
  }

  res.status(200).json({
    success: true,
    msg: 'Llegamos al getProductOne',
    data: dataProduct
  })
}

export const postProduct = async (req, res) => {
  const { name, description, price } = req.body
  const [error, data] = await postProductModel(name, description, price)

  if (error) {
    return res.status(422).json({
      success: false,
      msg: 'Error al crear el producto'
    })
  }

  res.status(200).json({
    success: true,
    msg: 'Llegamos al postProduct',
    data
  })
}

export const putProduct = async (req, res) => {
  const { idProduct } = req.params
  const { name, description, price } = req.body
  const [error, data] = await putProductModel(name, description, price, idProduct)

  if (error) {
    return res.status(422).json({
      success: false,
      msg: 'Error al actualizar el producto'
    })
  }

  res.status(200).json({
    success: true,
    msg: 'Llegamos al putProduct',
    data
  })
}
export const deleteProduct = async (req, res) => {
  const { idProduct } = req.params
  const data = await deleteProductModel(idProduct)
  res.status(200).json({
    success: true,
    msg: 'Llegamos al deleteProduct',
    data
  })
}
