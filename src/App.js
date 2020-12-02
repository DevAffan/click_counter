import React , {useState} from 'react';
import './App.css';

function App() {

let [count, setCount] = useState(0)
  return (
    <div>
      <h1>Here is the counter: {count}</h1>

      <button onClick={
        ()=> setCount(count + 1)}>
          Click to React
      </button>
    </div>
  );
}

export default App;
