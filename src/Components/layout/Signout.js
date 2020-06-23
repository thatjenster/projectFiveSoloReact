import React from 'react';
import { NavLink } from 'react-router-dom';

const Signout = () => {
    return(
        <ul className="right">
            <li><NavLink to ='/'>Signup</NavLink></li>
            <li><NavLink to ='/'>LogIn</NavLink></li>
        </ul>
    )
}

export default Signout;