"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BookingRoute = void 0;

var _express = _interopRequireDefault(require("express"));

var _booking = require("../../controllers/booking.controller");

var router = _express["default"].Router();

router.route('/').get(_booking.BookingController.getAll).post(_booking.BookingController.create);
var BookingRoute = router;
exports.BookingRoute = BookingRoute;