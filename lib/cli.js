"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linkStats = exports.getStatusOfLinksForCli = void 0;

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

var linkStats = function linkStats(arrObj) {
  var allUrl = arrObj.map(function (el) {
    return el.href;
  });
  var url = new Set(allUrl);
  var failUrl = arrObj.filter(function (el) {
    return el.ok === 'fail';
  });
  return {
    total: allUrl.length,
    unique: url.size,
    broken: failUrl.length
  };
};

exports.linkStats = linkStats;