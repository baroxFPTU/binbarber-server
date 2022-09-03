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

let app

const bootServer = () => {
  app = express()

  app.use(
    cors({
      origin: 'http://localhost:3000',
      optionSuccessStatus: 200
    })
  )
  app.use(helmet())
  app.use(express.json())
  app.use(
    express.urlencoded({
      extended: false
    })
  )

  app.use(
    '/v1',
    (req, res, next) => {
      res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
      next()
    },
    apiV1
  )

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Server running at http://${env.APP_HOST}:${env.APP_PORT}/`)
  })
}

module.exports = app
