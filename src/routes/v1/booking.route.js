import express from 'express'
import { BookingController } from '~/controllers/booking.controller'

const router = express.Router()

router.route('/').get(BookingController.getAll).post(BookingController.create)

export const BookingRoute = router
