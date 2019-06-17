import {convertToAbsolute} from './path-controller.js'
import {markdownLinkExtractor,getStatusOfLInk} from './links-controller.js';


export const mdLinks =(path, options)=>{
return new Promise((resolve, reject)=>{
  if(convertToAbsolute(path) && options.validate ===false){
    resolve( markdownLinkExtractor(path));
  } else if (convertToAbsolute(path) && options.validate===true ){
    resolve(getStatusOfLInk(markdownLinkExtractor(path))
    )
  }else{
    console.log('error')
  }
  })
} 

mdLinks ('/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba/README.md', {validate: true})
.then((result)=>{
 console.log(result)
})
