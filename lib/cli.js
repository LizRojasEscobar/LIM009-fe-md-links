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
    total: arrayOfUrls.length,
    unique: uniqueUrls.size,
    broken: brokenUrls.length
  };
};
/*

  export const total =(array)=>{
  const arrayOfAllUrl =array.map(element =>{
    return element
  })
  }*/


exports.getStatusOfLinksForCli = getStatusOfLinksForCli;