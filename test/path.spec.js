import {convertToAbsolute,verifyExtension} from '../src/path-controller.js';

describe('Deberia retornar que el path sea absoluto',() =>{
    it ('deberia ser una funcion', ()=>{
      expect(typeof convertToAbsolute).toEqual('function');
      })
    it ('Deberia de recibir path relativo y retornar string', ()=>{
    expect(convertToAbsolute('README.md')).toBe('/home/liz/Documentos/md.links/LIM009-fe-md-links/README.md');
    })
    it ('Deberia de recibir path relativo y retornar string', ()=>{
      expect(convertToAbsolute('/home/liz/Documentos/md.links/LIM009-fe-md-links/README.md')).toBe("/home/liz/Documentos/md.links/LIM009-fe-md-links/README.md");
      })
  });


  describe('Deberia verificar si es un archivo es extension md',() =>{
    it ('deberia ser una funcion', ()=>{
      expect(typeof verifyExtension).toEqual('function');
      })
    it ('Deberia de recibir path absoluto y retornar booleano', ()=>{
      expect(verifyExtension('/home/liz/Documentos/md.links/LIM009-fe-md-links/README.md')).toBe(true);
    })
    it ('Deberia de recibir path absoluto y retornar booleano', ()=>{
      expect(verifyExtension('/home/liz/Documentos/md.links/LIM009-fe-md-links/')).toBe(false);
      })
  });