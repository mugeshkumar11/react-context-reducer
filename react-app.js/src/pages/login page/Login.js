import React  from "react";
import { useState,useContext} from "react";
import { Link } from "react-router-dom";
import {statecontext} from '../context/Context';

function Login() {
 


const {state, dispatch} = useContext(statecontext)
console.log("staecontext",state);




 

const updateAge = () =>{
dispatch({ type:"increment age"})
}

  return (
   
    <div>
      <Link to={"/header"}>go to header</Link>
      <Link to={"/context"}>go to context</Link>
      <Link to={"/Reduce"}>go to reduce</Link>

      <h1>{state?.age}</h1>
      <button onClick={() =>updateAge()}>Increment age</button>
    </div>
  );
}

export default Login;
