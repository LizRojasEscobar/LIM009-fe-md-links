import{markdownLinkExtractor,getStatusOfLInk } from '../src/links-controller.js';
import mock from 'mock-fs';
import process from 'process';
import path from 'path';
import fetchMock from '../__mocks__/node-fetch.js';
fetchMock.config.sendAsJson = false;
  fetchMock
  .mock('https://nodejs.org/es/123456789', 404)
  .mock('https://developers.google.com/v8/', 200)
  .mock('https://es.wikipedia.org/wiki/Markdown', 200)


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
  

  
describe ('deberia de ingresar a los archivos y extraer los links',()=>{
  
    it ('deberia de ser una funcion', ()=>{
      expect(typeof markdownLinkExtractor).toBe('function');
    })
    it('deberia retornar un array de objetos con href, text, file',()=>{
      expect(markdownLinkExtractor(path.join(process.cwd(), 'prueba'))).toEqual( [ { href: 'https://nodejs.org/es/123456789',
      text: 'Node.js',
      file: path.join(process.cwd(), 'prueba/README.md')},
    { href: 'https://developers.google.com/v8/',
      text: 'motor de JavaScript V8 de Chrome',
      file:
      path.join(process.cwd(), 'prueba/README.md')},
    { href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      file:
      path.join(process.cwd(), 'prueba//prueba1/README.md')} 
    ])
    })
  })
  
  describe ('deberia recibir una array de objetos', ()=>{     
    it('deberia retonar un array con los status y ok ',(done)=>{
      getStatusOfLInk(markdownLinkExtractor(path.join(process.cwd(),'prueba','README.md'))).then(result=>{
      const resultFromFunction =[ { href: 'https://nodejs.org/es/123456789',
      text: 'Node.js',
      file: path.join(process.cwd(), 'prueba/README.md'),
      status: 404,
      ok: 'fail' },
    { href: 'https://developers.google.com/v8/',
      text: 'motor de JavaScript V8 de Chrome',
      file: path.join(process.cwd(), 'prueba/README.md'),
      status: 200,
      ok: 'ok' } ]
      expect(result).toEqual(resultFromFunction)
      done()
      })
    })
    
  })