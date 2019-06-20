import{markdownLinkExtractor,getStatusOfLInk } from '../src/links-controller.js'
import fetchMock from '../__mocks__/node-fetch.js'
fetchMock.config.sendAsJson = false;
  fetchMock
  .mock('https://nodejs.org/es/123456789', 404)
  .mock('https://developers.google.com/v8/', 200)
  .mock('https://es.wikipedia.org/wiki/Markdown', 200)

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