#!/usr/bin/env node
import {mdLinksForCli} from './cli.js'
const args = process.argv.slice(2);

mdLinksForCli(args[0],args[1] ,args[2]).then(result =>{
  console.log (result);
});

//console.log(`Current directory: ${process.cwd()}`);
//console.log(path.join(process.cwd(),'foo'));

