import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userCounterActions } from "./store/counterSlice.js";


export default function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterSlice.counterValue);

  return (
    <center style={{ margin: "5rem" }}>
      <h3>
        <button type="button" class="btn btn-lg btn-primary " 
                onClick={() => dispatch(userCounterActions.decrement())}>-</button>   {" "}
        
        <span>{counter}</span> {" "}
      
        <button type="button" class="btn btn-lg btn-primary"
                onClick={() => dispatch(userCounterActions.increment())}>+</button>   {" "} 
      </h3>
    </center>
  );
}
