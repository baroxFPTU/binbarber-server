import { BookingService } from '~/services/booking.service'
import { HTTP_STATUS_CODE } from '../utils/httpStatusCode'

const getAll = async (req, res) => {
  try {
    const bookingList = await BookingService.getAll()
    res.status(HTTP_STATUS_CODE.OK).json({
      data: bookingList
    })
  } catch (error) {
    res.status(HTTP_STATUS_CODE.INTERNAL_SERVER).json({
      error: error.message
    })
  }
}

const create = async (req, res) => {
  try {
    const newBooking = req.body
    const booking = await BookingService.create(newBooking)
    res.status(HTTP_STATUS_CODE.OK).json({
      data: {
        bookingId: booking.insertedId
      }
    })
  } catch (error) {
    if (error.errors) {
      return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER).json({
        errors: [...error.errors]
      })
    }

    res.status(HTTP_STATUS_CODE.INTERNAL_SERVER).json({
      error: error.message
    })
  }
}

const getById = async (req, res) => {
  const { bookingId } = req.params
  try {
    const booking = await BookingService.getById(bookingId)
    res.status(HTTP_STATUS_CODE.OK).json({
      data: booking
    })
  } catch (error) {
    res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({
      errors: error.message
    })
  }
}

export const BookingController = {
  getAll,
  create,
  getById
}
