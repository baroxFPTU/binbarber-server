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
    /*Just for test */
    newBooking.bookedAt = moment('2022-08-16').toDate()
    // newBooking.createdAt = moment().toDate()
    newBooking.expiredAt = moment(newBooking.bookedAt).add(3, 'd').toDate()

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
