"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyExtension = exports.convertToAbsolute = void 0;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var convertToAbsolute = function convertToAbsolute(route) {
  // función que convierte la ruta en absoluta 
  var absoluteRoute;

  if (!_path["default"].isAbsolute("".concat(route))) {
    absoluteRoute = _path["default"].resolve("".concat(route));
  } else {
    absoluteRoute = route;
  }

  return absoluteRoute;
};

exports.convertToAbsolute = convertToAbsolute;

var verifyExtension = function verifyExtension(file) {
  //  función que verifica la extension del archivo
  return _path["default"].extname("".concat(file)) === ".md";
}; // console.log(convertToAbsolute("README.md"));


exports.verifyExtension = verifyExtension;