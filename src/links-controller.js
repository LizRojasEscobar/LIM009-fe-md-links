import { readFileInside } from "./directory-controller.js";
import marked from "marked";
import  fetch from 'node-fetch';


const markdownLinkExtractor = route => {
  var links = [];
  readFileInside(route).forEach(element => {
    var renderer = new marked.Renderer();
    renderer.link = (href, title, text) => {
      links.push({
        href: href,
        text: text,
        file: element.file
      });
    };

    marked(element.content, { renderer: renderer });
    
  });
  return links;
};

const getStatusOfLInk = (array)=>{
  const responsePromises = array.map(obj =>{
  return  fetch(obj.href)
    .then ((result)=>{
         obj.status =result.status;
         obj.ok=result.statusText;
      return obj
    })
    
  })
return Promise.all(responsePromises);
}


getStatusOfLInk(markdownLinkExtractor("/home/liz/Documentos/md.links/LIM009-fe-md-links/README.md"))
.then ((result)=>{
  console.log(result);
})

