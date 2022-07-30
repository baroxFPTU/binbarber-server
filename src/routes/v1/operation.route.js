import express from 'express'
import { OperationController } from '../../controllers/operation.controller'

const router = express.Router()

router
  .route('/working-time')
  .get(OperationController.getAllWorkingDates)
  .post(OperationController.addWorkingDate)

export const OperationRoute = router
