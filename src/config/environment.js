import dotenv from 'dotenv'

dotenv.config()

export const env = {
  HOST: process.env.HOST,
  PORT: process.env.PORT,

  DATABASE_NAME: process.env.MONGO_DATABASE_NAME,
  MONGO_URI: process.env.MONGO_URI
}
