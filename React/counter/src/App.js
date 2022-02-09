import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./components/Counter";
import { Todo } from "./components/Todo";

function App() {
  return (
    <div style={{marginLeft:"30%",width: "40%" }} className="App">
      <h1>React Class Components</h1>
      {/* < Counter title="Counter Using Classes"/> */}
      <Todo />
    </div>
  );
}

export default App;
