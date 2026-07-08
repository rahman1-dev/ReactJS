import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <div className="box">
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={increment}>Count++</button>
      <button onClick={decrement}>Count--</button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
