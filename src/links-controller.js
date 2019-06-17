import { readFileInside } from "./directory-controller.js";
import marked from "marked";
import  fetch from 'node-fetch';


export const markdownLinkExtractor = route => {
  let arrayWithlinks = [];
  readFileInside(route).forEach(element => {
    let renderer = new marked.Renderer();
    renderer.link = (href, title, text) => {
      arrayWithlinks.push({
        href: href,
        text: text,
        file: element.file
      });
    };

    marked(element.content, { renderer: renderer });
    
  });
  return arrayWithlinks;
};

//console.log(markdownLinkExtractor('/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba'));



export const getStatusOfLInk = (array)=>{
  const responsePromises = array.map(obj =>{
  return  fetch(obj.href)
    .then ((result)=>{
         obj.status =result.status;
         if (result.ok){
          obj.ok ='ok';
         }else{
          obj.ok ='fail';
         }
      return obj
    })
    
  })
return Promise.all(responsePromises);
}

/*
getStatusOfLInk(markdownLinkExtractor("/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba/README.md"))
.then ((result)=>{
  console.log(result);
 })

*/


