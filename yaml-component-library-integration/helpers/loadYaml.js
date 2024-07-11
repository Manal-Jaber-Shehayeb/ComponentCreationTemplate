const fs = require('fs');
const path = require('path');
const YAML = require('yaml');

const loadYaml = (filePath) => {
  const fullPath = path.join(process.cwd(), filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return YAML.parse(fileContents);
};
module.exports = {
  loadYaml
}