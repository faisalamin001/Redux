import React, { useState } from "react";
import "./App.css";
import { incNumber, decNumber, addName } from "./action";
import { useSelector, useDispatch } from "react-redux";
function App() {
  let [name, setName] = useState("");
  const mystate = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(typeof mystate);
  const submithandler = () => {
    dispatch(addName(name));
    console.log(mystate.name.name);
    setName("");
  };
  return (
    <div className='App'>
      <h1>Hello Redux</h1>
      <div className='redux-box'>
        <button onClick={() => dispatch(decNumber())}>-</button>
        <h1>{mystate.counter}</h1>
        <button onClick={() => dispatch(incNumber())}>+</button>
      </div>
      <hr />
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={submithandler}>Submit</button>
    </div>
  );
}

export default App;
