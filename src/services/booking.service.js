import { BookingModel } from '~/models/booking.model'

const getAll = async () => {
  try {
    const bookings = await BookingModel.getAll()
    return bookings
  } catch (error) {
    throw Error(error.message ? error.message : error)
  }
}

export const BookingService = {
  getAll
}
