import{verifyFile }from '../src/file-controller.js';
import mock from 'mock-fs';
import process from 'process';
import path from 'path';

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


describe('Deberia verificar si es un archivo',() =>{
    it ('deberia ser una funcion', ()=>{
      expect(typeof verifyFile).toEqual('function');
      })
    it ('Deberia existir y retornar booleano', ()=>{
      expect(verifyFile(path.join(process.cwd(),'prueba','README.md'))).toBe(true);
    })
    it (' no deberia de existir file y retornar booleano', ()=>{
      expect(verifyFile(path.join(process.cwd(),'prueba'))).toBe(false);
      })
  });