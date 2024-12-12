import 'dotenv/config'

export const environment = {
  port: Number(process.env.PORT) || 8000,
  jwtSalt: process.env.JWT_SALT || 'secret',
  postgresUrl: process.env.BD_URL || 'postgres://postgres:postgres@localhost:5432/postgres'
}
