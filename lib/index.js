#!/usr/bin/env node
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

exports.mdLinks = mdLinks;
mdLinks('../README.md', {
  validate: true
}).then(function (result) {
  console.log(result);
});
/*

    
const mdLinks = require("md-links");

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

fetch('https://github.com/lizñañaña')
    .then(res => {
        console.log(res.ok);
        console.log(res.status);
        console.log(res.statusText);
   
    });

console.log(`Current directory: ${process.cwd()}`);
path.join(`Current directory: ${process.cwd()}`);
// promise y file
*/