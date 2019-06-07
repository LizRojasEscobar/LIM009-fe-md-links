#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathFiles = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _fileController = require("./file-controller.js");

var _pathController = require("./path-controller.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pathFiles = function pathFiles(route) {
  var arrayOfPath = [];

  if ((0, _fileController.verifyFile)("".concat(route))) {
    if ((0, _pathController.verifyExtension)("".concat(route))) {
      arrayOfPath.push("".concat(route));
    }
  } else {
    _fs["default"].readdirSync("".concat(route)).forEach(function (file) {
      arrayOfPath = arrayOfPath.concat(pathFiles(_path["default"].join("".concat(route), "".concat(file))));
    });
  }

  return arrayOfPath;
};

exports.pathFiles = pathFiles;
console.log(pathFiles('/home/liz/Documentos/md.links/LIM009-fe-md-links/node_modules'));
/*
console.log(`Current directory: ${process.cwd()}`);
path.join(`Current directory: ${process.cwd()}`);
// promise y file
*/