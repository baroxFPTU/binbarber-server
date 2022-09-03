"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BookingService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _moment = _interopRequireDefault(require("moment"));

var _booking = require("../models/booking.model");

var getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var bookings;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _booking.BookingModel.getAll();

          case 3:
            bookings = _context.sent;
            return _context.abrupt("return", bookings);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            throw Error(_context.t0.message ? _context.t0.message : _context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getAll() {
    return _ref.apply(this, arguments);
  };
}();

var create = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(newBooking) {
    var createdBooking;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            if (typeof newBooking.bookedAt === 'number') {
              newBooking.bookedAt = (0, _moment["default"])(newBooking.bookedAt);
            }

            newBooking.expiredAt = (0, _moment["default"])(newBooking.bookedAt).add(3, 'd');
            _context2.next = 5;
            return _booking.BookingModel.create(newBooking);

          case 5:
            createdBooking = _context2.sent;
            return _context2.abrupt("return", createdBooking);

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            throw Error(_context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function create(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var BookingService = {
  getAll: getAll,
  create: create
};
exports.BookingService = BookingService;