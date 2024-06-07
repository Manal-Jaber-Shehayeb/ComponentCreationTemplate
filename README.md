# ComponentCreationTemplate
## 1- component-creation-next-app
is the sample project where we want to utilize components from component library using yaml.
    1.1- Use ```npm install``` to install dependencies
    1.2- Use ```npm run dev``` to run
    1.3- Run ```npm install yaml-component-library-generation```
    1.4- Run ```node node_modules/yaml-component-library-generation/scripts/updatePackageJson.js```
    1.5- Use ```npm run generate-components -- --dataFilePath=data/data.yaml``` to put CustomComponent1 in src/app/components using data from data/data.yaml
    1.6- To get componentsProps use:
    `import { getComponentsNames } from 'yaml-component-library-generation/scripts/getComponentsNames';`
    `const props = getComponentProps(component, 'data/data.yaml' )`
        `return (
            <Component {...props}/>
        )`
## 2- yaml-component-library-generation
is the library/package that accomplish the transfer
## 3- template-component-library
is the place where the template components are.
