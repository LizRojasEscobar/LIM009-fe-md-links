import fs from 'fs';
export const verifyFile =(file) =>{ //  función que verifica si es archivo
    const stats = fs.statSync(`${file}`);
    return stats.isFile();
}

