import fs from 'fs';
import path from 'path';
import YAML from 'yaml';

export const loadYaml = (filePath) => {
  const fullPath = path.join(process.cwd(), filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return YAML.parse(fileContents);
};
