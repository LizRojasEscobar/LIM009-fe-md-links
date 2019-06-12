import fs from 'fs';

export const verifyFile =(file) =>{
    const stats = fs.statSync(`${file}`);
    return stats.isFile();
}
