#!/usr/bin/env node
import {mdLinks} from './api-mdlinks.js'
import {getStatusOfLinksForCli} from './cli.js'

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
  mdLinks(route, {validate: false})
    .then(result => {
      result.forEach(element => {
        console.log(`${element.href} ${element.text.substring(0,50)}${element.file} \n`);
      });
    })
    .catch(console.error);
} 
if (options.validate && !options.stats) {
  mdLinks(route, options)
    .then(result => {
      result.forEach(element => {
        console.log(`${element.href} ${element.text.substring(0,50)}${element.file} ${element.ok} ${element.status}\n`);
      });
    })
    .catch(console.error);
}

if (options.stats && !options.validate) {
  mdLinks(route, {validate: true})
  .then(result1 => getStatusOfLinksForCli(result1))
      .then(stats => { 
          console.log(`Total: ${stats.total} \nUnique: ${stats.unique}\n `);
        })
    .catch(console.error)
};

if (options.stats && options.validate ) {
  mdLinks(route, {validate: true})
  .then(result1 => getStatusOfLinksForCli(result1))
      .then(stats1 => { 
          console.log(`Total: ${stats1.total} \nUnique: ${stats1.unique} \nBroken: ${stats1.broken}\n`);
        })
    .catch(console.error)
}









/*
console.log(`Current directory: ${process.cwd()}`);
path.join(`Current directory: ${process.cwd()}`);
*/