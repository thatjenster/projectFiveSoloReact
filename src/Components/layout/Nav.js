// functional Component b/c there is no state

import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login'
import Signout from './Signout'

const Nav = () => {
    return(
        <nav className="navWrapper">
            <div className="contentContainer">
                <Link to='/'>Travel Memories</Link>
                <Login />
                <Signout />
            </div>
        </nav>
    )
}

export default Nav;