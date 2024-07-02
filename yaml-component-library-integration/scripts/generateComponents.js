// const path = require('path');
// const fs = require('fs');
// const getEnvData = require('../helpers/getEnvData').getEnvData;
// const loadYaml = require('../helpers/loadYaml').loadYaml;
// const minimist = require('minimist');
// // start generate

//   // Parse command-line arguments
//   const args = minimist(process.argv.slice(2));
//   const dataFilePath = args?.dataFilePath

//   // getting env data
//   const configPath = './yaml-config.json'
//   const envData = getEnvData(configPath);
//   const componentsDestPath = envData?.componentsDestPath;
//   const componentsSrcPath = envData?.componentsSrcPath;

//   // getting yaml data
//   const data = loadYaml(dataFilePath);

//   // Generate components
//   data.components.forEach((component) => {
//     const { name, props } = component;

//     // Read template file
//     const templateFilePath = path.join(componentsSrcPath,`${name}/index.js`);
//     const templateFile = fs.readFileSync(templateFilePath, 'utf8');
//     let componentFile = templateFile;

//     // Replace placeholders with actual values
//     componentFile = componentFile.replace(/{{name}}/g, name);

//     // Create the new component file
//     const componentFilePath = path.join(process.cwd(), componentsDestPath, `${name}.js`);
//     fs.writeFileSync(componentFilePath, componentFile);

//     console.log(`Generated ${name}.js`);
//   });
const path = require('path');
const fs = require('fs-extra'); // Use fs-extra instead of fs
const getEnvData = require('../helpers/getEnvData').getEnvData;
const loadYaml = require('../helpers/loadYaml').loadYaml;
const minimist = require('minimist');

// Start generate

// Parse command-line arguments
const args = minimist(process.argv.slice(2));
const dataFilePath = args?.dataFilePath

// Getting env data
const configPath = './yaml-config.json'
const envData = getEnvData(configPath);
const componentsDestPath = envData?.componentsDestPath;
const componentsSrcPath = envData?.componentsSrcPath;

// Getting yaml data
const data = loadYaml(dataFilePath);

// Generate components
data.components.forEach((component) => {
  const { name } = component;

  // Source and destination paths for the component folder
  const srcFolderPath = path.join(componentsSrcPath, name);
  const destFolderPath = path.join(process.cwd(), componentsDestPath, name);

  // Copy the entire folder
  fs.copy(srcFolderPath, destFolderPath)
    .then(() => console.log(`Copied ${name} folder`))
    .catch(err => console.error(`Error copying ${name} folder: `, err));
});
