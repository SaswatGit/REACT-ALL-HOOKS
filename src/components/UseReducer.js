import React, { useReducer } from 'react'
import './css/UseReducer.css';

const reducer = (state, action) =>{
  if(action.type === "INCREMENT"){
    return state + 1;
  }
  if(action.type === "DECREMENT"){
    return state - 1;
  }
  return state;
}

const UseReducer = () => {
  
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div className='usestate'>
      <div className='area'>
        <button className='btn' onClick={() => dispatch({type: "DECREMENT"})} >-</button>
        <h1>{state}</h1>
        <button className='btn' onClick={() => dispatch({type: "INCREMENT"})} >+</button>
      </div>
    </div>
  )
}

export default UseReducer