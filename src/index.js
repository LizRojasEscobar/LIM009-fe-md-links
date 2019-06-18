#!/usr/bin/env node
import {mdLinks} from './api-mdlinks.js'
import {getStatusOfLinksForCli} from './cli.js'

const args = process.argv.slice(2)
const route = args[0]

const optionForMdlinks = element =>{
  const withoutValidate = `${element.href} ${element.text} ${element.file}`;
  const whitValidate =`${element.status}`;
  if(args[1]==='--validate'){
    console.log(withoutValidate,whitValidate)
  }
  else if (!args.includes('--stats', '--validate')) {
    console.log(withoutValidate)
}
};

mdLinks(route, { validate: true }).then(result => {
  result.forEach(optionForMdlinks)
  const firststats = getStatusOfLinksForCli(result);
  const resultOfStats = `
    Total: ${firststats.total}
    Unique: ${firststats.unique}`
  const brokenStats = `
    Broken: ${firststats.broken}`

  if (args[1] == '--stats' && !args[2]) {
    console.log(resultOfStats)
  } else if (args[1] == '--stats' && args[2] == '--validate') {
    console.log(resultOfStats, brokenStats)
  }
});




/* console.log(`Current directory: ${process.cwd()}`);
path.join(`Current directory: ${process.cwd()}`);
*/