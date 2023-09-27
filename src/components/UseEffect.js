import React, { useEffect, useState } from 'react'
import './css/UseEffect.css';

const UseEffect = () => {

  const [count, setCount] = useState(0);

  useEffect(()=>{
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  });

  return (
    <div className='useeffect'>
      <h1>{count} sec</h1>
    </div>
  )
}

export default UseEffect