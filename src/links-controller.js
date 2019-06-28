import { readFileInside } from "./directory-controller.js";
import marked from "marked";
import  fetch from 'node-fetch';

// función que obtiene links
export const markdownLinkExtractor = route => {
  let arrayWithlinks = [];
  readFileInside(route).forEach(element => {
    let renderer = new marked.Renderer();
    renderer.link = (href, title, text) => {
      arrayWithlinks.push({
        href: href,
        text: text.substring(0,50),
        file: element.file
      });
    };

    marked(element.content, { renderer: renderer });
    
  });
  return arrayWithlinks;
};

//console.log(markdownLinkExtractor('/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba'));


// función que obtiene estado de los links
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
    }).catch((error) =>{
      obj.status = 'no existe link';
      obj.ok= 'fail' 
      return obj
    }         
    )
    
  })
return Promise.all(responsePromises);
}

/*getStatusOfLInk(markdownLinkExtractor("LIM009-fe-md-links/prueba/README.md"))
.then ((result)=>{
  console.log(result);
 })*/

