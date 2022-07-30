import Joi from 'joi'
import { getDB } from '../config/db'

const workingDateSchema = Joi.object({
  date_label: Joi.string().required(),
  createdAt: Joi.date().default(Date.now()),
  availableAt: Joi.array()
    .items(
      Joi.object({
        hour: Joi.number().min(0).max(24).required(),
        minute: Joi.number().min(0).max(59).required(),
        isFree: Joi.boolean().default(true)
      })
    )
    .default([])
})

const validateSchema = async (workingDate) => {
  return await workingDateSchema.validateAsync(workingDate, { abortEarly: false })
}

const getAllWorkingDates = async () => {
  try {
    const response = await getDB().collection('working-time').find({}).toArray()
    return response
  } catch (error) {
    throw Error(error)
  }
}

const addWorkingDate = async (newWorkingDate) => {
  try {
    const validDate = await validateSchema(newWorkingDate)
    const query = { date_label: validDate.date_label }
    const update = {
      $set: { ...validDate }
    }
    const options = { upsert: true }

    const response = await getDB().collection('working-time').updateOne(query, update, options)
    console.log('response at model ', response)

    return response
  } catch (err) {
    throw Error(err)
  }
}

export const OperationModel = {
  getAllWorkingDates,
  addWorkingDate
}
