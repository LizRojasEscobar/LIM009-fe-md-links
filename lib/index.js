#!/usr/bin/env node
"use strict";

var _apiMdlinks = require("./api-mdlinks.js");

var _cli = require("./cli.js");

var args = process.argv.slice(2);
var route = args[0];

var optionForMdlinks = function optionForMdlinks(element) {
  var withoutValidate = "".concat(element.href, " ").concat(element.text, " ").concat(element.file);
  var whitValidate = "".concat(element.status);

  if (args[1] === '--validate') {
    console.log(withoutValidate, whitValidate);
  } else if (!args.includes('--stats', '--validate')) {
    console.log(withoutValidate);
  }
};

(0, _apiMdlinks.mdLinks)(route, {
  validate: true
}).then(function (result) {
  result.forEach(optionForMdlinks);
  var basicStats = (0, _cli.getStatusOfLinksForCli)(result);
  var basic = "\n    Total: ".concat(basicStats.Total, "\n    Unique: ").concat(basicStats.Unique);
  var validated = "\n    Broken: ".concat(basicStats.Broken);

  if (args[1] == '--stats' && !args[2]) {
    console.log(basic);
  } else if (args[1] == '--stats' && args[2] == '--validate') {
    console.log(basic, validated);
  }
});
/* console.log(`Current directory: ${process.cwd()}`);
path.join(`Current directory: ${process.cwd()}`);
*/