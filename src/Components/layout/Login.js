import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return(
        <ul className="right">
            <li><NavLink to ='/journal'>Travel Entry</NavLink></li>
            <li><NavLink to ='/'>Log Out</NavLink></li>
            <li><NavLink to ='/journal' className="btn btn-floating purple">JD</NavLink></li>
        </ul>
    )
}

export default Login;