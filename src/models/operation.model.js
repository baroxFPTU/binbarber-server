import Joi from 'joi'
import moment from 'moment'
import { getDB } from '~/config/db'

const workingDateCollectionName = 'working-date'

const workingDateSchema = Joi.object({
  date_label: Joi.string().required(),
  availableAt: Joi.date().iso().min(moment().startOf('day').toDate()).required(), // Use moment to correct the format of now to ISO.
  createdAt: Joi.date().default(moment(Date.now()).toDate()),
  working_times: Joi.array()
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
    const response = await getDB().collection(workingDateCollectionName).find({}).toArray()
    return response
  } catch (error) {
    throw Error(error)
  }
}

const getWorkingDate = async (date) => {
  try {
    console.log(date)
    const response = await getDB().collection(workingDateCollectionName).findOne({
      availableAt: date
    })

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

    const response = await getDB()
      .collection(workingDateCollectionName)
      .updateOne(query, update, options)

    const workingDate = await getDB().collection(workingDateCollectionName).findOne({
      _id: response.upsertedId
    })

    return workingDate
  } catch (err) {
    throw Error(err)
  }
}

export const OperationModel = {
  getAllWorkingDates,
  getWorkingDate,
  addWorkingDate
}