import moment from 'moment'
import * as yup from 'yup'
import { getDB } from '../config/db'

const BOOKING_COLLECTION_NAME = 'booking'

const serviceSchema = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  description: yup.string(),
  price: yup.number().required()
})

const bookingSchema = yup.object().shape({
  userId: yup.string().required(),
  selectedServices: yup.array().of(serviceSchema),
  isPaid: yup.boolean().default(false),
  appliedDiscounts: yup.array(),
  bookedAt: yup.date().required(),
  createdAt: yup.date().nullable().default(moment().toDate()),
  updatedAt: yup.date().nullable().default(null),
  expiredAt: yup.date().required(),
  _destroy: yup.boolean().default(false)
})

const validateBookingSchema = async (booking) => {
  return await bookingSchema.validate(booking, { abortEarly: false })
}

const getAll = async () => {
  try {
    const response = await getDB().collection(BOOKING_COLLECTION_NAME).find({}).toArray()
    return response
  } catch (error) {
    throw Error(error)
  }
}

const create = async (newBooking) => {
  try {
    const validBooking = await validateBookingSchema(newBooking)
    const createdBooking = await getDB().collection(BOOKING_COLLECTION_NAME).insertOne(validBooking)
    console.log(createdBooking)
    return createdBooking
  } catch (error) {
    console.log(error.errors)
    throw Error(error)
  }
}

export const BookingModel = {
  getAll,
  create
}
