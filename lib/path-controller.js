"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyExtension = exports.convertToAbsolute = void 0;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// funcion de verificacion de ruta y  verificar archivo o directorio
var convertToAbsolute = function convertToAbsolute(route) {
  var absoluteRoute;

  if (!_path["default"].isAbsolute("".concat(route))) {
    absoluteRoute = _path["default"].resolve("".concat(route));
  } else {
    absoluteRoute = _path["default"].isAbsolute("".concat(route));
  }

  return absoluteRoute;
};

exports.convertToAbsolute = convertToAbsolute;

var verifyExtension = function verifyExtension(file) {
  if (_path["default"].extname("".concat(file)) === '.md') {
    return _path["default"].extname("".concat(file));
  }
};

exports.verifyExtension = verifyExtension;
console.log(convertToAbsolute('/home/liz/Documentos/md.links/LIM009-fe-md-links/README.md'));