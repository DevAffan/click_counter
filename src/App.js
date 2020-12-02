import React , {useState} from 'react';
import './App.css';


function App() {

let [count, setCount] = useState(0)
let [day , setDay] = useState(false)
  return (
    <div className= { ` c_day ${ day ? 'day'  : ' '} ` }>
      <h3>Here is the counter: {count}</h3>
      <button onClick={
        ()=> setCount(count + 1)}>
          Click to React
      </button>
        <br/>
        <br/>
        <br/>
        <hr/>

      <h2>Good {day ? 'Morning' : 'Night'}</h2>
     
      <button onClick={
        ()=>setDay(!day)
      }>
        Time
      </button>

      <p className='auth'>Created by: AFFAN ALI</p>

      
    </div>
  );
}

export default App;
