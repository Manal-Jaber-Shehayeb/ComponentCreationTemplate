// import { loadYaml } from 'yaml-component-library-generation/index';
// import { getComponentsNames } from 'yaml-component-library-generation/scripts/getComponentsNames';
// import { getComponentProps } from 'yaml-component-library-generation/scripts/getComponentProps';
import { getComponentsNames } from '../../../yaml-component-library-integration';
import { getComponentProps } from '../../../yaml-component-library-integration';

const HomePage = async () => {
  // const data = loadYaml('data/data.yaml'); // Testing loadYaml function
  const componentsNames = getComponentsNames('/src/app/components');
  return (
    <div>
      {/* <h1>{data.name}</h1>
      <p>{data.description}</p>
      <ul>
        {data.items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul> */}
      <div>
      <h1>Dynamic Components from components library and filled by Yaml</h1>
      {componentsNames.length>0 && componentsNames?.map((component) => {
        const props = getComponentProps(component, 'data/data.yaml' )
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
    </div>
  );
};

export default HomePage;
