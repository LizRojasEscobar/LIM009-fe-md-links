#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinksForCli = void 0;

var _apiMdlinks = require("./api-mdlinks.js");

var _cli = require("./cli.js");

/*
const [, , ...params] = process.argv;
const [route, ...opts] = params;*/
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
      return (0, _cli.getStatusOfLinksForCli)(result1);
    }).then(function (status) {
      return "Total: ".concat(status.total, "\nUnique: ").concat(status.unique); // console.log(`Total: ${status.total} \nUnique: ${status.unique}\n `);
    })["catch"](console.error);
  } else if (route !== undefined && options1 == '--validate' && options2 == '--stats') {
    return (0, _apiMdlinks.mdLinks)(route, {
      validate: true
    }).then(function (result1) {
      return (0, _cli.getStatusOfLinksForCli)(result1);
    }).then(function (status) {
      return "Total: ".concat(status.total, "\nUnique: ").concat(status.unique, "\nBroken: ").concat(status.broken); // console.log(`Total: ${status.total} \nUnique: ${status.unique} \nBroken: ${status.broken}\n`);
    })["catch"](console.error);
  }
};

exports.mdLinksForCli = mdLinksForCli;
mdLinksForCli('/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba', '--validate', '--stats').then(function (result) {
  console.log(result);
});
/*
console.log(`Current directory: ${process.cwd()}`);
path.join(`Current directory: ${process.cwd()}`);

const options = {
 validate: false, 
  stats:false
}
const [, , ...params] = process.argv;
const [route, ...opts] = params;

opts.forEach((element) => {
  if ( element === '--validate' &&  element === '--stats') {
    options.validate = true;
    options.stats = true;
  }
  if ( element === '--validate') {
    options.validate = true;
  }
  if (element === '--stats') {
    options.stats = true;
  }
});

if (!options.validate && !options.stats) {
  mdLinks(route,options)
    .then(result => {
      result.forEach(element => {
        console.log(`${element.href} ${element.text}${element.file} \n`);
      });
    })
    .catch(console.error);
} 
if (options.validate && !options.stats) {
  mdLinks(route, options)
    .then(result => {
      result.forEach(element => {
        console.log(`${element.href}${element.text}${element.file}${element.ok} ${element.status}\n`);
      });
    })
    .catch(console.error);
}

if (options.stats && !options.validate) {
  mdLinks(route, options)
  .then(result1 => getStatusOfLinksForCli(result1))
      .then(status => { 
          console.log(`Total: ${status.total} \nUnique: ${status.unique}\n `);
        })
    .catch(console.error)
};

if (options.stats && options.validate ) {
  mdLinks(route, options)
  .then(result1 => getStatusOfLinksForCli(result1))
      .then(status => { 
          console.log(`Total: ${status.total} \nUnique: ${status.unique} \nBroken: ${status.broken}\n`);
        })
    .catch(console.error)
}

*/