import { OperationModel } from '~/models/operation.model'
import { dateUtils } from '~/utils'

const getAllWorkingDates = async () => {
  try {
    const workingTime = await OperationModel.getAllWorkingDates()
    return workingTime
  } catch (error) {
    throw Error(error.message ? error.message : error)
  }
}

const addWorkingDate = async (newWorkingDate) => {
  try {
    const response = await OperationModel.addWorkingDate(newWorkingDate)
    return response
  } catch (error) {
    throw Error(error.message ? error.message : error)
  }
}

const getWorkingDate = async (stringDate) => {
  try {
    if (dateUtils.isValidDate(stringDate)) {
      const formatDate = dateUtils.formatStringToDate(stringDate)
      let workingDate = await OperationModel.getWorkingDate(formatDate)
      return workingDate
    }

    throw new Error(`Invalid date: ${stringDate}`)
  } catch (error) {
    throw Error(error.message ? error.message : error)
  }
}

const generateWorkingDate = async (stringDate) => {
  try {
    const newWorkingDate = dateUtils.generateWorkingDate(stringDate)

    const workingDate = await OperationModel.addWorkingDate(newWorkingDate)
    if (!workingDate) throw new Error('Working date is exit')

    return workingDate
  } catch (error) {
    throw Error(error.message ? error.message : error)
  }
}

export const OperationService = {
  getAllWorkingDates,
  getWorkingDate,
  addWorkingDate,
  generateWorkingDate
}
