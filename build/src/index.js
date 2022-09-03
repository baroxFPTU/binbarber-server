"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _environment = require("./config/environment.js");

var _v = require("./routes/v1");

var _db = require("./config/db");

(0, _db.connectDB)().then(function () {
  return console.log('Database is connected');
}).then(function () {
  return bootServer();
})["catch"](function (err) {
  return console.log(err);
});

var bootServer = function bootServer() {
  var app = (0, _express["default"])();
  app.use((0, _cors["default"])({
    origin: 'http://localhost:3000',
    optionSuccessStatus: 200
  }));
  app.use((0, _helmet["default"])());
  app.use(_express["default"].json());
  app.use(_express["default"].urlencoded({
    extended: false
  }));
  app.use('/v1', _v.apiV1);
  app.listen(_environment.env.APP_PORT, _environment.env.APP_HOST, function () {
    console.log("Server running at http://".concat(_environment.env.APP_HOST, ":").concat(_environment.env.APP_PORT, "/"));
  });
};