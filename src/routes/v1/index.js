import express from 'express'
import { BookingRoute } from './booking.route'

const router = express.Router()

/**
 * Booking APIs
 */
router.use('/bookings', BookingRoute)

/**
 * Root
 */
router.use('/', (req, res) => {
  res.send('<h1>Hello, welcome to Binbarber APIs</h1>')
})

export const apiV1 = router
