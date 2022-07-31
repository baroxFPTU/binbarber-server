import moment from 'moment'

const isValidDate = (date) => {
  const m = moment(date)
  return m.isValid()
}

const formatStringToDate = (date) => {
  return moment(date).toDate()
}

const getStartOfDay = (date) => {
  return moment(date).startOf('day').toDate()
}

export const dateUtils = {
  isValidDate,
  formatStringToDate,
  getStartOfDay
}
