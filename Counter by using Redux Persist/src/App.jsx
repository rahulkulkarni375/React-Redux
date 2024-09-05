import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminCounterActions, userCounterActions } from "./store/counterSlice.js";


export default function App() {
  const dispatch = useDispatch();
  const adminCounter = useSelector((state) => state.adminSlice.adminCounterValue);
  const userCounter = useSelector((state) => state.userSlice.userCounterValue);

  return (
    <center style={{ margin: "5rem" }}>
      <h3>
        <p>State with persistance</p>
        <button type="button" className="btn btn-lg btn-primary " 
                onClick={() => dispatch(adminCounterActions.decrement())}>-</button>   {" "}
        <span>{adminCounter}</span> {" "}
        <button type="button" class="btn btn-lg btn-primary"
                onClick={() => dispatch(adminCounterActions.increment())}>+</button>   {" "} 
      </h3>
      <h3>
      <p>State without persistance</p>
      <button type="button" className="btn btn-lg btn-primary " 
                onClick={() => dispatch(userCounterActions.decrement())}>-</button>   {" "}
        <span>{userCounter}</span> {" "}
        <button type="button" class="btn btn-lg btn-primary"
                onClick={() => dispatch(userCounterActions.increment())}>+</button>   {" "} 
      </h3>
      <i><b>Note : Refresh the page to see</b></i>
    </center>
  );
}
