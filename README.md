# WTBEI-yaml-storybook-keystatic-integration

## 1- component-creation-next-app
is the sample project where we want to utilize components from component library using yaml.
    1.1- Use ```npm install``` to install dependencies
    1.2- Use ```npm run dev``` to run
    1.3- Run ```npm install yaml-component-library-generation```
        https://www.npmjs.com/package/yaml-component-library-generation
    1.4- Run ```node node_modules/yaml-component-library-generation/scripts/postinstall.js```
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

# Change Log

## version1.0
the yaml library read from the template library and generates components and props based on data.yaml

## updates
- made the src file dynamic according to a config json file
- adapted to the folder structure of the storybook component library: https://github.com/wunderman-thompson/WTBEI-Storybook-Library
- improved file structure in library

## currently working on
- adapting to the structure of the storybook component library: https://github.com/wunderman-thompson/WTBEI-Storybook-Library
- communicating with Sarah and Nizar regarding the naming and structure conventions we will be using
- adapting the yaml file structure as per the one used in keystatic

## next steps
- work on importing schema and inserting in config
- work on preparing a boilerplate file installed from the library to any next project
- work on importing the schema from storybook library and editing config file of keystatic
- check if github has an endpoint where we can import one folder at a time or Maybe we can add an api end point for the component library
- check github register suggested by Souaad and Zhang: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry