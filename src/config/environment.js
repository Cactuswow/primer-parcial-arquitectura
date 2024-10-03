import 'dotenv/config'

export const environment = {
  port: Number(process.env.PORT) || 8000,
  bdUrl: process.env.BD_URL || '',
  jwtSalt: process.env.JWT_SALT || 'secret'
}
