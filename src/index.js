#!/usr/bin/env node
import {mdLinks} from './api-mdlinks.js'
import {getStatusOfLinksForCli} from './cli.js'
/*
const [, , ...params] = process.argv;
const [route, ...opts] = params;*/

export const mdLinksForCli = ( route, options1, options2 )=>{
  if (route!==undefined && options1 == undefined &&  options2 == undefined) {
    return mdLinks(route, {validate: false})
    .then(result => {
      const newArray = result.map(element => {
     //   console.log(`${element.href} ${element.text}${element.file} \n`);
      return  `${element.href} ${element.text} ${element.file}`
      })
      const newArrayWithoutValidate = newArray.toString().replace(/,/g,'\n');
      return newArrayWithoutValidate
    }).catch(console.error);
} else if (route!== undefined && options1== '--validate' && options2 ==undefined ){
   return mdLinks(route, {validate: true})
    .then(result => {
      const newArray = result.map(element => {
       // console.log(`${element.href}${element.text}${element.file}${element.ok} ${element.status}\n`);
      return `${element.href} ${element.text} ${element.file} ${element.ok} ${element.status}`
      });
      const newArrayWithValidate = newArray.toString().replace(/,/g,'\n');
      return newArrayWithValidate;
    })
    .catch(console.error);
} else if (route!== undefined && options1=='--stats' && options2 ==undefined){
  
  return mdLinks(route, {validate: true})
  .then(result1 => getStatusOfLinksForCli(result1))
      .then(status => { 
      return `Total: ${status.total}\nUnique: ${status.unique}`
         // console.log(`Total: ${status.total} \nUnique: ${status.unique}\n `);
        })
    .catch(console.error)
} else if (route!== undefined && options1=='--validate' && options2 =='--stats' ){
  return mdLinks(route, {validate: true})
  .then(result1 => getStatusOfLinksForCli(result1))
      .then(status => { 
        return `Total: ${status.total}\nUnique: ${status.unique}\nBroken: ${status.broken}`
        // console.log(`Total: ${status.total} \nUnique: ${status.unique} \nBroken: ${status.broken}\n`);
        })
    .catch(console.error)
} else{
  return mdLinks(route, {validate: true})
  .then(result1 => getStatusOfLinksForCli(result1))
      .then(status => { 
        return `Total: ${status.total}\nUnique: ${status.unique}\nBroken: ${status.broken}`
        // console.log(`Total: ${status.total} \nUnique: ${status.unique} \nBroken: ${status.broken}\n`);
        })
    .catch(console.error)
}
}

mdLinksForCli('/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba','--validate','--stats').then(result =>{
  console.log (result)
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