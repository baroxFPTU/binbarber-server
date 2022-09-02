import moment from 'moment'
import * as yup from 'yup'
import { getDB } from '~/config/db'

const workingDateCollectionName = 'working-date'
const DATE_OBJ_NOW = moment(Date.now()).toDate()
const START_OF_TODAY = moment().startOf('day').toDate()

const workingDateSchema = yup.object().shape({
  date_label: yup.string('Date is not valid').required('Date label is required'),
  availableAt: yup
    .date('availableAt must be a date object')
    .min(START_OF_TODAY, 'availableAt value must be after today')
    .required(),
  createAt: yup.date().default(DATE_OBJ_NOW),
  working_times: yup.array().of(
    yup.object().shape({
      hour: yup.number().min(0).max(24),
      minute: yup.number().min(0).max(59)
    })
  )
})

const validateSchema = async (workingDate) => {
  return await workingDateSchema.validate(workingDate, { abortEarly: false })
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
