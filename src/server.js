import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import { env } from '~/config/environment.js'
import { apiV1 } from '~/routes/v1'
import { connectDB } from './config/db'

connectDB()
  .then(() => console.log('Database is connected'))
  .then(() => bootServer())
  .catch((err) => console.log(err))

const bootServer = () => {
  const app = express()

  app.use(cors())
  app.use(helmet())
  app.use(express.json())
  app.use(
    express.urlencoded({
      extended: false
    })
  )

  app.use('/v1', apiV1)

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Server running at http://${env.APP_HOST}:${env.APP_PORT}/`)
  })
}
