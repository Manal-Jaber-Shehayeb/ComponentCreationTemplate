const fs = require('fs');
const path = require('path');

// Function to update package.json in the project where this package is installed
function updatePackageJson() {
  // Determine the path to the parent project's package.json
  const projectRoot = path.resolve(process.cwd(), '../../');
  const packageJsonPath = path.join(projectRoot, 'package.json');

  // Read the existing package.json file
  fs.readFile(packageJsonPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading package.json:', err);
      return;
    }

    // Parse the JSON data
    const packageJson = JSON.parse(data);

    // Define the new script you want to add
    const newScriptName = 'generate-components';
    const newScriptCommand = 'node scripts/generateComponents.js';

    // Add or update the script in the package.json
    packageJson.scripts = packageJson.scripts || {};
    packageJson.scripts[newScriptName] = newScriptCommand;

    // Stringify the updated JSON data
    const updatedPackageJson = JSON.stringify(packageJson, null, 2);

    // Write the updated package.json back to disk
    fs.writeFile(packageJsonPath, updatedPackageJson, 'utf8', (err) => {
      if (err) {
        console.error('Error writing package.json:', err);
        return;
      }
      console.log('package.json updated successfully.');
    });
  });
}

// Execute the function
updatePackageJson();
