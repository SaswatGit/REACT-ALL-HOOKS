import React from 'react'
import { useContext } from 'react';
import { Fname, Lname } from '../UseContext';

const Component2 = () => {
    const firstName = useContext(Fname);
    const lastName = useContext(Lname);
    return (
        <div><h1>My name is {firstName} {lastName}</h1></div>
    )
}

export default Component2