const fs = require('fs');
const path = require('path');
const YAML = require('yaml');

export function getComponentsData(directory, yamlFile) {
  const dirPath = path.join(process.cwd(), directory);
  const components = fs.readdirSync(dirPath)
    .filter(file => file.endsWith('.js'))
    .map(file => path.parse(file).name);

  const yamlPath = path.join(process.cwd(), yamlFile);
  const yamlFileContent = fs.readFileSync(yamlPath, 'utf8');
  const componentProps = YAML.parse(yamlFileContent).components;

  const componentsData = components.map(component => {
    const props = componentProps.find(item => item.name === component);
    return { name: component, props: props ? props.props : {} };
  });

  return componentsData;
}
