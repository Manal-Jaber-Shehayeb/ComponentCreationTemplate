const copyFile = require("../helpers/copyFile").copyFile;

console.log('Running addConfig.js...');

function addConfig(){
  const srcFile = "../yaml-config.json";
  const destFile = "./yaml-config.json"
  copyFile(srcFile, destFile);
  console.log("Added config file");
}
module.exports = {
  addConfig
}

