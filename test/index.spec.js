import {absoluta, convertPathToAbsolute,verifyFile,verifyExtension} from '../index.js'
describe('Deberia retornar que el path sea absoluto',() =>{
  it ('deberia ser una funcion', ()=>{
    expect(typeof absoluta).toEqual('function');
    })
  it ('Deberia de recibir string y retornar boolean', ()=>{
  expect(absoluta('/home/liz/Documentos/md.links/LIM009-fe-md-links/README.md')).toBe(true);
  })
  it ('Deberia de recibir string y retornar boolean', ()=>{
    expect(absoluta('README.md')).toBe(false);
    })
});

describe('Deberia retornar que el path sea absoluto',() =>{
  it ('deberia ser una funcion', ()=>{
    expect(typeof convertPathToAbsolute).toEqual('function');
    })
  it ('Deberia de recibir path relativo y retornar string', ()=>{
  expect(convertPathToAbsolute('README.md')).toBe('/home/liz/Documentos/md.links/LIM009-fe-md-links/README.md');
  })
  it ('Deberia de recibir path relativo y retornar string(path absoluto)', ()=>{
    expect(convertPathToAbsolute('/home/liz/Documentos/md.links/LIM009-fe-md-links/README.md')).toBe('/home/liz/Documentos/md.links/LIM009-fe-md-links/README.md');
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
    expect(verifyExtension('/home/liz/Documentos/md.links/LIM009-fe-md-links/README.md')).toBe(".md");
  })
  it ('Deberia de recibir path absoluto y retornar booleano', ()=>{
    expect(verifyExtension('/home/liz/Documentos/md.links/LIM009-fe-md-links/')).toBe(undefined);
    })
});



