import { getComponentsNames } from '../../../yaml-component-library-integration';
import { getComponentProps } from '../../../yaml-component-library-integration';
// import

const HomePage = async () => {
  // const data = loadYaml('data/data.yaml'); // Testing loadYaml function
  const componentsNames = getComponentsNames('/src/app/components');
  return (
    <div>
      <h1>Dynamic Components from components library and filled by Yaml</h1>
      {componentsNames.length>0 && componentsNames?.map((component:any) => {
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

    </div>
  );
};

export default HomePage;
