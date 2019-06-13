// funcion de verificacion de ruta y  verificar archivo o directorio
import path from "path";

export const convertToAbsolute = route => {
  let absoluteRoute;
  if (!path.isAbsolute(`${route}`)) {
    absoluteRoute = path.resolve(`${route}`);
  } else {
    absoluteRoute = path.isAbsolute(`${route}`);
  }
  return absoluteRoute;
};

export const verifyExtension = file => {
  return path.extname(`${file}`) === ".md"   
};

//console.log(verifyExtension("/home/liz/Documentos/md.links/LIM009-fe-md-links/README.md"));
