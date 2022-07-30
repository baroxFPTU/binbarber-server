import { OperationModel } from '~/models/operation.model'

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

export const OperationService = {
  getAllWorkingDates,
  addWorkingDate
}
