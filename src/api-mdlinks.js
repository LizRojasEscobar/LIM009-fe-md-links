import {markdownLinkExtractor,getStatusOfLInk} from './links-controller.js';

export const mdLinks =(path, options)=>{
return new Promise((resolve, reject)=>{
  if(options.validate ===true){
    resolve(getStatusOfLInk(markdownLinkExtractor(path)))
  }else{
    resolve( markdownLinkExtractor(path));
  }
  })
} 
/*
mdLinks ('../prueba', {validate: true})
.then((result)=>{
 console.log(result)
})*/