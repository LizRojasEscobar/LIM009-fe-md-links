"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readFileInside = exports.pathFilesAndDirectories = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _fileController = require("./file-controller.js");

var _pathController = require("./path-controller.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pathFilesAndDirectories = function pathFilesAndDirectories(route) {
  //  función que recorre directorio
  var newRoute = (0, _pathController.convertToAbsolute)(route);
  var arrayOfPath = [];

  if ((0, _fileController.verifyFile)("".concat(newRoute))) {
    if ((0, _pathController.verifyExtension)("".concat(newRoute))) {
      arrayOfPath.push("".concat(newRoute));
    }
  } else {
    _fs["default"].readdirSync("".concat(newRoute)).forEach(function (file) {
      arrayOfPath = arrayOfPath.concat(pathFilesAndDirectories(_path["default"].join("".concat(newRoute), "".concat(file))));
    });
  }

  return arrayOfPath;
}; // console.log(pathFilesAndDirectories('../prueba'));


exports.pathFilesAndDirectories = pathFilesAndDirectories;

var readFileInside = function readFileInside(route) {
  // función que lee contenido del archivo
  var arrayContent = [];
  pathFilesAndDirectories(route).forEach(function (file) {
    arrayContent.push({
      content: _fs["default"].readFileSync(file).toString(),
      file: file
    });
  });
  return arrayContent;
}; // console.log(readFileInside('/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba'));


exports.readFileInside = readFileInside;