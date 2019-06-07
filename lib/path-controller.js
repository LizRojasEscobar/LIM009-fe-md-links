"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyExtension = exports.convertToAbsolute = void 0;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// funcion de verificacion de ruta y  verificar archivo o directorio
var convertToAbsolute = function convertToAbsolute(route) {
  if (!_path["default"].isAbsolute("".concat(route))) return _path["default"].resolve("".concat(route));
};

exports.convertToAbsolute = convertToAbsolute;

var verifyExtension = function verifyExtension(file) {
  if (_path["default"].extname("".concat(file)) === '.md') {
    return _path["default"].extname("".concat(file));
  }
}; //console.log(convertToAbsolute('README.md'));


exports.verifyExtension = verifyExtension;