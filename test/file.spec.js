import{verifyFile }from '../src/file-controller.js';

describe('Deberia verificar si es un archivo',() =>{
    it ('deberia ser una funcion', ()=>{
      expect(typeof verifyFile).toEqual('function');
      })
    it ('Deberia de recibir path absoluto y retornar booleano', ()=>{
      expect(verifyFile('/home/liz/Documentos/md.links/LIM009-fe-md-links/README.md')).toBe(true);
    })
    it ('Deberia de recibir path absoluto y retornar booleano', ()=>{
      expect(verifyFile('/home/liz/Documentos/md.links/LIM009-fe-md-links/')).toBe(false);
      })
  });