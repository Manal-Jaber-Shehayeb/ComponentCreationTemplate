const fs = require('fs');
const path = require('path');

const getEnvData = (jsonFile) =>{

    if(jsonFile){

    // Synchronously read the JSON file
    const jsonFilePath = path.join(process.cwd(), jsonFile);
    const jsonData = fs.readFileSync(jsonFilePath, 'utf8');

    // Parse the JSON data into a JavaScript object
    const data = JSON.parse(jsonData);
    return data;
    }
}

module.exports = {
    getEnvData
}