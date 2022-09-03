"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BookingController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _booking = require("../services/booking.service");

var _httpStatusCode = require("../utils/httpStatusCode");

var getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var bookingList;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _booking.BookingService.getAll();

          case 3:
            bookingList = _context.sent;
            res.status(_httpStatusCode.HTTP_STATUS_CODE.OK).json({
              data: bookingList
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.status(_httpStatusCode.HTTP_STATUS_CODE.INTERNAL_SERVER).json({
              error: _context.t0.message
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getAll(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var create = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var newBooking, booking;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            newBooking = req.body;
            _context2.next = 4;
            return _booking.BookingService.create(newBooking);

          case 4:
            booking = _context2.sent;
            res.status(_httpStatusCode.HTTP_STATUS_CODE.OK).json({
              data: {
                bookingId: booking.insertedId
              }
            });
            _context2.next = 13;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);

            if (!_context2.t0.errors) {
              _context2.next = 12;
              break;
            }

            return _context2.abrupt("return", res.status(_httpStatusCode.HTTP_STATUS_CODE.INTERNAL_SERVER).json({
              errors: (0, _toConsumableArray2["default"])(_context2.t0.errors)
            }));

          case 12:
            res.status(_httpStatusCode.HTTP_STATUS_CODE.INTERNAL_SERVER).json({
              error: _context2.t0.message
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function create(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var BookingController = {
  getAll: getAll,
  create: create
};
exports.BookingController = BookingController;