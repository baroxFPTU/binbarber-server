"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateUtils = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _moment = _interopRequireDefault(require("moment"));

var _constant = require("./constant");

var isValidDate = function isValidDate(stringDate) {
  var m = (0, _moment["default"])(stringDate);
  return m.isValid();
};

var formatStringToDate = function formatStringToDate(date) {
  return (0, _moment["default"])(date.trim()).local().toDate();
};

var getStartOfDay = function getStartOfDay(date) {
  return (0, _moment["default"])(date).startOf('day').toDate();
};

var generateWorkingDate = function generateWorkingDate(date) {
  return {
    date_label: date,
    working_times: (0, _toConsumableArray2["default"])(_constant.WORKING_TIME_SAMPLE),
    availableAt: formatStringToDate(date)
  };
};

var dateUtils = {
  isValidDate: isValidDate,
  getStartOfDay: getStartOfDay,
  formatStringToDate: formatStringToDate,
  generateWorkingDate: generateWorkingDate
};
exports.dateUtils = dateUtils;