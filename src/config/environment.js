import dotenv from 'dotenv'

dotenv.config()

export const env = {
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  CORS_URL: process.env.CORS_URL,
  DATABASE_NAME: process.env.MONGO_DATABASE_NAME,
  MONGO_URI: process.env.MONGO_URI
}
