import path from "path";
import fs from "fs";
import { verifyFile } from "./file-controller.js";
import { verifyExtension } from "./path-controller.js";

export const pathFilesAndDirectories = route => {
  let arrayOfPath = [];
  if (verifyFile(`${route}`)) {
    if (verifyExtension(`${route}`)) {
      arrayOfPath.push(`${route}`);
    }
  } else {
    fs.readdirSync(`${route}`).forEach(file => {
      arrayOfPath = arrayOfPath.concat(
        pathFilesAndDirectories(path.join(`${route}`, `${file}`))
      );
    });
  }
  return arrayOfPath;
};
console.log(pathFilesAndDirectories('/home/liz/Documentos/md.links/LIM009-fe-md-links/lib'));

/*
export const readFileInside = route => {
  let arrayContent = [];
  pathFilesAndDirectories(route).forEach(file => {
    arrayContent.push({
      content: fs.readFileSync(file).toString(),
      file: file
    });
  });

  return arrayContent;
};
*/