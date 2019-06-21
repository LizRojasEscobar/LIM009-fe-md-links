import mock from 'mock-fs';
import process from 'process';
import path from 'path';
import {convertToAbsolute,verifyExtension} from '../src/path-controller.js';

beforeEach(()=> {
  mock({
    'prueba': {
     'README.md': `![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)
  
      ## Introducción
      
      [Node.js](https://nodejs.org/es/123456789) es un entorno de ejecución para JavaScript
      construido con el [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/).
      `,
      'prueba1': {
        'README.md':`[Markdown](https://es.wikipedia.org/wiki/Markdown) 
         (empezando por el tradicional).`
        },
      },
    'lib': {
      'archivo.txt':'hola mundo',
    }
  });
});
afterEach(mock.restore);

//const cwd = process.cwd();
//  /home/liz/Documentos/md.links/LIM009-fe-md-links/prueba/README.md
// '/home/liz/Documentos/md.links/LIM009-fe-md-links/README.md'
//console.log(path.join(process.cwd(),'foo'))


describe('Deberia retornar que el path sea absoluto',() =>{
    it ('deberia ser una funcion', ()=>{
      expect(typeof convertToAbsolute).toEqual('function');
      })
    it ('Deberia de recibir path relativo y retornar string', ()=>{
    expect(convertToAbsolute('./prueba/README.md')).toBe(path.join(process.cwd(),'prueba','README.md'));
    })
    it ('Deberia de recibir path absoluto y retornar string', ()=>{
      expect(convertToAbsolute(path.join(process.cwd(),'prueba','README.md'))).toBe(path.join(process.cwd(),'prueba','README.md'));
      })
  });


  describe('Deberia verificar si es un archivo es extension md',() =>{
    it ('deberia ser una funcion', ()=>{
      expect(typeof verifyExtension).toEqual('function');
      })
    it ('Deberia de recibir path absoluto y retornar booleano', ()=>{
      expect(verifyExtension(path.join(process.cwd(),'prueba','README.md'))).toBe(true);
    })
    it ('Deberia de recibir path absoluto y retornar booleano', ()=>{
      expect(verifyExtension(path.join(process.cwd(),'prueba'))).toBe(false);
      })
  });