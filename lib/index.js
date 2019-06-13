#!/usr/bin/env node

/*
console.log(`Current directory: ${process.cwd()}`);
path.join(`Current directory: ${process.cwd()}`);
// promise y file
*/
"use strict";

var mdLinks = require("md-links");

mdLinks("./some/example.md").then(function (links) {// => [{ href, text, file }]
})["catch"](console.error);
mdLinks("./some/example.md", {
  validate: true
}).then(function (links) {// => [{ href, text, file, status, ok }]
})["catch"](console.error);
mdLinks("./some/dir").then(function (links) {// => [{ href, text, file }]
})["catch"](console.error);
fetch('https://github.com/lizñañaña').then(function (res) {
  console.log(res.ok);
  console.log(res.status);
  console.log(res.statusText);
});