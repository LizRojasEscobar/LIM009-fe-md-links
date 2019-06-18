"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _pathController = require("./path-controller.js");

var _linksController = require("./links-controller.js");

var mdLinks = function mdLinks(path, options) {
  return new Promise(function (resolve, reject) {
    if ((0, _pathController.convertToAbsolute)(path) && options.validate === false) {
      resolve((0, _linksController.markdownLinkExtractor)(path));
    } else if ((0, _pathController.convertToAbsolute)(path) && options.validate === true) {
      resolve((0, _linksController.getStatusOfLInk)((0, _linksController.markdownLinkExtractor)(path)));
    }
  });
};
/*
mdLinks ('/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba/README.md', {validate: true})
.then((result)=>{
 console.log(result)
})
*/


exports.mdLinks = mdLinks;