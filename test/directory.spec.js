import{pathFilesAndDirectories,readFileInside} from '../src/directory-controller.js'


describe('Deberia recorrer un directorio',() =>{
    it ('deberia ser una funcion', ()=>{
      expect(typeof pathFilesAndDirectories).toEqual('function');
      })
      it ('deberia de retornar un array con los archivos .md', ()=>{
        expect(pathFilesAndDirectories('/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba')).toEqual(["/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba/README.md", "/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba/prueba1/README.md"]);
      })
      it ('deberia retornar un array vacio', ()=>{
        expect(pathFilesAndDirectories('/home/liz/Documentos/md.links/LIM009-fe-md-links/lib')).toEqual([]);
      })
  });
  describe('Deberia recorrer dentro del archivo',() =>{
    it ('deberia ser una funcion', ()=>{
      expect(typeof readFileInside).toEqual('function');
      })
      it ('deberia de retornar un array con los archivos .md', ()=>{
        expect(readFileInside('/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba')).toEqual([ { content:
          '![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)\n\n## Introducción\n\n[Node.js](https://nodejs.org/es/123456789) es un entorno de ejecución para JavaScript\nconstruido con el [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/).\n\n',
         file:
          '/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba/README.md' },
       { content:
          '[Markdown](https://es.wikipedia.org/wiki/Markdown) \n(empezando por el tradicional `README.md`).\n',
         file:
          '/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba/prueba1/README.md' } ]);
      })
      it ('deberia retornar un array vacio', ()=>{
        expect(readFileInside('/home/liz/Documentos/md.links/LIM009-fe-md-links/lib')).toEqual([]);
      })
  });
  