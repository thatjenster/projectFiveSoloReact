// functional Component b/c there is no state

import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login'
import Signout from './Signout'

const Nav = () => {
    return(
        <div>
            <nav className="navWrapper">
                <div className="contentContainer">
                    <Link to='/' className="navLogo">Travel Memories</Link>
                    <Login />
                    <Signout />
                </div>
            </nav>
        </div>    
    )
}

export default Nav;