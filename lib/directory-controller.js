"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathFilesAndDirectories = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _fileController = require("./file-controller.js");

var _pathController = require("./path-controller.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pathFilesAndDirectories = function pathFilesAndDirectories(route) {
  var arrayOfPath = [];

  if ((0, _fileController.verifyFile)("".concat(route))) {
    if ((0, _pathController.verifyExtension)("".concat(route))) {
      arrayOfPath.push("".concat(route));
    }
  } else {
    _fs["default"].readdirSync("".concat(route)).forEach(function (file) {
      arrayOfPath = arrayOfPath.concat(pathFilesAndDirectories(_path["default"].join("".concat(route), "".concat(file))));
    });
  }

  return arrayOfPath;
};

exports.pathFilesAndDirectories = pathFilesAndDirectories;
console.log(pathFilesAndDirectories('/home/liz/Documentos/md.links/LIM009-fe-md-links/lib'));
/*
export const readFileInside = route => {
  let arrayContent = [];
  pathFilesAndDirectories(route).forEach(file => {
    arrayContent.push({
      content: fs.readFileSync(file).toString(),
      file: file
    });
  });

  return arrayContent;
};
*/