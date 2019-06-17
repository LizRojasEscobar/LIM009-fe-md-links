// funcion de verificacion de ruta y  verificar archivo o directorio
import path from "path";

export const convertToAbsolute = route => {
  let absoluteRoute;
  if (!path.isAbsolute(`${route}`)) {
    absoluteRoute = path.resolve(`${route}`);
  } else {
    absoluteRoute= route
  }
  return absoluteRoute;
};


export const verifyExtension = file => {
  return path.extname(`${file}`) === ".md"   
};

// console.log(convertToAbsolute("README.md"));
