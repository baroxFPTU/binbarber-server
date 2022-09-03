"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OperationService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _operation = require("../models/operation.model");

var _utils = require("../utils");

var getAllWorkingDates = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var workingTime;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _operation.OperationModel.getAllWorkingDates();

          case 3:
            workingTime = _context.sent;
            return _context.abrupt("return", workingTime);

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

  return function getAllWorkingDates() {
    return _ref.apply(this, arguments);
  };
}();

var addWorkingDate = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(newWorkingDate) {
    var response;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _operation.OperationModel.addWorkingDate(newWorkingDate);

          case 3:
            response = _context2.sent;
            return _context2.abrupt("return", response);

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            throw Error(_context2.t0.message ? _context2.t0.message : _context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function addWorkingDate(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var getWorkingDate = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(stringDate) {
    var formatDate, workingDate;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;

            if (!_utils.dateUtils.isValidDate(stringDate)) {
              _context3.next = 7;
              break;
            }

            formatDate = _utils.dateUtils.formatStringToDate(stringDate);
            _context3.next = 5;
            return _operation.OperationModel.getWorkingDate(formatDate);

          case 5:
            workingDate = _context3.sent;
            return _context3.abrupt("return", workingDate);

          case 7:
            throw new Error("Invalid date: ".concat(stringDate));

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            throw Error(_context3.t0.message ? _context3.t0.message : _context3.t0);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));

  return function getWorkingDate(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var generateWorkingDate = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(stringDate) {
    var newWorkingDate, workingDate;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            newWorkingDate = _utils.dateUtils.generateWorkingDate(stringDate);
            _context4.next = 4;
            return _operation.OperationModel.addWorkingDate(newWorkingDate);

          case 4:
            workingDate = _context4.sent;

            if (workingDate) {
              _context4.next = 7;
              break;
            }

            throw new Error('Working date is exit');

          case 7:
            return _context4.abrupt("return", workingDate);

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            throw Error(_context4.t0.message ? _context4.t0.message : _context4.t0);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));

  return function generateWorkingDate(_x3) {
    return _ref4.apply(this, arguments);
  };
}();

var OperationService = {
  getAllWorkingDates: getAllWorkingDates,
  getWorkingDate: getWorkingDate,
  addWorkingDate: addWorkingDate,
  generateWorkingDate: generateWorkingDate
};
exports.OperationService = OperationService;