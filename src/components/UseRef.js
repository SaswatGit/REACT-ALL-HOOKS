import React, { useEffect, useRef, useState } from 'react'
import './css/UseRef.css';

const UseRef = () => {

  const [input, setInput] = useState("");

  const count = useRef(0);

  const h1Ref = useRef();


  useEffect(() => {
    count.current = count.current + 1;
    if (count.current % 2 == 0) {
      h1Ref.current.style.color = "Red";
    }
    else if (count.current % 3 == 0) {
      h1Ref.current.style.color = "Green";
    }
    else if (count.current % 5 == 0) {
      h1Ref.current.style.color = "Blue";
    } else {
      h1Ref.current.style.color = "White";
    }
  }, [input]);

  return (
    <div className='useref'>
      <div className='box'>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
        <h1 ref={h1Ref}>{count.current}</h1>
      </div>
    </div>
  )
}

export default UseRef