"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStatusOfLinksForCli = void 0;

var getStatusOfLinksForCli = function getStatusOfLinksForCli(arrayOfObj) {
  var arrayOfUrls = arrayOfObj.map(function (element) {
    return element.href;
  });
  var uniqueUrls = new Set(arrayOfUrls);
  var brokenUrls = arrayOfObj.filter(function (element) {
    return element.ok === 'fail';
  });
  return {
    Total: arrayOfUrls.length,
    Unique: uniqueUrls.size,
    Broken: brokenUrls.length
  };
};

exports.getStatusOfLinksForCli = getStatusOfLinksForCli;