import React, { useState } from 'react'
import './css/CustomeHook.css';
import useTitleCount from './useTitleCount';

const CustomHooks = () => {

  const [count, setCount] = useState(0);

  useTitleCount(count);

  return (
    <div className='customeHook'>
      <div className='container'>
        <h1 className='count'>{count}</h1>
        <div>
          <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
      </div>
    </div>
  )
}

export default CustomHooks