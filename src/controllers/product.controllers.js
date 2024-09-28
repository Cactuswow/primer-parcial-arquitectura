import { getProductOneModel, getProductsModel } from '../models/product.models.js'

export async function getAllProducts (req, res) {
  const dataProducts = await getProductsModel()
  res.status(200).json({
    success: true,
    data: dataProducts
  })
}

export async function getProductOne (req, res) {
  const { idProduct } = req.params
  const dataProduct = await getProductOneModel(idProduct)
  res.status(200).json({
    success: true,
    data: dataProduct
  })
}
