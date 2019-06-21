import{pathFilesAndDirectories,readFileInside} from '../src/directory-controller.js'
import mock from 'mock-fs';
import process from 'process';
import path from 'path';

beforeEach(()=> {
    mock({
      'prueba': {
       'README.md': `![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg) ## Introducción [Node.js](https://nodejs.org/es/123456789) es un entorno de ejecución para JavaScript construido con el [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/).`,
        'prueba1': {
          'README.md':`[Markdown](https://es.wikipedia.org/wiki/Markdown)(empezando por el tradicional).`
          },
        },
      'lib': {
        'archivo.txt':'hola mundo',
      }
    });
  });
  afterEach(mock.restore);
  
describe('Deberia recorrer un directorio',() =>{
    it ('deberia ser una funcion', ()=>{
      expect(typeof pathFilesAndDirectories).toEqual('function');
      })
      it ('deberia de retornar un array con los archivos .md', ()=>{
        expect(pathFilesAndDirectories(path.join(process.cwd(),'prueba'))).toEqual([path.join(process.cwd(),'prueba','README.md'), path.join(process.cwd(),'prueba','prueba1','README.md')]);
      })
      it ('deberia retornar un array vacio', ()=>{
        expect(pathFilesAndDirectories(path.join(process.cwd(),'lib'))).toEqual([]);
      })
  });
  describe('Deberia recorrer dentro del archivo',() =>{
    it ('deberia ser una funcion', ()=>{
      expect(typeof readFileInside).toEqual('function');
      })
      it ('deberia de retornar un array de objetos con los archivos .md', ()=>{
        expect(readFileInside(path.join(process.cwd(),'prueba'))).toEqual([{ content:
      `![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg) ## Introducción [Node.js](https://nodejs.org/es/123456789) es un entorno de ejecución para JavaScript construido con el [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/).`,
         file: path.join(process.cwd(),'prueba','README.md')
         },
       { content:
        `[Markdown](https://es.wikipedia.org/wiki/Markdown)(empezando por el tradicional).`,
         file:
         path.join(process.cwd(),'prueba','prueba1','README.md') } ]);
      })
      it ('deberia retornar un array de objetos vacio', ()=>{
        expect(readFileInside(path.join(process.cwd(),'lib'))).toEqual([]);
      })
  });
  