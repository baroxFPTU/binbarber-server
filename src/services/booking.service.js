import moment from 'moment'
import { BookingModel } from '~/models/booking.model'

const getAll = async () => {
  try {
    const bookings = await BookingModel.getAll()
    return bookings
  } catch (error) {
    throw Error(error.message ? error.message : error)
  }
}

const create = async (newBooking) => {
  try {
    if (typeof newBooking.bookedAt === 'number') {
      newBooking.bookedAt = moment(newBooking.bookedAt)
    }
    newBooking.expiredAt = moment(newBooking.bookedAt).add(3, 'd')

    const createdBooking = await BookingModel.create(newBooking)
    return createdBooking
  } catch (error) {
    throw Error(error)
  }
}

export const BookingService = {
  getAll,
  create
}
