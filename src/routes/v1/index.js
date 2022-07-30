import express from 'express'
import { BookingRoute } from './booking.route'
import { OperationRoute } from './operation.route'

const router = express.Router()

/**
 * Booking APIs
 */
router.use('/bookings', BookingRoute)

/**
 * Operation APIs
 */
router.use('/operation', OperationRoute)

/**
 * Root
 */
router.use('/', (req, res) => {
  res.send('<h1>Hello, welcome to Binbarber APIs</h1>')
})

export const apiV1 = router
