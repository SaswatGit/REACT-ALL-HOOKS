import React, { useState } from 'react'
import './css/UseState.css';

const UseState = () => {

  const [num, setNum] = useState(0);

  function increaseNum(){
    setNum(num+1);
  }
  function decreaseNum(){
    setNum(num-1);
  }
  


  return (
    <div className='usestate'>
      <div className='area'>
        <button className='btn1' onClick={()=> decreaseNum()}>-</button>
        <h1>{num}</h1>
        <button className='btn1' onClick={()=> increaseNum()}>+</button>
      </div>
    </div>
  )
}

export default UseState