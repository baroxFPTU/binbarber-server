import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import path from 'path'

import { env } from '~/config/environment.js'
import { apiV1 } from '~/routes/v1'
import { connectDB } from './config/db'
import { HTTP_STATUS_CODE } from './utils'

connectDB()
  .then(() => console.log('Database is connected'))
  .then(() => bootServer())
  .catch((err) => console.log(err))

const bootServer = () => {
  const app = express()

  app.use(
    cors({
      origin: env.CORS_URL
    })
  )
  app.use(helmet())
  app.use(express.static('public'))
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

  app.get('*', (req, res) => {
    res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({
      message: 'Not found anything!'
    })
  })

  app.listen(env.PORT, env.HOST, () => {
    console.log(`Server running at http://${env.HOST}:${env.PORT}/`)
  })
}
