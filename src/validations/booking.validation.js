import * as yup from 'yup'
import { serviceSchema } from '../models/booking.model'
import { HTTP_STATUS_CODE } from '../utils/httpStatusCode'

const create = async (req, res, next) => {
  try {
    const condition = yup.object().shape({
      userId: yup.string().required(),
      selectedServices: yup.array().of(serviceSchema).min(1),
      bookedAt: yup.date().required()
    })

    await condition.validate(req.body, { abortEarly: false })
    next()
  } catch (error) {
    console.log(error)
    res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({
      errors: error.errors ? error.errors : error.message
    })
  }
}

export const BookingValidation = {
  create
}
