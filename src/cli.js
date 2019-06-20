import {mdLinks} from './api-mdlinks.js'
export const getStatusOfLinksForCli = (arrayOfObj) => {
    const arrayOfUrls = arrayOfObj.map(element =>{
      return element.href;
      })
    const uniqueUrls = new Set(arrayOfUrls);  
    const brokenUrls = arrayOfObj.filter( element => {
      return element.ok ==='fail';
    })    
    return {
      total: arrayOfUrls.length,
      unique: uniqueUrls.size,
      broken: brokenUrls.length
    }
  }
  export const mdLinksForCli = ( route, options1, options2 )=>{
    if (route!==undefined && options1 == undefined &&  options2 == undefined) {
      return mdLinks(route, {validate: false})
      .then(result => {
        const newArray = result.map(element => {
       //   console.log(`${element.href} ${element.text}${element.file} \n`);
        return  `${element.href} ${element.text} ${element.file}`
        })
        const newArrayWithoutValidate = newArray.toString().replace(/,/g,'\n');
        return newArrayWithoutValidate
      }).catch(console.error);
  } else if (route!== undefined && options1== '--validate' && options2 ==undefined ){
     return mdLinks(route, {validate: true})
      .then(result => {
        const newArray = result.map(element => {
         // console.log(`${element.href}${element.text}${element.file}${element.ok} ${element.status}\n`);
        return `${element.href} ${element.text} ${element.file} ${element.ok} ${element.status}`
        });
        const newArrayWithValidate = newArray.toString().replace(/,/g,'\n');
        return newArrayWithValidate;
      })
      .catch(console.error);
  } else if (route!== undefined && options1=='--stats' && options2 ==undefined){
    
    return mdLinks(route, {validate: true})
    .then(result1 => getStatusOfLinksForCli(result1))
        .then(status => { 
        return `Total: ${status.total}\nUnique: ${status.unique}`
           // console.log(`Total: ${status.total} \nUnique: ${status.unique}\n `);
          })
      .catch(console.error)
  } else if (route!== undefined && options1=='--validate' && options2 =='--stats' ){
    return mdLinks(route, {validate: true})
    .then(result1 => getStatusOfLinksForCli(result1))
        .then(status => { 
          return `Total: ${status.total}\nUnique: ${status.unique}\nBroken: ${status.broken}`
          // console.log(`Total: ${status.total} \nUnique: ${status.unique} \nBroken: ${status.broken}\n`);
          })
      .catch(console.error)
  } else{
    return mdLinks(route, {validate: true})
    .then(result1 => getStatusOfLinksForCli(result1))
        .then(status => { 
          return `Total: ${status.total}\nUnique: ${status.unique}\nBroken: ${status.broken}`
          // console.log(`Total: ${status.total} \nUnique: ${status.unique} \nBroken: ${status.broken}\n`);
          })
      .catch(console.error)
  }
  }
