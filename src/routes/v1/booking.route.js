import express from 'express'
import { BookingController } from '~/controllers/booking.controller'
import { BookingValidation } from '../../validations/booking.validation'

const router = express.Router()

router
  .route('/')
  .get(BookingController.getAll)
  .post(BookingValidation.create, BookingController.create)

router.route('/:bookingId').get(BookingController.getById)

export const BookingRoute = router
