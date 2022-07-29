import dotenv from 'dotenv'

dotenv.config()

export const env = {
  APP_HOST: process.env.APP_HOST,
  APP_PORT: process.env.APP_PORT,

  DATABASE_NAME: process.env.MONGO_DATABASE_NAME,
  MONGO_URI: process.env.MONGO_URI
}
