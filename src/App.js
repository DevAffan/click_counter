import React , {useState} from 'react';
import './App.css';


function App() {

let [count, setCount] = useState(0)
  return (
    
    <div class='c_body'>
      <h3>Here is the counter: {count}</h3>
      <button onClick={
        ()=> setCount(count + 1)}>
          Click to React
      </button>
      <p class='auth'>Created by: AFFAN ALI</p>
    </div>
  );
}

export default App;
