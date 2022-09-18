import moment from 'moment'
import { WORKING_TIME_SAMPLE } from './constant'

const isValidDate = (stringDate) => {
  const m = moment(stringDate)
  return m.isValid()
}

const formatStringToDate = (date) => {
  return moment(date.trim()).local().toDate()
}

const getStartOfDay = (date) => {
  return moment(date).startOf('day').toDate()
}

const getWorkingDateSample = (date) => {
  return {
    date_label: date,
    working_times: [...WORKING_TIME_SAMPLE],
    availableAt: formatStringToDate(date)
  }
}

export const dateUtils = {
  isValidDate,
  getStartOfDay,
  formatStringToDate,
  getWorkingDateSample
}
