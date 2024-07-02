// const getEnvData = require("../helpers/getEnvData").getEnvData;

// const fs = require("fs");
// const path = require("path");
// const YAML = require("yaml");


// function getComponentProps(componentName, yamlFile) {
//   if(componentName && yamlFile){
//     const configPath = './yaml-config.json'
//     const envData = getEnvData(configPath);
//     const componentsDestPath = envData?.componentsDestPath;

//     const dirPath = path.join(process.cwd(), componentsDestPath, `${componentName}.js`);
//     const yamlPath = path.join(process.cwd(), yamlFile);

//     if (fs.existsSync(dirPath) && fs.existsSync(yamlPath)) {
//       const yamlFileContent = fs.readFileSync(yamlPath, "utf8");
//       const componentData = YAML.parse(yamlFileContent).components;
//       const props = componentData.find((item) => item.name === componentName);
//       const componentProps = props ? props.props : {};
//       return componentProps;
//     } else {
//       console.error(`Component not found: ${dirPath}`);
//       return null;
//     }
//   }
// }

// module.exports = {
//   getComponentProps
// }
const fs = require('fs-extra');
const path = require('path');
const YAML = require('yaml');
const getEnvData = require('../helpers/getEnvData').getEnvData;

function getComponentProps(componentName, yamlFile) {
  if (componentName && yamlFile) {
    const configPath = './yaml-config.json';
    const envData = getEnvData(configPath);
    const componentsDestPath = envData?.componentsDestPath;

    // Adjust the component path to handle directories
    const dirPath = path.join(process.cwd(), componentsDestPath, componentName);
    const yamlPath = path.join(process.cwd(), yamlFile);

    // Check if the directory or file exists
    if (fs.existsSync(dirPath) && fs.existsSync(yamlPath)) {
      let indexPath;

      // Check if the dirPath is a directory
      if (fs.statSync(dirPath).isDirectory()) {
        indexPath = path.join(dirPath, 'index.js');
        if (!fs.existsSync(indexPath)) {
          console.error(`Component index file not found: ${indexPath}`);
          return null;
        }
      } else {
        indexPath = dirPath;
      }

      const yamlFileContent = fs.readFileSync(yamlPath, 'utf8');
      const componentData = YAML.parse(yamlFileContent).components;
      const props = componentData.find((item) => item.name === componentName);
      const componentProps = props ? props.props : {};
      return componentProps;
    } else {
      console.error(`Component or YAML file not found: ${dirPath} or ${yamlPath}`);
      return null;
    }
  }
  return null;
}

module.exports = {
  getComponentProps
};

