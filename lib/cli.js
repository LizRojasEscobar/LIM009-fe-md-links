"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinksForCli = exports.getStatusOfLinksForCli = void 0;

var _apiMdlinks = require("./api-mdlinks.js");

var getStatusOfLinksForCli = function getStatusOfLinksForCli(arrayOfObj) {
  var arrayOfUrls = arrayOfObj.map(function (element) {
    return element.href;
  });
  var uniqueUrls = new Set(arrayOfUrls);
  var brokenUrls = arrayOfObj.filter(function (element) {
    return element.ok === 'fail';
  });
  return {
    total: arrayOfUrls.length,
    unique: uniqueUrls.size,
    broken: brokenUrls.length
  };
};

exports.getStatusOfLinksForCli = getStatusOfLinksForCli;

var mdLinksForCli = function mdLinksForCli(route, options1, options2) {
  if (route !== undefined && options1 == undefined && options2 == undefined) {
    return (0, _apiMdlinks.mdLinks)(route, {
      validate: false
    }).then(function (result) {
      var newArray = result.map(function (element) {
        //   console.log(`${element.href} ${element.text}${element.file} \n`);
        return "".concat(element.href, " ").concat(element.text, " ").concat(element.file);
      });
      var newArrayWithoutValidate = newArray.toString().replace(/,/g, '\n');
      return newArrayWithoutValidate;
    })["catch"](console.error);
  } else if (route !== undefined && options1 == '--validate' && options2 == undefined) {
    return (0, _apiMdlinks.mdLinks)(route, {
      validate: true
    }).then(function (result) {
      var newArray = result.map(function (element) {
        // console.log(`${element.href}${element.text}${element.file}${element.ok} ${element.status}\n`);
        return "".concat(element.href, " ").concat(element.text, " ").concat(element.file, " ").concat(element.ok, " ").concat(element.status);
      });
      var newArrayWithValidate = newArray.toString().replace(/,/g, '\n');
      return newArrayWithValidate;
    })["catch"](console.error);
  } else if (route !== undefined && options1 == '--stats' && options2 == undefined) {
    return (0, _apiMdlinks.mdLinks)(route, {
      validate: true
    }).then(function (result1) {
      return getStatusOfLinksForCli(result1);
    }).then(function (status) {
      return "Total: ".concat(status.total, "\nUnique: ").concat(status.unique); // console.log(`Total: ${status.total} \nUnique: ${status.unique}\n `);
    })["catch"](console.error);
  } else if (route !== undefined && options1 == '--validate' && options2 == '--stats') {
    return (0, _apiMdlinks.mdLinks)(route, {
      validate: true
    }).then(function (result1) {
      return getStatusOfLinksForCli(result1);
    }).then(function (status) {
      return "Total: ".concat(status.total, "\nUnique: ").concat(status.unique, "\nBroken: ").concat(status.broken); // console.log(`Total: ${status.total} \nUnique: ${status.unique} \nBroken: ${status.broken}\n`);
    })["catch"](console.error);
  } else {
    return (0, _apiMdlinks.mdLinks)(route, {
      validate: true
    }).then(function (result1) {
      return getStatusOfLinksForCli(result1);
    }).then(function (status) {
      return "Total: ".concat(status.total, "\nUnique: ").concat(status.unique, "\nBroken: ").concat(status.broken); // console.log(`Total: ${status.total} \nUnique: ${status.unique} \nBroken: ${status.broken}\n`);
    })["catch"](console.error);
  }
};

exports.mdLinksForCli = mdLinksForCli;