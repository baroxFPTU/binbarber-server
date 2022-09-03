"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiV1 = void 0;

var _express = _interopRequireDefault(require("express"));

var _booking = require("./booking.route");

var _operation = require("./operation.route");

var router = _express["default"].Router();
/**
 * Booking APIs
 */


router.use('/bookings', _booking.BookingRoute);
/**
 * Operation APIs
 */

router.use('/operation', _operation.OperationRoute);
/**
 * Root
 */

router.use('/', function (req, res) {
  res.send('<h1>Hello, welcome to Binbarber APIs</h1>');
});
var apiV1 = router;
exports.apiV1 = apiV1;