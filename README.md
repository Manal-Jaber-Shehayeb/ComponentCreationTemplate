# WTBEI-yaml-storybook-keystatic-integration

## 1- component-creation-next-app
is the sample project where we want to utilize components from component library using yaml.
    1.1- Use ```npm install``` to install dependencies
    1.2- Use ```npm run dev``` to run
## 2- yaml-component-library-integration:
is a library/package that copies components from a library to your project using a yaml file

To use this library in your Nextjs project:

2.1- Install the library from: https://www.npmjs.com/package/yaml-component-library-integration

    npm install yaml-component-library-integration

2.2- Run postinstall.js script. This will adjust two things in your project:
- The `package.json` will be updated with a custom script generate-components
- The `yaml-config.json` and `components.yaml` files will be added to your root folder

        node node_modules/yaml-component-library-integration/scripts/postinstall.js

2.3- Adjust the paths of `yaml-config.json` and component names you need in `components.yaml` added to the root of your project.

2.4- To copy the components mentioned in the yaml file from the libray to the destination in your project, use:

    npm run generate-components

2.5- To get componentsProps use:

    import { getComponentProps } from 'yaml-component-library-integration';

    const props = getComponentProps(component)
    Component {...props}/>

**Note that:** you can use a custom function `getComponentNames` made to help import component names dynamically which might be helpful

    import { getComponentsNames, getComponentProps } from 'yaml-component-library-integration';
    const componentsNames = getComponentsNames('/src/app/components');
    {componentsNames.length>0 && componentsNames?.map((component) => {
        const props = getComponentProps(component )
        // Dynamically import the component
        const Component = require(`./components/${component}`)?.default;
        return (
          <div key={component}>
            <h2>{component}</h2>
            <Component {...props}/>
          </div>
        );
      })}
## 3- template-component-library
is the place where the template components are.

# Change Log

## version1.0
the yaml library read from the template library and generates components and props based on data.yaml

## updates
- made the src file dynamic according to a config json file
- adapted to the folder structure of the storybook component library: https://github.com/wunderman-thompson/WTBEI-Storybook-Library
- improved file structure in library
- adapted to the structure of the storybook component library: https://github.com/wunderman-thompson/WTBEI-Storybook-Library
- communicated with Sarah and Nizar regarding the naming and structure conventions we will be using
- adapted the yaml file structure as per the one used in keystatic

## currently working on
- work on integrating keystatic into the library
- work on importing schema and inserting in config

## next steps
- work on importing schema and inserting in config
- work on preparing a boilerplate file installed from the library to any next project
- work on importing the schema from storybook library and editing config file of keystatic
- check if github has an endpoint where we can import one folder at a time or Maybe we can add an api end point for the component library
- check github register suggested by Souaad and Zhang: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry