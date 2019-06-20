
import mock from 'mock-fs';
import{getStatusOfLinksForCli} from '../src/cli.js'
import{mdLinksForCli} from '../src/cli.js'
import{path} from 'path'
import fetchMock from '../__mocks__/node-fetch.js'
fetchMock.config.sendAsJson = false;
  fetchMock
  .mock('https://nodejs.org/es/123456789', 404)
  .mock('https://developers.google.com/v8/', 200)
  .mock('https://es.wikipedia.org/wiki/Markdown', 200)
  
describe('getStatusOfLinksForCli', ()=>{  
  it('deberia de retornar una funcion', ()=>{
    expect(typeof getStatusOfLinksForCli).toBe('function')
  })
  it('Debería recibir un array y retornar el total de links, broken links y unique links',()=>{
    expect(getStatusOfLinksForCli([ { href: 'https://nodejs.org/es/123456789',
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
    ok: 'ok' } ])).toStrictEqual(  {"broken": 1, "total": 2, "unique": 2})
  })
 })

 describe('mdLinksForCli', ()=>{
   it('deberia de ser una funcion', ()=>{
     expect(typeof mdLinksForCli).toBe('function')
   })
   it('deberia de retornar solo href, text y file',(done)=>{
    mdLinksForCli('/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba').then(result=>{
      const newString = 
      `https://nodejs.org/es/123456789 Node.js /home/liz/Documentos/md.links/LIM009-fe-md-links/prueba/README.md\nhttps://developers.google.com/v8/ motor de JavaScript V8 de Chrome /home/liz/Documentos/md.links/LIM009-fe-md-links/prueba/README.md\nhttps://es.wikipedia.org/wiki/Markdown Markdown /home/liz/Documentos/md.links/LIM009-fe-md-links/prueba/prueba1/README.md`;
    expect(result).toEqual(newString) 
    done()
    })
   })
   it('deberia de retornar solo href, text y file, status y ok',(done)=>{
    mdLinksForCli('/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba','--validate').then(result=>{
      const newString1 = `https://nodejs.org/es/123456789 Node.js /home/liz/Documentos/md.links/LIM009-fe-md-links/prueba/README.md fail 404\nhttps://developers.google.com/v8/ motor de JavaScript V8 de Chrome /home/liz/Documentos/md.links/LIM009-fe-md-links/prueba/README.md ok 200\nhttps://es.wikipedia.org/wiki/Markdown Markdown /home/liz/Documentos/md.links/LIM009-fe-md-links/prueba/prueba1/README.md ok 200`;
    expect(result).toEqual(newString1) 
    done();
    })
   })
   it('deberia de retornar solo href, text y file, status y ok',(done)=>{
    mdLinksForCli('/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba','--stats').then(result=>{
      const newString1 = `Total: 3\nUnique: 3`
    expect(result).toEqual(newString1) 
    done();
    })
   })
   it('deberia de retornar solo href, text y file, status y ok',(done)=>{
    mdLinksForCli('/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba','--validate', '--stats').then(result=>{
      const newString1 = `Total: 3\nUnique: 3\nBroken: 1`
    expect(result).toEqual(newString1) 
    done();
    })
   })
   it('deberia de retornar solo href, text y file, status y ok',(done)=>{
    mdLinksForCli('/home/liz/Documentos/md.links/LIM009-fe-md-links/prueba','--stats', '--validate').then(result=>{
      const newString1 = `Total: 3\nUnique: 3\nBroken: 1`
    expect(result).toEqual(newString1) 
    done();
    })
   })
 })