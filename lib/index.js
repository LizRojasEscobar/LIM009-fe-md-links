#!/usr/bin/env node
"use strict";

var _apiMdlinks = require("./api-mdlinks.js");

var _cli = require("./cli.js");

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var options = {
  validate: false,
  stats: false
};

var _process$argv = _toArray(process.argv),
    params = _process$argv.slice(2);

var _params = _toArray(params),
    route = _params[0],
    opts = _params.slice(1);

opts.forEach(function (element) {
  if (element === '--validate' && element === '--stats') {
    options.validate = true;
    options.stats = true;
  }

  if (element === '--validate') {
    options.validate = true;
  }

  if (element === '--stats') {
    options.stats = true;
  }
});

if (!options.validate && !options.stats) {
  (0, _apiMdlinks.mdLinks)(route, {
    validate: false
  }).then(function (result) {
    result.forEach(function (element) {
      console.log("".concat(element.href, " ").concat(element.text.substring(0, 50)).concat(element.file, " \n"));
    });
  })["catch"](console.error);
}

if (options.validate && !options.stats) {
  (0, _apiMdlinks.mdLinks)(route, options).then(function (result) {
    result.forEach(function (element) {
      console.log("".concat(element.href, " ").concat(element.text.substring(0, 50)).concat(element.file, " ").concat(element.ok, " ").concat(element.status, "\n"));
    });
  })["catch"](console.error);
}

if (options.stats && !options.validate) {
  (0, _apiMdlinks.mdLinks)(route, {
    validate: true
  }).then(function (result1) {
    return (0, _cli.getStatusOfLinksForCli)(result1);
  }).then(function (stats) {
    console.log("Total: ".concat(stats.total, " \nUnique: ").concat(stats.unique, "\n "));
  })["catch"](console.error);
}

;

if (options.stats && options.validate) {
  (0, _apiMdlinks.mdLinks)(route, {
    validate: true
  }).then(function (result1) {
    return (0, _cli.getStatusOfLinksForCli)(result1);
  }).then(function (stats1) {
    console.log("Total: ".concat(stats1.total, " \nUnique: ").concat(stats1.unique, " \nBroken: ").concat(stats1.broken, "\n"));
  })["catch"](console.error);
}
/*
console.log(`Current directory: ${process.cwd()}`);
path.join(`Current directory: ${process.cwd()}`);
*/