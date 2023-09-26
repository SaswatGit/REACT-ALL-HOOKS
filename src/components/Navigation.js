import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './css/Navigation.css';

const Navigation = () => {
    return (
        <>
            <div className='navigation'>
                <ul>
                    <li>
                        <Link to="/">useState</Link>
                    </li>
                    <li>
                        <Link to="useeffect/">useEffect</Link>
                    </li>
                    <li>
                        <Link to="usecontext/">useContext</Link>
                    </li>
                    <li>
                        <Link to="useref/">useRef</Link>
                    </li>
                    <li>
                        <Link to="usereducer/">useReducer</Link>
                    </li>
                    <li>
                        <Link to="usecallback/">useCallback</Link>
                    </li>
                    <li>
                        <Link to="usememo/">useMemo</Link>
                    </li>
                    <li>
                        <Link to="customhooks/">Custom Hook</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation