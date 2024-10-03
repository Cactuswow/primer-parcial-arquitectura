import { deleteProductModel, getProductOneModel, getProductsModel, postProductModel, putProductModel } from '../models/product.models.js'

export async function getAllProducts(req, res) {
  const dataProducts = await getProductsModel()
  res.status(200).json({
    success: true,
    data: dataProducts
  })
}

export async function getProductOne(req, res) {
  const { idProduct } = req.params
  const dataProduct = await getProductOneModel(idProduct)
  res.status(200).json({
    success: true,
    data: dataProduct
  })
}

export const postProduct = async (req, res) => {
  const { name, description, price } = req.body
  const data = await postProductModel(name, description, price)
  res.status(200).json({
    success: true,
    msg: 'Llegamos al postProduct',
    data
  })
}

export const putProduct = async (req, res) => {
  const { idProduct } = req.params
  const { name, description, price } = req.body
  const data = await putProductModel(name, description, price, idProduct)
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
