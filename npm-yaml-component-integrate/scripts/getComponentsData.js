const fs = require("fs");
const path = require("path");
const YAML = require("yaml");

export function getComponentsData(componentsDirectory, yamlFile) {
  const dirPath = path.join(process.cwd(), componentsDirectory);
  const yamlPath = path.join(process.cwd(), yamlFile);

  if (fs.existsSync(dirPath) && fs.existsSync(yamlPath)) {
    const components = fs
      .readdirSync(dirPath)
      .filter((file) => file.endsWith(".js"))
      .map((file) => path.parse(file).name);
    const yamlFileContent = fs.readFileSync(yamlPath, "utf8");
    const componentProps = YAML.parse(yamlFileContent).components;

    const componentsData = components.map((component) => {
      const props = componentProps.find((item) => item.name === component);
      return { name: component, props: props ? props.props : {} };
    });

    return componentsData;
  } else {
    console.error(`Directory not found: ${dirPath}`);
    return null;
  }
}
