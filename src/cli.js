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
