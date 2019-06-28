"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyFile = void 0;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var verifyFile = function verifyFile(file) {
  //  función que verifica si es archivo
  var stats = _fs["default"].statSync("".concat(file));

  return stats.isFile();
};

exports.verifyFile = verifyFile;