import path from "path";
export const convertToAbsolute = route => {  // función que convierte la ruta en absoluta 
  let absoluteRoute;
  if (!path.isAbsolute(`${route}`)) {
    absoluteRoute = path.resolve(`${route}`);
  } else {
    absoluteRoute= route
  }
  return absoluteRoute;
};


export const verifyExtension = file => {  //  función que verifica la extension del archivo
  return path.extname(`${file}`) === ".md"   
};

// console.log(convertToAbsolute("README.md"));
