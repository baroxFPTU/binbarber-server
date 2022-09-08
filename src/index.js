import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import path from 'path'

import { env } from '~/config/environment'
import { apiV1 } from '~/routes/v1'
import { connectDB } from './config/db'

connectDB()
  .then(() => console.log('Database is connected'))
  .then(() => bootServer())
  .catch((err) => console.log(err))

let app

const bootServer = () => {
  app = express()

  // app.use(
  //   cors({
  //     origin: env.CORS_URL,
  //     credentials: true,
  //     optionsSuccessStatus: 200
  //   })
  // )
  app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', env.CORS_URL)

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true)

    // Pass to next layer of middleware
    next()
  })
  app.use(helmet())
  app.use(express.static('public'))
  app.use(express.json())
  app.use(
    express.urlencoded({
      extended: false
    })
  )

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello World!'
    })
  })

  app.use(
    '/v1',
    (req, res, next) => {
      res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
      next()
    },
    apiV1
  )

  app.listen(env.PORT, env.HOST, () => {
    console.log(`Server running at http://${env.HOST}:${env.PORT}/`)
  })
}
module.exports = app
