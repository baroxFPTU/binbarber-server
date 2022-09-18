import moment from 'moment'
import { ObjectId } from 'mongodb'
import * as yup from 'yup'
import { getDB } from '../config/db'

const BOOKING_COLLECTION_NAME = 'booking'

export const serviceSchema = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  description: yup.string(),
  price: yup.number().required()
})

const bookingSchema = yup.object().shape({
  userId: yup.string().required(),
  selectedServices: yup.array().of(serviceSchema).min(1),
  isPaid: yup.number().default(0),
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
    throw new Error(error)
  }
}

const create = async (newBooking) => {
  try {
    const validBooking = await validateBookingSchema(newBooking)
    const createdBooking = await getDB().collection(BOOKING_COLLECTION_NAME).insertOne(validBooking)
    const { bookedAt } = newBooking
    const dateLabel = moment(bookedAt).format('yyyy-MM-DD')
    const timeLabel = moment(bookedAt).format('H:mm')

    await getDB()
      .collection('working-date')
      .updateOne(
        {
          date_label: dateLabel,
          'working_times.time_label': timeLabel
        },
        {
          $set: {
            'working_times.$.isFree': false
          }
        }
      )

    return createdBooking
  } catch (error) {
    throw new Error(error)
  }
}

const getById = async (bookingId) => {
  try {
    const booking = await getDB()
      .collection(BOOKING_COLLECTION_NAME)
      .find({
        _id: ObjectId(bookingId)
      })
      .toArray()

    return booking
  } catch (error) {
    throw new Error(error)
  }
}

export const BookingModel = {
  getAll,
  create,
  getById
}
