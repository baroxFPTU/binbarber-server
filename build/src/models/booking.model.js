"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BookingModel = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _moment = _interopRequireDefault(require("moment"));

var yup = _interopRequireWildcard(require("yup"));

var _db = require("../config/db");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var BOOKING_COLLECTION_NAME = 'booking';
var serviceSchema = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  description: yup.string(),
  price: yup.number().required()
});
var bookingSchema = yup.object().shape({
  userId: yup.string().required(),
  selectedServices: yup.array().of(serviceSchema),
  isPaid: yup["boolean"]()["default"](false),
  appliedDiscounts: yup.array(),
  bookedAt: yup.date().required(),
  createdAt: yup.date().nullable()["default"]((0, _moment["default"])().toDate()),
  updatedAt: yup.date().nullable()["default"](null),
  expiredAt: yup.date().required(),
  _destroy: yup["boolean"]()["default"](false)
});

var validateBookingSchema = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(booking) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return bookingSchema.validate(booking, {
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

  return function validateBookingSchema(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getAll = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var response;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _db.getDB)().collection(BOOKING_COLLECTION_NAME).find({}).toArray();

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

  return function getAll() {
    return _ref2.apply(this, arguments);
  };
}();

var create = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(newBooking) {
    var validBooking, createdBooking;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return validateBookingSchema(newBooking);

          case 3:
            validBooking = _context3.sent;
            _context3.next = 6;
            return (0, _db.getDB)().collection(BOOKING_COLLECTION_NAME).insertOne(validBooking);

          case 6:
            createdBooking = _context3.sent;
            console.log(createdBooking);
            return _context3.abrupt("return", createdBooking);

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0.errors);
            throw Error(_context3.t0);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));

  return function create(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var BookingModel = {
  getAll: getAll,
  create: create
};
exports.BookingModel = BookingModel;