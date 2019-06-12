// funcion de verificacion de ruta y  verificar archivo o directorio
import path from 'path';

export const convertToAbsolute =(route)=>{
  if (!path.isAbsolute(`${route}`))
    return path.resolve(`${route}`); 
    
}

export const verifyExtension =(file)=>{
  if (path.extname(`${file}`)==='.md' ){
      return path.extname(`${file}`)
  } 

}

 
//console.log(convertToAbsolute('README.md'));


