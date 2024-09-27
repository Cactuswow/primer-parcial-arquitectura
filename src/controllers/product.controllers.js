import { getProductsModel } from '../models/product.models.js'

export function getAllProducts (req, res) {
  const datosProducts = getProductsModel()
  res.status(200).json({
    success: true,
    msg: 'llegamos al getAllProduct (controller)',
    data: datosProducts
  })
}
