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

export const BookingController = {
  getAll
}
