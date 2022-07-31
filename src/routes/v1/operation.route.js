import express from 'express'
import { OperationController } from '../../controllers/operation.controller'

const router = express.Router()

router
  .route('/working-date')
  .get(OperationController.getAllWorkingDates)
  .post(OperationController.addWorkingDate)

router.route('/working-date/:date').get(OperationController.getWorkingDate)

export const OperationRoute = router
