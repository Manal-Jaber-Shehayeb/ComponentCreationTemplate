# yaml-component-library-integration:
is a library/package that copies components from a library to your project using a yaml file

To use this library in your Nextjs project:

1- Install the library from: https://www.npmjs.com/package/yaml-component-library-integration

    npm install yaml-component-library-integration

2- Run postinstall.js script. This will adjust two things in your project:
- The `package.json` will be updated with a custom script generate-components
- The `yaml-config.json` and `components.yaml` files will be added to your root folder

        node node_modules/yaml-component-library-integration/scripts/postinstall.js

3- Adjust the paths of `yaml-config.json` and component names you need in `components.yaml` added to the root of your project.

4- To copy the components mentioned in the yaml file from the libray to the destination in your project, use:

    npm run generate-components

5- To get componentsProps use:

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