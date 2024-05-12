import logo from "./logo.svg";
import "./App.css";
const App = () => {
  const x = 5;
  const y = 2;
  return (
    <div>
      <Sum a={x} b={y} />
    </div>
  );
};

const Sum = (props) => {
  console.log(props); // {a: 1, b: 2}

  return <div>The value is: {props.a + props.b}</div>;
};

export default App;
