import { data } from "@muc/constants";

const App = () => {
  return (
    <div>
      <h1>Hello E-commerce Site</h1>
      {data.map((e) => (
        <h1>{e}</h1>
      ))}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, veritatis?
      </p>
    </div>
  );
};

export default App;
