const path = require('path');
const minimist = require('minimist');
const fs = require('fs');
const loadYamlFile = require('../index.js');
// start generate

// Parse command-line arguments
const args = minimist(process.argv.slice(2));

// Read template file
const templateFilePath = path.join('../',`template-component-library/src/templates/${args?.componentTemplate}/index.js`);
const templateFile = fs.readFileSync(templateFilePath, 'utf8');

const data = loadYamlFile.loadYaml(args?.dataFilePath);
// Generate components
data.components.forEach((component) => {
  const { name, props } = component;
  let componentFile = templateFile;

  // Replace placeholders with actual values
  componentFile = componentFile.replace(/{{name}}/g, name);

  // Create the new component file
  const componentFilePath = path.join(process.cwd(), `${args?.componentsPath}/${name}.js`);
  fs.writeFileSync(componentFilePath, componentFile);

  console.log(`Generated ${name}.js`);
});