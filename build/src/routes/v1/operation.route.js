"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OperationRoute = void 0;

var _express = _interopRequireDefault(require("express"));

var _operation = require("../../controllers/operation.controller");

var router = _express["default"].Router();

router.route('/working-date').get(_operation.OperationController.getAllWorkingDates).post(_operation.OperationController.addWorkingDate);
router.route('/working-date/generate').get(_operation.OperationController.generateWorkingDate);
router.route('/working-date/:date').get(_operation.OperationController.getWorkingDate);
var OperationRoute = router;
exports.OperationRoute = OperationRoute;