"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _linksController = require("./links-controller.js");

var mdLinks = function mdLinks(path, options) {
  return new Promise(function (resolve, reject) {
    if (options.validate === true) {
      resolve((0, _linksController.getStatusOfLInk)((0, _linksController.markdownLinkExtractor)(path)));
    } else {
      resolve((0, _linksController.markdownLinkExtractor)(path));
    }
  });
};

exports.mdLinks = mdLinks;
mdLinks('../prueba', {
  validate: true
}).then(function (result) {
  console.log(result);
});