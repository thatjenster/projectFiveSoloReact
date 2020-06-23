// functional Component b/c there is no state

import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from './Login'
import Signout from './Signout'

const Nav = () => {
    return(
        <div>
            <nav className="navWrapper">
                <div className="contentContainer">
                    <Link to='/'>Travel Memories</Link>
                    <Login />
                    <Signout />
                </div>
            </nav>
            <Header />
            <Footer />
        </div>    
    )
}

export default Nav;