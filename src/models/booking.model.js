import { getDB } from '../config/db'

const BOOKING_COLLECTION_NAME = 'booking'

const getAll = async () => {
  try {
    const response = await getDB().collection(BOOKING_COLLECTION_NAME).find({})
    return response.toArray()
  } catch (error) {
    throw Error(error)
  }
}

export const BookingModel = {
  getAll
}
