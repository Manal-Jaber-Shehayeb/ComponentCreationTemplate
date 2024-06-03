const fs = require('fs');
const path = require('path');

const dirPath = path.join(process.cwd(), 'src/app/components');

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, { recursive: true });
  console.log(`Created missing directory: ${dirPath}`);
}
