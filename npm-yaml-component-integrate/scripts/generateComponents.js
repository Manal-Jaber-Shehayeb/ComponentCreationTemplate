const path = require('path');
const minimist = require('minimist');
const fs = require('fs');
const loadYamlFile = require('../index.js');
import {ComponentsDirectory, TemplatesDirectory} from '../constants'
// start generate

// Parse command-line arguments
const args = minimist(process.argv.slice(2));

const data = loadYamlFile.loadYaml(args?.dataFilePath);
// Generate components
data.components.forEach((component) => {
  const { name, props } = component;

  // Read template file
  const templateFilePath = path.join(TemplatesDirectory,`${name}/index.js`);
  const templateFile = fs.readFileSync(templateFilePath, 'utf8');
  let componentFile = templateFile;

  // Replace placeholders with actual values
  componentFile = componentFile.replace(/{{name}}/g, name);

  // Create the new component file
  const componentFilePath = path.join(process.cwd(), ComponentsDirectory, `${name}.js`);
  fs.writeFileSync(componentFilePath, componentFile);

  console.log(`Generated ${name}.js`);
});