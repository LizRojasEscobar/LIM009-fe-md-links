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
  if (path.extname(`${file}`) === ".md") {
    return path.extname(`${file}`);
  }
};

// console.log(convertToAbsolute("/home/liz/Documentos/md.links/LIM009-fe-md-links/README.md"));
