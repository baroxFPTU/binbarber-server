import { MongoClient } from 'mongodb'
import { env } from './environment'

let dbInstance = null

export const connectDB = async () => {
  const client = new MongoClient(env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })

  await client.connect()

  dbInstance = client.db(env.DATABASE_NAME)
}

// getDB
export const getDB = () => {
  if (!dbInstance) throw Error('Database is still not connect')
  return dbInstance
}
