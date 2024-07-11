// helpers/copyFile.js
const fs = require('fs');
const path = require('path');

function copyFile(src, dest) {
    if(src && dest){
        const srcFile = path.join(__dirname, src);
        const destFile = path.join(process.cwd(), dest);
        fs.copyFile(srcFile, destFile, (err) => {
          if (err) {
            console.error(`Error copying file from ${srcFile} to ${destFile}:`, err);
          } else {
            console.log(`File copied from ${srcFile} to ${destFile}`);
          }
        });
    }
}
module.exports = {
    copyFile
}