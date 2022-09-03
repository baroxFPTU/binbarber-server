"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OperationController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _httpStatusCode = require("../utils/httpStatusCode");

var _operation = require("../services/operation.service");

var getAllWorkingDates = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var listWorkingTime;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _operation.OperationService.getAllWorkingDates();

          case 3:
            listWorkingTime = _context.sent;
            res.status(_httpStatusCode.HTTP_STATUS_CODE.OK).json({
              data: listWorkingTime
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

  return function getAllWorkingDates(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var addWorkingDate = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var newWorkingDate;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            newWorkingDate = req.body;
            _context2.prev = 1;
            _context2.next = 4;
            return _operation.OperationService.addWorkingDate(newWorkingDate);

          case 4:
            res.status(_httpStatusCode.HTTP_STATUS_CODE.OK).json({
              message: 'Add successfully'
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](1);
            res.status(_httpStatusCode.HTTP_STATUS_CODE.INTERNAL_SERVER).json({
              error: _context2.t0.message
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 7]]);
  }));

  return function addWorkingDate(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var getWorkingDate = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var date, workingDate;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            date = req.params.date;
            _context3.next = 4;
            return _operation.OperationService.getWorkingDate(date);

          case 4:
            workingDate = _context3.sent;
            res.status(_httpStatusCode.HTTP_STATUS_CODE.OK).json({
              data: workingDate
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            res.status(_httpStatusCode.HTTP_STATUS_CODE.INTERNAL_SERVER).json({
              error: _context3.t0.message
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function getWorkingDate(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var generateWorkingDate = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var stringDate, workingDate;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            stringDate = req.query.date;
            _context4.next = 4;
            return _operation.OperationService.generateWorkingDate(stringDate);

          case 4:
            workingDate = _context4.sent;
            res.status(_httpStatusCode.HTTP_STATUS_CODE.OK).json({
              data: workingDate
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            res.status(_httpStatusCode.HTTP_STATUS_CODE.INTERNAL_SERVER).json({
              error: _context4.t0.message
            });

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));

  return function generateWorkingDate(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var OperationController = {
  getAllWorkingDates: getAllWorkingDates,
  addWorkingDate: addWorkingDate,
  getWorkingDate: getWorkingDate,
  generateWorkingDate: generateWorkingDate
};
exports.OperationController = OperationController;