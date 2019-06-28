import path from "path";
import fs from "fs";
import { verifyFile } from "./file-controller.js";
import { verifyExtension, convertToAbsolute } from "./path-controller.js";


export const pathFilesAndDirectories = route => { //  función que recorre directorio
  const newRoute = convertToAbsolute(route);
  let arrayOfPath = [];
  if (verifyFile(`${newRoute}`)) {
    if (verifyExtension(`${newRoute}`)) {
      arrayOfPath.push(`${newRoute}`);
    }
  } else {
    fs.readdirSync(`${newRoute}`).forEach(file => {
      arrayOfPath = arrayOfPath.concat(
        pathFilesAndDirectories(path.join(`${newRoute}`, `${file}`))
      );
    });
  }
  return arrayOfPath;
};
// console.log(pathFilesAndDirectories('../prueba'));


export const readFileInside = route => { // función que lee contenido del archivo
  const arrayContent = [];
  pathFilesAndDirectories(route).forEach(file => {
    arrayContent.push({
      content: fs.readFileSync(file).toString(),
      file: file
    });
  });

  return arrayContent;
};
 // console.log(readFileInside('/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba'));