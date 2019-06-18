export const getStatusOfLinksForCli = (arrayOfObj) => {
    const arrayOfUrls = arrayOfObj.map(element =>{
      return element.href;
      })
    const uniqueUrls = new Set(arrayOfUrls);  
    const brokenUrls = arrayOfObj.filter( element => {
      return element.ok === 'fail';
    })    
    return {
      Total: arrayOfUrls.length,
      Unique: uniqueUrls.size,
      Broken: brokenUrls.length
    }
  }