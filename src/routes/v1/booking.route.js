import express from 'express'
import { BookingController } from '~/controllers/booking.controller'

const router = express.Router()

router.route('/').get(BookingController.getAll)

export const BookingRoute = router