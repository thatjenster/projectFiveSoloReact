import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login'
import Signout from './Signout'

class Nav extends React.Component {
    constructor(props) {
      super(props);
    }
    render(){
    return(
        <div>
            <nav className="navWrapper">
                <div className="contentContainer">
                    <Link className="navLogo">Travel Memories</Link>
                    <Signout />
                    <Login showLogin={this.props.showLogin} showSignUp={this.props.showSignUp}/>
                </div>
            </nav>
        </div>    
    )
    }
}

export default Nav;