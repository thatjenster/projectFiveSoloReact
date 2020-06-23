// functional Component b/c there is no state

import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <nav className="navWrapper">
            <div className="contentContainer">
                <Link to='/'>Travel Memories</Link>
            </div>
        </nav>
    )
}

export default Nav;