"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.env = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var env = {
  APP_HOST: process.env.APP_HOST,
  APP_PORT: process.env.APP_PORT,
  DATABASE_NAME: process.env.MONGO_DATABASE_NAME,
  MONGO_URI: process.env.MONGO_URI
};
exports.env = env;