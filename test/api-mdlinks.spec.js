import{mdLinks} from '../src/api-mdlinks.js'
import fetchMock from '../__mocks__/node-fetch.js'
fetchMock.config.sendAsJson = false;
fetchMock
.mock('https://nodejs.org/es/123456789', 404)
.mock('https://developers.google.com/v8/', 200)
.mock('https://es.wikipedia.org/wiki/Markdown', 200)

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
       const resultFromFunction = [ { href: 'https://nodejs.org/es/123456789',
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
         expect (result).toEqual(resultFromFunction)
         done();
      })
     
    })
    it('deberia retornar un array de objetos con los status y ok con parametro validate true', (done)=>{
      mdLinks('./prueba/prueba1', {validate: true}).then(result =>{
       const resultFromFunctionMdLinks = [ { href: 'https://es.wikipedia.org/wiki/Markdown',
       text: 'Markdown',
       file:
        '/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba/prueba1/README.md',
        status: 200, 
        ok: 'ok'}]
         expect (result).toEqual(resultFromFunctionMdLinks)
         done();
      })
     
    })
  })