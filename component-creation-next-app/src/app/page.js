import { loadYaml } from '../../../npm-yaml-component-integrate/index';
import { getComponentsData } from '../../../npm-yaml-component-integrate/scripts/getComponents';

const HomePage = async () => {
  const data = loadYaml('data/data.yaml');
  const componentsData = getComponentsData('/src/app/components', 'data/data.yaml');

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <ul>
        {data.items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <div>
      <h1>Dynamic Components from components library and filled by Yaml</h1>
      {componentsData.map(({ name, props }) => {
        // Dynamically import the component
        const Component = require(`./components/${name}`).default;
        return (
          <div key={name}>
            <h2>{name}</h2>
            <Component {...props} />
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default HomePage;
