import { HTTP_STATUS_CODE } from '~/utils/httpStatusCode'
import { OperationService } from '../services/operation.service'

const getAllWorkingDates = async (req, res) => {
  try {
    const listWorkingTime = await OperationService.getAllWorkingDates()
    res.status(HTTP_STATUS_CODE.OK).json({
      data: listWorkingTime
    })
  } catch (error) {
    res.status(HTTP_STATUS_CODE.INTERNAL_SERVER).json({
      error: error.message
    })
  }
}

const addWorkingDate = async (req, res) => {
  const newWorkingDate = req.body
  console.log('new working date: ', newWorkingDate)
  try {
    const response = await OperationService.addWorkingDate(newWorkingDate)
    res.status(HTTP_STATUS_CODE.OK).json({
      message: 'Add successfully'
    })
  } catch (err) {
    res.status(HTTP_STATUS_CODE.INTERNAL_SERVER).json({
      error: err.message
    })
  }
}

export const OperationController = {
  getAllWorkingDates,
  addWorkingDate
}
