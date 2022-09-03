"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OperationModel = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _moment = _interopRequireDefault(require("moment"));

var yup = _interopRequireWildcard(require("yup"));

var _db = require("../config/db");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var workingDateCollectionName = 'working-date';
var DATE_OBJ_NOW = (0, _moment["default"])(Date.now()).toDate();
var START_OF_TODAY = (0, _moment["default"])().startOf('day').toDate();
var workingDateSchema = yup.object().shape({
  date_label: yup.string('Date is not valid').required('Date label is required'),
  availableAt: yup.date('availableAt must be a date object').min(START_OF_TODAY, 'availableAt value must be after today').required(),
  createAt: yup.date()["default"](DATE_OBJ_NOW),
  working_times: yup.array().of(yup.object().shape({
    hour: yup.number().min(0).max(24),
    minute: yup.number().min(0).max(59)
  }))
});

var validateSchema = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(workingDate) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return workingDateSchema.validate(workingDate, {
              abortEarly: false
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function validateSchema(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getAllWorkingDates = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var response;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _db.getDB)().collection(workingDateCollectionName).find({}).toArray();

          case 3:
            response = _context2.sent;
            return _context2.abrupt("return", response);

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            throw Error(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getAllWorkingDates() {
    return _ref2.apply(this, arguments);
  };
}();

var getWorkingDate = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(date) {
    var response;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _db.getDB)().collection(workingDateCollectionName).findOne({
              availableAt: date
            });

          case 3:
            response = _context3.sent;
            return _context3.abrupt("return", response);

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            throw Error(_context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function getWorkingDate(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var addWorkingDate = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(newWorkingDate) {
    var validDate, query, update, options, response, workingDate;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return validateSchema(newWorkingDate);

          case 3:
            validDate = _context4.sent;
            query = {
              date_label: validDate.date_label
            };
            update = {
              $set: _objectSpread({}, validDate)
            };
            options = {
              upsert: true
            };
            _context4.next = 9;
            return (0, _db.getDB)().collection(workingDateCollectionName).updateOne(query, update, options);

          case 9:
            response = _context4.sent;
            _context4.next = 12;
            return (0, _db.getDB)().collection(workingDateCollectionName).findOne({
              _id: response.upsertedId
            });

          case 12:
            workingDate = _context4.sent;
            return _context4.abrupt("return", workingDate);

          case 16:
            _context4.prev = 16;
            _context4.t0 = _context4["catch"](0);
            throw Error(_context4.t0);

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 16]]);
  }));

  return function addWorkingDate(_x3) {
    return _ref4.apply(this, arguments);
  };
}();

var OperationModel = {
  getAllWorkingDates: getAllWorkingDates,
  getWorkingDate: getWorkingDate,
  addWorkingDate: addWorkingDate
};
exports.OperationModel = OperationModel;