const path = require('path');
const fs = require('fs');

/* verifica si es una absoluta*/ 
export const absoluta =(file )=>{
  return path.isAbsolute(file); 
}
/* resolve permite convertir una ruta relativa en absoluta*/ 
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
