import jwt from 'jsonwebtoken'
import { getUserModel } from '../models/auth.model.js'
import { environment } from '../config/environment.js'

export async function login (req, res) {
  const { name, email, password } = req.body
  const [data] = await getUserModel(name, email, password)

  if (!data) {
    return res.status(404).json({ message: 'User not found' })
  }

  const exp = Math.floor(Date.now() / 1000) + (60 * 60)
  const token = jwt.sign({ exp, data }, environment.jwtSalt)
  res.status(200).json({ token })
}
