const fs = require("fs");
const path = require("path");
const YAML = require("yaml");

export function getComponentProps(componentName, yamlFile) {
  const dirPath = path.join(process.cwd(), `/src/app/components/${componentName}.js`);
  const yamlPath = path.join(process.cwd(), yamlFile);

  if (fs.existsSync(dirPath) && fs.existsSync(yamlPath)) {
    const yamlFileContent = fs.readFileSync(yamlPath, "utf8");
    const componentData = YAML.parse(yamlFileContent).components;
    const props = componentData.find((item) => item.name === componentName);
    const componentProps = props ? props.props : {};
    return componentProps;
  } else {
    console.error(`Component not found: ${dirPath}`);
    return null;
  }
}
