import { loadYaml } from '../../lib/loadYaml';

const HomePage = async () => {
  const data = loadYaml('data/data.yaml');

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <ul>
        {data.items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
