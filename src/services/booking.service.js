import moment from 'moment'
import { BookingModel } from '~/models/booking.model'

const getAll = async () => {
  try {
    const bookings = await BookingModel.getAll()
    return bookings
  } catch (error) {
    throw new Error(error.message ? error.message : error)
  }
}

const create = async (newBooking) => {
  if (typeof newBooking.bookedAt === 'number') {
    newBooking.bookedAt = moment(newBooking.bookedAt)
  }
  newBooking.expiredAt = moment(newBooking.bookedAt).add(3, 'd')

  try {
    const createdBooking = await BookingModel.create(newBooking)
    return createdBooking
  } catch (error) {
    throw new Error(error)
  }
}

const getById = async (bookingId) => {
  try {
    const booking = await BookingModel.getById(bookingId)
    return booking
  } catch (error) {
    throw new Error(error)
  }
}

export const BookingService = {
  getAll,
  create,
  getById
}
