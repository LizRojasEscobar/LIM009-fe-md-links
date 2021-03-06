"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _linksController = require("./links-controller.js");

// función para la API md-links
var mdLinks = function mdLinks(path, options) {
  return new Promise(function (resolve, reject) {
    if (options.validate === true) {
      resolve((0, _linksController.getStatusOfLInk)((0, _linksController.markdownLinkExtractor)(path)));
    } else {
      resolve((0, _linksController.markdownLinkExtractor)(path));
    }
  });
};
/*
mdLinks ('../prueba', {validate: true})
.then((result)=>{
 console.log(result)
})*/


exports.mdLinks = mdLinks;