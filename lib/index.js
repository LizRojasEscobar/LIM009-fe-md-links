#!/usr/bin/env node
"use strict";

var _cli = require("./cli.js");

var args = process.argv.slice(2);
(0, _cli.mdLinksForCli)(args[0], args[1], args[2]).then(function (result) {
  console.log(result);
});
/*
console.log(`Current directory: ${process.cwd()}`);
path.join(`Current directory: ${process.cwd()}`);
*/