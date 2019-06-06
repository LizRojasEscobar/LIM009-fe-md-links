const path = require('path');
const fs = require('fs');
/*
 // verifica si es una absoluta y la convierte en absoluta
const absoluta =(route )=>{
  if (!path.isAbsolute(route))
    return path.resolve(route); 
}
console.log(absoluta('README.md'))

 resolve permite convertir una ruta relativa en absoluta 
export const convertPathToAbsolute =(file) =>{
    return path.resolve(file);
}

export const verifyFile =(file) =>{
    const stats = fs.statSync(file);
    return stats.isFile();
}

export const verifyExtension =(file)=>{
    if (path.extname(file)==='.md' ){
        return path.extname(file)
    } else {
        console.log ('no es md')
    }

}


console.log(`Current directory: ${process.cwd()}`);
path.join(`Current directory: ${process.cwd()}`);
// promise y file
*/
 
 const pathFiles = (route) => {
  let pathArray = [];
  if (fs.lstatSync(route).isFile()) {
    if (path.extname(route) === '.md') {
      pathArray.push(route);
    }
  } else {
    fs.readdirSync(route).forEach((file) => {
      pathArray = pathArray.concat(pathFiles(path.join(route, file)));
    });
  } 
  console.log(pathArray)
  return pathArray;
  
};
