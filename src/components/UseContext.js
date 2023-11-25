import React from 'react'
import { useState, createContext } from 'react'
import Component1 from './componentsforuseContextHook/Component1';

const Fname = createContext();
const Lname = createContext();

const UseContext = () => {
  const [fname, setFname] = useState("Ravi");
  const [lname, setLname] = useState("Kumar");
  return (
    <Fname.Provider value={fname}>
      <Lname.Provider value={lname}>
      <Component1 />
      </Lname.Provider>
    </Fname.Provider>
  )
}

export default UseContext
export { Fname, Lname };