const copyFile = require("../helpers/copyFile").copyFile;

function addConfig(){
  const srcFile = "../yaml-config.json";
  const srcFile2 = "../components.yaml";
  const destFile = "./yaml-config.json"
  const destFile2 = "./components.yaml"
  copyFile(srcFile, destFile);
  copyFile(srcFile2, destFile2);
  console.log("Added config files");
}
module.exports = {
  addConfig
}

