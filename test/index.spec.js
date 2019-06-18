
  import {
    convertToAbsolute,
    verifyExtension} 
  from '../src/path-controller.js';
   import{
    verifyFile
   }from '../src/file-controller.js';
  import{    
    pathFilesAndDirectories,
    readFileInside
  } from '../src/directory-controller.js'
  import{
    markdownLinkExtractor,
    getStatusOfLInk
  } from '../src/links-controller.js'
  import{
    mdLinks
  } from '../src/api-mdlinks.js'

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

describe ('deberia de ingresar a los archivos y extraer los links',()=>{
  it ('deberia de ser una funcion', ()=>{
    expect(typeof (markdownLinkExtractor)).toEqual('function');
  })
  it('deberia retornar un array de objetos',()=>{
    expect(markdownLinkExtractor('/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba')).toEqual(
  [ { href: 'https://nodejs.org/es/123456789',
    text: 'Node.js',
    file:
     '/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba/README.md' },
  { href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 de Chrome',
    file:
     '/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba/README.md' },
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file:
     '/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba/prueba1/README.md' } ])
  })
})

describe ('deberia recibir una array de objetos', ()=>{
  it('deberia retonar un array con los status y ok ',(done)=>{
    getStatusOfLInk(markdownLinkExtractor('/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba/README.md')).then(result=>{
    const resultFromFunction =[ { href: 'https://nodejs.org/es/123456789',
    text: 'Node.js',
    file:
     '/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba/README.md',
    status: 404,
    ok: 'fail' },
  { href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 de Chrome',
    file:
     '/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba/README.md',
    status: 200,
    ok: 'ok' } ]
    expect(result).toEqual(resultFromFunction)
    done()
    })
  })
})

describe('Api Mdlinks', ()=>{
  it('deberia retornar un array de objetos con los status y ok con parametro validate false', (done)=>{
    mdLinks('/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba/README.md', {validate: false}).then(result =>{
     const resultFromFunctionMdLinks = [ { href: 'https://nodejs.org/es/123456789',
      text: 'Node.js',
      file:
       '/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba/README.md' },
    { href: 'https://developers.google.com/v8/',
      text: 'motor de JavaScript V8 de Chrome',
      file:
       '/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba/README.md' } ]
       expect (result).toEqual(resultFromFunctionMdLinks)
       done();
    })   
  })
  it('deberia retornar un array de objetos con los status y ok con parametro validate true', (done)=>{
    mdLinks('/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba/README.md', {validate: true}).then(result =>{
     const resultFromFunctionMdLinks = [ { href: 'https://nodejs.org/es/123456789',
     text: 'Node.js',
     file:
      '/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba/README.md',
     status: 404,
     ok: 'fail' },
   { href: 'https://developers.google.com/v8/',
     text: 'motor de JavaScript V8 de Chrome',
     file:
      '/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba/README.md',
     status: 200,
     ok: 'ok' } ]
       expect (result).toEqual(resultFromFunctionMdLinks)
       done();
    })
   
  })
})