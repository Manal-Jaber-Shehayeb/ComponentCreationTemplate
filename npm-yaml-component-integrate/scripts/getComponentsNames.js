const fs = require("fs");
const path = require("path");

export function getComponentsNames(componentsDirectory) {
  const dirPath = path.join(process.cwd(), componentsDirectory);

  if (fs.existsSync(dirPath)) {
    const components = fs
      .readdirSync(dirPath)
      .filter((file) => file.endsWith(".js"))
      .map((file) => path.parse(file).name);

    const componentsNames = components.map((component) => {
      return component;
    });

    return componentsNames;
  } else {
    console.error(`Directory not found: ${dirPath}`);
    return null;
  }
}
