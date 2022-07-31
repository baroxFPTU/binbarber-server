import { OperationModel } from '~/models/operation.model'
import { dateUtils } from '../utils'

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
    if (!newWorkingDate.availableAt || !dateUtils.isValidDate(newWorkingDate.availableAt)) {
      newWorkingDate.availableAt = dateUtils.getStartOfDay(newWorkingDate.date_label || Date.now())
    }

    const response = await OperationModel.addWorkingDate(newWorkingDate)
    return response
  } catch (error) {
    throw Error(error.message ? error.message : error)
  }
}

const getWorkingDate = async (date) => {
  try {
    if (dateUtils.isValidDate(date)) {
      const formatDate = dateUtils.formatStringToDate(date)
      const workingDate = await OperationModel.getWorkingDate(formatDate)
      return workingDate
    }

    throw new Error(`Invalid date: ${date}`)
  } catch (error) {
    throw Error(error.message ? error.message : error)
  }
}

export const OperationService = {
  getAllWorkingDates,
  getWorkingDate,
  addWorkingDate
}
