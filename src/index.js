#!/usr/bin/env node
import {mdLinks} from './api-mdlinks.js'
import {getStatusOfLinksForCli} from './cli.js'

const args = process.argv.slice(2)
const route = args[0]

const optionsforMdlinks = element =>{
  const withoutValidate = `${element.href} ${element.text.substring(0,50)} ${element.file}`;
  const whitValidate =`${element.status}`;
  if(args[1]==='validate'){
    console.log(withoutValidate,whitValidate)
  }
  else if (!args.includes('--stats', '--validate')) {
    console.log(withoutValidate)
}
};

mdLinks(route, { validate: true }).then(result => {
  result.forEach(options)
  const basicStats = getStatusOfLinksForCli(result);
  const basic = `
    Total: ${basicStats.total}
    Unique: ${basicStats.unique}`
  const validated = `
    Broken: ${basicStats.broken}`

  if (args[1] == '--stats' && !args[2]) {
    console.log(basic)
  } else if (args[1] == '--stats' && args[2] == '--validate') {
    console.log(basic, validated)
  }
});
/* console.log(`Current directory: ${process.cwd()}`);
path.join(`Current directory: ${process.cwd()}`);
*/